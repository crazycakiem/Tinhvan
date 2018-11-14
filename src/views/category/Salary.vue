
<template>
    <div>
        <b-card no-body>
            <b-tabs>
                <!-- Bank-->
                <b-tab :title="display('SalaryGroup')" active>
                    <Salarygroup></Salarygroup>
                </b-tab>
                <!--BankBranch-->
                <b-tab :title="display('SalaryLevel')">
                    <Salarylevel :salarygrouptbllist="salarygrouptbllist"></Salarylevel>
                </b-tab>
                <b-tab :title="display('SalaryRank')">
                    <Salaryrank :salarygrouptbllist="salarygrouptbllist" :salaryleveltbllist="salaryleveltbllist"></Salaryrank>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Salarygroup from "./Salarygroup.vue";
import Salarylevel from "./Salarylevel.vue";
import Salaryrank from "./Salaryrank.vue";
export default  {
    name: "Salary",
  components: {
     Salarygroup,
    Salarylevel,
    Salaryrank
  },
  data(){
return{
salarygrouptbllist: [],
  salaryleveltbllist: [],
  salaryranktbllist:  [],
};
  },
  methods:{
display(evt) {
    return (evt);
  }
  }

}
</script>

