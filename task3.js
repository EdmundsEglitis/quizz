async function json() {
    const response = await fetch("questions (1).json");
    const questions = await response.json();
    console.log(questions);
  }






// Saglabā to checkboxu JS mainīgājā
const toggleTheme = document.getElementById("toggle-theme");
const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandler);

function toggleThemeHandler() {
  if (toggleTheme.checked) {
    html.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    html.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  }
}

const localStorageTheme = localStorage.getItem("theme");

if (localStorageTheme == "light" || !localStorageTheme) {
  html.dataset.theme = "light";
} else {
  html.dataset.theme = "dark";
  toggleTheme.checked = true;
}


const visasPareizaAtbilde = ["Indonēzija", "Austrālija", "Liepāja"] 

  for (let i = 1; i<=3; i++) {

    const visasAtbildes = document.getElementsByName(i);

  

visasAtbildes.forEach((atbilde) => {

  atbilde.addEventListener("click",() =>
      checkHandler(visasPareizaAtbilde[i-1],visasAtbildes)
  );
  });

}
/**
 * iekrāso atbildes vienā jautājumā
 * @param {string} pareizaAtbilde - pareizās atbildes ar vārdiem jāsakrīt ar vārdiem, value.
 * @param {nodelist} visasAtbildes - 4 input elementi atbildes uz jautājumu.
 */
function checkHandler(pareizaAtbilde,visasAtbildes) {

  visasAtbildes.forEach((atbilde) => {

    if (atbilde.checked == true) {

      if (atbilde.value == pareizaAtbilde) {

        atbilde.parentNode.style.backgroundColor = "Green";

      } else {

        atbilde.parentNode.style.backgroundColor = "red";

      }

    } else {

      atbilde.parentNode.style.backgroundColor = "var(--secondary-color)";
}
});
}

function saskaitiDivus(a,b){
    return a+b;
}