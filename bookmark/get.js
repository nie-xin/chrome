/**
 * getTree: get the whole structure of bookmark
 */
chrome.bookmarks.getTree(function(bookmarkArray) {
    console.log(bookmarkArray);
});

// getChildren: get first child of identified node
chrome.bookmarks.getChildren('0', function(bookmarkArray) {
    console.log(bookmarkArray);
});

// getSubTree: get all sub bookmark of an identified node
chrome.bookmarks.getSubTree('0', function(bookmarkArray) {
    console.log(bookmarkArray);
});

// get: get bookmarks by id
chrome.bookmarks.get(['16', '17'], function(bookmarkArray) {
    console.log(bookmarkArray);
});

// getRecent: get recently added bookmarks
chrome.bookmarks.getRecent(5, function(bookmarkArray) {
    console.log(bookmarkArray);
});

