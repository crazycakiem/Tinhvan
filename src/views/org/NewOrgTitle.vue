<template>
    <div>
        <div class="form-row mb-3">
            <div class="col-md-6">
                <div class="form-inline">
                    <div class="form-group">
                        <label for="cboGroup">GroupTitle</label>
                        <select id="cboGroup" v-model="groupId" class="form-control" >
                            <option></option>
                            <option v-for="i in listGroup" :value="i.id" :key="i.id">{{i.name}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-inline">
                    <div class="form-group">
                        <label for="txtCode">CodeTitle</label>
                        <input id="txtCode" class="form-control" type="text" v-model="code"  />
                    </div>
                </div>
            </div>
        </div>
        <div class="form-row mb-3">
            <div class="col-md-6">
                <div class="form-inline">
                    <div class="form-group">
                        <label for="txtNameTitle">'NameTitle</label>
                        <input id="txtNameTitle" class="form-control" type="text" v-model="name"  />
                    </div>

                </div>
            </div>
            <div class="col-md-6">
                <div class="form-inline">
                    <div class="form-group">
                        <button  id="btnSearch" class="form-control" @click="Search"><i class="fa fa-search" /></button>
                    </div>
                </div>
            </div>
        </div>
        <b-container fluid>
            <b-row>
                <b-col cols="4">
                    <v-jstree :data="data"                            
                              :show-checkbox="showcheckbox"
                              :multiple="multiple"
                              :collapse="collapse"
                              :allow-batch="batch"
                              :no-dots="nodots"
                              :whole-row="whole"
                              :text-field-name="txtparent"
                              :value-field-name="valueparent"
                              :children-field-name="txtchild"
                              @item-click="itemclick"                            
                              :size="size"
                              ref="tree">
                                <template slot-scope="_">
         <div style="display: inherit; width: 200px" @click.ctrl="customItemClickWithCtrl" >
           <i :class="_.vm.themeIconClasses" role="presentation" ></i>     
                         {{_.model.text}}         
         </div>
       </template>
                        </v-jstree>

                        <button id="btnSave" class="btn btn-success"  @click="Save"> Save</button>
                </b-col>
                <b-col cols="8">
                    <v-client-table ref="tblTitle" :options="options" :columns="columns" :data="dataTable">
                        <template slot="selected" slot-scope="props">                         
                                <input id="chkSelected" v-model="props.row.selected" type="checkbox" >   
                        </template>
                        <template slot="groupId" slot-scope="props">
                         
                        </template>
                    </v-client-table>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script >
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import VJstree from "vue-jstree";
import _ from "lodash";
export default  {
  name:'NewOrgTitle',
  components: {
    VJstree
  },
data() {
  return {
      multiple: true,
      size: "small",
      batch: true,
      whole: false,
      nodots: false,
      txtparent: "name",
      valueparent: "id",
      txtchild: "children",
      showcheckbox: true,
      collapse: false,
      columns: ["selected", "code", "groupId", "name", "remark"],
      options: {
        filterable: true,
        filterByColumn: false,
        sortable: ["code", "name"],
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
          name: function(h) {
            return 'Name'
          },
          code: function(h) {
            return "CodeTitle";
          },
          remark: function(h) {
            return "Remark";
          },
          groupId: function(h) {
            return "GroupTitle";
          }
        }
      },
      dataTable:[
       {
          selected: false,
          code: "N01",
          name: "Phong lAP TRINH",
          remark: "ghi chu",
          titleId: "Chức danh",
          groupTitle: "Nhóm chức danh",
          actflg: "Hoạt động"
        },
          {
          selected: false,
          code: "N01",
          name: "Phong lAP TRINH",
          remark: "ghi chu",
          titleId: "Chức danh",
          groupTitle: "Nhóm chức danh",
          actflg: "Hoạt động"
        },
          {
          selected: false,
          code: "N01",
          name: "Phong lAP TRINH",
          remark: "ghi chu",
          titleId: "Chức danh",
          groupTitle: "Nhóm chức danh",
          actflg: "Hoạt động"
        },
      ],
  groupId: "",
  ArryOrg:  [],
  ArryTitle:  [],
  data:[],
  listGroup:[],
  name: "",
  code: "",
    data: [
        {
          id: 0,
          text: "Same but with checkboxes",
          value: "Same but with checkboxes",
          icon: "default",
          opened: false,
          selected: false,
          disabled: false,
          status: "A",
          loading: false,
          children: [
            {
              id: 1,
              text: "initially selected",
              value: "initially selected",
              icon: "default",
              opened: false,
              selected: true,
              status: "I",
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 2,
              text: "custom icon",
              value: "custom icon",
              icon: "default",
              opened: false,
              selected: false,
              status: "A",
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 3,
              text: "initially open",
              value: "initially open",
              icon: "default",
              opened: true,
              selected: false,
              status: "A",
              disabled: false,
              loading: false,
              children: [
                {
                  id: 4,
                  text: "Another node",
                  value: "Another node",
                  icon: "default",
                  opened: false,
                  selected: false,
                  disabled: false,
                  status: "A",
                  loading: false,
                  children: []
                }
              ]
            },
            {
              id: 5,
              text: "custom icon",
              value: "custom icon",
              icon: "default",
              opened: false,
              selected: false,
              status: "A",
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 6,
              text: "disabled node",
              value: "disabled node",
              icon: "default",
              opened: false,
              selected: false,
              status: "A",
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
          icon: "default",
          opened: true,
          selected: false,
          status: "A",
          disabled: false,
          loading: false,
          children: [
            {
              id: 8,
              text: "initially selected",
              value: "initially selected",
              icon: "default",
              opened: false,
              selected: true,
              disabled: false,
              status: "A",
              loading: false,
              children: []
            },
            {
              id: 9,
              text: "custom icon",
              value: "custom icon",
              icon: "default",
              opened: false,
              selected: false,
              disabled: false,
              status: "A",
              loading: false,
              children: []
            },
            {
              id: 10,
              text: "initially open",
              value: "initially open",
              icon: "default",
              opened: true,
              selected: false,
              disabled: false,
              loading: false,
              status: "A",
              children: []
            },
            {
              id: 12,
              text: "custom icon",
              value: "custom icon",
              icon: "default",
              opened: false,
              selected: true,
              disabled: false,
              loading: false,
              status: "A",
              children: []
            },
            {
              id: 13,
              text: "disabled node",
              value: "disabled node",
              icon: "default",
              opened: false,
              selected: false,
              disabled: true,
              status: "A",
              loading: false,
              children: []
            }
          ]
        },
        {
          id: 14,
          text: "And wholerow selection",
          value: "And wholerow selection",
          icon: "default",
          opened: false,
          selected: false,
          disabled: false,
          status: "A",
          loading: false,
          children: []
        },
        {
          id: 15,
          text: "drag disabled",
          value: "drag disabled",
          icon: "default",
          opened: false,
          selected: false,
          disabled: false,
          status: "A",
          loading: false,
          children: [],
          dragDisabled: true
        },
        {
          id: 16,
          text: "drop disabled",
          value: "drop disabled",
          icon: "default",
          opened: false,
          selected: false,
          disabled: false,
          status: "A",
          loading: false,
          children: [],
          dropDisabled: true
        }
      ],
    };
},
methods:{
Search() {
    const search =
      this.groupId + "!" + this.code + "!" + this.name + "!" + "" + "!" + "A";
  },
  itemclick() {
    let arr = [];
    (this.$refs.tree).handleRecursionNodeChilds(
      this.$refs.tree,
      function(node) {
        if (!_.isUndefined(node.model)) {
          if (node.model.selected) {
            arr.push(node.model.id);
          }
        }
      }
    );
   // this.ArryOrg = arr
  },
  selectAll(checked) {
    (this.$refs.tblTitle).tableData.forEach((key, value) => {
      if (checked) {
        {
          key.selected = true;
        }
      } else {
        key.selected = false;
      }
    });
  },
  async Save() {
    }
  
},
  
  
}
</script>
