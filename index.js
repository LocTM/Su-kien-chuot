let imgObj
imgObj = document.getElementById('myImage');
function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '700px';
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 100 + 'px';
}
window.onload = init;