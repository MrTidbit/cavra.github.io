var contentContainer = document.getElementById('contentContainer');
var contentFrame = document.getElementById('contentFrame');

function setSource(url){
	$(function() {
		$(document.getElementById('contentContainer')).animate({opacity: 0}, 1000, function() {
			contentFrame.src = url;
			iFrameResize();
		});
	});

	$(function() {
		$(document.getElementById('contentContainer')).animate({opacity: 1}, 1000);
	});
}

function iFrameResize() { 
	contentFrame.style.height = contentFrame.contentWindow.document.body.scrollHeight + "px";
}
