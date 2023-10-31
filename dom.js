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

function makeAnimal() {
const make= {name:DOMselectors.AniNameform.value, img:DOMselectors.AniImgform.value,desc:DOMselectors.AniDescform.value,};
return make;
}

function addcard(Animal){
document.querySelector(".flex-container").insertAdjacentHTML("afterbegin", `div class="card"><div class="card-title">${Animal.name}<div></div>`);
}

DOMselectors.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const monkey = makeAnimal();
    addcard(monkey)
});


function getridofcard () {
    const remove = document.querySelector(".btn2");
    remove.forEach((erase) => {
        erase.addEventListener("press", (eventf) => {
            eventf.target.parentElement.remove();
        });
    });
}
