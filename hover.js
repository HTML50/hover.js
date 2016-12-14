(function(){
	var div = document.createElement("div"); 
	div.style.backgroundColor='rgba(0,0,0,.3)'
	div.style.width='10px';
	div.style.height='10px';
	div.style.position='absolute';
	div.style.opacity='0';
	div.style.visibility='hidden';
	div.style.transition='width,height,opacity .15s,.15s,.15s';
	div.style.zIndex='-999';
	document.body.appendChild(div);

	document.onmousemove = function (e) {
		var e = e || event,
		scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft,
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		div.style.top = e.clientY  - parseInt(div.style.height)/2 + scrollTop + 'px'; 
		div.style.left = e.clientX - parseInt(div.style.width)/2 + scrollLeft  + 'px';
	};
	
	list=document.querySelectorAll(".hoverJs")
	for(var i in list){
		list[i].onmouseenter=onHover;
		list[i].onmouseleave=onLeave;
	}
	
	function onHover(e){
		var e=e || event,
		scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft,
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		div.style.height = this.offsetHeight+'px';
		div.style.width = this.offsetWidth+'px';
		div.style.opacity = 1;
		div.style.visibility = 'visible';
		div.style.display = 'block';
		div.style.top = e.clientY  - this.offsetHeight/2 + scrollTop + 'px'; 
		div.style.left = e.clientX  - this.offsetWidth/2 + scrollTop + 'px'; 
	}
	function onLeave(e){
		var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft,
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		div.style.opacity = 0;
		div.style.visibility='hidden';
	}

})();