<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <b-card class="card-de1">
          <div class="panel-title-de1">
            <div>
              <h4>Organization</h4>
              <b-button id="btnAdd" @click="AddRow" class="btn-pill mr-1" variant="default" size="sm">
                Thêm mới <i class="icon-plus"></i>
              </b-button>
              <b-button id="btnFilter" @click="collapse" class="btn-pill" variant="default" size="sm">
                <i class="fa fa-filter"></i> Tìm kiếm
              </b-button>
            </div>
          </div>
          <div class="form-search-2">
            <b-form v-on:submit.prevent>
                <b-row>
                    <b-col cols="3">
                        <input id="txtParent" placeholder="OrgParent" class="custom-input-style1" type="text" />
                    </b-col>
                    <b-col cols="3">
                        <input id="txtCode" placeholder="OrgCode" class="custom-input-style1" type="text" />
                    </b-col>
                    <b-col cols="3">
                        <input id="txtName" placeholder="OrgName" class="custom-input-style1" type="text" />
                    </b-col>
                    <b-col cols="3">
                        <input id="txtFax" placeholder="Fax" class="custom-input-style1" type="text" />
                    </b-col>
                    <b-col cols="6" class="mt-3 show-md-info">
                        <!-- <input id="txtManager" type="text" readonly ref="manager"> -->
                        <Autocomplete :items="items" :isAsync="false" ref="autocomplete" :isDisplayFull="false"></Autocomplete>
                        <b-btn id="btnShowPopUpManager" @click="ShowPopUpManager"><i class="fa fa-search" aria-hidden="true"></i></b-btn>
                    </b-col>
                </b-row>
            </b-form>
            <b-modal id="showPopUpManager" ref="showPopUpManager" size="lg" title="Manager Employee" :lazy="true" :hide-footer="true">
                <PopUpManager :data="listOrg" v-on:ChooseManagerId="updateManagerId($event)"></PopUpManager>
            </b-modal>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
// import TreeVue from '../../+TreeVue/TreeVue.vue'
import DatePicker from "vue2-datepicker";
import Autocomplete from "./Autocomplete.vue";
import PopUpManager from "./PopUpManager.vue";
import _ from "lodash";
export default {
  name: "Themtochuc",
  components: {
    Autocomplete,
    PopUpManager
  },
  data() {
    return {
      items: ["name", "sida boy", "mana regen"],
      listOrg: []
    };
  },
  methods: {
    ShowPopUpManager: function() {
      this.$refs.showPopUpManager.show();
    }
  }
};
</script>
