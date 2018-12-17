<template>
  <div>
    <b-form v-on:submit.prevent>
      <b-row>
        <b-col cols="1">
          <label label-for="txtParent">Đơn vị đích</label>
        </b-col>
        <b-col cols="2">
          <input type="text" readonly ref="parent" id="txtParent" v-model="nameOrg" value="Tinh Van Consulting"/>
          <b-btn @click="ShowTreeVue" id="btnShowTreeVue">Chọn</b-btn>
        </b-col>
        <b-col cols="1">
          <label for="txtFoundationNumb">Số Quyết Định</label>
        </b-col>
        <b-col cols="2">
          <input type="text" v-model="foundationNumb" id="txtFoundationNumb">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">Ngày ký</b-col>
        <b-col cols="2">
          <date-picker
            id="txtDateFill"
            lang="en"
            v-model="dateFill"
            format="DD-MM-YYYY"
            :clearable="false"
          ></date-picker>
        </b-col>

        <b-col cols="1">Ngày sáp nhập</b-col>
        <b-col cols="2">
          <date-picker
            id="txtDateMerger"
            lang="en"
            v-model="dateMerger"
            format="DD-MM-YYYY"
            :clearable="false"
          ></date-picker>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <label for="txtManager">Người ký</label>
        </b-col>
        <b-col cols="2">
          <Autocomplete :items="items" :isAsync="false" ref="autocomplete" :isDisplayFull="false"></Autocomplete>
          <button type="button" id="btnShowPopUpEmployee" @click="ShowPopUpEmployee">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </b-col>
        <b-col cols="1">
          <label for="txtTitle">Chức danh</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbTitle">Nhan vien</label>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <b-button type="button" variant="primary" @click="Save" id="btnSubmit">Submit</b-button>
          <b-button type="button" variant="danger" @click="Reset" id="btnReset">Reset</b-button>
        </b-col>
      </b-row>
    </b-form>
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
      title="Manager Employee"
      :lazy="true"
      :hide-footer="true"
    >
      <PopUpManager :data="listOrg"></PopUpManager>
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
        @item-click="itemclick"
        :size="size"
        ref="tree"
      ></v-jstree>
    </b-modal>
  </div>
</template>
<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import VJstree from "vue-jstree";
import DatePicker from "vue2-datepicker";
import PopUpManager from "../tochuc/PopUpManager.vue";
import { bus } from "../../main";
import Autocomplete from "../tochuc/Autocomplete.vue";
import _ from "lodash";
var moment = require("moment");
export default {
  components: {
    VJstree,
    DatePicker,
    PopUpManager,
    Autocomplete
  },
  data: () => {
    return {
      items: [
        "Hoang van Hoa",
        "Nguyen Ngoc GIang",
        "Lê văn thăng",
        "Nguyễn thành Nam"
      ],
      txtparent: [],
      valueparent: [],
      txtchild: [],
      foundationNumb: "abc-2018",
      dateFill: "",
      dateMerger: "",
      showcheckbox: false,
      orgid: "",
      size: "",
      batch: false, //chọn hàng loạt
      whole: false,
      nameOrg: "Tinh van consulting",
      nodots: false,
      collapse: false,
      nameManager: "",
      titleManager: "",
      multiple: false,
      listOrg: [],
      listsourceIds: [],
      data: [],
      managerId: ""
    };
  },
  methods: {
    async created() {
      this.showcheckbox = true;
      this.size = "small";
      this.batch = false;
      this.whole = false;
      this.nodots = false;
      this.collapse = true;
      this.multiple = false;
      //   bus.$on("GetListOrgMerger", data => {
      //     this.listsourceIds = data;
      //     const getallorgs = new GetRemainOrganizations();
      //     getallorgs.orgIds = data;
      //     client.get(getallorgs).then(res => {
      //       this.data = notification.Unflatten(res.items);
      //     });
      //   });
      this.AutocompleteInit();
    },
    itemclick(node) {
      console.log(node.model);
      this.orgid = node.model.id;
      this.$refs.showTreeOrg.hide();
      this.nameOrg = node.model.name;
    },
    async Save() {},
    Reset() {},
    ShowTreeVue() {
      this.$refs.showTreeOrg.show();
    },
    AutocompleteInit() {},
    async ShowPopUpManager() {},
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