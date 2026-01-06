const opacityInput = document.querySelector("#opacity");
const borderInput = document.querySelector("#border");
const images = document.querySelectorAll("img");
const btn = document.querySelector("#btn");

opacityInput.addEventListener("input", () => {
    images.forEach(img => {
        img.style.opacity = opacityInput.value;
    });
});

borderInput.addEventListener("input" , ()=>{
    images.forEach(img => {
        img.style.borderRadius = borderInput.value + "%";
    });
});

btn.addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.setItem("opacity", opacityInput.value);
    localStorage.setItem("borderRadius", borderInput.value);
});