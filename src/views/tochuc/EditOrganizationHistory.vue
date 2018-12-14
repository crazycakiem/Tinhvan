<template>
  <div>
    <!-- <div v-show="showTable">
      <OrganizationHistory></OrganizationHistory>
    </div>-->
    <div v-show="showEdt">
      <b-container fluid>
        <b-row v-if="statusEdit">
          <b-col cols="6">
            <div id="u1185">
              <div id="u1185_div" class></div>
              <div id="u1185_text" class="text">
                <center>
                  <p>
                    <span>Thông tin cũ</span>
                  </p>
                </center>
              </div>
            </div>
          </b-col>
          <b-col cols="6">
            <div id="u1185">
              <div id="u1185_div" class></div>
              <div id="u1185_text" class="text">
                <center>
                  <p>
                    <span>Thông tin mới</span>
                  </p>
                </center>
              </div>
            </div>
          </b-col>
          <b-col cols="6" style="border-right: 1px solid #36a671">
            <b-row>
              <b-col cols="6" class="align_right">Đơn vị cha:</b-col>
              <b-col cols="6">
                <label>OrgParent</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Mã phòng ban:</b-col>
              <b-col cols="6">
                <label>CodeOld</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Tên phòng ban:</b-col>
              <b-col cols="6">
                <label>NameOld</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Người quản lý:</b-col>
              <b-col cols="6">
                <label>ManagerOld</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày thành lập:</b-col>
              <b-col cols="6">
                <label>FoundationDateOld</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Điện thoại:</b-col>
              <b-col cols="6">
                <label>PhoneOld</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Fax:</b-col>
              <b-col cols="6">
                <label>FaxOld</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Địa chỉ:</b-col>
              <b-col cols="6">
                <label>AddressOld</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Mã số thuế:</b-col>
              <b-col cols="6">
                <label>CostCodeOld</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Giá trị gia tăng:</b-col>
              <b-col cols="6">
                <label>TaxCodeOld</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Loại phòng ban:</b-col>
              <b-col cols="6">
                <label>or.name</label>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="6" class="align_right">Số đăng ký kinh doanh:</b-col>
              <b-col cols="6">
                <label>BusinessLicenseNumbOld</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày đăng ký kinh doanh:</b-col>
              <b-col cols="6">
                <label>BusinessLicenseDate</label>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="6" class="align_right">Ghi chú:</b-col>
              <b-col cols="6">
                <label>RemarkOld</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Số thứ tự:</b-col>
              <b-col cols="6">
                <label>OrderOld</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày giải thể:</b-col>
              <b-col cols="6">
                <label>DissolvedDateOld</label>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="6">
            <b-row>
              <b-col cols="6" class="align_right">Đợn vị cha:</b-col>
              <b-col cols="6">
                <label>OrgParent</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Mã đơn vị:</b-col>
              <b-col cols="6">
                <label>CodeNew</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">tên đơn vị:</b-col>
              <b-col cols="6">
                <label>NameNew</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Người quản lý:</b-col>
              <b-col cols="6">
                <label>Manager</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày thành lập:</b-col>
              <b-col cols="6">
                <label>FoundationDate</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Điện thoại:</b-col>
              <b-col cols="6">
                <label>PhoneNew</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Fax:</b-col>
              <b-col cols="6">
                <label>FaxNew</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Địa chỉ:</b-col>
              <b-col cols="6">
                <label>AddressNew</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Mã số thuế:</b-col>
              <b-col cols="6">
                <label>CostCodeNew</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Giá trị gia tăng:</b-col>
              <b-col cols="6">
                <label>TaxCodeNew</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Loại phòng ban:</b-col>
              <b-col cols="6">
                <label>or.name</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Số đăng ký kinh doanh:</b-col>
              <b-col cols="6">
                <label>BusinessLicenseNumb</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày đăng ký:</b-col>
              <b-col cols="6">
                <label>BusinessLicenseDate</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ghi chú:</b-col>
              <b-col cols="6">
                <label>Remark</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Số thử tự:</b-col>
              <b-col cols="6">
                <label>Order</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày thành lập:</b-col>
              <b-col cols="6">
                <label>DissolvedDate</label>
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
// import TreeVue from "../../TreeVue/TreeVue.vue";
import VJstree from "vue-jstree";
import _ from "lodash";
// import CommonMixin from "../../CommonMixin";
// import notification from "../../Notification.function";
// import OrganizationHistory from "../org/OrganizationHistory.vue";

var moment = require("moment");
Component({
  components: {
    // TreeVue,OrganizationHistory
  }
});
export default {
  data: () => {
    return {
      showTable: false,
      showEdt: true,
      statusEdit: true
    };
  },
  methods: {
    back() {}
  }
};
</script>
