/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sectionCollection = Array.from(document.querySelectorAll("section"))
const navvbar = document.getElementById("navbar__list")


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

  
    // for each section that's in "sectionCollection" Array
    for (section of sectionCollection) {
        listLocation = section.getAttribute("id")
        listName = section.getAttribute("data-nav");
       

        // creating list
        listy = document.createElement('li')
        listy.innerHTML = `<a class="menu__link" href=#${listLocation}>${listName}</a>`

       navvbar.appendChild(listy)
    }
   

    
    
   // This function is for setting up the activate state for the sections
    function checkViewPort() {
        const viewPort = section.getBoundingClientRect();
        return ((viewPort.top >= 0) && (viewPort.top < 300))
    }
    

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function activatingTheActiveClass() {  
    // this loop will make everything inside of it work the exact way for every element in the "sectionCollectio" Array
    for (section of sectionCollection) {
        if(checkViewPort(section)) {
            // does it contain this class?
            if (!section.classList.contains('your-active-class')) {
                  // if no, then this will add the class
                section.classList.add('your-active-class')
            }
        } else { // and here will remove the class when its out of the viewport
            section.classList.remove('your-active-class')
        }
    }
}
// build the nav




// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
document.addEventListener('scroll', activatingTheActiveClass)

// scroll to top using the to-top button
const toTop = document.querySelector('.top')

window.addEventListener('scroll', function() {

    if (window.pageYOffset > 700) {

        toTop.classList.add('active')
    } else {
        toTop.classList.remove('active')
    }
})


