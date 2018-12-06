<template>
    <div>
        <b-row>
            <b-col cols="5">
              <div class="more-func">
                <b-button v-b-tooltip.hover title="Lock" id="btnMultiAppy" @click="MultiAppy" v-if="checked" class="btn-pill mr-1" variant="outline-primary" size="sm">
                  <i class="fa fa-unlock" aria-hidden="true"></i>
                </b-button>
                <b-button v-b-tooltip.hover title="Unlock" id="btnMultiDenny" @click="MultiDenny" v-if="checked" class="btn-pill mr-1" variant="outline-primary" size="sm">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </b-button>
                <b-button v-b-tooltip.hover title="Merge" id="btnMergerOrg" @click="MergerOrg" v-if="checked" class="btn-pill mr-1" variant="outline-primary" size="sm">
                  <i class="fa fa-compress" aria-hidden="true"></i>
                </b-button>
                <b-button v-b-tooltip.hover title="Separate" id="btnSeparaOrg" @click="SeparaOrg" v-if="checked" class="btn-pill mr-1" variant="outline-primary" size="sm">
                  <i class="fa fa-code-fork" aria-hidden="true"></i>
                </b-button>
                <b-form-checkbox id="chkShowAll" class="custom-checkbox-style1" @click="ShowAll($event)" v-model="Show">ShowAll</b-form-checkbox>
              </div>
              <v-jstree :data="data"
                   :item-events="itemEvents"
                   :show-checkbox="showcheckbox"
                   :multiple="multiple"
                   :collapse="collapse"
                   :allow-batch="batch"
                   :no-dots="nodots"
                   :whole-row="whole"
                   :text-field-name="txtparent"
                   :value-field-name="valueparent"
                   :children-field-name="txtchild"
                   @item-click="itemClick"
                   @item-toggle="itemToggle"
                   :size="size"
                   ref="tree"
                   class="tv-tree-st1">
                   <template scope="_">
                     <div style="display: inherit; width: 200px" @click.ctrl="customItemClickWithCtrl">
                       <i :class="_.vm.themeIconClasses" role="presentation" v-if="!_.model.loading"></i>
                       {{_.model.text}}
                       <button style="border: 0px; background-color: transparent; cursor: pointer;" @click="customItemClick(_.vm, _.model, $event)"><i class="fa fa-remove"></i></button>
                     </div>
                   </template>
                </v-jstree>
            </b-col>
            <b-col cols="7">
             <div class="tbl-de">
               <v-client-table ref="tblEmployee" class="table-custom sml-table" :options="options" :columns="columns" :data="dataTable">
                   <template slot="selected" slot-scope="props">
                       <input id="chkSelected" v-model="props.row.selected" type="checkbox" @click="CheckCheckBox(props.row)">
                   </template>
                    <template slot="org" slot-scope="props">
                       <label> {{props.row.org}}</label>
                   </template>
               </v-client-table>
             </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-button id="btnChoose" variant="primary" @click="Choose($event)"><i class="fa fa-check"></i></b-button>
                <b-button id="btnDenny" variant="danger" @click="Denny($event)"><i class="fa fa-close"></i> </b-button>
            </b-col>
        </b-row>
    </div>

</template>
<script>
import Vue from "vue";
import VJstree from "vue-jstree";
import { Component, Prop } from "vue-property-decorator";
import _ from "lodash";

export default {
  name: "PopUpManager",
  components: {
    VJstree
  },
  data() {
    return {
      showDetail: false,
      OrgID: "",
      data: [
        {
          id: 0,
          text: "Tập đoàn TINHVAN Group",
          value: "",
          icon: "",
          opened: true,
          selected: false,
          disabled: false,
          loading: false,
          children: [
            {
              id: 1,
              text: "Tinhvan Consulting",
              value: "",
              icon: "",
              opened: false,
              selected: true,
              disabled: false,
              loading: false,
              children: [
               {
                id: 5,
                text: "Ban giám đốc",
                value: "",
                icon: "",
                opened: false,
                selected: true,
                disabled: false,
                loading: false,
                children: []
               },
               {
                id: 6,
                text: "Phòng hành chính nhân sự",
                value: "",
                icon: "",
                opened: false,
                selected: true,
                disabled: false,
                loading: false,
                children: []
               },
               {
                id: 7,
                text: "Phòng công nghệ",
                value: "",
                icon: "",
                opened: false,
                selected: false,
                disabled: false,
                loading: false,
                children: []
               }
              ]
            },
            {
              id: 2,
              text: "Tinhvan Outsource",
              value: "",
              icon: "",
              opened: false,
              selected: true,
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 3,
              text: "Tinhvan Telecom",
              value: "",
              icon: "",
              opened: false,
              selected: false,
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 4,
              text: "Tinhvan Education",
              value: "",
              icon: "",
              opened: true,
              selected: false,
              disabled: false,
              loading: false,
              children: []
            }
          ]
        }
      ],

      showcheckbox: true,
      size: "large",
      batch: true,
      whole: false,
      nodots: false,
      collapse: true,
      dialog2: true,
      multiple: true,
      Show: false,
      checked: false,
      data1: [],
      MergerData: [],
      mergerorganizationchecked: false,
      hidefooter: true,
      itemEvents: {
        mouseover: function(node) {},
        contextmenu: function(node) {}
      },
      txtparent: "name",
      valueparent: "id",
      txtchild: "children",
      columns: ["code", "nameVN", "shortNameVN", "order", "edit"],
      searchText: "",
      dataTable: [
        {
          selected: false,
          title: "nhân viên",
          fullName: "phí tiến lâm",
          org: "Phòng kỹ thuật",
          actflg: "Đang làm việc"
        },
        {
          selected: false,
          title: "nhân viên",
          fullName: "phí tiến lâm",
          org: "Phòng kỹ thuật",
          actflg: "Đang làm việc"
        },
        {
          selected: false,
          fullName: "phí tiến lâm",
          title: "nhân viên",
          org: "Phòng kỹ thuật",
          actflg: "Đang làm việc"
        },
        {
          selected: false,
          fullName: "phí tiến lâm",
          org: "Phòng kỹ thuật",
          title: "nhân viên",
          actflg: "Đang làm việc"
        }
      ],
      columns: ["selected", "fullName", "title", "org", "actflg"],
      options: {
        filterable: true,
        filterByColumn: false,
        sortable: ["fullName", "employeeCode", "title", "org", "actflg"],
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

          fullName: function(h) {
            return "FullName";
          },

          employeeCode: function(h) {
            return "EmployeeCode";
          },
          title: function(h) {
            return "Title";
          },
          org: function(h) {
            return "Organization";
          },
          actflg: function(h) {
            return "Actflg";
          }
        },
        columnsClasses: {
          selected: "col-check-box",
          employeeCode: "col-code",
          fullName: "col-name",
          title: "col-group",
          org: "col-remark",
          actflg: "col-status",
          act: "col-action"
        }
      }
    };
  },
  methods: {
    async openOrganization(organization) {
      this.$refs[organization.id].$refs.editOrganizationModal.show();
    },
    itemToggle(node, item, e) {
      //     console(node);
    },
    async itemclick(evt) {
      this.OrgID = evt.id;
      this.LoadOrg(evt.id);
    },
    close() {
      this.dialog2 = !this.dialog2;
    },
    LoadOrg(evt) {},
    async MultiAppy(evt) {
      this.$refs.tree.handleRecursionNodeChilds(this.$refs.tree, function(
        node
      ) {
        if (!_.isUndefined(node.model)) {
          if (node.model.selected) {
            console.log("checked");
          }
        }
      });
    },
    async MultiDenny(evt) {
      this.$refs.tree.handleRecursionNodeChilds(this.$refs.tree, function(
        node
      ) {
        if (!_.isUndefined(node.model)) {
          if (node.model.selected) {
            console.log("checked");
          }
        }
      });
      // call update change
    },
    onSubmit(evt) {},
    onReset(evt) {},
    async itemClick(node) {
      let arr = [];
      this.$refs.tree.handleRecursionNodeChilds(this.$refs.tree, function(
        node
      ) {
        if (!_.isUndefined(node.model)) {
          if (node.model.selected) {
            arr.push(node.model.id);
          }
        }
      });
      if (arr.length > 0) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
    async ShowAll(evt) {
      this.Show != this.Show;
    },
    async CustomClick(_vm, _model, evt) {
      this.OrgID = _model.id;
      _model.selected = false;
      window.location.href = "/editorganizations?Id=" + this.OrgID;
    },
    customItemClick(_vm, _model, evt) {
      this.$refs.myModalRef.show();
    },
    customItemClickWithCtrl(_vm, _model, evt) {
      this.$refs.myModalRef.show();
    },
    async MergerOrg() {
      let arr = "";
      this.$refs.tree.handleRecursionNodeChilds(this.$refs.tree, function(
        node
      ) {
        if (!_.isUndefined(node.model)) {
          if (node.model.selected) {
            arr += node.model.id + "*";
          }
        }
      });
      window.location.href = "/mergerorganizations?Id=" + arr;
    },
    async SeparaOrg() {
      let arr = "";
      this.$refs.tree.handleRecursionNodeChilds(this.$refs.tree, function(
        node
      ) {
        if (!_.isUndefined(node.model)) {
          if (node.model.selected) {
            arr += node.model.id + "*";
          }
        }
      });
      window.location.href = "/separaorganizations?Id=" + arr;
    },
    mouseover(evt) {
      this.getOrgInfos(evt);
    },
    getOrgInfos(evt) {
      this.$refs.lbName.innerHTML = evt.text;
      this.$refs.lbCode.innerHTML = evt.name;
      this.$refs.lbSumOrgChild.innerHTML = evt.children.length;
      this.showDetail = true;
    },
    mouseout() {
      this.showDetail = false;
    }
  }
};
</script>
