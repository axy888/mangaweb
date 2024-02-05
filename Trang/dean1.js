function print(){
    var item = localStorage.getItem("item");
   
    
  var chapters = localStorage.getItem("chapters")
    
    item =  JSON.parse(item);
 
    chapters =  JSON.parse(chapters);


  

console.log(item)
  




   


    var pos = document.getElementById("body");

    pos.innerHTML = '';
    
    pos.innerHTML += 
`
             <div class="body1__list-img">
                 <img class="body1__img body1" style="box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;" src="${item[0].bg}" alt="">
               <div class="body1__modal"></div>
               </div>
                  <div class="body1__rv">
                       <div class="body1__rv-img">
                       <img src="${item[0].img}" alt="">

                       </div>
                       
                       <div class="body1__rv-header">
                           <p class="body1__rv-header-p">${item[0].p}</p>
                           <span class="body1__rv-header-span">${item[0].name}</span>
                       </div>
                  </div>
            <div class="body2_bk">
                  <div class="body2_des">
                    <i class=" body2_icon fa-regular fa-clock"> 4 ngày trước</i>
                    <p class="body2_p">${item[0].span} </p>
                    <span class="body2_sp">Theo dõi nhưng thông tin mới nhất tại đây : <br> https://www.facebook.com/profile.php?id=100085932511201</span>
                  </div>
              </div>



              <div class="body3_bk">
              <div class="body3_list">
                <h3 class="body3_h3">DANH SÁCH CHƯƠNG</h3>
                <div  class="body3_list-bd" >
                  <a  href="${item[0].trang.tap1.a}" class="body3-bd">
                        <div class="body3_list-header">
                            Chương 1 
                        </div>
                        <div class="body3_list-infor">
                           <h4 > ${item[0].trang.tap1.nameT} </h4>
                           <p></p>
                        </div>
                  </a> 
                </div>
                <div  class="body3_list-bd" >
                  <a  href="${item[0].trang.tap2.a}"  class="body3-bd">
                        <div class="body3_list-header">
                            Chương 2 
                        </div>
                        <div class="body3_list-infor">
                           <h4 >${item[0].trang.tap2.nameT}</h4>
                           <p></p>
                        </div>
                  </a> 
                </div>
              </div>
            
              <div class="body3_infor">
                <p class="body3_infor-p">Người Dịch</p>
                <i class="body3_infor-icon fa-brands fa-facebook"></i> 
                <p style="display: inline-block;"> fb.com/MinhHuu1903</p><br>
                <i class="body3_infor-icon  fa-brands fa-facebook-messenger"></i>
                <p style="display: inline-block;"> m.me/MinhHuu1903</p> <br>

                <p class="body3_infor-p1">Trang Chính Thức</p>
                <i  style="display: inline-block;" class=" fa-sharp fa-solid fa-globe"></i>
                <p style="display: inline-block;">https://nxbkimdong.com.vn</p>

                <p class="body3_infor-p1">Thông tin thêm</p>
                 
                <span> <i class="fa-solid fa-list"></i> <div class="b10">10</div> Chương đã đăng</span> <br>
                <span><i class="fa-solid fa-eye"></i> 1 Lượt xem</span>
              </div>
            </div>
  

    
    `;
    
}
print();
window.onscroll = function() {
  my();
}
function my (){
  if(document.documentElement.scrollTop > 10 ){
      document.querySelector(".grid").classList.add("nav-scroll")
      
      
  }else{

      document.querySelector(".grid").classList.remove("nav-scroll")
  }

} 









