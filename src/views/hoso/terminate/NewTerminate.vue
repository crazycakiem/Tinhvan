<template>
  <div>
    <h3>Thêm nghỉ việc</h3>
    <div>
      <b-button
        id="btnSearch"
        type="button"
        variant="primary"
        @click="ChooseEmployee"
      >Danh sách nhân viên</b-button>
      <v-client-table :columns="columns" :data="dataEmployee" :options="options" ref="tblEmloyee">
        <template slot="employeeCode" slot-scope="props">
          <label>{{props.row.employeeCode}}</label>
        </template>
        <template slot="name" slot-scope="props">
          <label>{{props.row.name}}</label>
        </template>
        <template slot="org" slot-scope="props">
          <label>{{props.row.org}}</label>
        </template>
        <template slot="title" slot-scope="props">{{props.row.title}}</template>
        <template slot="joinDate" slot-scope="props">
          <label>{{(props.row.joinDate)}}</label>
        </template>
        <template slot="expiryDate" slot-scope="props">
          <label>{{(props.row.expiryDate)}}</label>
        </template>
        <template slot="effectDate" slot-scope="props">
          <label>{{(props.row.effectDate)}}</label>
        </template>
        <div slot="act" slot-scope="props">
          <button
            id="btnDenny"
            class="btn btn-danger btn-custom"
            @click="Deleterow(props.row)"
            v-bind:ref="props.row.id+'*denny'"
          >
            <span class="fa fa-close"/>
          </button>
        </div>
      </v-client-table>
      <b-form v-on:submit.prevent>
        <b-row>
          <b-col cols="1">
            <label for="one">Ngày nộp đơn</label>
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
            <label for="one">Ngày nghỉ mong muốn</label>
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
          <b-col cols="3">
            <input id="chk3b" type="checkbox"> Nghỉ việc 3 bên
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="1">
            <label label-for>Lý do nghỉ việc</label>
          </b-col>
          <b-col cols="6">
            <textarea rows="4" style="width:100%;"></textarea>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="1">
            <label label-for>Ghi chú</label>
          </b-col>
          <b-col cols="6">
            <textarea rows="4" style="width:100%;"></textarea>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="1"></b-col>
          <b-col cols="2">
            <select>
              <option
                v-for="status in dataACTIVETERMINATE"
                :value="status.id"
                :key="status.id"
              >{{ status.name }}</option>
            </select>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="4">
            <b-button
              id="btnSubmit"
              type="button"
              variant="primary"
              @click="onSubmit"
              style="float:right"
            >
              <span class="fa fa-save"></span>
              Lưu
            </b-button>
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
        <PopUpManager :data="listOrg" typeManager="ChooseMultiEmployeeId" :multiSelect="true"></PopUpManager>
      </b-modal>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import DatePicker from "vue2-datepicker";
import PopUpManager from "../../tochuc/PopUpManager.vue";
import { bus } from "../../../main";
import _ from "lodash";
export default {
  name: "NewTerminate",
  components: {
    DatePicker,
    PopUpManager
  },
  data: () => {
    return {
      dataEmployee: [
        {
          employeeCode: "N01",
          name: "Hoàng văn hòa",
          org: "Tinh Vân",
          title: "Trưởng phòng",
          joinDate: "20/1/2017",
          contractId: "039293",
          typecontract: "Thử việc",
          effectDate: "1/12/2018",
          expiryDate: "3/12/2017",
          act: "Hoạt động"
        },
        {
          employeeCode: "N02",
          name: "Hoàng văn hòa",
          org: "Tinh Vân",
          title: "Trưởng phòng",
          joinDate: "20/1/2017",
          contractId: "039293",
          typecontract: "Thử việc",
          effectDate: "1/12/2018",
          expiryDate: "3/12/2017",
          act: "Hoạt động"
        }
      ],
      columns: [
        "employeeCode",
        "name",
        "org",
        "title",
        "joinDate",
        "contractId",
        "typecontract",
        "effectDate",
        "expiryDate",
        "act"
      ],
      options: {
        filterable: true,
        sortable: ["type"],
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
          employeeCode: function(h) {
            return "Mã nhân viên";
          },
          name: function(h) {
            return "Tên nhân viên";
          },
          org: function(h) {
            return "Tổ chức";
          },
          groupTitle: function(h) {
            return "Nhóm chức danh";
          },
          title: function(h) {
            return "CHức danh";
          },
          effectDate: function(h) {
            return "Ngày hiệu lưc";
          },
          expiryDate: function(h) {
            return "Ngày hết hạn";
          },
          typecontract: function(h) {
            return "Loại hợp đồng";
          },
          act: function(h) {
            return "Hoạt đôngk";
          }
        }
      },
      selected: "A",
      dataACTIVETERMINATE: [
        {
          id: "1",
          name: "Phe duyet"
        },
        {
          id: "2",
          name: "tu choi"
        },
        {
          id: 3,
          name: "cho phe duyet"
        }
      ],
      dataTitle: [
        {
          id: "1",
          name: "Truong phong"
        },
        {
          id: "2",
          name: "Pho phong"
        },
        {
          id: "3",
          name: "Nhan vien"
        }
      ],
      listOrg: [
        {
          id: "1",
          name: "Tinh van Group"
        },
        {
          id: "2",
          name: "Tinh van Solution"
        },
        {
          id: "3",
          name: "Tinh van Conlustiing"
        }
      ],
      employee: []
    };
  },
  methods: {
    async ChooseEmployee() {
      this.$refs.showPopUpEmployee.show();
      bus.$on("ChooseMultiEmployeeId", data => {
        this.UnShiftData(data);
        this.$refs.showPopUpEmployee.hide();
      });
    },
    async onSubmit() {
      this.AssignStatus();
    },

    AssignStatus() {
      this.dataEmployee.forEach((key, index) => {
        this.employee.push(key);
      });
    },

    UnShiftData(data) {
      data.forEach((key, index) => {
        if (!this.CheckExistEmployee(key)) {
          this.dataEmployee.unshift(key);
        }
      });
    },
    CheckExistEmployee(emp) {
      for (let i = 0; i < this.dataEmployee.length; i++) {
        if (_.isEqual(emp.id, this.dataEmployee[i].id)) return true;
      }
      return false;
    },
    Deleterow(evt) {
      const leng = this.dataEmployee.length;
      this.dataEmployee.forEach((key, index) => {
        if (_.isEqual(evt.id, key.id)) {
          this.dataEmployee.splice(index, 1);
        }
      });
    }
  }
};
</script>
