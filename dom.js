const DOMselectors= {
    form: document.getElementById("form"),
    namesubmit: document.getElementById("animal-name"),
    title: document.querySelectorAll(".card-title"),
    button: document.getElementById("btn"),
};
console.log(DOMselectors.title);

DOMselectors.form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(DOMselectors.namesubmit.value);
    DOMselectors.title.forEach((hed) => (hed.textContent = DOMselectors.namesubmit.value));
});

function makecard() {

}
function addcard(anicard){

}
const anicard= makecard
