function fratSignup() {
  var letters = document.getElementById('greek_letters').value;
  var name = document.getElementById('greek_name').value;
  var email = document.getElementById('email').value;
  var pswd = document.getElementById('password').value;

  if(localStorage.getItem(frat.name === name) {
    var frat = {letters: letters, name: name, email: email, password: pswd};
    var fratStore = JSON.stringify(frat);
    localStorage.setItem('fratStore',frat);
  }
  else {
    return alert("Already exists!");
  }

  console.log(frat);

  for(var i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i)) + "[" + localStorage.getItem(localStorage.key(i)) + "]";
  }

 /*
  console.log(frat);
  localStorage.setItem("frat", fratStore);
  var descriptionString = localStorage.getItem("frat");
  console.log(descriptionString);
  */
}
