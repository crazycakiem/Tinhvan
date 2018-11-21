<template>
    <div  class="animated fadeIn">
     <b-row>
     <b-col lg="12">
<<<<<<< HEAD
        <b-card class="card-de1">
=======
        <b-card class="card-de1"> 
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
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
<<<<<<< HEAD
            <div class="ml-auto">
=======
            <Div class="ml-auto">
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
               <b-button class="btn-pill btn-outline ml-1" variant="outline-default" size="sm">
                 Print <i class="cui-print icons"></i>
               </b-button>
               <b-button class="btn-pill ml-1" variant="outline-default" size="sm">
                 Export <i class="icon-arrow-down-circle icons"></i>
               </b-button>
<<<<<<< HEAD
           </div>
=======
           </Div>
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
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
<<<<<<< HEAD
             </div>
=======
             </div>             
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
           </div>
            <b-collapse id="collapse2" :visible="collapsed">
                <b-card class="mb-2">
                    <div class="form-row">
                        <div class="col-md-2 mb-3">
                            <label class="label-custom" for="txtCode">Code</label>
                            <input id="txtCode" class="form-control" type="text" v-model="Code" />
                        </div>
                        <div class="col-md-2 mb-3">
                            <label class="label-custom" for="txtName">Name</label>
                            <input id="txtName" class="form-control" type="text" v-model="Name" />
                        </div>
                        <div class="col-md-2 mb-3">
                            <label class="label-custom" for="dtpeffectDate">EffectDate</label>
                            <input id="dtpeffectDate" class="form-control" type="date" v-model="EffectDate" />
                        </div>
                        <div class="col-md-1 mb-0">
                            <div class="row">
                                <label class="label-custom" for="chkIsBonus">IsBonus</label>
                            </div>
                            <div class="i-am-centered">
                                <input id="chkIsBonus" type="checkbox" v-model="IsBonus" />
                            </div>
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

<<<<<<< HEAD

=======
      
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
        <div class="tbl-de">
        <v-client-table class="table-custom tbl-nosearch" ref="tblSalaryGroup" :columns="columns" :options="options" :data="dataTable">
            <template slot="selected" slot-scope="props">
                <input id="chkSelected" v-model="props.row.selected" type="checkbox" @click="CheckCheckBox(props.row)">
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
                <input id="txtCode" :class="CheckClassReadOrEdit(props.row.code,props.row.readOrEdit,state)"
                       v-model="props.row.code" type="text" v-bind:ref="props.row.id+'*code'" v-if="CheckIfOnlyAdd(props.row.readOrEdit)" />
                <label v-if="CheckIfOnlyAddHide(props.row.readOrEdit)">{{props.row.code}} </label>
            </template>
            <template slot="name" slot-scope="props">
                <input id="txtName" :class="CheckClassReadOrEdit(props.row.name,props.row.readOrEdit,state)"
                       v-model="props.row.name" v-bind:ref="props.row.id+'*name'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.name}} </label>
            </template>
            <template slot="effectDate" slot-scope="props">
                <input id="dtpeffectDate" type="date" :class="CheckClassReadOrEdit(props.row.effectDate,props.row.readOrEdit,state)"
                       v-model="date2" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" :ref="'dtpeffectDate'" />
                       <label>{{props.row.effectDate}}</label>
            </template>
            <template slot="order" slot-scope="props">
                <input id="nmbOrder" :class="CheckClassReadOrEdit(props.row.order,props.row.readOrEdit,state)" type="number"
                       v-model="props.row.order" v-bind:ref="props.row.id+'*order'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.order}} </label>
            </template>
            <template slot="isBonus" slot-scope="props">
                <input id="chkIsBonus" type="checkbox" :class="CheckClassReadOrEdit(props.row.isBonus,props.row.readOrEdit,state)"
                       v-model="props.row.isBonus" v-bind:ref="props.row.id+'*isBonus'" :disabled="!CheckIfReadOrEditForInput(props.row.readOrEdit)" />
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
export default  {
name: "Salarygroup",
  components: {
<<<<<<< HEAD

=======
    
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
  },
  data(){
      return {
          state:false,
          dataTable:[
              {select:false,code:'BAC1',name:'Bậc 1', effectDate:'17/1/2019',isBonus:false,order:1,remark:'Đánh dấu',actflg:'Áp dụng',readOrEdit:null},
                {select:false,code:'BAC1',name:'Bậc 1', effectDate:'17/1/2019',isBonus:false,order:1,remark:'Đánh dấu',actflg:'Áp dụng',readOrEdit:null},
                  {select:false,code:'BAC1',name:'Bậc 1', effectDate:'17/1/2019',isBonus:false,order:1,remark:'Đánh dấu',actflg:'Áp dụng',readOrEdit:null},
                    {select:false,code:'BAC1',name:'Bậc 1', effectDate:'17/1/2019',isBonus:false,order:1,remark:'Đánh dấu',actflg:'Áp dụng',readOrEdit:null},
                      {select:false,code:'BAC1',name:'Bậc 1', effectDate:'17/1/2019',isBonus:false,order:1,remark:'Đánh dấu',actflg:'Áp dụng',readOrEdit:null},
                          {select:false,code:'BAC1',name:'Bậc 1', effectDate:'17/1/2019',isBonus:false,order:1,remark:'Đánh dấu',actflg:'Áp dụng',readOrEdit:null},
                            {select:false,code:'BAC1',name:'Bậc 1', effectDate:'17/1/2019',isBonus:false,order:1,remark:'Đánh dấu',actflg:'Áp dụng',readOrEdit:null},
                              {select:false,code:'BAC1',name:'Bậc 1', effectDate:'17/1/2019',isBonus:false,order:1,remark:'Đánh dấu',actflg:'Áp dụng',readOrEdit:null}
          ],
          Code:'',
          Name:'',
          IsBonus:'',
          EffectDate:'',
          Active:'',
          collapsed:false,
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
 display(evt) {
    return (evt);
  },
   AddRow() {
    let length = ((this.$refs.tblSalaryGroup).tableData ).length;
    for (let i = 0; i < length; i++) {
      let op = (this.$refs.tblSalaryGroup).tableData[i];
      if (_.isEqual(op.readOrEdit, "add") || _.isEqual(op.readOrEdit, "edit"))
        return;
    }
    if (_.isEqual(length, 0)) {
<<<<<<< HEAD

=======
    
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
      ((this.$refs.tblSalaryGroup ).data).push({
          select:false,name:'',code:'',effectDate:'',readOrEdit:'add'
      });
      (this.$refs.tblSalaryGroup ).count = 1;
    } else {
      ((this.$refs.tblSalaryGroup ).tableData).unshift({
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
   agree(ot) {
<<<<<<< HEAD

=======
   
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
  },
  async denny(ot) {
    ot.readOrEdit = null;
    this.state = false;
    this.checked = false;
  },
  async Apply() {
  },
  async Denny() {
<<<<<<< HEAD

=======
  
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
  },
  CheckCheckBox(evt) {
    let length = ((this.$refs.tblSalaryGroup).tableData ).length;
    if (!evt.selected) {
      this.checked = true;
      return;
    }
    for (let i = 0; i < length; i++) {
      let ot = (this.$refs.tblSalaryGroup ).tableData[i];
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
<<<<<<< HEAD

=======
   
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
  },
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
<<<<<<< HEAD






=======
 
 
 
  

  
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
}
</script>
