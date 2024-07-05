let projectTab = document.getElementsByClassName('tab')[0];
let projectListElement = document.getElementsByClassName('list-element')[0];
let projectDescription = document.getElementsByClassName('project-description')[0];
let bool = false;

const useTab = () =>{
    if (bool === false){
        projectTab.style.border = 'none';
        projectTab.style.borderBottom = '1px solid rgb(75, 38, 38)'
        projectListElement.style.height = '50%';
        projectListElement.style.border = '1px solid rgb(75, 38, 38)';
        projectDescription.style.display = 'static';
        bool = true;
    } else{
        bool = false;
        projectTab.style.border = '1px solid rgb(75, 38, 38)';
        projectListElement.style.height = 'fit-content';
        projectListElement.style.border = 'none';
        projectDescription.style.display = 'none';
    }
}

projectTab.addEventListener('click', useTab);
