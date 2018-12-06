<template>
  <div>
    <b-form>
     <b-card>
       <div slot="header">
         <strong>Thêm mới nhân viên</strong>
       </div>
       <b-row>
         <b-col sm="6">
           <b-form-group>
             <label for="fileInput">Ảnh đại diện</label>
             <b-form-file id="fileInput" :plain="true"></b-form-file>
           </b-form-group>
         </b-col>
         <b-col sm="6">
           <b-form-group>
             <label for="txtOrg">Tổ chức</label>
             <div class="input-popup">
              <b-form-input readonly type="text" id="txtOrg" ref="txtOrg" placeholder=""></b-form-input>
              <b-btn id="btnShowOrg" @click="showOrg">
                <i class="fa fa-search" aria-hidden="true"></i>
              </b-btn>
             </div>
           </b-form-group>
         </b-col>
       </b-row>
       <b-row>
         <b-col sm="6">
           <b-form-group>
             <label for="ip3">Mã nhân viên</label>
             <b-form-input type="text" id="ip3" placeholder="ex: 1234"></b-form-input>
           </b-form-group>
         </b-col>
         <b-col sm="6">
           <b-form-group>
             <label for="ip4">Nickname</label>
             <b-form-input type="text" id="ip4" placeholder="ex: 1234"></b-form-input>
           </b-form-group>
         </b-col>
       </b-row>
       <b-row>
         <b-col sm="6">
           <b-form-group>
             <label for="ip5">Họ nhân viên</label>
             <b-form-input type="text" id="ip5" placeholder="ex: Nguyễn"></b-form-input>
           </b-form-group>
         </b-col>
         <b-col sm="6">
           <b-form-group>
             <label for="ip6">Tên nhân viên</label>
             <b-form-input type="text" id="ip6" placeholder="ex: Linh"></b-form-input>
           </b-form-group>
         </b-col>
       </b-row>
       <b-row>
         <b-col sm="6">
           <b-form-group>
             <label for="ip7">Người quản lý</label>
             <div class="input-popup">
              <Autocomplete :items="items" :isAsync="false" ref="autocomplete" :isDisplayFull="false"></Autocomplete>
              <b-btn id="btnShowPopUpManager" @click="ShowPopUpManager">
                <i class="fa fa-search" aria-hidden="true"></i>
              </b-btn>
             </div>
           </b-form-group>
         </b-col>
         <b-col sm="6">
           <b-form-group>
             <label for="ip8">Mã quẹt thẻ</label>
             <b-form-input type="text" id="ip8" placeholder="ex: 2123"></b-form-input>
           </b-form-group>
         </b-col>
       </b-row>
       <b-row>
         <b-col sm="6">
           <b-form-group>
             <label for="cboTitle">Chức danh</label>
             <div class="form-box-control">
               <b-form-select
                 size="lg"
                 :plain="true"
                 id="cboTitle"
                 :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                 value="Please select">
               </b-form-select>
               <!-- <select id="cboTitle">
                 <option
                   v-for="item in dataTitle"
                   :value="item.titleId"
                   :key="item.titleId"
                 >{{item.title.name}}</option>
               </select> -->
             </div>
           </b-form-group>
         </b-col>
         <b-col sm="6">
           <b-form-group>
             <label for="ip6">Ngày sinh</label>
             <div class="form-box-control">
               <date-picker lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
             </div>
           </b-form-group>
         </b-col>
       </b-row>
       <b-row>
         <b-col sm="6">
           <b-form-group>
             <label for="">Giới tính</label>
             <div class="form-box-control">
               <b-form-select
                 size="lg"
                 :plain="true"
                 id=""
                 :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                 value="Please select">
               </b-form-select>
             </div>
           </b-form-group>
         </b-col>
         <b-col sm="6">
           <b-form-group>
             <label for="">Đối tượng nhân viên</label>
             <div class="form-box-control">
               <b-form-select
                 size="lg"
                 :plain="true"
                 id=""
                 :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                 value="Please select">
               </b-form-select>
             </div>
           </b-form-group>
         </b-col>
       </b-row>
       <b-row>
         <b-col sm="6">
           <b-form-group>
             <label for="">Số chứng minh thư</label>
             <b-form-input type="text" id="ip8" placeholder="ex: 2123"></b-form-input>
           </b-form-group>
         </b-col>
         <b-col sm="6">
           <b-form-group>
             <label for="">Ngày cấp</label>
             <div class="form-box-control">
               <date-picker lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
             </div>
           </b-form-group>
         </b-col>
       </b-row>
       <b-row>
         <b-col sm="6">
           <b-form-group>
             <label for="">Nơi cấp</label>
             <div class="form-box-control">
               <b-form-select
                 size="lg"
                 :plain="true"
                 id=""
                 :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                 value="Please select">
               </b-form-select>
             </div>
           </b-form-group>
         </b-col>
         <b-col sm="6">
           <b-form-group>
             <label for="">Quốc tịch</label>
             <div class="form-box-control">
               <b-form-select
                 size="lg"
                 :plain="true"
                 id=""
                 :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                 value="Please select">
               </b-form-select>
             </div>
           </b-form-group>
         </b-col>
       </b-row>
       <b-row>
         <b-col sm="6">
           <b-form-group>
             <label for="">Dân tộc</label>
             <div class="form-box-control">
               <b-form-select
                 size="lg"
                 :plain="true"
                 id=""
                 :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                 value="Please select">
               </b-form-select>
             </div>
           </b-form-group>
         </b-col>
         <b-col sm="6">
           <b-form-group>
             <label for="">Tôn giáo</label>
             <div class="form-box-control">
               <b-form-select
                 size="lg"
                 :plain="true"
                 id=""
                 :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                 value="Please select">
               </b-form-select>
             </div>
           </b-form-group>
         </b-col>
       </b-row>
       <div slot="footer">
         <b-button class="mr-2 btn-pill" type="submit" @click="onSubmit" variant="primary"><i class="cui-circle-check icons icon-"></i> Submit</b-button>
         <b-button
           id="btnSubmitAndContinue"
           type="button"
           variant="success"
           class="mr-2 btn-pill"
           @click="onSubmitAndContinue"
         ><i class="cui-task icons icon-"></i> Lưu và tiếp tục</b-button>
         <b-button class="btn-pill" d="btnReset" @click="onReset" type="reset" variant="danger"><i class="fa fa-ban icon-"></i> Reset</b-button>
       </div>
     </b-card>
    </b-form>
    <b-modal ref="org" size="lg" title="Using Component Methods">
      <!-- <TreeVue :showcheckbox="showcheckbox" :data="dataOrg" :multiple="multiple"
                         :size="size" :batch="batch" :whole="whole" :nodots="nodots" @item-click="selectOrg($event)"
      :collapse="collapse"></TreeVue>-->
      <div slot="modal-footer" class="float-right"></div>
    </b-modal>
    <b-modal
      id="showPopUpManager"
      ref="showPopUpManager"
      size="lg"
      title="Manager Employee"
      :lazy="true"
      :hide-footer="true"
    >
      <PopUpManager :data="listOrg" v-on:ChooseManagerId="updateManagerId($event)"></PopUpManager>
    </b-modal>
  </div>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import PopUpManager from "../../tochuc/PopUpManager.vue";
import Autocomplete from "../../tochuc/Autocomplete.vue";
import DatePicker from "vue2-datepicker";
import _ from "lodash";
import { bus } from "../../../main";
export default {
  name: "NewEmployee",
  components: {
    DatePicker,
    Autocomplete,
    PopUpManager
  },
  props: [
    "dataNation",
    "dataEthnic",
    "dataReligion",
    "dataEmployeeObject",
    "dataGender",
    "dataOrg"
  ],
  data() {
    return {
      items: ["Hoàng văn hòa", "Nguyễn Văn chiến", "Hoàng quốc việt ", "Dỗ huy cương"],
      selectedFile: null,
      listOrg: [],
      showcheckbox: false,
      data: [],
      multiple: false,
      size: "large",
      batch: false,
      whole: false,
      nodots: false,
      collapse: false,
      dataTitle: []
    };
  },
  methods: {
    OnSelected(evt) {
      console.log(evt);
      this.selectedFile = evt.target.files[0];
    },
    Upload() {
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name);
      // axios.post('/files', fd).then(res => {
      //     console.log(res);
      // })
    },
    showOrg() {
      this.$refs.org.show();
    },
    ShowPopUpManager() {
      //   const listor = new GetOrganizationsTree();
      //   client.get(listor).then(res => {
      //     this.listOrg = notification.Unflatten(res.items);
      //     (this.$refs.showPopUpManager).show();
      // });
      this.$refs.showPopUpManager.show();
      bus.$on("ChooseManagerId", data => {
        this.EmployeeCreate.managerId = data.id;
        this.$refs.manager.value = data.firstName + " " + data.lastName;
        this.$refs.showPopUpManager.hide();
      });
    },
    async onSubmit() {},
    onSubmitAndContinue() {},
    onReset() {},
    async selectOrg(evt) {
      this.EmployeeCreate.orgId = evt.id;
      this.$refs.org.hide();
      this.$refs.txtOrg.value = evt.name;
      //call api get title by orgid
      if (_.isEqual(this.dataTitle.length, 0)) {
        //call api lay du lieu
        this.dataTitle = [
          {
            name: "Trưởng phòng",
            id: 1
          },
          {
            name: "Phó phòng",
            id: 2
          }
        ];
      }
    }
  }
};
</script>
