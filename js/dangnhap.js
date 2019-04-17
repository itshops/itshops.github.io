// JavaScript Document
function kt1()
{
	var tk=document.getElementById("user");
	var mk=document.getElementById("pass");
	var tkad='admin';
	var mkad='admin';
	var hoten0 ='admin';
	if(tk.value=="")
	{
		alert("Ban chua nhap tai khoan");
		tk.focus();
		return ;
	}
	else
	if(mk.value=="")
	{
		alert("Ban chua nhap mat khau");
		mk.focus();
		return ;
	}
	else
	if((tk.value == tkad) && (mk.value == mkad))
	{
		alert("Đăng nhập tài khoản admin thành công");
		localStorage.taikhoanhientai = tkad;
		localStorage.matkhauhientai = mkad;
		localStorage.hoten0=hoten0;
		location.assign("admin/admin1.html");
		localStorage.sohieutaikhoan = 0;
		return;
		
		
	}
	else
	 {
		 var tamtk;
		 var tammk;
		 
		 	for(var i = 1 ; i <= parseInt(localStorage.numberuser) ; i++)
			{
				
				tamtk = "tendangnhap"+i;
				tammk = "matkhau"+i;
				if((tk.value == localStorage.getItem(tamtk)) && (mk.value == localStorage.getItem(tammk)))
				{
					window.alert("Thành công.");
					localStorage.taikhoanhientai = localStorage.getItem(tamtk);
					localStorage.matkhauhientai = localStorage.getItem(tammk);
					localStorage.sohieutaikhoan = i;
					
					window.location.reload();
					
					return ;					
				}
			}
		
			
			window.alert("tài khoản hoặc mật khẩu không chính xác");	
			return;		
	 }
	
}

function dangnhap(){
	var s="";
	s+='<form method="post" action=""  ><div align="center"><div id="dau1" >ĐĂNG NHẬP TÀI KHOẢN</div><div><div> <input type="text" name="user" id="user" class="khung1" placeholder="Tài khoản" style="margin-top:50px" required="required"/><br /></div><div><input type="password" name="pass" id="pass" class="khung1" placeholder="Mật khẩu"  style="margin-top:50px" required="required"/><br /></div><div style="clear:both"><div class="forgetpassword"> <a href="#" onclick="dangky()" >Tạo tài khoản mới</a></div><div class="dangnhap1"><input type="submit" name="dn" id="dn" value="Đăng Nhập" class="nutdn" onclick="event.preventDefault();kt1()" required="required"/><div style="clear:both"></div></div></div><div>  </div></form>';
	document.getElementById("trangphu").innerHTML=s;
	document.getElementById("trangphu").style.border="2px solid #999";
	document.getElementById("trangphu").style.height="500px";
	document.getElementById("trangphu").style.background="url(../images/Dangkivadangnhap4.png)";
	}