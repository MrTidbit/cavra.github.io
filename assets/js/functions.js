var contentContainer = document.getElementById('contentContainer');
var contentFrame = document.getElementById('contentFrame');

function setSource(url){
	$(function() {
		$(document.getElementById('contentContainer')).animate({opacity: 0}, 1000, function() {
			contentFrame.src = url;
		});
	});

	$(function() {
		$(document.getElementById('contentContainer')).animate({opacity: 1}, 1000);
	});
}

// Do I really want this?
function iFrameResize() { 
	document.getElementById('contentContainer').style.height = document.getElementById('contentFrame').contentWindow.document.body.scrollHeight + "px";
}
