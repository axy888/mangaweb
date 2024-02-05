function log(){
    const log = document.querySelector(".auth-from")
    const login = document.querySelector(".auth-form-login")

    const auth = document.querySelector('.modal')
    auth.style.display="block";

    log.style.display="block";
    login.style.display="none"; 
}
function login(){
    const auth = document.querySelector(".auth-from")
    const login = document.querySelector(".auth-form-login")
    auth.style.display="none";
    login.style.display="block"; 
}
function auth(){
   
    const auth = document.querySelector(".auth-from")
    const login = document.querySelector(".auth-form-login")
    auth.style.display="block";
    login.style.display="none";
}
function comeBack(){
    const auth = document.querySelector('.modal')
    auth.style.display="none";
}
function loggin(){
    const modal = document.querySelector('.modal')
    const auth = document.querySelector(".auth-from")
    const login = document.querySelector(".auth-form-login")
    modal.style.display="block";
    auth.style.display="none";
    login.style.display="block";
}
 //========================================================================== 
window.onload = function() {
    var c1 = document.getElementById("myCanvas1");
    var c2 = document.getElementById("myCanvas2");
    var c3 = document.getElementById("myCanvas3");
    var c4 = document.getElementById("myCanvas4");



    var ctx1 = c1.getContext("2d");
    var ctx2 = c2.getContext("2d");
    var ctx3 = c3.getContext("2d");
    var ctx4 = c4.getContext("2d");
 


    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");
    var img4 = document.getElementById("img4");




    ctx1.drawImage(img1, 0, 0,1283,593);
    ctx2.drawImage(img2, 0, 0,1283,593);
    ctx3.drawImage(img3, 0, 0,1283,593);
    ctx4.drawImage(img4, 0, 0,1283,593);
    

  }
// ===================================================================

        // scroll
window.onscroll = function() {
    my();
    my1();
}
function my (){
    if(document.documentElement.scrollTop > 10 ){
        document.querySelector(".grid").classList.add("nav-scroll")
        
        
    }else{

        document.querySelector(".grid").classList.remove("nav-scroll")
    }

} 



function my1 (){
    if(document.documentElement.scrollTop > 2010 ){
        
        
        document.querySelector(".figure_logo img").style.animation = "slideUp 1s linear forwards"
        document.querySelector(".figure_dis-p").style.animation = "textup 2s linear forwards"
        document.querySelector(".figure_dis-span").style.animation = "spanup 2s linear forwards"
 
        document.querySelector(".figure_logo1 img").style.animation = "slideUp 1s linear forwards"
        document.querySelector(".figure_dis-p1").style.animation = "textup 2s linear forwards"
        document.querySelector(".figure_dis-span1").style.animation = "spanup 2s linear forwards"

        document.querySelector(".figure_logo3 img").style.animation = "slideUp 1s linear forwards"
        document.querySelector(".figure_dis-p3").style.animation = "textup 2s linear forwards"
        document.querySelector(".figure_dis-span3").style.animation = "spanup 2s linear forwards"

        
        
    }else{
        document.querySelector(".figure_logo img").style.animation = "slideDowm 1s linear forwards"
        
        document.querySelector(".figure_dis-p").style.animation = "textDown 2s linear forwards"

        document.querySelector(".figure_dis-span").style.animation = "spanDown 2s linear forwards"


        document.querySelector(".figure_logo1 img").style.animation = "slideDowm 1s linear forwards"
        
        document.querySelector(".figure_dis-p1").style.animation = "textDown 2s linear forwards"

        document.querySelector(".figure_dis-span1").style.animation = "spanDown 2s linear forwards"

        document.querySelector(".figure_logo3 img").style.animation = "slideDowm 1s linear forwards"
        
        document.querySelector(".figure_dis-p3").style.animation = "textDown 2s linear forwards"

        document.querySelector(".figure_dis-span3").style.animation = "spanDown 2s linear forwards"
    }

} 



function search(){
 const a =document.querySelector(".search")
 a.style.transform = "translateY(0)"



}
function searchUp(){
    const a =document.querySelector(".search")
    a.style.transform = "translateY(-2000px)"

}

const heart = document.querySelector(".figrue-heart")
const heart1 = document.querySelector(".figrue-heart1")
const heart2 = document.querySelector(".figrue-heart2")

    heart.addEventListener(
        "click",
        function(event){
            event.currentTarget.classList.toggle("pink")
        }
    )
    heart1.addEventListener(
        "click",
        function(event){
            event.currentTarget.classList.toggle("pink")
        }
    )
    heart2.addEventListener(
        "click",
        function(event){
            event.currentTarget.classList.toggle("pink")
        }
    )



//=================================================================================================================================================================================
            //search

const searchWrapper = document.querySelector(".search_input")
const inputBox = document.querySelector("input")
const searchBox = document.querySelector(".search_box")


inputBox.onkeyup = (e) => {
    let userData = e.target.value
    let emptyArray =[];
    if(userData)
    {
        emptyArray = comics.filter((data)=>{//tạo mảng mới
            return data.name.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());//kiểm tra chuỗi có bắt đầu bằng chuỗi con không
        });
        emptyArray = emptyArray.map((data)=>{//giống foreach, lặp qua các phần tử của mảng, return về 1 giá trị, giá trị này sẽ thay thế phần tử đó
            return data =`               
        <div class="search_box ">
        <li class="sch_li">
         <a class="sch_a" onclick="getItem(${data.id})">
            <img class="sch_img" src="${data.img}" alt="">
            <div class="sch_hd">${data.name}</div> <br>
            <div class="sch_bd">${data.p}</div>
        </a>
      </li>

            
          </div>`;
        })
        searchWrapper.classList.add("active")
    }
    else{
        searchWrapper.classList.remove("active")

    }
    showSuggestion(emptyArray)
}
function showSuggestion(list){
    let listData;
    if(!list.length){//rỗng
        userValue  = inputBox.value;
        listData ='<li>' + userValue + '</li>';
    }else{
        listData = list.join('')//return list as a string
    }
    searchBox.innerHTML = listData;
}

  

  
  
    
  
  
  
  
  
  
  
  
  
  
  
  
  
      
    
  
  





 

