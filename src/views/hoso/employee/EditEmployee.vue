<template>
  <div>
    <div class="row">
      <div class="col-md-3 left-col-pro">
       <div class="block-link-pro">
        <div class="img-fluid avt-block">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjxXK9Q7T1pM8Tik7tuthiF0IafU0VcPhCyav0_iTQmgdfaNUjA"
          >
        </div>
        <!--Hồ sơ nhân viên-->
        <div class="list-function">
          <ul>
            <li @click="showEditExtension('HS')"><span class="label">Hồ sơ nhân viên</span></li>
            <hr>
            <li @click="showEditExtension('GCNT')" class="active"><span class="label">Gia cảnh người thân</span></li>
            <hr>
            <li @click="showEditExtension('QTCT')"><span class="label">Quá trình công tác</span></li>
            <hr>
            <li @click="showEditExtension('QTL')"><span class="label">Quá trình lương</span></li>
            <hr>
            <li @click="showEditExtension('QTHD')"><span class="label">Quá trình hợp đồng</span></li>
          </ul>
        </div>
       </div>
      </div>
      <div class="col-md-9 right-col-pro">
       <div class="block-main-pro">
        <b-collapse id="showHS" v-model="showHS">
         <b-form>
          <b-card class="card-de2">
           <div slot="header">
             <strong @click="showHSBS('Code')">Hồ sơ nhân viên</strong>
           </div>
           <div class="mform" v-if="showCode">
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="txtOrg">Tổ chức</label>
                  <div class="input-popup">
                   <b-form-input readonly type="text" id="txtOrg" ref="txtOrg" placeholder=""></b-form-input>
                   <b-btn id="btnShowOrg" @click="showOrg">
                     <i class="fa fa-search" aria-hidden="true"></i>
                   </b-btn>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Mã nhân viên</label>
                  <b-form-input type="text" id="ip3" placeholder="ex: 1234"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Họ</label>
                  <b-form-input type="text" id="" placeholder=""></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Tên</label>
                  <b-form-input type="text" id="" placeholder=""></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="ip6">Ngày sinh</label>
                  <div class="form-box-control">
                    <date-picker lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="ip7">Người quản lý</label>
                  <div class="input-popup">
                   <Autocomplete :items="items" :isAsync="false" ref="autocomplete" :isDisplayFull="false"></Autocomplete>
                   <b-btn id="btnShowPopUpManager" @click="ShowPopUpManager">
                     <i class="fa fa-search" aria-hidden="true"></i>
                   </b-btn>
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Giới tính</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Chức danh</label>
                  <b-form-input type="text" id="" placeholder=""></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Đối tượng nhân viên</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
             <b-col sm="4">
               <b-form-group>
                 <label for="">Số chứng minh thư</label>
                 <b-form-input type="text" id="ip8" placeholder="ex: 2123"></b-form-input>
               </b-form-group>
             </b-col>
             <b-col sm="4">
               <b-form-group>
                 <label for="">Ngày cấp</label>
                 <div class="form-box-control">
                   <date-picker lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
                 </div>
               </b-form-group>
             </b-col>
             <b-col sm="4">
               <b-form-group>
                 <label for="">Nơi cấp</label>
                 <div class="form-box-control">
                   <b-form-select
                     size="lg"
                     :plain="true"
                     id=""
                     :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                     value="Please select">
                   </b-form-select>
                 </div>
               </b-form-group>
             </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Quốc tịch</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Dân tộc</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Tôn giáo</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="6">
                <b-form-group>
                  <label for="">Nơi sinh</label>
                  <b-form-textarea
                    id="textarea1"
                    placeholder=""
                    :rows="3"
                    :max-rows="6">
                  </b-form-textarea>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group>
                  <label for="">Địa chỉ thường trú</label>
                  <b-form-textarea
                    id="textarea1"
                    placeholder=""
                    :rows="3"
                    :max-rows="6">
                  </b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Thành phố</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Quận</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Huyện</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="6">
                <b-form-group>
                  <label for="">Địa chỉ tạm trú</label>
                  <b-form-textarea
                    id="textarea1"
                    placeholder=""
                    :rows="3"
                    :max-rows="6">
                  </b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Thành phố</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Quận</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Huyện</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
               <b-form-group>
                 <label for="">Ngày vào công ty</label>
                 <b-form-input type="text" id="" placeholder=""></b-form-input>
               </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Ngày vào tập đoàn</label>
                  <b-form-input type="text" id="" placeholder=""></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Trạng thái làm việc</label>
                  <b-form-input type="text" id="" placeholder=""></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <div slot="footer">
              <b-button id="btnEdit" type="button" variant="primary" @click="onEdit">Lưu</b-button>
            </div>
           </div>
          </b-card>
         </b-form>
         <b-form>
          <b-card class="card-de2">
           <div slot="header">
             <strong @click="showHSBS('Email')">Thông tin Email</strong>
           </div>
           <div class="mform" v-if="showEmail">
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Mail công ty</label>
                  <b-form-input type="text" id="" placeholder="ex: 1234"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Mail cá nhân</label>
                  <b-form-input type="text" id="" placeholder="ex: 1234"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Điện thoại cá nhân 1</label>
                  <b-form-input type="text" id="" placeholder=""></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Điện thoại cá nhân 2</label>
                  <b-form-input type="text" id="" placeholder="ex: 1234"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                 <label for="">&nbsp;</label>
                  <b-form-checkbox id="cboCDP1">Công đoàn phí</b-form-checkbox>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Ngày vào công đoàn</label>
                  <div class="form-box-control">
                    <date-picker lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Chức vụ</label>
                  <b-form-input type="text" id="" placeholder="ex: 1234"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Nơi vào công đoàn</label>
                  <b-form-input type="text" id="" placeholder="ex: 1234"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                 <label for="">&nbsp;</label>
                  <b-form-checkbox stacked id="cboCDP">Đảng phí</b-form-checkbox>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Ngày vào đảng</label>
                  <div class="form-box-control">
                    <date-picker lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Chức vụ</label>
                  <b-form-input type="text" id="" placeholder="ex: 1234"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Nơi vào đảng</label>
                  <b-form-input type="text" id="" placeholder="ex: 1234"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Tên trường</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Trình độ chuyên môn</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Diễn giải</label>
                  <b-form-input type="text" id="" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Trình độ văn hoá</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Trình độ học vấn</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Hình thức đào tạo</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
           </div>
          </b-card>
         </b-form>
         <b-form>
          <b-card class="card-de2">
           <div slot="header">
             <strong @click="showHSBS('TK')">Thông tin tài khoản</strong>
           </div>
           <div class="mform" v-if="showTK">
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Số chứng tài khoản ngân hàng</label>
                  <b-form-input type="text" id="ip8" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Mã số thuế</label>
                  <b-form-input type="text" id="ip8" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Ngân hàng</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Chi nhánh ngân hàng</label>
                  <div class="form-box-control">
                    <b-form-select
                      size="lg"
                      :plain="true"
                      id=""
                      :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                      value="Please select">
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Visa</label>
                  <b-form-input type="text" id="ip8" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Nơi cấp</label>
                  <b-form-input type="text" id="ip8" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Ngày cấp</label>
                  <div class="form-box-control">
                    <date-picker lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Ngày hết hạn</label>
                  <div class="form-box-control">
                    <date-picker lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Giấy phép lao động</label>
                  <b-form-input type="text" id="ip8" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Nơi cấp</label>
                  <b-form-input type="text" id="ip8" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Từ ngày</label>
                  <div class="form-box-control">
                    <date-picker lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
                  </div>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Đến ngày</label>
                  <div class="form-box-control">
                    <date-picker lang="en" format="DD-MM-YYYY" :clearable="false"></date-picker>
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Ngành nghề</label>
                  <b-form-input type="text" id="" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Người liên hệ</label>
                  <b-form-input type="text" id="" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Số điện thoại</label>
                  <b-form-input type="text" id="" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
           </div>
          </b-card>
         </b-form>
         <b-form>
          <b-card class="card-de2">
           <div slot="header">
             <strong @click="showHSBS('SK')">Thông tin sức khỏe</strong>
           </div>
           <div class="mform" v-if="showSK">
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Chiều cao</label>
                  <b-form-input type="text" id="ip8" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Cân nặng</label>
                  <b-form-input type="text" id="" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Nhóm máu</label>
                  <b-form-input type="text" id="ip8" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Huyết áp</label>
                  <b-form-input type="text" id="" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Tai mũi họng</label>
                  <b-form-input type="text" id="" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Răng hàm mặt</label>
                  <b-form-input type="text" id="" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Phổi và ngực</label>
                  <b-form-input type="text" id="" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Tim</label>
                  <b-form-input type="text" id="" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Mắt trái</label>
                  <b-form-input type="text" id="" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Mắt phải</label>
                  <b-form-input type="text" id="" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Viêm gan B</label>
                  <b-form-input type="text" id="" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Da và hoa liễu</label>
                  <b-form-input type="text" id="" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="">Loại sức khoẻ</label>
                  <b-form-input type="text" id="" placeholder="ex: 2123"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="8">
                <b-form-group>
                  <label for="">Ghi chú</label>
                  <b-form-textarea
                    id="textarea1"
                    placeholder=""
                    :rows="3"
                    :max-rows="6">
                  </b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>
           </div>
          </b-card>
         </b-form>
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
