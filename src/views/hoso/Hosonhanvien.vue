<template>
  <div class="animated fadeIn">

    <b-row>
      <b-col lg="12">
        <b-card class="card-de1">
          <div class="panel-title-de1">
            <div>
              <h4>Hồ sơ nhân viên </h4>
              <b-button class="btn-pill mr-1" variant="default" size="sm" @click="AddEmployee">
                Thêm mới <i class="icon-plus"></i>
              </b-button>
                <b-button class="btn-pill mr-1" variant="default" size="sm"  @click="ExtenEmployee" v-if="checkButton">
                Edit <i class="icon-plus"></i>
              </b-button>
                <b-button class="btn-pill" variant="default" size="sm">
                <i class="icon-plus icons"></i> Làm hợp đồng
              </b-button>
                <b-button class="btn-pill" variant="default" size="sm">
                <i class="icon-plus icons"></i> Làm hồ sơ lương
              </b-button>
                <b-button class="btn-pill" variant="default" size="sm">
                <i class="icon-plus icons"></i> nghỉ việc
              </b-button>
                  <b-button class="btn-pill mr-1" variant="default" size="sm" @click="showBasic">
                <i class="fa fa-filter"></i> Tìm kiếm
              </b-button>
              <b-button class="btn-pill mr-1" variant="default" size="sm" @click="showAdvance">
                <i class="fa fa-filter"></i> Tìm kiếm nâng cao
              </b-button>
            </div>
            <div class="ml-auto">
              <b-button class="btn-pill btn-outline ml-1" variant="outline-default" size="sm">
                Print <i class="cui-print icons"></i>
              </b-button>
              <b-button class="btn-pill ml-1" variant="outline-default" size="sm">
                Export <i class="icon-arrow-down-circle icons"></i>
              </b-button>
            </div>
          </div>
            <div class="filter-box show-filter-box">
            <div v-show="showbasic" class="basic-box">
             <div class="card">
              <div class="card-body">
               <h4 class="title-box">Tìm kiếm cơ bản</h4>
               <div class="check-items">
                 <b-form-group>
                   <b-form-checkbox-group id="exampleChecks">
                     <b-form-checkbox value="1">Employee code</b-form-checkbox>
                     <b-form-checkbox value="2">Fullname</b-form-checkbox>
                     <b-form-checkbox value="3">Gender</b-form-checkbox>
                   </b-form-checkbox-group>
                 </b-form-group>
               </div>
               <div class="input-list">
                 <div class="input-item" v-for="(item, index) in dataSearchBasic" :key="item.value">
                   <!-- <label>{{item.text}}</label> -->
                   <input placeholder="Employee code" class="custom-input-style1" type="text" v-model="model[index]" @change="showmodel" />
                 </div>
               </div>
               <div>
                <div class="form-group text-left mt-3">
                  <button id="btnSearch" class="btn btn-custom btn-success" @click="Search($event)">
                    <i class="fa fa-search" aria-hidden="true" />
                    <span>Tìm kiếm</span>
                  </button>
                </div>
               </div>
              </div>
             </div>
            </div>
            <div v-show="showadvance" class="advanve-box">
              <div class="card">
               <div class="card-body">
                <h4 class="title-box">Tìm kiếm nâng cao</h4>
                <div class="form-row">
                  <div class="col-md-12">
                    <div class="b-flex mb-2">
                      <label class="label-custom" for="cboTieuChi">Tiêu chí lọc</label>
                      <div class="custom-slbox">
                        <select id="cboTieuChi" class="form-control sl-tv-style1" v-on:change="onChangeTieuChi($event)" v-model="TieuChiLoc" placeholder="Chọn Tiêu Chí">
                          <option v-for="item in dataTieuChi" :value="item.value" :key="item.value">{{item.value}}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 mb-3">
                    <div class="tbl-adv-fil">
                      <table class="show-fil-col">
                        <thead>
                          <tr>
                            <th v-for="key in dataColumn" :key="key.value"
                                :class="{ active: sortKey == key }">
                              {{ key.value  }}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td v-for="(item, index) in dataColumn" :key="item.value">
                              <div class="custom-slbox">
                               <select class="form-control sl-tv-style1" v-on:change="onChange(item.value)" :ref="item.value" v-model="model[index]">
                                 <option :value="item.value" v-for="item in dataSelect" :key="item.value">{{item.text}}</option>
                               </select>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td v-for="(item) in dataColumn" :key="item.value">
                              <input placeholder="Nhập tên" class="custom-input-style1" type="text" :ref="item.value+'*content'" @change="focusOut(item.value)" v-if="item.type=='string'" />
                              <date-picker class="custom-datepicker-style1" lang="en" @change="datepickerClosedFunction(item.value)" v-model="dateModel[item]"
                                           :ref="item.value+'*datecontent'" format="DD-MM-YYYY" v-if="item.type=='datetime'" :clearable="false"></date-picker>
                              <b-form-checkbox class="custom-checkbox-style1" :ref="item.value+'*checkboxcontent'" @change="change(item.value)" v-if="item.type=='checkbox'" value="me">Đã nghỉ</b-form-checkbox>
                              <!-- <input class="custom-checkbox-style1" type="checkbox" :ref="item.value+'*checkboxcontent'" @change="change(item.value)" v-if="item.type=='checkbox'" /> -->
                            </td>
                          </tr>
                          <tr>
                            <td align="right" v-for="(item) in dataColumn" :key="item.value">
                              <b-btn class="btn-remove" @click="DeleteTieuChi(item.value)"><i class="fa fa-close"></i> Xóa</b-btn>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="col-md-12">
                   <div class="form-group text-left mt-1">
                     <button id="btnSearch" class="btn btn-custom btn-success" @click="Search($event)">
                       <i class="fa fa-search" aria-hidden="true" />
                       <span>Tìm kiếm</span>
                     </button>
                   </div>
                  </div>
                </div>
               </div>
              </div>
            </div>
          </div>
          <div class="tbl-de">
            <!--<c-table class="card-tbl-de1" :table-data="items" :fields="fields"></c-table>-->
            <v-client-table :columns="columns" :data="itemsArray" :options="options" ref="tblEmployee" v-show="showTable">
              <template slot="selected" slot-scope="props">
                <input id="chkSelected" v-model="props.row.selected" type="checkbox" @click="CheckCheckBox(props.row)">
              </template>
              <template slot="fullname" slot-scope="props">
                {{props.row.fullname}}
              </template>
              <template slot="sub" slot-scope="props">
                {{props.row.sub}}
              </template>
            </v-client-table>
          </div>
          <!-- element to new Employee -->
            <b-collapse id="newEmployee" v-model="showAdd">
                <NewEmployee :dataGender="dataGender" :dataEmployeeObject="dataEmployeeObject" :dataReligion="dataReligion" :dataEthnic="dataEthnic"
                             :dataNation="dataNation"  :dataTitle="dataTitle" :dataOrg="dataOrg">
                </NewEmployee>
            </b-collapse>

          <!-- element to extension employee -->
            <b-collapse id="extenEmployee" v-model="showExt">
              <EditEmployee v-if="showExt" >
              </EditEmployee>
            </b-collapse>


        </b-card>
      </b-col>
    </b-row><!--/.row-->
  </div>
</template>

<script>
import { shuffleArray } from "@/shared/utils";
import cTable from "./Table.vue";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import _ from "lodash";
import DatePicker from "vue2-datepicker";
import { bus } from "../../main";
import NewEmployee from "./NewEmployee.vue";
import EditEmployee from "./EditEmployee.vue";
const someData = () =>
  shuffleArray([
    {
      selected: false,
      id: "1232",
      fullname: "Samppa Nori",
      gender: "Nam",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ",
      _rowVariant: "success"
    },
    {
      selected: true,
      id: "4444",
      fullname: "Linh Nguyen",
      gender: "Nam",
      groupSub: "Design",
      sub: "Design Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ",
      _rowVariant: "success"
    },
    {
      selected: false,
      id: "1233",
      fullname: "Samppa Nori a",
      gender: "Nam",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1234",
      fullname: "Samppa Nori v",
      gender: "Nữ",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1235",
      fullname: "Samppa Nori b",
      gender: "Nam",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1236",
      fullname: "Samppa Nori a",
      gender: "Nữ",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1237",
      fullname: "Samppa Nori s",
      gender: "Nam",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1238",
      fullname: "Samppa Nori",
      gender: "Nam",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1239",
      fullname: "Samppa Nori",
      gender: "Nữ",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1231",
      fullname: "Samppa Nori",
      gender: "Nam",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1211",
      fullname: "Samppa Nori",
      gender: "Nữ",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1212",
      fullname: "Samppa Nori",
      gender: "Nam",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1213",
      fullname: "Samppa Nori",
      gender: "Nữ",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1214",
      fullname: "Samppa Nori",
      gender: "Nam",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1216",
      fullname: "Samppa Nori",
      gender: "Nam",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1215",
      fullname: "Samppa Nori",
      gender: "Nam",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1217",
      fullname: "Samppa Nori",
      gender: "Nam",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1218",
      fullname: "Samppa Nori",
      gender: "Nam",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1219",
      fullname: "Samppa Nori",
      gender: "Nam",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1222",
      fullname: "Samppa Nori",
      gender: "Nam",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1221",
      fullname: "Samppa Nori",
      gender: "Nam",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    },
    {
      selected: false,
      id: "1220",
      fullname: "Samppa Nori",
      gender: "Nam",
      groupSub: "BA",
      sub: "BA Staff",
      dept: "Công nghệ",
      obj: "Front",
      status: "Đã nghỉ"
    }
  ]);

export default {
  name: "Hosonhanvien",
  components: {
    DatePicker,
    NewEmployee,
    EditEmployee
  },
  data: () => {
    return {
      dataOrg: [
        {
          id: 0,
          text: "Same but with checkboxes",
          value: "Same but with checkboxes",
          icon: "",
          opened: false,
          selected: false,
          disabled: false,
          loading: false,
          children: [
            {
              id: 1,
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
      dataTitle: [
        {
          name: "Lập trình viên",
          id: 1
        },
        {
          name: "Giám đốc điều hành",
          id: 2
        }
      ],
      dataGender: [],
      dataEmployeeObject: [],
      dataEthnic: [],
      dataReligion: [],
      dataNation: [],
      showTable: true,
      showAdd: false,
      showExt: false,
      model: [],
      dateModel: [],
      content: [],
      checked: false,
      showbasic: false,
      checkButton: false,
      sortKey: "",
      searchData: [],
      TieuChiLoc: "",
      dataColumn: [],
      dataTieuChi: [
        { value: "employeeCode", type: "string" },
        { value: "joinDateState", type: "datetime" },
        { value: "fullName", type: "string" },
        { value: "workstatus", type: "checkbox" }
      ],
      TieuChiLoc: "",
      dataSelect: [
        { value: "&", text: "Và" },
        { value: "||", text: "Hoặc" },
        { value: "=", text: "Bằng" },
        { value: ">", text: "Lớn hơn" },
        { value: "<", text: "Nhỏ hơn" }
      ],
      showadvance: false,
      items: someData,
      itemsArray: someData(),
      searchbasic: [],
      dataSearchBasic: [
        { value: "employeeCode", text: "employeeCode" },
        { value: "fullName", text: "fullName" },
        { value: "sex", text: "sex" }
      ],
      columns: ["selected", "id", "fullname", "sub"],
      options: {
        headings: {
          id: "Id",
          fullname: "Ho ten",
          sub: "chuc vu"
        },
        sortable: ["fullname", "sub"],
        filterable: ["id", "fullname"]
      }
    };
  },
  methods: {
    CheckCheckBox(evt) {
      this.checkButton = false;
      let length = this.$refs.tblEmployee.tableData.length;
      console.log(evt);
      if (!evt.selected) {
        this.checked = true;
        this.checkButton = true;
        return;
      }
      for (let i = 0; i < length; i++) {
        let ot = this.$refs.tblEmployee.tableData[i];
        if (!_.isEqual(ot.id, evt.id)) {
          if (ot.selected) {
            this.checked = true;

            return;
          }
        } else {
          this.checked = false;
        }
      }
    },
    showmodel() {
      console.log(this.model);
    },
    showAdvance() {
      this.showadvance = !this.showadvance;
      console.log(this.showadvance);
    },
    showBasic() {
      this.showbasic = !this.showbasic;
    },
    onChangeTieuChi() {
      debugger;
      let tc = this.TieuChiLoc;
      if (!_.isEqual(tc, "") && !_.isUndefined(tc)) {
        this.dataTieuChi.forEach((key, index) => {
          if (_.isEqual(key.value, tc)) {
            this.dataColumn.push(key);
            this.searchData.push({ field: tc, condi: "&", content: "" });
            this.dataTieuChi.splice(index, 1);
          }
        });
      }
    },
    async AddEmployee() {
      this.showAdd = !this.showAdd;
      this.showExt = false;
      if (this.showAdd) {
        this.showTable = false;
        this.collapsed = false;
        this.Filter = false;
      } else {
        this.showTable = true;
        this.Filter = true;
        this.showQTL = false;
        this.showGCNT = false;
      }
      if (_.isEqual(this.dataGender.length, 0)) {
        //call api lay du lieu
        this.dataGender = [
          {
            name: "Nam",
            id: 1
          },
          {
            name: "Nữ",
            id: 2
          }
        ];
      }
      if (_.isEqual(this.dataEmployeeObject.length, 0)) {
        this.dataEmployeeObject = [
          {
            name: "Dối tượng 1",
            id: 1
          },
          {
            name: "Đối tượng 2",
            id: 2
          }
        ];
      }
      if (_.isEqual(this.dataEthnic.length, 0)) {
        this.dataEthnic = [
          {
            name: "Phật giáo",
            id: 1
          },
          {
            name: "Thiên chúa giáo",
            id: 2
          }
        ];
      }
      if (_.isEqual(this.dataReligion.length, 0)) {
        this.dataReligion = [
          {
            name: "Kinh",
            id: 1
          },
          {
            name: "Tày",
            id: 2
          }
        ];
      }
      if (_.isEqual(this.dataNation.length, 0)) {
        this.dataNation = [
          {
            name: "Việt Nam",
            id: 1
          },
          {
            name: "Thái Lan",
            id: 2
          }
        ];

        //lang nghe viec tao employee thanh cong de load lai bang employee
        bus.$on("CreatedEmployee", data => {
          this.$refs.tblEmployee.refresh();
          this.showAdd = !this.showAdd;
          this.showTable = true;
          this.Filter = true;
        });
      }
    },
    async ExtenEmployee() {
      this.showAdd = false;
      this.showExt = !this.showExt;
      // debugger;
      if (this.showExt) {
        this.showTable = false;
        this.collapsed = false;
        this.Filter = false;
      } else {
        this.showTable = true;
        this.Filter = true;
        this.showQTL = false;
        this.showGCNT = false;
        this.showHS = true;
      }
      //  this.getEmployeeById();
      //debugger;
      bus.$emit("GetEmployeeByIDExtension", this.Id);
    }
  }
};
</script>