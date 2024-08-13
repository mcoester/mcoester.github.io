const floatIn = (outerElement, paragraph) =>{
    let bodyWidth = parseFloat(getComputedStyle(outerElement).width);
    let textWidth = parseFloat(getComputedStyle(paragraph).width);
    let distanceToTheLeft = (bodyWidth - textWidth) / 2;
    const styleSheet = document.styleSheets[0];
    let keyframes = `@keyframes fromLeft{
        0%{
            opacity: 0;
            transform: translateX(${distanceToTheLeft}px);
        }
        20%{
            opacity: 1;
            transform: translateX(${distanceToTheLeft * 0.75}px);
        }
        40%{
            opacity: 1;
            transform: translateX(${distanceToTheLeft * 0.5}px);
        }
        60%{
            opacity: 1;
            transform: translateX(${distanceToTheLeft * 0.25}px);
        }
        85%{
            opacity: 1;
            transform: translateX(-${distanceToTheLeft * 0.02}px);
        }
        95%{
            opacity: 1;
            transform: translateX(${distanceToTheLeft * 0.01}px);    
        }    
        100%{
            opacity: 1;
            transform: translateX(0);
        }
    }`
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    paragraph.style.animation = 'fromLeft 1.2s linear forwards';
}

export {floatIn};