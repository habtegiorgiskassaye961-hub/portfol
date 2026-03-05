let images = ['image/screen1.png','image/screen2.png','image/screen3.png','image/screen4.png'];
let index = 0;

function showslide(){
    document.getElementById("imoges").src = images[index];
}

function nextslide(){
    index++;
    if(index >= images.length){
        index = 0;
    }
    showslide();
}

function prevslide(){
    index--;
    if(index < 0){
        index = images.length - 1;
    }
    showslide();
}