<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <div class="top-logo">
        <b-link class="navbar-brand" to="#">
          <span class="navbar-brand-full">TINHVAN System</span>
          <img class="navbar-brand-minimized" src="img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo">
        </b-link>
        <!-- <SidebarToggler class="d-md-down-none ml-auto" display="lg" /> -->
      </div>
      <SidebarToggler class="d-md-down-none btn-show-nav" display="lg" />
      <b-navbar-nav class="mr-auto ml-3">
        <!-- <SidebarToggler class="d-md-down-none ml-auto" display="lg" /> -->
        <DefaultHeaderDropdownAccnt/>
        <b-nav-item class="d-md-down-none">
          <i class="fa fa-bell"></i>
          <b-badge pill variant="danger">5</b-badge>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="fa fa-envelope"></i>
          <b-badge pill variant="danger">5</b-badge>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="fa fa-gear"></i>
        </b-nav-item>
        <b-nav-item-dropdown class="d-md-down-none drop-lang">
           <template slot="button-content">
            <img
              src="img/vietnam.png"
              class="img-lang"
              alt="Tiếng Việt" />
           </template>
           <b-dropdown-item class="active" href="#">
            <img
             src="img/vietnam.png"
             class="img-lang"
             alt="Tiếng Việt" /> Tiếng Việt</b-dropdown-item>
           <b-dropdown-item href="#">
            <img
             src="img/united-kingdom.png"
             class="img-lang"
             alt="English" /> English</b-dropdown-item>
           <b-dropdown-item href="#">
            <img
             src="img/france.png"
             class="img-lang"
             alt="Tiếng Việt" /> French</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
      </AppSidebar>
      <main class="main">
        <!-- <Breadcrumb :list="list"/> -->
        <div class="container-fluid">
          <Breadcrumb :list="list"/>
          <router-view></router-view>
        </div>
      </main>
    </div>
    <!-- <TheFooter>
      <div>
        <span class="ml-1">&copy; 2018 TINHVAN.</span>
      </div>
      <div class="ml-auto">
        <span class="mr-1">Powered by</span>
        <a href="#">Bootstrap & Vue</a>
      </div>
    </TheFooter> -->
  </div>
</template>

<script>
import nav from '@/_nav'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultAside from './DefaultAside'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'

export default {
  name: 'DefaultContainer',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav
    // SidebarMinimizer
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  }
}
</script>
