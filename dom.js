const DOMselectors= {
    form: document.getElementById("form"),
    AniNameform: document.getElementById("animal-name"),
    AniImgform: document.getElementById("image"),
    AniDescform: document.getElementById("Type-of-diet"),
    title: document.querySelectorAll(".card-title"),
    image: document.querySelectorAll(".pic"),
    desc: document.querySelectorAll(".animal-desc"),
    button: document.getElementById("btn"),
}

function makeAnimal() {
const make= {
    name:DOMselectors.AniNameform.value,
     img:DOMselectors.AniImgform.value,
     desc:DOMselectors.AniDescform.value,}
return make
}

function addcard(Animal){
document.querySelector(".flex-container").insertAdjacentHTML("afterbegin", `<div class="card">
<h1 class="card-title">${Animal.name}</h1>
<img src="${Animal.img}" alt="" class="pic">
<h2 class="animal-desc">${Animal.desc}</h2>
<button class="btnd">Remove the Card</button>
</div>`)

const btnr = document.querySelector(".btnd")
btnr.addEventListener("click", (event) => {
    btnr.parentElement.remove(Animal)
})
}

DOMselectors.form.addEventListener("submit", (event) => {
    event.preventDefault()
    const Concard = makeAnimal()
    addcard(Concard)
    emptytbox()
})

function emptytbox(){
    DOMselectors.AniNameform.value = null;
    DOMselectors.AniImgform.value = null;
    DOMselectors.AniDescform.value = null;
}

