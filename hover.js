(function(){
	var xa,ya,xb,yb,x0,y0,x1,y1,x2,y2,k0,k1;
	document.getElementById('test').onmouseenter=mouseEnterFunc;
	
	function mouseEnterFunc(e){
		var e = e||window.event;
		x1 = this.offsetLeft,
		y1 = -this.offsetTop, //注意坐标，所有的y坐标都是负数
		x2 = x1 + this.offsetWidth,
		y2 = y1 - this.offsetHeight, //同样y坐标为负数
		x0 = (x1 + x2) / 2,
		y0 = (y1 + y2) / 2,
		k0 = (y2-y1)/(x2-x1);
		
		xa=getMousePos(e).x;
		ya=-getMousePos(e).y;
		k= (ya-y0)/(xa-x0);
		
		var percentX=(xa-x0)/this.offsetWidth*100+'%',
		percentY =(ya-y0)/this.offsetHeight*100+'%';
		
		
		//console.log('当前坐标: ('+xa+','+ya+')')
		//console.log('中心坐标: ',x0,y0)
		//console.log('四角坐标: ',x1,y1,x2,y2)
		//console.log(k,k0)
		
		
		if(k>k0 && k<-k0){
			if(xa>x0){
				console.log('右侧')
				setEnterCSS(this,2,percentY)
			}
			else{
				console.log('左侧')
				setEnterCSS(this,4,percentY)
			}
		}
		else{
			if(ya>y0){
				console.log('顶侧')
				setEnterCSS(this,1,percentX)
			}
			else{
				console.log('底侧')
				setEnterCSS(this,3,percentX)
			}
		}
	
			
		}
	
	function mouseOverFunc(e){
		console.log(xb,xa,getMousePos(e).x)
		if(xb===undefined && xa!= getMousePos(e).x){
			xb=getMousePos(e).x
			yb=-getMousePos(e).y
			console.log('坐标,',xa,ya,xb,yb)
			k1=(yb-ya)/(xb-xa)
			console.log("k: ",k1)
			setEnterCSS(this,k)
			document.getElementById('test').onmousemove=null;
		}
		
		}

	document.getElementById('test').onmouseleave=function (event){
		var obj=this
		console.log('mouse out')
		xa=xb=x2=y2=k0=x0=y0=x1=y1=undefined;
		setTimeout(function(){
			obj.classList.remove("test")
		},0)
		document.getElementById('test').onmouseenter=mouseEnterFunc
	}
	
	
	
	function setEnterCSS(obj,d,arg){
		if(d==1){
			changeColor(arg,'-100%')
		}
		else if(d==2){
			changeColor('100%',arg)
		}
		else if(d==3){
			changeColor(arg,'100%')
		}
		else{
			changeColor('-100%',arg)
		}
		
		setTimeout(function(){
			obj.classList.add("test")
		},300)
		
	}
	
	function changeColor (x,y) { // Flip psedo element's background color
				var beforeIndex = 0,  // ADDED: define varible and set it to the correct value to referrence the ::before psuedo element
					position,
					currentPosition,
					styleSheetObject = document.getElementById("styleId"); // ADDED: get a refernce to the stylesheet object
				currentPosition=styleSheetObject.sheet.cssRules[beforeIndex].style.transform;
				
				position =x+','+y;
				newValue = 'translate3d('+position+',0)'
				console.log(currentPosition)
			     // Change the color -- Changed to directly reference the correct stylesheet via id
			    styleSheetObject.sheet.cssRules[beforeIndex].style.transform = newValue;
				currentPosition=styleSheetObject.sheet.cssRules[beforeIndex].style.transform;
				console.log(currentPosition)
			                        
			}
	
	
	function getMousePos(e) {
	var x=e.clientX+document.body.scrollLeft + document.body.scrollLeft;
    var y=e.clientY+document.body.scrollTop + document.body.scrollTop 
	return {x:x,y:y}
}
})();