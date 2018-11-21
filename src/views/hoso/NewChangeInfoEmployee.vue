<template>
    <b-form>
        <b-row class="mt-3">
            <b-col cols="1">
                <label label-for="txtEmployeeCode">EmployeeCode</label>
            </b-col>
            <b-col cols="2">
                <!-- <input id="txtEmployeeCode" type="text" readonly ref="txtEmployeeCode" /> -->
                  <Autocomplete :items="items" :isAsync="true" ref="autocompleteEmployee" AutocompleteChangeEvent="AutocompleteEmployeeChange"
                              AutocompleteSelected="AutocompleteEmployeeSelected" :isDisplayFull="false"></Autocomplete>
                <button id="btnShowPopUpEmployee" @click="ShowPopUpEmployee"><i class="fa fa-search" aria-hidden="true"></i></button>
            </b-col>
            <b-col cols="1">
                <label label-for="txtFullName">FullName</label>
            </b-col>
            <b-col cols="2">
                <input id="txtFullName" type="text" readonly ref="txtFullName" />
            </b-col>
            <b-col cols="1">
                <label label-for="txtOrg">Organization</label>
            </b-col>
            <b-col cols="2">
                <input id="txtOrg" type="text" readonly ref="txtOrg" />
                <button id="btnShowOrg" @click="showOrg"><i class="fa fa-search" aria-hidden="true"></i></button>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="1">
                <label label-for="lbGroupTitle">GroupTitle </label>
            </b-col>
            <b-col cols="2">
                <label ref="lbGroupTitle"></label>
            </b-col>
            <b-col cols="1">
                <label label-for="cboTitle">Title </label>
            </b-col>
            <b-col cols="2">
                <select id="cboTitle" v-model="titleId" v-on:change="ChangeNewTitle">
                    <option></option>
                    <option v-for="item in dataTitle" :key="item.titleId" :value="item.titleId">{{item.title.name}} </option>
                </select>
            </b-col>
            <!-- <b-col cols="1">
                <label label-for="lbManager">Manager </label>
            </b-col>
            <b-col cols="2">
                <label ref="lbManager"></label>
                <b-btn id="btnShowPopUpManager" @click="ShowPopUpManager"><i class="fa fa-search" aria-hidden="true"></i></b-btn>
            </b-col> -->
        </b-row>
        <b-row>
            <b-col cols="1">
                <label label-for="txtTypeDecision">TypeDecision </label>
            </b-col>
            <b-col cols="2">
                <select id="cboTypeDecision" >
                    <option v-for="item in dataTypeDecision" :key="item.id" :value="item.id">{{item.name}}</option>
                </select>
            </b-col>
            <b-col cols="1">
                <label label-for="txtDecisionNumber">DecisionNumber </label>
            </b-col>
            <b-col cols="2">
                <!-- <select id="cboDecisionNumber" >
                    <option v-for="item in dataDecisionNumber" :key="item.id" :value="item.id">{{item.name}}</option>
                </select> -->
                <input id="txtDecisionNumber" type="text" />
            </b-col>
            <b-col cols="1">
                <label label-for="txtEffectDate">EffectDate </label>
            </b-col>
            <b-col cols="2">
                <date-picker id="txtEffectDate" lang="en"
                             format="DD-MM-YYYY" :clearable="false"></date-picker>
            </b-col>
            <b-col cols="1">
                <label label-for="txtExpiryDate">ExpiryDate </label>
            </b-col>
            <b-col cols="2">
                <date-picker id="txtExpiryDate" lang="en"
                             format="DD-MM-YYYY" :clearable="false"></date-picker>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="1">
                <label label-for="cboActflg">Actflg </label>
            </b-col>
            <b-col cols="2">
                <select id="cboActflg" @change="changeActflg" ref="cboActflg">
                    <option></option>
                    <option v-for="item in dataACTIVEDECISION" :key="item.id" :value="item.id">{{item.name}}  </option>
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
                <input id="txtSigner" type="text" readonly ref="txtSigner" />
                <b-btn id="btnShowPopUpSigner" @click="ShowPopUpSigner"><i class="fa fa-search" aria-hidden="true"></i></b-btn>
            </b-col>
            <b-col cols="1">
                <label label-for="lbTitleSigner">Title </label>
            </b-col>
            <b-col cols="2">
                <label ref="lbTitleSigner"></label>
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
        <b-row>
            <b-col cols="3">
                <b-button id="btnSubmit" type="button" variant="primary" @click="onSubmit">Submit</b-button>
            </b-col>
        </b-row>
        <b-modal id="showPopUpEmployee" ref="showPopUpEmployee" size="lg" title="Employee" :lazy="true" :hide-footer="true">
            <PopUpManager :data="listOrg" typeManager="ChooseEmployeeId"></PopUpManager>
        </b-modal>
        <b-modal id="showPopUpManager" ref="showPopUpManager" size="lg" title="Manager" :lazy="true" :hide-footer="true">
            <PopUpManager :data="listOrg" typeManager="ChooseManagerId"></PopUpManager>
        </b-modal>
        <b-modal id="showPopUpSigner" ref="showPopUpSigner" size="lg" title="Signer" :lazy="true" :hide-footer="true">
            <PopUpManager :data="listOrg" typeManager="ChooseSignerId"></PopUpManager>
        </b-modal>
        <b-modal ref="org" size="lg" title="Using Component Methods">
            <TreeVue :showcheckbox="showcheckbox" :data="listOrg" :multiple="multiple"
                     :size="size" :batch="batch" :whole="whole" :nodots="nodots" @item-click="selectOrg($event)"
                     :collapse="collapse"></TreeVue>
            <div slot="modal-footer" class="float-right">
            </div>
        </b-modal>
    </b-form>
</template>
<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import DatePicker from "vue2-datepicker";
import Autocomplete from "../tochuc/Autocomplete.vue";
import PopUpManager from "../tochuc/PopUpManager.vue";
import _ from "lodash";

export default {
  name: "NewChangeInfoEmployee",
  components: {
    DatePicker,
    PopUpManager,
    Autocomplete
  },
  data: () => {
    return {
      list: [],
      listOrg: [],
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
        "insurrance",
        "basicsalary",
        "act"
      ],
      items: [],
      PenddingId: "",
      titleId: "",
      dataTitle: [],
      dataTypeDecision: [],
      dataDecisionNumber: [],
      dataACTIVEDECISION: [],
      dataOrg: [],
      checked: false,
      showcheckbox: false,
      multiple: false,
      size: "large",
      batch: false,
      whole: false,
      nodots: false,
      collapse: false
    };
  },
  methods: {
    async showOrg() {
      this.$refs.org.show();
    },
    ShowPopUpEmployee() {
      this.$refs.showPopUpEmployee.show();
    },
    ShowPopUpManager() {
      this.$refs.showPopUpManager.show();
    },
    async getManagerInformation(data) {
      this.CreateChangeInformationEmployee.snapshot.managerId = data.id;
      this.CreateChangeInformationEmployee.snapshot.managerName =
        data.firstName.trim() + " " + data.lastName.trim();
      this.$refs.lbManager.innerHTML =
        data.firstName.trim() + " " + data.lastName.trim();
    },

    ShowPopUpSigner() {
      this.$refs.showPopUpSigner.show();
    },
    async getSingerInformation(data) {
      this.$refs["showPopUpSigner"].hide();
    },

    async onSubmit() {},
    async selectOrg(evt) {
      this.$refs.org.hide();
    },
    changeActflg(evt) {
      if (
        !_.isEqual(
          this.CreateChangeInformationEmployee.statusId,
          this.PenddingId
        )
      ) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
    ChangeNewTitle() {
      this.dataTitle.forEach((key, index) => {
        if (_.isEqual(key.title.id, this.titleId)) {
          this.CreateChangeInformationEmployee.snapshot.titleId = this.titleId;
          this.CreateChangeInformationEmployee.snapshot.titleName =
            key.title.name;
        }
      });
    }
  }
};
</script>
