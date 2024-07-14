//tab-function
let projectTabs = document.getElementsByClassName('tab');

const useTab = (event) =>{
    if (event.target.parentNode.children[1].style.display === 'none'){
        event.target.style.borderBottom = '1px solid rgb(75, 38, 38)';
        event.target.parentNode.children[1].style.display = 'block';
    } else{
        event.target.style.borderBottom = 'none';
        event.target.parentNode.children[1].style.display = 'none';
    }
}

for(let index = 0; index < projectTabs.length; index++){
    projectTabs[index].parentNode.children[1].style.display = 'none';
    projectTabs[index].addEventListener('click', useTab);
}

//change-color-function

const background = document.getElementById('button-background');
const circle = document.getElementById('button-circle');
let bool = true;

const switchColor = () =>{
    let backgroundWidth = getComputedStyle(background).width;
    let circleWidth = getComputedStyle(circle).width;
    let body = document.querySelector('body');
    let ipadSides = document.getElementById('outer-smartphone-sides');
    let header = document.querySelector('header');
    let main = document.querySelector('main');
    let leftContainer = document.getElementById('left-container');
    let projects = document.getElementById('projects');
    let skills = document.getElementById('skills');

    if(bool){
        circle.style.right = circleWidth;
        body.style.backgroundColor = 'hsl(0, 0%, 35%)';
        console.log(getComputedStyle(body).backgroundColor);
        main.style.backgroundColor = 'hsl(0, 0%, 35%)';
        bool = false;
    } else{
        circle.style.right = backgroundWidth;
        body.style.backgroundColor = 'hsl(106, 33%, 90%)';
        main.style.backgroundColor = 'hsl(106, 33%, 90%)';
        bool = true;
    }
}

background.addEventListener('click', switchColor);
circle.addEventListener('click', switchColor);

//window size-change-reaction-function for color-mode-button

const sizeChange = () => {
    let backgroundWidth = getComputedStyle(background).width;
    let circleWidth = getComputedStyle(circle).width;

    if(bool){
        circle.style.right = backgroundWidth;
    } else{
        circle.style.right = circleWidth;
    }
}

window.addEventListener('resize', sizeChange);