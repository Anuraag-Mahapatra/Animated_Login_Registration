const container = document.querySelector(".container");;
const sign_up_link = document.querySelector(".sign-up-link");
const sign_in_link = document.querySelector(".sign-in-link");
sign_up_link.addEventListener("click", ()=> {
    container.classList.add("current");
})
sign_in_link.addEventListener("click", ()=> {
    container.classList.remove("current");
})