document.addEventListener("DOMContentLoaded", function() {
    const colorBox = document.getElementById("colorBox");
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    let currentColorIndex = 0;

    colorBox.style.width = "200px";
    colorBox.style.height = "200px";
    colorBox.style.backgroundColor = colors[currentColorIndex];
    colorBox.style.margin = "20px auto";
    
    colorBox.addEventListener("click", function() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        colorBox.style.backgroundColor = colors[currentColorIndex];
    });
});