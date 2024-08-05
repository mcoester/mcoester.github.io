//tab-function
let projectTabs = document.getElementsByClassName('tab');

const useTab = (event) =>{
    if (event.target.parentNode.children[1].style.display === 'none' && bool === true){
        event.target.style.borderBottom = '1px solid rgb(75, 38, 38)';
        event.target.parentNode.children[1].style.display = 'block';
    }else if(event.target.parentNode.children[1].style.display === 'none' && bool === false){
        event.target.style.borderBottom = '1px solid hsl(51, 91%, 95%)';
        event.target.parentNode.children[1].style.display = 'block';
    }else {
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
    let links = document.getElementsByClassName('link');
    let main = document.querySelector('main');
    let leftContainer = document.getElementById('left-container');
    let projects = document.getElementById('projects');
    let tab = document.getElementsByClassName('tab');
    let listElement = document.getElementsByClassName('list-element');
    let skills = document.getElementById('skills');
    let stylesheet = document.styleSheets[0];
    let rules = stylesheet.cssRules;

    if(bool){
        circle.style.right = circleWidth;
        body.style.backgroundColor = 'hsla(203, 94%, 19%, 1)';
        body.style.color = 'hsl(51, 91%, 95%)';
       // console.log(getComputedStyle(body).backgroundColor);
       
        ipadSides.style.backgroundColor = 'hsla(0, 0%, 62%, 1)';
        main.style.backgroundColor = 'hsla(0, 5%, 45%, 1)';
        main.style.borderColor = 'hsl(51, 91%, 95%)';
        header.style.backgroundColor = 'hsla(203, 94%, 19%, 1)';
        header.style.borderColor = 'hsl(51, 91%, 95%)'
        //Schleife um Farbe von links zu verändern
        for(let index = 0; index < links.length; index++){
            links[index].style.color = 'hsl(51, 91%, 95%)';
        }
        leftContainer.style.backgroundColor = 'hsla(203, 94%, 19%, 1)';
        leftContainer.style.border = 'solid 1px hsl(51, 91%, 95%)';
        projects.style.backgroundColor = 'hsla(203, 94%, 19%, 1)';
        projects.style.border = 'solid 1px hsl(51, 91%, 95%)';
        //Schleife um border-color der Projekte-Tabs zu ändern
        for(let index= 0; index < listElement.length; index++){
            listElement[index].style.borderColor = 'hsl(51, 91%, 95%)';
        }
        /*for(let index= 0; index < tab.length; index++){
            tab[index].children[0].style.backgroundColor = 'hsl(203, 83%, 40%, 1)';
        }*/
       for(let index = 0; index < rules.length; index++){
        if(rules[index].selectorText === '.tab:hover'){
            rules[index].style.backgroundColor = 'hsl(203, 83%, 40%, 1)';
            break;
        }
       }
       for(let index = 0; index < rules.length; index++){
        if(rules[index].selectorText === '.tab::after'){
            rules[index].style.borderTopColor = 'hsl(51, 91%, 95%)';
            break;
        }
       }
        //color: yellow im dark-mode
        //hover-blue:'hsl(203, 83%, 40%, 1)';

        skills.style.backgroundColor = 'hsla(203, 94%, 19%, 1)';
        skills.style.border = 'solid 1px hsl(51, 91%, 95%)';
        bool = false;
    } else{
        circle.style.right = backgroundWidth;
        body.style.backgroundColor = 'hsl(106, 33%, 90%, 1)';
        body.style.color = '#3B7D45';
        main.style.backgroundColor = 'hsla(106, 33%, 90%, 1)';
        main.style.borderColor = 'black';
        ipadSides.style.backgroundColor = 'hsla(0, 0%, 62%, 1)';
        header.style.backgroundColor = 'hsla(51, 91%, 95%)';
        header.style.borderColor = 'black';
        for(let index = 0; index < links.length; index++){
            links[index].style.color = '#3B7D45';
        }
        leftContainer.style.backgroundColor = 'hsla(51, 91%, 95%)';
        leftContainer.style.border = 'none';
        projects.style.backgroundColor = 'hsla(51, 91%, 95%)';
        projects.style.border = 'none';
        for(let index= 0; index < listElement.length; index++){
            listElement[index].style.borderColor = 'black';
        }
        for(let index = 0; index < rules.length; index++){
            if(rules[index].selectorText === '.tab:hover'){
                rules[index].style.backgroundColor = 'hsl(51, 91%, 90%)';
                break;
            }
        }
        for(let index = 0; index < rules.length; index++){
            if(rules[index].selectorText === '.tab::after'){
                rules[index].style.borderTopColor = '#3B7D45';
                break;
            }
           }
        skills.style.backgroundColor = 'hsla(51, 91%, 95%)';
        skills.style.border = 'none';

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

const onOffButton = document.getElementById('on-off-button');
const screen = document.getElementById('on-off-screen');
const header = document.querySelector('header');
const main = document.querySelector('main');
screen.style.backgroundColor = 'transparent';

const offOn = () =>{
    if(screen.style.backgroundColor === 'transparent'){
        screen.style.backgroundColor = 'hsl(237, 17%, 24%)';
        screen.removeChild(header);
        screen.removeChild(main);
    } else{
        screen.style.backgroundColor = 'transparent';
        screen.appendChild(header);
        screen.appendChild(main);
    }
}

onOffButton.addEventListener('click', offOn);