// Codes to create the fake loading screen 
function loadPageAfterDelay(loadTime, url){
// Code to show the loading bar 
  document.getElementById("load-link").style.display = 'none';
// Code to show 'throbber' code which are used to create the fake loading screen 
  document.getElementById("load-throbber").style.display = 'block';
  setTimeout(() => {
    window.location.href = url;
  }, loadTime);
  
}