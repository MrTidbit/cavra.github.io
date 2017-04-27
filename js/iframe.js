function iFrameResize() { 
	document.getElementById("contentFrame").style.height = document.getElementById("contentFrame").contentWindow.document.body.scrollHeight + "px"; 
}