<template>
    <div>
        <router-link to="/tochuc/themtochuc" style="display:inline-block">
            <a class="nav-link">Add Organization</a>
        </router-link>
        <b-button type="button" id="btnMultiAppy" variant="primary" @click="MultiAppy" v-if="checked" ><i class="fa fa-unlock" aria-hidden="true"></i></b-button>
        <b-button type="button" variant="danger" id="btnMultiDenny" @click="MultiDenny" v-if="checked" ><i class="fa fa-lock" aria-hidden="true"></i></b-button>
        <b-button type="button" id="btnMergerOrg" variant="success" @click="MergerOrg" v-if="checked" ><i class="fa fa-compress" aria-hidden="true"></i></b-button>
        <b-button type="button" id="btnSeparaOrg" variant="success" @click="SeparaOrg" v-if="checked" ><i class="fa fa-code-fork" aria-hidden="true"></i></b-button>
        <input type="checkbox" id="chkShowAll" @click="ShowAll($event)" v-model="Show" /> ShowAll
        <div class="row">
            <div class="col-md-6">
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
                  ref="tree">
              <template scope="_">
         <div style="display: inherit; width: 200px" @click.ctrl="customItemClickWithCtrl">
           <i :class="_.vm.themeIconClasses" role="presentation" v-if="!_.model.loading"></i>
           {{_.model.text}}
           <button style="border: 0px; background-color: transparent; cursor: pointer;" @click="customItemClick(_.vm, _.model, $event)"><i class="fa fa-remove"></i></button>
         </div>
       </template>
        </v-jstree>
            </div>
        <div class="col-md-6" v-show="showDetail">
            <div class="row">
                <div class="col-md-6">
                    <label>Name</label>
                </div>    
                <div class="col-md-6">
                    <label ref="lbName"></label>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <label>Code</label>
                </div>    
                <div class="col-md-6">
                    <label ref="lbCode"></label>
                </div>
            </div>
             <div class="row">
                <div class="col-md-6">
                    <label>Số phòng ban con</label>
                </div>    
                <div class="col-md-6">
                    <label ref="lbSumOrgChild"></label>
                </div>
            </div>
        </div>
        </div>
        <b-modal ref="myModalRef" size="lg" title="Using Component Methods" :hide-footer="true">
            <div slot="modal-footer" class="float-right">
                <b-button type="submit" id="btnSubmit" variant="primary" @click="onSubmit">Submit</b-button>
                <b-button type="reset" id="btnReset" variant="danger" @click="onReset">Reset</b-button>
            </div>
        </b-modal>
    </div>
</template>
<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import VJstree from "vue-jstree";
import _ from "lodash";
export default {
  name: "Organization",
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
          text: "Same but with checkboxes",
          value: "Same but with checkboxes",
          icon: "",
          opened: false,
          selected: false,
          disabled: false,
          loading: false,
          children: [
            {
              id: 1,
              text: "initially selected",
              value: "initially selected",
              icon: "",
              opened: false,
              selected: true,
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 2,
              text: "custom icon",
              value: "custom icon",
              icon: "fa fa-warning icon-state-danger",
              opened: false,
              selected: false,
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 3,
              text: "initially open",
              value: "initially open",
              icon: "fa fa-folder icon-state-default",
              opened: true,
              selected: false,
              disabled: false,
              loading: false,
              children: [
                {
                  id: 4,
                  text: "Another node",
                  value: "Another node",
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
              id: 5,
              text: "custom icon",
              value: "custom icon",
              icon: "fa fa-warning icon-state-warning",
              opened: false,
              selected: false,
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 6,
              text: "disabled node",
              value: "disabled node",
              icon: "fa fa-check icon-state-success",
              opened: false,
              selected: false,
              disabled: true,
              loading: false,
              children: []
            }
          ]
        },
        {
          id: 7,
          text: "Same but with checkboxes",
          value: "Same but with checkboxes",
          icon: "",
          opened: true,
          selected: false,
          disabled: false,
          loading: false,
          children: [
            {
              id: 8,
              text: "initially selected",
              value: "initially selected",
              icon: "",
              opened: false,
              selected: true,
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 9,
              text: "custom icon",
              value: "custom icon",
              icon: "fa fa-warning icon-state-danger",
              opened: false,
              selected: false,
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 10,
              text: "initially open",
              value: "initially open",
              icon: "fa fa-folder icon-state-default",
              opened: true,
              selected: false,
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 12,
              text: "custom icon",
              value: "custom icon",
              icon: "fa fa-warning icon-state-warning",
              opened: false,
              selected: true,
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 13,
              text: "disabled node",
              value: "disabled node",
              icon: "fa fa-check icon-state-success",
              opened: false,
              selected: false,
              disabled: true,
              loading: false,
              children: []
            }
          ]
        },
        {
          id: 14,
          text: "And wholerow selection",
          value: "And wholerow selection",
          icon: "",
          opened: false,
          selected: false,
          disabled: false,
          loading: false,
          children: []
        },
        {
          id: 15,
          text: "drag disabled",
          value: "drag disabled",
          icon: "fa fa-warning icon-state-danger",
          opened: false,
          selected: false,
          disabled: false,
          loading: false,
          children: [],
          dragDisabled: true
        },
        {
          id: 16,
          text: "drop disabled",
          value: "drop disabled",
          icon: "fa fa-warning icon-state-danger",
          opened: false,
          selected: false,
          disabled: false,
          loading: false,
          children: [],
          dropDisabled: true
        }
      ],

      showcheckbox: true,
      size: "large",
      batch: true,
      whole: true,
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
      columns: ["code", "nameVN", "shortNameVN", "order", "edit"]
    };
  },
  computed: {},
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
