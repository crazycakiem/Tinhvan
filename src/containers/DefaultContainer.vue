<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <div class="top-logo">
        <b-link class="navbar-brand" to="#">
          <span class="navbar-brand-full">TINHVAN System</span>
        </b-link>
        <SidebarToggler class="d-md-down-none ml-auto" display="lg" />
      </div>
      <!-- <b-navbar-nav class="d-md-down-none">
        <b-nav-item class="px-3">
         <i class="icon-magnifier icons"></i> Tìm kiếm
        </b-nav-item>
      </b-navbar-nav> -->
      <b-navbar-nav class="ml-auto mr-4">
        <!-- <AsideToggler class="show-map d-none d-lg-block" /> -->
        <!--<AsideToggler class="d-lg-none" mobile />-->
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
        <DefaultHeaderDropdownAccnt/>
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
      <!-- <AppAside fixed>
        <DefaultAside/>
      </AppAside> -->
    </div>
    <TheFooter>
      <!--footer-->
      <div>
        <span class="ml-1">&copy; 2018 TINHVAN.</span>
      </div>
      <div class="ml-auto">
        <span class="mr-1">Powered by</span>
        <a href="#">Bootstrap & Vue</a>
      </div>
    </TheFooter>
  </div>
</template>

<script>
import nav from '@/_nav'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
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
