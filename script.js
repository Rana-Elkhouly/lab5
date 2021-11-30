function blueBorder(x) {
    x.style.border = "solid 5px blue";
}

function checkName(fullname) {
    fullname.style.border = "solid 1px black";
    if( fullname.value.length <= 3){
        document.getElementById("invalidName").innerHTML = "invalid name";
        document.getElementById("invalid").src = "invalid.jpg"
        return true;
    }
    else{
        document.getElementById("invalidName").innerHTML = " ";
        fullname.blur();
        document.getElementById("invalid").src = "valid.jpg"
        return false;
    }
}

function checkPass(pass){
const password= document.getElementById('psw');

    if (pass.value !== password.value){
        document.getElementById("invalidPass").innerHTML = "password and repeat password should be the same";
        password.style.backgroundColor = "red";
        pass.style.backgroundColor = "red";
        return true;
    } 
    else{
        pass.blur();
        document.getElementById("invalidPass").innerHTML = " ";
        password.style.backgroundColor = "green";
        pass.style.backgroundColor = "green";
        return false;
    }
}
const fullname =  document.getElementById("fullName");
const pass = document.getElementById("psw-repeat");

fullname.addEventListener('blur', function(){
checkName(fullname)
})
pass.addEventListener("blur",function(){
    checkPass(pass)
})

const form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    console.log(checkPass(pass));
    if ( checkName(fullname) == true || checkPass(pass) == true){
        e.preventDefault();
        document.getElementById("validate").innerHTML = "plz correct the validation errors first";
    }
})

const imgArr = ["2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
const img = document.getElementById("img");
const play = document.getElementById("play");
const stopG = document.getElementById("stop");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
let startindex = 0;
let startGallery;

function nextImage(){
    /// 1 increase lel counter
    startindex++;
    if(startindex === imgArr.length){
        startindex = 0;
    }
    img.src = imgArr[startindex]
}
function previousImg(){
    startindex--;
    if(startindex < 0){// -1
        startindex = imgArr.length - 1;
    }
    img.src =imgArr[startindex];
}
next.addEventListener('click', ()=>{
    nextImage()
})

play.addEventListener('click', ()=>{
    startGallery = setInterval(nextImage, 500)
})
stopG.addEventListener('click',()=>{
    clearInterval(startGallery)
})
previous.addEventListener("click",()=>{
    previousImg()
})
img.addEventListener("mouseover",()=>{
    startGallery = setInterval(nextImage, 500)
})
img.addEventListener("mouseleave",()=>{
    clearInterval(startGallery)
})

const imgGAllery = document.getElementById("img-gallery");
const images = document.querySelectorAll("#img-gallery img");

imgGAllery.addEventListener("mouseover",()=>{
    images.forEach(element=>{
        element.classList.add('opacityChange')
    })
})

imgGAllery.addEventListener("mouseleave",()=>{
    images.forEach(element=>{
        element.classList.remove('opacityChange')
    })
})