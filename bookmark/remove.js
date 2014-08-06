/**
 * remove: removes bookmark & empty groupes
 */
chrome.bookmarks.remove('16', function() {
    console.log('Bookmark 16 has been removed');
});

/**
 * removeTree: removes bookmark & groupes contain bookmarks
 */
chrome.bookmarks.removeTree('6', function() {
    console.log('Bookmark groupe 6 has been removed');
});
