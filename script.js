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

    if(bool){
        circle.style.right = circleWidth;
        bool = false;
    } else{
        circle.style.right = backgroundWidth;
        bool = true;
    }
}

background.addEventListener('click', switchColor);
circle.addEventListener('click', switchColor);