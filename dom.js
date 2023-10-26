const DOMselectors= {
    form: document.getElementById("form"),
    Aninameform: document.getElementById("animal-name"),
    Aniimgform: document.getElementById("image"),
    Anidescform: document.getElementById("Type-of-diet"),
    title: document.querySelectorAll(".card-title"),
    image: document.querySelectorAll(".pic"),
    desc: document.querySelectorAll(".animal-desc"),
    button: document.getElementById("btn"),
};
console.log(DOMselectors.title);
console.log(DOMselectors.image);
console.log(DOMselectors.desc);

DOMselectors.form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(DOMselectors.Aninameform.value);
    DOMselectors.title.forEach((hed) => (hed.textContent = DOMselectors.Aninameform.value));
});
DOMselectors.form.addEventListener("submit", (event2) => {
    console.log(DOMselectors.Aniimgform.value);
    DOMselectors.image.forEach((pict) => (pict.textContent = DOMselectors.Aniimgform.value));
});
DOMselectors.form.addEventListener("submit",(event3) => {
    console.log(DOMselectors.Anidescform.value);
    DOMselectors.desc.forEach((des) => (des.textContent = DOMselectors.Anidescform.value));
});

function makecard() {

}
function addcard(anicard){

}
const anicard= makecard
