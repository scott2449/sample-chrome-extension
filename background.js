chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
	 //do something when event is fired!
	 //like putting the request into local storage
	 localStorage.setItem("sample",request);
	});
