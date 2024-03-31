//your JS code here. If required.
// Retrieve the element with the id "level"
var targetElement = document.getElementById('level');

// Initialize a variable to count the DOM level
var domLevel = 0;

// Traverse up the DOM tree until reaching the root HTML element
while (targetElement !== document.documentElement) {
    targetElement = targetElement.parentNode;
    domLevel++;
}

// Display the DOM level using alert
alert("The level of the element is: " + domLevel);
