<template>
  <b-form>
    <b-row class="mt-3">
      <b-col cols="1">
        <label label-for="txtEmployeeCode">Mã nhân viên</label>
      </b-col>
      <b-col cols="2">
        <!-- <input id="txtEmployeeCode" type="text" readonly ref="txtEmployeeCode" /> -->
        <Autocomplete :items="items" :isAsync="false" ref="autocomplete" :isDisplayFull="false"></Autocomplete>
        <button type="button" id="btnShowPopUpEmployee" @click="ShowPopUpEmployee">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </b-col>
      <b-col cols="1">
        <label label-for="txtFullName">Tên đầy đủ</label>
      </b-col>
      <b-col cols="2">
        <label ref="lbFullName">Hoàng văn hòa</label>
      </b-col>
      <b-col cols="1">
        <label label-for="txtOrg">Tổ chức</label>
      </b-col>
      <b-col cols="2">
        <input id="txtOrg" type="text" readonly ref="txtOrg" value="Tinh vân cónultng">
        <button type="button" id="btnShowOrg" @click="showOrg">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="1">
        <label label-for="lbGroupTitle">Nhóm chức danh</label>
      </b-col>
      <b-col cols="2">
        <label ref="lbGroupTitle">Nhân viên</label>
      </b-col>
      <b-col cols="1">
        <label label-for="cboTitle">Chức danh</label>
      </b-col>
      <b-col cols="2">
        <select id="cboTitle" v-on:change="ChangeNewTitle">
          <option></option>
          <option v-for="item in dataTitle" :key="item.titleId" :value="item.titleId">{{item.name}}</option>
        </select>
      </b-col>
      <!-- <b-col cols="1">
                <label label-for="lbManager">{{$t('Manager')}} </label>
            </b-col>
            <b-col cols="2">
                <label ref="lbManager"></label>
                <b-btn id="btnShowPopUpManager" @click="ShowPopUpManager"><i class="fa fa-search" aria-hidden="true"></i></b-btn>
      </b-col>-->
    </b-row>
    <b-row>
      <b-col cols="1">
        <label label-for="txtTypeDecision">Loại quyết định</label>
      </b-col>
      <b-col cols="2">
        <select id="cboTypeDecision">
          <option v-for="item in dataTypeDecision" :key="item.id" :value="item.id">{{item.name}}</option>
        </select>
      </b-col>
      <b-col cols="1">
        <label label-for="txtDecisionNumber">Số quyết định</label>
      </b-col>
      <b-col cols="2">
        <!-- <select id="cboDecisionNumber" >
                    <option v-for="item in dataDecisionNumber" :key="item.id" :value="item.id">{{item.name}}</option>
        </select>-->
        <input id="txtDecisionNumber" type="text" value="3984384723">
      </b-col>
      <b-col cols="1">
        <label label-for="txtEffectDate">Ngày hiệu lực</label>
      </b-col>
      <b-col cols="2">
        <date-picker id="txtEffectDate" lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
      </b-col>
      <b-col cols="1">
        <label label-for="txtExpiryDate">Ngày hết hiệu lực</label>
      </b-col>
      <b-col cols="2">
        <date-picker id="txtExpiryDate" lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="1">
        <label label-for="cboActflg">Tình trạng</label>
      </b-col>
      <b-col cols="2">
        <select id="cboActflg" @change="changeActflg" ref="cboActflg">
          <option></option>
          <option v-for="item in dataACTIVEDECISION" :key="item.id" :value="item.id">{{item.name}}</option>
        </select>
      </b-col>
    </b-row>
    <b-row v-show="checked">
      <b-col cols="1">
        <label label-for="txtSignDate">Ngày ký</label>
      </b-col>
      <b-col cols="2">
        <date-picker id="txtSignDate" lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
      </b-col>
      <b-col cols="1">
        <label label-for="txtSigner">Người ký</label>
      </b-col>
      <b-col cols="2">
        <!-- <input id="txtSigner" type="text" readonly ref="txtSigner"> -->
        <Autocomplete :items="items" :isAsync="false" ref="autocomplete" :isDisplayFull="false"></Autocomplete>
        <b-btn id="btnShowPopUpSigner" @click="ShowPopUpSigner">
          <i class="fa fa-search" aria-hidden="true"></i>
        </b-btn>
      </b-col>
      <b-col cols="1">
        <label label-for="lbTitleSigner">Chức vụ</label>
      </b-col>
      <b-col cols="2">
        <label ref="lbTitleSigner">Trưởng phòng</label>
      </b-col>
    </b-row>
    <b-row v-show="checked">
      <b-col cols="1">
        <label label-for="txtNote">Ghi chú</label>
      </b-col>
      <b-col cols="10">
        <textarea></textarea>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3">
        <b-button id="btnSubmit" type="button" variant="primary" @click="onSubmit">Lưu</b-button>
      </b-col>
    </b-row>
    <b-modal
      id="showPopUpEmployee"
      ref="showPopUpEmployee"
      size="lg"
      title="Employee"
      :lazy="true"
      :hide-footer="true"
    >
      <PopUpManager :data="listOrg" typeManager="ChooseEmployeeId"></PopUpManager>
    </b-modal>
    <b-modal
      id="showPopUpManager"
      ref="showPopUpManager"
      size="lg"
      title="Manager"
      :lazy="true"
      :hide-footer="true"
    >
      <PopUpManager :data="listOrg" typeManager="ChooseManagerId"></PopUpManager>
    </b-modal>
    <b-modal
      id="showPopUpSigner"
      ref="showPopUpSigner"
      size="lg"
      title="Signer"
      :lazy="true"
      :hide-footer="true"
    >
      <PopUpManager :data="listOrg" typeManager="ChooseSignerId"></PopUpManager>
    </b-modal>
    <b-modal ref="org" size="lg" title="Using Component Methods">
      <!-- <TreeVue
        :showcheckbox="showcheckbox"
        :data="listOrg"
        :multiple="multiple"
        :size="size"
        :batch="batch"
        :whole="whole"
        :nodots="nodots"
        @item-click="selectOrg($event)"
        :collapse="collapse"
      ></TreeVue>-->
      <div slot="modal-footer" class="float-right"></div>
    </b-modal>
  </b-form>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { bus } from "../../../main";
import DatePicker from "vue2-datepicker";
import Autocomplete from "../../tochuc/Autocomplete.vue";
import PopUpManager from "../../tochuc/PopUpManager.vue";
import _ from "lodash";
export default {
  name: "NewChangeInfo",
  components: { DatePicker, PopUpManager, Autocomplete },
  data: () => {
    return {
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
            return this.$t("Act");
          },
          basicsalary: function(h) {
            return this.$t("Basicsalary");
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
      listOrg: [],
      dataTypeDecision: [
        {
          id: 1,
          name: "QUyeet dinh diue chuyen"
        },
        {
          id: 2,
          name: "Quyet dinh thuyen chuyen"
        }
      ],
      dataACTIVEDECISION: [
        {
          id: 1,
          name: "Phe duyet"
        },
        {
          id: 2,
          name: "tu choi"
        },
        {
          id: 3,
          name: "Cho phe duyet"
        }
      ],
      PenddingId: 3,
      itemSigners: [
        "Hoang van Hoa",
        "Nguyen Ngoc GIang",
        "Lê văn thăng",
        "Nguyễn thành Nam"
      ],
      items: [
        "Hoang van Hoa",
        "Nguyen Ngoc GIang",
        "Lê văn thăng",
        "Nguyễn thành Nam"
      ],
      titleId: "",
      dataTitle: [
        {
          id: 1,
          name: "Giam doc"
        },
        {
          id: 2,
          name: "Pho giam doc"
        },
        {
          id: 3,
          name: "Nhan vien"
        }
      ],
      dataDecisionNumber: [],
      dataOrg: [],
      checked: true,
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
    async created() {
      this.AutocompleteInit();
    },
    AutocompleteInit() {
      bus.$on("AutocompleteEmployeeChange", data => {
        if (!_.isEqual(data, "")) {
        }
      });
      bus.$on("AutocompleteEmployeeSelected", data => {
        if (!_.isNull(data)) {
          this.getEmployeeInformation(data);
        }
      });
      bus.$on("AutocompleteSignerChange", data => {
        if (!_.isEqual(data, "")) {
        }
      });
      bus.$on("AutocompleteSignerSelected", data => {
        if (!_.isNull(data)) {
          this.getSingerInformation(data);
        }
      });
    },

    async showOrg() {
      this.$refs.org.show();
    },
    ShowPopUpEmployee() {
      this.$refs.showPopUpEmployee.show();
      bus.$on("ChooseEmployeeId", data => {
        console.log(data);
        this.getEmployeeInformation(data);
      });
    },
    ShowPopUpManager() {
      this.$refs.showPopUpManager.show();
      bus.$on("ChooseManagerId", data => {
        console.log(data);
        this.getManagerInformation(data);
        this.$refs.showPopUpManager.hide();
      });
    },
    async getManagerInformation(data) {
      this.$refs.lbManager.innerHTML =
        data.firstName.trim() + " " + data.lastName.trim();
    },
    async getEmployeeInformation(data) {
      // (this.$refs.txtEmployeeCode ).value = data.employeeCode;
      this.$refs["autocompleteEmployee"].$refs.txtautocomplete.value =
        data.employeeCode;
      this.$refs.lbFullName.innerHTML =
        data.firstName.trim() + " " + data.lastName.trim();
      this.$refs.txtOrg.value = data.organization.name;
      this.$refs.showPopUpEmployee.hide();
    },

    ShowPopUpSigner() {
      this.$refs.showPopUpSigner.show();
      bus.$on("ChooseSignerId", data => {
        this.getSingerInformation(data);
      });
    },
    async getSingerInformation(data) {
      // (this.$refs.txtSigner ).value =
      //   data.firstName.trim() + " " + data.lastName.trim();
      this.$refs["autocompleteSigner"].$refs.txtautocomplete.value =
        data.employeeCode +
        "-" +
        data.firstName.trim() +
        " " +
        data.lastName.trim();
    },

    async onSubmit() {
      try {
      } catch (err) {}
    },
    async selectOrg(evt) {
      this.$refs.org.hide();
    },
    changeActflg(evt) {},
    ChangeNewTitle() {}
  }
};
</script>