// * get img from html

var slider_img = document.images[0],
    counter = 0

function ChangeImage() {
    counter++;
    if (counter > 5) {
        counter = 1;
    }
    slider_img.src = "images/" + counter + ".jpg";

}

function start() {
    changing_time = setInterval(ChangeImage, 1750);
}
function stop() {
    clearInterval(changing_time);
}

function next() {

    counter += 1
    if (counter > 5) {
        counter = 1
    }
    slider_img.src = "images/" + counter + ".jpg";

}
function prev() {

    counter -= 1
    if (counter < 1) {
        counter = 5
    }
    // console.log(counter)
    slider_img.src = "images/" + counter + ".jpg";

}