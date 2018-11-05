<template>
    <div>
        <h3>Organization"</h3>
        <b-form v-on:submit.prevent>
            <b-row>
                <b-col cols="2">
                    <label label-for="txtParent">OrgParent</label>
                </b-col>
                <b-col cols="2">
                    <input id="txtParent" type="text" readonly ref="parent" />
                    <!-- <b-btn v-b-modal.showTreeOrg @click="ShowTreeVue"><i class="fa fa-search" aria-hidden="true"></i></b-btn> -->
                </b-col>
                <b-col cols="2">
                    <label label-for="txtCode">OrgCode</label>
                </b-col>
                <b-col cols="2">
                    <input id="txtCode" type="text" />
                </b-col>

                <b-col cols="2">
                    <label label-for="txtName">OrgName</label>
                </b-col>
                <b-col cols="2">       
                    <!-- <input id="txtManager" type="text" readonly ref="manager"> -->
                    <Autocomplete :items="items" :isAsync="false" ref="autocomplete" :isDisplayFull="false"></Autocomplete>
                    <b-btn id="btnShowPopUpManager" @click="ShowPopUpManager"><i class="fa fa-search" aria-hidden="true"></i></b-btn>
              
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="1"><label label-for="txtFax"> Fax  </label></b-col>
                <b-col cols="2"> <input id="txtFax" type="text"/>        
                </b-col>
            </b-row>
        </b-form>
        <b-modal id="showPopUpManager" ref="showPopUpManager" size="lg" title="Manager Employee" :lazy="true" :hide-footer="true">
            <PopUpManager :data="listOrg" v-on:ChooseManagerId="updateManagerId($event)"></PopUpManager>
        </b-modal>
    </div>
</template>
<script lang="ts">
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
