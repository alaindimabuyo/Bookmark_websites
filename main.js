// listen for form submit
document.getElementById('myForm').addEventListener('submit', addList)

function addList(e){
    var siteName = document.getElementById('siteName').value
    var siteURL = document.getElementById('siteURL').value

   
    e.preventDefault();

    var bookMark = {
        name : siteName,
        url : siteURL
    }

    // stores array 

    if(localStorage.getItem('bookmarks') === null){
        var bookmarks = [];

        bookmarks.push(bookMark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
        
        
    } else {
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
        bookmarks.push(bookMark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
        fetchBookmarks();
        
    }
}

// delete bookmark function 
function deleteBookmark(url){
    //get bookmark from localstorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    //loop through bookmarks
    for(var i = 0 ; i < bookmarks.length; i++){
        if(bookmarks[i].url == url){
            bookmarks.splice(i, 1)
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    fetchBookmarks();
}
// get the bookmark

function fetchBookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    console.log(bookmarks)

    var bookMarkResults = document.getElementById('bookmarksResults')

    bookMarkResults.innerHTML = '';

    for(var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name
        var url = bookmarks[i].url
        bookMarkResults.innerHTML +=  '<div class = "well">' + '<h3>' + name + 
        '<a class = "btn btn-default" target = "_blank" href ="'+url+'"> Visit </a>' +
                '<a onclick = "deleteBookmark(\''+url+'\')" class = "btn btn-danger" href ="#"> Delete </a>' +
        '</h3>' + '</div>'
    }

    

                            
                            

}


