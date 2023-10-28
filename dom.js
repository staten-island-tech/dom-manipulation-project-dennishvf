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
const make= {name:DOMselectors.AniNameform, desc:DOMselectors.AniDescform, img:DOMselectors.AniImgform};
return make;
}

function addcard(anicard){
document
.querySelector(".flex-container")
.insertAdjacentHTML("afterbegin", `div class="card"><div class="card-title">${Animal.title}<div></div>`);
}

const anicard= makecard
function getridofcard () {
    const remove = document.querySelectorAll(".btn2");
    remove.forEach((erase) => {
        erase.addEventListener("press", (eventf) => {
            eventf.target.parentElement.remove();
        })
    })
}

DOMselectors.form.addEventListener("submit", (event) => {
    event.preventDefault();
   //
    DOMselectors.title.forEach((hed) => (hed.textContent = DOMselectors.Aninameform.value));
});
