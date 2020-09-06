export default function start(){

    let elements = document.querySelectorAll("[data-title]")

    for (const element of elements) {
        let popover = document.createElement('div')
        popover.classList.add('popover')
        popover.style.top = `${element.clientHeight + 4}px`
        element.appendChild(popover)
        popover.innerHTML = element.attributes["data-title"].nodeValue
        element.classList.add('popover-parent')

   
        if(isInLimitRight(popover,element)) {
            popover.style.right =  `${popover.clientWidth/2}px`
        }
        if(isInLimitLeft(popover,element)) {
            popover.style.left = `${10}px`
        }

  

 
 

    }

    //console.log(isInLimitRight(popover,element,document),window.innerWidth)
}


function isInLimitRight(popover,parent){
    return (parent.getBoundingClientRect().right + popover.clientWidth) > window.innerWidth 
}

function isInLimitLeft(popover,parent){
    return (parent.getBoundingClientRect().left - popover.clientWidth) < 0
}