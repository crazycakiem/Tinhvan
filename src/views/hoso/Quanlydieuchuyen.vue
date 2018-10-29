<template>
  <div class="animated fadeIn">

    <b-row>
      <b-col lg="12">
        <b-card class="card-de1">
           <div class="panel-title-de1">
             <div>
              <h4>Quản lý điều chuyển</h4>
              <b-button class="btn-pill mr-1" variant="default" size="sm">
                  Thêm mới <i class="icon-plus"></i>
              </b-button>
              <b-button class="btn-pill" variant="default" size="sm">
                  <i class="icon-magnifier icons"></i> Tìm kiếm
              </b-button>
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
             <c-table class="card-tbl-de1" :table-data="items" :fields="fields"></c-table>
           </div>
        </b-card>

      </b-col>

    </b-row><!--/.row-->

  </div>

</template>

<script>
import { shuffleArray } from '@/shared/utils'
import cTable from './Table.vue'

const someData = () => shuffleArray([
  {id: '1232', fullname: 'Quyết định lương', gender: 'Samppa Nori', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ', _rowVariant: 'success'},
  {id: '1233', fullname: 'Quyết định nâng lương', gender: 'Samppa Nori 12', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1234', fullname: 'Quyết định điều chỉnh', gender: 'NSamppa Noriữ', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1235', fullname: 'Quyết định 11', gender: 'Samppa Nori 2dsd', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1236', fullname: 'Quyết định lương thưởng', gender: 'Samppa Nori', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1237', fullname: 'Quyết định lương', gender: 'Samppa Nori', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1238', fullname: 'Quyết định lương', gender: 'Samppa Nori', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1239', fullname: 'Quyết định lương', gender: 'Samppa Nori', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1231', fullname: 'Quyết định lương', gender: 'Linh Nguyen', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1211', fullname: 'Quyết định lương', gender: 'Samppa Nori', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1212', fullname: 'Quyết định lương', gender: 'Linh Nguyen', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1213', fullname: 'Quyết định lương', gender: 'Samppa Nori', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1214', fullname: 'Quyết định lương', gender: 'Linh Nguyen', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1216', fullname: 'Quyết định lương', gender: 'Linh Nguyen', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1215', fullname: 'Quyết định lương', gender: 'Linh Nguyen', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1217', fullname: 'Quyết định lương', gender: 'Linh Nguyen', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1218', fullname: 'Quyết định lương', gender: 'Linh Nguyen', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1219', fullname: 'Quyết định lương', gender: 'Linh Nguyen', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1222', fullname: 'Quyết định lương', gender: 'Linh Nguyen', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1221', fullname: 'Quyết định lương', gender: 'Linh Nguyen', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'},
  {id: '1220', fullname: 'Quyết định lương', gender: 'Linh Nguyen', groupSub: 'BA', sub: 'BA Staff', dept: '21/09/19', obj: '21/11/19', status: 'Đã nghỉ'}
])

export default {
  name: 'quanlydieuchuyen',
  components: {cTable},
  data: () => {
    return {
      items: someData,
      itemsArray: someData(),
      fields: [
        {key: 'id', label: 'Số quyết định', sortable: true},
        {key: 'fullname', label: 'Loại quyết định', sortable: true},
        {key: 'gender', label: 'Họ tên', sortable: true},
        {key: 'groupSub', label: 'Đơn vị', sortable: true},
        {key: 'sub', label: 'Chức danh', sortable: true},
        {key: 'dept', label: 'Ngày hiệu lực', sortable: true},
        {key: 'obj', label: 'Ngày hết hiệu lực', sortable: true},
        {key: 'status', label: 'Trạng thái',sortable: true}
      ],
    }
  }
}
</script>
