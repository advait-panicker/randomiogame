function keyPress(keyCode, onoff) {
    switch (keyCode) {
        case 87:
            up = onoff;
            break;
        case 83:
            down = onoff;
            break;
        case 68:
            right = onoff;
            break;
        case 65:
            left = onoff;
            break;
    }
}
document.addEventListener('keydown', key => keyPress(key.keyCode, true), false);
document.addEventListener('keyup', key => keyPress(key.keyCode, false), false);
document.addEventListener('wheel', zoom => fov += zoom.wheelDelta > 0 ? -1 : 1 , false);