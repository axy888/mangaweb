
$(document).ready(function(){
    $('.body__canvas-list').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay:true
    });
  });
  $(document).ready(function(){
    $('.body__update-list').slick({
        slidesToShow: 5,
        arrows: true,
        dots: true,
        infinite: false,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });
  //=================================================
   const main = document.querySelector(".main");
   const lists = document.querySelectorAll(".body-featured-list")
    const nextBtn = document.querySelector(".body-featured-next")
    const priveBtn = document.querySelector(".body-featured-prive")
    const sliderWidth = lists[0].offsetWidth
    const sliderLength = lists.length -2
    let index = 0;
  let positTionX = 0;
  function next(){
    handleChangeSlide(1) 
    console.log(positTionX)

    }
    function prev(){
      handleChangeSlide(-1)
      console.log(positTionX)
  }
    function handleChangeSlide (dir){
      if(dir === 1){
        if(index >= sliderLength -1 ){
          index = sliderLength -1 ;
          // nextBtn.style.display = "none";
          return;
        } 
        positTionX = positTionX - sliderWidth
        main.style = `transform:translate(${positTionX}px)`;
        index ++;
      }else if(dir === -1){
        if(index <= 0){
          index = 0;
          return;
        } 
        
        positTionX = positTionX +  sliderWidth;
        main.style = `transform:translate(${positTionX}px)`;
        index --;
      }
    }
    //==================================================