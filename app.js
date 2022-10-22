const navItem = document.querySelectorAll(".navigation ul li");

function activeLink() {
    navItem.forEach((item) => {
        item.classList.remove("active")

    });
    this.classList.add("active");
}

navItem.forEach((item) => {
    item.addEventListener("click", activeLink);
})