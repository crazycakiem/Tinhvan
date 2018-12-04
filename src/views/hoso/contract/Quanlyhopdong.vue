<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <b-card class="card-de1">
          <div class="panel-title-de1">
            <div>
              <h4>Quản lý hợp đồng</h4>
              <b-button class="btn-pill mr-1" variant="default" size="sm" @click="AddContract">
                Thêm mới
                <i class="icon-plus"></i>
              </b-button>
              <b-button class="btn-pill" variant="default" size="sm">
                <i class="icon-magnifier icons"></i> Tìm kiếm
              </b-button>
            </div>
            <div class="ml-auto">
              <b-button class="btn-pill ml-1" variant="outline-default" size="sm">
                Print
                <i class="cui-print icons"></i>
              </b-button>
              <b-button class="btn-pill ml-1" variant="outline-default" size="sm">
                Export
                <i class="icon-arrow-down-circle icons"></i>
              </b-button>
            </div>
          </div>
          <div class="tbl-de" v-show="showTable">
            <v-client-table
              class="table-custom tbl-nosearch"
              ref="tblContract"
              :columns="columns"
              :options="options"
              :data="dataContract"
            >
              <template slot="selected" slot-scope="props">
                <input
                  id="chkSelected"
                  v-model="props.row.selected"
                  type="checkbox"
                  @click="CheckCheckBox(props.row)"
                >
              </template>
              <template slot="employeecode" slot-scope="props">
                <label v-if="props.row.employee!=null">{{props.row.employee.employeeCode}}</label>
              </template>
              <template slot="fullname" slot-scope="props">
                <label
                  v-if="props.row.employee!=null"
                >{{props.row.employee.firstName}} {{props.row.employee.lastName}}</label>
              </template>
              <template slot="org" slot-scope="props">
                <label v-if="props.row.employee!=null">{{props.row.employee.organization.name}}</label>
              </template>
              <template slot="effectDate" slot-scope="props">
                <label>{{(props.row.effectDate)}}</label>
              </template>
              <template slot="expireDate" slot-scope="props">
                <label>{{(props.row.expireDate)}}</label>
              </template>
              <template slot="statusId" slot-scope="props">
                <label>{{props.row.statusId}}</label>
              </template>
              <template slot="contractNo" slot-scope="props">
                <label>{{props.row.contractNo}}</label>
              </template>
            </v-client-table>
          </div>
          <div v-show="showAdd">
            <NewContract></NewContract>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!--/.row-->
  </div>
</template>
<script>
import { shuffleArray } from "@/shared/utils";
import NewContract from "./NewContract";
import { bus } from "../../../main";
export default {
  name: "quanlyhopdong",
  components: { NewContract },
  data: () => {
    return {
      showAdd: false,
      showTable: true,
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
      }
    };
  },
  methods: {
    AddContract() {
      this.showAdd = !this.showAdd;
      if (this.showAdd) {
        this.showTable = false;
        this.checkButton = false;
        this.showEdit = false;
        this.checked = false;
      } else {
        this.showTable = true;
        if (!_.isEqual(this.Id, "")) {
          this.checked = true;
          this.checkButton = true;
        }
      }
      bus.$on("saveWageRecordSuccess", data => {
        this.UpdateContract(data);
        this.showTable = true;
        this.showAdd = false;
        this.$refs.tblContract.refresh();
      });
      bus.$on("saveWageRecordSubmit", data => {
        this.showTable = true;
        this.showAdd = false;
        this.$refs.tblContract.refresh();
      });
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
};
</script>
