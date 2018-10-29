<template>
  <div class="animated fadeIn">

    <b-row>
      <b-col lg="12">
        <b-card class="card-de1">
           <div class="panel-title-de1">
             <div>
              <h4>Hồ sơ nhân viên</h4>
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
  {id: '1232', fullname: 'Samppa Nori', gender: 'Nam', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ', _rowVariant: 'success'},
  {id: '1233', fullname: 'Samppa Nori a', gender: 'Nam', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1234', fullname: 'Samppa Nori v', gender: 'Nữ', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1235', fullname: 'Samppa Nori b', gender: 'Nam', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1236', fullname: 'Samppa Nori a', gender: 'Nữ', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1237', fullname: 'Samppa Nori s', gender: 'Nam', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1238', fullname: 'Samppa Nori', gender: 'Nam', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1239', fullname: 'Samppa Nori', gender: 'Nữ', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1231', fullname: 'Samppa Nori', gender: 'Nam', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1211', fullname: 'Samppa Nori', gender: 'Nữ', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1212', fullname: 'Samppa Nori', gender: 'Nam', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1213', fullname: 'Samppa Nori', gender: 'Nữ', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1214', fullname: 'Samppa Nori', gender: 'Nam', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1216', fullname: 'Samppa Nori', gender: 'Nam', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1215', fullname: 'Samppa Nori', gender: 'Nam', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1217', fullname: 'Samppa Nori', gender: 'Nam', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1218', fullname: 'Samppa Nori', gender: 'Nam', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1219', fullname: 'Samppa Nori', gender: 'Nam', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1222', fullname: 'Samppa Nori', gender: 'Nam', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1221', fullname: 'Samppa Nori', gender: 'Nam', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'},
  {id: '1220', fullname: 'Samppa Nori', gender: 'Nam', groupSub: 'BA', sub: 'BA Staff', dept: 'Công nghệ', obj: 'Front', status: 'Đã nghỉ'}
])

export default {
  name: 'hosonhanvien',
  components: {cTable},
  data: () => {
    return {
      items: someData,
      itemsArray: someData(),
      fields: [
        {key: 'id', label: 'Mã nhân viên', sortable: true},
        {key: 'fullname', label: 'Tên nhân viên', sortable: true},
        {key: 'gender', label: 'Giới tính', sortable: true},
        {key: 'groupSub', label: 'Nhóm chức danh', sortable: true},
        {key: 'sub', label: 'Chức danh', sortable: true},
        {key: 'dept', label: 'Phòng ban', sortable: true},
        {key: 'obj', label: 'Đối tượng', sortable: true},
        {key: 'status', label: 'Trạng thái',sortable: true}
      ],
    }
  }
}
</script>
