<template>
    <div>
        <b-row>
            <b-col cols="5">
              Hienr thị cây sơ đồ tổ chức ở đây
            </b-col>
            <b-col cols="7">
                <b-row>
                    <input id="txtsearchText" placeholder="Search for name or code ..." width="100%" v-model="searchText" @keyup="search($event)" />
                </b-row>
                <b-row>
                    <v-client-table ref="tblEmployee" class="table-custom" :options="options" :columns="columns" :data="dataTable">
                        <template slot="selected" slot-scope="props">
                            <input id="chkSelected" v-model="props.row.selected" type="checkbox" @click="CheckCheckBox(props.row)">
                        </template>
                         <template slot="org" slot-scope="props">
                            <label> {{props.row.org}}</label>
                        </template>
                    </v-client-table>
                </b-row>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-button id="btnChoose" variant="primary" @click="Choose($event)"><i class="fa fa-check"></i></b-button>
                <b-button id="btnDenny" variant="danger" @click="Denny($event)"><i class="fa fa-close"></i> </b-button>
            </b-col>
        </b-row>
    </div>

</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import _ from "lodash";

export default {
  name: "PopUpManager",
  components: {},
  data() {
    return {
      searchText: "",
      dataTable: [
        {
          selected: false,
          title: "nhân viên",
          fullName: "phí tiến lâm",
          org: "Phòng kỹ thuật",
          actflg: "Đang làm việc"
        },
        {
          selected: false,
          title: "nhân viên",
          fullName: "phí tiến lâm",
          org: "Phòng kỹ thuật",
          actflg: "Đang làm việc"
        },
        {
          selected: false,
          fullName: "phí tiến lâm",
          title: "nhân viên",
          org: "Phòng kỹ thuật",
          actflg: "Đang làm việc"
        },
        {
          selected: false,
          fullName: "phí tiến lâm",
          org: "Phòng kỹ thuật",
          title: "nhân viên",
          actflg: "Đang làm việc"
        }
      ],
      columns: ["selected", "fullName", "title", "org", "actflg"],
      options: {
        filterable: true,
        filterByColumn: false,
        sortable: ["fullName", "employeeCode", "title", "org", "actflg"],
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

          employeeCode: function(h) {
            return "EmployeeCode";
          },
          title: function(h) {
            return "Title";
          },
          org: function(h) {
            return "Organization";
          },
          actflg: function(h) {
            return "Actflg";
          }
        },
        columnsClasses: {
          selected: "col-check-box",
          employeeCode: "col-code",
          fullName: "col-name",
          title: "col-group",
          org: "col-remark",
          actflg: "col-status",
          act: "col-action"
        }
      }
    };
  },
  methods: {}
};
</script>