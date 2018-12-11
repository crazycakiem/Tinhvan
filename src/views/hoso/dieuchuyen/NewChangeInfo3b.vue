<template>
  <div>
    <b-form>
      <b-row class="mt-3">
        <b-col cols="1">
          <label label-for="txtEmployeeCode">Mã nhân viên</label>
        </b-col>
        <b-col cols="2">
          <Autocomplete :items="items" :isAsync="false" ref="autocomplete" :isDisplayFull="false"></Autocomplete>
          <button type="button" id="btnShowPopUpEmployee" @click="ShowPopUpEmployee">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </b-col>
        <b-col cols="1">
          <label label-for="txtFullName">Tên đầy đủ</label>
        </b-col>
        <b-col cols="2">
          <input id="txtFullName" type="text" readonly ref="txtFullName" value="Nguyen Văn A">
        </b-col>
        <b-col cols="1">
          <label id="lbTitleEmployee">Chức danh</label>
        </b-col>
        <b-col cols="2">
          <label id="lbTitleEmployee">Tên Chức danh</label>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <label label-for="lbOrgEmployee">Tổ chức</label>
        </b-col>
        <b-col cols="2">
          <label id="lbOrgEmployee">Tên Tổ chức</label>
        </b-col>
        <b-col cols="1">
          <label label-for="lbTypeDecision">Loại quyết định</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbTypeDecision">Tên Loại quyết định</label>
        </b-col>
        <b-col cols="1">
          <label label-for="lbDecisionNumber">Số quyết định</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbDecisionNumber">Tên Số quyết định</label>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <label label-for="lbEffectDate">Ngày hiệu lực</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbEffectDate">1-1-2018</label>
        </b-col>
        <b-col cols="1">
          <label label-for="lbExpiryDate">Ngày hết hiệu lực</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbExpiryDate">21-1-2018</label>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col cols="1">
          <label label-for="lbSalaryGroup">Thang bảng lương</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbSalaryGroup">Tên thang bản lương</label>
        </b-col>
        <b-col cols="1">
          <label label-for="lbSalaryLevel">Ngạch lương</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbSalaryLevel">Tên ngạch lương</label>
        </b-col>
        <b-col cols="1">
          <label label-for="lbSalaryRank">Bậc lương</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbSalaryRank">Tên bậc lương</label>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <label label-for="lbSalaryBasic">Lương cơ bản</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbSalaryBasic">Tên lương cơ bản</label>
        </b-col>
        <b-col cols="1">
          <label label-for="lbPercent">% hưởng lương</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbPercent">% hưởng lương</label>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="10">
          <v-client-table :data="dataTable" :columns="columns" :options="options">
            <template slot="selected" slot-scope="props">
              <input id="chkSelected">
            </template>
            <template slot="effectDate" slot-scope="props">
              <label>{{props.row.effectDate}}</label>
            </template>
            <template slot="expireDate" slot-scope="props">
              <label>{{props.row.expireDate}}</label>
            </template>
            <template slot="isInsurrance" slot-scope="props">
              <input type="checkbox" v-model="props.row.isInsurrance" disabled>
            </template>
            <template slot="amount" slot-scope="props">
              <label>{{props.row.amount}}</label>
            </template>
            <template slot="allowanceId" slot-scope="props">
              <label>{{props.row.allowanceId}}</label>
            </template>
          </v-client-table>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <label label-for="txtOrg">Tổ chức</label>
        </b-col>
        <b-col cols="2">
          <input id="txtOrg" type="text" readonly ref="txtOrg">
          <b-btn id="btnShowPopOrg" @click="ShowPopUpOrg">
            <i class="fa fa-search" aria-hidden="true"></i>
          </b-btn>
        </b-col>
        <b-col cols="1">
          <label label-for="cboTitle">Chức danh</label>
        </b-col>
        <b-col cols="2">Trưởng phòng</b-col>
        <b-col cols="1">
          <label label-for="txtGroupTitle">Nhóm chức danh</label>
        </b-col>
        <b-col cols="2">
          <label id="lbGroupTitle" ref="lbGroupTitle">Nhân viên</label>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <label label-for="txtManager">Người quản lý</label>
        </b-col>
        <b-col cols="2">
          <Autocomplete :items="items" :isAsync="false" ref="autocomplete" :isDisplayFull="false"></Autocomplete>
          <button type="button" id="btnShowPopUpEmployee" @click="ShowPopUpEmployee">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </b-col>
        <b-col cols="1">
          <label label-for="txtDecisionNumber">Số quyết định</label>
        </b-col>
        <b-col cols="2">
          <input type="text" v-model="createChange3b.decisionNo">
        </b-col>
        <b-col cols="1">
          <label label-for="txtEffectDate">Ngày hiệu lực</label>
        </b-col>
        <b-col cols="2">
          <date-picker
            id="txtEffectDate"
            lang="en"
            format="DD-MM-YYYY"
            :clearable="false"
            placeholder="Select Day"
          ></date-picker>
        </b-col>
        <b-col cols="1">
          <label label-for="txtExpiryDate">Ngày hết hiệu lực</label>
        </b-col>
        <b-col cols="2">
          <date-picker
            id="txtExpiryDate"
            lang="en"
            format="DD-MM-YYYY"
            :clearable="false"
            placeholder="Select Day"
          ></date-picker>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <label label-for="cboActflg">Trạng thái</label>
        </b-col>
        <b-col cols="2">
          <select id="cboActflg" v-on:change="changeActflg" v-model="createChange3b.statusId">
            <option></option>
            <option v-for="item in dataACTIVEDECISION" :key="item.id" :value="item.id">{{item.name}}</option>
          </select>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <label label-for="txtSignDate">Ngày ký</label>
        </b-col>
        <b-col cols="2">
          <date-picker
            id="txtvehicleReturnDate"
            lang="en"
            format="DD-MM-YYYY"
            :clearable="false"
            placeholder="Select Day"
          ></date-picker>
        </b-col>
        <b-col cols="1">
          <label label-for="txtSigner">Người ký</label>
        </b-col>
        <b-col cols="2">
          <Autocomplete :items="items" :isAsync="false" ref="autocomplete" :isDisplayFull="false"></Autocomplete>
          <button type="button" id="btnShowPopUpEmployee" @click="ShowPopUpEmployee">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </b-col>
        <b-col cols="1">
          <label label-for="txtTitleSigner">Chức danh</label>
        </b-col>
        <b-col cols="2">
          <label id="lbTitleSiger">Tên chức danh</label>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <label label-for="txtNote">Ghi chú</label>
        </b-col>
        <b-col cols="10">
          <textarea cols="100" v-model="createChange3b.sig" text="Ghi chú"></textarea>
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
        <PopUpManager :data="[]" typeManager="ChooseEmployeeId"></PopUpManager>
      </b-modal>
      <b-modal
        id="showPopUpManager"
        ref="showPopUpManager"
        size="lg"
        title="Manager"
        :lazy="true"
        :hide-footer="true"
      >
        <PopUpManager :data="[]" typeManager="ChooseManagerId"></PopUpManager>
      </b-modal>
      <b-modal
        id="showPopUpSigner"
        ref="showPopUpSigner"
        size="lg"
        title="Signer"
        :lazy="true"
        :hide-footer="true"
      >
        <PopUpManager :data="[]" typeManager="ChooseSignerId"></PopUpManager>
      </b-modal>
      <b-modal ref="org" size="lg" title="Using Component Methods">
        <!-- <TreeVue
          :showcheckbox=[]
          :data=[]
          :multiple=[]
          :size=[]
          :batch=[]
          :whole=[]
          :nodots=[]
          @item-click="selectOrg($event)"
          :collapse=[]
        ></TreeVue>-->
        <div slot="modal-footer" class="float-right"></div>
      </b-modal>
    </b-form>
  </div>
</template>
<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import DatePicker from "vue2-datepicker";
import PopUpManager from "../../tochuc/PopUpManager.vue";
import Autocomplete from "../../tochuc/Autocomplete.vue";
import { bus } from "../../../main";
var moment = require("moment");
import _ from "lodash";
export default {
  name: "NewWageRecord",
  components: {
    DatePicker,
    PopUpManager,
    Autocomplete
  },
  data: () => {
    return {
      titleId: "",
      statusId: "",
      createChange3b: [],
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
      dataACTIVEDECISION: [
        {
          id: 1,
          name: "abc"
        }
      ],
      dataTitle: [
        {
          titleId: 1,
          name: "abc"
        }
      ],
      dataTable: [
        {
          allowanceId: 1,
          amount: 2,
          effectDate: "20/10/2018",
          expireDate: "20/10/2018",
          isInsurrance: "N01"
        },
        {
          allowanceId: "abc",
          amount: 2,
          effectDate: "20/10/2018",
          expireDate: "20/10/2018",
          isInsurrance: "N01"
        },
        {
          allowanceId: 1,
          amount: 2,
          effectDate: "20/10/2018",
          expireDate: "20/10/2018",
          isInsurrance: "N01"
        },
        {
          allowanceId: 1,
          amount: 2,
          effectDate: "20/10/2018",
          expireDate: "20/10/2018",
          isInsurrance: "N01"
        }
      ],
      options: {
        headings: {
          selected: function(h) {
            return h("input", {});
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
          isInsurrance: function(h) {
            return "Insurrance";
          },
          expireDate: function(h) {
            return "ExpiryDate";
          }
        }
      },
      columns: [
        "allowanceId",
        "amount",
        "effectDate",
        "expireDate",
        "isInsurrance"
      ]
    };
  },
  methods: {
    changeTitleNew(evt) {},
    AssignAllowances(data) {},
    ShowPopUpSigner() {},
    getSignerInfo(data) {},
    onSubmit() {},
    async selectOrg(evt) {},
    changeActflg(evt) {},
    ShowPopUpOrg() {},
    ShowPopUpManager() {
      this.$refs.showPopUpManager.show();
      bus.$on("ChooseManagerId", data => {
        this.EmployeeCreate.managerId = data.id;
        this.$refs.manager.value = data.firstName + " " + data.lastName;
        this.$refs.showPopUpManager.hide();
      });
    },
    ShowPopUpEmployee() {
      this.$refs.showPopUpEmployee.show();
      bus.$on("ChooseEmployeeId", data => {
        console.log(data);
        this.getEmployeeInformation(data);
      });
    }
  }
};
</script>
