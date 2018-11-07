<template>
 <nav class="sidebar-nav map-corp">
   <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-y="scrollHandle">
     <ul class="nav">
       <li class="nav-item has-child lvl1">
        <div class="item-first has-collap" v-b-toggle.collapse1><i class="icon-folder-alt"></i> Tập đoàn Tinh Vân Corp</div>
        <b-collapse id="collapse1" class="collap-list">
         <ul class="child-tree">
           <li class="nav-item has-child lvl2">
            <div class="item-first has-collap" v-b-toggle.collapse2><i class="icon-folder-alt"></i> TinhVan Consulting</div>
            <b-collapse id="collapse2" class="collap-list">
              <ul class="child-tree">
                <li class="nav-item">
                 <div class="item-first"><i class="icon-folder"></i> Phòng công nghệ</div>
                </li>
                <li class="nav-item">
                 <div class="item-first"><i class="icon-folder"></i> Phòng giải pháp R&D</div>
                </li>
                <li class="nav-item">
                 <div class="item-first"><i class="icon-folder"></i> Ban giám đốc</div>
                </li>
                <li class="nav-item has-child lvl3">
                 <div class="item-first has-collap" v-b-toggle.collapse3><i class="icon-folder-alt"></i> Phòng hành chính nhân sự</div>
                 <b-collapse id="collapse3" class="collap-list">
                   <ul class="child-tree">
                     <li class="nav-item">
                      <div class="item-first"><i class="icon-folder"></i> Ban hành chính</div>
                     </li>
                     <li class="nav-item">
                      <div class="item-first"><i class="icon-folder"></i> Ban nhân sự</div>
                     </li>
                   </ul>
                 </b-collapse>
                </li>
                <li class="nav-item">
                 <div class="item-first"><i class="icon-folder"></i> Phòng kinh doanh</div>
                </li>
              </ul>
            </b-collapse>
           </li>
           <li class="nav-item has-child lvl2">
            <div class="item-first has-collap"><i class="icon-folder"></i> TinhVan Outsource</div>
           </li>
           <li class="nav-item has-child lvl2">
            <div class="item-first has-collap" v-b-toggle.collapse4><i class="icon-folder-alt"></i> TinhVan Education</div>
            <b-collapse id="collapse4" class="collap-list">
              <ul class="child-tree">
                <li class="nav-item">
                 <div class="item-first"><i class="icon-folder"></i> Phòng thiết kế</div>
                </li>
                <li class="nav-item">
                 <div class="item-first"><i class="icon-folder"></i> Phòng chăm sóc khách hàng</div>
                </li>
                <li class="nav-item">
                 <div class="item-first"><i class="icon-folder"></i> Phòng dịch vụ</div>
                </li>
                <li class="nav-item">
                 <div class="item-first"><i class="icon-folder"></i> Ban truyền thông</div>
                </li>
              </ul>
            </b-collapse>
           </li>
           <li class="nav-item has-child lvl2">
            <div class="item-first has-collap" v-b-toggle.collapse5><i class="icon-folder-alt"></i> TinhVan Telecom</div>
            <b-collapse id="collapse5" class="collap-list">
              <ul class="child-tree">
                <li class="nav-item">
                 <div class="item-first"><i class="icon-folder"></i> Tư vấn giải pháp</div>
                </li>
              </ul>
            </b-collapse>
           </li>
         </ul>
        </b-collapse>
       </li>
     </ul>
     <slot></slot>
   </VuePerfectScrollbar>
 </nav>
</template>

<script>
// import nav from '@/_nav'
// import { Switch as cSwitch } from '@coreui/vue'
// import { SidebarNavDivider as cSidebarNavDivider } from '@coreui/vue'
// import { SidebarNavDropdown as cSidebarNavDropdown }  from '@coreui/vue'
// import { SidebarNavLink as cSidebarNavLink }  from '@coreui/vue'
// import { SidebarNavTitle as cSidebarNavTitle }  from '@coreui/vue'
// import { SidebarNavItem as cSidebarNavItem }  from '@coreui/vue'
// import { SidebarNavLabel as cSidebarNavLabel }  from '@coreui/vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
  name: 'DefaultAside',
  components: {
    // cSwitch,
    // cSidebarNavDivider,
    // cSidebarNavDropdown,
    // cSidebarNavLink,
    // cSidebarNavTitle,
    // cSidebarNavItem,
    // cSidebarNavLabel,
    VuePerfectScrollbar
  },
  data () {
    return { }
  },
  computed: {
    psSettings: () => {
      // ToDo: find better rtl fix
      return {
        maxScrollbarLength: 200,
        minScrollbarLength: 40,
        suppressScrollX: getComputedStyle(document.querySelector('html')).direction !== 'rtl',
        wheelPropagation: false,
        interceptRailY: styles => ({ ...styles, height: 0 })
      }
    }
  },
  methods: {
    scrollHandle (evt) {
      // console.log(evt)
    }
  }
}
</script>
<style scoped lang="css">
  .scroll-area {
    position: absolute;
    height: 100%;
    margin: auto;
  }
</style>
