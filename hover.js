(function(){
	var x0,y0,x1,y1;
	
	
	document.getElementById('test').mouseenter=mouseEnter;
	
	function mouseEnter(e){
		var e = e||window.event,k,
		x1 = this.offsetLeft,
		y1 = -this.offsetTop, //注意坐标，所有的y坐标都是负数
		x2 = x1 + this.offsetWidth,
		y2 = y1 - this.offsetHeight, //同样y坐标为负数
		x0 = (x1 + x2) / 2,
		y0 = (y1 + y2) / 2,xa,ya,xb,yb;
		
		if(xa===undefined){
			xa=getMousePos(e).x
			ya=-getMousePos(e).y
			console.log('第一次进入,',xa,ya,xb,yb)
		}else{
			if(x0!= getMousePos(e).x){
			xb=getMousePos(e).x;
			yb=-getMousePos(e).y;
			console.log('第二次进入,',xa,ya);
			k=(yb-ya)/(xb-xa)
			console.log("k: ",k)
			
			setEnterCSS(this,k)
			
			document.getElementById('test').onmousemove=null;
			}
		}
	}
	
	
	document.getElementById('test').mouseleave=function (event){
		var obj=this
		document.getElementById('test').onmousemove=mouseEnter
		console.log('mouse out')
		x0=y0=x1=y1=undefined;
		setTimeout(function(){
			obj.classList.remove("test")
		},0)
	}
	
	
	
	function setEnterCSS(obj,k){
		changeColor()
		setTimeout(function(){
			obj.classList.add("test")
		},100)
		
		console.log(obj,k)
	}
	
	function changeColor () { // Flip psedo element's background color
				var beforeIndex = 0,  // ADDED: define varible and set it to the correct value to referrence the ::before psuedo element
					position,
					currentPosition,
					styleSheetObject = document.getElementById("styleId"); // ADDED: get a refernce to the stylesheet object
				currentPosition=styleSheetObject.sheet.cssRules[beforeIndex].style.transform;
				
				position ='10%,50%';
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