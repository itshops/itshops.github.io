// JavaScript Document
function dichvu(){
	var a="";
	a+='<h1 align="center" style="background-color:lightblue; color:#000; padding:20px;margin:0;">DỊCH VỤ</h1>'+
'<div align="center">'+
	'<div style="font-size:20px;padding:10px;">ITS cung cấp các dịch vụ tiện ích  </div>'+
   '<div class="member"> <div class="hinh"><img src="images/chinhhang.PNG" /></div><div class="noidung">cam kết chính hãng 100%</div></div>'+
    '<div class="member"><div class="hinh"><img src="images/baohanh.PNG" /></div><div class="noidung">bảo hành miễn phí tận nhà</div></div>'+
    '<div class="member"><div class="hinh"><img src="images/freemove.PNG" /></div><div class="noidung">miễn phí vận chuyển toàn quốc</div></div>'+
     '<div class="member"><div class="hinh"><img src="images/2h.PNG" /></div><div class="noidung">vận chuyển nhanh chóng trong 2h</div></div></div>';
	 document.getElementById("trangphu").innerHTML=a;
	 document.getElementById("trangphu").style.border ="2px solid #999";
	 document.getElementById("trangphu").style.height="750px";
	}