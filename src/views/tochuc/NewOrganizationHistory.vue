<template>
  <div>
    <!-- <div v-show="showTable">
      <OrganizationHistory></OrganizationHistory>
    </div>-->
    <div v-show="showAdd">
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <b-row>
              <h5>
                <strong>
                  <span>New</span>
                </strong>
              </h5>
            </b-row>
          </b-col>
          <b-col cols="6">
            <b-row>
              <b-col cols="6" class="align_right">Đơn vị cha:</b-col>
              <b-col cols="6">
                <label>Tên đơn vị cha</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Mã phòng ban:</b-col>
              <b-col cols="6">
                <label>Tên mã phòng ban</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Tên đơn vị:</b-col>
              <b-col cols="6">
                <label>Tên đơn vị</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Người quản lý:</b-col>
              <b-col cols="6">
                <label>Tên người quản lý</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày thành lập:</b-col>
              <b-col cols="6">
                <label>01-01-2019</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Điện thoại:</b-col>
              <b-col cols="6">
                <label>0987654321</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Fax:</b-col>
              <b-col cols="6">
                <label>Fax-0123</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Địa chỉ:</b-col>
              <b-col cols="6">
                <label>Tên địa chỉ</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Mã Số thuế:</b-col>
              <b-col cols="6">
                <label>Tên mã số thuế</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Mã số thuế:</b-col>
              <b-col cols="6">
                <label>TaxCodeNew</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Loại phòng ban:</b-col>
              <b-col cols="6">
                <label>Loại phòng ban</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Số đăng ký kinh doanh:</b-col>
              <b-col cols="6">
                <label>BusinessLicenseNumb</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày đăng ký kinh doanh:</b-col>
              <b-col cols="6">
                <label>BusinessLicenseDate</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày giải thể:</b-col>
              <b-col cols="6">
                <label>DissolvedDate</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ghi chú:</b-col>
              <b-col cols="6">
                <label>Remark</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Thứ tự:</b-col>
              <b-col cols="6">
                <label>Order</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Số quyết định:</b-col>
              <b-col cols="6">
                <label>DecisionNumb</label>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
      
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
// import TreeVue from "../TreeVue/TreeVue.vue";
import VJstree from "vue-jstree";
import _ from "lodash";
// import CommonMixin from "../../CommonMixin";
// import notification from "../../Notification.function";
var moment = require("moment");
import OrganizationHistory from "./NewOrganizationHistory.vue";
export default {
  components: { VJstree, OrganizationHistory: OrganizationHistory },
  data: () => {
    return {
      props: ["postTitle"],
      showTable: false,
      showAdd: true
    };
  },
  methods: {
    back() {
      this.showTable = !this.showTable;
      if (this.showTable) {
        this.showAdd = false;
      }
    }
  }
};
</script>
