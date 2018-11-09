function createAccount() {
  var profile = {
    firstName: document.getElementById('first_name').value,
    lastName: document.getElementById('last_name').value,
    email: document.getElementById('new_email').value,
    password: document.getElementById('new_pswd').value
  };
  if (emailExist(profile.email)) {
    localStorage.setItem(profile.email, JSON.stringify(profile));
    for (var key in localStorage) {
      console.log(key)
    }
    return true;
  }
  else {
    alert('Email already registered. Please try another.');
    return false;
  }
}

function  emailExist(email) {
  var check = false;
  /*If the object does not exist, return true */
  if (localStorage.getItem(email) == null) {
    check = true;
  }
  return check;
}
