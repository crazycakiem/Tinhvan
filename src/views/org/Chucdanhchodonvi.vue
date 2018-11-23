<template>
    <div  class="animated fadeIn">
        <b-row>
             <b-col lg="12">
                  <b-card class="card-de1">
        <div  class="panel-title-de1">
            <div>
 <h4>OrgTitle</h4>
   <b-button id="btnAdd" @click="AddOrgTitle" class="btn-pill mr-1" variant="default" size="sm">
                 'Add' <i class="icon-plus"></i>
               </b-button>
               <b-button id="btnShowEdit" @click="ShowEdit" class="btn-pill mr-1" variant="default" size="sm" v-if="editchecked">
                 'Edit' <i class="fa fa-pencil-square-o"></i>
               </b-button>
            <b-button id="btnFilter" @click="activecollapse" class="btn-pill" variant="default" size="sm" v-if="filterActive">
                 <i class="fa fa-filter"></i> 'Search'
               </b-button>
                 <b-button id="btnDenny" @click="Denny" v-if="checked" class="btn-pill mr-1" variant="outline-primary" size="sm">
                 <i class="fa fa-lock" aria-hidden="true" /> 'I'
               </b-button>
               <b-button id="btnApply" @click="Apply" v-if="checked" class="btn-pill mr-1" variant="outline-primary" size="sm">
                 <i class="fa fa-unlock-alt" aria-hidden="true" /> 'A'
               </b-button>
               <b-button id="btnDelete" @click="Delete" v-if="checked" class="btn-pill mr-1" variant="outline-primary" size="sm">
                 <i class="fa fa-trash" aria-hidden="true" /> 'D'
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
                <li v-if="OrgId!=''">'Organization': {{Org}} <span @click="removeSearch('org')"><i class="fa fa-times" aria-hidden="true"></i></span></li>
                <li v-if="TitleGroup!=''">'Remark': {{titleGroupName}} <span @click="removeSearch('type')"><i class="fa fa-times" aria-hidden="true"></i></span></li>
                <li v-if="CodeTitle!=''">'Code': {{CodeTitle}}<span @click="removeSearch('code')"><i class="fa fa-times" aria-hidden="true"></i></span> </li>
                <li v-if="NameTitle!=''">'Name': {{NameTitle}} <span @click="removeSearch('name')"><i class="fa fa-times" aria-hidden="true"></i></span></li>
                <li v-if="Active!=''">'Actflg': Active <span @click="removeSearch('active')"><i class="fa fa-times" aria-hidden="true"></i></span></li>
            </ul>
             </div>
           </div>
            <b-collapse id="collapse2" :visible="collapsed">
                <b-card class="mb-2">
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label class="label-custom" for="txtOrg">'Organization'</label>
                            <div class="input-group">
                                <input id="txtOrg" class="form-control" type="text" v-model="Org" @click="ShowOrg($event)" />
                                <div class="input-group-append">
                                    <div class="form-control" @click="ShowOrg($event)">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 mb-3">
                            <label class="label-custom" for="cboTitleGroup">'TitleGroup'</label>
                            <select id="cboTitleGroup" v-model="TitleGroup" class="form-control" v-on:change="onChange($event)" >
                                <option></option>
                                <option v-for="i in listTitleGroup" :value="i.id"   :key="i.id">{{i.name}}</option>
                            </select>
                        </div>
                        <div class="col-md-2 mb-3">
                            <label class="label-custom" for="txtCodeTitle">'CodeTitle'</label>
                            <input  id="txtCodeTitle" class="form-control" type="text" v-model="CodeTitle"/>
                        </div>
                        <div class="col-md-2 mb-3">
                            <label class="label-custom" for="txtNameTitle">'Title'</label>
                            <input   id="txtNameTitle" class="form-control"  type="text" v-model="NameTitle" />
                        </div>
                        <div class="col-md-2 mb-3">
                            <label class="label-custom" for="cboActflg">'Actflg'</label>
                            <select  id="cboActflg" v-model="Active" class="form-control">
                                <option></option>
                                <option>'A'</option>
                                <option>'I'</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group text-left">
                        <button id="btnSearch" class="btn btn-custom btn-success" @click="Search($event)">
                            <i class="fa fa-search" aria-hidden="true"></i>
                            <span>'Search'</span>
                        </button>
                        <b-tooltip target="btnSearch" :title="('Filter')"></b-tooltip>
                    </div>
                </b-card>
            </b-collapse>
            <div  class="tbl-de" v-show="showTable1">
        <v-client-table  class="table-custom tbl-nosearch" ref="tblOrgTitle" :columns="columns" :options="options" :data="dataTable">
            <template slot="selected" slot-scope="props">
                <input id="chkSelected" v-model="props.row.selected" type="checkbox" @click="CheckCheckBox(props.row)">
            </template>
            <template slot="code" slot-scope="props">
                <label>{{props.row.code}} </label>
            </template>
            <template slot="org" slot-scope="props">
                <label>{{props.row.org}} </label>
            </template>
            <template slot="title" slot-scope="props">
                <label>{{props.row.title}} </label>
            </template>
            <template slot="remark" slot-scope="props">
                <label>{{props.row.remark}} </label>
            </template>
            <template slot="actflg" slot-scope="props">
                <label>{{display(props.row.actflg)}} </label>
            </template>
        </v-client-table>
        </div>
        <!-- <b-modal id="ShowOrg" ref="ShowOrg" title="Chọn phòng ban" :lazy="true">
            <TreeVue :showcheckbox="showcheckbox" :data="data" :multiple="multiple"
                     :size="size" :batch="batch" :whole="whole" :nodots="nodots" @item-click="itemclick($event)"
                     :collapse="collapse"></TreeVue>
        </b-modal> -->
        <div v-show="showAdd">
            <NewOrgTitle ></NewOrgTitle>
        </div>
        <b-modal id="ShowEdit" ref="EditOrgTitle" size="lg" :hide-footer="true">
        </b-modal>
        </b-card>
        </b-col>
        </b-row>
    </div>
</template>
<script >
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { bus } from "../../main";
import NewOrgTitle from "./NewOrgTitle.vue";
import _ from "lodash";
export default {
  name: "Chucdanhchodonvi",
  components: {
    NewOrgTitle
  },
  data() {
    return {
      filterActive:true,
       showTable1:  true,
  showAdd: false,
      dataTable: [
        {
          selected: false,
          code: "N01",
          orgId: "Phong lAP TRINH",
          remark: "ghi chu",
          titleId: "Chức danh",
          groupTitle: "Nhóm chức danh",
          actflg: "Hoạt động"
        },
        {
          selected: false,
          code: "N01",
          orgId: "Phong lAP TRINH",
          remark: "ghi chu",
          titleId: "Chức danh",
          groupTitle: "Nhóm chức danh",
          actflg: "Hoạt động"
        },
        {
          selected: false,
          code: "N01",
          orgId: "Phong lAP TRINH",
          remark: "ghi chu",
          titleId: "Chức danh",
          groupTitle: "Nhóm chức danh",
          actflg: "Hoạt động"
        },
        {
          selected: false,
          code: "N01",
          orgId: "Phong lAP TRINH",
          remark: "ghi chu",
          titleId: "Chức danh",
          groupTitle: "Nhóm chức danh",
          actflg: "Hoạt động"
        },
        {
          selected: false,
          code: "N01",
          orgId: "Phong lAP TRINH",
          remark: "ghi chu",
          titleId: "Chức danh",
          groupTitle: "Nhóm chức danh",
          actflg: "Hoạt động"
        },
        {
          selected: false,
          code: "N01",
          orgId: "Phong lAP TRINH",
          remark: "ghi chu",
          titleId: "Chức danh",
          groupTitle: "Nhóm chức danh",
          actflg: "Hoạt động"
        },
        {
          selected: false,
          code: "N01",
          orgId: "Phong lAP TRINH",
          remark: "ghi chu",
          titleId: "Chức danh",
          groupTitle: "Nhóm chức danh",
          actflg: "Hoạt động"
        }
      ],
      groupId: "",
      data: [],
      checked: false,
      footer: true,
      list: [
        { text: " Phòng ban", value: 1 },
        { text: "Bảo hiểm", value: 2 },
        { text: "Nhân sự", value: 3 }
      ],
      columns: [
        "selected",
        "code",
        "orgId",
        "remark",
        "titleId",
        "groupTitle",
        "actflg"
      ],
      options: {
        filterable: true,
        sortable: ["orgId", "remark", "titleId"],
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
          orgId: function(h) {
            return "OrgName";
          },
          remark: function(h) {
            return "Remark";
          },
          actflg: function(h) {
            return "Actflg";
          },
          titleId: function(h) {
            return "NameTitle";
          },
          groupTitle: function(h) {
            return "GroupTitle";
          }
          //act: function (h) {
          //    return this.("act")
          //},
        }
      },
      checked: false,
      editchecked: false,
      state: false,
      Code: "",
      OrgId: "",
      nameOrg: "",
      editOrgId: "",
      Org: "",
      Name: "",
      Remark: "",
      Active: "",
      CodeTitle: "",
      NameTitle: "",
      TitleGroup: "",
      titleGroupName: "",
      listOrgTitle: [],
      listTitleGroup: [],
      showcheckbox: false,
      size: "small",
      batch: false,
      whole: true,
      nodots: false,
      collapse: true,
      showTable: false,
      collapsed: false,
      multiple: false,
      listOrgTitleEdit: [],
      listIdTitle: [],
      id: "",
      CodeRequired: "",
      NameRequired: "",
      GroupRequired: "",
      MessageError: ""
    };
  },
  methods: {
    onChange(evt) {
      this.listTitleGroup.forEach((key, value) => {
        if (_.isEqual(this.TitleGroup, key.id)) this.titleGroupName = key.name;
      });
    },
    AddOrgTitle() {
    this.filterActive = true;
    this.showAdd = !this.showAdd;
    this.showTable1 = !this.showTable1;
    if (this.showAdd) {
      // const getallorgs = new GetOrganizationsTree();
      // await client.get(getallorgs).then(res => {
      //   this.listOrgTitle = notification.Unflatten(res.items);
      // });
      this.filterActive = false;
      this.checked = false;
      this.showTable1 = false;
      bus.$on("AddOrgTitleSuccess", data => {
        if (_.isEqual(data, 1)) {
          this.checked = false;
          this.showTable1 = true;
          this.showAdd = false;
        //  this.showEdit = false;
          this.filterActive = true;
        }
      });
    }
    this.showEdit = false;
  },
    display(evt) {
      return evt;
    },
    selectAll(checked) {
      this.$refs.tblOrgTitle.tableData.forEach((key, value) => {
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
    Apply() {},
    Denny() {},
    CheckCheckBox(evt) {
      let count = 0;
      let ltitle = [];
      this.listIdTitle = [];
      let length = this.$refs.tblOrgTitle.tableData.length;
      this.$refs.tblOrgTitle.tableData.forEach(function(key, value) {
        if (!_.isEqual(key.id, evt.id)) {
          if (key.selected) {
            count++;
            ltitle.push(key.id);
            ltitle.push(key.orgId);
          }
        } else {
          if (!evt.selected) {
            count++;
            ltitle.push(key.id);
            ltitle.push(key.orgId);
          }
        }
      });
      if (_.isEqual(count, 1)) {
        this.editchecked = true;
        this.listIdTitle = ltitle;
      } else {
        this.editchecked = false;
      }
      if (!evt.selected) {
        this.checked = true;
        return;
      }
      for (let i = 0; i < length; i++) {
        let ot = this.$refs.tblOrgTitle.tableData[i];
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
      this.checked = false;
    },
    async Delete() {},
    ShowOrg() {
    //  this.$refs.ShowOrg.show();
    },
    itemclick(node) {
      this.Org = node.name;
      this.OrgId = node.id;
    },
    ShowOrgTitle() {
    //  this.$refs.AddOrgTitle.show();
    },
    async ShowEdit() {
      this.showTable = true;
    },
    activecollapse() {
      this.collapsed = !this.collapsed;
    },
    removeSearch(filter) {
      if (_.isEqual(filter, "org")) {
        this.OrgId = "";
        this.Search(null);
      } else if (_.isEqual(filter, "code")) {
        this.CodeTitle = "";
        this.Search(null);
      } else if (_.isEqual(filter, "name")) {
        this.NameTitle = "";
        this.Search(null);
      } else if (_.isEqual(filter, "active")) {
        this.Active = "";
        this.Search(null);
      } else if (_.isEqual(filter, "type")) {
        this.TitleGroup = "";
        this.Search(null);
      }
    }
  }
};
</script>

