chrome.cookies.get({
	url: 'https://github.com',
	name: 'dotcom_user'
}, function(cookie) {
	console.log(cookie.value);
});

chrome.cookies.getAll({}, function(cookies) {
	console.log(cookies);
});
