<template>
    <div  class="animated fadeIn">
       <b-row>
        <b-col lg="12">

            <b-card class="card-de1">

        <div class="panel-title-de1">
          <Div>
  <h4>SalaryLevel</h4>
      <b-button id="btnAdd" @click="AddRow" class="btn-pill mr-1" variant="default" size="sm">
                 Add <i class="icon-plus"></i>
               </b-button>
           <b-button id="btnFilter" @click="collapse" class="btn-pill" variant="default" size="sm">
                 <i class="fa fa-filter"></i>Search
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
          </Div>
              <Div class="ml-auto">
               <b-button class="btn-pill btn-outline ml-1" variant="outline-default" size="sm">
                 Print <i class="cui-print icons"></i>
               </b-button>
               <b-button class="btn-pill ml-1" variant="outline-default" size="sm">
                 Export <i class="icon-arrow-down-circle icons"></i>
               </b-button>
           </Div>
             </div>
                      <div class="function-list mb-2">
             <div class="func-t">
                <ul class="search">
                <li v-if="salarygroupId!=''">
                    <span> SalaryGroup: {{nameSalaryGroup}}</span>
                    <i class="fa fa-times" aria-hidden="true" @click="removeSearch('SalaryGroup')"></i>
                </li>
                <li v-if="Code!=''">

                    <span> Code: {{Code}}</span>
                    <i class="fa fa-times" aria-hidden="true" @click="removeSearch('code')"></i>
                </li>
                <li v-if="Name!=''">
                    <span>Name: {{Name}}</span>
                    <i class="fa fa-times" aria-hidden="true" @click="removeSearch('name')"></i>
                </li>
                <li v-if="Active!=''">
                    <span>  Actflg: {{(Active)}}</span>
                    <i class="fa fa-times" aria-hidden="true" @click="removeSearch('active')"></i>
                </li>
            </ul>

             </div>

           </div>
            <b-collapse id="collapse2" :visible="collapsed">
                <b-card class="mb-2">
                    <div class="form-row">
                        <div class="col-md-2 mb-3">
                            <label class="label-custom" for="cboSalaryGroup">SalaryGroup</label>
                            <select id="cboSalaryGroup" class="form-control" v-model="salarygroupId" v-on:change="onChange($event)">
                                <option></option>
                                <option v-for="i in salarygrouptbllist" :value="i.id" :key="i.id">{{i.name}}</option>
                            </select>
                        </div>
                        <div class="col-md-2 mb-3">
                            <label class="label-custom" for="txtCode">Code</label>
                            <input id="txtCode" class="form-control" type="text" v-model="Code" />
                        </div>
                        <div class="col-md-2 mb-3">
                            <label class="label-custom" for="txtName">Name</label>
                            <input id="txtName" class="form-control" type="text" v-model="Name" />
                        </div>
                        <div class="col-md-2 mb-3">
                            <label class="label-custom" for="cboActflg">Actflg</label>
                            <select id="cboActflg" class="form-control" v-model="Active">
                                <option></option>
                                <option value="A">A</option>
                                <option value="I">I</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-nation text-left">
                        <button id="btnSearch" class="btn btn-custom btn-success" @click="Search($event)">
                            <i class="fa fa-search" aria-hidden="true" />
                            <span>Search</span>
                            <b-tooltip target="btnSearch" :title="('Filter')" />
                        </button>
                    </div>
                </b-card>

            </b-collapse>

        <div class="tbl-de">
        <v-client-table class="table-custom tbl-nosearch" ref="tblCity" :columns="columns" :options="options" :data="dataTable">
            <template slot="selected" slot-scope="props">
                <input id="chkSelected" v-model="props.row.selected" type="checkbox" @click="CheckCheckBox(props.row)">
            </template>
            <template slot="id" slot-scope="props">
                <input id="txtID" v-model="props.row.id" type="text" v-bind:ref="props.row.id+'*id'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.id}} </label>
            </template>
            <template slot="salarygroupId" slot-scope="props">
                <select id="cbosalarygroupId" :class="CheckClassReadOrEdit(props.row.groupId,props.row.readOrEdit,state)"
                        v-model="props.row.groupId" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)">
                    <option value="" disabled selected hidden v-if="CheckIfOption(props.row.groupId,props.row.readOrEdit,state)">
                        {{SalaryGroupRequired}}
                    </option>
                    <option v-for="or in salarygrouptbllist" :value="or.id" :key="or.id">{{or.name}}   </option>
                </select>
                <label v-for="i in salarygrouptbllist" :key="i.id" v-if="CheckDisPlayTypeLabelWhenEdit(props.row.group==null? props.row.groupId:props.row.group.id,i.id,props.row.readOrEdit)&&CheckIfReadOrEditForLable(props.row.readOrEdit)">
                    {{i.name}}
                </label>
            </template>
            <template slot="code" slot-scope="props">
                <input id="txtCode" :class="CheckClassReadOrEdit(props.row.code,props.row.readOrEdit,state)"
                       v-model="props.row.code" type="text" v-bind:ref="props.row.id+'*code'" v-if="CheckIfOnlyAdd(props.row.readOrEdit)" />
                <label v-if="CheckIfOnlyAddHide(props.row.readOrEdit)">{{props.row.code}} </label>
            </template>
            <template slot="name" slot-scope="props">
                <input id="txtName" :class="CheckClassReadOrEdit(props.row.groupId,props.row.readOrEdit,state)"
                       v-model="props.row.name" v-bind:ref="props.row.id+'*name'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.name}} </label>
            </template>

            <template slot="order" slot-scope="props">
                <input id="txtOrder" :class="CheckClassReadOrEdit(props.row.order,props.row.readOrEdit,state)" type="number"
                       v-model="props.row.order" v-bind:ref="props.row.id+'*order'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.order}} </label>
            </template>
            <template slot="remark" slot-scope="props">
                <input id="txtremark" :class="CheckClassReadOrEdit(props.row.remark,props.row.readOrEdit,state)"
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
import { Component, Prop } from "vue-property-decorator";
import { bus } from "../../main";
import _ from "lodash";
export default {
    name: "Salarylevel",
  components: {
  },
data(){
    return{
      dataTable:[
        {selected:false,code:'NM0',salarygroupId:'Bậc I',order:10,name:'Bậc I',actflg:'Áp dụng',readOrEdit:null},
          {selected:false,code:'NM0',salarygroupId:'Bậc I',order:10,name:'Bậc I',actflg:'Áp dụng',readOrEdit:null},
            {selected:false,code:'NM0',salarygroupId:'Bậc I',order:10,name:'Bậc I',actflg:'Áp dụng',readOrEdit:null},
              {selected:false,code:'NM0',salarygroupId:'Bậc I',order:10,name:'Bậc I',actflg:'Áp dụng',readOrEdit:null},
                {selected:false,code:'NM0',salarygroupId:'Bậc I',order:10,name:'Bậc I',actflg:'Áp dụng',readOrEdit:null},
                  {selected:false,code:'NM0',salarygroupId:'Bậc I',order:10,name:'Bậc I',actflg:'Áp dụng',readOrEdit:null},
                    {selected:false,code:'NM0',salarygroupId:'Bậc I',order:10,name:'Bậc I',actflg:'Áp dụng',readOrEdit:null},
      ],
           data: [],
      checked: false,
      columns: [
        "selected",
        "code",
        "salarygroupId",
        "order",
        "name",
        "actflg",
        "act"
      ],
      options: {
        filterable: true,
        sortable: ["name", "code", "salarygroupId", "order", "actflg"],
        columnsClasses: {
          selected: "col-check-box",
          code: "col-code",
          name: "col-name",
          nationId: "col-nation",
          actflg: "col-status",
          act: "col-action"
        },
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
          order: function(h) {
            return ("Order");
          },
          actflg: function(h) {
            return ("Actflg");
          },
          act: function(h) {
            return ("Act");
          },
          groupId: function(h) {
            return ("SalaryGroup");
          }
        }
      },
salarygrouptbllist:[],
  checked: false,
  state:  false,
  collapsed: false,
  Code:  "",
  Order:  null,
  Name:  "",
  Remark:  "",
  Active:  "",
  salarygroupId:  "",
  nameSalaryGroup:  "",
    };
},
methods:{
   CheckIfOnlyAdd: function (roe) {
            return (_.isEqual(roe, 'add'))
        },
         CheckIfOnlyAddHide: function (roe) {
            return (!_.isEqual(roe, 'add'))
        },
        CheckClassReadOrEdit: function (ele, roe, state) {
            if (_.isEqual(ele, "") && (_.isEqual(roe, 'add') || _.isEqual(roe, 'edit')) && state) {
                return 'is-invalid form-control';
            }
            return 'form-control';
        },
        CheckIfReadOrEditForLable: function (roe) {
            return ((!_.isEqual(roe, 'add')) && (!_.isEqual(roe, 'edit')))
        },
        CheckIfReadOrEditForInput: function (roe) {
            return (_.isEqual(roe, 'add') || _.isEqual(roe, 'edit'));
        },
onChange(evt) {
    this.salarygrouptbllist.forEach((key, value) => {
      if (_.isEqual(this.salarygroupId, key.id))
        this.nameSalaryGroup = key.name;
    });
  },
  display(evt) {
    return (evt);
  },
 AddRow() {
    let length = ((this.$refs.tblCity ).tableData ).length;
    for (let i = 0; i < length; i++) {
      let op = (this.$refs.tblCity).tableData[i] ;
      if (_.isEqual(op.readOrEdit, "add") || _.isEqual(op.readOrEdit, "edit"))
        return;
    }
    if (_.isEqual(length, 0)) {
      let t = new SalaryLevel();
      t.readOrEdit = "add";
      t.code = "";
      t.name = "";
      t.groupId = "";
      t.order = null;
      t.actflg = "A";
      ((this.$refs.tblCity).data).push(t);
      (this.$refs.tblCity).count = 1;
    } else {
      ((this.$refs.tblCity).tableData).unshift({
        code: "",
        name: "",
        groupId: "",
        order: "",
        remark: "",
        id: "",
        actflg: "A",
        readOrEdit: "add"
      });
    }
  },
 selectAll(checked) {
    (this.$refs.tblCity).tableData.forEach((key, value) => {
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
     console.log('aa');
    let length = ((this.$refs.tblCity).tableData).length;
    for (let i = 0; i < length; i++) {
      let op = (this.$refs.tblCity).tableData[i];
      if (_.isEqual(op.readOrEdit, "add") || _.isEqual(op.readOrEdit, "edit"))
        return;
    }
    ot.readOrEdit = "edit";
    (this.$refs.tblCity).tableData.forEach(function(key, value) {
      if (!_.isEqual(ot.id, key.id)) {
        key.selected = false;
        key.readOrEdit = null;
      }
    });
  },
  async agree(ot) {
    if (_.isEqual(ot.readOrEdit, "add")) {
      this.state = true;

    } else if (_.isEqual(ot.readOrEdit, "edit")) {
      this.state = true;

    }
  },
 async denny(ot) {
    ot.readOrEdit = null;
    this.state = false;
    this.checked = false;
  },
  async Apply() {

  },
  async Denny() {

  },
  CheckCheckBox(evt) {
    let length = ((this.$refs.tblCity).tableData).length;
    if (!evt.selected) {
      this.checked = true;
      return;
    }
    for (let i = 0; i < length; i++) {
      let ot = (this.$refs.tblCity).tableData[i];
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
  async Delete() {
  },
  collapse() {
    this.collapsed = !this.collapsed;
  },
  removeSearch(filter) {
    if (_.isEqual(filter, "SalaryGroup")) {
      this.salarygroupId = "";
      this.Search(null);
    } else if (_.isEqual(filter, "code")) {
      this.Code = "";
      this.Search(null);
    } else if (_.isEqual(filter, "name")) {
      this.Name = "";
      this.Search(null);
    } else if (_.isEqual(filter, "active")) {
      this.Active = "";
      this.Search(null);
    } else if (_.isEqual(filter, "remark")) {
      this.Remark = "";
      this.Search(null);
    }
  }
}
}
</script>
