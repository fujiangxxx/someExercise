
$(function(){

     var lunbolist=document.querySelectorAll(".luobo li");
     var bannerli=document.querySelectorAll(".banner2 li");
     var banner=document.querySelector(".banner");
     let num=0;
     lunbolist.forEach(function(el,index){
         el.onclick=function(){
             for(let i=0;i<lunbolist.length;i++){
                 lunbolist[i].classList.remove("moren");
                 bannerli[i].classList.remove("onfirst");

             }
             el.classList.add("moren");
             bannerli[index].classList.add("onfirst");
             num=index;
         }
     })



     function st(dc="right"){
         if(dc=="right"){
             num++;
             if(num==lunbolist.length){
                 num=0;
             }
         }
         if(dc=="left"){
             num--;
             if(num==-1){
                 num=lunbolist.length-1;
             }
         }
         for(let i=0;i<lunbolist.length;i++){
             lunbolist[i].classList.remove("moren");
             bannerli[i].classList.remove("onfirst");
         }
         lunbolist[num].classList.add("moren");
         bannerli[num].classList.add("onfirst");
     };

     let sts=setInterval(st,5000);
     banner.onmouseover=function(){
         clearInterval(sts);
     }
     banner.onmouseout=function(){
         sts=setInterval(st,5000);
     }
     var flag=true;
     var prebtn=document.querySelector(".jiantoubanner11");
     var nextbtn=document.querySelector(".jiantoubanner12");
     nextbtn.onclick=function(){
         if(flag){
             flag=false;
             st();
         }
     }
     prebtn.onclick=function(){
         if(flag){
             flag=false;
             st(dc="left");
         }
     }
     bannerli.forEach(function(el,index){
        el.addEventListener("transitionend",function(){
             flag=true;
        })
    })


 //内容
        let list=$(".tltletotal1");

        list.each(function(){
            let inner=$(this).children(".titlenierongmost");
            let prev=$(this).children(".lefttt").children(" .lefticon");
            let next=$(this).children(".righttt").children(" .icon-goleft");
            let items=inner.children(".titlenierong");
            let pagers=$(this).children(".titlelunbo").children(".titlelunbof").children("li");
            let max=items.length;
            let n=0;
            next.click(function () {
                n++;
                if (n >= max) {
                    n=max - 1;
                    return;
                }
                changePagers(n);
            });
            prev.click(function () {
                n--;
                if (n < 0) {
                    n=0;
                    return;
                }
                changePagers(n);
            });
            pagers.each(function(index,ele){
                $(this).click(function(){
                    changePagers(index);
                    n=index;
                })
            })
            function changePagers(n) {
                pagers.filter(".moren3").removeClass("moren3").end().eq(n).addClass("moren3");
                inner.css("marginLeft",`${-n*292}px`);
            }

        })
     
 //jquery     
   //侧边栏

    {
        $(".bannerlef>li").each(function(index,obj){
            $(this).hover(function(){
                $(".xianshi").eq(index).css({display:"block"});
                $(".xianshi").eq(index).parent().siblings().children(".xianshi").css({display:"none"})
            },function(){
                $(".xianshi").css({display:"none"});
            })

        })
    }
    //购物车
    $(".gouwuche").hover(function(){
    	$(".gouwuchetan").css({display:"block"});
    },function(){
    	$(".gouwuchetan").css({display:"none"});
    })
    //搜索框
    $(".shuzi").click(function(){
    	$(".xiaomimix").css({display:"none"});
    	$(".rengongzhineng").css({display:"none"});
    })
    $(".shuzi").blur(function(){
    	$(".xiaomimix").css({display:"block"});
    	$(".rengongzhineng").css({display:"block"});
    })
    
   
   //navi

    $(".navileft").queue(function(){
        $(".navileft").hover(function(){
            $(".navlefttan1").css({height:"289px",borderTop:"1px solid #E0E0E0",
                      boxShadow:" 0 1px 5px 1px #d8d8d8"});
        },function(){
            $(".navlefttan1").css({height:"0px",borderTop:"0px solid #E0E0E0",
                      boxShadow:"none"});
        })
        $(".navileft").dequeue();
    })
    $(".item-childs").hover(function(){
        $(this).children(".navlefttan").removeClass("none");
        $(this).children(".navlefttan").addClass("block");
    },function(){
        $(this).children(".navlefttan").addClass("none");
        $(this).children(".navlefttan").removeClass("block");
    })




    
    //小米明星单品

  $(".jiantou11").click(function(){

        $(".shanpinjj3").css({marginLeft:"0px"});
        $(".jiantou12").addClass("moren1");
        $(".jiantou11").removeClass("moren1");


    })
    $(".jiantou12").click(function(){
        $(".shanpinjj3").css({marginLeft:"-1226px"});
        $(".jiantou11").addClass("moren1");
        $(".jiantou12").removeClass("moren1");


    })

    var t2=setInterval(fn2,3000);
    var nume1=0;
    var flag=true;
    function fn2(){
        if(flag){
            $(".shanpinjj3").css({marginLeft:"-1226px"});
        }else{
            $(".shanpinjj3").css({marginLeft:"0px"});
        }
        flag=!flag;

    }

    //家电

        let btns = $(".jiadianm2 ul li a");
        btns.hover(function() {
            let index = $(this).parent().index();
            $(this).addClass("active").parent().siblings().children().removeClass("active");
            $(this).parent().parent().parent().parent().next().children(".jiadianmore").eq(index).addClass("active").siblings().removeClass("active");
        })
    

})
