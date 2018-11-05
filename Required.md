==== Hồ sơ nhân viên
trong màn hình danh sách hồ sơ nhân viên
+) khi click vào tìm kiếm cạnh nút thêm mới thì hiển thị 1 vùng trước table cho tìm kiếm cơ bản và tìm kiếm nâng cao
+) khi click vào tìm kiếm cơ bản (basic) thì hiển thị ra 1 select cho phép chọn nhiều . tùy vào từng trường mà người dùng chọn sẽ show ra số lượng tiêu chí cơ bản và ô text nhập cho người dùng (tìm kiếm chính xác)
+) khi click vào advance( nâng cao ) sẽ hiển thị ra select người dùng chọn thì hiển thị y như demo mà em làm cho anh xem
+) em có tích hợp vue table 2 vào rồi nhưng bọn em ko dùng cái filter mặc định của nó nên anh dùng css ẩn nó đi hộ em ! vue talbe 2 co thuộc tính ẩn phần này nhưng nếu sử dụng config của họ thì bảng sẽ mất đi hoàn toàn chức năng search nên em mới nhờ anh dùng css để ẩn 
+) ngoài ra còn 1 dropdow để show ra số lượng bản ghi muốn xem của bảng nhưng nó nằm cùng trong phần filter này nên anh có thể ẩn đi hộ em luôn ! anh có thể bố trí cho em 1 dropdown để show ra số lượng bản ghi muốn hiển thị trên bảng em có thể dùng sự kiện gọi đên vue talbe để hiển thị được 
+) khi check vào 1 bản ghi trên bảng thì mới hiển thị các button xóa nhiều , áp dụng , ngừng áp dụng với bản ghi đó như em demo (có màn hình thì các nút có cả nút in , xuất excel)
+) có 1 nút hiển thị sơ đồ tổ chức phía bên phải để search nhân viên theo tổ chức

==== Inline table ( Tham số hệ thông)
+) EM có demo 1 cái talbe đặc biệt 1 chút theo kiểu insert bản ghi trực tiếp trên bảng khi anh lick vào nút thêm mới sẽ chèn thêm 1 row vào trên cùng của bảng
+) các trường trong bảng có đủ các kiểu dữ liệu từ datepicker texbox, check box hay dropdown list
+)có phần search như em demo trên khi click thì ẩn hiện vùng search
+) vẫn sử dụng vue talbe 2  . 1/3 màn hình hiện tại của em đang sử dụng kiểu insert inline table như thế này
+) khi search theo tiêu chí nào sẽ hiển thị tiêu đó đó cùng dấu x . trên hộp search . khi click vào dấu x sẽ hủy bỏ tìm kiếm theo tiêu chý ấy . có thể search theo các tiêu chý đc cấu hình trong hộp 

==================== ) phần autocomplete ( khi chọn người quản lý trong thêm tổ chức)
+) anh style cho em cái màn hionhf autocomplete cho đẹp
+) chọn người quản lý có 2 cách chọn qua autocomplete hoặc click vào button chọn người quản lý thì show lên pop up cho việc chọn người quản lý 
 bên trái là cây sơ đồ tổ chức , bên phải là bảng danh sách nhân viên của phòng ban đó ! trên cùng hỗ trợ lọc theo 1 số tiêu chí đơn giản  như ô text để nhập họ tên, mã nhân viên , chức danh  và 1 nút tìm kiếm để lọc dữ liệu hiển thị qua bảng