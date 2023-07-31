// Add your code to this file
document.addEventListener("DOMContentLoaded", function () {
    const startersImage = document.querySelector("#starters_image_div img");
    startersImage.style.border = "2px dashed #FDEFA6";

    const pokemonImages = document.querySelectorAll(".pokemon_images");
    pokemonImages.forEach((image) => {
      image.style.border = "2px dashed #FDEFA6";
    });
  
    const body = document.querySelector("body");
    body.style.backgroundColor = "blue";

    const footer = document.querySelector("footer");
    footer.textContent = "All Star Code - DOM Project";
});
  