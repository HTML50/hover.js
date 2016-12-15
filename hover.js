(function(){
	var div = document.createElement("div"); 
	div.style.backgroundColor='rgba(0,0,0,.3)'
	div.style.width='0px';
	div.style.height='0px';
	div.style.position='absolute';
	div.style.opacity='0';
	div.style.textAlign='center';
	div.style.transition='width,height,opacity .15s,.15s,.15s';
	div.style.transition='all .25s ease-in-out';
	div.style.zIndex='-999';
	div.style.color='#fff';
	div.style.pointerEvents='none';
	
	document.body.appendChild(div);

	
	
	list=document.querySelectorAll(".hoverJs")
	for(var i in list){
		list[i].onmouseenter=onHover;
		list[i].onmouseleave=onLeave;
	}
	document.onmousemove = docuMove;
	
	
	function docuMove(e){
		var e = e || event,
		scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft,
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		div.style.top = e.clientY  - parseInt(div.style.height)/2 + scrollTop + 'px'; 
		div.style.left = e.clientX - parseInt(div.style.width)/2 + scrollLeft  + 'px';
	};
	
	function onHover(e){
		document.onmousemove=null;
		var x1 = this.offsetLeft,
			y1 = this.offsetTop;
			
		var e=e || event,
		scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft,
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		div.style.lineHeight = div.style.height = this.offsetHeight+'px';
		div.style.width = this.offsetWidth+'px';
		div.style.opacity = 1;
		div.style.top = y1 + 'px'; 
		div.style.left = x1 + 'px';
		if(this.getAttribute('data-hoverJs')!=null) {
		div.innerText = this.getAttribute('data-hoverJs');
		div.style.zIndex = 999;
		}
	}
	function onLeave(e){
		var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft,
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		div.style.opacity = 0;
		div.innerText = null;
		div.style.zIndex = -999;
		document.onmousemove = docuMove;
	}

})();