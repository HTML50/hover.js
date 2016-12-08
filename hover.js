(function(){
	var x0,y0,x1,y1;
	document.getElementById('test').onmousemove=mouseEnter;
	
	function mouseEnter(obj,event){
		var e = event || window.event,k;
		obj=this;
		if(x0===undefined){
			x0=getMousePos(e).x
			y0=-getMousePos(e).y
			console.log('第一次进入,',x0,y0,x1,y1)
		}else{
			if(x0!= getMousePos(e).x){
			x1=getMousePos(e).x;
			y1=-getMousePos(e).y;
			console.log('第二次进入,',x1,y1);
			k=(y1-y0)/(x1-x0)
			console.log("k: ",k)
			
			setEnterCSS(obj,k)
			
			
			document.getElementById('test').onmousemove=null;
			}
		}
	}
	
	
	document.getElementById('test').onmouseout=function (){
		document.getElementById('test').onmousemove=mouseEnter
		console.log('mouse out')
		x0=y0=x1=y1=undefined;
	}
	
	
	
	function setEnterCSS(obj,k){
		//css('.hoverJs:after{transform:translate3d(50%,10%,0)}');
		//setTimeout(function(){obj.classList.add("test");},100)
		
		reafter();
		
		
		obj.classList.add("test")
		console.log(obj,k)
	}
	
	function reafter() {
		var ss = document.styleSheets;
		for (var i = 0; i < ss.length; i++) {
			for (var j = 0; j < ss[i].cssRules.length; j++) {
				var sty = ss[i].cssRules[j];
				if(sty.selectorText.replace(/:/g,":")==".hoverJs:after")
					sty.style.transform='translate3d(50%,10%,0)'
			}
		}
	}
	
	var css=function(t,s){
    s=document.createElement('style');
    s.innerText=t;
    document.body.appendChild(s);
	};

	
	function getMousePos(e) {
	var x=e.clientX+document.body.scrollLeft + document.body.scrollLeft;
    var y=e.clientY+document.body.scrollTop + document.body.scrollTop 
	return {x:x,y:y}
}
})();