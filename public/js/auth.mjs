
const forms = document.querySelector(".forms"),
links = document.querySelectorAll(".link");
login = document.getElementById("login")
register = document.getElementById("register")
    

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})
