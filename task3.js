const response = await fetch("questions.json");
    const questions = await response.json();

  const main = document.getElementById("main");
  
  questions.forEach((q) => {
    const form = document.createElement("form")
    main.appendChild(form);

    const qtext = document.createElement("p")
    form.appendChild(qtext)
    qtext.textContent = q["question"]
        console.log(form);

        const container = document.createElement('div');
        document.className = "grid-container"
        form.appendChild(container);

      const allAnswser = q.answers;
  })





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