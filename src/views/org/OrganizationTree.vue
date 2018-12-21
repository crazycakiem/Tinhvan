<template>
  <div>
    <h3>Ogranization Tree</h3>
    <org-tree
      :data="data"
      :horizontal="horizontal"
      :collapsable="collapsable"
      :label-class-name="labelClassName"
      :render-content="renderContent"
      @on-expand="onExpand"
      @on-node-click="onNodeClick"
      @on-child1-click="onChildClick1"
      @on-child2-click="onChildClick2"
      @on-child3-click="onChildClick3"
    ></org-tree>
    <b-modal id="ShowDetail" ref="ShowDetailOrganization" size="lg" :hide-footer="true">
      <div v-html="detail"></div>
    </b-modal>
    <b-modal id="ShowEmployeeOrg" ref="ShowEmployeeOrg" size="lg" :hide-footer="true">
      <v-client-table
        :columns="columnsEmployee"
        :data="dataEmployee"
        :options="optionsEmployee"
        ref="tblEmployee"
      >
        <template slot="org" slot-scope="props">
          <label>{{props.row.organization.name}}</label>
        </template>
        <template slot="employeeName" slot-scope="props">
          <label>{{props.row.firstName.trim()}}&nbsp;{{props.row.lastName.trim()}}</label>
        </template>
        <template slot="title" slot-scope="props">
          <label>{{props.row.title.name}}</label>
        </template>
      </v-client-table>
    </b-modal>
    <b-modal id="ShowOrgTitle" ref="ShowOrgTitle" size="lg" :hide-footer="true">
      <v-client-table
        :columns="columnsOrgTitle"
        :data="dataOrgTitle"
        :options="optionsOrgTitle"
        ref="tblOrgTitle"
      >
        <template slot="org" slot-scope="props">
          <label>{{props.row.organization.name}}</label>
        </template>
        <template slot="title" slot-scope="props">
          <label>{{props.row.title.name}}</label>
        </template>
        <template slot="titlecode" slot-scope="props">
          <label>{{props.row.title.code}}</label>
        </template>
      </v-client-table>
    </b-modal>
    <b-modal id="ShowOrgChild" ref="ShowOrgChild" size="lg" :hide-footer="true">
      <v-client-table :columns="columnsOrg" :data="dataOrg" :options="optionsOrg" ref="tblChildOrg"></v-client-table>
    </b-modal>
  </div>
</template>
<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import OrgTree from "../org/tree/org-tree.vue";
// import {
//   Organization,
//   GetOrganizationsTree,
//   GetOrganization,
//   GetOrgTitles,
//   GetEmployees,
//   GetTitles
// } from "../../Histaff.Core.dtos";
// import { client } from "../../shared";
// import _ from "lodash";
// import CommonMixin from "../../CommonMixin";
// import notification from "../../Notification.function";
export default {
  components: { OrgTree },
  data() {
    return {
      horizontal: false,
      collapsable: true,
      dataOrg: [],
      dataOrgTitle: [
        {
          organization: {
            code: "Hold1",
            name: "Holding 1"
          },
          title: {
            code: "TP",
            name: "Trưởng phòng"
          }
        }
      ],
      dataEmployee: [
        {
          employeeCode: "N0081",
          firstName: "Mage",
          lastName: "Skill",
          organization: {
            code: "TVC",
            name: "Tinh vân Consultiing"
          },
          title: {
            name: "Lập trình viên"
          }
        }
      ],
      datatitle: [],
      detail: "",
      parentId: "",
      labelClassName: "bg-orange",
      data: {
        id: "98243593-37a7-440e-8ac5-6faa036426ee",
        parentId: null,
        name: "Tinh vân Group",
        order: 1,
        parent: null,
        opened: true,
        selected: false,
        disabled: false,
        text: "TVG - Tinh vân Group",
        value: "98243593-37a7-440e-8ac5-6faa036426ee",
        icon: "default",
        status: "A",
        children: [
          {
            id: "6a2df9db-596e-4115-a21a-3e980cda9db0",
            parentId: "98243593-37a7-440e-8ac5-6faa036426ee",
            name: "Tinh vân Consultiing",
            order: 1,
            parent: null,
            opened: true,
            selected: false,
            disabled: false,
            text: "TVC - Tinh vân Consultiing",
            value: "6a2df9db-596e-4115-a21a-3e980cda9db0",
            icon: "default",
            status: "A",
            children: [
              {
                id: "3491ba50-7849-42e6-a341-6c4ca7476814",
                parentId: "6a2df9db-596e-4115-a21a-3e980cda9db0",
                name: "Ban từ thiện",
                order: 1,
                parent: null,
                opened: true,
                selected: false,
                disabled: false,
                text: "BTT - Ban từ thiện",
                value: "3491ba50-7849-42e6-a341-6c4ca7476814",
                icon: "default",
                status: "A"
              },
              {
                id: "1a1767b6-abc5-453f-bb2c-8acbd97510e3",
                parentId: "6a2df9db-596e-4115-a21a-3e980cda9db0",
                name: "Tinh Van Hight",
                order: 2,
                parent: null,
                opened: true,
                selected: false,
                disabled: false,
                text: "TVH - Tinh Van Hight",
                value: "1a1767b6-abc5-453f-bb2c-8acbd97510e3",
                icon: "default",
                status: "A"
              }
            ]
          },
          {
            id: "613be4ef-ea1b-4831-8bef-ac3085071b42",
            parentId: "98243593-37a7-440e-8ac5-6faa036426ee",
            name: "Tinh vân Holding",
            order: 2,
            parent: null,
            opened: true,
            selected: false,
            disabled: false,
            text: "0008 - Tinh vân Holding",
            value: "613be4ef-ea1b-4831-8bef-ac3085071b42",
            icon: "default",
            status: "A",
            children: [
              {
                id: "8224da34-5711-482d-8be4-dd13df232328",
                parentId: "613be4ef-ea1b-4831-8bef-ac3085071b42",
                name: "holding 2",
                order: 2,
                parent: null,
                opened: true,
                selected: false,
                disabled: false,
                text: "Hold2 - holding 2",
                value: "8224da34-5711-482d-8be4-dd13df232328",
                icon: "default",
                status: "A"
              },
              {
                id: "4c3105aa-08a1-48c3-8312-a6840b48fb40",
                parentId: "613be4ef-ea1b-4831-8bef-ac3085071b42",
                name: "Holding 1",
                order: 1,
                parent: null,
                opened: true,
                selected: false,
                disabled: false,
                text: "Hold1 - Holding 1",
                value: "4c3105aa-08a1-48c3-8312-a6840b48fb40",
                icon: "default",
                status: "A"
              }
            ]
          }
        ]
      },
      getsingleorg: {
        id: "98243593-37a7-440e-8ac5-6faa036426ee",
        code: "TVG",
        name: "Tinh vân Group",
        remark: "ghi chu"
      },
      optionsOrg: {
        headings: {
          name: function(h) {
            return "Tên hiển thị";
          },
          text: function(h) {
            return "Text";
          }
        }
      },
      optionsOrg: {
        headings: {
          name: function(h) {
            return "Tên hiển thị";
          },
          text: function(h) {
            return "Text";
          }
        }
      },
      columnsOrg: ["name", "text", "value"],
      optionsOrgTitle: {
        headings: {
          org: function(h) {
            return "Tổ chức";
          },
          title: function(h) {
            return "Chức danh";
          },
          titlecode: function(h) {
            return "Mã";
          }
        }
      },
      columnsOrgTitle: ["org", "title", "titlecode"],
      optionsEmployee: {
        headings: {
          org: function(h) {
            return "Tổ chức";
          },
          title: function(h) {
            return "Tên chức danh";
          },
          employeeCode: function(h) {
            return "Mã nhân viên";
          },
          employeeName: function(h) {
            return "Tên đầy đủ";
          }
        }
      },
      columnsEmployee: ["org", "employeeName", "employeeCode", "title"]
    };
  },
  methods: {
    async created() {
      const getallorgs = new GetOrganizationsTree();
      await client.get(getallorgs).then(res => {
        this.data = notification.Unflatten(res.items)[0];
      });
    },
    renderContent(h, data) {
      return data.name;
    },
    onExpand(data) {
      if ("expand" in data) {
        data.expand = !data.expand;
        if (!data.expand && data.children) {
          this.collapse(data.children);
        }
      } else {
        this.$set(data, "expand", true);
      }
    },
    collapse(list) {
      list.forEach(child => {
        if (child.expand) {
          child.expand = false;
        }
        child.children && this.collapse(child.children);
      });
    },

    async onNodeClick(e, data) {
      let getsingleorg = getsingleorg;
      this.detail = "<div>Tên : " + "Tinh vân Group" + "<div>";
      this.detail += "<div>Code : " + "TVC" + "<div>";
      this.detail += "<div>Chú thích : " + "Ghi chu" + "<div>";
      this.$refs.ShowDetailOrganization.show();
    },
    onChildClick1(e, data) {
      this.$refs.ShowOrgChild.show();
      this.dataOrg = data.children;
    },
    async onChildClick2(e, data) {
      this.$refs.ShowEmployeeOrg.show();
    },
    async onChildClick3(e, data) {
      this.$refs.ShowOrgTitle.show();
    }
  }
};
</script>