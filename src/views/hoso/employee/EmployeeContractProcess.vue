<template>
    <div id="EmployeeContractProcess">
     <b-form>
      <b-card class="card-de2">
       <div slot="header">
        <div class="d-flex">
          <strong>Quá trình hợp đồng</strong>
        </div>
       </div>
       <div class="tbl-de">
        <v-client-table class="table-custom tbl-nosearch" ref="tblEmployeeContractProcess" :data="dataEmployeeContractProcess"
         :columns="columnsEmployeeContractProcess" :options="optionsEmployeeContractProcess">

         <template  slot="contractNo" slot-scope="props">
             <label>{{props.row.contractNo}}</label>
         </template>
           <template  slot="effectDate" slot-scope="props">
             <label>{{(props.row.effectDate)}}</label>
         </template>
           <template  slot="expiryDate" slot-scope="props">
             <label>{{(props.row.expireDate)}}</label>
         </template>
          <template  slot="signer" slot-scope="props">
             <!-- <label>{{props.row.snapshot.orgName}}</label> -->
         </template>
          <template  slot="signDate" slot-scope="props">
              <label>{{(props.row.signDate)}}</label>
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
export default {
  name: "EmployeeContractProcess",
  components: {},
  data: () => {
    return {
      dataEmployeeContractProcess: [
        {
          contractTypeId: "Loại hợp đồng",
          contractNo: "N0203",
          effectDate: "12/1/2000",
          expiryDate: "20/10/2019",
          signer: "Người ký",
          signDate: "1/1/2008"
        },
        {
          contractTypeId: "Loại hợp đồng",
          contractNo: "N0203",
          effectDate: "12/1/2000",
          expiryDate: "20/10/2019",
          signer: "Người ký",
          signDate: "1/1/2008"
        },
        {
          contractTypeId: "Loại hợp đồng",
          contractNo: "N0203",
          effectDate: "12/1/2000",
          expiryDate: "20/10/2019",
          signer: "Người ký",
          signDate: "1/1/2008"
        },
        {
          contractTypeId: "Loại hợp đồng",
          contractNo: "N0203",
          effectDate: "12/1/2000",
          expiryDate: "20/10/2019",
          signer: "Người ký",
          signDate: "1/1/2008"
        },
        {
          contractTypeId: "Loại hợp đồng",
          contractNo: "N0203",
          effectDate: "12/1/2000",
          expiryDate: "20/10/2019",
          signer: "Người ký",
          signDate: "1/1/2008"
        }
      ],
      datacontractype: [],
      state: false,
      checked: false,
      columnsEmployeeContractProcess: [
        "contractTypeId",
        "contractNo",
        "effectDate",
        "expiryDate",
        "signer",
        "signDate"
      ],
      optionsEmployeeContractProcess: {
        headings: {
          contractTypeId: function(h) {
            return "TypeDecision";
          },
          decisionNum: function(h) {
            return "DecisionNumber";
          },
          effectDate: function(h) {
            return "EffectDate";
          },
          expiryDate: function(h) {
            return "ExpiryDate";
          },
          signer: function(h) {
            return "Signer";
          },
          signDate: function(h) {
            return "SignDate";
          }
        }
      }
    };
  }
};
</script>
