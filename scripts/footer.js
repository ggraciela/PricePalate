function searchwithlastkeyword(){
  var keyword = (localStorage.getItem("keywordsearch"));

  if (keyword != null) {
    window.location.href = "searchresults.html?value=" + keyword;
  } else {
    window.location.href = "searchresults.html"
  }
}