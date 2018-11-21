<template>
    <div >
          <v-client-table class="table-custom" ref="tblEmployeeWorkingProcess" :data="dataEmployeeWorkingProcess"
         :columns="columnsEmployeeWorkingProcess" :options="optionsEmployeeWorkingProcess">
         <template  slot="decisionNum" slot-scope="props">
             <label>{{props.row.decisionNo}}</label>
         </template>
           <template  slot="effectDate" slot-scope="props">
             <label>{{(props.row.effectDate)}}</label>
         </template>
           <template  slot="expiryDate" slot-scope="props">
             <label>{{(props.row.expireDate)}}</label>
         </template>
          <template  slot="org" slot-scope="props">
             <label>{{props.row.org}}</label>
         </template>
          <template  slot="title" slot-scope="props">
             <label>{{props.row.title}}</label>
         </template>
        </v-client-table>
    </div>
</template>
<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import _ from "lodash";
export default {
  name: "EmployeeWorkingProcess",
  components: {},
  data: () => {
    return {
      dataEmployeeWorkingProcess: [
        {
          TypeDecision: "Loại quyết định",
          DecisionNumber: "N001",
          effectDate: "20/1/2018",
          expiryDate: "2/1/2018",
          org: "TInh vân Group",
          title: "Trưởng phòng",
          signer: "Người ký",
          signDate: "Ngày ký"
        },
        {
          TypeDecision: "Hợp đồng chính thức",
          DecisionNumber: "N001",
          effectDate: "20/1/2018",
          expiryDate: "2/1/2018",
          signer: "Người ký",
          org: "TInh vân Consluting",
          title: "Trưởng phòng",
          signDate: "Ngày ký"
        },
        {
          TypeDecision: "Hợp đồng chính thức",
          DecisionNumber: "N001",
          effectDate: "20/1/2018",
          expiryDate: "2/1/2018",
          org: "TInh vân ",
          title: "Trưởng phòng",
          signer: "Người ký",
          signDate: "Ngày ký"
        }
      ],

      columnsEmployeeWorkingProcess: [
        "TypeDecision",
        "DecisionNumber",
        "effectDate",
        "expiryDate",
        "org",
        "title"
      ],
      optionsEmployeeWorkingProcess: {
        headings: {
          TypeDecision: function(h) {
            return "TypeDecision";
          },
          DecisionNumber: function(h) {
            return "DecisionNumber";
          },
          fullname: function(h) {
            return "FullName";
          },
          effectdDte: function(h) {
            return "EffectDate";
          },
          expiryDate: function(h) {
            return "ExpiryDate";
          },
          org: function(h) {
            return "Organization";
          },
          title: function(h) {
            return "Title";
          }
        }
      }
    };
  }
};
</script>
