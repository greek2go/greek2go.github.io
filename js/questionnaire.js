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



/* ALLSTON: EDITS START HERE */

/* FUNCTIONS TO HELP WITH SAVING QUESTIONNAIRE VALUES */

// FUNCTION TO UPDATE ACADEMICS VALUE
var academics_value = 0;
$('.academics-number-button').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();
    
    // store button value into academics_value
    academics_value = buttonClicked;
    console.log("Academics: " + academics_value);
    
});

// FUNCTION TO UPDATE ATHLETICS VALUE
var athletics_value = 0;
$('.athletics-number-button').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();
    
    // store button value into athletics_value
    athletics_value = buttonClicked;
    console.log("Athletics: " + athletics_value);
    
});

// FUNCTION TO UPDATE LEADERSHIP VALUE
var leadership_value = 0;
$('.leadership-number-button').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();
    
    // store button value into leadership_value
    leadership_value = buttonClicked;
    console.log("Leadership: " + leadership_value);
    
});

// FUNCTION TO UPDATE SOCIAL VALUE
var social_value = 0;
$('.social-number-button').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();
    
    // store button value into social_value
    social_value = buttonClicked;
    console.log("Social: " + social_value);
    
});

// FUNCTION TO UPDATE PHILANTHROPY VALUE
var philanthropy_value = 0;
$('.philanthropy-number-button').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();
    
    // store button value into philanthropy_value
    philanthropy_value = buttonClicked;
    console.log("Philanthropy: " + philanthropy_value);
    
});


/* VARIABLES TO STORE DUMMY DATA FOR FIVE FRATS */
// LOCALSTORAGE OBJECT
myStorage = window.localStorage;

// THETA TAU
var theta_tau = {
    name: "Theta Tau",
    academics_value: 5, 
    athletics_value: 3,
    leadership_value: 4, 
    social_value: 2, 
    philanthropy_value: 1
};
var theta_tau_values = [5, 3, 4, 2, 1];

// SIGMA CHI
var sigma_chi = {
    name: "Sigma Chi", 
    academics_value: 3, 
    athletics_value: 5,
    leadership_value: 1, 
    social_value: 4, 
    philanthropy_value: 2
};
var sigma_chi_values = [3, 5, 1, 4, 2];

// PHI DELTA THETA
var phi_delta_theta = {
    name: "Phi Delta Theta", 
    academics_value: 2, 
    athletics_value: 4,
    leadership_value: 1, 
    social_value: 3, 
    philanthropy_value: 5
};
var phi_delta_theta_values = [2, 4, 1, 3, 5];

// KAPPA SIGMA
var kappa_sigma = {
    name: "Kappa Sigma", 
    academics_value: 1, 
    athletics_value: 2,
    leadership_value: 3, 
    social_value: 4, 
    philanthropy_value: 5
};
var kappa_sigma_values = [1, 2, 3, 4, 5];

// BETA THETA PI
var beta_theta_pi = {
    name: "Beta Theta Pi",     
    academics_value: 3, 
    athletics_value: 4,
    leadership_value: 5, 
    social_value: 2, 
    philanthropy_value: 1
};
var beta_theta_pi_values = [3, 4, 5, 2, 1];

// ARRAY OF EACH OF THE FRAT'S QUESIONNAIRE VALUES
var frat_values = [theta_tau_values, sigma_chi_values, phi_delta_theta_values, kappa_sigma_values, beta_theta_pi_values]

// ARRAY OF EACH OF THE FRAT OBJECTS
var frats = [theta_tau, sigma_chi, phi_delta_theta, kappa_sigma, beta_theta_pi]


// LOCAL VARIABLES TO HELP WITH FINDING THE TOP 3 FRATS
var keys = [];
var values = [];
var frats_to_values = [];

// FUNCTION TO CALCULATE MATCH PERCENTAGE FOR EACH FRAT TO FIND TOP 3 FRATS
function findTopThreeFrats() {

    // LOCAL VARIABLES TO STORE TOTAL POSSIBLE DIFFERENCE AND MULTIPLY DECIMAL TO PERCENTAGE
    var total_deviation = 20;
    var percent = 100;

    // ARRAY OF EACH OF THE USER'S VALUE, WHICH IS USED TO CALCULATE MATCH PERCENTAGE
    var user_values = [academics_value, athletics_value, leadership_value, social_value, philanthropy_value];

    // LOOP THROUGH EACH FRAT TO CALCULATE MATCH PERCENTAGE WITH EACH FRAT
    for (index = 0; index < frats.length; index++) {

        // LOCAL VARIABLE TO STORE TOTAL DIFFERENCE VALUE
        var total = 0;

        // LOOP THROUGH EACH VALUE OF CURRENT FRAT TO FIND TOTAL DIFFERENCE VALUE
        for (num = 0; num < frat_values.length; num++) {
            total += Math.abs(user_values[num] - frat_values[index][num]);
        }

        // CALCULATE MATCH PERCENTAGE
        var diff_decimal = total / total_deviation;
        var match_decimal = 1 - diff_decimal;
        var match_percent = match_decimal * percent;

        // STORE FRAT NAME AS KEY AND MATCH PERCENTAGE AS VALUE INTO LOCALSTORAGE
        myStorage.setItem(frats[index].name, match_percent);
    }
}

// COMPARATOR FUNCTION TO COMPARE MATCH PERCENTAGES TO HELP FIND TOP 3 FRATS
function Comparator(a, b) {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    return 0;
}

// LOCAL VARIABLE TO HELP ITERATE THROUGH EACH ENTRY IN LOCALSTORAGE
var index = 0;

// LOOP THROUGH EACH KEY IN LOCALSTORAGE
for (var key in myStorage) {

    // PUSH MATCH PERCENTAGE AS AN INT VALUE INTO VALUES ARRAY
    values.push(parseInt(myStorage.getItem(key), 10));

    // PUSH ARRAY WITH FRAT NAME AND MATCH PERCENTAGE AS AN INT VALUE INTO FRATS_TO_VALUES ARRAY
    frats_to_values.push([myStorage.key(index), parseInt(myStorage.getItem(key), 10) ]);

    // INCREMENT INDEX TO ACCESS NEXT ENTRY IN LOCALSTORAGE
    index++;
}

// SORT VALUES ARRAY BY DECREASING MATCH PERCENTAGE
var sorted_values = values.sort(function(a, b) {return b - a});

// SORT FRATS_TO_VALUES ARRAY BY DECREASING MATCH PERCENTAGE
var sorted_frats_to_values = frats_to_values.sort(Comparator);

// FUNCTION TO HELP SORT FRATS
function sortFrats() {
    for (var i = 0; i < myStorage.length; i++) {
        var key = myStorage.key(i);
        var value = myStorage[key];
        if(value.equals(desired_value)) {
            console.log(key + " => " + value);
        }
    }
}



/* MATCHES PAGE JS */
// LOCAL VARIABLE TO DISPLAY TOP 3 FRATS AND HANDLE MAGIC NUMBER
var org_name_1 = $('#temp'), container;
var top_3 = 3;

// LOOP TO DISPLAY TOP 3 FRATS
for (var index = 0; index < top_3; index++) {
    // CREATE CONTAINER IN HTML
    container = $('<div id="frat_1" class="container"></div>');

    // APPEND CONTAINER TO ORG_NAME_1, WHICH DEALS WITH THE 'TEMP' ID
    org_name_1.append(container);

    // APPEND FRAT NAME AND MATCH PERCENTAGE TO CONTAINER TO BE DISPLAYED ON MATCHES PAGE
    container.append('<div class="name">' + frats_to_values[index][0] +'</div>');
    container.append('<div class="match_percentage">' + "Match Percentage: " + frats_to_values[index][1] + "%" + '</div>');
}



/* EXPLORE PAGE JS */
// LOCAL VARIABLE TO DISPLAY ALL FRATS AND HANDLE MAGIC NUMBER
var org_name_2 = $('#explore'), container;

// LOOP TO DISPLAY TOP 3 FRATS
for (var index = 0; index < frats.length; index++) {
    // CREATE CONTAINER IN HTML
    container = $('<div id="frat_2" class="container"></div>');

    // APPEND CONTAINER TO ORG_NAME_1, WHICH DEALS WITH THE 'TEMP' ID
    org_name_2.append(container);

    // APPEND FRAT NAME AND MATCH PERCENTAGE TO CONTAINER TO BE DISPLAYED ON MATCHES PAGE
    container.append('<div class="name">' + frats_to_values[index][0] +'</div>');
    container.append('<div class="match_percentage">' + "Match Percentage: " + frats_to_values[index][1] + "%" + '</div>');
}
/* ALLSTON: EDITS END HERE */
