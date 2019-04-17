// JavaScript Document
function kt ()
	{
		var pattern = /[^0-9_\$\&\*()\#\@\!\~\"\?\:\;\,\.\+\-]/img;
		var pattern1 = /[^A-z]/img;
		
		
		var kiemtra = document.getElementsByName("dk");
			
			if(kiemtra[0].value == "")
			{
				alert("Họ tên không được để trống");
				kiemtra[0].focus();
				return ;
			}
			else
			if(pattern.test(kiemtra[0].value) == false)
			{
				alert("Họ tên không được chứa kí tự đặc biệt");
				kiemtra[0].focus();
				return;
			}
			else
			if(kiemtra[1].value =="")
			{
				alert("Tên đăng nhập không được bỏ trống");
				kiemtra[1].focus();
				return;
			}
			else
			if(pattern1.test(kiemtra[1].value) == true)
			{
				alert("Tên đăng nhập không được có ký tự đặc biệt");
				test[1].focus();
				return;
			}
			else
			if(kiemtra[2].value.length < 5 || kiemtra[2].value.length>16)
			{
				 alert("Mật khẩu có độ dài 5-16 ký tự");
				 kiemtra[2].focus(); 		
				 return 0;
			}
			else
			if(kiemtra[3].value == "")
			{
				alert("Nhập lại mật khẩu không được để trống");
				kiemtra[3].focus();
				return ;
			}
			if(kiemtra[2].value != kiemtra[3].value)
			{
				 alert("Nhập lại mật khẩu không đúng."); 
				 kiemtra[3].focus(); 
				 return ;
			}
			else
			if(kiemtra[4].value == "" )
			{
				alert("Vui lòng nhập số điện thoại.");
				kiemtra[4].focus();
				 return ;
			} 	
			else
			if(kiemtra[4].value.length > 10 || kiemtra[4].value.length < 10)
			{
				alert("Số điện thoại bạn nhập vào không đúng");
				kiemtra[4].focus();
				return ;
			}
			else
			if(isNaN (kiemtra[4].value))
			{
				alert("SĐT nhập không đúng định dạng"); 
				kiemtra[4].focus(); 
				return 0;
			}
			else
			if(kiemtra[5].value == "" )
			{
				alert("Email không được bỏ trống ");
				kiemtra[5].focus(); 
				return ;
			}
			
			
			else
			{
				
				for(var i = 1 ; i <= parseInt(localStorage.numberuser) ; i++)
				{
				
					tamtk = "tendangnhap"+i;
					tammk = "matkhau"+i;
					if((kiemtra[1].value == localStorage.getItem(tamtk)))
					{
						
						alert("tài khoản đã có người sủ dụng");
						kiemtra[1].focus();
						return ;					
					}
				}
			}
				if(localStorage.numberuser)
					{
						localStorage.numberuser = parseInt(localStorage.numberuser)+1;
					}
				else
					{
						
						localStorage.numberuser = 1;
						
					}
				alert("Đăng kí thành công. Mời bạn đăng nhập!");
				var tendangnhap = "tendangnhap"+localStorage.numberuser;
				var matkhau = "matkhau"+localStorage.numberuser;
				var hoten = "hoten"+localStorage.numberuser;
				var email = "email"+localStorage.numberuser;
				var sdt = "sdt"+localStorage.numberuser;
				
				localStorage.setItem(tendangnhap,kiemtra[1].value);
				localStorage.setItem(matkhau,kiemtra[2].value);
				localStorage.setItem(hoten,kiemtra[0].value);
				localStorage.setItem(email,kiemtra[5].value);
				localStorage.setItem(sdt,kiemtra[4].value);
				document.location.assign("index.html");
				return ;
			
			
			
	}
function dangky(){
	var s="";
	s+='<form method="post" name="form" action="../dangnhap.html" >\
	<div align="center" width="1500px" >\
    	  <div id="dau"><b>ĐĂNG KÝ TÀI KHOẢN</b></div>\
    	  <div class="canle">\
   		  <label for="name">Họ và tên</label>\
          <input type="text" name="dk" id="name" class="khung" required="required"/>\
          </div>\
          <div class="canle">\
          <label for="user">Tài khoản</label>\
          <input type="text" name="dk" id="user" class="khung" required="required">\
          </div><div class="canle">\
          	<label for="pass1">Mật khẩu</label>\
            <input type="password" name="dk" id="pass1" class="khung" placeholder="Mật khẩu dài\ 5-16 ký tự" required="required" />\
          </div>\
          <div class="canle">\
          	<label for="pass2">Nhập lại mật khẩu</label>\
            <input type="password" name="dk" id="pass2" class="khung" required="required"/>\
          </div>\
          <div class="canle">\
          	<label for="sdt">Số điện thoại</label>\
         	 <input type="text" name="dk" id="sdt" class="khung" required="required">\
          </div>\
          <div class="canle">\
         	 <label for="email">Email</label>\
          	<input type="email" name="dk" id="email" class="khung" required="required">\
          </div>\
          <div class="submitandreset"><input type="button" value="Đăng ký" onclick="kt()" class="nutdk" />\
          					  <input type="reset" value="Reset"  class="nutdk"/> </div>\
                    </div> </form>';
	document.getElementById("trangphu").innerHTML=s;
	document.getElementById("trangphu").style.border="2px solid #999";
	document.getElementById("trangphu").style.height="800px";
	clearInterval(a);
	}