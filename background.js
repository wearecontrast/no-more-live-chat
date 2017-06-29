var NoMoreLiveChat = function() {
	var _domains = ["intercom.io", "js.driftt.com"];
	
	this.isLiveChatUrl = function(url){
		return _domains.some((domain) => {
			return (url.indexOf(domain) != -1);
		});
	};
};

chrome.webRequest.onBeforeRequest.addListener(
	function(details){
		var nmlc = new NoMoreLiveChat();
		return { cancel: nmlc.isLiveChatUrl(details.url) };
	},
	{
		urls: ["<all_urls>"],
		types: ["script"]
	},
	["blocking"]
);