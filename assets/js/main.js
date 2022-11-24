window.addEventListener("DOMContentLoaded", function(event){

});

let redSection = document.querySelector("body > main > section#red");
let orangeSection = document.querySelector("body > main > section#orange");
let yellowSection = document.querySelector("body > main > section#yellow");
let greenSection = document.querySelector("body > main > section#green");
let blueSection = document.querySelector("body > main > section#blue");
let purpleSection = document.querySelector("body > main > section#purple");

let redSectionPosition = redSection.getBoundingClientRect().top;
let orangeSectionPosition = orangeSection.getBoundingClientRect().top;
let yellowSectionPosition = yellowSection.getBoundingClientRect().top;
let greenSectionPosition = greenSection.getBoundingClientRect().top;
let blueSectionPosition = blueSection.getBoundingClientRect().top;
let purpleSectionPosition = purpleSection.getBoundingClientRect().top;

console.log(redSectionPosition);
console.log(orangeSectionPosition);
console.log(yellowSectionPosition);
console.log(greenSectionPosition);
console.log(blueSectionPosition);
console.log(purpleSectionPosition);

function getNextSection(current){

    if(current.id === "red"){

        return document.querySelector("body > main > section#orange");

    }else if(current.id === "orange"){

        return document.querySelector("body > main > section#yellow");

    }else if(current.id === "yellow"){

        return document.querySelector("body > main > section#green");

    }else if(current.id === "green"){

        return document.querySelector("body > main > section#blue");

    }else if(current.id === "blue"){

        return document.querySelector("body > main > section#purple");

    }
}

function getPreviousSection(current){

    if(current.id === "purple"){

        return document.querySelector("body > main > section#blue");

    }else if(current.id === "blue"){

        return document.querySelector("body > main > section#green");

    }else if(current.id === "green"){

        return document.querySelector("body > main > section#yellow");

    }else if(current.id === "yellow"){

        return document.querySelector("body > main > section#orange");

    }else if(current.id === "orange"){

        return document.querySelector("body > main > section#red");

    }

}

let sections = document.querySelectorAll("body > main > section")


for(let i = 0; i < sections.length; i++){
    
    sections[i].addEventListener("wheel", function(event){
        
        
        if(event.deltaY > sections[i].getBoundingClientRect().top) // je vais vers le bas
        {
            
            let currentScrollPosition = sections[i].scrollTop;

            console.log(currentScrollPosition)

            let positionToGo = currentScrollPosition + getNextSection(sections[i]).getBoundingClientRect().top;

            scroll(0, positionToGo);
        }
        else if(event.deltaY < sections[i].getBoundingClientRect().top) // je vais vers le haut
        {
            let currentScrollPosition = sections[i].scrollTop;

            let positionToGo = currentScrollPosition - getPreviousSection(sections[i]).getBoundingClientRect().top;

            scroll(0, positionToGo);
        }
    })
}

