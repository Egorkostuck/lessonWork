const workPlace = document.getElementById('work_place');
const brash = {
    color: 'black',
    size: 5
}

const clickOnDocument = (event) => {
    const positionX = event.clientX;
    const positionY = event.clientY;
    if (positionX < 160) {
        return
    }
    const pixel = document.createElement('span');
    pixel.style.left = positionX + 'px';
    pixel.style.top = positionY + 'px';
    pixel.style.backgroundColor = brash.color;
    pixel.style.width = brash.size + 'px';
    workPlace.appendChild(pixel);
    console.log(positionX, positionY);
}

// document.addEventListener('mousemove', clickOnDocument);

document.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', clickOnDocument);

})
document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', clickOnDocument)
})

const colorTools = document.getElementById('color_tools');
const rangeTools = document.getElementById('range_tools');

const getNewColor = (event) => {
    console.log(event.target.value);
    brash.color = event.target.value;
}
const getNewRange = (event) => {
    console.log(event.target.value);
    brash.size = event.target.value;
}
colorTools.addEventListener('input', getNewColor);
rangeTools.addEventListener('input', getNewRange);