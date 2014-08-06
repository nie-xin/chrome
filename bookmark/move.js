chrome.bookmarks.move('16', {
    parentId: '7',
    index: 4
}, function(bookmark) {
    console.log(bookmark);
});

