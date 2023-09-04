function changeColor() {
    document.body.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
}
