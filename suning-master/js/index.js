//轮播图
{
    let box1=document.querySelectorAll(".photo li");
    let box2=document.querySelectorAll(".banner-diandian li");
    let box=document.querySelector(".banner-photo");
    let left=document.querySelector(".bannerleft");
    let right=document.querySelector(".bannerright");
    box2.forEach(function (ele,index) {
        ele.onmouseover=function () {
            for(let i=0;i<box2.length;i++){
                box2[i].classList.remove("one");
                box1[i].classList.remove("one")
            }
            this.classList.add("one");
            box1[index].classList.add("one");
        }
    });
    let n=0;
    function bannerfn(dir="r") {
        if(dir==="r"){
            n++;
        }else if (dir==="l"){
            n--;
        }
        if(n===box1.length){
            n=0;
        }
        if(n===-1){
            n=box1.length-1;
        }
        for(let i=0;i<box2.length;i++){
            box2[i].classList.remove("one");
            box1[i].classList.remove("one");
        }
        box2[n].classList.add("one");
        box1[n].classList.add("one");
    }
    let st=setInterval(bannerfn,5000);
    box.onmouseover=function () {
        clearInterval(st);
    };
    box.onmouseout=function () {
        st=setInterval(bannerfn,5000)
    };
    let flag=true;
    right.onclick=function () {
        if(flag){
            flag=false;
            bannerfn();
        }
    };
    left.onclick=function () {
        if(flag) {
            flag=false;
            bannerfn("l");
        }
    };
    box1.forEach(function (ele) {
        ele.addEventListener("transitionend",
            function(){
                flag=true;
            })
    })
}

//banner选项卡
{
    let btn = document.querySelectorAll('.banner-list ul li');
    let box = document.querySelectorAll('.index-sort-detail');
    let big = document.querySelector('.banner');
    btn.forEach(function (ele, index) {
        ele.onmouseover = function () {
            for (let i = 0; i < box.length; i++) {
                box[i].style.display='none';
            }
            // this.classList.add('active');
            box[index].style.display='block';
            n = index
        }
    });
    big.onmouseleave = function () {
        for (let i = 0; i < box.length; i++) {
            box[i].style.display='none';
        }
    }

}

//侧导航、顶部搜索
{
    let daohang=document.querySelector(".leftdh");
    let sousuo=document.querySelector("header");
    let btns=document.querySelectorAll(".leftdh ul li");
    let floors=document.querySelectorAll(".floors");
    let flag=true;
    window.onscroll=function () {
        if(flag){
        let st=document.documentElement.scrollTop;
        if (st>2180){
            daohang.style.display="block"
        }else {
            daohang.style.display="none"
        }
        if (st>1000){
            sousuo.style.display="block"
        }else {
            sousuo.style.display="none"
        }
        floors.forEach(function (ele,index) {
            if(st<floors[0].offsetTop){
                for(let i=0;i<btns.length;i++){
                    btns[i].classList.remove("active")
                }
                btns[0].classList.add("active")
            }
            if(st>=ele.offsetTop){
                for(let i=0;i<btns.length;i++){
                    btns[i].classList.remove("active")
                }
                btns[index+1].classList.add("active")
            }
        })
        }
    };
    btns.forEach(function (ele,index) {
        ele.onclick=function () {
            flag=false;
            let ot=floors[index].offsetTop;
            let now=document.documentElement.scrollTop;
            let speed=(ot-now)*30/300;
            let time=0;
            let t=setInterval(function () {
                now+=speed;
                time+=30;
                if (time===300){
                    clearInterval(t);
                    now=ot;
                    flag=true;
                }
                document.documentElement.scrollTop=now;
            },30)
        }
    });
    let totop=document.querySelector(".zhiding");
    totop.onclick=function () {
        let st=document.documentElement.scrollTop;
        let speed=st*30/500;
        let t=setInterval(function () {
            st-=speed;
            if(st<=0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },30)
    };
}


