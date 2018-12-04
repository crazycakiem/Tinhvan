<template>
  <div>
    <b-form>
      <b-row>
        <b-col cols="1">Ảnh đại diện</b-col>
        <b-col cols="2">
          <input type="file" @change="OnSelected">
          <button @click="Upload">Upload</button>
        </b-col>
        <b-col cols="1">
          <label label-for="txtOrg">Tổ chức</label>
        </b-col>
        <b-col cols="2">
          <input id="txtOrg" type="text" readonly ref="txtOrg">
          <b-btn id="btnShowOrg" @click="showOrg">
            <i class="fa fa-search" aria-hidden="true"></i>
          </b-btn>
        </b-col>
        <b-col cols="1">
          <label label-for="txtCode">Mã nhân viên</label>
        </b-col>
        <b-col cols="2">
          <input id="txtCode" type="text">
        </b-col>
        <b-col cols="1">
          <label label-for="txtCode">Nick Name</label>
        </b-col>
        <b-col cols="2">
          <input id="txtCode" type="text">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <label label-for="txtFirstName">Họ nhân viên</label>
        </b-col>
        <b-col cols="2">
          <input id="txtFirstName" type="text">
        </b-col>
        <b-col cols="1">
          <label label-for="txtLastName">Tên nhân viên</label>
        </b-col>
        <b-col>
          <input id="txtLastName" type="text">
        </b-col>
        <b-col cols="1">
          <label label-for="txtManager">Người quản lý</label>
        </b-col>
        <b-col cols="2">
          <Autocomplete :items="items" :isAsync="false" ref="autocomplete" :isDisplayFull="false"></Autocomplete>
          <b-btn id="btnShowPopUpManager" @click="ShowPopUpManager">
            <i class="fa fa-search" aria-hidden="true"></i>
          </b-btn>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <label label-for="txtSwipeCode">Mã quẹt thẻ</label>
        </b-col>
        <b-col cols="2">
          <input id="txtSwipeCode" type="text">
        </b-col>
        <b-col cols="1">
          <label label-for="cboTitle">Chức danh</label>
        </b-col>
        <b-col cols="2">
          <select id="cboTitle">
            <option
              v-for="item in dataTitle"
              :value="item.titleId"
              :key="item.titleId"
            >{{item.title.name}}</option>
          </select>
        </b-col>
        <b-col cols="1">
          <label label-for="partyDate">Ngày sinh</label>
        </b-col>
        <b-col cols="2">
          <date-picker lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <label label-for="cboGender">Giới tính</label>
        </b-col>
        <b-col cols="2">
          <select id="cboGender">
            <option v-for="gen in dataGender" :value="gen.id" :key="gen.id">{{gen.name}}</option>
          </select>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <label label-for="cboTarget">Đối tượng nhân viên</label>
        </b-col>
        <b-col cols="2">
          <select id="cboTarget">
            <option v-for="oj in dataEmployeeObject" :key="oj.id" :value="oj.id">{{oj.name}}</option>
          </select>
        </b-col>
        <b-col cols="1">
          <label label-for="txtID">Chứng minh thư</label>
        </b-col>
        <b-col cols="2">
          <input id="txtID" type="text">
        </b-col>
        <b-col cols="1">
          <label label-for="txtDateID">Ngày cấp</label>
        </b-col>
        <b-col cols="2">
          <date-picker lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
        </b-col>
        <b-col cols="1">
          <label label-for="txtPlaceID">Nơi cấp</label>
        </b-col>
        <b-col cols="2">
          <input id="txtPlaceID" type="text">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <label label-for="cboNationality">Quốc tịch</label>
        </b-col>
        <b-col cols="2">
          <select id="cboNationality">
            <option :value="item.id" v-for="item in dataNation" :key="item.id">{{item.name}}</option>
          </select>
        </b-col>
        <b-col cols="1">
          <label label-for="cboEthnic">Dân tộc</label>
        </b-col>
        <b-col cols="2">
          <select id="cboEthnic">
            <option v-for="item in dataEthnic" :value="item.id" :key="item.id">{{item.name}}</option>
          </select>
        </b-col>
        <b-col cols="1">
          <label label-for="cboReligion">Tôn giáo</label>
        </b-col>
        <b-col cols="2">
          <select id="cboReligion">
            <option :value="item.id" v-for="item in dataReligion" :key="item.id">{{item.name}}</option>
          </select>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3">
          <b-button id="btnSubmit" type="button" variant="primary" @click="onSubmit">Lưu</b-button>
          <b-button
            id="btnSubmitAndContinue"
            type="button"
            variant="success"
            @click="onSubmitAndContinue"
          >Lưu và tiếp tục</b-button>
          <b-button id="btnReset" type="button" variant="danger" @click="onReset">Hoàn tác</b-button>
        </b-col>
      </b-row>
    </b-form>
    <b-modal ref="org" size="lg" title="Using Component Methods">
      <!-- <TreeVue :showcheckbox="showcheckbox" :data="dataOrg" :multiple="multiple"
                         :size="size" :batch="batch" :whole="whole" :nodots="nodots" @item-click="selectOrg($event)"
      :collapse="collapse"></TreeVue>-->
      <div slot="modal-footer" class="float-right"></div>
    </b-modal>
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
  </div>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import PopUpManager from "../../tochuc/PopUpManager.vue";
import Autocomplete from "../../tochuc/Autocomplete.vue";
import DatePicker from "vue2-datepicker";
import _ from "lodash";
import { bus } from "../../../main";
export default {
  name: "NewEmployee",
  components: {
    DatePicker,
    Autocomplete,
    PopUpManager
  },
  props: [
    "dataNation",
    "dataEthnic",
    "dataReligion",
    "dataEmployeeObject",
    "dataGender",
    "dataOrg"
  ],
  data() {
    return {
      items: ["Hoàng văn hòa", "Nguyễn Văn chiến", "Hoàng quốc việt ", "Dỗ huy cương"],
      selectedFile: null,
      listOrg: [],
      showcheckbox: false,
      data: [],
      multiple: false,
      size: "large",
      batch: false,
      whole: false,
      nodots: false,
      collapse: false,
      dataTitle: []
    };
  },
  methods: {
    OnSelected(evt) {
      console.log(evt);
      this.selectedFile = evt.target.files[0];
    },
    Upload() {
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name);
      // axios.post('/files', fd).then(res => {
      //     console.log(res);
      // })
    },
    showOrg() {
      this.$refs.org.show();
    },
    ShowPopUpManager() {
      //   const listor = new GetOrganizationsTree();
      //   client.get(listor).then(res => {
      //     this.listOrg = notification.Unflatten(res.items);
      //     (this.$refs.showPopUpManager).show();
      // });
      this.$refs.showPopUpManager.show();
      bus.$on("ChooseManagerId", data => {
        this.EmployeeCreate.managerId = data.id;
        this.$refs.manager.value = data.firstName + " " + data.lastName;
        this.$refs.showPopUpManager.hide();
      });
    },
    async onSubmit() {},
    onSubmitAndContinue() {},
    onReset() {},
    async selectOrg(evt) {
      this.EmployeeCreate.orgId = evt.id;
      this.$refs.org.hide();
      this.$refs.txtOrg.value = evt.name;
      //call api get title by orgid
      if (_.isEqual(this.dataTitle.length, 0)) {
        //call api lay du lieu
        this.dataTitle = [
          {
            name: "Trưởng phòng",
            id: 1
          },
          {
            name: "Phó phòng",
            id: 2
          }
        ];
      }
    }
  }
};
</script>
