const DOMselectors= {
    form: document.getElementById("form"),
    namesubmit: document.getElementById("animal-name"),
    h2s: document.querySelectorAll(".card-title"),
};
console.log(DOMselectors.h2s);

DOMselectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(DOMselectors.namesubmit.value);
    DOMselectors.h2s.forEach((hed) => (hed.textContent = DOMselectors.namesubmit.value));
});

function makecard() {

}
function addcard(anicard){

}
const anicard= makecard
