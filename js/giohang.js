// JavaScript Document
function giohang(){
	var s="";
	s+='<div><h1>THÔNG TIN GIỎ HÀNG</h1></div><table><tr><td style="width: 250px">Tên Sản Phẩm</td><td style="width: 150px">Đơn Giá</td><td style="width: 90px">Số Lượng</td><td style="width: 150px">Thành Tiền</td><td style="width: 90px">Xóa </td></tr><tbody id="giohang"> </tbody></table>';
	document.getElementById("trangphu").innerHTML=s;
	document.getElementById("footer").style.marginTop = "350px";
	}