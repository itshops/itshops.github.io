// JavaScript Document
function mua_ngay() {
    if (localStorage.taikhoanhientai) {
		alert("Đã thanh toán. Bạn đã mua hàng thành công!");
    } else {
        alert("Bạn phải đăng nhập tài khoản.");
        location.assign('index.html');
    }
}
function kt_dangnhap() {
    if (localStorage.taikhoanhientai) {
    	themvaogio();
		alert("Thêm vào giỏ hàng thành công");
    } else {
        alert("Bạn phải đăng nhập tài khoản.");
        window.location.assign('index.html');
    }
}
function thaydoihinh(giatri)
{
	var url =  window.location.href;
	console.log(url);
	var params = url.split('?');
	var masanpham = params[1];
	console.log(masanpham);
	var temp1 = new sanpham();
	for (var i = 0; i < sp.length; i++) {
		if(sp[i].masp == masanpham){
			temp1 = sp[i];
			break;
		}		
	}
	console.log(temp1);
	var hinh1=temp1.hinh;
	hinh1 = hinh1.split(".");
	console.log(hinh1[0]); console.log(hinh1[1]);
	switch(giatri){
		case 0: document.getElementById("hinh_sp").innerHTML='<img src="'+temp1.hinh+'" width="350px" height="350px" />';
				break;
		case 1: document.getElementById("hinh_sp").innerHTML='<img src="'+hinh1[0]+'%1.'+hinh1[1]+'"width="350px" height="350px"/>';		
				break;
		case 2: document.getElementById("hinh_sp").innerHTML='<img src="'+hinh1[0]+'%2.'+hinh1[1]+'"width="350px" height="350px"/>';		
				break;
		case 3: document.getElementById("hinh_sp").innerHTML='<img src="'+hinh1[0]+'%3.'+hinh1[1]+'"width="350px" height="350px"/>';		
				break;
	}
}
function chitietsanpham(){
	var s="";
	s+='<div style="padding-left: 120px; padding-right: 200px;">\
	<div> \
		<div style="width:70px; float:left;"> \
			<div class="imgleft" id="hinh_sp1" onclick="thaydoihinh(1)">  </div>\
		 	<div class="imgleft" id="hinh_sp2" onclick="thaydoihinh(2)">  </div>\
            <div class="imgleft" id="hinh_sp3" onclick="thaydoihinh(3)">  </div>\
			<img src="images/3cham.jpg" class="imgleft" onclick="thaydoihinh(0)"/>\
		</div>\
		<div id="hinh_sp">  </div>\
		<div style="float:left; width:550px"> \
			<p id="ten_sp"> </p>\
			<p id="gia_sp"> gia </p>\
  			<hr/>\
            <p>Khuyến mãi: &nbsp;&nbsp;&nbsp;&nbsp;Thanh toán trực tuyến để nhận được nhiều ưu đãi </p>\
            <hr/>\
  			<p> Vận chuyển: &nbsp;&nbsp;&nbsp;&nbsp; <img src="images/freeship.jpg" width="36" height="32"/> Miễn phí vận chuyển</p>\
  			<hr/>\
  			<button id="mua_ngay" onclick="mua_ngay()"> <b> Mua Ngay </b> </button>\
  			<button id="gio_hang" onclick="kt_dangnhap()"> <b>Đưa vào giỏ hàng </b></button> \
		</div>\
	</div>\
	<div id="div-chitietsp_khuyenmai" > \
		<table >\
        	<tr > \
            	<td id="cauhinhchitiet"> <b> CẤU HÌNH CHI TIẾT </b></td>\
            	<td id="khuyenmaihapdan"> KHUYẾN MÃI HẤP DẪN </td>\
            </tr>\
            <tr>\
            	<td>\
                    <div class="ten_thongso">Thời gian bảo hành: </div>  <div id="baohanh" class="cacthongso_sp"> </div>\
                    <hr style="clear:both;"/>\
                    <div class="ten_thongso">Thương hiệu: </div>   <div id="thuonghieu" class="cacthongso_sp"> </div>\
                    <hr style="clear:both;"/>\
                    <div class="ten_thongso">Màn hình: </div>  <div id="monitor" class="cacthongso_sp"> </div> \
					<hr style="clear:both;"/>        <div class="ten_thongso"> CPU: </div>  <div id="cpu" class="cacthongso_sp"> </div><hr style="clear:both;"/><div class="ten_thongso">RAM: </div>  <div id="ram" class="cacthongso_sp"> </div> \
                    <hr style="clear:both;"/><div class="ten_thongso">Chip đồ họa: </div>  <div id="graphics" class="cacthongso_sp"> </div>\
                    <hr style="clear:both;"/><div class="ten_thongso">Cổng kết nối: </div> <div id="cong" class="cacthongso_sp"> </div> <hr style="clear:both;"/>         \
                    <div class="ten_thongso">Lưu trữ: </div> <div id="harddisk" class="cacthongso_sp"> </div>\
                    <hr style="clear:both;"/>\
                    <div class="ten_thongso">Kết nối không dây: </div> <div class="cacthongso_sp">WiFi 802.11ac, Bluetooth 5.0 </div>\
                    <hr style="clear:both;"/>\
                    <div class="ten_thongso">Bàn phím: </div>   <div id="phim" class="cacthongso_sp"> </div>\
                    <hr style="clear:both;"/>\
                    <div class="ten_thongso">Hệ điều hành: </div>    <div id="os" class="cacthongso_sp"> </div>\
                    <hr style="clear:both;"/>\
                    <div class="ten_thongso">Pin: </div>   <div id="pin" class="cacthongso_sp"> </div>\
                    <hr style="clear:both;"/>\
                    <div class="ten_thongso">Khối lượng: </div>   <div id="kl" class="cacthongso_sp"> </div>\
                    <hr style="clear:both;"/>\
                </td>\
                <td style="padding-left: 30px;" id="nd_khuyenmai"> \
                    <b>Quà tặng kèm khi mua sản phẩm:</b>\
                    <ul>\
                    <li>1 Miếng lót chuột Kingmaster Q6 (từ 01/11/2018 đến hết 30/12/2018).</li>\
                    <li>1 Chuột máy tính Logitech M331 (Đỏ) (từ 01/11/2018 đến hết 30/12/2018).</li><li>1 Túi đựng laptop.</li> \
                    </ul>\
                </td>\
            </tr>\
        </table>\
	</div>';
	document.getElementById("trangphu").innerHTML=s;
	}