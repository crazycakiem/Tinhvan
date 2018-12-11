<template>
  <div>
    <h3>Thêm tổ chức</h3>
    <b-form v-on:submit.prevent>
      <b-row>
        <b-col cols="2">
          <label label-for="txtParent">Đơn vị cha</label>
        </b-col>
        <b-col cols="2">
          <input id="txtParent" type="text" readonly ref="parent">
          <b-btn v-b-modal.showTreeOrg @click="ShowTreeVue">
            <i class="fa fa-search" aria-hidden="true"></i>
          </b-btn>
        </b-col>
        <b-col cols="2">
          <label label-for="txtCode">Mã đơn vị</label>
        </b-col>
        <b-col cols="2">
          <input id="txtCode" type="text">
        </b-col>

        <b-col cols="2">
          <label label-for="txtName">Tên dơn vị</label>
        </b-col>
        <b-col cols="2">
          <input id="txtName" type="text">
        </b-col>

        <!--<b-col cols="1">
                    <label label-for="txtShortNameVN">Tên viết tắt</label>
                </b-col>
                <b-col cols="2">
        </b-col>-->
      </b-row>
      <b-row>
        <!--<b-col cols="1"><label label-for="txtFoundationNumb">Số QĐ thành lập</label></b-col>
        <b-col cols="2"> <input id="txtFoundationNumb" v-model="organization.foundationNumb"  /></b-col>-->
        <b-col cols="2">Ngày thành lập</b-col>
        <b-col cols="2">
          <date-picker id="txtFoundationDate" lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
        </b-col>
        <!--<b-col cols="1"><label label-for="txtDissolvedNumb">Số QĐ giải thể</label></b-col>
        <b-col cols="2"><input id="txtDissolvedNumb" v-model="organization.dissolvedNumb" /></b-col>-->
        <b-col cols="2">Ngày giải thể</b-col>
        <b-col cols="2">
          <date-picker id="txtDissolvedDate" lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <label label-for="txtPhone">Điện thoại</label>
        </b-col>
        <b-col cols="2">
          <input id="txtPhone" type="text">
        </b-col>
        <b-col cols="1">
          <label label-for="txtCostCode">Mã số thuế</label>
        </b-col>
        <b-col cols="2">
          <input id="txtCostCode" type="text">
        </b-col>
        <b-col cols="1">
          <label label-for="txtFax">Fax</label>
        </b-col>
        <b-col cols="2">
          <input id="txtFax" type="text">
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="1">Địa chỉ</b-col>
        <b-col cols="11">
          <input id="txtAddress" type="text" style="width:100%">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">Mã số thuế</b-col>
        <b-col cols="2">
          <input id="txtTaxCode" type="text">
        </b-col>
        <b-col cols="1">Loại phòng ban</b-col>
        <b-col cols="2">
          <select id="cboOrgType">
            <option v-for="or in list" :value="or.id" :key="or.id">{{or.name}}</option>
          </select>
        </b-col>
        <b-col cols="1">Giấy phép kinh doanh</b-col>
        <b-col cols="2">
          <input id="txtBusinessLicenseNumb" type="text">
        </b-col>
        <b-col cols="1">Ngày đăng ký</b-col>
        <b-col cols="2">
          <date-picker id="txtBusinessLicenseDate" lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="1">
          <label for="txtManager">Người quản lý</label>
        </b-col>
        <b-col cols="2">
          <!-- <input id="txtManager" type="text" readonly ref="manager"> -->
          <!-- <Autocomplete :items="items" :isAsync="true" ref="autocomplete" :isDisplayFull="false"></Autocomplete> -->
          <Autocomplete :items="items" :isAsync="false" ref="autocomplete" :isDisplayFull="false"></Autocomplete>
          <b-btn id="btnShowPopUpManager" @click="ShowPopUpManager">
            <i class="fa fa-search" aria-hidden="true"></i>
          </b-btn>
        </b-col>
        <b-col cols="1">
          <label for="txtOrder">Số thứ tự</label>
        </b-col>
        <b-col cols="2">
          <input id="txtOrder" type="text">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">Ghi chú</b-col>
        <b-col cols="11">
          <input id="txtRemark" type="text" style="width:100%">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <b-button id="btnSubmit" type="button" variant="primary" @click="onSubmit">Lưu</b-button>
          <b-button
            id="btnSubmitAndContinue"
            type="button"
            variant="success"
            @click="onSubmitAndContinue"
          >Lưu và tiếp tục</b-button>
        </b-col>
      </b-row>
    </b-form>
    <b-modal
      id="showPopUpManager"
      ref="showPopUpManager"
      size="lg"
      title="Manager Employee"
      :lazy="true"
      :hide-footer="true"
    >
      <PopUpManager :data="listOrg" v-on:ChooseManagerId="updateManagerId($event)"></PopUpManager>
    </b-modal>
    <b-modal id="showTreeOrg" ref="showTreeOrg" title="Choose Org" :lazy="true">
      <v-jstree
        :data="data"
        :show-checkbox="showcheckbox"
        :multiple="multiple"
        :collapse="collapse"
        :allow-batch="batch"
        :no-dots="nodots"
        :whole-row="whole"
        :text-field-name="txtparent"
        :value-field-name="valueparent"
        :children-field-name="txtchild"
        @item-click="itemClick"
        :size="size"
        ref="tree"
      >
        <template slot-scope="_">
          <div style="display: inherit; width: 200px">
            <i :class="_.vm.themeIconClasses" role="presentation" v-if="!_.model.loading"></i>
            <span>{{_.model.tex23t}}</span>
          </div>
        </template>
      </v-jstree>
    </b-modal>
  </div>
</template>
<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
// import TreeVue from '../../+TreeVue/TreeVue.vue'
import DatePicker from "vue2-datepicker";
import Autocomplete from "./Autocomplete.vue";
import VJstree from "vue-jstree";
import PopUpManager from "./PopUpManager.vue";
import _ from "lodash";
export default {
  name: "Themtochuc",
  components: {
    Autocomplete,
    PopUpManager,
    DatePicker,
    VJstree
  },
  data() {
    return {
      items: [
        "Hoàng văn hòa",
        "Nguyễn thanh chiến",
        "Nguyễn ngọc giang",
        "Nguyễn Trọng Cương"
      ],
      listOrg: [],
      data: [
        {
          id: 0,
          text: "Tập đoàn TINHVAN Group",
          value: "",
          icon: "",
          opened: false,
          selected: false,
          disabled: false,
          loading: false,
          children: [
            {
              id: 1,
              text: "Tinhvan Consulting",
              value: "initially selected",
              icon: "",
              opened: false,
              selected: true,
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 2,
              text: "custom icon",
              value: "custom icon",
              icon: "fa fa-warning icon-state-danger",
              opened: false,
              selected: false,
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 3,
              text: "initially open",
              value: "initially open",
              icon: "fa fa-folder icon-state-default",
              opened: true,
              selected: false,
              disabled: false,
              loading: false,
              children: [
                {
                  id: 4,
                  text: "Another node",
                  value: "Another node",
                  icon: "",
                  opened: false,
                  selected: false,
                  disabled: false,
                  loading: false,
                  children: []
                }
              ]
            },
            {
              id: 5,
              text: "custom icon",
              value: "custom icon",
              icon: "fa fa-warning icon-state-warning",
              opened: false,
              selected: false,
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 6,
              text: "disabled node",
              value: "disabled node",
              icon: "fa fa-check icon-state-success",
              opened: false,
              selected: false,
              disabled: true,
              loading: false,
              children: []
            }
          ]
        },
        {
          id: 7,
          text: "Same but with checkboxes",
          value: "Same but with checkboxes",
          icon: "",
          opened: true,
          selected: false,
          disabled: false,
          loading: false,
          itemEvents: {
            mouseover: function(node) {},
            contextmenu: function(node) {}
          },
          children: [
            {
              id: 8,
              text: "initially selected",
              value: "initially selected",
              icon: "",
              opened: false,
              selected: true,
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 9,
              text: "custom icon",
              value: "custom icon",
              icon: "fa fa-warning icon-state-danger",
              opened: false,
              selected: false,
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 10,
              text: "initially open",
              value: "initially open",
              icon: "fa fa-folder icon-state-default",
              opened: true,
              selected: false,
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 12,
              text: "custom icon",
              value: "custom icon",
              icon: "fa fa-warning icon-state-warning",
              opened: false,
              selected: true,
              disabled: false,
              loading: false,
              children: []
            },
            {
              id: 13,
              text: "disabled node",
              value: "disabled node",
              icon: "fa fa-check icon-state-success",
              opened: false,
              selected: false,
              disabled: true,
              loading: false,
              children: []
            }
          ]
        },
        {
          id: 14,
          text: "And wholerow selection",
          value: "And wholerow selection",
          icon: "",
          opened: false,
          selected: false,
          disabled: false,
          loading: false,
          children: []
        },
        {
          id: 15,
          text: "drag disabled",
          value: "drag disabled",
          icon: "fa fa-warning icon-state-danger",
          opened: false,
          selected: false,
          disabled: false,
          loading: false,
          children: [],
          dragDisabled: true
        },
        {
          id: 16,
          text: "drop disabled",
          value: "drop disabled",
          icon: "fa fa-warning icon-state-danger",
          opened: false,
          selected: false,
          disabled: false,
          loading: false,
          children: [],
          dropDisabled: true
        }
      ],
      list: [
        {
          id: 1,
          name: "name 1"
        },
        {
          id: 2,
          name: "name 2"
        }
      ],
      showcheckbox: true,
      size: "large",
      batch: true,
      whole: true,
      nodots: false,
      collapse: true,
      dialog2: true,
      multiple: true,
      txtparent: "name",
      valueparent: "id",
      txtchild: "children"
    };
  },
  methods: {
    ShowPopUpManager: function() {
      this.$refs.showPopUpManager.show();
    },
    ShowTreeVue() {
      this.$refs.showTreeOrg.show();
    },
    onSubmit() {},
    onSubmitAndContinue() {},
    itemClick(evt) {
      this.$refs.parent.value = evt.name;
      this.$refs.showTreeOrg.hide();
    }
  }
};
</script>
