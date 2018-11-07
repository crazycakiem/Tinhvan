<template>
  <div class="animated fadeIn">

    <b-row>
      <b-col lg="12">
        <b-card class="card-de1">
           <div class="panel-title-de1">
             <div>
              <h4>Danh mục phụ cấp</h4>
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
  {id: '1232', fullname: 'Phụ cấp tiền ăn', gender: 'Theo ngày công đi làm', groupSub: '', sub: '', status: 'Áp dụng', _rowVariant: 'success'},
  {id: '1232', fullname: 'Phụ cấp tiền ăn', gender: 'Theo ngày công đi làm', groupSub: '', sub: '', status: 'Ngưng áp dụng'},
  {id: '1232', fullname: 'Phụ cấp tiền ăn', gender: 'Theo ngày công đi làm', groupSub: '', sub: '', status: 'Áp dụng'},
  {id: '1232', fullname: 'Phụ cấp tiền ăn', gender: 'Theo ngày công đi làm', groupSub: '', sub: '', status: 'Áp dụng'},
  {id: '1232', fullname: 'Phụ cấp tiền ăn', gender: 'Theo ngày công đi làm', groupSub: '', sub: '', status: 'Áp dụng'},
  {id: '1232', fullname: 'Phụ cấp tiền ăn', gender: 'Theo ngày công đi làm', groupSub: '', sub: '', status: 'Áp dụng'},
  {id: '1232', fullname: 'Phụ cấp tiền ăn', gender: 'Theo ngày công đi làm', groupSub: '', sub: '', status: 'Áp dụng'},
])

export default {
  name: 'quanlyhosoluong',
  components: {cTable},
  data: () => {
    return {
      items: someData,
      itemsArray: someData(),
      fields: [
        {key: 'id', label: 'Mã phụ cấp', sortable: true},
        {key: 'fullname', label: 'Tên phụ cấp', sortable: true},
        {key: 'gender', label: 'Loại hưởng', sortable: true},
        {key: 'groupSub', label: 'Công hưởng', sortable: true},
        {key: 'sub', label: 'Ghi chú', sortable: true},
        {key: 'status', label: 'Trạng thái',sortable: true}
      ],
    }
  }
}
</script>
