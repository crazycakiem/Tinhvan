export default {
  items: [{
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      class: 'big-item'
    },
    {
      name: 'Tổ chức',
      url: 'tochuc',
      icon: 'icon-folder',
      children: [{
          name: 'Thiết lập sơ đồ tổ chức',
          url: 'link1',
          icon: 'icon-doc'
        },
        {
          name: 'Xem trực tiếp sơ đồ tổ chức',
          url: 'link1',
          icon: 'icon-doc'
        },
        {
          name: 'Danh mục nhóm chức danh',
          url: 'link1',
          icon: 'icon-doc'
        },
        {
          name: 'Danh mục chức danh',
          url: 'link1',
          icon: 'icon-doc'
        },
        {
          name: 'Thiết lập chức danh cho đơn vị',
          url: 'link1',
          icon: 'icon-doc'
        },
        {
          name: 'Thiết lập chức danh quản lý',
          url: 'link1',
          icon: 'icon-doc'
        },
        {
          name: 'Lịch sử đơn vị',
          url: '/tochuc/lichsudonvi',
          icon: 'icon-doc'
        }
      ]
    },
    {
      name: 'Hồ sơ',
      url: '/hoso',
      icon: 'icon-folder',
      children: [{
          name: 'Hồ sơ nhân viên',
          url: '/hoso/hosonhanvien',
          icon: 'icon-doc'
        },
        {
          name: 'Quản lý hồ sơ lương',
          url: '/hoso/quanlyhosoluong',
          icon: 'icon-doc'
        },
        {
          name: 'Quản lý hợp đồng',
          url: '/hoso/quanlyhopdong',
          icon: 'icon-doc'
        },
        {
          name: 'Quản lý thay đổi thông tin nhân sự',
          url: '/hoso/quanlythaydoithongtinnhansu',
          icon: 'icon-doc'
        },
        {
          name: 'Quản lý điều chuyển 3B',
          url: '/hoso/quanlydieuchuyen',
          icon: 'icon-doc'
        },
        {
          name: 'Quản lý nghỉ việc',
          url: '/hoso/quanlynghiviec',
          icon: 'icon-doc'
        },
        {
          name: 'Danh mục phụ cấp',
          url: '/hoso/danhmucphucap',
          icon: 'icon-doc'
        },
        {
          name: 'Danh mục hợp đồng',
          url: '/hoso/danhmuchopdong',
          icon: 'icon-doc'
        }
      ]
    },
    {
      name: 'Bảo hiểm',
      url: 'baohiem',
      icon: 'icon-folder',
      children: [{
          name: 'Quản lý thông tin bảo hiểm',
          url: '#',
          icon: 'icon-doc'
        },
        {
          name: 'Quản lý biến động bảo hiểm',
          url: '#',
          icon: 'icon-doc'
        },
        {
          name: 'Danh mục nơi khám chữa bệnh',
          url: '#',
          icon: 'icon-doc'
        }
      ]
    },
    {
      name: 'Tính công',
      url: 'tinhcong',
      icon: 'icon-folder',
      children: [{
          name: 'Đăng ký nghỉ',
          url: '#',
          icon: 'icon-doc'
        },
        {
          name: 'Đăng ký làm thêm',
          url: '#',
          icon: 'icon-doc'
        },
        {
          name: 'Tải dữ liệu máy chấm công',
          url: '#',
          icon: 'icon-doc'
        },
        {
          name: 'Quản lý dữ liệu vào ra',
          url: '#',
          icon: 'icon-doc'
        },
        {
          name: 'Ca làm việc',
          url: '#',
          icon: 'icon-doc'
        },
        {
          name: 'Ký hiệu chấm công',
          url: '#',
          icon: 'icon-doc'
        }
      ]
    },
    {
      name: 'Tính lương',
      url: 'tinhluong',
      icon: 'icon-folder',
      children: [{
          name: 'Tính lương',
          url: '#',
          icon: 'icon-doc'
        },
        {
          name: 'Import lương',
          url: '#',
          icon: 'icon-doc'
        },
        {
          name: 'Kết cấu bảng lương',
          url: '#',
          icon: 'icon-doc'
        },
        {
          name: 'Ngạch lương',
          url: '#',
          icon: 'icon-doc'
        },
        {
          name: 'Bậc lương',
          url: '#',
          icon: 'icon-doc'
        }
      ]
    },
    {
      name: 'Tuyển dụng',
      url: 'tuyendung',
      icon: 'icon-folder',
    },
    {
      name: 'Quản trị hệ thống',
      url: 'quantri',
      icon: 'icon-folder',
      children: [{
          name: 'Tham số hệ thống chi tiết',
          url: '#',
          icon: 'icon-doc'
        },
        {
          name: 'Tham số hệ thống',
          url: '/quantri/thamsohethong',
          icon: 'icon-doc'
        },
        {
          name: 'Quản lý tài khoản',
          url: '#',
          icon: 'icon-doc'
        },
        {
          name: 'Phân quyền cho tài khoản',
          url: '#',
          icon: 'icon-doc'
        }
      ]
    }
    // {
    //   name: 'Base',
    //   url: '/base',
    //   icon: 'icon-folder',
    //   children: [
    //     {
    //       name: 'Breadcrumbs',
    //       url: '/base/breadcrumbs',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Cards',
    //       url: '/base/cards',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Carousels',
    //       url: '/base/carousels',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Collapses',
    //       url: '/base/collapses',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Forms',
    //       url: '/base/forms',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Jumbotrons',
    //       url: '/base/jumbotrons',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'List Groups',
    //       url: '/base/list-groups',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Navs',
    //       url: '/base/navs',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Navbars',
    //       url: '/base/navbars',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Paginations',
    //       url: '/base/paginations',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Popovers',
    //       url: '/base/popovers',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Progress Bars',
    //       url: '/base/progress-bars',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Switches',
    //       url: '/base/switches',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Tables',
    //       url: '/base/tables',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Tabs',
    //       url: '/base/tabs',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Tooltips',
    //       url: '/base/tooltips',
    //       icon: 'icon-puzzle'
    //     }
    //   ]
    // },
    // {
    //   name: 'Buttons',
    //   url: '/buttons',
    //   icon: 'icon-cursor',
    //   children: [
    //     {
    //       name: 'Buttons',
    //       url: '/buttons/standard-buttons',
    //       icon: 'icon-cursor'
    //     },
    //     {
    //       name: 'Button Dropdowns',
    //       url: '/buttons/dropdowns',
    //       icon: 'icon-cursor'
    //     },
    //     {
    //       name: 'Button Groups',
    //       url: '/buttons/button-groups',
    //       icon: 'icon-cursor'
    //     },
    //     {
    //       name: 'Brand Buttons',
    //       url: '/buttons/brand-buttons',
    //       icon: 'icon-cursor'
    //     }
    //   ]
    // },
    // {
    //   name: 'Charts',
    //   url: '/charts',
    //   icon: 'icon-pie-chart'
    // },
    // {
    //   name: 'Icons',
    //   url: '/icons',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'CoreUI Icons',
    //       url: '/icons/coreui-icons',
    //       icon: 'icon-star',
    //       badge: {
    //         variant: 'info',
    //         text: 'NEW'
    //       }
    //     },
    //     {
    //       name: 'Flags',
    //       url: '/icons/flags',
    //       icon: 'icon-star'
    //     },
    //     {
    //       name: 'Font Awesome',
    //       url: '/icons/font-awesome',
    //       icon: 'icon-star',
    //       badge: {
    //         variant: 'secondary',
    //         text: '4.7'
    //       }
    //     },
    //     {
    //       name: 'Simple Line Icons',
    //       url: '/icons/simple-line-icons',
    //       icon: 'icon-star'
    //     }
    //   ]
    // },
    // {
    //   name: 'Notifications',
    //   url: '/notifications',
    //   icon: 'icon-bell',
    //   children: [
    //     {
    //       name: 'Alerts',
    //       url: '/notifications/alerts',
    //       icon: 'icon-bell'
    //     },
    //     {
    //       name: 'Badges',
    //       url: '/notifications/badges',
    //       icon: 'icon-bell'
    //     },
    //     {
    //       name: 'Modals',
    //       url: '/notifications/modals',
    //       icon: 'icon-bell'
    //     }
    //   ]
    // }
  ]
}
