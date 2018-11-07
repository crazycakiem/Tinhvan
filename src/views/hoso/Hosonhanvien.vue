<template>
  <div class="animated fadeIn">

    <b-row>
      <b-col lg="12">
        <b-card class="card-de1">
          <div class="panel-title-de1">
            <div>
              <h4>Hồ sơ nhân viên</h4>
              <b-button class="btn-pill mr-1" variant="default" size="sm">
                Thêm mới <i class="icon-plus"></i>
              </b-button>
              <b-button class="btn-pill" variant="default" size="sm">
                <i class="icon-magnifier icons"></i> Tìm kiếm
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
              <b-button class="btn-pill btn-outline ml-1" variant="outline-default" size="sm">
                Print <i class="cui-print icons"></i>
              </b-button>
              <b-button class="btn-pill ml-1" variant="outline-default" size="sm">
                Export <i class="icon-arrow-down-circle icons"></i>
              </b-button>
            </div>
          </div>
          <div class="tbl-de">
            <!--<c-table class="card-tbl-de1" :table-data="items" :fields="fields"></c-table>-->
            <!-- <div class="filter-box">
              <b-button class="btn-pill ml-1" @click="showBasic">Show Search Basic</b-button>
              <div v-show="showbasic">
                <select multiple v-model="searchbasic">
                  <option v-for="item in dataSearchBasic" :key="item.value" :value="item.value">{{item.text}}</option>
                </select>
                <div v-for="(item, index) in dataSearchBasic" :key="item.value" style="display:inline-block">
                  <label>{{item.text}}</label>
                  <input type="text" v-model="model[index]" @change="showmodel" />
                </div>
              </div>
              <button @click="showAdvance" class="primary">Advance</button>
              <label> Records :</label>
              <select>
                <option>25</option>
                <option>50</option>
                <option>100</option>
                <option>150</option>
              </select>
              <div v-show="showadvance">
                <div class="form-row">
                  <div class="col-md-2 mb-3">
                    <label class="label-custom" for="cboTieuChi">Tiêu chí lọc</label>
                    <select id="cboTieuChi" class="form-control" v-on:change="onChangeTieuChi($event)" v-model="TieuChiLoc">
                      <option></option>
                      <option v-for="item in dataTieuChi" :value="item.value" :key="item.value">{{item.value}}</option>
                    </select>
                    <div class="form-group text-center mt-3">
                      <button id="btnSearch" class="btn btn-custom btn-success" @click="Search($event)">
                        <i class="fa fa-search" aria-hidden="true" />
                        <span>Search</span>
                        <b-tooltip target="btnSearch" title="Filter" />
                      </button>
                    </div>
                  </div>
                  <div class="col-md-10 mb-3">
                    <table>
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
                            <select class="form-control" v-on:change="onChange(item.value)" :ref="item.value" v-model="model[index]">
                              <option :value="item.value" v-for="item in dataSelect" :key="item.value">{{item.text}}</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td v-for="(item) in dataColumn" :key="item.value">
                            <input type="text" :ref="item.value+'*content'" @change="focusOut(item.value)" v-if="item.type=='string'" />
                            <date-picker lang="en" @change="datepickerClosedFunction(item.value)" v-model="dateModel[item]"
                                         :ref="item.value+'*datecontent'" format="DD-MM-YYYY" v-if="item.type=='datetime'" :clearable="false"></date-picker>

                            <input type="checkbox" :ref="item.value+'*checkboxcontent'" @change="change(item.value)" v-if="item.type=='checkbox'" />
                          </td>
                        </tr>
                        <tr>
                          <td v-for="(item) in dataColumn" :key="item.value">
                            <b-btn @click="DeleteTieuChi(item.value)">Xóa</b-btn>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div> -->
            <v-client-table :columns="columns" :data="itemsArray" :options="options" ref="tblTitleGroup">
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
        selected:false,
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
  @Component({
    components: { DatePicker},
    data: () => {
      return {
        model: [],
        dateModel: [],
        content:[],
        checked:false,
        showbasic: false,
        sortKey: "",
        searchData:[],
        TieuChiLoc:'',
        dataColumn:[],
        dataTieuChi: [
          { value: "employeeCode", type: "string" },
          { value: "joinDateState", type: "datetime" },
          { value: "fullName", type: "string" },
          { value: "workstatus", type: "checkbox" }
        ],
        TieuChiLoc: '',
        dataSelect:  [
          { value: '&', text: 'Và' },
          { value: '||', text: 'Hoặc' },
          { value: '=', text: 'Bằng' },
          { value: '>', text: 'Lớn hơn' },
          { value: '<', text: 'Nhỏ hơn' },
        ],
        showadvance:false,
        items: someData,
        itemsArray: someData(),
        searchbasic: [],
        dataSearchBasic: [
          { value: "employeeCode", text: "employeeCode" },
          { value: "fullName", text: "fullName" },
          { value: "sex", text: "sex" }
        ],
        columns: ['selected','id', 'fullname', 'sub'],
        options: {
          headings: {
            id: 'Id',
            fullname: 'Ho ten',
            sub: 'chuc vu'
          },
          sortable: ['fullname', 'sub'],
          filterable: ['id', 'fullname']
        },
      };
    },
    methods: {
      CheckCheckBox(evt) {
        debugger;
        let length = ((this.$refs.tblTitleGroup).tableData).length;
        console.log(evt);
        if (!evt.selected) {
          this.checked = true
          return;
        }
        for (let i = 0; i < length; i++) {
          let ot = ((this.$refs.tblTitleGroup).tableData[i])
          if (!_.isEqual(ot.id, evt.id)) {
            if (ot.selected) {
              this.checked = true;
              return;
            }
          } else {
            this.checked = false;
          }
        }
      }
    },
  })

  export default class HosonhanvienComponent extends Vue {
    showmodel() {
      console.log(this.model);
    }
    showAdvance() {
      this.showadvance = !this.showadvance;
      console.log(this.showadvance);
    }
    showBasic() {
      this.showbasic = !this.showbasic;
    }
    onChangeTieuChi() {
      debugger;
      let tc = this.TieuChiLoc;
      if (!_.isEqual(tc, '') && !_.isUndefined(tc)) {
        this.dataTieuChi.forEach((key, index) => {
          if (_.isEqual(key.value, tc)) {
            this.dataColumn.push(key);
            this.searchData.push({ field: tc, condi: '&', content: '' });
            this.dataTieuChi.splice(index, 1);
          }
        });
      }
    }



  }
</script>
