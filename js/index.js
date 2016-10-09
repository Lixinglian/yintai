$(function(){
	//顶部左边下拉菜单效果
      var dleftBox=$('.dleft_box',document)[0];
      var xlcdBox=$('.xlcd-box',dleftBox);
      var xlxBox=$('.xlx',dleftBox);
      for(var i=0;i<xlcdBox.length;i++){
          xlcdBox[i].index4=i;
          hover(xlcdBox[i],function(){
              xlxBox[this.index4].style.display="block";
          },function(){
              xlxBox[this.index4].style.display="none";
          })
      }
      //顶部右边下拉菜单效果
      var wdytBox=$('.wdytd-box',document)[0];
      var ul3=$('ul',wdytBox)[0];
      // console.dir(ul3)
          hover(wdytBox,function(){
              ul3.style.display="block";
              wdytBox.style.background="#fff";
          },function(){
              ul3.style.display="none";
              wdytBox.style.background="";
          })
	
         //banner左边部分的右拉菜单
         var dyflBox=$('.dyfl_box',document);
         for(var i=0;i<dyflBox.length;i++){
         	bnyl(dyflBox[i])
         }
         function bnyl(dyflBox){
         var bnylcds=$('.bnylcd',dyflBox)[0];
          hover(dyflBox,function(){
             bnylcds.style.display="block";
          },function(){
              bnylcds.style.display="none";
          })
         }
         //线框效果
         var sitBox=$('.sit-box',document);
         for(var i=0;i<sitBox.length;i++){
          xk(sitBox[i])
         }
         function xk(sitBox){
         var ss3Box=$('.ss3_box',sitBox);
         var xw1=parseInt(getStyle(ss3Box[0],'width'));
         var xh1=parseInt(getStyle(ss3Box[0],'height'));
         for (var i = 0; i < ss3Box.length; i++) {
              ss3Box[i].onmouseover=function(){
              animate($(".t",this)[0],{width:xw1});
              animate($(".l",this)[0],{height:xh1});
              animate($(".b",this)[0],{width:xw1});
              animate($(".r",this)[0],{height:xh1});
              }
              ss3Box[i].onmouseout=function(){
              animate($(".t",this)[0],{width:0});
              animate($(".l",this)[0],{height:0});
              animate($(".b",this)[0],{width:0});
              animate($(".r",this)[0],{height:0});
              }
           
         };
         }
         //热门品牌和本周推荐选项卡部分
         var zgtkxyBox=$('.zgtkxy_box',document)[0];
         var rmwzBox=$('.rmwz-box',zgtkxyBox);
         var rpBox=$('.rp-box',zgtkxyBox);
         rpBox[0].style.display="block";
         rmwzBox[0].style.borderBottom="5px solid #e5004f";
         for(var i=0;i<rmwzBox.length;i++){
            rmwzBox[i].index5=i;
           rmwzBox[i].onmouseover=function(){
            for(var j=0;j<rmwzBox.length;j++){
              rpBox[j].style.display="none";
             rmwzBox[j].style.borderBottom="0";
            }
              rpBox[this.index5].style.display="block";
            rmwzBox[this.index5].style.borderBottom="5px solid #e5004f";
         }
         }
         //重复部分左下角
         var ss1xBox=$('.ss1x_box',document);
         for(var i=0;i<ss1xBox.length;i++){
          lbcf(ss1xBox[i])
         }
         function lbcf(ss1xBox){
         var wflbls=$('.wflbl',ss1xBox)[0];
         var wflbrs=$('.wflbr',ss1xBox)[0];
         var wflbms=$('.wflbm',ss1xBox);
         wflbms[0].style.left='0';
         var wflw=parseInt(getStyle(wflbms[0],'width'));
         var index6=0;
         var next=0;
         wflbrs.onclick=function(){
          next++;
          if(next==wflbms.length){
            next=0;
          }
          wflbms[next].style.left=wflw+"px";
          animate(wflbms[index6],{left:-wflw});
          animate(wflbms[next],{left:0});
          index6=next;
         }
         wflbls.onclick=function(){
          next--;
          if(next<0){
            next=wflbms.length-1;
          }
          wflbms[next].style.left=-wflw+"px";
          animate(wflbms[index6],{left:wflw});
          animate(wflbms[next],{left:0});
          index6=next;
         }
         }
        //楼层部分
        var floor=$('.floor')[0];
        var laders=$('span',floor);
        var article=$(".cfb_box");
        var mask=$('div',floor);
        var jian2=$(".zt_box")[0];
        var jian2top=jian2.offsetTop;
         floor.style.display="none";
        for(var i=0;i<mask.length;i++){
          mask[i].style.top=50*i+(i*5)+"px";
          mask[i].style.display="none";
        }
        var arttop=[];
        for (var i=0;i<article.length;i++){
           arttop.push(article[i].offsetTop);
        }
        window.onscroll=function(){
         var top=document.body.scrollTop||document.documentElement.scrollTop;
         for (var i=0;i<arttop.length;i++){
            if(top+200>arttop[i]){
                for (var j=0;j<mask.length;j++){
                  mask[j].style.display="none";
                }
                  mask[i].style.display="block";
            }
         }
            if(top>jian2top){
              floor.style.display="block";
            }else if(top<jian2top){
              floor.style.display="none";
      
            }
        }
        for (var i=0;i<laders.length;i++){
          laders[i].index7=i;
          laders[i].onclick=function(){
            animate(document.body,{scrollTop:arttop[this.index7]},500);
            animate(document.documentElement,{scrollTop:arttop[this.index7]},500);
          }
        }
         

          
})

	