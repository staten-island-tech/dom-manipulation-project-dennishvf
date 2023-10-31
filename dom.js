const DOMselectors= {
    form: document.getElementById("form"),
    AniNameform: document.getElementById("animal-name"),
    AniImgform: document.getElementById("image"),
    AniDescform: document.getElementById("Type-of-diet"),
    title: document.querySelectorAll(".card-title"),
    image: document.querySelectorAll(".pic"),
    desc: document.querySelectorAll(".animal-desc"),
    button: document.getElementById("btn"),
};
console.log(DOMselectors.title);
console.log(DOMselectors.image);
console.log(DOMselectors.desc);

function makeAnimal() {
const make= {name:DOMselectors.AniNameform, img:DOMselectors.AniImgform,desc:DOMselectors.AniDescform,};
return make;
}

function addcard(){
document.querySelector(".flex-container").insertAdjacentHTML("afterbegin", `div class="card"><div class="card-title">${Animal.title}<div></div>`);
}

DOMselectors.form.addEventListener("submit", (event) => {
    event.preventDefault();
    DOMselectors.title.forEach((hed) => (hed.textContent = DOMselectors.AniNameform.value));
});

DOMselectors.form.addEventListener("submit", (event2) => {
    DOMselectors.desc.forEach((des) => (des.textContent = DOMselectors.AniDescform.value));
});

function getridofcard () {
    const remove = document.querySelector(".btn2");
    remove.forEach((erase) => {
        erase.addEventListener("press", (eventf) => {
            eventf.target.parentElement.remove();
        });
    });
}
