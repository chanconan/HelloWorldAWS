/**
 * 
 */

function sendAjaxGet(url, func){
	var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.HttpRequest");
	xhr.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			func(this);
		}
	}
	xhr.open("GET", url, true);
	xhr.send();
}

function showMeTheWorld(xhr){
	if(xhr.responseText){
		document.getElementById("showMeTheWorld").innerHTML = xhr.responseText;
	}
}

window.onload = function(){
	document.getElementById("takeMeThere").addEventListener('click', function(){
		sendAjaxGet("/HelloWorldAws/takeMeThere", showMeTheWorld);
	}, false);
	
}