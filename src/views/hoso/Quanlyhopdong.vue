<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <b-card class="card-de1">
           <div class="panel-title-de1">
             <div>
              <h4>Quản lý hợp đồng</h4>
              <b-button class="btn-pill mr-1" variant="default" size="sm" @click="Goto">
                  Thêm mới <i class="icon-plus"></i>
              </b-button>
              <b-button class="btn-pill" variant="default" size="sm">
                  <i class="icon-magnifier icons"></i> Tìm kiếm
              </b-button>
                  <b-button class="btn-pill mr-1" variant="default" size="sm" v-if="checked" @click="ChooseContract">
                  Thanh lý hợp đồng <i class="icon-plus"></i>
              </b-button>
                <button id="btnApply" v-if="checked">
                <i class="fa fa-lock" style="color:red" aria-hidden="true" />
                <b-tooltip v-if="checked" target="btnApply"  />
              </button>
              <button id="btnDenny"  v-if="checked">
                <i class="fa fa-unlock-alt" aria-hidden="true" />
                <b-tooltip v-if="checked" target="btnDenny" />
              </button>
              <button id="btnDelete"  v-if="checked">
                <i class="fa fa-close" aria-hidden="true" />
                <b-tooltip v-if="checked" target="btnDelete" />
              </button>
             </div>
             <div class="ml-auto">
              <b-button class="btn-pill ml-1" variant="outline-default" size="sm">
                  Print <i class="cui-print icons"></i>
              </b-button>
              <b-button class="btn-pill ml-1" variant="outline-default" size="sm">
                  Export <i class="icon-arrow-down-circle icons"></i>
              </b-button>
             </div>
           </div>
           <div class="tbl-de">
<<<<<<< HEAD
             <!-- <c-table class="card-tbl-de1" :table-data="items" :fields="fields"></c-table> -->
               <v-client-table :columns="columns" :data="itemsArray" :options="options" ref="tblHopdong">
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
=======
             <v-client-table class="table-custom tbl-nosearch" ref="tblContract" :columns="columns" :options="options" :data="dataContract">
            <template slot="selected" slot-scope="props">
                <input id="chkSelected" v-model="props.row.selected" type="checkbox" @click="CheckCheckBox(props.row)">
            </template>
            <template slot="employeecode" slot-scope="props">
                <label v-if="props.row.employee!=null">{{props.row.employee.employeeCode}}</label>
            </template>
            <template slot="fullname" slot-scope="props">
                <label v-if="props.row.employee!=null">{{props.row.employee.firstName}} {{props.row.employee.lastName}} </label>
            </template>
            <template slot="org" slot-scope="props">
                <label v-if="props.row.employee!=null">{{props.row.employee.organization.name}} </label>
            </template>
            <template slot="effectDate" slot-scope="props">
                <label>{{(props.row.effectDate)}} </label>
            </template>
            <template slot="expireDate" slot-scope="props">
                <label>{{(props.row.expireDate)}} </label>
            </template>
            <template slot="statusId" slot-scope="props">
               <label>{{props.row.statusId}}</label>
            </template>
            <template slot="contractNo" slot-scope="props">
                <label>
                    {{props.row.contractNo}}
                </label>
            </template>
        </v-client-table>
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
           </div>

              <b-modal v-model="modalShow">
                 <b-form inline>
      <label class="sr-only" for="inlineFormInputName2">Ngày thanh lý</label>
      <date-picker lang="en"
                                                         format="DD-MM-YYYY" :clearable="false"></date-picker>
      <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
      <textarea>

      </textarea>
      <b-button variant="primary">Save</b-button>
    </b-form>
    </b-modal>
        </b-card>
      </b-col>

    </b-row><!--/.row-->
  </div>

</template>
<script>
import { shuffleArray } from "@/shared/utils";
<<<<<<< HEAD
import DatePicker from "vue2-datepicker";
const someData = () =>
  shuffleArray([
    {
      id: "1232",
      fullname: "Samppa Nori",
      gender: "BA",
      groupSub: "BA staff",
      sub: "1234",
      dept: "Quyết định lương",
      dept: "Quyết định lương",
      date: "21/09/19",
      date2: "21/11/19",
      status: "Chưa nghỉ"
    },
    {
      id: "1233",
      fullname: "Linh Nguyen",
      gender: "BA",
      groupSub: "BA fsf",
      sub: "1234",
      dept: "Quyết định lương",
      date: "21/09/19",
      date2: "21/11/19",
      status: "Chưa nghỉ"
    },
    {
      id: "1234",
      fullname: "Nguyen Linh",
      gender: "BA",
      groupSub: "BAss",
      sub: "1234",
      dept: "Quyết định lương",
      date: "21/09/19",
      date2: "21/11/19",
      status: "Chưa nghỉ"
    },
    {
      id: "1235",
      fullname: "Nguyen Linh Linh",
      gender: "BA",
      groupSub: "BA sadas",
      sub: "1234",
      dept: "Quyết định lương",
      date: "21/09/19",
      date2: "21/11/19",
      status: "Chưa nghỉ"
    },
    {
      id: "1236",
      fullname: "Samppa Nori",
      gender: "BA",
      groupSub: "BA sssaa",
      sub: "1234",
      dept: "Quyết định lương",
      date: "21/09/19",
      date2: "21/11/19",
      status: "Chưa nghỉ"
    },
    {
      id: "1237",
      fullname: "Samppa Nori",
      gender: "BA",
      groupSub: "BA cccc",
      sub: "1234",
      dept: "Quyết định lương",
      date: "21/09/19",
      date2: "21/11/19",
      status: "Đã nghỉ"
    },
    {
      id: "1238",
      fullname: "Samppa Nori",
      gender: "BA",
      groupSub: "BAssss",
      sub: "1234",
      dept: "Quyết định lương",
      date: "21/09/19",
      date2: "21/11/19",
      status: "Đã nghỉ"
    },
    {
      id: "1239",
      fullname: "Samppa Nori",
      gender: "AB",
      groupSub: "BAfff",
      sub: "1234",
      dept: "Quyết định lương",
      date: "21/09/19",
      date2: "21/11/19",
      status: "Chưa nghỉ"
    },
    {
      id: "1231",
      fullname: "Samppa Nori",
      gender: "CD",
      groupSub: "BAssdd",
      sub: "1234",
      dept: "Quyết định lương",
      date: "21/09/19",
      date2: "21/11/19",
      status: "Đã nghỉ"
    },
    {
      id: "1211",
      fullname: "Samppa Nori",
      gender: "MK",
      groupSub: "BAaaaaa",
      sub: "1234",
      dept: "Quyết định lương",
      date: "21/09/19",
      date2: "21/11/19",
      status: "Đã nghỉ"
    },
    {
      id: "1211",
      fullname: "Samppa Nori",
      gender: "MK",
      groupSub: "BAaaaaa",
      sub: "1234",
      dept: "Quyết định lương",
      date: "21/09/19",
      date2: "21/11/19",
      status: "Đã nghỉ"
    },
    {
      id: "1211",
      fullname: "Samppa Nori",
      gender: "MK",
      groupSub: "BAaaaaa",
      sub: "1234",
      dept: "Quyết định lương",
      date: "21/09/19",
      date2: "21/11/19",
      status: "Đã nghỉ"
    }
  ]);

export default {
  name: "quanlyhopdong",
  components: { DatePicker },
  data: () => {
    return {
      modalShow: false,
      checkButton: false,
      checked: false,
      itemsArray: someData(),
      columns: [
        "selected",
        "id",
        "fullname",
        "gender",
        "groupSub",
        "sub",
        "dept",
        "date",
        "date2",
        "status"
      ],
      options: {
        headings: {
          id: "Id",
          fullname: "Ho ten",
          sub: "chuc vu",
          gender: "Giới tính",
          dept: "Quyết định"
        },
        sortable: ["fullname", "sub"],
        filterable: ["id", "fullname"]
=======
export default {
  name: "quanlyhopdong",
  components: {},
  data: () => {
    return {
      PenddingId: "",
      SignDate: "",
      checkButton: false,
      showcheckbox: false,
      checkShowWorking: false,
      dataTitle: [],
      Id: "",
      emp: [],
      listOrg: [],
      checked: false,
      checked1: false,
      editchecked: false,
      state: false,
      collapsed: false,
      Code: "",
      Name: "",
      Remark: "",
      Active: "",
      groupID: "",
      nameGroup: "",
      MessageError: "",
      CodeRequired: "",
      GroupRequired: "",
      NameRequired: "",
      grouplist: [],
      listIdTitle: [],
      listIdChange: [],
      dataStatus: [],
      statuslist: [],
      datacontractype: [],
      dataTieuChi: [
        { value: "employeeCode", type: "string" },
        { value: "joinDateState", type: "datetime" },
        { value: "fullName", type: "string" },
        { value: "workstatus", type: "checkbox" }
      ],
      data: [],
      checked: false,
      columns: [
        "selected",
        "contractNo",
        "employeecode",
        "fullname",
        "org",
        "titleId",
        "typecontract",
        "effectDate",
        "expireDate",
        "statusId"
      ],
      dataContract: [
        {
          selected: false,
          contractNo: "N02934",
          employeecode: "M01",
          fullname: "Phi tien lam",
          org: "don vi",
          titleId: "Chức danh",
          typecontract: "Loại hợp đồng",
          effectDate: "10/10/2019",
          expireDate: "1/12/1990",
          statusId: "Hoạt động"
        },
        {
          selected: false,
          contractNo: "N02934",
          employeecode: "M01",
          fullname: "Phi tien lam",
          org: "don vi",
          titleId: "Chức danh",
          typecontract: "Loại hợp đồng",
          effectDate: "10/10/2019",
          expireDate: "1/12/1990",
          statusId: "Hoạt động"
        },
        {
          selected: false,
          contractNo: "N02934",
          employeecode: "M01",
          fullname: "Phi tien lam",
          org: "don vi",
          titleId: "Chức danh",
          typecontract: "Loại hợp đồng",
          effectDate: "10/10/2019",
          expireDate: "1/12/1990",
          statusId: "Hoạt động"
        },
        {
          selected: false,
          contractNo: "N02934",
          employeecode: "M01",
          fullname: "Phi tien lam",
          org: "don vi",
          titleId: "Chức danh",
          typecontract: "Loại hợp đồng",
          effectDate: "10/10/2019",
          expireDate: "1/12/1990",
          statusId: "Hoạt động"
        },
        {
          selected: false,
          contractNo: "N02934",
          employeecode: "M01",
          fullname: "Phi tien lam",
          org: "don vi",
          titleId: "Chức danh",
          typecontract: "Loại hợp đồng",
          effectDate: "10/10/2019",
          expireDate: "1/12/1990",
          statusId: "Hoạt động"
        }
      ],
      options: {
        filterable: true,
        sortable: ["employeecode", "fullname", "name", "org", "title"],
        columnsClasses: {
          selected: "col-check-box",
          fullname: "col-group",
          numberdecision: "col-group",
          org: "col-group",
          title: "col-group",
          actflg: "col-action"
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
          contractNo: function(h) {
            return "ContractNumber";
          },
          employeecode: function(h) {
            return "EmployeeCode";
          },
          fullname: function(h) {
            return "FullName";
          },
          numberdecision: function(h) {
            return "NumberDecision";
          },
          typecontract: function(h) {
            return "ContractType";
          },
          name: function(h) {
            return "Name";
          },
          org: function(h) {
            return "Organization";
          },
          titleId: function(h) {
            return "Title";
          },
          effectDate: function(h) {
            return "EffectDate";
          },
          expireDate: function(h) {
            return "ExpiryDate";
          },
          statusId: function(h) {
            return "Actflg";
          }
        }
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
      }
    };
  },
  methods: {
<<<<<<< HEAD
    CheckCheckBox(evt) {
      this.checkButton = false;
      this.checked = false;
      console.log(this.$refs.tblHopdong);
      let length = this.$refs.tblHopdong.tableData.length;
      console.log(evt);
      if (!evt.selected) {
        this.checked = true;
        this.checkButton = true;
        return;
      }
      for (let i = 0; i < length; i++) {
        let ot = this.$refs.tblHopdong.tableData[i];
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
    ChooseContract() {
      this.modalShow = true;
    }
  },
  create: {}
=======
    Goto() {
      window.location.href = "/hoso/themhopdong";
    },
    onChange(evt) {
      this.grouplist.forEach((key, value) => {
        if (_.isEqual(this.groupID, key.id)) this.nameGroup = key.name;
      });
    },
    display(evt) {
      return this.$t(evt);
    },
    selectAll(checked) {
      this.$refs.tblContract.tableData.forEach((key, value) => {
        if (checked) {
          {
            key.selected = true;
            //  this.checked = true;
          }
        } else {
          key.selected = false;
          //this.checked = false;
        }
      });
    },
    ShowEdit() {
      if (!_.isEqual(this.Id, "")) {
        window.location.href = "/EditContract?Id=" + this.Id;
      }
    },
    async ShowPopUpSigner() {
      this.$refs.showPopUpSigner.show();
      bus.$on("ChooseSignerId", data => {
        this.$refs.txtSigner.value =
          data.firstName.trim() + " " + data.lastName.trim();
        //this.updatecontract.workingId = data.id;
        this.getSignerInformation(data);
        this.$refs["showPopUpSigner"].hide();
        this.$refs.showDetail.show();
      });
    },
    async getSignerInformation(emp) {},
    async agreeWorking() {
      this.$refs.showDetail.hide();
    },
    async denny(ot) {
      ot.readOrEdit = null;
      this.state = false;
      this.checked = false;
    },
    async Apply() {
      const mess = this.$t("MessageApply");
      if (confirm(mess)) {
        let listIdChange = [];
        if (!_.isEqual(this.listIdChange, null)) {
          this.$refs.tblContract.tableData.forEach(function(key, value) {
            if (key.selected) listIdChange.push(key.id);
          });
          window.location.href = "/ApprovedChangeContract?Id=" + listIdChange;
        }
      }
    },
    async Denny() {
      const mess = this.$t("MessageApply");
      if (confirm(mess)) {
        let listIdChange = [];
        if (!_.isEqual(this.listIdChange, null)) {
          this.$refs.tblContract.tableData.forEach(function(key, value) {
            if (key.selected) listIdChange.push(key.id);
          });
          window.location.href = "/DennyChangeContract?Id=" + listIdChange;
        }
      }
    },
    ShowWorking(e) {
      if (!_.isNull(this.SignDate)) {
        this.SignDate = notification.customFormatter1(this.SignDate);
      }
      this.$refs.showDetail.show();
    },
    CheckCheckBox(evt) {
      this.checkButton = false;
      this.checked = false;
      let count = 0;
      this.Id = "";
      let length = this.$refs.tblContract.tableData.length;
      for (let i = 0; i < length; i++) {
        let ot = this.$refs.tblContract.tableData[i];
        if (!_.isEqual(ot.id, evt.id)) {
          if (ot.selected) {
            count++;
            if (count > 1) {
              this.checkButton = false;
              if (this.checked) {
                if (!_.isEqual(ot.statusId, this.PenddingId)) {
                  this.checked = false;
                } else {
                  this.checked = true;
                }
              }
            } else {
              if (_.isEqual(ot.statusId, this.PenddingId)) {
                this.checked = true;
                this.checkButton = true;
                this.Id = ot.id;
              }
            }
          }
        } else {
          if (evt.selected) {
            //bo check
            if (count > 1) {
              this.checkButton = false;
              if (this.checked) {
                if (_.isEqual(ot.statusId, this.PenddingId)) {
                  this.checked = true;
                } else {
                  this.checked = false;
                }
              }
            } else {
              let ot = this.$refs.tblContract.tableData[i - 1];
              if (!_.isUndefined(ot)) {
                if (ot.selected) {
                  if (_.isEqual(ot.statusId, this.PenddingId)) {
                    this.checkButton = true;
                    this.checked = true;
                    this.Id = ot.id;
                  }
                }
              }
            }
          } else {
            count++;
            if (count > 1) {
              this.checkButton = false;
              if (this.checked) {
                if (_.isEqual(ot.statusId, this.PenddingId)) {
                  this.checked = true;
                } else {
                  this.checked = false;
                }
              }
            } else {
              if (_.isEqual(evt.statusId, this.PenddingId)) {
                this.checkButton = true;
                this.checked = true;
                this.Id = evt.id;
              }
            }
          }
        }
      }
    },
    Search(evt) {
      this.collapsed = false;
    },
    async Delete() {},
    collapse() {
      this.collapsed = !this.collapsed;
    },
    removeSearch(filter) {
      if (_.isEqual(filter, "group")) {
        this.groupID = "";
        this.Search(null);
      } else if (_.isEqual(filter, "code")) {
        this.Code = "";
        this.Search(null);
      } else if (_.isEqual(filter, "name")) {
        this.Name = "";
        this.Search(null);
      } else if (_.isEqual(filter, "active")) {
        this.Active = "";
        this.Search(null);
      } else if (_.isEqual(filter, "remark")) {
        this.Remark = "";
        this.Search(null);
      }
    }
  }
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
};
</script>
