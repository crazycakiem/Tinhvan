<template>
    <div class="autocomplete">
        <input placeholder="Nhập từ khoá" class="custom-input-style1" type="text" v-model="search" @keydown.down="onArrowDown" ref="txtautocomplete"
               @keydown.up="onArrowUp"
               @keydown.enter="onEnter"
               @input="onChange" />
        <ul class="autocomplete-results" v-show="isOpen">
            <li class="loading"
                v-if="isLoading">
                Loading results...
            </li>
            <li class="autocomplete-result" v-for="(result, i) in results"
             @click="setResult(result)" :class="{ 'is-active': i === arrowCounter }"
                :key="i">
                {{result +'-'+result+ ' ' + result}}
            </li>
        </ul>
    </div>
</template>
<style>
.autocomplete {
  position: relative;
  /* width: 130px; */
  display: inline;
}

.autocomplete-results {
  position: absolute;
  background: rgb(255, 255, 255);
  top: 1px;
  box-shadow: 1px 1px 1px rgba(0,0,0,.12);
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #eee;
  margin: 0;
  max-height: 120px;
  overflow: auto;
  width: 100%;
  z-index: 9;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 10px;
  cursor: pointer;
}

.autocomplete-result:hover {
  background-color: #eee;
  color: #333;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #eee;
  color: #333;
}
</style>
<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import _ from "lodash";
export default {
  name: "Autocomplete",
  props: [
    "items",
    "isAsync",
    "AutocompleteChangeEvent",
    "AutocompleteSelected",
    "isDisplayFull"
  ],
  components: {},
  data() {
    return {
      search: "",
      isLoading: false,
      arrowCounter: 0,
      isOpen: false,
      results: []
    };
  },
  methods: {
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
    onEnter() {
      this.search = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
      //    if(!_.isUndefined(this.AutocompleteSelected) && !_.isEqual(this.AutocompleteSelected,'')){
      //      bus.$emit(this.AutocompleteSelected, result);
      //  }else{
      //      bus.$emit('autocompletechoose', result);
      //  }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    setResult(result) {
      if (this.isDisplayFull) {
        this.search = result + "-" + result + " " + result;
      } else {
        this.search = result;
      }
      this.isOpen = false;
      if (
        !_.isUndefined(this.AutocompleteSelected) &&
        !_.isEqual(this.AutocompleteSelected, "")
      ) {
        //   bus.$emit(this.AutocompleteSelected, result);
      } else {
        //  bus.$emit('autocompletechoose', result);
      }
    },
    filterResults() {
      this.results = this.items.filter(
        item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
    },
    onChange() {
      // Let's warn the parent that a change was made
      if (
        !_.isUndefined(this.AutocompleteChangeEvent) &&
        !_.isEqual(this.AutocompleteChangeEvent, "")
      ) {
        // bus.$emit(this.AutocompleteChangeEvent, this.search);
      } else {
        // bus.$emit('autocompletechange', this.search);
      }
      if (this.isAsync) {
        this.isLoading = true;
      } else {
        // Data is sync, we can search our flat array
        this.filterResults();
        this.isOpen = true;
      }
    }
  },
  watch: {
    // Once the items content changes, it means the parent component
    // provided the needed data
    items: function(value, oldValue) {
      // we want to make sure we only do this when it's an async request
      if (this.isAsync) {
        this.results = value;
        this.isOpen = true;
        this.isLoading = false;
      }
    }
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  }
};
</script>
