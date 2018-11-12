<template>
  <div class="animated fadeIn">

    <b-row>
      <b-col lg="12">
        <b-card class="card-de1">
           <div class="panel-title-de1">
             <div>
              <h4>Quản lý hợp đồng</h4>
              <b-button class="btn-pill mr-1" variant="default" size="sm">
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
      }
    };
  },
  methods: {
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
};
</script>
