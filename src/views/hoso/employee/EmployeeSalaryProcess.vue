<template>
  <div id="EmployeeSalaryProcess">
    <b-form>
      <b-card class="card-de2">
        <div slot="header">
          <div class="d-flex">
            <strong>Quá trình lương</strong>
          </div>
        </div>
        <div class="tbl-de mt-3">
          <v-client-table
            class="table-custom tbl-nosearch ml-3 mr-3 mb-3"
            :columns="columnsSalary"
            :data="dataSalaryExten"
            :options="optionsSalaryExten"
            ref="tblWageRecordExten"
            @row-click="rowWageRecoredExten"
          >
            <template slot="decisionNo" slot-scope="props">
              <label>{{props.row.decisionNo}}</label>
            </template>
            <template slot="effectDate" slot-scope="props">
              <label>{{(props.row.effectDate)}}</label>
            </template>
            <template slot="salaryBasic" slot-scope="props">
              <label>{{(props.row.salaryBasic)}}</label>
            </template>
            <template slot="salaryPercent" slot-scope="props">
              <label>{{props.row.salaryPercent}}</label>
            </template>
            <template slot="SalaryTotal" slot-scope="props">
              <label>{{(props.row.salaryTotal)}}</label>
            </template>
          </v-client-table>
        </div>
        <div class="tbl-de mt-3">
          <v-client-table
            class="table-custom tbl-nosearch ml-3 mr-3 mb-3"
            :columns="columnsAllowance"
            :data="dataAllowanceExten"
            :options="optionsAllownanceExten"
            ref="tblAllowance"
          >
            <template slot="allowanceId" slot-scope="props">
              <label
                v-for="item in dataAllowanceList"
                :key="item.id"
                v-if="CheckCondition(props.row.allowanceId,item.id)"
              >{{item.name}}</label>
            </template>
            <template slot="isInsurrance" slot-scope="props">
              <input type="checkbox" v-model="props.row.isInsurrance" disabled>
            </template>
          </v-client-table>
        </div>
      </b-card>
    </b-form>
  </div>
</template>
<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import _ from "lodash";
import DatePicker from "vue2-datepicker";
export default {
  components: {
    DatePicker
  },
  data: () => {
    return {
      dataAllTitle: [],
      dataAllOrg: [],
      dataAllowanceList: [],
      dataSalaryExten: [
        {
          decisionNo: "N0102",
          effectDate: "12/10/2018",
          title: "Chức danh",
          org: "Tinh vân Group",
          salaryBasic: "10000000",
          salaryPercent: "100%",
          salaryTotal: "10000000"
        },
        {
          decisionNo: "N0102",
          effectDate: "12/10/2018",
          title: "Chức danh",
          org: "Tinh vân Group",
          salaryBasic: "10000000",
          salaryPercent: "100%",
          salaryTotal: "10000000"
        },
        {
          decisionNo: "N0102",
          effectDate: "12/10/2018",
          title: "Chức danh",
          org: "Tinh vân Group",
          salaryBasic: "10000000",
          salaryPercent: "100%",
          salaryTotal: "10000000"
        },
        {
          decisionNo: "N0102",
          effectDate: "12/10/2018",
          title: "Chức danh",
          org: "Tinh vân Group",
          salaryBasic: "10000000",
          salaryPercent: "100%",
          salaryTotal: "10000000"
        },
        {
          decisionNo: "N0102",
          effectDate: "12/10/2018",
          title: "Chức danh",
          org: "Tinh vân Group",
          salaryBasic: "10000000",
          salaryPercent: "100%",
          salaryTotal: "10000000"
        }
      ],
      columnsSalary: [
        "decisionNo",
        "effectDate",
        "title",
        "org",
        "salaryBasic",
        "salaryPercent",
        "SalaryTotal"
      ],
      optionsSalaryExten: {
        headings: {
          decisionNo: function(h) {
            return "NumberDecision";
          },
          effectDate: function(h) {
            return "EffectDate";
          },
          title: function(h) {
            return "Title";
          },
          org: function(h) {
            return "Organization";
          },
          employeeObject: function(h) {
            return "Object";
          },
          salaryBasic: function(h) {
            return "SalaryBasic";
          },
          salaryPercent: function(h) {
            return "SalaryPercent";
          },
          SalaryTotal: function(h) {
            return "SalaryTotal";
          }
        }
      },
      dataAllowanceExten: [
        {
          allowanceId: "Ăn trưa",
          effectDate: "10/2/2000",
          amount: "250000",
          expireDate: "11/2/2010",
          isInsurrance: false
        },
        {
          allowanceId: "Ăn trưa",
          effectDate: "10/2/2000",
          amount: "250000",
          expireDate: "11/2/2010",
          isInsurrance: false
        },
        {
          allowanceId: "Ăn trưa",
          effectDate: "10/2/2000",
          amount: "250000",
          expireDate: "11/2/2010",
          isInsurrance: false
        },
        {
          allowanceId: "Ăn trưa",
          effectDate: "10/2/2000",
          amount: "250000",
          expireDate: "11/2/2010",
          isInsurrance: false
        }
      ],
      columnsAllowance: [
        "allowanceId",
        "amount",
        "effectDate",
        "expireDate",
        "isInsurrance"
      ],
      optionsAllownanceExten: {
        headings: {
          allowanceId: function(h) {
            return "Allowance";
          },
          amount: function(h) {
            return "Money";
          },
          effectDate: function(h) {
            return "EffectDate";
          },
          expireDate: function(h) {
            return "ExpiryDate";
          },
          isInsurrance: function(h) {
            return "Insurrance";
          },
          act: function(h) {
            return "Act";
          }
        }
      }
    };
  },
  methods: {
    //quá trình lương phụ cấp
    getSalaryInfo() {},
    rowWageRecoredExten(e) {},
    AssignAllowances(data) {}
  }
};
</script>
