
  // ywl
//弹出层出现时让页面不能继续滚动
var a=function(e){
  e.preventDefault();

}
function disableBody(flag){
  if(flag){
    document.body.addEventListener('touchmove', a, { passive: false }); 
  }else{
    document.body.removeEventListener('touchmove',a); 
}
}


  $(".nav-icon").on("touchstart", function (e) {
    $(".pop").css({
      display: "block"
    })
   
    disableBody(true)
  
  });
 
  $(".pop-img").on("touchend", function (e) {
    $(".pop").css({
      display: "none"
    })
    disableBody(false)
   
  })

  $(".pop a > span").on("click", function () {
    var self = $(this)
    $(".pop a > span").each(function (key, item) {
      if (self.html() === $(this).html()) {
        $(this).addClass("pop-underline")
      } else {
        $(this).removeClass("pop-underline")
      }
    })
  })

  function resetUnderline(src) {
    $(".pop a > span").each(function (key, item) {
      if ($(this).html()=== src) {
        $(this).addClass("pop-underline")
      } else {
        $(this).removeClass("pop-underline")
      }
    })
  }

  
  $('.foot-title').on("click", function () {
    if($(this).find("img").attr("class")=="rotate-img"){
      $(this).find("img").removeClass("rotate-img")
      // $(this).next().removeClass('active').addClass('closed')
      $(this).next('ul').slideToggle(500).parent().siblings().children('ul').hide(500)

      $(this).find("img").addClass("rotate-img1")
      $(this).parent().siblings().find("img").removeClass("rotate-img1")
    }else{
      $(this).find("img").removeClass("rotate-img1")
      // $(this).next().css({display:"block"}).parent().siblings().find("ul").css({display:"none"})
      // $(this).next().removeClass('closed').addClass('active')
      $(this).next('ul').slideToggle(500).parent().siblings().children('ul').hide(500)
      $(this).find("img").addClass("rotate-img")
      $(this).parent().siblings().find("img").removeClass("rotate-img")
    
    }
    

    
  })



  // 解决移动端禁止浏览器强制缩放bug
  window.onload=function () {  
    onTwoFingers()       
   }


  //点击弹出框的链接后恢复初始化
function getStartState(src){
  $(".pop a").on("click",function(){
    $(".pop").css({
      display: "none"
    })
    disableBody(false)
    if(src){
      resetUnderline(src)
    }
    
  })

}
//禁止缩放函数
function onTwoFingers(){
  document.addEventListener('touchstart',function (event) {  
    if(event.touches.length>1){  
         event.preventDefault();  
     } 
 },{ passive: false })  
 var lastTouchEnd=0;  
 document.addEventListener('touchend',function (event) {  
     var now=(new Date()).getTime();  
     if(now-lastTouchEnd<=300){  
         event.preventDefault();  
     }  
     lastTouchEnd=now;  
}, { passive: false })  
  
}

// 控制默认样式表不更新
// $(function(){
//   $('head link').each(function(){
//     let src= $(this).attr("href")+"?v="+new Date().getTime()
//     $(this).attr("href",src)
//   })

// })


// 了解更多按钮跳转
$(".href").on('click',function(){
  window.location.href=window.location.origin+"/product-display/index.html"
})

// 导航logo跳转
$(".logo").on('click',function(){
  window.location.href=window.location.origin+"/index.html"
})

//联系我们跳转
$(".banner .large").on('click',function(){
  window.location.href=window.location.origin+"/contact-us/index.html"
})

//首页 联系我们跳转
$("#btnSpec").on('click',function(){
  window.location.href=window.location.origin+"/contact-us/index.html"
})







