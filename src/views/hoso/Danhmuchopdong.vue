<template>
  <div class="animated fadeIn">

    <b-row>
      <b-col lg="12">
        <b-card class="card-de1">
           <div class="panel-title-de1">
             <div>
              <h4>Danh mục hợp đồng</h4>
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
  {id: '1232', fullname: 'Hợp đồng xác định thời hạn 24 tháng', gender: '24', groupSub: '', sub: '', status: 'Áp dụng', _rowVariant: 'success'},
  {id: '1232', fullname: 'Hợp đồng xác định thời hạn 36 tháng', gender: '36', groupSub: '', sub: '', status: 'Ngưng áp dụng'},
  {id: '1232', fullname: 'Hợp đồng xác định thời hạn 48 tháng', gender: '48', groupSub: '', sub: '', status: 'Áp dụng'},
  {id: '1232', fullname: 'Hợp đồng xác định thời hạn 1 tháng', gender: '1', groupSub: '', sub: '', status: 'Áp dụng'},
  {id: '1232', fullname: 'Hợp đồng xác định thời hạn 3 tháng', gender: '3', groupSub: '', sub: '', status: 'Áp dụng'},
  {id: '1232', fullname: 'Hợp đồng xác định thời hạn 5 tháng', gender: '5', groupSub: '', sub: '', status: 'Áp dụng'},
  {id: '1232', fullname: 'Hợp đồng xác định thời hạn 7 tháng', gender: '7', groupSub: '', sub: '', status: 'Áp dụng'},
])

export default {
  name: 'danhmuchopdong',
  components: {cTable},
  data: () => {
    return {
      items: someData,
      itemsArray: someData(),
      fields: [
        {key: 'id', label: 'Mã loại hợp đồng', sortable: true},
        {key: 'fullname', label: 'Tên loại hợp đồng', sortable: true},
        {key: 'gender', label: 'Thời hạn loại hợp đồng', sortable: true},
        {key: 'sub', label: 'Ghi chú', sortable: true},
        {key: 'status', label: 'Trạng thái',sortable: true}
      ],
    }
  }
}
</script>
