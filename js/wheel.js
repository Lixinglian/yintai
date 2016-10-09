window.onload=function(){
	//banner获取部分
	var bbannerbox=getClass('banner_box',document);
	var bannerbox=getClass('imglist',document);
	var as=bannerbox[0].getElementsByTagName('a');
	var lunbo=getClass('lunbo',bbannerbox[0])[0];
	var lis=lunbo.getElementsByTagName('li');
	// console.dir(lis)
	var bbutton=getClass('ban-button',bbannerbox[0]);
	var bleft=getClass('butleft',bbutton[0]);
	var bright=getClass('butleft',bbutton[0]);
	//选项卡获取部分
	var bannerzBox=getClass('bannerz_box',document);
	var bzsBox=getClass('bzs_box',document)[0];
	var as1=bzsBox.getElementsByTagName('a');
	var bzxBox=getClass('bzx_box',document);
	bzxBox[0].style.display="block";
	var sjxs=getClass('sjx',bzsBox);
	sjxs[0].style.borderBottomColor="#e5004f";
	as1[0].style.borderColor="#e5004f";
	//选项卡部分开始
	for(var i=0;i<as1.length;i++){
		as1[i].index=i;
		as1[i].onmouseover=function(){
			for(var j=0;j<bzxBox.length;j++){
				bzxBox[j].style.display="none";
				sjxs[j].style.borderBottomColor="";
				as1[j].style.borderColor="";
			}
			bzxBox[this.index].style.display="block";
			as1[this.index].style.borderColor="#e5004f";
			sjxs[this.index].style.borderBottomColor="#e5004f";
		}
	}
	//banner部分开始
	var index=0;
	as[0].style.zIndex=10;
	lis[0].style.backgroundColor='pink'
	var t;
	t=setInterval(move1,1000)
	function move1(){
		index++;		
		if(index==as.length){index=0};
		for(var i=0;i<as.length;i++){
			lis[i].style.backgroundColor=''
			as[i].style.zIndex=0;
		}
		lis[index].style.backgroundColor='pink'
		 as[index].style.zIndex=10;
	}
	 bannerbox[0].onmouseover=function(){
	 	clearInterval(t)
	 }

	 bannerbox[0].onmouseout=function(){
	 	t=setInterval(move1,1000)
	 }
	 for(var j=0;j<as.length;j++){
	 	lis[j].index=j;
	 	lis[j].onmouseover=function(){
	 		for(var i=0;i<as.length;i++){
	 			as[i].style.zIndex=0;
	 			lis[i].style.backgroundColor=''
	 		}
	 		as[this.index].style.zIndex=10;
	 		lis[this.index].style.backgroundColor='pink'
	 		
	 	}
	 }
	bright.onclick=function(){
		move1();
	}
	var index=as.length-1;
	bleft.onclick=function(){
        index--;
        if(index==-1){index=as.length-1}
        for(var j=0;j<as.length;j++){
        	lis[j].style.backgroundColor='';
        	as[j].style.zIndex=0;
        }
        lis[index].style.backgroundColor='pink'
        as[index].style.zIndex=10;
	}
	//banner部分结束
	//选项卡轮播部分开始
	var container=$(".container",document);
	function wheel(con){
		var imgBox1=$(".img-box",con)[0];
		var imgs=$("img",imgBox1);
		var w1=parseInt(getStyle(imgs[0],'width'));
		var list1=$("ul",con)[0];
		var lis1=$("li",list1);
		// console.log(lis1)
		var btn1=$(".btn",con)[0];
		var butleft=$(".butleft",btn1)[0];
		var butright=$(".butright",btn1)[0];
		lis1[0].style.background="#e6014f";
		imgBox1.style.width=w1*imgs.length+"px";
	    var index=0;
	    console.log(lis1.length)
	    imgBox1.onmouseover=function(){
	    	butleft.style.display="block";
	    	butright.style.display="block";

	    }
	    imgBox1.onmouseout=function(){
	    	butleft.style.display="none";
	    	butright.style.display="none";
	    }
		for(var i=0;i<2;i++){
			lis1[i].index=i;
			lis1[i].onclick=function(){
				for(var j=0;j<lis1.length;j++){
	                lis1[j].style.background="#666";
				}
				lis1[this.index].style.background="#e6014f";
				animate(imgBox1,{left:-w1*this.index});
			}
		}
		butright.onclick=function(){
			index++;
			if(index==imgs.length){
				index=0;
			}
			for(var i=0;i<imgs.length;i++){
				lis1[i].style.background="#666";
			}
	        animate(imgBox1,{left:-w1*index})
	        lis1[index].style.background="#e6014f;";
		}
		    index=imgs.length-1;
		butleft.onclick=function(){
			index--;
			if(index<0){
				index=imgs.length-1;
			}
			for(var i=0;i<imgs.length;i++){
				lis1[i].style.background="#666";
			}
	        animate(imgBox1,{left:-w1*index})
	        lis1[index].style.background="#e6014f;";
		}
   	 }
      for(var i=0;i<container.length;i++){
	     wheel(container[i])
      }
}