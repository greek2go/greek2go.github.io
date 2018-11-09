function validate() {
  var profile = {
    email: document.getElementById('email').value,
    pswd: document.getElementById('pswd').value
  };

  var data = JSON.parse(localStorage.getItem(profile.email));
  console.log(data);

  if (data == null) {
    alert('Email is not registered. Please create an account.');
    return false;
  }
  else {
    if (data.password != profile.pswd) {
      alert('Password is incorrect. Please try again.')
      return false;
    }
    else {
      return true;
    }
  }
}
