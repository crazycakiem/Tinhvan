<template>
<div class="animated fadeIn">
  <b-row>
    <b-col lg="12">
      <b-card class="card-de1">

        <div class="panel-title-de1">
          <div>
            <h4>SalaryGroup</h4>
            <b-button id="btnAdd" @click="AddRow" class="btn-pill mr-1" variant="default" size="sm">
              Add <i class="icon-plus"></i>
            </b-button>
            <b-button id="btnFilter" @click="collapse" class="btn-pill" variant="default" size="sm">
              <i class="fa fa-filter"></i> Search
            </b-button>
            <b-button id="btnApply" @click="Apply" v-if="checked" class="btn-pill mr-1" variant="outline-primary" size="sm">
              <i class="fa fa-unlock-alt" aria-hidden="true" /> A
            </b-button>
            <b-button id="btnDenny" @click="Denny" v-if="checked" class="btn-pill mr-1" variant="outline-primary" size="sm">
              <i class="fa fa-lock" aria-hidden="true" /> I
            </b-button>
            <b-button id="btnDelete" @click="Delete" v-if="checked" class="btn-pill mr-1" variant="outline-primary" size="sm">
              <i class="fa fa-trash" aria-hidden="true" /> D
            </b-button>
          </div>
          <div class="ml-auto">

            <b-button class="btn-pill btn-outline ml-1" variant="outline-default" size="sm">
              Print <i class="cui-print icons"></i>
            </b-button>
            <b-button class="btn-pill ml-1" variant="outline-default" size="sm">
              Export <i class="icon-arrow-down-circle icons"></i>
            </b-button>
          </div>

        </div>
        <div class="function-list mb-2">
          <div class="func-t">
            <ul class="search">
              <li v-if="Code!=''">
                <span>Code: {{Code}}</span>
                <i class="fa fa-times" aria-hidden="true" @click="removeSearch('code')"></i>
              </li>
              <li v-if="Name!=''">
                <span>Name: {{Name}}</span>
                <i class="fa fa-times" aria-hidden="true" @click="removeSearch('name')"></i>
              </li>
              <li v-if="IsBonus!=null || IsBonus==false">
                <span>IsBonus: {{IsBonus}}</span>
                <i class="fa fa-times" aria-hidden="true" @click="removeSearch('isBonus')"></i>
              </li>
              <li v-if="EffectDate!=''">
                <span>EffectDate: {{EffectDate}}</span>
                <i class="fa fa-times" aria-hidden="true" @click="removeSearch('effectDate')"></i>
              </li>
              <li v-if="Active!=''">
                <span>Actflg: {{(Active)}}</span>
                <i class="fa fa-times" aria-hidden="true" @click="removeSearch('active')"></i>
              </li>
            </ul>
          </div>

        </div>
        <b-collapse id="collapse2" :visible="collapsed">
         <div class="filter-box show-filter-box">
          <b-card>
            <h4 class="title-box">Tìm kiếm</h4>
            <div class="form-row">
              <div class="col-md-2 mb-1">
                <input id="txtCode" class="custom-input-style1" type="text" v-model="Code" placeholder="Code" />
              </div>
              <div class="col-md-2 mb-1">
                <input id="txtName" class="custom-input-style1" type="text" v-model="Name" placeholder="Name" />
              </div>
              <div class="col-md-2 mb-1">
                <input id="dtpeffectDate" class="custom-input-style1" type="date" v-model="EffectDate" placeholder="Date" />
              </div>
              <div class="col-md-2 mb-1">
                <div class="custom-slbox">
                 <b-form-select id="cboActflg"
                   class="sl-tv-style1"
                   :plain="true"
                   :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                   value="Please select"
                   v-model="Active">
                 </b-form-select>
                </div>
              </div>
              <div class="col-md-1 mb-1">
               <div class="check-items">
                 <b-form-checkbox id="exampleChecks" v-model="IsBonus">IsBonus</b-form-checkbox>
               </div>
              </div>
            </div>
            <div class="form-nation text-left mt-3">
              <button id="btnSearch" class="btn btn-custom btn-success" @click="Search($event)">
                  <i class="fa fa-search" aria-hidden="true" />
                  <span>Search</span>
                  <b-tooltip target="btnSearch" :title="('Filter')" />
              </button>
            </div>
          </b-card>
         </div>

        </b-collapse>

        <div class="tbl-de">
          <v-client-table class="table-custom tbl-nosearch" ref="tblSalaryGroup" :columns="columns" :options="options" :data="dataTable">
            <template slot="selected" slot-scope="props">
               <div class="check-items">
                <b-form-checkbox v-model="props.row.selected" type="checkbox" @click="CheckCheckBox(props.row)"> &nbsp;</b-form-checkbox>
               </div>
            </template>
            <template slot="id" slot-scope="props">
                <input id="txtID" v-model="props.row.id" type="text" v-bind:ref="props.row.id+'*id'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.id}} </label>
            </template>
            <template slot="nationId" slot-scope="props">
                <label v-for="i in nationlist" :key="i.id" v-if="CheckDisPlayTypeLabelWhenEdit(props.row.nationId,i.id,props.row.readOrEdit)">
                    {{i.name}}
                </label>
            </template>
            <template slot="code" slot-scope="props">
                <input placeholder="Nhập Code" class="custom-input-style1 my-3" id="txtCode" :class="CheckClassReadOrEdit(props.row.code,props.row.readOrEdit,state)"
                       v-model="props.row.code" type="text" v-bind:ref="props.row.id+'*code'" v-if="CheckIfOnlyAdd(props.row.readOrEdit)" />
                <label v-if="CheckIfOnlyAddHide(props.row.readOrEdit)">{{props.row.code}} </label>
            </template>
            <template slot="name" slot-scope="props">
                <input placeholder="Nhập Tên" class="custom-input-style1 my-3" id="txtName" :class="CheckClassReadOrEdit(props.row.name,props.row.readOrEdit,state)"
                       v-model="props.row.name" v-bind:ref="props.row.id+'*name'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.name}} </label>
            </template>
            <template slot="effectDate" slot-scope="props">
                <input class="custom-input-style1 my-3" id="dtpeffectDate" type="date" :class="CheckClassReadOrEdit(props.row.effectDate,props.row.readOrEdit,state)"
                       v-model="date2" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" :ref="'dtpeffectDate'" />
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.effectDate}}</label>
            </template>
            <template slot="order" slot-scope="props">
                <input placeholder="Nhập Order" class="custom-input-style1 my-3" id="nmbOrder" :class="CheckClassReadOrEdit(props.row.order,props.row.readOrEdit,state)" type="number"
                       v-model="props.row.order" v-bind:ref="props.row.id+'*order'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.order}} </label>
            </template>
            <template slot="isBonus" slot-scope="props">
                <!-- <input id="chkIsBonus" type="checkbox" :class="CheckClassReadOrEdit(props.row.isBonus,props.row.readOrEdit,state)"
                        v-model="props.row.isBonus" v-bind:ref="props.row.id+'*isBonus'" :disabled="!CheckIfReadOrEditForInput(props.row.readOrEdit)" /> -->
                <div class="check-items center-in-table">
                 <b-form-checkbox id="chkIsBonus" :class="CheckClassReadOrEdit(props.row.isBonus,props.row.readOrEdit,state)" v-model="props.row.isBonus" v-bind:ref="props.row.id+'*isBonus'" :disabled="!CheckIfReadOrEditForInput(props.row.readOrEdit)"> &nbsp;</b-form-checkbox>
                 <!-- <input id="chkIsBonus" type="checkbox" :class="CheckClassReadOrEdit(props.row.isBonus,props.row.readOrEdit,state)"
                        v-model="props.row.isBonus" v-bind:ref="props.row.id+'*isBonus'" :disabled="!CheckIfReadOrEditForInput(props.row.readOrEdit)" /> -->
                </div>
            </template>
            <template slot="remark" slot-scope="props">
                <input placeholder="Nhập Remark" class="custom-input-style1 my-3" id="txtremark" :class="CheckClassReadOrEdit(props.row.remark,props.row.readOrEdit,state)"
                       v-model="props.row.remark" v-bind:ref="props.row.id+'*remark'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.remark}} </label>
            </template>
            <template slot="actflg" slot-scope="props">
                <label>{{display(props.row.actflg)}} </label>
            </template>
            <div slot="act" slot-scope="props">
              <button id="btnShowEdit" class="btn  btn-custom" type="button" @click="showEdit(props.row)" v-if="props.row.readOrEdit==null" v-bind:ref="props.row.id+'*showEdit'">
                    <span class="fa fa-edit" />
                </button>
              <button id="btnAgree" class="btn  btn-custom" type="button" @click="agree(props.row)" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" v-bind:ref="props.row.id+'*agree'">
                    <span class="fa fa-check" />
                </button>
              <button id="btnDenny" class="btn  btn-custom" @click="denny(props.row)" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" v-bind:ref="props.row.id+'*denny'">
                    <span class="fa fa-close" />
                </button>
            </div>
          </v-client-table>
        </div>
      </b-card>
    </b-col>
  </b-row>
</div>
</template>
<script>
import Vue from "vue";
import {
  Component,
  Prop
} from "vue-property-decorator";
import {
  bus
} from "../../main";
import _ from "lodash";
export default {
  name: "Salarygroup",
  components: {},
  data() {
    return {
      state: false,
      dataTable: [{
          select: false,
          code: 'BAC1',
          name: 'Bậc 1',
          effectDate: '17/1/2019',
          isBonus: false,
          order: 1,
          remark: 'Đánh dấu',
          actflg: 'Áp dụng',
          readOrEdit: null
        },
        {
          select: false,
          code: 'BAC1',
          name: 'Bậc 1',
          effectDate: '17/1/2019',
          isBonus: false,
          order: 1,
          remark: 'Đánh dấu',
          actflg: 'Áp dụng',
          readOrEdit: null
        },
        {
          select: false,
          code: 'BAC1',
          name: 'Bậc 1',
          effectDate: '17/1/2019',
          isBonus: false,
          order: 1,
          remark: 'Đánh dấu',
          actflg: 'Áp dụng',
          readOrEdit: null
        },
        {
          select: false,
          code: 'BAC1',
          name: 'Bậc 1',
          effectDate: '17/1/2019',
          isBonus: false,
          order: 1,
          remark: 'Đánh dấu',
          actflg: 'Áp dụng',
          readOrEdit: null
        },
        {
          select: false,
          code: 'BAC1',
          name: 'Bậc 1',
          effectDate: '17/1/2019',
          isBonus: false,
          order: 1,
          remark: 'Đánh dấu',
          actflg: 'Áp dụng',
          readOrEdit: null
        },
        {
          select: false,
          code: 'BAC1',
          name: 'Bậc 1',
          effectDate: '17/1/2019',
          isBonus: false,
          order: 1,
          remark: 'Đánh dấu',
          actflg: 'Áp dụng',
          readOrEdit: null
        },
        {
          select: false,
          code: 'BAC1',
          name: 'Bậc 1',
          effectDate: '17/1/2019',
          isBonus: false,
          order: 1,
          remark: 'Đánh dấu',
          actflg: 'Áp dụng',
          readOrEdit: null
        },
        {
          select: false,
          code: 'BAC1',
          name: 'Bậc 1',
          effectDate: '17/1/2019',
          isBonus: false,
          order: 1,
          remark: 'Đánh dấu',
          actflg: 'Áp dụng',
          readOrEdit: null
        }
      ],
      Code: '',
      Name: '',
      IsBonus: '',
      EffectDate: '',
      Active: '',
      collapsed: false,
      date2: "",
      myDate: new Date("2011-04-11T10:20:30Z"),
      data: [],
      checked: false,
      columns: [
        "selected",
        "code",
        "name",
        "effectDate",
        "isBonus",
        "order",
        "remark",
        "actflg",
        "act"
      ],
      options: {
        filterable: true,
        sortable: [
          "name",
          "code",
          "effectDate",
          "isBonus",
          "order",
          "remark",
          "actflg"
        ],
        headings: {
          selected: function(h) {
            return h("input", {
              attrs: {
                type: "checkbox",
                id: "selectAllCheckbox"
              },
              on: {
                click: e => {
                  this.selectAll(e.srcElement.checked);
                }
              },
              ref: "selectAllCheckbox"
            });
          },
          code: function(h) {
            return ("Code");
          },
          name: function(h) {
            return ("Name");
          },
          effectDate: function(h) {
            return ("EffectDate");
          },
          isBonus: function(h) {
            return ("IsBonus");
          },
          order: function(h) {
            return ("Order");
          },
          actflg: function(h) {
            return ("Actflg");
          },
          act: function(h) {
            return ("Act");
          }
        }
      }
    };
  },
  methods: {
    CheckIfOnlyAdd: function(roe) {
      return (_.isEqual(roe, 'add'))
    },
    CheckIfOnlyAddHide: function(roe) {
      return (!_.isEqual(roe, 'add'))
    },
    CheckClassReadOrEdit: function(ele, roe, state) {
      if (_.isEqual(ele, "") && (_.isEqual(roe, 'add') || _.isEqual(roe, 'edit')) && state) {
        return 'is-invalid form-control';
      }
      return 'form-control';
    },
    CheckIfReadOrEditForLable: function(roe) {
      return ((!_.isEqual(roe, 'add')) && (!_.isEqual(roe, 'edit')))
    },
    CheckIfReadOrEditForInput: function(roe) {
      return (_.isEqual(roe, 'add') || _.isEqual(roe, 'edit'));
    },
    display(evt) {
      return (evt);
    },
    AddRow() {
      let length = ((this.$refs.tblSalaryGroup).tableData).length;
      for (let i = 0; i < length; i++) {
        let op = (this.$refs.tblSalaryGroup).tableData[i];
        if (_.isEqual(op.readOrEdit, "add") || _.isEqual(op.readOrEdit, "edit"))
          return;
      }
      if (_.isEqual(length, 0)) {
        ((this.$refs.tblSalaryGroup).data).push({
          select: false,
          name: '',
          code: '',
          effectDate: '',
          readOrEdit: 'add'
        });
        (this.$refs.tblSalaryGroup).count = 1;
      } else {
        ((this.$refs.tblSalaryGroup).tableData).unshift({
          code: "",
          name: "",
          effectDate: "",
          isBonus: null,
          order: null,
          remark: "",
          id: "",
          actflg: "A",
          readOrEdit: "add"
        });
      }
    },
    selectAll(checked) {
      (this.$refs.tblSalaryGroup).tableData.forEach((key, value) => {
        if (checked) {
          {
            key.selected = true;
            this.checked = true;
          }
        } else {
          key.selected = false;
          this.checked = false;
        }
      });
    },
    showEdit(ot) {
      debugger;
      let length = ((this.$refs.tblSalaryGroup).tableData).length;
      for (let i = 0; i < length; i++) {
        let op = (this.$refs.tblSalaryGroup).tableData[i];
        if (_.isEqual(op.readOrEdit, "add") || _.isEqual(op.readOrEdit, "edit"))
          return;
      }
      ot.readOrEdit = "edit";
      (this.$refs.tblSalaryGroup).tableData.forEach(function(
        key,
        value
      ) {
        if (!_.isEqual(ot.id, key.id)) {
          key.selected = false;
          key.readOrEdit = null;
        } else {
          key.readOrEdit = "edit";
        }
      });
    },
    agree(ot) {},
    async denny(ot) {
      ot.readOrEdit = null;
      this.state = false;
      this.checked = false;
    },
    async Apply() {},
    async Denny() {},
    CheckCheckBox(evt) {
      let length = ((this.$refs.tblSalaryGroup).tableData).length;
      if (!evt.selected) {
        this.checked = true;
        return;
      }
      for (let i = 0; i < length; i++) {
        let ot = (this.$refs.tblSalaryGroup).tableData[i];
        if (!_.isEqual(ot.id, evt.id)) {
          if (ot.selected) {
            this.checked = true;
            return;
          }
        } else {
          this.checked = false;
        }
      }
    },
    Search(evt) {
      this.collapsed = false;
    },
    async Delete() {},
    collapse() {
      this.collapsed = !this.collapsed;
    },
    removeSearch(filter) {
      if (_.isEqual(filter, "code")) {
        this.Code = "";
        this.Search(null);
      } else if (_.isEqual(filter, "name")) {
        this.Name = "";
        this.Search(null);
      } else if (_.isEqual(filter, "isBonus")) {
        this.IsBonus = null;
        this.Search(null);
      } else if (_.isEqual(filter, "effectDate")) {
        this.EffectDate = "";
        this.Search(null);
      } else if (_.isEqual(filter, "active")) {
        this.Active = "";
        this.Search(null);
      } else if (_.isEqual(filter, "remark")) {
        this.Remark = "";
        this.Search(null);
      }
    }
  },
  computed: {
    vl: {
      get() {
        return this.date2;
      },
      set(newVal) {
        this.value = this.date2;
      }
    }
  },
}
</script>
