<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <b-card class="card-de1">
          <div class="panel-title-de1">
            <div>
              <h4>Quản lý nghỉ việc</h4>
              <b-button class="btn-pill mr-1" variant="default" size="sm" @click="OnAdd">
                Thêm mới
                <i class="icon-plus"></i>
              </b-button>
              <b-button class="btn-pill mr-1" variant="default" size="sm" @click="OnThutuc">
                Thủ tục
                <i class="icon-plus"></i>
              </b-button>
              <b-button class="btn-pill" variant="default" size="sm">
                <i class="icon-magnifier icons"></i> Tìm kiếm
              </b-button>
            </div>
            <div class="ml-auto">
              <b-button class="btn-pill ml-1" variant="outline-default" size="sm">
                Print
                <i class="cui-print icons"></i>
              </b-button>
              <b-button class="btn-pill ml-1" variant="outline-default" size="sm">
                Export
                <i class="icon-arrow-down-circle icons"></i>
              </b-button>
            </div>
          </div>
          <div class="tbl-de" v-show="showTable">
            <v-client-table
              ref="tblTerminate"
              :columns="columns"
              :options="options"
              :data="dataTable"
              class="table-custom tbl-nosearch"
            >
              <template slot="selected" slot-scope="props">
                <input
                  id="chkSelected"
                  v-model="props.row.selected"
                  type="checkbox"
                  @click="CheckCheckBox(props.row)"
                >
              </template>
              <template slot="employeeCode" slot-scope="props">
                <label>{{props.row.employeeCode}}</label>
              </template>
              <template slot="employeeName" slot-scope="props">
                <label>{{props.row.employeeName}}</label>
              </template>
              <template slot="org" slot-scope="props">{{props.row.org}}</template>
              <template slot="title" slot-scope="props">{{props.row.title}}</template>
              <template slot="sendDate" slot-scope="props">
                <label>{{(props.row.sendDate)}}</label>
              </template>
              <template slot="lastDate" slot-scope="props">
                <label>{{(props.row.lastDate)}}</label>
              </template>
              <template slot="actflg" slot-scope="props">{{props.row.actflg}}</template>
            </v-client-table>
          </div>
          <div v-show="showAdd">
            <NewTerminate></NewTerminate>
          </div>

          <div class="tbl-de" v-show="showTableThutuc"></div>
          <div v-show="showThutuc">
            <Thutuc></Thutuc>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!--/.row-->
  </div>
</template>

<script>
import { shuffleArray } from "@/shared/utils";
import NewTerminate from "./NewTerminate.vue";
import Thutuc from "./Thutuc.vue";
export default {
  name: "quanlyhosoluong",
  components: { NewTerminate, Thutuc },
  data: () => {
    return {
      showTable: true,
      showTableThutuc: true,
      showAdd: false,
      showThutuc: false,
      dataTable: [
        {
          selected: false,
          decisionNo: "1093",
          employeeCode: "N01",
          employeeName: "Hoàng văn hòa",
          org: "Tổ chức",
          title: "Trưởng phòng",
          sendDate: "20/10/2018",
          lastDate: "1/1/2019",
          actflg: "phê duyệt",
          remark: "ghi chú"
        },
        {
          selected: false,
          decisionNo: "1093",
          employeeCode: "N01",
          employeeName: "Hoàng văn hòa",
          org: "Tổ chức",
          title: "Trưởng phòng",
          sendDate: "20/10/2018",
          lastDate: "1/1/2019",
          actflg: "phê duyệt",
          remark: "ghi chú"
        },
        {
          selected: false,
          decisionNo: "1093",
          employeeCode: "N01",
          employeeName: "Hoàng văn hòa",
          org: "Tổ chức",
          title: "Trưởng phòng",
          sendDate: "20/10/2018",
          lastDate: "1/1/2019",
          actflg: "phê duyệt",
          remark: "ghi chú"
        }
      ],
      columns: [
        "selected",
        "decisionNo",
        "employeeCode",
        "employeeName",
        "org",
        "title",
        "sendDate",
        "lastDate",
        "actflg",
        "remark"
      ],
      options: {
        filterable: true,
        sortable: ["decisionNo", "employeeCode"],
        columnsClasses: {
          selected: "col-check-box"
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
          decisionNo: function(h) {
            return "Số quyết định";
          },
          employeeCode: function(h) {
            return "Mã nhân viên";
          },
          employeeName: function(h) {
            return "Tên nhân viên";
          },
          org: function(h) {
            return "tổ chức";
          },
          groupTitle: function(h) {
            return "nhóm chức danh";
          },
          title: function(h) {
            return "chúc danh";
          },
          sendDate: function(h) {
            return "ngày gửi";
          },
          lastDate: function(h) {
            return "ngày làm việc cuối";
          },
          actflg: function(h) {
            return "hoạt động";
          },
          remark: function(h) {
            return "Chú thích";
          }
        }
      }
    };
  },
  methods: {
    OnAdd() {
      this.showAdd = !this.showAdd;
      if (this.showAdd) {
        this.showTable = false;
      } else {
        this.showTable = true;
      }
    },

    OnThutuc() {
      this.showThutuc = !this.showThutuc;
      if (this.showThutuc) {
        this.showTable = false;
      } else {
        this.showTable = true;
      }
    }
  }
};
</script>
