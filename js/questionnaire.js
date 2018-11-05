/*!
 * Questionnaire.js
 */

/* VAR AND FUNCTION FOR FRATERNITY AND SORORITY BUTTONS */
var greekOrganization = "";

$('.org-btn').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();
    console.log(buttonClicked);
    
    // store it in greekOrganization
    greekOrganization = buttonClicked;
    console.log(greekOrganization);
    
});


/* VAR AND FUNCTION FOR ATTRIBUTE BUTTONS */
var clickedArray = [];

$('.number-button').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();
    console.log(buttonClicked);
    
    // store it as the last element in the array
    clickedArray.push(buttonClicked);
    console.log(clickedArray);
    
});

// FUNCTION FOR SIGN UP
// var signUpType = "";

// $('.signin-btn').on('click',function() {
//     // get the button that was clicked
//     var buttonClicked = $(this).html();
//     console.log(buttonClicked);
    
//     // store it in signUpType
//     signUpType = buttonClicked;
//     console.log(signUpType);
    
// });

// function change() {
//   // var change = document.getElementById("check");
//   if (signUpType.value == "Student") {
//     document.test.elements["savereport"].value = "True";
//     //document.test.submit();
//   } else {
//     change.value = "true";
//   }
// }

// function myFunction() {
//     var str = "Free Web Building Tutorials!";
//     var result = str.link("https://www.w3schools.com");
//     document.getElementById("demo").innerHTML = result;
// }