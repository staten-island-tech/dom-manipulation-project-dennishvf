const DOMselectors= {
    form: document.getElementById("form"),
    namesubmit: document.getElementById("animal-name"),
    h2s: document.getElementById("headin"),
};
console.log(DOMselectors.h2s);

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
