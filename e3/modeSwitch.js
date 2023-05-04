// Codes for the light & dark mode switch function 
let isDark = false;

// Set the default colour for both light & dark mode. Using the same blue I used in the style.css  
let darkCol = "#090640";
let lightCol = "#00eeff";

// Code to let the web instantly follow users device (whether they are using light or dark mode), before users can change the mode by themselves
if(window.matchMedia("(prefers-color-scheme: dark)").matches){
  isDark = true;
  document.documentElement.style.setProperty("--col-01", lightCol);
  document.documentElement.style.setProperty("--col-02", darkCol);
  document.getElementById("mode-button").innerHTML = "Light Mode";
}

function switchModes(){
// Code to set the function of changing dark and light mode 
  if (isDark){
// Setting the colours used for both mode 
// Starting with light mode 
    isDark = false;
    document.documentElement.style.setProperty("--col-01", darkCol);
    document.documentElement.style.setProperty("--col-02", lightCol);
    document.getElementById("mode-button").innerHTML = "Dark Mode";
  } else {
// Code to set the colours used for dark mode 
    isDark = true;
    document.documentElement.style.setProperty("--col-01", lightCol);
    document.documentElement.style.setProperty("--col-02", darkCol);
    document.getElementById("mode-button").innerHTML = "Light Mode";
  }
}