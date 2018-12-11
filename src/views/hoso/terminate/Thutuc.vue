<template>
  <div>
    <b-form v-on:submit.prevent>
      <b-row>
        <h5>Thủ tục bàn giao</h5>
      </b-row>
      <b-row>
        <b-col cols="2">
          <input type="checkbox" id="cbxTicket" value="One">
          <label for="one">Thẻ gửi xe</label>
        </b-col>

        <b-col cols="1">
          <label for="one" style="float:right">Ngày trả</label>
        </b-col>
        <b-col cols="2">
          <date-picker
            id="txtvehicleReturnDate"
            lang="en"
            format="DD-MM-YYYY"
            :clearable="false"
            placeholder="Select Day"
          ></date-picker>
        </b-col>
        <b-col cols="1">
          <label label-for="txtvehicleAmount" style="float:right">Tiền</label>
        </b-col>
        <b-col cols="2">
          <input id="txtvehicleAmount" type="text">
        </b-col>

        <b-col cols="1">
          <label label-for="txtvehicleStatus" style="float:right">Trạng thái</label>
        </b-col>
        <b-col cols="2">
          <input id="txtvehicleStatus" type="text">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <input id="cbxTicket" type="checkbox" value="One">
          <label for="one">Thẻ nhân viên</label>
        </b-col>

        <b-col cols="1">
          <label for="one" style="float:right">Ngày trả</label>
        </b-col>
        <b-col cols="2">
          <date-picker
            id="txtvehicleReturnDate"
            lang="en"
            format="DD-MM-YYYY"
            :clearable="false"
            placeholder="Select Day"
          ></date-picker>
        </b-col>
        <b-col cols="1">
          <label label-for="txtemployeeIdAmount" style="float:right">Tiền</label>
        </b-col>
        <b-col cols="2">
          <input id="txtemployeeIdAmount" type="text">
        </b-col>

        <b-col cols="1">
          <label label-for="txtemployeeIdStatus" style="float:right">Trạng thái</label>
        </b-col>
        <b-col cols="2">
          <input id="txtemployeeIdStatus" type="text">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <input type="checkbox" id="cbxTicket" value="One">
          <label for="one">Thẻ bảo hiểm</label>
        </b-col>

        <b-col cols="1">
          <label for="one" style="float:right">Ngày trả</label>
        </b-col>
        <b-col cols="2">
          <date-picker
            id="txtvehicleReturnDate1"
            lang="en"
            format="DD-MM-YYYY"
            :clearable="false"
            placeholder="Select Day"
          ></date-picker>
        </b-col>
        <b-col cols="1">
          <label label-for="txtinsuranceAmount" style="float:right">Tiền</label>
        </b-col>
        <b-col cols="2">
          <input id="txtinsuranceAmount" type="text">
        </b-col>

        <b-col cols="1">
          <label label-for="txtinsuranceStatus" style="float:right">Trạng thái</label>
        </b-col>
        <b-col cols="2">
          <input id="txtinsuranceStatus" type="text">
        </b-col>
      </b-row>
      <hr>
      <b-row>
        <b-col cols="6">
          <h5>Nghĩa vụ</h5>
        </b-col>
        <b-col cols="6">
          <h5>Quyền lợi</h5>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <label label-for="txtunlawTerPenalties" style="float:right">Phạt chấm dứt trái luật</label>
        </b-col>
        <b-col cols="4">
          <input id="txtunlawTerPenalties" type="text">
        </b-col>
        <b-col cols="2">
          <label label-for style="float:right">Số phép còn lại</label>
        </b-col>
        <b-col cols="4">
          <input id type="number">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <label label-for="txtheraldPenalties" style="float:right">Phạt thời hạn báo trước</label>
        </b-col>
        <b-col cols="4">
          <input id="txtheraldPenalties" type="text">
        </b-col>
        <b-col cols="2">
          <label label-for style="float:right">Tiền thanh toán phép</label>
        </b-col>
        <b-col cols="4">
          <input id="txtleavePayment" type="text">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <label label-for style="float:right">Tạm ứng</label>
        </b-col>
        <b-col cols="4">
          <input id="vl" type="text">
        </b-col>
        <b-col cols="2">
          <label label-for="txtleaveCompenRemains" style="float:right">Số ngày nghỉ bù còn lại</label>
        </b-col>
        <b-col cols="4">
          <input id="txtleaveCompenRemains" type="number">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <label label-for style="float:right">Đồng phục bồi hoàn</label>
        </b-col>
        <b-col cols="4">
          <input id="vl1" type="text">
        </b-col>
        <b-col cols="2">
          <label label-for="txtleaveCompenPayment" style="float:right">Tiền thanh toán nghỉ bù</label>
        </b-col>
        <b-col cols="4">
          <input id="txtleaveCompenPayment" type="text">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <label label-for="txtTrainningCost" style="float:right">Phí đào tạo</label>
        </b-col>
        <b-col cols="4">
          <input id="txtTrainningCost" type="text">
        </b-col>
        <b-col cols="2">
          <label label-for="txtseveranceAllowance" style="float:right">Trợ cấp thôi việc</label>
        </b-col>
        <b-col cols="4">
          <input id="txtseveranceAllowance" type="text">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <label label-for style="float:right">Số tiền truy thu</label>
        </b-col>
        <b-col cols="4">
          <input id="Id4" type="text">
        </b-col>
        <b-col cols="2">
          <label label-for style="float:right">Lương truy lĩnh</label>
        </b-col>
        <b-col cols="4">
          <input id type="text">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <label label-for="txtotherFinaOblig" style="float:right">Nghĩa vụ tài chính khác</label>
        </b-col>
        <b-col cols="4">
          <input id="txtotherFinaOblig" type="text">
        </b-col>
        <b-col cols="2">
          <label label-for style="float:right">Tổng Quyền lợi</label>
        </b-col>
        <b-col cols="4">
          <label ref="sumNV"></label>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <label label-for style="float:right">Tổng nghĩa vụ</label>
        </b-col>
        <b-col cols="4">
          <label ref="sumQL"></label>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <label label-for style="float:right">Ghi chú</label>
        </b-col>
        <b-col cols="10">
          <textarea rows="4" style="width:100%;"></textarea>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <b-button id="btnSubmit" type="button" variant="primary" style="float:right">
            <span class="fa fa-save"></span>
            lưu
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>
<script>
import DatePicker from "vue2-datepicker";
export default {
  name: "Thutuc",
  components: { DatePicker }
};
</script>

