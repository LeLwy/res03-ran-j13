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

function getPreviousSection(){

    let sections = document.querySelectorAll("body > main > section");

    if(current.id === "purple"){

        return document.querySelector("body > main > section#blue");

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


