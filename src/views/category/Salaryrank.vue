<template>
    <div class="animated fadeIn">
      <b-row>
         <b-col lg="12">
<<<<<<< HEAD
              <b-card class="card-de1">
        <div  class="panel-title-de1">
=======
              <b-card class="card-de1">   
        <div  class="panel-title-de1"> 
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
          <div>
                     <h4>{{("SalaryLevel")}}</h4>
                        <b-button id="btnAdd" @click="AddRow" class="btn-pill mr-1" variant="default" size="sm">
                 {{('Add')}} <i class="icon-plus"></i>
               </b-button>
           <b-button id="btnFilter" @click="collapse" class="btn-pill" variant="default" size="sm">
                 <i class="fa fa-filter"></i> {{('Search')}}
               </b-button>
                 <b-button id="btnApply" @click="Apply" v-if="checked" class="btn-pill mr-1" variant="outline-primary" size="sm">
                 <i class="fa fa-unlock-alt" aria-hidden="true" /> {{('A')}}
               </b-button>
               <b-button id="btnDenny" @click="Denny" v-if="checked" class="btn-pill mr-1" variant="outline-primary" size="sm">
                 <i class="fa fa-lock" aria-hidden="true" /> {{('I')}}
               </b-button>
               <b-button id="btnDelete" @click="Delete" v-if="checked" class="btn-pill mr-1" variant="outline-primary" size="sm">
                 <i class="fa fa-trash" aria-hidden="true" /> {{('D')}}
               </b-button>
          </div>
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
                <li v-if="levelId!=''">
                    <span> {{('SalaryLevel')}}: {{nameSalaryLevel}}</span>
                    <i class="fa fa-times" aria-hidden="true" @click="removeSearch('SalaryLevel')"></i>
                </li>
                <li v-if="salaryBasic!=null">
                    <span> {{('SalaryBasic')}}: {{salaryBasic}}</span>
                    <i class="fa fa-times" aria-hidden="true" @click="removeSearch('salaryBasic')"></i>
                </li>
                <li v-if="Order!=null">
                    <span> {{('Order')}}: {{Order}}</span>
                    <i class="fa fa-times" aria-hidden="true" @click="removeSearch('order')"></i>
                </li>
                <li v-if="Name!=''">
                    <span>{{('Name')}}: {{Name}}</span>
                    <i class="fa fa-times" aria-hidden="true" @click="removeSearch('name')"></i>
                </li>
                <li v-if="Active!=''">
                    <span>  {{('Actflg')}}: {{(Active)}}</span>
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
                            <label class="label-custom" for="cboSalaryGroup">{{('SalaryGroup')}}</label>
                            <select id="cboSalaryGroup" class="form-control" v-model="groupId" v-on:change="onChange($event)">
                                <option></option>
                                <option v-for="i in salarygrouptbllist" :value="i.id" :key="i.id">{{i.name}}</option>
                            </select>
                        </div>
                        <div class="col-md-2 mb-3">
                            <label class="label-custom" for="cboLevel">{{('SalaryLevel')}}</label>
                            <select id="cboLevel" class="form-control" v-model="levelId" v-on:change="onChange1($event)">
                                <option></option>
                                <option v-for="i in levellist" :value="i.id" :key="i.id">{{i.name}}</option>
                            </select>
                        </div>
                        <div class="col-md-2 mb-3">
                            <label class="label-custom" for="txtName">{{('Name')}}</label>
                            <input id="txtName" class="form-control" type="text" v-model="Name" />
                        </div>
                        <div class="col-md-2 mb-3">
                            <label class="label-custom" for="txtsalaryBasic">{{('SalaryBasic')}}</label>
                            <input id="txtsalaryBasic" class="form-control" type="number" v-model="salaryBasic" step=".01" />
                        </div>
                        <div class="col-md-2 mb-3">
                            <label class="label-custom" for="txtOrder">{{('Order')}}</label>
                            <input id="txtOrder" class="form-control" v-model="Order" type="number" />
                        </div>
                        <div class="col-md-2 mb-3">
                            <label class="label-custom" for="cboActflg">{{('Actflg')}}</label>
                            <select id="cboActflg" class="form-control" v-model="Active">
                                <option></option>
                                <option value="A">{{('A')}}</option>
                                <option value="I">{{('I')}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-nation text-left">
                        <button id="btnSearch" class="btn btn-custom btn-success" @click="Search($event)">
                            <i class="fa fa-search" aria-hidden="true" />
                            <span>{{('Search')}}</span>
                            <b-tooltip target="btnSearch" :title="('Filter')" />
                        </button>
                    </div>
                </b-card>
            </b-collapse>
        <div class="tbl-de">
        <v-client-table class="table-custom tbl-nosearch" ref="tblrank" :columns="columns" :options="options" :data="dataTable">
            <template slot="selected" slot-scope="props">
                <input id="chkSelected" v-model="props.row.selected" type="checkbox" @click="CheckCheckBox(props.row)">
            </template>
            <template slot="id" slot-scope="props">
                <input id="txtID" v-model="props.row.id" type="text" v-bind:ref="props.row.id+'*id'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.id}} </label>
            </template>
            <template slot="groupId" slot-scope="props">
                <select id="cbosalarygroupId" :class="CheckClassReadOrEdit(props.row.groupId,props.row.readOrEdit,state)"
                        v-bind:ref="props.row.id+'*groupId'"
                        v-model="props.row.level.groupId" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" v-on:change="onChange2($event)">
                    <option value="" disabled selected hidden v-if="CheckIfOption(props.row.level.groupId,props.row.readOrEdit,state)">
                        {{SalaryGroupRequired}}
                    </option>
                    <option v-for="or in salarygrouptbllist" :value="or.id" :key="or.id">{{or.name}}   </option>
                </select>
                <label v-for="i in salarygrouptbllist" :key="i.id" v-if="CheckDisPlayTypeLabelWhenEdit(props.row.level.group==null? props.row.groupId:props.row.level.group.id,i.id,props.row.readOrEdit)&&CheckIfReadOrEditForLable(props.row.readOrEdit)">
                    {{i.name}}
                </label>
            </template>
            <template slot="levelId" slot-scope="props">
                <select id="cbolevelId" :class="CheckClassReadOrEdit(props.row.levelId,props.row.readOrEdit,state)" v-bind:ref="props.row.id+'*level'"
                        v-model="props.row.levelId" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)">
                    <option value="" disabled selected hidden v-if="CheckIfOption(props.row.levelId,props.row.readOrEdit,state)">
                        {{CityRequired}}
                    </option>
                    <option v-for="or in leveltbllist1" :value="or.id" :key="or.id">{{or.name}}   </option>
                    <!--<option v-for="or in citytbllist" :value="or.id" v-show="loaded">{{or.name}}   </option>-->
                </select>
                <label v-for="i in salaryleveltbllist" :key="i.id" v-if="CheckDisPlayTypeLabelWhenEdit(props.row.levelId,i.id,props.row.readOrEdit)&&CheckIfReadOrEditForLable(props.row.readOrEdit)">
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
            <template slot="salaryBasic" slot-scope="props">
                <input id="nmbsalaryBasic" :class="CheckClassReadOrEdit(props.row.salaryBasic,props.row.readOrEdit,state)" type="number" step=".01"
                       v-model="props.row.salaryBasic" v-bind:ref="props.row.id+'*salaryBasic'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.salaryBasic}} </label>
            </template>
            <template slot="order" slot-scope="props">
                <input id="txtOrder" :class="CheckClassReadOrEdit(props.row.order,props.row.readOrEdit,state)" type="number"
                       v-model="props.row.order" v-bind:ref="props.row.id+'*order'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.order}} </label>
            </template>
            <template slot="remark" slot-scope="props">
                <input id="txtremark" :class="CheckClassReadOrEdit(props.row.order,props.row.readOrEdit,state)"
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
<<<<<<< HEAD
        </b-card>
=======
        </b-card>   
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
        </b-col>
        </b-row>
    </div>
</template>
<<<<<<< HEAD
<script>
=======
<script >
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { bus } from "../../main";
import _ from "lodash";
export default  {
   name: "Salaryrank",
  components: {
  },
  data(){
    return {
      dataTable:[
        {selected:false,groupId:'Nhóm I', levelId:'Nhóm I',name:'Nhóm I',salaryBasic:'3000000',order:10,remark:'Đánh dấu'},
         {selected:false,groupId:'Nhóm I', levelId:'Nhóm I',name:'Nhóm I',salaryBasic:'3000000',order:10,remark:'Đánh dấu'},
          {selected:false,groupId:'Nhóm I', levelId:'Nhóm I',name:'Nhóm I',salaryBasic:'3000000',order:10,remark:'Đánh dấu'},
           {selected:false,groupId:'Nhóm I', levelId:'Nhóm I',name:'Nhóm I',salaryBasic:'3000000',order:10,remark:'Đánh dấu'},
            {selected:false,groupId:'Nhóm I', levelId:'Nhóm I',name:'Nhóm I',salaryBasic:'3000000',order:10,remark:'Đánh dấu'},
             {selected:false,groupId:'Nhóm I', levelId:'Nhóm I',name:'Nhóm I',salaryBasic:'3000000',order:10,remark:'Đánh dấu'},
              {selected:false,groupId:'Nhóm I', levelId:'Nhóm I',name:'Nhóm I',salaryBasic:'3000000',order:10,remark:'Đánh dấu'},
               {selected:false,groupId:'Nhóm I', levelId:'Nhóm I',name:'Nhóm I',salaryBasic:'3000000',order:10,remark:'Đánh dấu'},
      ],
        data: [],
      checked: false,
      columns: [
        "selected",
        "groupId",
        "levelId",
        "name",
        "salaryBasic",
        "order",
        "remark",
        "actflg",
        "act"
      ],
      options: {
        filterable: true,
        sortable: [
          "name",
          "groupId",
          "levelId",
          "order",
          "salaryBasic",
          "remark",
          "actflg"
        ],
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
          },
          LevelId: function(h) {
            return ("SalaryLevel");
          }
        }
      },
salarygrouptbllist:[],
  salaryleveltbllist: [],
  checked: false,
  state: false,
  collapsed: false,
  Code:  "",
  Order:  null,
  Name:  "",
  Remark:  "",
  Active:  "",
  salarygroupId:  "",
  nameSalaryGroup: "",
  nameSalaryLevel:  "",
  groupId: "",
  levelId:  "",
  salaryBasic:  null,
  namelevel: "",
  levellist:  [],
  leveltbllist1:  [],
    };
  },
  methods:{
     CheckIfReadOrEditForInput: function (roe) {
            return (_.isEqual(roe, 'add') || _.isEqual(roe, 'edit'));
        },
          CheckIfReadOrEditForLable: function (roe) {
            return ((!_.isEqual(roe, 'add')) && (!_.isEqual(roe, 'edit')))
        },
 onChange(evt) {
    this.salarygrouptbllist.forEach((key, value) => {
      if (_.isEqual(this.salarygroupId, key.id))
        this.nameSalaryGroup = key.name;
    });
    this.levellist = [];
    var getlevel = new GetSalaryLevels();
    getlevel.groupId = this.groupId;
    client.get(getlevel).then(res => {
      this.levellist = res.items;
    });
  },
onChange1(evt) {
    this.levellist.forEach((key, value) => {
      if (_.isEqual(this.levelId, key.id)) this.namelevel = key.name;
    });
  },
  async onChange2(evt) {
    this.leveltbllist1 = [];
  },

  display(evt) {
    return (evt);
  },
  AddRow() {
    let length = ((this.$refs.tblrank ).tableData ).length;
    for (let i = 0; i < length; i++) {
      let op = (this.$refs.tblrank ).tableData[i] ;
      if (_.isEqual(op.readOrEdit, "add") || _.isEqual(op.readOrEdit, "edit"))
        return;
    }
    if (_.isEqual(length, 0)) {
      ((this.$refs.tblrank ).data ).push(t);
      (this.$refs.tblrank ).count = 1;
    } else {
<<<<<<< HEAD


=======
      
     
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
      ((this.$refs.tblrank ).tableData ).unshift({});
    }
  },
  selectAll(checked) {
    (this.$refs.tblrank ).tableData.forEach((key, value) => {
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
  async showEdit(ot) {
    let length = ((this.$refs.tblrank ).tableData ).length;
    for (let i = 0; i < length; i++) {
      let op = (this.$refs.tblrank ).tableData[i] ;
      if (_.isEqual(op.readOrEdit, "add") || _.isEqual(op.readOrEdit, "edit"))
        return;
    }
    ot.readOrEdit = "edit";
    (this.$refs.tblrank ).tableData.forEach(function(key, value) {
      if (!_.isEqual(ot.id, key.id)) {
        key.selected = false;
        key.readOrEdit = null;
      }
    });
  },
  async agree(ot) {
    if (_.isEqual(ot.readOrEdit, "add")) {
      this.state = true;
<<<<<<< HEAD

    } else if (_.isEqual(ot.readOrEdit, "edit")) {
      this.state = true;

=======
     
    } else if (_.isEqual(ot.readOrEdit, "edit")) {
      this.state = true;
     
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
    }
  },
  async denny(ot) {
    ot.readOrEdit = null;
    this.state = false;
    this.checked = false;
  },
  async Apply() {
<<<<<<< HEAD

  },
  async Denny() {

=======
    
  },
  async Denny() {
   
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
  },
  CheckCheckBox(evt) {
    let length = ((this.$refs.tblrank ).tableData ).length;
    if (!evt.selected) {
      this.checked = true;
      return;
    }
    for (let i = 0; i < length; i++) {
      let ot = (this.$refs.tblrank).tableData[i] ;
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
    if (_.isEqual(filter, "SalaryGroup")) {
      this.groupId = "";
      this.Search(null);
    } else if (_.isEqual(filter, "SalaryLevel")) {
      this.levelId = "";
      this.Search(null);
    } else if (_.isEqual(filter, "order")) {
      this.Order = null;
      this.Search(null);
    } else if (_.isEqual(filter, "name")) {
      this.Name = "";
      this.Search(null);
    } else if (_.isEqual(filter, "salaryBasic")) {
      this.salaryBasic = null;
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
