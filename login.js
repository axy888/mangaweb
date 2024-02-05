// let username1 = document.getElementById("username1");
// let email1 = document.getElementById("email1");
// let password1 = document.getElementById("password1");
// let btnLogin1 = document.querySelector(".btn-login1");
function loGin()
{
  console.log("hi");
	var username=document.getElementById("username1").value;
	var password=document.getElementById("password1").value;
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(i=0;i<userArray.length;i++)
		if(userArray[i].username==username && userArray[i].password==password){
			if (userArray[i].userType=='1'){
				window.location=""; // dang nhap admin
			}
			else {
        // var link = ''+userArray[i].username; //trang nguoi dung
        // if (JSON.parse(localStorage.getItem('nguoiDungDangNhap')) == null){
        var tenNguoiDung = JSON.parse(localStorage.getItem('nguoiDungDangNhap'));
        tenNguoiDung = userArray[i];
        localStorage.setItem('nguoiDungDangNhap',JSON.stringify(tenNguoiDung));
        // }
        window.location = "user.html";

				console.log("link : "+link)
				
			}
		}	
}
function information(){
  var Us= document.querySelector(".user")
  Us.addEventListener(
    "click",
    function(e){
     var Us_bd = document.querySelector(".user_bd")
      Us_bd.style.display = "block"
    }
    
)
var tenNguoiDung = JSON.parse(localStorage.getItem('nguoiDungDangNhap'));
var tr='';
  tr+='<div class="user_bd">'+tenNguoiDung.username+
  '<div onclick="ngheNhac() " class="ngheNhac">Nghe Nhạc</div>'+
  '<div onclick="tatNhac()" class="tatNhac">Tắt Nhạc</div>'+

  '<div onclick ="dangXuat()" class="DX">Đăng Xuất</div>'
  '</div>';
  document.getElementById("hienThiNguoiDung").innerHTML=tr;
}

function dangXuat(){
  var tenNguoiDung = JSON.parse(localStorage.getItem('nguoiDungDangNhap'));
  tenNguoiDung=null;
  localStorage.setItem('nguoiDungDangNhap',JSON.stringify(tenNguoiDung));
  window.location="htmldean.html";
}

// const audioElement = new Audio('nhạc lofi chill nhẹ nhàng không lời - study - sleep - homework music - lofi girl.mp4');
// function ngheNhac(){
//   audioElement.play();

// }
// function tatNhac(){
//   audioElement.pause();


// }






