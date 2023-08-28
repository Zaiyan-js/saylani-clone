const donorsBtn = document.querySelector(".donorsBtn");
const mosquitoKit = document.querySelector("#mosquito");
const rationBag = document.querySelector("#ration");
const food = document.querySelector("#food");
const shelter = document.querySelector("#shelter");

setInterval(() => {
    donorsBtn.classList.toggle("donor-color");
}, 500);



var foodInt = setInterval(foodInterval, 10)
var family = setInterval(familyInterval, 10)
var education = setInterval(educationInterval, 10)
var medical = setInterval(medicalInterval, 10)
let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;

function foodInterval() {
    count1++
    document.querySelector("#number1").innerHTML = count1
    if (count1 == 200) {
        clearInterval(foodInt)
    }
}

function familyInterval() {
    count2++
    document.querySelector("#number2").innerHTML = count2
    if (count2 == 12) {
        clearInterval(family)
    }
}

function educationInterval() {
    count3++
    document.querySelector("#number3").innerHTML = count3
    if (count3 == 25) {
        clearInterval(education)
    }
}

function medicalInterval() {
    count4++
    document.querySelector("#number4").innerHTML = count4
    if (count4 == 125) {
        clearInterval(medical)
    }
}

const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },
});




