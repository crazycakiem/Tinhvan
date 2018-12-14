<template>
  <div>
    <!-- <div v-show="showTable">
      <OrganizationHistory></OrganizationHistory>
    </div>-->
    <div v-show="showMer">
      <b-container fluid>
        
        <b-row v-if="statusMer">
          <b-col cols="12">
            <b-row>
              <h5>
                <strong>
                  <span>Thông tin Merger</span>
                </strong>
              </h5>
            </b-row>
          </b-col>
          <div class="col-md-6 push-md-4">
            <b-row>
              <b-col cols="6" class="align_right">Đơn vị cha:</b-col>
              <b-col cols="6">
                <label>OrgParent</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Mã phòng ban:</b-col>
              <b-col cols="6">
                <label>CodeNew</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Tên phòng ban:</b-col>
              <b-col cols="6">
                <label>NameNew</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Người quản klys:</b-col>
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
              <b-col cols="6" class="align_right">Số giáy phép:</b-col>
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
            <!--<b-row v-show="CheckMeg">
                            <b-col cols="6" class="align_right">$t('MergeDate')}}:</b-col>
                            <b-col cols="6"> <label>MergeDate</label> </b-col>
            </b-row>-->
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
          </div>
          <b-col cols="12" style="margin-top:10px; border-top: 1px solid #36a671; padding-top:10px">
            <b-row>
              <h5>
                <strong>
                  <span>Thông tin sát nhập</span>
                </strong>
              </h5>
            </b-row>
          </b-col>

          <b-col cols="6" style="border-right: 1px solid #36a671">
            <b-row>
              <b-col cols="6" class="align_right">Số quyết định:</b-col>
              <b-col cols="6">
                <label>DecisionNumb</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right" v-show="checkMerger">Ngày sáp nhập:</b-col>
              <b-col cols="6">
                <label>MergeDate</label>
              </b-col>
            </b-row>
            <b-row v-show="!checkMerger">
              <b-col cols="6" class="align_right">Ngày tách:</b-col>
              <b-col cols="6">
                <label>SeparateDate</label>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="6">
            <b-row>
              <b-col cols="6" class="align_right">Ngày ký:</b-col>
              <b-col cols="6">
                <label>SignDate</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Người ký:</b-col>
              <b-col cols="6">
                <label>SignId</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Chức vụ:</b-col>
              <b-col cols="6">
                <label>SignTitle</label>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" style="margin-top:10px; border-top: 1px solid #36a671; padding-top:10px">
            <b-row>
              <h5>
                <strong>Thông tin phòng ban sát nhập / tách</strong>
              </h5>
            </b-row>

            <v-client-table ref="tblHistory" :data="dataDetails" :columns="columnsHistory">
              <!-- :options="optionsHistory" -->
              <template slot="orgtype" slot-scope="props">
                <label>or.name</label>
              </template>
              <template slot="businessLicenseDate" slot-scope="props">
                <label>(props.row.businessLicenseDate)</label>
              </template>
            </v-client-table>
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
      showMer: true,
      statusMer: true,
      checkMerger: true,
      dataDetails: [],
      columnsHistory: [],
      optionsHistory: [],
      columns: [
        "type",
        "name",
        "code",
        "phone",
        "fax",
        "address",
        "costCode",
        "taxCode",
        "orgtype",
        "dissolvedDate",
        "businessLicenseDate",
        "businessLicenseNumb"
      ],
      columnsHistory: [
        "name",
        "phone",
        "code",
        "fax",
        "address",
        "costCode",
        "taxCode",
        "orgtype",
        "businessLicenseDate"
      ],
      dataDetails: [
        {
          name: "name",
          phone: "phone",
          code: "code",
          fax: "fax",
          address: "address",
          costCode: "costCode",
          taxCode: "taxCode",
          orgtype: "orgtype",
          businessLicenseDate: "businessLicenseDate"
        },
        {
          name: "name",
          phone: "phone",
          code: "code",
          fax: "fax",
          address: "address",
          costCode: "costCode",
          taxCode: "taxCode",
          orgtype: "orgtype",
          businessLicenseDate: "businessLicenseDate"
        },
        {
          name: "name",
          phone: "phone",
          code: "code",
          fax: "fax",
          address: "address",
          costCode: "costCode",
          taxCode: "taxCode",
          orgtype: "orgtype",
          businessLicenseDate: "businessLicenseDate"
        },
        {
          name: "name",
          phone: "phone",
          code: "code",
          fax: "fax",
          address: "address",
          costCode: "costCode",
          taxCode: "taxCode",
          orgtype: "orgtype",
          businessLicenseDate: "businessLicenseDate"
        }
      ]
    };
  },
  methods: {
    back() {}
  }
};
</script>
