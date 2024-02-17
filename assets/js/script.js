submit.addEventListener("click", function (e) {
  e.preventDefault();
});

/*****  FullName  ****/
var fullName = document.getElementById("name");
var nameErrorMsg = document.getElementById("erro_of_name");

/*****  Mobile Number  ****/
var mobileNumber = document.getElementById("mobile");
var mobileErrorMsg = document.getElementById("error_of_mobile");

/*****  Email  ****/
var email = document.getElementById("email");
var emailErrorMsg = document.getElementById("error_of_email");

/***** Hospital  ****/
var hospital = document.getElementById("hospital");
var hospitalErrorMsg = document.getElementById("error_of_hospital");

/***** SCFHS_Number  ****/
var scfhsNumber = document.getElementById("SCFHS_Number");
var scfhsErrorMsg = document.getElementById("error_of_scfhs");

/***** ID_Number  ****/
var idNumber = document.getElementById("id_number");
var idErrorMsg = document.getElementById("error_of_id");

/***** Speciality  ****/
var speciality = document.getElementById("speciality");
var specialityErrorMsg = document.getElementById("error_of_speciality");

/***** City  ****/
var city = document.getElementById("city");
var cityErrorMsg = document.getElementById("error_of_city");

submit.addEventListener("click", function () {
  /*****  FullaName  ****/
  // Check if Name Input Field is Empty
  if (fullName.value.length == 0) {
    nameErrorMsg.style.display = "block";
    nameErrorMsg.style.color = "#fff";
    nameErrorMsg.innerHTML = "FullName is Requird!";

    // Check The Name Length
  } else if (fullName.value.length < 2 || fullName.value.length > 20) {
    alert("Name Length should be more than 2 and less than 21 charachters!");
    fullName.focus();
    return false;
  } else {
    nameErrorMsg.style.display = "none";
  }

  /*****  Mobile Number  ****/

  // Check if Mobile Input Field is Empty
  if (mobileNumber.value.length == 0) {
    mobileErrorMsg.style.display = "block";
    mobileErrorMsg.style.color = "#fff";
    mobileErrorMsg.innerHTML = "Mobile Number is Requird!";

    // Check The Mobile Length
  } else if (!mobileNumber.value.match(/^[1-9][0-9]{9}$/)) {
    alert(
      "Mobile number must be 10 characters long number and first digit can't be 0!"
    );
    mobileNumber.focus();
    return false;
  } else {
    mobileErrorMsg.style.display = "none";
  }

  /*****  Email  ****/

  // Check if Email Input Field is Empty
  if (email.value.length == 0) {
    emailErrorMsg.style.display = "block";
    emailErrorMsg.style.color = "#fff";
    emailErrorMsg.innerHTML = "Email is Requird!";

    // Check
  } else if (
    email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    alert("Please enter a valid Email!");
    email.focus();
    return false;
  } else {
    emailErrorMsg.style.display = "none";
  }

  /*****  Hospital  ****/
  // Check if Hospital Input Field is Empty
  if (hospital.value.length == 0) {
    hospitalErrorMsg.style.display = "block";
    hospitalErrorMsg.style.color = "#fff";
    hospitalErrorMsg.innerHTML = "Hospital is Requird!";
  } else {
    hospitalErrorMsg.style.display = "none";
  }

  /*****  SCFHS Number  ****/
  // Check if Name Input Field is Empty
  if (scfhsNumber.value.length == 0) {
    scfhsErrorMsg.style.display = "block";
    scfhsErrorMsg.style.color = "#fff";
    scfhsErrorMsg.innerHTML = "SCFHS Number is Requird!";
  } else {
    scfhsErrorMsg.style.display = "none";
  }

  /*****  ID Number  ****/
  // Check if ID Input Field is Empty
  if (idNumber.value.length == 0) {
    idErrorMsg.style.display = "block";
    idErrorMsg.style.color = "#fff";
    idErrorMsg.innerHTML = "ID Number is Requird!";
  } else {
    idErrorMsg.style.display = "none";
  }

  /*****  Speciality  ****/
  // Check if Speciality Input Field is Empty
  if (speciality.value.length == 0) {
    specialityErrorMsg.style.display = "block";
    specialityErrorMsg.style.color = "#fff";
    specialityErrorMsg.innerHTML = "Speciality is Requird!";
  } else {
    specialityErrorMsg.style.display = "none";
  }

  /*****  City  ****/
  // Check if City Input Field is Empty
  if (city.value.length == 0) {
    cityErrorMsg.style.display = "block";
    cityErrorMsg.style.color = "#fff";
    cityErrorMsg.innerHTML = "City is Requird!";
  } else {
    cityErrorMsg.style.display = "none";
  }
});
