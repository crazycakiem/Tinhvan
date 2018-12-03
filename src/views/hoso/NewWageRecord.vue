<template>
    <div>
        <h3>Add Wage</h3>
        <b-form v-on:submit.prevent>
            <b-row class="mt-3">
                <b-col cols="1">
                    <label label-for="lbEmployeeCode">EmployeeCode</label>
                </b-col>
                <b-col cols="2">
                    <!-- <label ref="lbEmployeeCode"></label> -->
                    <Autocomplete :items="items" :isAsync="true" ref="autocompleteEmployee" AutocompleteChangeEvent="AutocompleteEmployeeChange" AutocompleteSelected="AutocompleteEmployeeSelected"></Autocomplete>
                    <button @click="ShowPopUpEmployee"><i class="fa fa-search" aria-hidden="true"></i></button>
                </b-col>
                <b-col cols="2">
                    <label label-for="lbName">Name</label>
                </b-col>
                <b-col cols="2">
                    <label ref="lbName"> </label>
                </b-col>

                <b-col cols="2">
                    <label label-for="lbOrg">Organization</label>
                </b-col>
                <b-col cols="2">
                    <label ref="lbOrg"></label>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col cols="2">TitleGroup</b-col>
                <b-col cols="2">
                    <label ref="lbTitleGroup"></label>
                </b-col>
                <b-col cols="2">Title</b-col>
                <b-col cols="2">
                    <label ref="lbTitle"> </label>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col cols="1">
                    <label label-for="cboTypeDecision">TypeDecision</label>
                </b-col>
                <b-col cols="2">
                   <select id="cboTypeDecision">
                       <option></option>
                       <option v-for="item in dataTypeDecision" :key="item.id" :value="item.id">{{item.name}}</option>
                   </select>
                </b-col>
                <b-col cols="1">
                    <label label-for="txtQD">NumberDecision</label>
                </b-col>
                <b-col cols="2">
                    <input id="txtQD" type="text"   />
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col cols="1"><label label-for="txtEffectDate">EffectDate</label></b-col>
                <b-col cols="2">
                     <date-picker  id="txtEffectDate"   lang="en" 
                             format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
                </b-col>
                <b-col cols="1"><label label-for="txtExpiryDate">ExpiryDate</label></b-col>
                <b-col cols="2">
                     <date-picker  id="txtExpiryDate"   lang="en" 
                             format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col cols="1"><label label-for="cboSalaryGroup">SalaryGroup</label></b-col>
                <b-col cols="2">
                    <select id="cboSalaryGroup" v-on:change="changeSalaryGroup">
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
                    <input id="txtSalaryPercent" type="number"  />
                </b-col>
                <b-col cols="1"><label label-for="txtSalaryTotal">SalaryTotal</label></b-col>
                <b-col cols="2">
                    <input id="txtSalaryTotal" type="text" ref="sumMoney" readonly v-model="salaryTotal" />
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <button id="cboShowAll" class="btn btn-primary btn-custom" @click="changeShow">Show phu cap</button>
            </b-row>
            <b-row>
                <b-col cols="12" v-show="showWage" id="WageRecord">
                    <v-client-table :columns="columns" :data="data" :options="options" ref="tblWageRecord">
                        <template slot="selected" slot-scope="props">
                            <input type="checkbox" v-model="props.row.selected" v-on:change="CheckCheckBox(props.row)" />
                        </template>
                        <template slot="effectDate" slot-scope="props">
                              <date-picker  lang="en" v-model="props.row.effectDate" @change="closeDatepicker(props.row)"
                             format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
                        </template>
                         <template slot="expireDate" slot-scope="props">
                              <date-picker  lang="en" v-model="props.row.expireDate" @change="closeDatepicker(props.row)"
                             format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
                        </template>
                        <template slot="isInsurrance" slot-scope="props">
                            <input type="checkbox" v-model="props.row.isInsurrance" v-on:change="CheckboxInsurrance(props.row)" />
                        </template>
                        <template slot="amount" slot-scope="props">
                            <input type="text" v-model="props.row.amount" :ref="props.row.id+'*amount'" @change="focusOut1(props.row)" />
                        </template>
                        <template slot="allowanceId" slot-scope="props">
                            <select v-model="props.row.allowanceId" v-on:change="ChangeAllowance(props.row)">
                                <option v-for="or in dataAllownance" :value="or.id" :key="or.id">{{or.name}}   </option>
                            </select>
                        </template>
                        <div slot="act" slot-scope="props">
                            <button id="btnAdd" class="btn btn-primary btn-custom" type="button" @click="Addrow(props.row)" v-bind:ref="props.row.id+'*showEdit'">
                                <span class="fa fa-plus" />
                            </button>
                            <button id="btnDenny" class="btn btn-danger btn-custom" @click="Deleterow(props.row)" v-bind:ref="props.row.id+'*denny'">
                                <span class="fa fa-close" />
                            </button>
                        </div>
                    </v-client-table>
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
                            <label ref="lbSigner"></label>
                            <b-btn @click="ShowPopUpSigner"><i class="fa fa-search" aria-hidden="true"></i></b-btn>
                        </b-col>
                        <b-col cols="1">Title</b-col>
                        <b-col cols="2">
                         <label ref="lbTitleSigner"> </label>
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
            <b-row class="mt-3">
                <b-col cols="6">
                    <b-button id="btnSubmit" type="submit" variant="primary" @click="onSubmit">Submit</b-button>
                    <b-button id="btnSubmitAndContinue" type="submit" variant="success" @click="onSubmitAndContinue">SubmitAndContinue</b-button>
                    <b-button id="btnReset" type="button" variant="danger" @click="onReset">Reset</b-button>
                </b-col>
            </b-row>
        </b-form>

        <b-modal id="showPopUpManager" ref="showPopUpManager" size="lg" title="Employee" :lazy="true" :hide-footer="true">
            <PopUpManager :data="listOrg" typeManager="ChooseManagerId"></PopUpManager>
        </b-modal>
         <b-modal id="showPopUpSigner" ref="showPopUpSigner" size="lg" title="Signer" :lazy="true" :hide-footer="true">
            <PopUpManager :data="listOrg" typeManager="ChooseSignerId"></PopUpManager>
        </b-modal>
    </div>
</template>
<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import DatePicker from "vue2-datepicker";
import PopUpManager from "../tochuc/PopUpManager.vue";
import _ from "lodash";
import Autocomplete from "../tochuc/Autocomplete.vue";

export default {
  name: "NewWageRecord",
  components: {
    DatePicker,
    PopUpManager,
    Autocomplete
  },
  data: () => {
    return {
      // data: [
      //   {
      //     selected: false,
      //     effectDate: "10/10/2018",
      //     allowanceId: "me",
      //     expireDate: "10/10/2018",
      //     isInsurrance: false,
      //     amount: "200.000"
      //   },
      //   {
      //     selected: false,
      //     effectDate: "10/10/2018",
      //     allowanceId: "me",
      //     expireDate: "10/10/2018",
      //     isInsurrance: false,
      //     amount: "200.000"
      //   },
      //   {
      //     selected: false,
      //     effectDate: "10/10/2018",
      //     allowanceId: "me",
      //     expireDate: "10/10/2018",
      //     isInsurrance: false,
      //     amount: "200.000"
      //   },
      //   {
      //     selected: false,
      //     effectDate: "10/10/2018",
      //     allowanceId: "me",
      //     expireDate: "10/10/2018",
      //     isInsurrance: false,
      //     amount: "200.000"
      //   }
      // ],
      organization: { nameVN: "", code: "", foundationDate: "" },
      list: [],
      listOrg: [],
      currencyValue: 0,
      formattedCurrencyValue: "0.00",
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
          },
          basicsalary: function(h) {
            return "Basicsalary";
          }
        }
      },
      columns: [
        "selected",
        "allowanceId",
        "amount",
        "effectDate",
        "expireDate",
        "isInsurrance",
        "act"
      ],
      items: ["aa", "baana", "meta"],
      PenddingId: "",
      salaryBasic: "0",
      salaryTotal: "0",
      changeAllowance: false,
      salarygroup: "",
      workingallowance: [],
      salarylevel: "",
      dataTypeDecision: [],
      dataSalaryGroup: [],
      dataSalaryLevel: [],
      dataSalaryRank: [],
      dataACTIVEDECISION: [],
      showcheckbox: true,
      SignDate: "",
      showWage: false,
      show: false,
      data: [],
      sumMoney: 0,
      size: "small",
      batch: false,
      whole: true,
      nodots: false,
      collapse: true,
      multiple: false,
      errors: [],
      ParentRequired: "",
      FoundationDateRequired: "",
      NameRequired: "",
      dataAllownance: [
        {
          id: "1",
          name: "Ăn trưa"
        },
        {
          id: "2",
          name: "Tàu xe"
        },
        { id: "3", name: "Điện thoại" }
      ]
    };
  },
  methods: {
    ChangeMoney(evt) {
      this.data.forEach((key, index) => {
        if (_.isEqual(evt.id, key.id)) {
          _.assign(key, evt);
        }
      });
    },

    async ShowTreeVue() {},
    close() {
      this.$refs.newOrganizationModal.hide();
    },
    GenGuidId() {
      return (
        "_" +
        Math.random()
          .toString(36)
          .substr(2, 9)
      );
    },
    ChangeAllowance(evt) {
      console.log(this.data);
      console.log(evt);
      for (let i = 0; i < this.data.length; i++) {
        if (_.isEqual(evt.id, this.data[i].id)) {
          this.data[i].allowanceId = evt.allowanceId;
          break;
        }
      }
    },
    CheckCheckBox(evt) {},
    CheckboxInsurrance(evt) {
      for (let i = 0; i < this.data.length; i++) {
        if (_.isEqual(evt.id, this.data[i].id)) {
          this.data[i].isInsurrance = evt.isInsurrance;
          break;
        }
      }
    },
    focusOut1(evt) {
      for (let i = 0; i < this.data.length; i++) {
        if (_.isEqual(this.data[i].id, evt.id)) {
          break;
        }
      }
      this.UpdateSumMoney();
    },
    async onSubmitAndContinue(evt) {},
    async onSubmit(evt) {},
    onReset(evt) {},
    ShowPopUpEmployee() {},
    async getEmployeeInformation(data) {},
    ShowPopUpSigner() {},
    async getSignerInfomation(data) {},
    Addrow(evt) {
      this.data.push({
        effectDate: "",
        expireDate: "",
        selected: false,
        allowanceId: "1",
        amount: 0,
        isInsurrance: false,
        basicsalary: false,
        id: this.GenGuidId()
      });
    },
    Deleterow(evt) {
      const leng = this.data.length;
      if (leng > 1) {
        this.data.forEach((key, index) => {
          if (_.isEqual(evt.id, key.id)) {
            this.data.splice(index, 1);
          }
        });
      }
      this.UpdateSumMoney();
    },
    UpdateSumMoney() {
      if (!_.isNumber(this.createSalary.salaryBasic)) {
        this.createSalary.salaryBasic = 0;
      }
      let sum = parseFloat(this.createSalary.salaryBasic.toString());
      this.data.forEach((key, index) => {
        if (key.basicsalary)
          sum += parseFloat(key.amount.toString().replace(/[^\d\.]/g, ""));
      });
    },

    checkbox(evt) {
      this.data.forEach((key, index) => {
        if (_.isEqual(evt.id, key.id)) {
          _.assign(key, evt);
        }
      });
    },
    closeDatepicker(evt) {
      this.data.forEach((key, index) => {
        if (_.isEqual(evt.id, key.id)) {
          _.assign(key, evt);
        }
      });
    },
    async changeSalaryGroup() {},
    async changeSalaryLevel() {},
    async ChangeSalaryRank() {},
    checkboxBasicsalary(evt) {
      this.data.forEach((key, index) => {
        if (_.isEqual(evt.id, key.id)) {
          _.assign(key, evt);
        }
      });
      this.UpdateSumMoney();
    },
    changeAppect(evt) {
      if (!_.isEqual(this.createSalary.statusId, this.PenddingId)) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    changeShow() {
      this.showWage = !this.showWage;
    }
  },
  created() {
    this.showcheckbox = true;
    this.size = "small";
    this.batch = false;
    this.whole = true;
    this.nodots = false;
    this.collapse = true;
    this.multiple = false;
    this.data = [
      {
        effectDate: "",
        expireDate: "",
        selected: false,
        allowanceId: "1",
        amount: 0,
        isInsurrance: false,
        id: this.GenGuidId()
      }
    ];
    //call get typeDecistion
  }
};
</script>
