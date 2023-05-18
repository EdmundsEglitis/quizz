const toggleTheme = document.getElementById("toggle-theme");
const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandler);

const mybutton = document.getElementById("mybtn");
mybutton.addEventListener("click", checkAmountCorrect);


function toggleThemeHandler() {
  if (toggleTheme.checked) {
    
    html.dataset.theme = "dark";
    localStorage.setItem('theme','dark');
    
    const element1 = document.querySelector('.light');
element1.style.display="block";

const element2 = document.querySelector('.dark');
  element2.style.display="none";
  } else {
    html.dataset.theme = "light";
    localStorage.setItem('theme','light');


    const element1 = document.querySelector('.light');
  element1.style.display="none";

  const element2 = document.querySelector('.dark');
    element2.style.display="block";
  }
}



const theme = localStorage.getItem('theme');


if (theme == "light" || !theme){
  html.dataset.theme ='light';
  document.getElementById("toggle-theme").checked=false;

}
if(theme == "dark"){
  html.dataset.theme = "dark";
  document.getElementById("toggle-theme").checked=true;

}
function checkAmountCorrect() {
  console.log("func checkAmountCorrect start");
  var result = 0;
  if (document.getElementById("answ1").checked == true) {
    result = result + 1;
  }
  if (document.getElementById("answ3").checked == true) {
    result = result + 1;
  }
  if (document.getElementById("answ4").checked == true) {
    result = result + 1;
  }
  if (document.getElementById("answ2").checked == true) {
    result = "Roma 💀";
  }
  if (document.getElementById("answ2").checked != true) {
    document.getElementById("isCorrect").innerHTML =
      "Pareizi izvelejies " + result + " no 3";
  } else {
    document.getElementById("isCorrect").innerHTML = result;
  }
  console.log("func checkAmountCorrect end");
}


