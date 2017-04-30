function iFrameResize() { 
	document.getElementById("contentFrame").style.height = document.getElementById("contentFrame").contentWindow.document.body.scrollHeight + "px";
}

function setSource(url){
    document.getElementById('contentFrame').src = url;
    iFrameResize();
}
