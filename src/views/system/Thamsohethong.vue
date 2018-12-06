
<template>
    <div class="animated fadeIn">
     <b-row>
       <b-col lg="12">
         <b-card class="card-de1">
           <div class="panel-title-de1">
             <div>
               <h4>OtOtherList</h4>
               <b-button id="btnAdd" @click="AddRow" class="btn-pill mr-1" variant="default">
                 <i class="icon-plus"></i> Thêm mới
               </b-button>
               <b-button id="btnFilter" @click="collapse" class="btn-pill" variant="default">
                 <i class="fa fa-filter"></i> Tìm kiếm
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
                   <li v-if="groupId!=null">
                       <span>Group: {{nameGroup}}</span>
                       <i class="fa fa-times" aria-hidden="true" @click="removeSearch('group')" />
                   </li>
                   <li v-if="typeId!=''">
                       <span>OtOtherListStyle: {{typeName}}</span>
                       <i class="fa fa-times" aria-hidden="true" @click="removeSearch('type')" />
                   <li v-if="Code!=''">
                       <span>Code: {{Code}}</span>
                       <i class="fa fa-times" aria-hidden="true" @click="removeSearch('code')" />
                   </li>
                   <li v-if="Name!=''">
                       <span>{{('Name')}}: {{Name}}</span>
                       <i class="fa fa-times" aria-hidden="true" @click="removeSearch('name')" />
                   </li>
                   <li v-if="Active!=''">
                       <span>Actflg: Active</span>
                       <i class="fa fa-times" aria-hidden="true" @click="removeSearch('active')" />
                   </li>
                   <li v-if="Remark!=''">
                       <span>Remark: {{Remark}}</span>
                       <i class="fa fa-times" aria-hidden="true" @click="removeSearch('remark')" />
                   </li>
               </ul>
             </div>
             <div class="func-b">
               <b-button id="btnApply" @click="Apply" v-if="checked" class="btn-pill mr-1" variant="outline-primary" size="sm">
                 <i class="fa fa-lock" aria-hidden="true" /> Khoá
               </b-button>
               <b-button id="btnApply" @click="Denny" v-if="checked" class="btn-pill mr-1" variant="outline-primary" size="sm">
                 <i class="fa fa-unlock-alt" aria-hidden="true" /> Mở khoá
               </b-button>
               <b-button id="btnApply" @click="Delete" v-if="checked" class="btn-pill mr-1" variant="outline-primary" size="sm">
                 <i class="fa fa-trash" aria-hidden="true" /> Xoá
               </b-button>
             </div>
           </div>
           <b-collapse class="show-filter-box mb-4" id="collapse2" :visible="collapsed">
               <b-card class="mb-2">
                   <div class="form-row">
                       <div class="col-md-2 mb-3">
                           <label class="label-custom" for="cboGroup">Group</label>
                           <select id="cboGroup" class="form-control" v-model="groupId" v-on:change="onChange($event)">
                               <option v-for="or in list" :value="or.value" :key="or.value">{{or.text}}</option>
                           </select>
                       </div>
                       <div class="col-md-2 mb-3">
                           <label class="label-custom" for="cboType">OtOtherListStyle</label>
                           <select id="cboType" class="form-control" v-model="typeId" v-on:change="onChangeType($event)">
                               <option v-for="or in listStyle" :value="or.id"  :key="or.id">{{or.name}}</option>
                           </select>
                       </div>
                       <div class="col-md-2 mb-3">
                           <label class="label-custom" for="txtCode">Code</label>
                           <input id="txtCode" class=" form-control" type="text" v-model="Code"/>
                       </div>
                       <div class="col-md-2 mb-3">
                           <label class="label-custom" for="txtName">Name</label>
                           <input id="txtName"  class=" form-control" type="text" v-model="Name"   />
                       </div>
                       <div class="col-md-2 mb-3">
                           <label class="label-custom" for="cboActflg">Actflg</label>
                           <select id="cboActflg" class="form-control" v-model="Active">
                               <option></option>
                               <option value="A">A</option>
                               <option value="I">I</option>
                           </select>
                       </div>
                       <div class="col-md-2 mb-3">
                           <label class="label-custom" for="txtRemark">Remark</label>
                           <input id="txtRemark" class="form-control" type="text" v-model="Remark" />
                       </div>
                   </div>
                   <div class="form-group text-left">
                       <button id="btnSearch" class="btn btn-custom btn-success" @click="Search($event)">
                           <i class="fa fa-search" aria-hidden="true"></i>
                           <span>Lọc kết quả</span>
                       </button>
                       <b-tooltip target="btnSearch" ></b-tooltip>
                   </div>
               </b-card>
           </b-collapse>
           <div class="tbl-de">
             <v-client-table class="table-custom tbl-nosearch" ref="tblOtherList" :columns="columns" :options="options" :data="dataTable">
                 <template slot="selected" slot-scope="props">
                     <input id="chkSelected" v-model="props.row.selected" type="checkbox" @click="CheckCheckBox(props.row)">
                 </template>
                 <template slot="code" slot-scope="props">
                     <input placeholder="Nhập Code" class="custom-input-style1 h30" id="txtCode" :class="CheckClassReadOrEdit(props.row.code,props.row.readOrEdit,state)"
                         v-model="props.row.code" type="text" v-bind:ref="props.row.id+'*code'" v-if="CheckIfOnlyAdd(props.row.readOrEdit)" name="props.row.id" />
                     <label v-if="CheckIfOnlyAddHide(props.row.readOrEdit)">{{props.row.code}}</label>
                 </template>
                 <template slot="name" slot-scope="props">
                     <input placeholder="Nhập Tên" class="custom-input-style1 h30" id="txtName" :class="CheckClassReadOrEdit(props.row.name,props.row.readOrEdit,state)"
                         v-model="props.row.name" v-bind:ref="props.row.id+'*name'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                     <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.name}} </label>
                 </template>
                 <template slot="type" slot-scope="props">
                     <!-- <select id="cboTypeId" :class="CheckClassReadOrEdit(props.row.typeId,props.row.readOrEdit,state)" v-model="props.row.typeId" v-if="CheckIfOnlyAdd(props.row.readOrEdit)">
                         <option value="" disabled selected hidden v-if="CheckIfOption(props.row.typeId,props.row.readOrEdit,state)">
                             {{TypeRequired}}
                         </option>
                         <option v-for="or in listAlltype" :value="or.id" :key="or.id">{{or.name}}</option>
                     </select> -->
                     <div class="custom-slbox" v-if="CheckIfOnlyAdd(props.row.readOrEdit)">
                      <b-form-select id="cboTypeId"
                        class="sl-tv-style1"
                        :plain="true"
                        :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                        value="Please select"
                        v-model="props.row.typeId"
                        :class="CheckClassReadOrEdit(props.row.typeId,props.row.readOrEdit,state)"
                        >
                      </b-form-select>
                     </div>
                     <label v-if="CheckDisPlayTypeLabel(props.row.typeId,i.id,props.row.readOrEdit)" v-for="i in listAlltype" :key="i.id">
                         {{i.name}}
                     </label>
                 </template>
                 <template slot="remark" slot-scope="props">
                     <input placeholder="Nhập Remark" class="custom-input-style1 h30" id="txtremark" :class="CheckClassReadOrEdit(props.row.remark,props.row.readOrEdit,state)"
                         v-model="props.row.remark" v-bind:ref="props.row.id+'*remark'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                     <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.remark}} </label>
                 </template>
                 <template slot="actflg" slot-scope="props">
                     <label>{{display(props.row.actflg)}} </label>
                 </template>
                 <template slot="act" slot-scope="props">
                     <button id="btnShowEdit" class="btn btn-custom" type="button" @click="showEdit(props.row)" v-if="props.row.readOrEdit==null" v-bind:ref="props.row.id+'*showEdit'">
                         <span class="fa fa-edit" />
                     </button>
                     <button id="btnDeleteOne" class="btn btn-custom" type="button" @click="DeleteOne(props.row)" v-if="props.row.readOrEdit==null" v-bind:ref="props.row.id+'*DeleteOne'">
                         <span class="fa fa-trash" />
                     </button>
                     <button id="btnAgree" class="btn btn-custom" type="button" @click="agree(props.row)" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" v-bind:ref="props.row.id+'*agree'">
                         <span class="fa fa-check" />
                     </button>
                     <button id="btnDenny" class="btn btn-custom" @click="denny(props.row)" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" v-bind:ref="props.row.id+'*denny'">
                         <span class="fa fa-close" />
                     </button>
                 </template>
             </v-client-table>
             <b-modal id="errorMessage" ref="errorMessage" centered title="Error when submit">
                 <div v-html="MessageError"></div>
             </b-modal>
           </div>
         </b-card>
       </b-col>
     </b-row>
   </div>
</template>
<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import _ from "lodash";
export default {
  name: "Thamsohethong",
  components: {},
  data() {
    return {
      groupId: 0,
      nameGroup: "",
      collapsed: false,
      listStyle: [],
      listAlltype: [],
      list: [],
      typeId: "",
      NameRequired: "",
      CodeRequired: "",
      TypeRequired: "",
      typeName: "",
      checked: false,
      state: false,
      Code: "",
      Remark: "",
      Active: "",
      Name: "",
      MessageError: "",
      dataTable: [
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        },
        {
          selected: false,
          code: "abc",
          type: "1",
          name: "phan tu 1",
          remark: "danh dau 1",
          actflg: "A",
          readOrEdit: null
        }
      ],
      data: [],
      columns: ["selected", "code", "type", "name", "remark", "actflg", "act"],
      perPage: 10,
      perPageValues: [10, 25, 50, 100, 500],
      options: {
        filterable: true,
        checked: false,
        perPage: 10,
        perPageValues: [10, 25, 50, 100, 500],
        sortable: ["code", "type", "name", "remark", "actflg"],
        columnsClasses: {
          selected: "col-check-box",
          code: "col-code",
          name: "col-name",
          type: "col-group",
          remark: "col-remark",
          actflg: "col-status",
          act: "col-action"
        },
        skin: "table table-custom table-striped table-bordered table-hover",
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
            return "Code";
          },
          name: function(h) {
            return "Name";
          },
          type: function(h) {
            return "OtOtherListStyle";
          },
          remark: function(h) {
            return "Remark";
          },
          actflg: function(h) {
            return "Actflg";
          },
          act: function(h) {
            return "Act";
          }
        }
      }
    };
  },
  methods: {
    CheckIfOption: function(ele, roe, state) {
      return (
        _.isEqual(ele, "") &&
        (_.isEqual(roe, "add") || _.isEqual(roe, "edit")) &&
        state
      );
    },
    CheckIfReadOrEditForLable: function(roe) {
      return !_.isEqual(roe, "add") && !_.isEqual(roe, "edit");
    },
    CheckIfOnlyAddHide: function(roe) {
      return !_.isEqual(roe, "add");
    },
    CheckClassReadOrEdit: function(ele, roe, state) {
      if (
        _.isEqual(ele, "") &&
        (_.isEqual(roe, "add") || _.isEqual(roe, "edit")) &&
        state
      ) {
        return "is-invalid form-control";
      }
      return "form-control";
    },
    CheckIfReadOrEditForInput: function(roe) {
      return _.isEqual(roe, "add") || _.isEqual(roe, "edit");
    },
    CheckIfOnlyAdd: function(roe) {
      return _.isEqual(roe, "add");
    },
    onChange(evt) {},
    display(evt) {
      return evt;
    },
    AddRow() {
      debugger;
      let length = this.$refs.tblOtherList.tableData.length;
      for (let i = 0; i < length; i++) {
        let op = this.$refs.tblOtherList.tableData[i];
        if (_.isEqual(op.readOrEdit, "add") || _.isEqual(op.readOrEdit, "edit"))
          return;
      }
      if (_.isEqual(length, 0)) {
        this.$refs.tblOtherList.data.push({
          readOrEdit: "",
          code: "",
          name: "",
          actflg: "A",
          typeId: "A"
        });
        this.$refs.tblOtherList.count = 1;
      } else {
        this.$refs.tblOtherList.tableData.unshift({
          typeId: this.typeId,
          code: "",
          name: "",
          remark: "",
          id: "",
          actflg: "A",
          readOrEdit: "add"
        });
      }
    },
    selectAll(checked) {
      this.$refs.tblOtherList.tableData.forEach((key, value) => {
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
      let length = this.$refs.tblOtherList.tableData.length;
      for (let i = 0; i < length; i++) {
        let op = this.$refs.tblOtherList.tableData[i];
        if (_.isEqual(op.readOrEdit, "add") || _.isEqual(op.readOrEdit, "edit"))
          return;
      }
      ot.readOrEdit = "edit";
      this.dataTable.forEach(function(key, value) {
        if (!_.isEqual(ot.id, key.id)) {
          key.selected = false;
          key.readOrEdit = null;
        } else {
          key.readOrEdit = "edit";
        }
      });
    },
    async agree(ot) {},
    async denny(ot) {
      ot.readOrEdit = null;
      //   this.$refs.tblOtherList.refresh();
      this.state = false;
      this.checked = false;
      this.dataTable.forEach(function(key, value) {
        if (_.isEqual(ot.id, key.id)) {
          key.selected = false;
          key.readOrEdit = null;
        }
      });
    },
    async Apply() {},
    async Denny() {},
    CheckCheckBox(evt) {
      let length = this.$refs.tblOtherList.tableData.length;
      if (!evt.selected) {
        this.checked = true;
        return;
      }
      for (let i = 0; i < length; i++) {
        let ot = this.$refs.tblOtherList.tableData[i];
        if (ot.id != evt.id) {
          if (ot.selected) {
            this.checked = true;
            return;
          }
        } else {
          this.checked = false;
        }
      }
    },
    onChangeType(evt) {
      this.listStyle.forEach((key, value) => {
        if (_.isEqual(this.typeId, key.id)) this.typeName = key.name;
      });
    },
    async Delete() {},
    Search(evt) {
      const search =
        this.groupId +
        "!" +
        this.typeId +
        "!" +
        this.Code +
        "!" +
        this.Name +
        "!" +
        this.Active;
      this.$refs.tblOtherList.setFilter(search);
      this.collapsed = false;
      this.listStyle = [];
    },
    removeSearch(filter) {
      if (_.isEqual(filter, "group")) {
        this.groupId = null;
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
      } else if (_.isEqual(filter, "type")) {
        this.typeId = "";
        this.Search(null);
      }
    },
    collapse() {
      this.collapsed = !this.collapsed;
    }
  },
  computed: {
    name() {
      return this.$route.name;
    }
    // list() {
    //   return this.$route.matched.filter(
    //     route => route.name || route.meta.label
    //   );
    // }
  }
};
</script>
