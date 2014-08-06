chrome.bookmarks.update('16', {
    title: 'Gmail',
    url: 'https://mail.google.com/'
}, function(bookmark) {
    console.log(bookmark);
});

