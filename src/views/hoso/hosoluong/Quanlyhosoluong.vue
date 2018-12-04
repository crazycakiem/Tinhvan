<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <b-card class="card-de1">
           <div class="panel-title-de1">
             <div>
              <h4>Quản lý hồ sơ lương</h4>
              <b-button class="btn-pill mr-1" variant="default" size="sm" @click="Goto">
                  Thêm mới <i class="icon-plus"></i>
              </b-button>
              <b-button class="btn-pill" variant="default" size="sm">
                  <i class="icon-magnifier icons"></i> Tìm kiếm
              </b-button>
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
           <div class="tbl-de" v-show="showTable">
             <v-client-table  class="table-custom tbl-nosearch" ref="tblWageRecords" :columns="columns" :options="options" :data="dataTable">
            <template slot="selected" slot-scope="props">
                <input id="chkSelected" v-model="props.row.selected" type="checkbox" @click="CheckCheckBox(props.row)">
            </template>
            <template slot="decisionNo" slot-scope="props">
                 
                        {{props.row.decisionNo}}
                  
            </template>
            <template slot="decisionTypeId" slot-scope="props">
             
                    {{props.row.decisionTypeId}} 
                
            </template>
            <template slot="orgId" slot-scope="props">
              <label>{{props.row.orgName}}</label>
            </template>
             <template slot="name" slot-scope="props">
              <label>{{props.row.employeeName}}</label>
            </template>
            <template slot="titleId" slot-scope="props">
               <label>{{props.row.titleName}}</label>
            </template>
            <template slot="effectDate" slot-scope="props">
               <label>{{(props.row.effectDate)}} </label>
            </template>
              <template slot="expireDate" slot-scope="props">
               <label>{{(props.row.expireDate)}} </label>
            </template>
           
        </v-client-table> 
           </div>
           <div  v-show="showAdd" id="newWageRecord">
    <NewWageRecord></NewWageRecord>
  </div>
        </b-card>

      </b-col>
  
    </b-row><!--/.row-->

  </div>

</template>

<script>
import { shuffleArray } from "@/shared/utils";
import NewWageRecord from "./NewWageRecord.vue";
export default {
  name: "quanlyhosoluong",
  components: { NewWageRecord },
  data: () => {
    return {
      showAdd: false,
      showTable: true,
      dataTable: [
        {
          selected: false,
          decisionNo: "N0124",
          decisionTypeId: "Loai quyết định",
          name: "Phi tien lam",
          orgId: "to chuc",
          titleId: "nhan vien",
          effectDate: "10/10/2000",
          statusId: "Ap dung"
        },
        {
          selected: false,
          decisionNo: "N0124",
          decisionTypeId: "Loai quyết định",
          name: "Phi tien lam",
          orgId: "to chuc",
          titleId: "nhan vien",
          effectDate: "10/10/2000",
          statusId: "Ap dung"
        },
        {
          selected: false,
          decisionNo: "N0124",
          decisionTypeId: "Loai quyết định",
          name: "Phi tien lam",
          orgId: "to chuc",
          titleId: "nhan vien",
          effectDate: "10/10/2000",
          statusId: "Ap dung"
        },
        {
          selected: false,
          decisionNo: "N0124",
          decisionTypeId: "Loai quyết định",
          name: "Phi tien lam",
          orgId: "to chuc",
          titleId: "nhan vien",
          effectDate: "10/10/2000",
          statusId: "Ap dung"
        }
      ],
      columns: [
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
      options: {
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
            return "NumberDecision";
          },
          decisionTypeId: function(h) {
            return "TypeDecision";
          },
          name: function(h) {
            return "Name";
          },
          orgId: function(h) {
            return "Organization";
          },
          statusId: function(h) {
            return "Actflg";
          },
          titleId: function(h) {
            return "Title";
          },
          effectDate: function(h) {
            return "EffectDate";
          },
          expireDate: function(h) {
            return "ExpiryDate";
          }
        }
      }
    };
  },
  methods: {
    Goto() {
      // window.location = "/hoso/themhosoluong";
      this.showAdd = true;
      this.showTable = false;
    }
  }
};
</script>
