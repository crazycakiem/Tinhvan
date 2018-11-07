<template>
  <div class="animated fadeIn">

    <b-row>
      <b-col lg="12">
        <b-card class="card-de1">
           <div class="panel-title-de1">
             <div>
              <h4>Quản lý hợp đồng</h4>
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
  {id: '1232', fullname: 'Samppa Nori', gender: 'BA', groupSub: 'BA staff', sub: '1234', dept: 'Quyết định lương',dept: 'Quyết định lương', date: '21/09/19', date2: '21/11/19', status: 'Đã nghỉ', _rowVariant: 'success'},
  {id: '1233', fullname: 'Linh Nguyen', gender: 'BA', groupSub: 'BA fsf', sub: '1234', dept: 'Quyết định lương',date: '21/09/19', date2: '21/11/19', status: 'Đã nghỉ'},
  {id: '1234', fullname: 'Nguyen Linh', gender: 'BA', groupSub: 'BAss', sub: '1234', dept: 'Quyết định lương',date: '21/09/19', date2: '21/11/19', status: 'Đã nghỉ'},
  {id: '1235', fullname: 'Nguyen Linh Linh', gender: 'BA', groupSub: 'BA sadas', sub: '1234', dept: 'Quyết định lương',date: '21/09/19', date2: '21/11/19', status: 'Đã nghỉ'},
  {id: '1236', fullname: 'Samppa Nori', gender: 'BA', groupSub: 'BA sssaa', sub: '1234', dept: 'Quyết định lương',date: '21/09/19', date2: '21/11/19', status: 'Đã nghỉ'},
  {id: '1237', fullname: 'Samppa Nori', gender: 'BA', groupSub: 'BA cccc', sub: '1234', dept: 'Quyết định lương',date: '21/09/19', date2: '21/11/19', status: 'Đã nghỉ'},
  {id: '1238', fullname: 'Samppa Nori', gender: 'BA', groupSub: 'BAssss', sub: '1234', dept: 'Quyết định lương',date: '21/09/19', date2: '21/11/19', status: 'Đã nghỉ'},
  {id: '1239', fullname: 'Samppa Nori', gender: 'AB', groupSub: 'BAfff', sub: '1234', dept: 'Quyết định lương',date: '21/09/19', date2: '21/11/19', status: 'Đã nghỉ'},
  {id: '1231', fullname: 'Samppa Nori', gender: 'CD', groupSub: 'BAssdd', sub: '1234', dept: 'Quyết định lương',date: '21/09/19', date2: '21/11/19', status: 'Đã nghỉ'},
  {id: '1211', fullname: 'Samppa Nori', gender: 'MK', groupSub: 'BAaaaaa', sub: '1234', dept: 'Quyết định lương',date: '21/09/19', date2: '21/11/19', status: 'Đã nghỉ'}
])

export default {
  name: 'quanlyhopdong',
  components: {cTable},
  data: () => {
    return {
      items: someData,
      itemsArray: someData(),
      fields: [
        {key: 'id', label: 'Mã nhân viên', sortable: true},
        {key: 'fullname', label: 'Họ tên', sortable: true},
        {key: 'gender', label: 'Đơn vị', sortable: true},
        {key: 'groupSub', label: 'Chức danh', sortable: true},
        {key: 'sub', label: 'Số quyết định', sortable: true},
        {key: 'dept', label: 'Loại hợp đồng', sortable: true},
        {key: 'date', label: 'Ngày bắt đầu', sortable: true},
        {key: 'date2', label: 'Ngày kết thúc', sortable: true},
        {key: 'status', label: 'Trạng thái',sortable: true}
      ],
    }
  }
}
</script>
