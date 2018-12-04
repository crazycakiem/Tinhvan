<template>
  <b-form>
    <div id="newconttract" v-show="!showWageRecord">
      <b-row class="mt-3">
        <b-col cols="1">
          <label>Mã nhân viên</label>
        </b-col>
        <b-col cols="2">
          <Autocomplete
            :items="items"
            :isAsync="true"
            ref="autocompleteEmployeeContract"
            :isDisplayFull="false"
            AutocompleteChangeEvent="AutocompleteEmployeeContractChange"
            AutocompleteSelected="AutocompleteEmployeeContractSelected"
          ></Autocomplete>
          <button id="btnShowPopUpManager" @click="ShowPopUpManager" type="button" :disabled="save">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </b-col>
        <b-col cols="1">
          <label label-for="txtFullName">Họ tên</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbFullName">Hoàng văn hòa</label>
        </b-col>
        <b-col cols="1">
          <label label-for="txtOrg">tổ chức</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbOrgContract">Tinh vân conlutiong</label>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <label label-for="lbGroupTitleContract">Nhóm chức danh</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbGroupTitleContract">Chức danh nhân viên</label>
        </b-col>
        <b-col cols="1">
          <label label-for="lbTitleContract">Chức danh</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbTitleContract">Trưởng phòng</label>
        </b-col>
        <b-col cols="2">
          <label label-for="cbWorkingForm">Hình thức làm việc</label>
        </b-col>
        <b-col cols="2">
          <select id="cbWorkingForm" :disabled="save">
            <option v-for="item in dataWorkingForm" :key="item.id" :value="item.id">{{item.name}}</option>
          </select>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <label label-for="cboTypeContract">Loại hợp đồng</label>
        </b-col>
        <b-col cols="2">
          <select id="cboTypeContract" :disabled="save">
            <option v-for="item in dataTypeContract" :key="item.id" :value="item.id">{{item.name}}</option>
          </select>
        </b-col>
        <b-col cols="1">
          <label label-for="txtContractNumber">Số hợp đồng</label>
        </b-col>
        <b-col cols="2">
          <input id="txtContractNumber" type="text" value="13434324324" :disabled="save">
        </b-col>
        <b-col cols="1">
          <label label-for="txtEffectDate">Ngày hiệu lực</label>
        </b-col>
        <b-col cols="2">
          <date-picker
            id="txtEffectDate"
            lang="en"
            v-show="!save"
            format="DD-MM-YYYY"
            :clearable="false"
            placeholder="Select Day"
          ></date-picker>
        </b-col>
        <b-col cols="1">
          <label label-for="txtExpiryDate">Ngày hết hạn</label>
        </b-col>
        <b-col cols="2">
          <date-picker
            id="txtExpiryDate"
            lang="en"
            v-show="!save"
            format="DD-MM-YYYY"
            :clearable="false"
            placeholder="Select Day"
          ></date-picker>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <label label-for="txtMorningStart">Sáng bắt đầu</label>
        </b-col>
        <b-col cols="2">
          <date-picker
            id="txtMorningStart"
            lang="en"
            type="time"
            v-show="!save"
            format="HH:mm"
            :clearable="false"
            placeholder="Select Time"
          ></date-picker>
        </b-col>
        <b-col cols="1">
          <label label-for="txtMorningFinish">Sáng kết thúc</label>
        </b-col>
        <b-col cols="2">
          <date-picker
            id="txtMorningFinish"
            lang="en"
            type="time"
            v-show="!save"
            format="HH:mm"
            :clearable="false"
            placeholder="Select Time"
          ></date-picker>
        </b-col>
        <b-col cols="1">
          <label label-for="txtAfternoonStart">Chiều bắt đầu</label>
        </b-col>
        <b-col cols="2">
          <date-picker
            id="txtAfternoonStart"
            lang="en"
            type="time"
            v-show="!save"
            format="HH:mm"
            :clearable="false"
            placeholder="Select Time"
          ></date-picker>
        </b-col>
        <b-col cols="1">
          <label label-for="txtAfternoonFinish">Chiều kết thúc</label>
        </b-col>
        <b-col cols="2">
          <date-picker
            id="txtAfternoonFinish"
            lang="en"
            type="time"
            v-show="!save"
            format="HH:mm"
            :clearable="false"
            placeholder="Select Time"
          ></date-picker>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <button
            class="btn btn-primary"
            type="button"
            @click="ShowWageOld"
            :disabled="save"
          >Hồ sơ lương</button>
        </b-col>
        <b-col>
          <div v-show="showDeleteWage">
            <label id="lbWageRecord" ref="lbWageRecord"></label>
            <button @click="ClearWageOld" class="btn btn-danger" type="button">Xóa</button>
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <b-col cols="1">
          <label label-for="cboActflg">Tình trạng</label>
        </b-col>
        <b-col cols="2">
          <select id="cboActflg" ref="cboActflg" v-on:change="changeActflg" :disabled="save">
            <option v-for="item in dataStatus" :key="item.id" :value="item.id">{{item.name}}</option>
          </select>
        </b-col>
      </b-row>
      <b-row v-show="checked">
        <b-col cols="1">
          <label label-for="txtSignDate">Ngày ký</label>
        </b-col>
        <b-col cols="2">
          <date-picker
            id="txtSignDate"
            lang="en"
            v-show="!save"
            format="DD-MM-YYYY"
            :clearable="false"
          ></date-picker>
        </b-col>
        <b-col cols="1">
          <label label-for="txtSigner">NGười ký</label>
        </b-col>
        <b-col cols="2">
          <!-- <input id="txtSigner" type="text" readonly ref="txtSigner" /> -->
          <Autocomplete
            :items="itemsSignerContract"
            :isAsync="true"
            ref="autocompleteSignerContract"
            AutocompleteChangeEvent="AutocompleteSignerContractChange"
            AutocompleteSelected="AutocompleteSignerContractSelected"
            :isDisplayFull="true"
          ></Autocomplete>
          <button id="btnShowPopUpSigner" @click="ShowPopUpSigner" :disabled="save" type="button">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </b-col>
        <b-col cols="1">
          <label label-for="lbTitleSigner">Chức danh</label>
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
          <textarea :disabled="save"></textarea>
        </b-col>
      </b-row>
      <b-modal v-model="showTable" size="lg" @ok="ChooseWage">
        <v-client-table
          :columns="columnsWage"
          :data="dataWage"
          :options="optionsWage"
          ref="tblWage"
        >
          <template slot="selected" slot-scope="props">
            <input
              id="chkSelected"
              v-model="props.row.selected"
              type="radio"
              name="rdo"
              @click="CheckCheckBoxWage(props.row)"
            >
          </template>
          <template slot="id" slot-scope="props">
            <input id="txtID" v-model="props.row.id" type="text" v-bind:ref="props.row.id+'*id'">
          </template>
          <template slot="groupId" slot-scope="props">
            <label v-for="i in grouplist" :key="i.id">{{i.name}}</label>
          </template>
          <template slot="decisionNo" slot-scope="props">{{props.row.decisionNo}}</template>
          <template slot="decisionTypeId" slot-scope="props">
            <label v-for="item in dataTypeDecision" :key="item.id">{{item.name}}</label>
          </template>
          <template slot="orgId" slot-scope="props">{{props.row.orgId}}</template>
          <template slot="name" slot-scope="props">{{props.row.name}}</template>
          <template slot="titleId" slot-scope="props">{{props.row.titleId}}</template>
          <template slot="effectDate" slot-scope="props">{{(props.row.effectDate)}}</template>
          <template slot="expireDate" slot-scope="props">{{(props.row.expireDate)}}</template>
          <template slot="statusId" slot-scope="props">
            <label v-for="i in dataACTIVEDECISION" :key="i.id">{{i.name}}</label>
          </template>
        </v-client-table>
      </b-modal>
    </div>
    <div id="newwagerecord" v-show="showWageRecord">
      <b-row class="mt-3">
        <b-col cols="1">
          <label label-for="lbEmployeeCode">Mã nhân viên</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbEmployeeCodeWage">101203</label>
        </b-col>
        <b-col cols="2">
          <label label-for="lbNameEmployeeWage">Họ và tên</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbNameEmployeeWage">Hoàng văn hòa</label>
        </b-col>

        <b-col cols="2">
          <label label-for="lbOrgWage">Tổ chức</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbOrgWage">Tinh vân conluting</label>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col cols="2">Nhóm chức danh</b-col>
        <b-col cols="2">
          <label ref="lbGroupTitleWage">Chức danh nhân viên</label>
        </b-col>
        <b-col cols="2">Chức danh</b-col>
        <b-col cols="2">
          <label ref="lbTitleWage">Trưởng phòng</label>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col cols="1">
          <label label-for="cboTypeDecision">Loại quyết định</label>
        </b-col>
        <b-col cols="2">
          <select id="cboTypeDecision" :disabled="save">
            <option></option>
            <option v-for="item in dataTypeDecision" :key="item.id" :value="item.id">{{item.name}}</option>
          </select>
        </b-col>
        <b-col cols="1">
          <label label-for="txtQD">Số quyết định</label>
        </b-col>
        <b-col cols="2">
          <input id="txtQD" type="text" value="129437437">
        </b-col>
        <b-col cols="1">
          <label label-for="lbContractNumber">Số hợp đồng</label>
        </b-col>
        <b-col cols="2">
          <label ref="lbContractNumber">85438574</label>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col cols="1">
          <label label-for="txtEffectDate">Ngày hiệu lực</label>
        </b-col>
        <b-col cols="2">
          <date-picker
            id="txtEffectDate"
            lang="en"
            v-show="!save"
            format="DD-MM-YYYY"
            :clearable="false"
            placeholder="Select Day"
          ></date-picker>
        </b-col>
        <b-col cols="2">
          <label label-for="txtExpiryDate">Ngày hết hạn</label>
        </b-col>
        <b-col cols="2">
          <date-picker
            id="txtExpiryDate"
            lang="en"
            v-show="!save"
            format="DD-MM-YYYY"
            :clearable="false"
            placeholder="Select Day"
          ></date-picker>
        </b-col>
        <b-col cols="2">
          <label label-for="lbContractNumber">Đối tượng bảo hiểm</label>
        </b-col>
        <b-col cols="2">
          <select id="cboObjectInsurrance" :disabled="save">
            <option
              v-for="item in dataObjectInsurrance"
              :key="item.id"
              :value="item.id"
            >{{item.name}}</option>
          </select>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col cols="1">
          <label label-for="cboSalaryGroup">Thang bảng lương</label>
        </b-col>
        <b-col cols="2">
          <select id="cboSalaryGroup" v-on:change="changeSalaryGroup" :disabled="save">
            <option></option>
            <option v-for="item in dataSalaryGroup" :key="item.id" :value="item.id">{{item.name}}</option>
          </select>
        </b-col>
        <b-col cols="1">
          <label label-for="cboSalaryLevel">Ngạch lương</label>
        </b-col>
        <b-col cols="2">
          <select id="cboSalaryLevel" v-on:change="changeSalaryLevel" :disabled="save">
            <option></option>
            <option v-for="item in dataSalaryLevel" :key="item.id" :value="item.id">{{item.name}}</option>
          </select>
        </b-col>
        <b-col cols="1">
          <label label-for="cboSalaryRank">Bậc lương</label>
        </b-col>
        <b-col cols="2">
          <select id="cboSalaryRank" v-on:change="ChangeSalaryRank" :disabled="save">
            <option></option>
            <option v-for="item in dataSalaryRank" :key="item.id" :value="item.id">{{item.name}}</option>
          </select>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col cols="1">
          <label label-for="txtSalaryBasic">Lương cơ bản</label>
        </b-col>
        <b-col cols="2">
          <input id="txtSalaryBasic" type="text" value="100000" ref="txtLuongcoban">
        </b-col>
        <b-col cols="1">
          <label label-for="txtSalaryPercent">% hưởng lương</label>
        </b-col>
        <b-col cols="2">
          <input id="txtSalaryPercent" type="number" @change="UpdateSumMoney" :disabled="save">
        </b-col>
        <b-col cols="1">
          <label label-for="txtSalary">Tổng lương hưởng</label>
        </b-col>
        <b-col cols="2">
          <label ref="TotalSalary">100000</label>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <button
          id="cboShowAll"
          :disabled="save"
          type="button"
          class="btn btn-primary btn-custom"
          @click="changeShow"
        >Phụ cấp</button>
      </b-row>
      <b-row>
        <b-col cols="12" v-show="showWage" id="WageRecord">
          <v-client-table :columns="columns" :data="data" :options="options" ref="tblWageRecord">
            <template slot="selected" slot-scope="props">
              <input
                type="checkbox"
                v-model="props.row.selected"
                v-on:change="CheckCheckBox(props.row)"
                :disabled="save"
              >
            </template>
            <template slot="effectDate" slot-scope="props">
              <date-picker
                lang="en"
                v-model="props.row.effectDate"
                @change="closeDatepicker(props.row)"
                v-show="!save"
                format="DD-MM-YYYY"
                :clearable="false"
                placeholder="Select Day"
              ></date-picker>
            </template>
            <template slot="expireDate" slot-scope="props">
              <date-picker
                lang="en"
                v-model="props.row.expireDate"
                @change="closeDatepicker(props.row)"
                v-show="!save"
                format="DD-MM-YYYY"
                :clearable="false"
                placeholder="Select Day"
              ></date-picker>
            </template>
            <template slot="isInsurrance" slot-scope="props">
              <input
                type="checkbox"
                v-model="props.row.isInsurrance"
                v-on:change="CheckboxInsurrance(props.row)"
                :disabled="save"
              >
            </template>
            <template slot="amount" slot-scope="props">
              <input
                type="text"
                v-model="props.row.amount"
                :ref="props.row.id+'*amount'"
                @change="focusOut1(props.row)"
                :disabled="save"
              >
            </template>
            <template slot="allowanceId" slot-scope="props">
              <select
                v-model="props.row.allowanceId"
                v-on:change="ChangeAllowance(props.row)"
                :disabled="save"
              >
                <option v-for="or in dataAllownance" :value="or.id" :key="or.id">{{or.name}}</option>
              </select>
            </template>
            <div slot="act" slot-scope="props">
              <button
                id="btnAdd"
                class="btn btn-primary btn-custom"
                :disabled="save"
                type="button"
                @click="Addrow(props.row)"
                v-bind:ref="props.row.id+'*showEdit'"
              >
                <span class="fa fa-plus"/>
              </button>
              <button
                id="btnDenny"
                class="btn btn-danger btn-custom"
                :disabled="save"
                type="button"
                @click="Deleterow(props.row)"
                v-bind:ref="props.row.id+'*denny'"
              >
                <span class="fa fa-close"/>
              </button>
            </div>
          </v-client-table>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">Tổng phụ cấp</b-col>
        <b-col cols="2">
          <label ref="lbTotalAllowance">500,0000</label>
        </b-col>
        <b-col cols="1">
          <label label-for="txtSalaryTotal">Tổng thu nhập</label>
        </b-col>
        <b-col cols="2">
          <input id="txtSalaryTotal" type="text" ref="sumMoney" readonly value="1000,000.00">
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col cols="1">Tình trạng</b-col>
        <b-col cols="2">
          <select id="cboActive" v-on:change="changeAppect" :disabled="save" ref="cboActive">
            <option></option>
            <option v-for="item in dataACTIVEDECISION" :key="item.id" :value="item.id">{{item.name}}</option>
          </select>
        </b-col>
        <b-col cols="12" v-show="show">
          <b-row class="mt-3">
            <b-col cols="1">Ngày ký</b-col>
            <b-col cols="2">
              <date-picker
                lang="en"
                v-show="!save"
                format="DD-MM-YYYY"
                :clearable="false"
                placeholder="Select Day"
              ></date-picker>
            </b-col>
            <b-col cols="1">Người ký</b-col>
            <b-col cols="2">
              <!-- <label ref="lbSigner"></label> -->
              <Autocomplete
                :items="itemsSignerWage"
                :isAsync="true"
                v-show="!save"
                ref="autocompleteSignerWage"
                AutocompleteChangeEvent="AutocompleteSignerWageChange"
                AutocompleteSelected="AutocompleteSignerWageSelected"
                :isDisplayFull="true"
              ></Autocomplete>
              <button @click="ShowPopUpSignerWage" :disabled="save" type="button">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </b-col>
            <b-col cols="1">Chức danh</b-col>
            <b-col cols="2">
              <label ref="lbTitleSignerWage">Trưởng phòng</label>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col cols="1">Ghi chú</b-col>
            <b-col cols="10">
              <textarea cols="100" :disabled="save"></textarea>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
    <b-row>
      <b-col cols="3">
        <b-button
          id="btnSubmit"
          type="button"
          :disabled="save"
          variant="primary"
          @click="onSubmit"
          v-show="!showWageRecord"
        >Lưu</b-button>
        <b-button
          id="btnSaveAndContinue"
          :disabled="save"
          type="button"
          variant="success"
          v-show="!showWageRecord"
          v-if="displayContinueButton"
          @click="onSaveAndContinue"
        >tiếp tục</b-button>
        <b-button
          id="btnEdit"
          type="button"
          :disabled="save"
          variant="danger"
          @click="onEdit"
          v-show="showWageRecord"
        >trở lại</b-button>
        <b-button
          id="btnSaveWageRecord"
          :disabled="save"
          type="button"
          variant="success"
          v-show="showWageRecord"
          @click="onSaveWageRecord"
        >Lưu</b-button>
      </b-col>
    </b-row>
    <b-modal
      id="showPopUpManager"
      ref="showPopUpManager"
      size="lg"
      title="Employee"
      :lazy="true"
      :hide-footer="true"
    >
      <PopUpManager :data="listOrg" typeManager="ChooseManagerId"></PopUpManager>
    </b-modal>
    <b-modal
      id="showPopUpSigner"
      ref="showPopUpSigner"
      size="lg"
      title="Signer Employee"
      :lazy="true"
      :hide-footer="true"
    >
      <PopUpManager :data="listOrg" typeManager="ChooseSignerId"></PopUpManager>
    </b-modal>
    <b-modal
      id="showPopUpSignerWage"
      ref="showPopUpSignerWage"
      size="lg"
      title="Signer Employee"
      :lazy="true"
      :hide-footer="true"
    >
      <PopUpManager :data="listOrg" typeManager="ChooseSignerWageId"></PopUpManager>
    </b-modal>
  </b-form>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { bus } from "../../../main";
import DatePicker from "vue2-datepicker";
import _ from "lodash";
import PopUpManager from "../../tochuc/PopUpManager.vue";
import Autocomplete from "../../tochuc/Autocomplete.vue";
export default {
  name: "NewContract",
  components: {
    DatePicker,
    PopUpManager,
    Autocomplete
  },
  data: () => {
    return {
      organization: { nameVN: "", code: "", foundationDate: "" },
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
          allowanceId: function(h) {
            return "phụ cấp";
          },
          amount: function(h) {
            return "tiền";
          },
          effectDate: function(h) {
            return "Ngày hiệu lực";
          },
          isInsurrance: function(h) {
            return "Bảo hiểm";
          },
          act: function(h) {
            return "Hoạt động";
          },
          expireDate: function(h) {
            return "Ngày hết hạn";
          }
        }
      },
      columns: [
        "selected",
        "allowanceId",
        "amount",
        "effectDate",
        "expireDate",
        "isInsurrance",
        "act"
      ],
      optionsWage: {
        filterable: true,
        sortable: [
          "decisionNo",
          "decisionTypeId",
          "orgId",
          "titleId",
          "effectDate",
          "expireDate",
          "statusId"
        ],
        columnsClasses: {
          selected: "col-check-box"
        },
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
          decisionNo: function(h) {
            return "Số quyết định";
          },
          decisionTypeId: function(h) {
            return "Loại quyết định";
          },
          name: function(h) {
            return "Tên";
          },
          orgId: function(h) {
            return "Tổ chức";
          },
          statusId: function(h) {
            return "Tình trạng";
          },
          titleId: function(h) {
            return "Chức danh";
          },
          effectDate: function(h) {
            return "Ngày hiệu lực";
          },
          expireDate: function(h) {
            return "Ngày hết hiệu lực";
          }
        }
      },
      columnsWage: [
        "selected",
        "decisionNo",
        "decisionTypeId",
        "name",
        "orgId",
        "titleId",
        "effectDate",
        "expireDate",
        "statusId"
      ],
      dataWage: [
        {
          selected: false,
          decisionNo: "0323",
          decisionTypeId: "1",
          name: "Hoàng văn hòa",
          orgId: "1",
          titleId: "1",
          effectDate: "20/10/2018",
          expireDate: "22/10/2018",
          statusId: "1"
        }
      ],
      dataStatus: [
        {
          id: "1",
          name: "Chưa phê duyệt"
        },
        {
          id: "2",
          name: "Phê duyệt"
        },
        {
          id: "3",
          name: "Không phê duyệt"
        }
      ],
      dataTypeContract: [
        {
          id: "1",
          name: "Thử việc"
        },
        {
          id: "2",
          name: "CHính thức"
        },
        {
          id: "3",
          name: "2 năm"
        }
      ],
      PenddingId: "",
      AppectId: "",
      DennyId: "",
      dataWorkingForm: [
        { id: "1", name: "Full time" },
        { id: "2", name: "part time" }
      ],
      Num: "",
      showDeleteWage: false,
      displayContinueButton: true,
      WageOldId: "",
      save: false,
      showTable: false,
      IdContract: "",
      SignDate: "",
      items: ["Hoang hoa", "tien lam", "chuc dung"],
      itemsSignerWage: ["Hoang hoa", "tien lam", "chuc dung"],
      itemsSignerContract: ["Hoang hoa", "tien lam", "chuc dung"],
      PenddingWageId: "",
      AppectWageId: "",
      DennyWageId: "",
      dataTitle: [
        {
          id: 1,
          name: "Trưởng phòng"
        },
        {
          id: 2,
          name: "Phó phòng"
        }
      ],
      dataDecisionNumber: [
        {
          id: 1,
          name: "Quyết định lương"
        },
        {
          id: 2,
          name: "Quyết định bổ nhiệm"
        }
      ],
      dataOrg: [
        {
          id: 1,
          name: "tinh van consulting"
        },
        {
          id: 2,
          name: "tinh van group"
        }
      ],
      checked: false,
      showcheckbox: false,
      multiple: false,
      size: "large",
      batch: false,
      whole: false,
      nodots: false,
      collapse: false,
      MorningStart: "",
      MorningFinish: "",
      AfternoonStart: "",
      AfternoonFinish: "",
      ExpireDate: "",
      EffectDate: "",
      expireDate: "",
      effectDate: "",
      effectDateSalary: "",
      expireDateSalary: "",
      showContract: true,
      showWageRecord: false,
      dataTypeDecision: [
        { id: 1, name: "Nghi viec" },
        { id: 2, name: "Nâng lương" }
      ],
      dataSalaryGroup: [{ id: 1, name: "Bậc I" }, { id: 2, name: "Bậc II" }],
      dataSalaryLevel: [{ id: 1, name: "Bậc I" }, { id: 2, name: "Bậc II" }],
      dataSalaryRank: [{ id: 1, name: "Bậc I" }, { id: 2, name: "Bậc II" }],
      dataACTIVEDECISION: [
        {
          id: "1",
          name: "Chưa phê duyệt"
        },
        {
          id: "2",
          name: "Phê duyệt"
        },
        {
          id: "3",
          name: "Không phê duyệt"
        }
      ],
      dataObjectInsurrance: [
        { id: 1, name: "Thâm niên 1 năm" },
        { id: 2, name: "Thâm niên 2 năm" }
      ],
      salaryBasic: "0",
      salaryTotal: "0",
      showWage: true,
      show: false,
      data: [],
      dataAllownance: [
        { id: 1, name: "Ăn trưa" },
        { id: 2, name: "Điện thoại" }
      ]
    };
  },
  methods: {
    async created() {
      this.AutocompleteInit();
      this.$refs.cboActive.disabled = true;
    },
    CheckCheckBox(evt) {},
    CheckCheckBoxWage(evt) {
      this.WageOldId = evt.id;
      this.Num = evt.decisionNo;
    },
    ChangeAllowance(evt) {
      for (let i = 0; i < this.data.length; i++) {
        if (_.isEqual(evt.id, this.data[i].id)) {
          this.data[i].allowanceId = evt.allowanceId;
          break;
        }
      }
    },
    closeDatepicker(evt) {
      this.data.forEach((key, index) => {
        if (_.isEqual(evt.id, key.id)) {
          _.assign(key, evt);
        }
      });
    },
    CheckboxInsurrance(evt) {
      for (let i = 0; i < this.data.length; i++) {
        if (_.isEqual(evt.id, this.data[i].id)) {
          this.data[i].isInsurrance = evt.isInsurrance;
          break;
        }
      }
    },
    focusOut1(evt) {
      for (let i = 0; i < this.data.length; i++) {}
      this.UpdateSumMoney();
    },
    AutocompleteInit() {
      bus.$on("AutocompleteEmployeeContractChange", data => {});
      bus.$on("AutocompleteEmployeeContractSelected", data => {
        if (!_.isNull(data)) {
          this.getEmployeeInfomation(data);
        }
      });
      bus.$on("AutocompleteSignerContractChange", data => {
        if (!_.isEqual(data, "")) {
        }
      });
      bus.$on("AutocompleteSignerContractSelected", data => {
        if (!_.isNull(data)) {
          this.getSignerInformation(data);
        }
      });
      bus.$on("AutocompleteSignerWageChange", data => {
        if (!_.isEqual(data, "")) {
        }
      });
      bus.$on("AutocompleteSignerWageSelected", data => {
        if (!_.isNull(data)) {
          this.getSignerWageInformation(data);
        }
      });
    },
    async ShowPopUpManager() {
      this.$refs.showPopUpManager.show();
      bus.$on("ChooseManagerId", data => {
        this.getEmployeeInfomation(data);
      });
    },
    async getEmployeeInfomation(emp) {},
    async ShowPopUpSigner() {
      this.$refs.showPopUpSigner.show();
      bus.$on("ChooseSignerId", data => {
        this.getSignerInformation(data);
        this.$refs["showPopUpSigner"].hide();
      });
    },
    ChooseWage() {
      this.$refs.lbWageRecord.innerHTML = this.Num;
      this.displayContinueButton = false;
      this.showDeleteWage = true;
    },
    ClearWageOld() {
      this.displayContinueButton = true;
      this.showDeleteWage = false;
    },
    async ShowPopUpSignerWage() {
      this.$refs.showPopUpSignerWage.show();
      bus.$on("ChooseSignerWageId", data => {
        this.getSignerWageInformation(data);
        this.$refs["showPopUpSignerWage"].hide();
      });
    },
    async getSignerWageInformation(emp) {},
    async getSignerInformation(emp) {},
    async onSubmit() {
      try {
        bus.$emit("saveWageRecordSubmit", true);
      } catch (err) {}
    },
    changeActflg() {},
    async onSaveAndContinue() {
      this.showWageRecord = true;
      this.data = [
        {
          effectDate: "",
          expireDate: "",
          selected: false,
          allowanceId: "",
          amount: 0,
          isInsurrance: false
        }
      ];
      if (_.isEqual(this.dataAllownance.length, 0)) {
        //call allowance list
      }
      if (_.isEqual(this.dataACTIVEDECISION.length, 0)) {
      }
    },
    async onEdit() {
      this.showWageRecord = false;
    },
    async onSaveWageRecord() {
      this.save = true;
      this.data.forEach((key, index) => {
        key.amount = parseFloat(key.amount.toString().replace(/[^\d\.]/g, ""));
      });
      let idcontract = "";
      //luu hd truoc
      try {
        if (!_.isEqual(idcontract, "")) {
          this.save = false;
          bus.$emit("saveWageRecordSuccess", true);
        }
      } catch (err) {
        this.save = false;
      }
    },
    ShowPopUpEmployee() {},
    async changeSalaryGroup() {},
    async changeSalaryLevel() {},
    async ChangeSalaryRank() {},
    Addrow(evt) {
      this.data.push({
        effectDate: "",
        expireDate: "",
        selected: false,
        allowanceId: "",
        amount: 0,
        isInsurrance: false,
        basicsalary: false
      });
    },
    Deleterow(evt) {
      const leng = this.data.length;
      if (leng > 1) {
        this.data.forEach((key, index) => {
          if (_.isEqual(evt.id, key.id)) {
            this.data.splice(index, 1);
          }
        });
      } else {
        this.data = [
          {
            effectDate: "",
            expireDate: "",
            selected: false,
            allowanceId: "",
            amount: 0,
            isInsurrance: false
          }
        ];
      }
      this.UpdateSumMoney();
    },
    UpdateSumMoney() {},
    changeAppect(evt) {},
    changeShow() {
      this.showWage = !this.showWage;
    },
    async ShowWageOld() {
      this.showTable = true;
    }
  },
  computed: {}
};
</script>