const btnMenu = document.querySelector(`.navButton`);
const span1 = document.querySelector(`.navButton span:nth-child(1)`);
const span2 = document.querySelector(`.navButton span:nth-child(2)`);
const span3 = document.querySelector(`.navButton span:nth-child(3)`);
const navMenu = document.querySelector(`.navMenu`);
const ul = document.querySelector(`.navMenu ul`);




btnMenu.addEventListener(`click`, function(){
navMenu.classList.toggle(`menu`)

if(navMenu.classList.contains(`menu`)){
    span1.style.top = `47%`;
    span1.style.transform = `rotate(-45deg)`;
    span2.style.display = `none`;
    span3.style.bottom = `47%`;
    span3.style.transform = `rotate(45deg)`;}
    else{
        span1.style.top = `4px`;
        span1.style.transform = `rotate(0deg)`;
        span2.style.display = `block`;
        span3.style.bottom = `4px`;
        span3.style.transform = `rotate(0deg)`;

    }
}

);

ul.addEventListener(`click`, function(){

    if(navMenu.classList.contains(`menu`)){
    navMenu.classList.remove(`menu`);

    span1.style.top = `4px`;
    span1.style.transform = `rotate(0deg)`;
    span2.style.display = `block`;
    span3.style.bottom = `4px`;
    span3.style.transform = `rotate(0deg)`;


}});


// ----------- DAY_&_NIGHT -------------------

const btnDay = document.querySelector(`.day`);
const btnNight = document.querySelector(`.night`);
const html = document.querySelector(`html`);

btnNight.addEventListener(`click`, function(){
    html.style.setProperty("--color-shadow", `#222`)
    html.style.setProperty("--color-bright", ` #fff`)
});

btnDay.addEventListener(`click`, function(){
    html.style.setProperty("--color-shadow", `#fff`)
    html.style.setProperty("--color-bright", ` #222`)
});