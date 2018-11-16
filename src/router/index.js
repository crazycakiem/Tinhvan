import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Colors = () => import('@/views/theme/Colors')
const Typography = () => import('@/views/theme/Typography')

const Charts = () => import('@/views/Charts')
const Widgets = () => import('@/views/Widgets')

// Views - Hoso
const Hosonhanvien = () => import('@/views/hoso/Hosonhanvien')
const Quanlyhosoluong = () => import('@/views/hoso/Quanlyhosoluong')
const Quanlyhopdong = () => import('@/views/hoso/Quanlyhopdong')
const Quanlythaydoithongtinnhansu = () => import('@/views/hoso/Quanlythaydoithongtinnhansu')
const Quanlydieuchuyen = () => import('@/views/hoso/Quanlydieuchuyen')
const Quanlynghiviec = () => import('@/views/hoso/Quanlynghiviec')
const Danhmucphucap = () => import('@/views/hoso/Danhmucphucap')
const Danhmuchopdong = () => import('@/views/hoso/Danhmuchopdong')
const Thamsohethong = () => import('@/views/system/Thamsohethong')
const NewContract = () => import('@/views/hoso/NewContract')
const NewWageRecord = () => import('@/views/hoso/NewWageRecord')
const NewChangeInfoEmployee = () => import('@/views/hoso/NewChangeInfoEmployee')
// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Icons
const Flags = () => import('@/views/icons/Flags')
const FontAwesome = () => import('@/views/icons/FontAwesome')
const SimpleLineIcons = () => import('@/views/icons/SimpleLineIcons')
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

//Organization
const Organization = () => import('@/views/org/Organization')
const Themtochuc = () => import('@/views/tochuc/Themtochuc')
const Chucdanhchodonvi = () => import('@/views/org/Chucdanhchodonvi')
//category
const Salary = () => import('@/views/category/Salary')

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [{
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'danhmuc',
          name: 'Danh mục',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [{
            path: 'danhmucluong',
            name: 'Danh mục lương',
            component: Salary
          }]
        },
        {
          path: 'tochuc',
          name: 'Tổ chức',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [{
              path: '/tochuc/thietlapsodotochuc',
              name: 'Thiết lập sơ đồ tổ chức',
              component: Organization
            },
            {
              path: '/tochuc/Themtochuc',
              name: 'Thêm mới tổ chức',
              component: Themtochuc
            },
            {
              path: '/tochuc/thietlapchucdanhchodonvi',
              name: 'Thiết lập chức danh cho đơn vị',
              component: Chucdanhchodonvi
            }
          ]
        },
        {
          path: 'system',
          name: 'Hệ thống',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [{
            path: '/system/thamsohethong',
            name: 'Tham Số Hệ Thống',
            component: Thamsohethong
          }]
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [{
              path: 'colors',
              name: 'Colors',
              component: Colors
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: {
            label: 'Users'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [{
              path: '',
              component: Users,
            },
            {
              path: ':id',
              meta: {
                label: 'User Details'
              },
              name: 'User',
              component: User,
            },
          ]
        },
        {
          path: 'hoso',
          redirect: '/hoso/hosonhanvien',
          name: 'Hồ sơ',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [{
              path: 'hosonhanvien',
              name: 'Hồ sơ nhân viên',
              component: Hosonhanvien
            },
            {
              path: 'quanlyhosoluong',
              name: 'Quản lý hồ sơ lương',
              component: Quanlyhosoluong
            },
            {
              path: '/hoso/themhosoluong',
              name: 'Thêm hồ sơ lương',
              component: NewWageRecord
            },

            {
              path: '/hoso/themthaydoithongtinnhansu',
              name: 'Thêm thay đổi thông tin nhân sự',
              component: NewChangeInfoEmployee
            },
            {
              path: '/hoso/themhopdong',
              name: 'Thêm hợp đồng',
              component: NewContract
            },
            {
              path: 'quanlyhopdong',
              name: 'Quản lý hợp đồng',
              component: Quanlyhopdong
            },
            {
              path: 'quanlythaydoithongtinnhansu',
              name: 'Quản lý thay đổi thông tin nhân sự',
              component: Quanlythaydoithongtinnhansu
            },
            {
              path: 'quanlydieuchuyen',
              name: 'Quản lý điều chuyển 3B',
              component: Quanlydieuchuyen
            },
            {
              path: 'quanlynghiviec',
              name: 'Quản lý nghỉ việc',
              component: Quanlynghiviec
            },
            {
              path: 'danhmucphucap',
              name: 'Danh mục phụ cấp',
              component: Danhmucphucap
            },
            {
              path: 'danhmuchopdong',
              name: 'Danh mục hợp đồng',
              component: Danhmuchopdong
            }
          ]
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [{
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [{
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [{
              path: 'coreui-icons',
              name: 'CoreUI Icons',
              component: CoreUIIcons
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            },
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [{
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render(c) {
          return c('router-view')
        }
      },
      children: [{
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
