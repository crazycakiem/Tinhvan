<template>
  <div class="animated">
    <b-row>
      <b-col lg="12">
        <b-card class="card-de1">
          <div class="panel-title-de1">
            <div>
              <h4>Lịch sử tổ chức</h4>
              <b-button class="btn-pill mr-1" variant="default" @click="selectOrganization">
                <i class="fa fa-filter"></i>
                Tìm kiếm
              </b-button>
              <b-button class="btn-pill mr-1" variant="default" @click="back">
                Back
                <i class="fas fa-arrow-alt-circle-left"></i>
              </b-button>
            </div>
          </div>

          <div class="tbl-de" v-show="showTable">
            <v-client-table
              ref="tblOrgHistory"
              :columns="columns"
              :options="options"
              :data="dataHistory"
              @row-click="rowclick"
              class="table-custom tbl-nosearch"
            >
              <template slot="selected" slot-scope="props">
                <input
                  id="chkSelected"
                  v-model="props.row.selected"
                  type="checkbox"
                  @click="CheckCheckBox(props.row)"
                >
              </template>
              <template slot="type" slot-scope="props">{{display(props.row.type)}}</template>
              <template slot="id" slot-scope="props">
                <label>{{props.row.id}}</label>
              </template>
              <template slot="code" slot-scope="props">
                <label>{{props.row.code}}</label>
              </template>
              <template slot="name" slot-scope="props">
                <label>{{props.row.name}}</label>
              </template>
              <template slot="phone" slot-scope="props">
                <label>{{props.row.phone}}</label>
              </template>
              <template slot="fax" slot-scope="props">
                <label>{{props.row.fax}}</label>
              </template>
              <template slot="address" slot-scope="props">
                <label>{{props.row.address}}</label>
              </template>
              <template slot="costCode" slot-scope="props">
                <label>{{props.row.costCode}}</label>
              </template>
              <template slot="taxCode" slot-scope="props">
                <label>{{props.row.taxCode}}</label>
              </template>
              <template slot="dissolvedDate" slot-scope="props">
                <label>{{(props.row.dissolvedDate)}}</label>
              </template>
              <template slot="businessLicenseDate" slot-scope="props">
                <label>{{(props.row.businessLicenseDate)}}</label>
              </template>
              <template slot="orgtype" slot-scope="props">
                <label
                  v-for="or in list"
                  v-if="(props.row.orgTypeId==or.id)"
                  :key="or.id"
                >{{or.name}}</label>
              </template>
            </v-client-table>
          </div>

          <div v-show="showAdd">
            <NewOrganizationHistory></NewOrganizationHistory>
          </div>
          <div v-show="showEdt">
            <EditOrganizationHistory></EditOrganizationHistory>
          </div>
          <div v-show="showMer">
            <MerOrganizationHistory></MerOrganizationHistory>
          </div>
          <b-modal ref="employee" size="lg" title="Using Component Methods">
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
              :size="size"
              ref="tree"
            >
              <template scope="_">
                <div style="display: inherit; width: 200px">
                  <i :class="_.vm.themeIconClasses" role="presentation" v-if="!_.model.loading"></i>
                  <span>{{_.model.tex23t}}</span>
                </div>
              </template>
            </v-jstree>
            <div slot="modal-footer" class="float-right"></div>
          </b-modal>
        </b-card>
      </b-col>
    </b-row>
    <b-modal ref="showDetailHistory" class="showDetailHistory" :title="title">
      <b-container fluid>
        <b-row v-if="statusNew">
          <b-col cols="6">
            <b-row>
              <b-col cols="6" class="align_right">Đơn vị cha:</b-col>
              <b-col cols="6">
                <label>{{OrgParent}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Mã phòng ban:</b-col>
              <b-col cols="6">
                <label>{{CodeNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Tên đơn vị:</b-col>
              <b-col cols="6">
                <label>{{NameNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Người quản lý:</b-col>
              <b-col cols="6">
                <label>{{Manager}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày thành lập:</b-col>
              <b-col cols="6">
                <label>{{FoundationDate}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Điện thoại:</b-col>
              <b-col cols="6">
                <label>{{PhoneNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Fax:</b-col>
              <b-col cols="6">
                <label>{{FaxNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Địa chỉ:</b-col>
              <b-col cols="6">
                <label>{{AddressNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Mã Số thuế:</b-col>
              <b-col cols="6">
                <label>{{CostCodeNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Mã số thuế:</b-col>
              <b-col cols="6">
                <label>{{TaxCodeNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Loại phòng ban:</b-col>
              <b-col cols="6">
                <label v-for="or in list" v-if="(OrgtypeNew ==or.id)" :key="or.id">{{or.name}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Số đăng ký kinh doanh:</b-col>
              <b-col cols="6">
                <label>{{BusinessLicenseNumb}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày đăng ký kinh doanh:</b-col>
              <b-col cols="6">
                <label>{{BusinessLicenseDate}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày giải thể:</b-col>
              <b-col cols="6">
                <label>{{DissolvedDate}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ghi chú:</b-col>
              <b-col cols="6">
                <label>{{Remark}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Thứ tự:</b-col>
              <b-col cols="6">
                <label>{{Order}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Số quyết định:</b-col>
              <b-col cols="6">
                <label>{{DecisionNumb}}</label>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
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
                <label>{{OrgParent}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Mã phòng ban:</b-col>
              <b-col cols="6">
                <label>{{CodeOld}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Tên phòng ban:</b-col>
              <b-col cols="6">
                <label>{{NameOld}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Người quản lý:</b-col>
              <b-col cols="6">
                <label>{{ManagerOld}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày thành lập:</b-col>
              <b-col cols="6">
                <label>{{FoundationDateOld}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Điện thoại:</b-col>
              <b-col cols="6">
                <label>{{PhoneOld}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Fax:</b-col>
              <b-col cols="6">
                <label>{{FaxOld}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Địa chỉ:</b-col>
              <b-col cols="6">
                <label>{{AddressOld}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Mã số thuế:</b-col>
              <b-col cols="6">
                <label>{{CostCodeOld}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Giá trị gia tăng:</b-col>
              <b-col cols="6">
                <label>{{TaxCodeOld}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Loại phòng ban:</b-col>
              <b-col cols="6">
                <label v-for="or in list" v-if="(OrgtypeOld ==or.id)" :key="or.id">{{or.name}}</label>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="6" class="align_right">Số đăng ký kinh doanh:</b-col>
              <b-col cols="6">
                <label>{{BusinessLicenseNumbOld}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày đăng ký kinh doanh:</b-col>
              <b-col cols="6">
                <label>{{BusinessLicenseDate}}</label>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="6" class="align_right">Ghi chú:</b-col>
              <b-col cols="6">
                <label>{{RemarkOld}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Số thứ tự:</b-col>
              <b-col cols="6">
                <label>{{OrderOld}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày giải thể:</b-col>
              <b-col cols="6">
                <label>{{DissolvedDateOld}}</label>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="6">
            <b-row>
              <b-col cols="6" class="align_right">Đợn vị cha:</b-col>
              <b-col cols="6">
                <label>{{OrgParent}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Mã đơn vị:</b-col>
              <b-col cols="6">
                <label>{{CodeNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">tên đơn vị:</b-col>
              <b-col cols="6">
                <label>{{NameNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Người quản lý:</b-col>
              <b-col cols="6">
                <label>{{Manager}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày thành lập:</b-col>
              <b-col cols="6">
                <label>{{FoundationDate}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Điện thoại:</b-col>
              <b-col cols="6">
                <label>{{PhoneNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Fax:</b-col>
              <b-col cols="6">
                <label>{{FaxNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Địa chỉ:</b-col>
              <b-col cols="6">
                <label>{{AddressNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Mã số thuế:</b-col>
              <b-col cols="6">
                <label>{{CostCodeNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Giá trị gia tăng:</b-col>
              <b-col cols="6">
                <label>{{TaxCodeNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Loại phòng ban:</b-col>
              <b-col cols="6">
                <label v-for="or in list" v-if="(OrgtypeNew ==or.id)" :key="or.id">{{or.name}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Số đăng ký kinh doanh:</b-col>
              <b-col cols="6">
                <label>{{BusinessLicenseNumb}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày đăng ký:</b-col>
              <b-col cols="6">
                <label>{{BusinessLicenseDate}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ghi chú:</b-col>
              <b-col cols="6">
                <label>{{Remark}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Số thử tự:</b-col>
              <b-col cols="6">
                <label>{{Order}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày thành lập:</b-col>
              <b-col cols="6">
                <label>{{DissolvedDate}}</label>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row v-if="statusMer">
          <b-col cols="12">
            <b-row>
              <h5>
                <strong>
                  <span>Thông tin</span>
                </strong>
              </h5>
            </b-row>
          </b-col>
          <div class="col-md-6 push-md-4">
            <b-row>
              <b-col cols="6" class="align_right">Đơn vị cha:</b-col>
              <b-col cols="6">
                <label>{{OrgParent}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Mã phòng ban:</b-col>
              <b-col cols="6">
                <label>{{CodeNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Tên phòng ban:</b-col>
              <b-col cols="6">
                <label>{{NameNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Người quản klys:</b-col>
              <b-col cols="6">
                <label>{{Manager}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày thành lập:</b-col>
              <b-col cols="6">
                <label>{{FoundationDate}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Điện thoại:</b-col>
              <b-col cols="6">
                <label>{{PhoneNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Fax:</b-col>
              <b-col cols="6">
                <label>{{FaxNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Địa chỉ:</b-col>
              <b-col cols="6">
                <label>{{AddressNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Mã số thuế:</b-col>
              <b-col cols="6">
                <label>{{CostCodeNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Giá trị gia tăng:</b-col>
              <b-col cols="6">
                <label>{{TaxCodeNew}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Loại phòng ban:</b-col>
              <b-col cols="6">
                <label v-for="or in list" v-if="(OrgtypeNew ==or.id)" :key="or.id">{{or.name}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Số giáy phép:</b-col>
              <b-col cols="6">
                <label>{{BusinessLicenseNumb}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ngày đăng ký:</b-col>
              <b-col cols="6">
                <label>{{BusinessLicenseDate}}</label>
              </b-col>
            </b-row>
            <!--<b-row v-show="CheckMeg">
                            <b-col cols="6" class="align_right">{{$t('MergeDate')}}:</b-col>
                            <b-col cols="6"> <label>{{MergeDate}}</label> </b-col>
            </b-row>-->
            <b-row>
              <b-col cols="6" class="align_right">Ngày giải thể:</b-col>
              <b-col cols="6">
                <label>{{DissolvedDate}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Ghi chú:</b-col>
              <b-col cols="6">
                <label>{{Remark}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Thứ tự:</b-col>
              <b-col cols="6">
                <label>{{Order}}</label>
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
                <label>{{DecisionNumb}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right" v-show="checkMerger">Ngày sáp nhập:</b-col>
              <b-col cols="6">
                <label>{{MergeDate}}</label>
              </b-col>
            </b-row>
            <b-row v-show="!checkMerger">
              <b-col cols="6" class="align_right">Ngày tách:</b-col>
              <b-col cols="6">
                <label>{{SeparateDate}}</label>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="6">
            <b-row>
              <b-col cols="6" class="align_right">Ngày ký:</b-col>
              <b-col cols="6">
                <label>{{SignDate}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Người ký:</b-col>
              <b-col cols="6">
                <label>{{SignId}}</label>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" class="align_right">Chức vụ:</b-col>
              <b-col cols="6">
                <label>{{SignTitle}}</label>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" style="margin-top:10px; border-top: 1px solid #36a671; padding-top:10px">
            <b-row>
              <h5>
                <strong>Thông tin phòng ban sát nhập / tách</strong>
              </h5>
            </b-row>

            <v-client-table
              ref="tblHistory"
              :data="dataDetails"
              :columns="columnsHistory"
              :options="optionsHistory"
            >
              <template slot="orgtype" slot-scope="props">
                <label
                  v-for="or in list"
                  v-if="(props.row.orgTypeId==or.id)"
                  :key="or.id"
                >{{or.name}}</label>
              </template>
              <template slot="businessLicenseDate" slot-scope="props">
                <label>{{(props.row.businessLicenseDate)}}</label>
              </template>
            </v-client-table>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>
<script>
import NewOrganizationHistory from "./NewOrganizationHistory.vue";
import EditOrganizationHistory from "./EditOrganizationHistory.vue";
import MerOrganizationHistory from "./MerOrganizationHistory.vue";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import VJstree from "vue-jstree";
import _ from "lodash";
export default {
  // name: "OrganizationHistory",
  components: {
    VJstree,
    NewOrganizationHistory,
    EditOrganizationHistory,
    MerOrganizationHistory
  },
  data: () => {
    return {
      showTable: true,
      showAdd: false,
      showEdt: false,
      showMer: false,
      OrgID: "",
      Show: false,
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
      options: {
        filterable: true,
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
          Type: function(h) {
            return "Type";
          },
          name: function(h) {
            return "Name";
          },
          code: function(h) {
            return "Code";
          },

          modifiedDate: function(h) {
            return "ModifiedDate";
          },
          modifiedBy: function(h) {
            return "ModifiedBy";
          },

          phone: function(h) {
            return "Phone";
          },
          orgtype: function(h) {
            return "OrgType";
          },
          businessLicenseDate: function(h) {
            return "BusinessLicenseDate";
          },
          businessLicenseNumb: function(h) {
            return "BusinessLicenseNumber";
          },
          dissolvedDate: function(h) {
            return "DissolvedDate";
          }
        }
      },
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
      optionsHistory: {
        filterable: true,
        headings: {
          name: function(h) {
            return "Name";
          },
          code: function(h) {
            return "OrgCode";
          },
          phone: function(h) {
            return "Phone";
          },
          address: function(h) {
            return "Address";
          },
          taxCode: function(h) {
            return "TaxCode";
          },

          orgtype: function(h) {
            return "OrgType";
          },
          businessLicenseDate: function(h) {
            return "BusinessLicenseDate";
          }
        }
      },
      dataHistory: [
        {
          type: 1,
          name: "Tinh van conluting",
          address: ""
        },
        {
          type: 2,
          name: "Tinh van conluting",
          address: ""
        },
        {
          type: 3,
          name: "Tinh van conluting",
          address: ""
        },
        {
          type: 4,
          name: "Tinh van conluting",
          address: ""
        },
        {
          type: 5,
          name: "Tinh van conluting",
          address: ""
        },
        {
          type: 6,
          name: "Tinh van conluting",
          address: ""
        }
      ],
      txtparent: "name",
      valueparent: "id",
      txtchild: "children",
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

      showcheckbox: true,
      size: "large",
      batch: true,
      whole: true,
      nodots: false,
      collapse: true,
      multiple: false,
      checkMerger: false,
      collapsed: false,
      statusNew: false,
      statusEdit: false,
      statusMer: false,
      statusSep: false,
      OrgParent: "Tinh vân Group",
      OrgCode: "N001",
      OrgName: "Tinh vân Conslutuing",
      OrgFoundationDate: "01/4/2010",
      OrgPhone: "054958445",
      OrgParentNew: "Tinh Vân Hight",
      FaxOld: "594588334",
      AddressOld: "Hà Nội Lê Văn Thiêm",
      CostCodeOld: "4854754",
      TaxCodeOld: "5364566",
      OrgtypeOld: "Lập trình",
      CodeOld: "N043",
      NameOld: "Tinh Vân",
      FoundationDate: "10/10/2016",
      FoundationDateOld: "1/1/2017",
      PhoneOld: "0439845",
      title: "Trưởng phòng",
      FaxNew: "Fax 27346",
      AddressNew: "Hà Nội ",
      CostCodeNew: "Cost COde",
      TaxCodeNew: "Tax Code",
      OrgtypeNew: "0458843",
      CodeNew: "Code New",
      NameNew: "Name New",
      DissolvedDate: "20/10/2098",
      Order: "1",
      OrderOld: 0,
      Remark: "Ghi chu",
      RemarkOld: "chi chu cũ",
      BusinessLicenseNumb: "20/10/2009",
      BusinessLicenseNumbOld: "1/1/2018",
      BusinessLicenseDate: "3/4/2017",
      BusinessLicenseDateOld: "1/6/2017",
      PhoneNew: "049248584",
      DecisionNumb: "N048",
      MergeDate: "11/12/2017",
      SeparateDate: "10/6/2017",
      SignDate: "20/10/2017",
      SignId: "54435435",
      dataDetails: [],
      SignTitle: "Phó giám đốc",
      Manager: "Phạn Văn Quang",
      ManagerOld: "Phạm Văn Hùng",
      list: [],
      DissolvedDateOld: "10/06/2017",
      MergeDateOld: "20/10/1982",
      TaxCode: "Taxcode"
    };
  },
  methods: {
    back() {
      this.showTable = true;
      this.showAdd = false;
      this.showEdt = false;
      this.showMer = false;
    },
    async created() {},
    display(evt) {
      switch (evt) {
        case 1:
          return "Add";
        case 2:
          return "Edit";
        case 3:
          return "A";
        case 4:
          return "I";
        case 5:
          return "Merger";
        case 6:
          return "Separa";
        case 7:
          return "Mergered";
        case 8:
          return "Separaed";
        case 9:
          return "Delete";
        default:
          return "a";
      }
    },
    async rowclick(e) {
      // this.$refs.showDetailHistory.show();
      if (_.isEqual(e.row.type, 1)) {
        this.statusNew = true;
        this.statusEdit = false;
        this.statusMer = false;
        this.title = "AddNew";
        this.showAdd = !this.showAdd;
        if (this.showAdd) {
          this.showTable = false;
        }
        this.BusinessLicenseNumb = e.row.businessLicenseNumb;
        this.CodeNew = e.row.code;
        this.NameNew = e.row.name;
        this.PhoneNew = e.row.phone;
        this.FaxNew = e.row.fax;
        this.AddressNew = e.row.address;
        this.CostCodeNew = e.row.costCode;
        this.TaxCodeNew = e.row.taxCode;
        this.OrgtypeNew = e.row.orgTypeId;
        this.Order = e.row.order;
        this.Remark = e.row.remark;
      } else if (_.isEqual(e.row.type, 2)) {
        this.statusNew = false;
        this.statusEdit = true;
        this.statusMer = false;
        this.title = "Edit";
        this.showEdt = !this.showEdt;
        if (this.showEdt) {
          this.showTable = false;
        }
        if (!_.isNull(e.row.parent) && !_.isUndefined(e.row.parent)) {
          this.OrgParent = e.row.parent.name;
          this.OrgParentNew = e.row.parent.name;
        }

        this.BusinessLicenseNumb = e.row.businessLicenseNumb;
        this.CodeNew = e.row.code;
        this.NameNew = e.row.name;
        this.PhoneNew = e.row.phone;
        this.FaxNew = e.row.fax;
        this.AddressNew = e.row.address;
        this.CostCodeNew = e.row.costCode;
        this.TaxCodeNew = e.row.taxCode;
        this.OrgtypeNew = e.row.orgTypeId;
        this.Order = e.row.order;
        this.Remark = e.row.remark;
      } else if (_.isEqual(e.row.type, 5) || _.isEqual(e.row.type, 7)) {
        this.checkMerger = true;
        this.statusNew = false;
        this.statusEdit = false;
        this.statusMer = true;
        this.showMer = !this.showMer;
        if (this.showMer) {
          this.showTable = false;
        }
        this.title = "Merger";
        this.CodeNew = e.row.code;
        this.NameNew = e.row.name;
        this.PhoneNew = e.row.phone;
        this.FaxNew = e.row.fax;
        this.AddressNew = e.row.address;
        this.CostCodeNew = e.row.costCode;
        this.TaxCodeNew = e.row.taxCode;
        this.OrgtypeNew = e.row.orgTypeId;
        this.Order = e.row.order;
        this.Remark = e.row.remark;
      } else if (_.isEqual(e.row.type, 6) || _.isEqual(e.row.type, 8)) {
        this.checkMerger = false;
        this.statusNew = false;
        this.statusEdit = false;
        this.statusMer = true;
        this.showMer = !this.showMer;
        if (this.showMer) {
          this.showTable = false;
        }
        this.title = "Separa";
        this.BusinessLicenseNumb = e.row.businessLicenseNumb;
        this.CodeNew = e.row.code;
        this.NameNew = e.row.name;
        this.PhoneNew = e.row.phone;
        this.FaxNew = e.row.fax;
        this.AddressNew = e.row.address;
        this.CostCodeNew = e.row.costCode;
        this.TaxCodeNew = e.row.taxCode;
        this.OrgtypeNew = e.row.orgTypeId;
        this.Order = e.row.order;
        this.Remark = e.row.remark;
      } else if (_.isEqual(e.row.type, 3) || _.isEqual(e.row.type, 4)) {
        this.statusNew = true;
        this.statusEdit = false;
        this.statusMer = false;
        if (_.isEqual(e.row.type, 3)) {
          this.title = "A";
        } else {
          this.title = "I";
        }
        this.showAdd = !this.showAdd;
        if (this.showAdd) {
          this.showTable = false;
        }
        this.BusinessLicenseNumb = e.row.businessLicenseNumb;
        this.CodeNew = e.row.code;
        this.NameNew = e.row.name;
        this.PhoneNew = e.row.phone;
        this.FaxNew = e.row.fax;
        this.AddressNew = e.row.address;
        this.CostCodeNew = e.row.costCode;
        this.TaxCodeNew = e.row.taxCode;
        this.OrgtypeNew = e.row.orgTypeId;
        this.Order = e.row.order;
        this.Remark = e.row.remark;
      }
    },
    async selectOrganization(employee) {
      this.$refs.employee.show();
    },
    async itemclick(node) {
      this.$refs.tblOrgHistory.setFilter(node.id);
      this.$refs.employee.hide();
    }
  }
};
</script>
