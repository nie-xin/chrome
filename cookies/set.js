chrome.cookies.set({
	'url': 'http://github.come/test_cookie',
	'name': 'TEST',
	'value': 'foo',
	'secure': false,
	'httpOnly': false
}, function(cookie) {
	console.log(cookie);
});
