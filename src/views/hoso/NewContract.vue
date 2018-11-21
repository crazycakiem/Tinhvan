<template>
    <b-form>
   <div id="newconttract" v-show="!showWageRecord">
        <b-row class="mt-3">
            <b-col cols="1">
                <label>EmployeeCode</label>
            </b-col>
            <b-col cols="2">
                 <Autocomplete :items="items" :isAsync="true" ref="autocompleteEmployeeContract" :isDisplayFull="false" AutocompleteChangeEvent="AutocompleteEmployeeContractChange" AutocompleteSelected="AutocompleteEmployeeContractSelected"></Autocomplete>
                <button id="btnShowPopUpManager" @click="ShowPopUpManager" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
            </b-col>
            <b-col cols="1">
                <label label-for="txtFullName">FullName</label>
            </b-col>
            <b-col cols="2">
                <label ref="lbFullName"></label>
            </b-col>
            <b-col cols="1">
                <label label-for="txtOrg">Organization</label>
            </b-col>
            <b-col cols="2">
                <label ref="lbOrgContract"></label>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="2">
                <label label-for="lbGroupTitleContract">GroupTitle </label>
            </b-col>
            <b-col cols="2">
                <label ref="lbGroupTitleContract"></label>
            </b-col>
            <b-col cols="1">
                <label label-for="lbTitleContract">Title </label>
            </b-col>
            <b-col cols="2">
                <label ref="lbTitleContract"></label>
            </b-col>
              <b-col cols="2">
                <label label-for="cbWorkingForm">WorkingForm</label>
            </b-col>
            <b-col cols="2">
               <select id="cbWorkingForm">
                   <option v-for="item in dataWorkingForm" :key="item.id" :value="item.id">{{item.name}}</option>
               </select>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="1">
                <label label-for="cboTypeContract">ContractType </label>
            </b-col>
            <b-col cols="2">
                <select id="cboTypeContract" >
                    <option v-for="item in dataTypeContract" :key="item.id" :value="item.id">{{item.name}}</option>
                </select>
            </b-col>
            <b-col cols="1">
                <label label-for="txtContractNumber">ContractNumber </label>
            </b-col>
            <b-col cols="2">
                <input id="txtContractNumber" type="text" />
            </b-col>
            <b-col cols="1">
                <label label-for="txtEffectDate">EffectDate </label>
            </b-col>
            <b-col cols="2">
                <date-picker id="txtEffectDate" lang="en"
                             format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
            </b-col>
            <b-col cols="1">
                <label label-for="txtExpiryDate">ExpiryDate </label>
            </b-col>
            <b-col cols="2">
                <date-picker id="txtExpiryDate" lang="en"
                             format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="1">
                <label label-for="txtMorningStart">MorningStart </label>
            </b-col>
            <b-col cols="2">
                <date-picker id="txtMorningStart" lang="en" type="time"
                             format="HH:mm" :clearable="false" placeholder="Select Time"></date-picker>
            </b-col>
            <b-col cols="1">
                <label label-for="txtMorningFinish">MorningFinish </label>
            </b-col>
            <b-col cols="2">
                <date-picker id="txtMorningFinish" lang="en" type="time"
                             format="HH:mm" :clearable="false" placeholder="Select Time"></date-picker>
            </b-col>
            <b-col cols="1">
                <label label-for="txtAfternoonStart">AfternoonStart </label>
            </b-col>
            <b-col cols="2">
                <date-picker id="txtAfternoonStart" lang="en" type="time"
                             format="HH:mm" :clearable="false" placeholder="Select Time"></date-picker>
            </b-col>
            <b-col cols="1">
                <label label-for="txtAfternoonFinish">AfternoonFinish </label>
            </b-col>
            <b-col cols="2">
                <date-picker id="txtAfternoonFinish" lang="en" type="time"
                             format="HH:mm" :clearable="false" placeholder="Select Time"></date-picker>
            </b-col>
        </b-row>
        <b-row class="mt-3">
            <b-col cols="1">
                <label label-for="cboActflg">Actflg </label>
            </b-col>
            <b-col cols="2">
                <select id="cboActflg" ref="cboActflg"  v-on:change="changeActflg">
                    <option v-for="item in dataStatus" :key="item.id" :value="item.id">{{item.name}}  </option>
                </select>
            </b-col>
        </b-row>
        <b-row v-show="checked">
            <b-col cols="1">
                <label label-for="txtSignDate">SignDate </label>
            </b-col>
            <b-col cols="2">
                <date-picker id="txtSignDate" lang="en"
                             format="DD-MM-YYYY" :clearable="false"></date-picker>
            </b-col>
            <b-col cols="1">
                <label label-for="txtSigner">Signer </label>
            </b-col>
            <b-col cols="2">
                <!-- <input id="txtSigner" type="text" readonly ref="txtSigner" /> -->
                   <Autocomplete :items="itemsSignerContract" :isAsync="true" ref="autocompleteSignerContract" AutocompleteChangeEvent="AutocompleteSignerContractChange"
                    AutocompleteSelected="AutocompleteSignerContractSelected" :isDisplayFull="true"></Autocomplete>
                <button id="btnShowPopUpSigner" @click="ShowPopUpSigner" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
            </b-col>
            <b-col cols="1">
                <label label-for="lbTitleSigner">Title </label>
            </b-col>
            <b-col cols="2">
                <label ref="lbTitleSigner">  </label>
            </b-col>
        </b-row>
        <b-row v-show="checked">
            <b-col cols="1">
                <label label-for="txtNote">Note </label>
            </b-col>
            <b-col cols="10">
                <textarea>
                                </textarea>
            </b-col>
        </b-row>
 </div>
       <div id="newwagerecord" v-show="showWageRecord">
           <b-row class="mt-3">
                <b-col cols="1">
                    <label label-for="lbEmployeeCode">EmployeeCode</label>
                </b-col>
                <b-col cols="2">
                    <label ref="lbEmployeeCodeWage"></label>
                </b-col>
                <b-col cols="2">
                    <label label-for="lbNameEmployeeWage">FullName</label>
                </b-col>
                <b-col cols="2">
                    <label ref="lbNameEmployeeWage"> </label>
                </b-col>

                <b-col cols="2">
                    <label label-for="lbOrgWage">Organization</label>
                </b-col>
                <b-col cols="2">
                    <label ref="lbOrgWage"></label>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col cols="2">TitleGroup</b-col>
                <b-col cols="2">
                    <label ref="lbGroupTitleWage"></label>
                </b-col>
                <b-col cols="2">Title</b-col>
                <b-col cols="2">
                    <label ref="lbTitleWage"> </label>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col cols="1">
                    <label label-for="cboTypeDecision">TypeDecision</label>
                </b-col>
                <b-col cols="2">
                   <select id="cboTypeDecision" >
                       <option></option>
                       <option v-for="item in dataTypeDecision" :key="item.id" :value="item.id">{{item.name}}</option>
                   </select>
                </b-col>
                <b-col cols="1">
                    <label label-for="txtQD">NumberDecision</label>
                </b-col>
                <b-col cols="2">
                    <input id="txtQD" type="text"  />
                </b-col>
                  <b-col cols="1">
                    <label label-for="lbContractNumber">ContractNumber</label>
                </b-col>
                <b-col cols="2">
                  <label ref="lbContractNumber"></label>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col cols="1"><label label-for="txtEffectDate">EffectDate</label></b-col>
                <b-col cols="2">
                     <date-picker  id="txtEffectDate"   lang="en" v-model="effectDateSalary"
                             format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
                </b-col>
                <b-col cols="2"><label label-for="txtExpiryDate">ExpiryDate</label></b-col>
                <b-col cols="2">
                     <date-picker  id="txtExpiryDate"   lang="en" v-model="expireDateSalary"
                             format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
                </b-col>
                 <b-col cols="2">
                    <label label-for="lbContractNumber">Đối tượng bảo hiểm</label>
                </b-col>
                <b-col cols="2">
                 <select>
                   <option v-for="item in dataObjectInsurrance" :key="item.id" :value="item.id">{{item.name}}</option>
                 </select>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col cols="1"><label label-for="cboSalaryGroup">SalaryGroup</label></b-col>
                <b-col cols="2">
                    <select id="cboSalaryGroup" v-on:change="changeSalaryGroup" >
                        <option></option>
                          <option v-for="item in dataSalaryGroup" :key="item.id" :value="item.id">{{item.name}}</option>
                    </select>
                </b-col>
                <b-col cols="1"><label label-for="cboSalaryLevel">SalaryLevel</label></b-col>
                <b-col cols="2">
                    <select id="cboSalaryLevel" v-on:change="changeSalaryLevel" >
                        <option></option>
                        <option v-for="item in dataSalaryLevel" :key="item.id" :value="item.id">{{item.name}}</option>
                    </select>
                </b-col>
                <b-col cols="1"><label label-for="cboSalaryRank">SalaryRank</label></b-col>
                <b-col cols="2">
                    <select id="cboSalaryRank"  v-on:change="ChangeSalaryRank">
                        <option></option>
                         <option v-for="item in dataSalaryRank" :key="item.id" :value="item.id">{{item.name}}</option>
                    </select>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col cols="1"><label label-for="txtSalaryBasic">SalaryBasic</label></b-col>
                <b-col cols="2">
                    <input id="txtSalaryBasic" type="text" readonly v-model="salaryBasic"   ref="txtLuongcoban"  />
                </b-col>
                <b-col cols="1"><label label-for="txtSalaryPercent">SalaryPercent</label></b-col>
                <b-col cols="2">
                    <input id="txtSalaryPercent" type="number" @change="UpdateSumMoney"  />
                </b-col>
                <b-col cols="1"><label label-for="txtSalary">TotalSalary</label></b-col>
                <b-col cols="2">
                 <label ref="TotalSalary"> </label>
                </b-col>

            </b-row>
            <b-row class="mt-3">
                <button id="cboShowAll" type="button" class="btn btn-primary btn-custom" @click="changeShow">Show phu cap</button>
            </b-row>
            <b-row>
                <b-col cols="12" v-show="showWage" id="WageRecord">
                    <v-client-table :columns="columns" :data="data" :options="options" ref="tblWageRecord">
                        <template slot="selected" slot-scope="props">
                            <input type="checkbox" v-model="props.row.selected"  />
                        </template>
                        <template slot="isInsurrance" slot-scope="props">
                            <input type="checkbox" v-model="props.row.isInsurrance"  />
                        </template>
                        <template slot="amount" slot-scope="props">
                            <input type="text" v-model="props.row.amount" :ref="props.row.id+'*amount'"  />
                        </template>
                        <template slot="allowanceId" slot-scope="props">
                            <select v-model="props.row.allowanceId" >
                                <option v-for="or in dataAllownance" :value="or.id" :key="or.id">{{or.name}}   </option>
                            </select>
                        </template>
                        <div slot="act" slot-scope="props">
                            <button id="btnAdd" class="btn btn-primary btn-custom" type="button" @click="Addrow(props.row)" v-bind:ref="props.row.id+'*showEdit'">
                                <span class="fa fa-plus" />
                            </button>
                            <button id="btnDenny" class="btn btn-danger btn-custom" type="button" @click="Deleterow(props.row)" v-bind:ref="props.row.id+'*denny'">
                                <span class="fa fa-close" />
                            </button>
                        </div>
                    </v-client-table>
                </b-col>
            </b-row>
            <b-row>
              <b-col cols="1">TotalAllowance</b-col>
              <b-col cols="2">
                <label ref="lbTotalAllowance"></label>
              </b-col>
                 <b-col cols="1"><label label-for="txtSalaryTotal">TotalIncome</label></b-col>
                <b-col cols="2">
                    <input id="txtSalaryTotal" type="text" ref="sumMoney" readonly v-model="salaryTotal" />
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col cols="1">
                    Actflg
                </b-col>
                <b-col cols="2">
                    <select id="cboActive"  v-on:change="changeAppect">
                      <option></option>
                     <option v-for="item in dataACTIVEDECISION" :key="item.id" :value="item.id">{{item.name}}  </option>
                    </select>
                </b-col>
                <b-col cols="12" v-show="show">
                    <b-row class="mt-3">
                        <b-col cols="1">SignDate </b-col>
                        <b-col cols="2">
                              <date-picker  lang="en" v-model="SignDate"
                             format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
                        </b-col>
                        <b-col cols="1">Signer</b-col>
                        <b-col cols="2">
                            <!-- <label ref="lbSigner"></label> -->
                        <Autocomplete :items="itemsSignerWage" :isAsync="true" ref="autocompleteSignerWage" AutocompleteChangeEvent="AutocompleteSignerWageChange"
                         AutocompleteSelected="AutocompleteSignerWageSelected" :isDisplayFull="true"></Autocomplete>
                            <button @click="ShowPopUpSignerWage" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </b-col>
                        <b-col cols="1">Title</b-col>
                        <b-col cols="2">
                         <label ref="lbTitleSignerWage"> </label>
                            </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col cols="1">Note</b-col>
                        <b-col cols="10">
                            <textarea cols="100">
                            </textarea>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
   </div>
        <b-row>
            <b-col cols="3">
                <b-button id="btnSubmit" type="button" variant="primary" @click="onSubmit" v-show="!showWageRecord">Submit</b-button>
                <b-button id="btnSaveAndContinue" type="button" variant="success"  v-show="!showWageRecord" @click="onSaveAndContinue">Continue</b-button>
                <b-button id="btnEdit" type="button" variant="danger" @click="onEdit" v-show="showWageRecord">Back</b-button>
                <b-button id="btnSaveWageRecord" type="button" variant="success"  v-show="showWageRecord" @click="onSaveWageRecord">Submit</b-button>

            </b-col>
        </b-row>
        <b-modal id="showPopUpManager" ref="showPopUpManager" size="lg" title="Employee" :lazy="true" :hide-footer="true">
            <PopUpManager :data="listOrg" typeManager="ChooseManagerId"></PopUpManager>
        </b-modal>
        <b-modal id="showPopUpSigner" ref="showPopUpSigner" size="lg" title="Signer Employee" :lazy="true" :hide-footer="true">
            <PopUpManager :data="listOrg" typeManager="ChooseSignerId"></PopUpManager>
        </b-modal>
    </b-form>
</template>
<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import DatePicker from "vue2-datepicker";
import PopUpManager from "../tochuc/PopUpManager.vue";
import Autocomplete from "../tochuc/Autocomplete.vue";
import _ from "lodash";

export default {
  name: "NewContract",
  components: {
    DatePicker,
    PopUpManager,
    Autocomplete
  },
  data: () => {
    return {
      items: ["sida", "soda", "coffe", "bread"],
      itemsSignerContract: ["meta", "beta", "alpha", "blood"],
      dataWorkingForm: [],
      dataTypeDecision: [],
      effectDateSalary: "",
      expireDateSalary: "",
      dataObjectInsurrance: [],
      showWageRecord: false,
      listOrg: [],
      PenddingId: "",
      dataTitle: [],
      dataTypeContract: [],
      dataDecisionNumber: [],
      dataStatus: [],
      dataOrg: [],
      checked: false,
      showcheckbox: false,
      multiple: false,
      size: "large",
      batch: false,
      whole: false,
      nodots: false,
      collapse: false,
      MorningStart: "",
      MorningFinish: "",
      AfternoonStart: "",
      AfternoonFinish: "",
      ExpireDate: "",
      EffectDate: "",
      expireDate: "",
      effectDate: "",
      hidefooter: true,
      organization: { nameVN: "", code: "", foundationDate: "" },
      list: [],
      options: {
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
          allowance: function(h) {
            return "Allowance";
          },
          money: function(h) {
            return "Money";
          },
          date: function(h) {
            return "EffectDate";
          },
          insurrance: function(h) {
            return "Insurrance";
          },
          act: function(h) {
            return "Act";
          },
          basicsalary: function(h) {
            return "Basicsalary";
          }
        }
      },
      columns: [
        "selected",
        "allowance",
        "money",
        "date",
        "isInsurrance",
        "basicsalary",
        "act"
      ],
      dataSalaryGroup: [],
      dataSalaryLevel: [],
      dataSalaryRank: [],
      dataACTIVEDECISION: [],
      salaryBasic: "",
      showWage: false,
      data: [
        {
          selected: false,
          allowance: "ăn trưa",
          money: "1003230",
          date: "10/10/2019",
          isInsurrance: false,
          basicsalary: "10000"
        },
        {
          selected: false,
          allowance: "ăn trưa",
          money: "1003230",
          date: "10/10/2019",
          isInsurrance: false,
          basicsalary: "10000"
        },
        {
          selected: false,
          allowance: "ăn trưa",
          money: "1003230",
          date: "10/10/2019",
          isInsurrance: false,
          basicsalary: "10000"
        },
        {
          selected: false,
          allowance: "ăn trưa",
          money: "1003230",
          date: "10/10/2019",
          isInsurrance: true,
          basicsalary: "10000"
        }
      ],
      salaryTotal: "",
      show: false,
      SignDate: "",
      itemsSignerWage: []
    };
  },
  methods: {
    changeSalaryGroup() {},
    changeSalaryLevel() {},
    ChangeSalaryRank() {},
    UpdateSumMoney() {},
    changeShow() {
      this.showWage = !this.showWage;
    },
    changeAppect() {},
    ShowPopUpSignerWage() {},
    onEdit() {},
    onSaveWageRecord() {},
    ShowPopUpManager() {
      this.$refs.showPopUpManager.show();
    },
    async onSaveAndContinue() {
      this.showWageRecord = true;
    },
    getEmployeeInfomation(emp) {
      this.$refs.txtEmployeeCode.value = emp.employeeCode;
      this.$refs.lbFullName.innerHTML =
        emp.firstName.trim() + " " + emp.lastName.trim();
      this.$refs.lbOrg.innerHTML = emp.organization.name;
      let groupID = "";
      this.$refs.showPopUpManager.hide();
    },

    ShowPopUpSigner() {
      this.$refs.showPopUpSigner.show();
    },
    async getSignerInformation(emp) {},
    onSubmit() {},
    changeActflg() {
      if (!_.isEqual(this.CreateContract.statusId, this.PenddingId)) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    }
  }
};
</script>
