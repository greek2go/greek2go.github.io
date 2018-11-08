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



/* FUNCTIONS TO HELP WITH SAVING QUESTIONNAIRE VALUES */

// FUNCTION TO UPDATE ACADEMICS VALUE
var academics_value = 0;
$('.academics-number-button').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();
    // console.log(buttonClicked);
    
    // store button value into academics_value
    academics_value = buttonClicked;
    console.log("Academics: " + academics_value);
    
});

// FUNCTION TO UPDATE ATHLETICS VALUE
var athletics_value = 0;
$('.athletics-number-button').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();
    // console.log(buttonClicked);
    
    // store button value into athletics_value
    athletics_value = buttonClicked;
    console.log("Athletics: " + athletics_value);
    
});

// FUNCTION TO UPDATE LEADERSHIP VALUE
var leadership_value = 0;
$('.leadership-number-button').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();
    // console.log(buttonClicked);
    
    // store button value into leadership_value
    leadership_value = buttonClicked;
    console.log("Leadership: " + leadership_value);
    
});

// FUNCTION TO UPDATE SOCIAL VALUE
var social_value = 0;
$('.social-number-button').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();
    // console.log(buttonClicked);
    
    // store button value into social_value
    social_value = buttonClicked;
    console.log("Social: " + social_value);
    
});

// FUNCTION TO UPDATE PHILANTHROPY VALUE
var philanthropy_value = 0;
$('.philanthropy-number-button').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();
    // console.log(buttonClicked);
    
    // store button value into philanthropy_value
    philanthropy_value = buttonClicked;
    console.log("Philanthropy: " + philanthropy_value);
    
});


// VARIABLES TO STORE DUMMY DATA FOR FIVE FRATS
myStorage = window.localStorage;

var theta_tau = {
    name: "Theta Tau",
    academics_value: 5, 
    athletics_value: 3,
    leadership_value: 4, 
    social_value: 2, 
    philanthropy_value: 1
};

var theta_tau_values = [5, 3, 4, 2, 1];
// myStorage.setItem("theta_tau_values", theta_tau_values);


var sigma_chi = {
    name: "Sigma Chi", 
    academics_value: 3, 
    athletics_value: 5,
    leadership_value: 1, 
    social_value: 4, 
    philanthropy_value: 2
};

var sigma_chi_values = [3, 5, 1, 4, 2];


var phi_delta_theta = {
    name: "Phi Delta Theta", 
    academics_value: 2, 
    athletics_value: 4,
    leadership_value: 1, 
    social_value: 3, 
    philanthropy_value: 5
};

var phi_delta_theta_values = [2, 4, 1, 3, 5];


var kappa_sigma = {
    name: "Kappa Sigma", 
    academics_value: 1, 
    athletics_value: 2,
    leadership_value: 3, 
    social_value: 4, 
    philanthropy_value: 5
};

var kappa_sigma_values = [1, 2, 3, 4, 5];


var beta_theta_pi = {
    name: "Beta Theta Pi",     
    academics_value: 3, 
    athletics_value: 4,
    leadership_value: 5, 
    social_value: 2, 
    philanthropy_value: 1
};

var beta_theta_pi_values = [3, 4, 5, 2, 1];


var frat_values = [theta_tau_values, sigma_chi_values, phi_delta_theta_values, kappa_sigma_values, beta_theta_pi_values]

var frats = [theta_tau, sigma_chi, phi_delta_theta, kappa_sigma, beta_theta_pi]



// FUNCTION TO FIND TOP THREE FRATS TO DISPLAY ON MATCHES PAGE
// function Comparator(a, b) {
//     if (a[0] < b[0]) return -1;
//     if (a[0] > b[0]) return 1;
//     return 0;
// }

var keys = [];
var values = [];
var frats_to_values = [];
function findTopThreeFrats() {
    var total_deviation = 20;
    // var total = 0;
    var percent = 100;
    var user_values = [academics_value, athletics_value, leadership_value, social_value, philanthropy_value];
    for (index = 0; index < frats.length; index++) {
        var total = 0;
        for (num = 0; num < frat_values.length; num++) {
            total += Math.abs(user_values[num] - frat_values[index][num]);
        }
        var diff_decimal = total / total_deviation;
        var match_decimal = 1 - diff_decimal;
        var match_percent = match_decimal * percent;
        // myStorage.setItem(match_percent, frats[index].name);
        myStorage.setItem(frats[index].name, match_percent);
    }

    // var keys = [];
    // var values = [];
    // var values_to_frats = [];
    // var index = 0;

    // for (var key in myStorage) {
    //     keys.push(key);
    // //     console.log("IN FOR LOOP")
    // //     values_to_frats.push([myStorage.key(index), myStorage.getItem(key)]);
    // //     index++;
    // }

    // keys.sort();


    // values_to_frats = values_to_frats.sort(Comparator);
}

function Comparator(a, b) {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    return 0;
}

var index = 0;
for (var key in myStorage) {
    values.push(parseInt(myStorage.getItem(key), 10));
    frats_to_values.push([myStorage.key(index), parseInt(myStorage.getItem(key), 10) ]);
    // keys.push(key);
    index++;
}
var sorted_values = values.sort(function(a, b) {return b - a});
var sorted_frats_to_values = frats_to_values.sort(Comparator);
// keys.sort();

function sortFrats() {
    for (var i = 0; i < myStorage.length; i++) {
        var key = myStorage.key(i);
        var value = myStorage[key];
        if(value.equals(desired_value)) {
            console.log(key + " => " + value);
        }
    }
}

var org_name_1 = $('#temp'), container;
// for (var key in grocery_list) {
for (var index = 0; index < 3; index++) {
    container = $('<div id="frat_1" class="container"></div>');
    org_name_1.append(container);

    container.append('<div class="name">' + frats_to_values[index][0] +'</div>');
    container.append('<div class="match_percentage">' + "Match Percentage: " + frats_to_values[index][1] + "%" + '</div>');
    // container.append('<div class="price">' + grocery_list[key].price +'</div>');
}

















// var keys = [];
// var values = [];
// var values_to_frats = [];
// var index = 0;

// for (var key in myStorage) {
//     // keys.push(localStorage[key]);
//     values_to_frats.push([myStorage.key(index), myStorage.getItem(key)]);
//     index++;
// }

// keys.sort();
// var result=keys.join();
// var len = result.length;
// var formatresult;
// for (var i=0; i<len; i++) {
//     formatresult+= result[i]+ "\n";
// }


// function Comparator(a, b) {
//     if (a[0] < b[0]) return -1;
//     if (a[0] > b[0]) return 1;
//     return 0;
// }

// values_to_frats = values_to_frats.sort(Comparator);

 // var myArray = [
 //   [1, 'alfred', '...'],
 //   [23, 'berta', '...'],
 //   [2, 'zimmermann', '...'],
 //   [4, 'albert', '...'],
 // ];

 // myArray = myArray.sort(Comparator);
 // console.log(myArray);

