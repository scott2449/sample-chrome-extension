//this is where the code you want executed in the context of the page goes .. could be functions, event, or just some direct onload stuff
//in this case create a button and put it on the page!
var button = document.createElement("input");
button.setAttribute("type", "button");
button.setAttribute("value", "Add to Extenstion");
button.style.float="right";
button.onclick=function(){
	chrome.extension.sendRequest(document.location.href); //this gets sent onto background.html
}
document.body.appendChild(button);
