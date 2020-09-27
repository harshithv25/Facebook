const modal = document.querySelector('.modaly');
const preview = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");
console.log('hello');

preview.forEach(function(previews) {
    previews.addEventListener("click", function() {
        modal.classList.add("open");
        original.classList.add("open");
        var originaltext = previews.getAttribute("alt");
        var originalSrc = previews.getAttribute("src");
        original.src = `${originalSrc}`;
        imgText.textContent = originaltext;
    });
});

modal.addEventListener("click", function(e) {
    if (e.target.classList.contains("modaly")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});