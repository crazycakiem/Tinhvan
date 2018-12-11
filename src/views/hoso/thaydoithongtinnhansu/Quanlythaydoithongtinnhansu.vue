<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <b-card class="card-de1">
          <div class="panel-title-de1">
            <div>
              <h4>Quản lý thay đổi thông tin nhân sự</h4>
              <b-button class="btn-pill mr-1" variant="default" @click="AddContract">
                Thêm mới
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
              class="table-custom"
              ref="tblChangeInfo"
              :columns="columns"
              :options="options"
              :data="dataTable"
            >
              <template slot="selected" slot-scope="props">
                <input
                  id="chkSelected"
                  v-model="props.row.selected"
                  type="checkbox"
                  @click="CheckCheckBox(props.row)"
                >
              </template>
              <template slot="id" slot-scope="props">{{props.row.id}}</template>
              <template slot="titleId" slot-scope="props">{{props.row.titleId}}</template>
              <template slot="orgId" slot-scope="props">{{props.row.orgId}}</template>
              <template slot="decisionNo" slot-scope="props">{{props.row.decisionNo}}</template>
              <template slot="name" slot-scope="props">{{props.row.name}}</template>
              <template slot="decisionTypeId" slot-scope="props">
                <label>{{props.row.decisionTypeId}}</label>
              </template>
              <template slot="statusId" slot-scope="props">
                <label>{{props.row.statusId}}</label>
              </template>
            </v-client-table>
          </div>
          <div v-show="showAdd">
            <new-change-info></new-change-info>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!--/.row-->
  </div>
</template>

<script>
import { shuffleArray } from "@/shared/utils";
import NewChangeInfo from "./NewChangeInfo.vue";
export default {
  name: "quanlythaydoithongtinnhansu",
  components: { NewChangeInfo },
  data: () => {
    return {
      showAdd: false,
      showTable: true,
      dataTable: [
        {
          selected: false,
          decisionNo: "N0123",
          decisionTypeId: "Loại quyết định",
          name: "phi tien lam",
          orgId: "tổ chức",
          titleId: "Trọng tài",
          statusId: "Hoạt động"
        },
        {
          selected: false,
          decisionNo: "N0123",
          decisionTypeId: "Loại quyết định",
          name: "phi tien lam",
          orgId: "tổ chức",
          titleId: "Trọng tài",
          statusId: "Hoạt động"
        },
        {
          selected: false,
          decisionNo: "N0123",
          decisionTypeId: "Loại quyết định",
          name: "phi tien lam",
          orgId: "tổ chức",
          titleId: "Trọng tài",
          statusId: "Hoạt động"
        },
        {
          selected: false,
          decisionNo: "N0123",
          decisionTypeId: "Loại quyết định",
          name: "phi tien lam",
          orgId: "tổ chức",
          titleId: "Trọng tài",
          statusId: "Hoạt động"
        }
      ],
      columns: [
        "selected",
        "decisionNo",
        "decisionTypeId",
        "name",
        "orgId",
        "titleId",
        "statusId"
      ],
      options: {
        filterable: true,
        sortable: [
          "decisionNo",
          "decisionTypeId",
          "orgId",
          "titleId",
          "statusId"
        ],
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
            return "NumberDecision";
          },
          decisionTypeId: function(h) {
            return "TypeDecision";
          },
          name: function(h) {
            return "Name";
          },
          orgId: function(h) {
            return "Organization";
          },
          titleId: function(h) {
            return "Title";
          },
          statusId: function(h) {
            return "Actflg";
          }
        }
      }
    };
  },
  methods: {
    AddContract() {
      this.showAdd = !this.showAdd;
      if (this.showAdd) {
        this.showTable = false;
      } else {
        this.showTable = true;
      }
    }
  }
};
</script>
