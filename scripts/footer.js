function searchwithlastkeyword(){
  var keyword = (localStorage.getItem("keywordsearch"));

  if (keyword != null) {
    window.location.href = "searchResults.html?value=" + keyword;
  } else {
    window.location.href = "searchResults.html"
  }
}