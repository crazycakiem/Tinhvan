<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        <div class="img-fluid">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjxXK9Q7T1pM8Tik7tuthiF0IafU0VcPhCyav0_iTQmgdfaNUjA"
          >
        </div>
        <!--Hồ sơ nhân viên-->
        <div>
          <ul>
            <li @click="showEditExtension('HS')">Hồ sơ nhân viên</li>
            <li @click="showEditExtension('GCNT')">Gia cảnh người thân</li>
            <li @click="showEditExtension('QTCT')">Quá trình công tác</li>
            <li @click="showEditExtension('QTL')">Quá trình lương</li>
            <li @click="showEditExtension('QTHD')">Quá trình hợp đồng</li>
          </ul>
        </div>
      </div>
      <div class="col-md-10">
        <b-collapse id="showHS" v-model="showHS">
          <b-form>
            <b-row>
              <b-col cols="4">
                <b-button id="btnEdit" type="button" variant="primary" @click="onEdit">Lưu</b-button>
                <!-- <b-button id="btnSaveEmployeeFile" type="button" variant="success" @click="onSaveEmployeeFile">{{  ('SubmitAndContinue')}}</b-button>
                <b-button id="btnResetEdit" type="button" variant="danger" @click="onResetEdit">{{  ('Reset')}}</b-button>-->
              </b-col>
            </b-row>
          </b-form>
          <div>
            <h4 @click="showHSBS('Code')">Hồ sơ nhân viên</h4>
            <b-form class="mform" v-if="showCode">
              <b-row class="mt-3 mb-2">
                <b-col cols="1">
                  <label label-for="txtParent">Tổ chức</label>
                </b-col>
                <b-col cols="2">
                  <!-- <label v-if="EmployeeUpdate.organization!=null">{{EmployeeUpdate.organization.name}}</label> -->
                </b-col>
                <b-col cols="1">
                  <label label-for="txtEmployeeCode">Mã nhân viên</label>
                </b-col>
                <b-col cols="2">
                  <input id="txtEmployeeCode" type="text">
                </b-col>
                <b-col cols="1">
                  <label label-for="txtFirstName">Họ</label>
                </b-col>
                <b-col cols="2">
                  <input id="txtFirstName" type="text">
                </b-col>
                <b-col cols="1">
                  <label label-for="txtLastName">Tên</label>
                </b-col>
                <b-col cols="2">
                  <input id="txtLastName" type="text">
                </b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col cols="1">
                  <label label-for="txtSwipeCode">Mã quẹt thẻ</label>
                </b-col>
                <b-col cols="2">
                  <input id="txtSwipeCode" type="text" ref="parent">
                </b-col>
                <b-col cols="1">
                  <label label-for="txtBirthDay">Ngày sinh</label>
                </b-col>
                <b-col cols="3">
                  <date-picker id="txtBirthDay" lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
                </b-col>
                <b-col cols="2">
                  <label label-for="txtManager">Người quản lý</label>
                </b-col>
                <b-col cols="3">
                  <Autocomplete
                    :items="items"
                    :isAsync="false"
                    ref="autocomplete"
                    :isDisplayFull="false"
                  ></Autocomplete>
                  <b-btn id="btnShowPopUpManager" @click="ShowPopUpManager">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </b-btn>
                </b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col cols="1">
                  <label label-for="cboGender">Giới tính</label>
                </b-col>
                <b-col cols="2">
                  <select id="cboGender">
                    <option v-for="item in dataGender" :key="item.id" :value="item.id">{{item.name}}</option>
                  </select>
                </b-col>
                <b-col cols="2">
                  <label label-for="cboTitle">Chức danh</label>
                </b-col>
                <b-col cols="2">
                  <label
                    id="lbTitle"
                    v-for="item in dataTitle"
                    :key="item.titleId"
                    v-if="EmployeeUpdate.titleId==item.titleId"
                  >{{item.title.name}}</label>
                </b-col>
                <b-col cols="2">
                  <label label-for="cboObject">Dối tượng nhân viên</label>
                </b-col>
                <b-col cols="2">
                  <select id="cboObject">
                    <option v-for="oj in dataEmployeeObject" :key="oj.id" :value="oj.id">{{oj.name}}</option>
                  </select>
                </b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col cols="1">
                  <label label-for="txtID">Chứng minh thư</label>
                </b-col>
                <b-col cols="2">
                  <input id="txtID" type="text">
                </b-col>
                <b-col cols="1">
                  <label label-for="txtDateID">Ngày cấp</label>
                </b-col>
                <b-col cols="3">
                  <date-picker id="txtDateID" lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
                </b-col>
                <b-col cols="1">
                  <label label-for="txtPlaceID">Nơi cấp</label>
                </b-col>
                <b-col cols="2">
                  <input id="txtPlaceID" type="text">
                </b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col cols="2">
                  <label label-for="cboNationality">Quốc tịch</label>
                </b-col>
                <b-col cols="2">
                  <select id="cboNationality" v-on:change="changeNationlity">
                    <option v-for="item in dataNation" :key="item.id" :value="item.id">{{item.name}}</option>
                  </select>
                </b-col>
                <b-col cols="1">
                  <label label-for="cboEthnic">Dân tộc</label>
                </b-col>
                <b-col cols="2">
                  <select id="cboEthnic">
                    <option v-for="item in dataEthnic" :key="item.id" :value="item.id">{{item.name}}</option>
                  </select>
                </b-col>
                <b-col cols="1">
                  <label label-for="cboReligion">Tôn giáo</label>
                </b-col>
                <b-col cols="2">
                  <select id="cboReligion">
                    <option
                      :value="item.id"
                      v-for="item in dataReligion"
                      :key="item.id"
                    >{{item.name}}</option>
                  </select>
                </b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col cols="2">Nơi sinh</b-col>
                <b-col cols="10">
                  <textarea id="txtNoiSinh" cols="100"></textarea>
                </b-col>
                <b-col cols="2">Địa chỉ thường trú</b-col>
                <b-col cols="10">
                  <textarea id="txtDiaChiThuongTru" cols="100"></textarea>
                </b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col cols="2">Thành phó</b-col>
                <b-col cols="2">
                  <select id="cboPerCity" v-on:change="changePerCity">
                    <option
                      v-for="item in dataPerCity"
                      :key="item.id"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                </b-col>
                <b-col cols="2">Quận</b-col>
                <b-col cols="2">
                  <select id="cboPerDistrict" v-on:change="changePerDistrict">
                    <option
                      v-for="item in dataPerDistrict"
                      :key="item.id"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                </b-col>
                <b-col cols="2">Huyện</b-col>
                <b-col cols="2">
                  <select id="cboPerWard">
                    <option
                      v-for="item in dataPerWard"
                      :key="item.id"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                </b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col cols="2">Địa chỉ tạm trú</b-col>
                <b-col cols="10">
                  <textarea id="txtDiaChiTamTru" cols="100"></textarea>
                </b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col cols="2">Thành phố</b-col>
                <b-col cols="2">
                  <select id="cboTempCity" v-on:change="changeTempCity">
                    <option
                      v-for="item in dataTempCity"
                      :key="item.id"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                </b-col>
                <b-col cols="2">Quận</b-col>
                <b-col cols="2">
                  <select id="cboTempDistrict" v-on:change="changeTempDistrict">
                    <option
                      v-for="item in dataTempDistrict"
                      :key="item.id"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                </b-col>
                <b-col cols="2">Huyện</b-col>
                <b-col cols="2">
                  <select id="cboTempWard">
                    <option
                      v-for="item in dataTempWard"
                      :key="item.id"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                </b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col cols="2">Ngày vào công ty</b-col>
                <b-col cols="2"></b-col>
                <b-col cols="2">Ngày vào tập đoàn</b-col>
                <b-col cols="2"></b-col>
                <b-col cols="2">Trạng thái làm việc</b-col>
                <b-col cols="2"></b-col>
              </b-row>
            </b-form>
          </div>
          <div>
            <h4 @click="showHSBS('Email')">Thông tin Email</h4>
            <b-form class="mform mb-3" v-if="showEmail">
              <b-row class="mb-3 mt-3">
                <b-col cols="2">mail công ty</b-col>
                <b-col cols="2">
                  <input id="txtEmailCongTy" type="text">
                </b-col>
                <b-col cols="2">Mail cá nhân</b-col>
                <b-col cols="2">
                  <input id="txtEmailCaNhan" type="text">
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <b-col cols="3">Điện thoại cá nhân 1</b-col>
                <b-col cols="2">
                  <input id="txtSdtDd1" type="text">
                </b-col>
                <b-col cols="3">Điện thoại cá nhân 2</b-col>
                <b-col cols="2">
                  <input id="txtSdtDd2" type="text">
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <b-col cols="3">
                  <input id="cboCDP" type="checkbox">
                  &nbsp;Công đoàn phí
                </b-col>
                <b-col cols="2">Ngày vào công đoàn</b-col>
                <b-col cols="2">
                  <date-picker
                    id="txtNgayVaoCongDoan"
                    lang="en"
                    format="DD-MM-YYYY"
                    :clearable="false"
                  ></date-picker>
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <b-col cols="2">Chức vụ</b-col>
                <b-col cols="2">
                  <input id="txtChucVu" type="text">
                </b-col>
                <b-col cols="2">Nơi vào công đoàn</b-col>
                <b-col cols="2">
                  <input id="txtNoiVao" type="text">
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <b-col cols="3">
                  <input id="cboCDP" type="checkbox">
                  &nbsp; Đảng phí
                </b-col>
                <b-col cols="2">Ngày vào đảng</b-col>
                <b-col cols="2">
                  <date-picker id="txtNgayVaoDang" lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="2">Chức vụ</b-col>
                <b-col cols="2">
                  <input id="txtChucVuDang" type="text">
                </b-col>
                <b-col cols="2">Nơi vào đảng</b-col>
                <b-col cols="2">
                  <input id="txtNoiVaoDang" type="text">
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="2">Tên trường</b-col>
                <b-col cols="2">
                  <select>
                    <option
                      v-for="item in dataTruongDaiHoc"
                      :key="item.id"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                </b-col>
                <b-col cols="2">Trình độ chuyên môn</b-col>
                <b-col cols="2">
                  <select>
                    <option
                      v-for="item in dataTrinhDoChuyenMon"
                      :key="item.id"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                </b-col>
                <b-col cols="2">Diễn giải</b-col>
                <b-col cols="2">
                  <input type="text">
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="2">Trình độ văn hóa</b-col>
                <b-col cols="2">
                  <select>
                    <option
                      v-for="item in dataTrinhDoVanHoa"
                      :key="item.id"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                </b-col>
                <b-col cols="2">Trình độ học vấn</b-col>
                <b-col cols="2">
                  <select>
                    <option
                      v-for="item in dataTrinhDoHocVan"
                      :key="item.id"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                </b-col>
                <b-col cols="2">Hình thức đào tạo</b-col>
                <b-col cols="2">
                  <select>
                    <option
                      v-for="item in dataHinhThucDaoTao"
                      :key="item.id"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                </b-col>
              </b-row>
            </b-form>
          </div>
          <div>
            <h4 @click="showHSBS('TK')">Thông tin tài khoản</h4>
            <b-form class="mform mb-3" v-if="showEmail">
              <b-row class="mb-3 mt-3">
                <b-col cols="2">Mail công ty</b-col>
                <b-col cols="2">
                  <input id="txtEmailCongTy" type="text">
                </b-col>
                <b-col cols="2">Mail cá nhân</b-col>
                <b-col cols="2">
                  <input id="txtEmailCaNhan" type="text">
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <b-col cols="3">Số điện thoại 1</b-col>
                <b-col cols="2">
                  <input id="txtSdtDd1" type="text">
                </b-col>
                <b-col cols="3">Số điện thoại 2</b-col>
                <b-col cols="2">
                  <input id="txtSdtDd2" type="text">
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <b-col cols="3">
                  <input id="cboCDP" type="checkbox">&nbsp;Công đoàn phí
                </b-col>
                <b-col cols="2">Ngày vào công đoàn</b-col>
                <b-col cols="2">
                  <date-picker
                    id="txtNgayVaoCongDoan"
                    lang="en"
                    format="DD-MM-YYYY"
                    :clearable="false"
                  ></date-picker>
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <b-col cols="2">Chức vụ</b-col>
                <b-col cols="2">
                  <input id="txtChucVu" type="text">
                </b-col>
                <b-col cols="2">Nơi vào</b-col>
                <b-col cols="2">
                  <input id="txtNoiVao" type="text">
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <b-col cols="3">
                  <input id="cboCDP" type="checkbox">&nbsp; Đảng phí
                </b-col>
                <b-col cols="2">Ngày vào Đảng</b-col>
                <b-col cols="2">
                  <date-picker id="txtNgayVaoDang" lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="2">Chúc vụ đảng</b-col>
                <b-col cols="2">
                  <input id="txtChucVuDang" type="text">
                </b-col>
                <b-col cols="2">Nơi vào đảng</b-col>
                <b-col cols="2">
                  <input id="txtNoiVaoDang" type="text">
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="2">Tên trường</b-col>
                <b-col cols="2">
                  <select>
                    <option v-for="item in dataTruongDaiHoc" :key="item.id" :value="item.id"></option>
                  </select>
                </b-col>
                <b-col cols="2">Chuyên môn</b-col>
                <b-col cols="2">
                  <select>
                    <option v-for="item in dataTrinhDoChuyenMon" :key="item.id" :value="item.id"></option>
                  </select>
                </b-col>
                <b-col cols="2">Diễn giải</b-col>
                <b-col cols="2">
                  <input type="text">
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="2">Trình độ văn hóa</b-col>
                <b-col cols="2">
                  <select>
                    <option v-for="item in dataTrinhDoVanHoa" :key="item.id" :value="item.id"></option>
                  </select>
                </b-col>
                <b-col cols="2">Trình độ học vấn</b-col>
                <b-col cols="2">
                  <select>
                    <option v-for="item in dataTrinhDoHocVan" :key="item.id" :value="item.id"></option>
                  </select>
                </b-col>
                <b-col cols="2">Hình thức đào tạo</b-col>
                <b-col cols="2">
                  <select>
                    <option
                      v-for="item in dataHinhThucDaoTao"
                      :key="item.id"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                </b-col>
              </b-row>
            </b-form>
          </div>

          <div>
            <h4 @click="showHSBS('TK')">Thông tin tài khoản</h4>
            <b-form class="mform mb-3" v-if="showTK">
              <b-row class="mb-3 mt-3">
                <b-col cols="2">Số tài khoản ngân hàng</b-col>
                <b-col cols="2">
                  <input id="txtSoTK" type="text">
                </b-col>
                <b-col cols="2">Mã số thuế</b-col>
                <b-col cols="2">
                  <input id="txtMaSoThue" type="text">
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <b-col cols="2">Ngân hàng</b-col>
                <b-col cols="2">
                  <select id="cboNganHang" v-on:change="changeBank()">
                    <option v-for="item in dataBank" :key="item.id" :value="item.id">{{item.name}}</option>
                  </select>
                </b-col>
                <b-col cols="2">Chi nhánh ngân hàng</b-col>
                <b-col cols="2">
                  <select id="cboChiNhanh">
                    <option
                      v-for="item in dataBankBranch"
                      :key="item.id"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="1">Visa</b-col>
                <b-col cols="2">
                  <input id="txtViSa" type="text">
                </b-col>
                <b-col cols="1">Nơi cấp</b-col>
                <b-col cols="2">
                  <input id="txtNoiCapViSa" type="text">
                </b-col>
                <b-col cols="1">Ngày cấp</b-col>
                <b-col cols="2">
                  <input id="txtNgayCapViSa" type="text">
                </b-col>
                <b-col cols="1">Ngày hết hạn</b-col>
                <b-col cols="2">
                  <input id="txtNgayHetHanViSa" type="text">
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="1">Giấy phép lao động</b-col>
                <b-col cols="2">
                  <input id="txtGiayPhepLapDong" type="text">
                </b-col>
                <b-col cols="1">Nơi cấp</b-col>
                <b-col cols="2">
                  <input id="txtNoiCapGiayPhepLapDong" type="text">
                </b-col>
                <b-col cols="1">Từ ngày</b-col>
                <b-col cols="2">
                  <input id="txtNgayCapGiayPhepLaoDong" type="text">
                </b-col>
                <b-col cols="1">Đến Ngày</b-col>
                <b-col cols="2">
                  <input id="txtNgayHetHanGiayPhepLaoDong" type="text">
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="1">Ngành nghề</b-col>
                <b-col cols="2">
                  <input id="txtNganhNghe" type="text">
                </b-col>
                <b-col cols="1">Người liên hệ</b-col>
                <b-col cols="2">
                  <input id="txtNguoiLienHe" type="text">
                </b-col>
                <b-col cols="1">Số điện thoại</b-col>
                <b-col cols="2">
                  <input id="txtSDTNguoiLienHe" type="text">
                </b-col>
              </b-row>
            </b-form>
          </div>
          <div>
            <h4 @click="showHSBS('SK')">Thông tin sức khỏe</h4>
            <b-form class="mform" v-if="showSK">
              <b-row>
                <b-col cols="1">Chiều cao</b-col>
                <b-col cols="2">
                  <input id="txtChieuCao" type="text">
                </b-col>
                <b-col cols="1">Cân nặng</b-col>
                <b-col cols="2">
                  <input id="txtCanNang" type="text">
                </b-col>
                <b-col cols="1">Nhóm máu</b-col>
                <b-col cols="2">
                  <input id="txtNhomMau" type="text">
                </b-col>
                <b-col cols="1">Huyết áp</b-col>
                <b-col cols="2">
                  <input id="txtHuyetAp" type="text">
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="1">Tai mũi họng</b-col>
                <b-col cols="2">
                  <input id="txtTaiMuiHong" type="text">
                </b-col>
                <b-col cols="1">Răng hàm mặt</b-col>
                <b-col cols="2">
                  <input id="txtRangHamMat" type="text">
                </b-col>
                <b-col cols="1">Phổi và ngực</b-col>
                <b-col cols="2">
                  <input id="txtPhoiVaNguc" type="text">
                </b-col>
                <b-col cols="1">Tim</b-col>
                <b-col cols="2">
                  <input id="txtTim" type="text">
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="1">Mắt trái</b-col>
                <b-col cols="2">
                  <input id="txtMatTrai" type="text">
                </b-col>
                <b-col cols="1">Mắt phải</b-col>
                <b-col cols="2">
                  <input id="txtMatPhai" type="text">
                </b-col>
                <b-col cols="1">Viêm gan B</b-col>
                <b-col cols="2">
                  <input id="txtViemGanB" type="text">
                </b-col>
                <b-col cols="1">Da và hoa liễu</b-col>
                <b-col cols="2">
                  <input id="txtDaVaHoaLieu" type="text">
                </b-col>
                <b-col cols="1">Loại SỨc khỏe</b-col>
                <b-col cols="2">
                  <input id="txtLoaiSucKhoe" type="text">
                </b-col>
                <b-col cols="1">Ghi chú</b-col>
                <b-col cols="2">
                  <input id="txtGhiChu" type="text">
                </b-col>
              </b-row>
            </b-form>
          </div>

          <!-- <div>
            <b-btn class="fa fa-circle" aria-hidden="true" @click="showHSBS('Code')"></b-btn>
            <b-btn class="fa fa-circle" aria-hidden="true" @click="showHSBS('Email')"></b-btn>
            <b-btn class="fa fa-circle" aria-hidden="true" @click="showHSBS('TK')"></b-btn>
            <b-btn class="fa fa-circle" aria-hidden="true" @click="showHSBS('SK')"></b-btn>
          </div>-->
        </b-collapse>

        <b-collapse id="showGCNT" v-model="showGCNT">
          <EmployeeFamily :Id="Id" v-if="showGCNT"></EmployeeFamily>
        </b-collapse>
        <b-collapse id="showQTCT" v-model="showQTCT">
          <EmployeeWorkingProcess :Id="Id" v-if="showQTCT"></EmployeeWorkingProcess>
        </b-collapse>
        <b-collapse id="showQTL" v-model="showQTL">
          <EmployeeSalaryProcess :Id="Id" v-if="showQTL"></EmployeeSalaryProcess>
        </b-collapse>
        <b-collapse id="showQTHD" v-model="showQTHD">
          <EmployeeContractProcess :Id="Id" v-if="showQTHD"></EmployeeContractProcess>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import DatePicker from "vue2-datepicker";
import _ from "lodash";
import { bus } from "../../../main";
import EmployeeFamily from "./EmployeeFamily";
import EmployeeWorkingProcess from "./EmployeeWorkingProcess";
import EmployeeContractProcess from "./EmployeeContractProcess";
import EmployeeSalaryProcess from "./EmployeeSalaryProcess";
import Autocomplete from "../../tochuc/Autocomplete.vue";
export default {
  name: "EditEmployee",
  components: {
    DatePicker,
    EmployeeFamily,
    EmployeeWorkingProcess,
    EmployeeContractProcess,
    EmployeeSalaryProcess,
    Autocomplete
  },
  data: () => {
    return {
      items: [
        "Hoàng văn hòa",
        "Nguyễn Văn chiến",
        "Hoàng quốc việt ",
        "Dỗ huy cương"
      ],
      Id: "",
      EmployeeUpdate: new Object(),
      showHS: true,
      showCode: true,
      showEmail: false,
      showTK: false,
      showSK: false,
      showGCNT: false,
      showQTCT: false,
      showQTL: false,
      showQTHD: false,
      dataEmployeeObject: [],
      dataGender: [],
      dataTitle: [],
      dataNation: [],
      dataEthnic: [],
      dataReligion: [],
      dataPerCity: [],
      dataPerDistrict: [],
      dataPerWard: [],
      dataTempCity: [],
      dataTempDistrict: [],
      dataTempWard: [],
      dataBank: [],
      dataBankBranch: [],
      dataTruongDaiHoc: [],
      dataTrinhDoChuyenMon: [],
      dataTrinhDoVanHoa: [],
      dataTrinhDoHocVan: [],
      dataHinhThucDaoTao: []
    };
  },
  methods: {
    onSubmit(evt) {
      this.$emit("save");
    },
    async getEmployeeById() {
      //get employee
      const getEmployeeById = new GetEmployeeByID();
      getEmployeeById.id = this.Id;
      await client.get(getEmployeeById).then(res => {
        this.EmployeeUpdate = res;
      });
      if (_.isEqual(this.dataGender.length, 0)) {
        this.dataGender = [
          {
            name: "Nam",
            id: 1
          },
          {
            name: "Nữ",
            id: 2
          }
        ];
      }
      if (_.isEqual(this.dataEmployeeObject.length, 0)) {
        this.dataEmployeeObject = [
          {
            name: "Đối tượng 1",
            id: 1
          },
          {
            name: "Đối tượng 2",
            id: 2
          }
        ];
      }
      if (_.isEqual(this.dataEthnic.length, 0)) {
        //call api lay du lieu
        this.dataEthnic = [
          {
            name: "Phật giáo",
            id: 1
          },
          {
            name: "Thiên chúa giáo",
            id: 2
          }
        ];
      }
      //lay chuc danh theo don vi
      const getOrgtitle = new GetOrgTitles();
      getOrgtitle.orgId = this.EmployeeUpdate.organization.id;
      await client.get(getOrgtitle).then(res => {
        this.dataTitle = [
          {
            name: "Trưởng phòng",
            id: 1
          },
          {
            name: "Lập trình viên",
            id: 2
          }
        ];
      });

      if (_.isEqual(this.dataReligion.length, 0)) {
        //call api lay du lieu
        this.dataReligion = [
          {
            name: "phật giáo",
            id: 1
          },
          {
            name: "Thiên chúa giáo",
            id: 2
          }
        ];
      }
      if (_.isEqual(this.dataNation.length, 0)) {
        //call api lay du lieu
        const getNations = new GetNations();
        await client.get(getNations).then(res => {
          this.dataNation = [
            {
              name: "Việt Nam",
              id: 1
            },
            {
              name: "Lào",
              id: 2
            }
          ];
        });
      }
      //
      if (_.isEqual(this.dataBank.length, 0)) {
        //call api lay du lieu
        this.dataBank = [
          {
            name: "Tech combank",
            id: 1
          },
          {
            name: "Việt tin Bank",
            id: 2
          }
        ];
      }
      if (!_.isNull(this.dataBankBranch)) {
        this.dataBankBranch = [
          {
            name: "Chi nhánh cầu giấy",
            id: 1
          },
          {
            name: "CHi nhánh hà đông",
            id: 2
          }
        ];
      }

      if (!_.isNull(this.dataPerCity)) {
        this.dataPerCity = [
          {
            name: "hà nội",
            id: 1
          },
          {
            name: "Hồ chí minh",
            id: 2
          }
        ];
        this.dataTempCity = this.dataPerCity;
      }
      if (!_.isNull(this.dataPerDistrict)) {
        this.dataPerDistrict = [
          {
            name: "Cầu giấy",
            id: 1
          },
          {
            name: "Hà đông",
            id: 2
          }
        ];
      }
      if (!_.isNull(this.dataTempDistrict)) {
        this.dataTempDistrict = [
          {
            name: "Cầu giấy",
            id: 1
          },
          {
            name: "Hà đông",
            id: 2
          }
        ];
      }
      if (!_.isNull(this.dataPerWard)) {
        this.dataPerWard = [
          {
            name: "Phùng khoang",
            id: 1
          },
          {
            name: "Ngã tư sở",
            id: 2
          }
        ];
      }
      if (!_.isNull(this.dataTempWard)) {
        this.dataTempWard = [
          { name: "Phùng khoang", id: 1 },
          { name: "Ngã tư sở", id: 1 }
        ];
      }
    },
    showEditExtension(evt) {
      if (_.isEqual(evt, "HS")) {
        this.showHS = this.showHS ? false : true;
        this.showGCNT = false;
        this.showQTCT = false;
        this.showQTL = false;
        this.showQTHD = false;
      }
      if (_.isEqual(evt, "GCNT")) {
        this.showHS = false;
        this.showGCNT = this.showGCNT ? false : true;
        this.showQTCT = false;
        this.showQTL = false;
        this.showQTHD = false;
      }
      if (_.isEqual(evt, "QTCT")) {
        this.showHS = false;
        this.showGCNT = false;
        this.showQTCT = this.showQTCT ? false : true;
        this.showQTL = false;
        this.showQTHD = false;
      }
      if (_.isEqual(evt, "QTL")) {
        this.showHS = false;
        this.showGCNT = false;
        this.showQTCT = false;
        this.showQTL = this.showQTL ? false : true;
        this.showQTHD = false;
      }
      if (_.isEqual(evt, "QTHD")) {
        this.showHS = false;
        this.showGCNT = false;
        this.showQTCT = false;
        this.showQTL = false;
        this.showQTHD = this.showQTHD ? false : true;
      }
    },
    showHSBS(evt) {
      if (_.isEqual(evt, "Code")) {
        this.showCode = !this.showCode;
        //   this.showEmail = false;
        //   this.showTK = false;
        //   this.showSK = false;
      } else if (_.isEqual(evt, "Email")) {
        //  this.showCode = false;
        this.showEmail = !this.showEmail;
        //  this.showTK = false;
        //  this.showSK = false;
      } else if (_.isEqual(evt, "TK")) {
        //  this.showCode = false;
        //  this.showEmail = false;
        this.showTK = !this.showTK;
        //    this.showSK = false;
      } else if (_.isEqual(evt, "SK")) {
        // this.showCode = false;
        // this.showEmail = false;
        // this.showTK = false;
        this.showSK = !this.showSK;
      }
    },
    onSaveEmployeeFile() {},
    onEdit() {},
    onResetEdit() {},
    ShowPopUpManager() {},
    changeNationlity() {},
    changePerCity() {},
    changePerDistrict() {},
    changeTempCity() {},
    changeTempDistrict() {}
  }
};
</script>
