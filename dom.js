const DOMselectors= {
    form: document.querySelector("form"),
    namesubmit: document.querySelector(".animal-name"),
    h2: document.querySelector("h2"),
};
console.log(DOMselectors.h2s)
DOMselectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(DOMselectors.namesubmit.value);
    DOMselectors.h2s.forEach(
        (el) => (el.textContent = DOMselectors.namesubmit.value)
    );
});

function makecard() {

}
function addcard(anicard){

}
const anicard= makecard
