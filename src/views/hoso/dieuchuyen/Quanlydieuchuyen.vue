<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <b-card class="card-de1">
          <div class="panel-title-de1">
            <div>
              <h4>Quản lý điều chuyển</h4>
              <b-button class="btn-pill mr-1" variant="default" size="sm" @click="OnAdd">
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
              class="table-custom tbl-nosearch"
              ref="tblWageRecords"
              :columns="columns"
              :options="options"
              :data="dataDieuChuyen"
            >
              <template slot="selected" slot-scope="props">
                <input
                  id="chkSelected"
                  v-model="props.row.selected"
                  type="checkbox"
                  @click="CheckCheckBox(props.row)"
                >
              </template>
              <template slot="employeeCode" slot-scope="props">{{props.row.employeeCode}}</template>
              <template slot="decisionNo" slot-scope="props">{{props.row.decisionNo}}</template>
              <template slot="orgId" slot-scope="props">{{props.row.orgId}}</template>
              <template slot="titleId" slot-scope="props">{{props.row.name}}</template>
              <template slot="fullname" slot-scope="props">{{props.row.fullname}}</template>
              <template slot="description" slot-scope="props">{{props.row.description}}</template>
              <template slot="effectDate" slot-scope="props">{{(props.row.effectDate)}}</template>
              <template slot="expireDate" slot-scope="props">{{(props.row.expireDate)}}</template>
              <template slot="statusId" slot-scope="props">{{(props.row.statusId)}}</template>
            </v-client-table>
          </div>
          <div v-show="showAdd">
            <NewChangeInfo3b></NewChangeInfo3b>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!--/.row-->
  </div>
</template>

<script>
import { shuffleArray } from "@/shared/utils";
import NewChangeInfo3b from "./NewChangeInfo3b.vue";
export default {
  name: "quanlydieuchuyen",
  components: { NewChangeInfo3b },
  data: () => {
    return {
      showTable: true,
      showAdd: false,
      dataDieuChuyen: [{}],
      columns: [
        "selected",
        "employeeCode",
        "fullname",
        "orgId",
        "titleId",
        "decisionNo",
        "effectDate",
        "expireDate",
        "statusId"
      ],
      options: {
        filterable: true,
        sortable: [
          "decisionNo",
          "effectDate",
          "expireDate",
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
          employeeCode: function(h) {
            return "EmployeeCode";
          },
          fullname: function(h) {
            return "FullName";
          },
          decisionNo: function(h) {
            return "NumberDecision";
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
          effectDate: function(h) {
            return "EffectDate";
          },
          expireDate: function(h) {
            return "ExpiryDate";
          },
          typecontract: function(h) {
            return "TypeContract";
          },
          statusId: function(h) {
            return "Actflg";
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
    }
  }
};
</script>
