<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <b-card class="card-de1">
          <div class="panel-title-de1">
            <div>
              <h4>Quản lý điều chuyển</h4>
              <b-button class="btn-pill mr-1" variant="default" size="sm">
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
          <div class="tbl-de">
            <v-client-table
              class="table-custom tbl-nosearch"
              ref="tblChangeInfo"
              :columns="columns"
              :options="options"
              :data="dataChangeInfo"
            >
              <template slot="selected" slot-scope="props">
                <input
                  id="chkSelected"
                  v-model="props.row.selected"
                  type="checkbox"
                  @click="CheckCheckBox(props.row)"
                >
              </template>
              <template slot="id" slot-scope="props">
                <label>{{props.row.id}}</label>
              </template>
              <template slot="titleId" slot-scope="props">
                <label>{{props.row.titleId}}</label>
              </template>
              <template slot="orgId" slot-scope="props">
                <label>{{props.row.orgId}}</label>
              </template>
              <template slot="decisionNo" slot-scope="props">
                <label>{{props.row.decisionNo}}</label>
              </template>
              <template slot="name" slot-scope="props">
                <label>{{props.row.name}}</label>
              </template>
              <template slot="decisionTypeId" slot-scope="props">
                <label>{{props.row.decisionTypeId}}</label>
              </template>
              <template slot="statusId" slot-scope="props">
                <label>{{props.row.statusId}}</label>
              </template>
            </v-client-table>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!--/.row-->
  </div>
</template>

<script>
import { shuffleArray } from "@/shared/utils";
export default {
  name: "quanlydieuchuyen",
  components: {},
  data: () => {
    return {
      columns: [
        "selected",
        "decisionNo",
        "decisionTypeId",
        "name",
        "orgId",
        "titleId",
        "statusId"
      ],
      dataChangeInfo: [
        {
          selected: false,
          decisionNo: "N01",
          decisionTypeId: "Quyet dinh",
          name: "Hooàng Văn Hòa",
          orgId: "Tinh van couluting",
          titleId: "Trưởng phòng",
          statusId: "phê duyệt"
        },
        {
          selected: false,
          decisionNo: "N01",
          decisionTypeId: "Quyet dinh",
          name: "Hooàng Văn Hòa",
          orgId: "Tinh van couluting",
          titleId: "Trưởng phòng",
          statusId: "phê duyệt"
        },
        {
          selected: false,
          decisionNo: "N01",
          decisionTypeId: "Quyet dinh",
          name: "Hooàng Văn Hòa",
          orgId: "Tinh van couluting",
          titleId: "Trưởng phòng",
          statusId: "phê duyệt"
        },
        {
          selected: false,
          decisionNo: "N01",
          decisionTypeId: "Quyet dinh",
          name: "Hooàng Văn Hòa",
          orgId: "Tinh van couluting",
          titleId: "Trưởng phòng",
          statusId: "phê duyệt"
        }
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
  }
};
</script>
