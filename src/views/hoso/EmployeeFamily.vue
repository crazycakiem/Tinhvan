<<<<<<< HEAD
<template>
    <div id="EmployeeFamily">
        <b-form>
            <b-row>
                <b-col cols="5">
                    <b-button id="btnAdd" type="button" variant="primary" @click="onAdd">{{    ('Add')}}</b-button>
                </b-col>
            </b-row>
        </b-form>
        <b-form>
            <b-row class="mt-3">
                <b-col cols="1">FullName</b-col>
                <b-col cols="2">
                    <input id="txtHoTen" type="text"  />
                </b-col>
                <b-col cols="1"> Relationship</b-col>
                <b-col cols="2">
                    <select v-model="CreateFamily.relationship">
                        <option></option>
                        <option v-for="item in dataRelationshipFamily" :key="item.id" :value="item.id">{{item.name}}</option>
                    </select>
                </b-col>
                <b-col cols="1"> BirthDay</b-col>
                <b-col cols="2">
                    <date-picker id="txtEffectDate" lang="en"
                                 format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
                </b-col>

            </b-row>
            <b-row class="mt-3">
                <b-col cols="2">ID</b-col>
                <b-col cols="2">
                    <input id="txtCMND" type="text"  />
                </b-col>
                <b-col cols="3">Đối tượng giảm trừ <input id="cboGT" type="checkbox"  /></b-col>

            </b-row>
            <b-row class="mt-3">
                <b-col cols="2">Ngày đăng ký giảm trừ</b-col>
                <b-col cols="2">
                    <date-picker lang="en"
                                 format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
                </b-col>

            </b-row>
            <b-row class="mt-3">
                <b-col cols="3">Ngày bắt đầu giảm trừ</b-col>
                <b-col cols="2">
                    <date-picker lang="en"
                                 format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
                </b-col>
                <b-col cols="3">Ngày kết thúc giảm trừ</b-col>
                <b-col cols="2">
                    <date-picker lang="en"
                                 format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col cols="1">Ghi chu</b-col>
                <b-col cols="10">
                    <textarea id="txtNote" cols="80">
                                            </textarea>
                </b-col>
            </b-row>
        </b-form>
        <v-client-table class="table-custom" ref="tblFamily" :columns="columnsFamily" :options="optionsFamily" :data="data">
            <template slot="selected" slot-scope="props">
                <input id="chkSelected" v-model="props.row.selected" type="checkbox" @click="CheckCheckBox(props.row)">
            </template>
            <template slot="relationship" slot-scope="props">
                <select id="cborelationship" :class="CheckClassReadOrEdit(props.row.relationship,props.row.readOrEdit,state)"
                        v-model="props.row.relationship" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)">
                    <option v-for="or in dataRelationshipFamily" :value="or.id" :key="or.id">{{or.name}}</option>
                </select>
                <label v-for="item in dataRelationshipFamily" :key="item.id" v-if="CheckDisPlayTypeLabelAlseEdit(props.row.relationship,item.id,props.row.readOrEdit)">{{item.name}}</label>
            </template>
            <template slot="fullName" slot-scope="props">
                <input id="txtfullName" :class="CheckClassReadOrEdit(props.row.fullName,props.row.readOrEdit,state)"
                       v-model="props.row.fullName" v-bind:ref="props.row.id+'*name'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.fullName}} </label>
            </template>
            <template slot="idCardNo" slot-scope="props">
                <input id="txtidCardNo" :class="CheckClassReadOrEdit(props.row.idCardNo,props.row.readOrEdit,state)"
                       v-model="props.row.idCardNo" v-bind:ref="props.row.id+'*idCardNo'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.idCardNo}} </label>
            </template>
            <template slot="isReduction" slot-scope="props">
                <input type="checkbox" v-model="props.row.isReduction" :disabled="CheckIfReadOrEditForLable(props.row.readOrEdit)" />
            </template>
            <template slot="birthday" slot-scope="props">
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{(props.row.birthday)}} </label>
                <date-picker lang="en" v-model="props.row.birthday" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)"
                             format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
            </template>
            <template slot="reductionRegisDate" slot-scope="props">
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{(props.row.reductionRegisDate)}} </label>
                <date-picker lang="en" v-model="props.row.reductionRegisDate" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)"
                             format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
            </template>
            <template slot="reductionStartDate" slot-scope="props">
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{(props.row.reductionStartDate)}} </label>
                <date-picker lang="en" v-model="props.row.reductionStartDate" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)"
                             format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
            </template>
            <template slot="reductionEndDate" slot-scope="props">
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{(props.row.reductionEndDate)}} </label>
                <date-picker lang="en" v-model="props.row.reductionEndDate" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)"
                             format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
            </template>
            <div slot="act" slot-scope="props">
                <button id="btnShowEdit" class="btn btn-primary btn-custom" type="button" @click="showEdit(props.row)" v-if="props.row.readOrEdit==null" v-bind:ref="props.row.id+'*showEdit'">
                    <span class="fa fa-edit" />
                </button>
                <button id="btnAgree" class="btn btn-success btn-custom" type="button" @click="agree(props.row)" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" v-bind:ref="props.row.id+'*agree'">
                    <span class="fa fa-check" />
                </button>
                <button id="btnDenny" class="btn btn-danger btn-custom" @click="denny(props.row)" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" v-bind:ref="props.row.id+'*denny'">
                    <span class="fa fa-close" />
                </button>
            </div>
        </v-client-table>
    </div>
</template>
<script>
import Vue from "vue";
import _ from "lodash";
import DatePicker from "vue2-datepicker";
export default {
  name: "EmployeeFamily",
  components: {
    DatePicker
  },
  data: () => {
    return {
      data: [],
      columnsFamily: [
        "selected",
        "fullName",
        "idCardNo",
        "relationship",
        "birthday",
        "isReduction",
        "reductionRegisDate",
        "reductionStartDate",
        "reductionEndDate",
        "remark",
        "act"
      ],
      optionsFamily: {
        filterable: true,
        sortable: ["fullName", "idCardNo", "relationship", "isReduction"],
        requestFunction: getFamilies,
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
          fullName: function(h) {
            return "FullName";
          },
          idCardNo: function(h) {
            return "ID";
          },
          isReduction: function(h) {
            return "Reduction";
          },
          birthday: function(h) {
            return "BirthDay";
          },
          act: function(h) {
            return "Act";
          },
          remark: function(h) {
            return "Remark";
          },
          reductionStartDate: function(h) {
            return "StartDate";
          },
          reductionEndDate: function(h) {
            return "EndDate";
          },
          reductionRegisDate: function(h) {
            return "RegistrationDate";
          },
          relationship: function(h) {
            return "Relationship";
          }
        }
      },
      dataRelationshipFamily: [],
      state: false,
      checked: false
    };
  },
  methods: {
    CheckIfReadOrEditForLable: function(roe) {
      return !_.isEqual(roe, "add") && !_.isEqual(roe, "edit");
    },
    CheckClassReadOrEdit: function(ele, roe, state) {
      if (
        _.isEqual(ele, "") &&
        (_.isEqual(roe, "add") || _.isEqual(roe, "edit")) &&
        state
      ) {
        return "is-invalid form-control";
      }
      return "form-control";
    },
    CheckIfReadOrEditForInput: function(roe) {
      return _.isEqual(roe, "add") || _.isEqual(roe, "edit");
    },
    async getFamilyEmployeeInfo(id) {
      const getRelationShip = new GetOtherLists();
      getRelationShip.typeCode = Constant.RELATIONSHIP_FAMILY.TYPE_CODE;
      getRelationShip.actflg = "A";
      await client.get(getRelationShip).then(res => {
        this.dataRelationshipFamily = res.items;
      });
      this.SearchFamilyByEmployeeId();
    },
    SearchFamilyByEmployeeId() {
      const search = this.Id;
      this.$refs.tblFamily.setFilter(search);
    },
    onAdd() {
      console.log(this.CreateFamily);
      this.CreateFamily.employeeId = this.Id;
    },
    showEdit(ot) {
      let length = this.$refs.tblFamily.tableData.length;
      for (let i = 0; i < length; i++) {
        let op = this.$refs.tblFamily.tableData[i];
        if (_.isEqual(op.readOrEdit, "add") || _.isEqual(op.readOrEdit, "edit"))
          return;
      }
      ot.readOrEdit = "edit";
      this.$refs.tblFamily.tableData.forEach(function(key, value) {
        if (!_.isEqual(ot.id, key.id)) {
          key.selected = false;
          key.readOrEdit = null;
        }
      });
    },
    async denny(ot) {
      ot.readOrEdit = null;
      this.state = false;
      this.checked = false;
    },
    AddRow() {
      let length = this.$refs.tblFamily.tableData.length;
      for (let i = 0; i < length; i++) {
        let op = this.$refs.tblFamily.tableData[i];
        if (_.isEqual(op.readOrEdit, "add") || _.isEqual(op.readOrEdit, "edit"))
          return;
      }
      if (_.isEqual(length, 0)) {
        let t = new Family();
        t.readOrEdit = "add";
        t.fullName = "";
        t.reductionRegisDate = "";
        t.reductionStartDate = "";
        t.reductionEndDate = "";
        this.$refs.tblFamily.data.push(t);
        this.$refs.tblFamily.count = 1;
      } else {
        this.$refs.tblFamily.tableData.unshift({
          fullName: "",
          reductionRegisDate: "",
          reductionStartDate: "",
          id: "",
          reductionEndDate: "",
          idCardNo: "",
          readOrEdit: "add"
        });
      }
    },
    async agree(ot) {
      if (_.isEqual(ot.readOrEdit, "add")) {
        this.state = true;
        const createOt = new CreateFamily();
        _.assign(createOt, ot);
      } else if (_.isEqual(ot.readOrEdit, "edit")) {
        this.state = true;
        let updateot = new UpdateFamily();
        _.assign(updateot, ot);
      }
    }
  }
};
</script>
=======
<template>
    <div id="EmployeeFamily">
        <b-form>
            <b-row>
                <b-col cols="5">
                    <b-button id="btnAdd" type="button" variant="primary" @click="AddRow">Add</b-button>
                </b-col>
            </b-row>
        </b-form>
        <v-client-table class="table-custom" ref="tblFamily" :columns="columnsFamily" :options="optionsFamily" :data="data">
            <template slot="selected" slot-scope="props">
                <input id="chkSelected" v-model="props.row.selected" type="checkbox" @click="CheckCheckBox(props.row)">
            </template>
            <template slot="relationship" slot-scope="props">
                <select id="cborelationship" :class="CheckClassReadOrEdit(props.row.relationship,props.row.readOrEdit,state)"
                        v-model="props.row.relationship" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)">
                    <option v-for="or in dataRelationshipFamily" :value="or.id" :key="or.id">{{or.name}}</option>
                </select>
                <label v-for="item in dataRelationshipFamily" :key="item.id" v-if="CheckDisPlayTypeLabelAlseEdit(props.row.relationship,item.id,props.row.readOrEdit)">{{item.name}}</label>
            </template>
            <template slot="fullName" slot-scope="props">
                <input id="txtfullName" :class="CheckClassReadOrEdit(props.row.fullName,props.row.readOrEdit,state)"
                       v-model="props.row.fullName" v-bind:ref="props.row.id+'*name'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.fullName}} </label>
            </template>
            <template slot="idCardNo" slot-scope="props">
                <input id="txtidCardNo" :class="CheckClassReadOrEdit(props.row.idCardNo,props.row.readOrEdit,state)"
                       v-model="props.row.idCardNo" v-bind:ref="props.row.id+'*idCardNo'" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" />
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{props.row.idCardNo}} </label>
            </template>
            <template slot="isReduction" slot-scope="props">
                <input type="checkbox" v-model="props.row.isReduction" :disabled="CheckIfReadOrEditForLable(props.row.readOrEdit)" />
            </template>
            <template slot="birthday" slot-scope="props">
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{(props.row.birthday)}} </label>
                <date-picker lang="en" v-model="props.row.birthday" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)"
                             format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
            </template>
            <template slot="reductionRegisDate" slot-scope="props">
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{(props.row.reductionRegisDate)}} </label>
                <date-picker lang="en" v-model="props.row.reductionRegisDate" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)"
                             format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
            </template>
            <template slot="reductionStartDate" slot-scope="props">
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{(props.row.reductionStartDate)}} </label>
                <date-picker lang="en" v-model="props.row.reductionStartDate" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)"
                             format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
            </template>
            <template slot="reductionEndDate" slot-scope="props">
                <label v-if="CheckIfReadOrEditForLable(props.row.readOrEdit)">{{(props.row.reductionEndDate)}} </label>
                <date-picker lang="en" v-model="props.row.reductionEndDate" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)"
                             format="DD-MM-YYYY" :clearable="false" placeholder="Select Day"></date-picker>
            </template>
            <div slot="act" slot-scope="props">
                <button id="btnShowEdit" class="btn btn-primary btn-custom" type="button" @click="showEdit(props.row)" v-if="props.row.readOrEdit==null" v-bind:ref="props.row.id+'*showEdit'">
                    <span class="fa fa-edit" />
                </button>
                <button id="btnAgree" class="btn btn-success btn-custom" type="button" @click="agree(props.row)" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" v-bind:ref="props.row.id+'*agree'">
                    <span class="fa fa-check" />
                </button>
                <button id="btnDenny" class="btn btn-danger btn-custom" @click="denny(props.row)" v-if="CheckIfReadOrEditForInput(props.row.readOrEdit)" v-bind:ref="props.row.id+'*denny'">
                    <span class="fa fa-close" />
                </button>
            </div>
        </v-client-table>
    </div>
</template>
<script>
import Vue from "vue";
import _ from "lodash";
import DatePicker from "vue2-datepicker";
export default {
  name: "EmployeeFamily",
  components: {
    DatePicker
  },
  data: () => {
    return {
      data: [
        {
          selected: false,
          fullName: "Phạn Văn Mách",
          idCardNo: "N0012",
          relationship: "Bố",
          birthday: "1/2/1960",
          isReduction: false,
          reductionStartDate: "2/3/2008",
          reductionEndDate: "4/5/2019",
          remark: "Đánh dấu"
        },
        {
          selected: false,
          fullName: "Lý Đức",
          idCardNo: "N0012",
          relationship: "Bố",
          birthday: "1/2/1960",
          isReduction: false,
          reductionStartDate: "2/3/2008",
          reductionEndDate: "4/5/2019",
          remark: "Đánh dấu"
        },
        {
          selected: false,
          fullName: "Công lý",
          idCardNo: "N0012",
          relationship: "Bố",
          birthday: "1/2/1960",
          isReduction: false,
          reductionStartDate: "2/3/2008",
          reductionEndDate: "4/5/2019",
          remark: "Đánh dấu"
        },
        {
          selected: false,
          fullName: "Ngọc Hoàng",
          idCardNo: "N0012",
          relationship: "Bố",
          birthday: "1/2/1960",
          isReduction: false,
          reductionStartDate: "2/3/2008",
          reductionEndDate: "4/5/2019",
          remark: "Đánh dấu"
        },
        {
          selected: false,
          fullName: "Phạn Văn Mách",
          idCardNo: "N0012",
          relationship: "Bố",
          birthday: "1/2/1960",
          isReduction: false,
          reductionStartDate: "2/3/2008",
          reductionEndDate: "4/5/2019",
          remark: "Đánh dấu"
        }
      ],
      columnsFamily: [
        "selected",
        "fullName",
        "idCardNo",
        "relationship",
        "birthday",
        "isReduction",
        "reductionRegisDate",
        "reductionStartDate",
        "reductionEndDate",
        "remark",
        "act"
      ],
      optionsFamily: {
        filterable: true,
        sortable: ["fullName", "idCardNo", "relationship", "isReduction"],
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
          fullName: function(h) {
            return "FullName";
          },
          idCardNo: function(h) {
            return "ID";
          },
          isReduction: function(h) {
            return "Reduction";
          },
          birthday: function(h) {
            return "BirthDay";
          },
          act: function(h) {
            return "Act";
          },
          remark: function(h) {
            return "Remark";
          },
          reductionStartDate: function(h) {
            return "StartDate";
          },
          reductionEndDate: function(h) {
            return "EndDate";
          },
          reductionRegisDate: function(h) {
            return "RegistrationDate";
          },
          relationship: function(h) {
            return "Relationship";
          }
        }
      },
      dataRelationshipFamily: [],
      state: false,
      checked: false
    };
  },
  methods: {
    CheckIfReadOrEditForLable: function(roe) {
      return !_.isEqual(roe, "add") && !_.isEqual(roe, "edit");
    },
    CheckClassReadOrEdit: function(ele, roe, state) {
      if (
        _.isEqual(ele, "") &&
        (_.isEqual(roe, "add") || _.isEqual(roe, "edit")) &&
        state
      ) {
        return "is-invalid form-control";
      }
      return "form-control";
    },
    CheckIfReadOrEditForInput: function(roe) {
      return _.isEqual(roe, "add") || _.isEqual(roe, "edit");
    },
    async getFamilyEmployeeInfo(id) {
      this.SearchFamilyByEmployeeId();
    },
    SearchFamilyByEmployeeId() {
      const search = this.Id;
    },
    onAdd() {},
    showEdit(ot) {
      let length = this.$refs.tblFamily.tableData.length;
      for (let i = 0; i < length; i++) {
        let op = this.$refs.tblFamily.tableData[i];
        if (_.isEqual(op.readOrEdit, "add") || _.isEqual(op.readOrEdit, "edit"))
          return;
      }
      ot.readOrEdit = "edit";
      this.$refs.tblFamily.tableData.forEach(function(key, value) {
        if (!_.isEqual(ot.id, key.id)) {
          key.selected = false;
          key.readOrEdit = null;
        }
      });
    },
    async denny(ot) {
      ot.readOrEdit = null;
      this.state = false;
      this.checked = false;
    },
    AddRow() {
      let length = this.$refs.tblFamily.tableData.length;
      for (let i = 0; i < length; i++) {
        let op = this.$refs.tblFamily.tableData[i];
        if (_.isEqual(op.readOrEdit, "add") || _.isEqual(op.readOrEdit, "edit"))
          return;
      }
      if (_.isEqual(length, 0)) {
        this.$refs.tblFamily.data.push({
          fullName: "",
          reductionRegisDate: "",
          reductionStartDate: "",
          id: "",
          reductionEndDate: "",
          idCardNo: "",
          readOrEdit: "add"
        });
        this.$refs.tblFamily.count = 1;
      } else {
        this.$refs.tblFamily.tableData.unshift({
          fullName: "",
          reductionRegisDate: "",
          reductionStartDate: "",
          id: "",
          reductionEndDate: "",
          idCardNo: "",
          readOrEdit: "add"
        });
      }
    },
    async agree(ot) {
      if (_.isEqual(ot.readOrEdit, "add")) {
        this.state = true;
      } else if (_.isEqual(ot.readOrEdit, "edit")) {
        this.state = true;
      }
    }
  }
};
</script>
>>>>>>> 26e043c3190b0d1804bcb4b7c1dabbf516ec7816
