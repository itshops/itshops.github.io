// JavaScript Document
function hienthitaikhoan()
{
	if(localStorage.taikhoanhientai)
	{
		if(localStorage.sovao)
		{
			localStorage.sovao = parseInt(localStorage.getItem('sovao'))+1;
			
		}
		else{
			localStorage.sovao = 1;
		}

		var i = parseInt(localStorage.sohieutaikhoan);
		var hoten = "hoten"+i;
		var s = '<div  style="float:left; padding:40px 3%;width:28%; position:static;color:red;text-align:center;"><strong style="font-size:25px;">'+localStorage.getItem(hoten)+'</strong></div>'+
           ' <div class="labeldangxuat"><a href="#" onclick="xoahienthitaikhoan();"><strong>Đăng Xuất</strong></a></div>';
		   document.getElementById('hienthidangnhap').innerHTML = s;
		  if(localStorage.sovao == 1) alert("chào mừng "+localStorage.getItem(hoten)+" đến với Itshop");
	}
	

}
function xoahienthitaikhoan()
{
	localStorage.sovao = 0;
	var s ='<div style="float:left; padding:20px 3%;width:25%; position:static;"><a href="#" onclick="dangky()"><img src="images/Dangkivadangnhap.png"/><strong>Đăng Kí</strong></a></div><div style="float:left; padding:20px 3%;width:28%;"><a href="#" onclick="dangnhap()"><img src="images/Dangkivadangnhap.png"/><strong>Đăng Nhập</strong></a></div>'
            
	document.getElementById("hienthidangnhap").innerHTML = s;
	localStorage.removeItem('taikhoanhientai');
	localStorage.removeItem('matkhauhientai');
            
}
