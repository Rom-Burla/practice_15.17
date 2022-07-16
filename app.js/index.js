let students = [];

function addStudent() {
  debugger;

  let name = document.getElementById("name");
  let profession = document.getElementById("profession");
  let grade = document.getElementById("grade");
  let carType = document.getElementById("cartype");
  let carYear = document.getElementById("caryear");
  let carColor = document.getElementById("carcolor");
  let sChars = "!@#$%^&*()+=-[]\\';,./{}|\":<>?";

  for (let i = 0; i < name.value.length; i++) {
    if (sChars.indexOf(name.value.charAt(i)) != -1) {
      alert("Your username has special characters. These are not allowed.");
      name.value = "";
      return false;
    }
    if (Number(name.value)) {
      alert("Numbers are not a name!!!");
      name.value = "";
      return false;
    }
  }
  if (grade.value > 100) {
    alert("grade can only be between 0 to 100");
    grade.value = "";
    throw "grade can only be between 0 to 100";
  }
  for (let i = 0; i < carColor.value.length; i++) {
    if (sChars.indexOf(carColor.value.charAt(i)) != -1) {
      alert("Your car color has special characters. These are not allowed.");
      carColor.value = "";
      return false;
    }
    if (Number(carColor.value)) {
      alert("Numbers are not a color!!!");
      carColor.value = "";
      return false;
    }
  }
  for (let i = 0; i < profession.value.length; i++) {
    if (sChars.indexOf(profession.value.charAt(i)) != -1) {
      alert("Your profession has special characters. These are not allowed.");
      profession.value = "";
      return false;
    }
    if (Number(profession.value)) {
      alert("Numbers can't do your job!!!");
      profession.value = "";
      return false;
    }
  }
  for (let i = 0; i < carType.value.length; i++) {
    if (sChars.indexOf(carType.value.charAt(i)) != -1) {
      alert(
        "Your car manufacturer has special characters. These are not allowed."
      );
      carType.value = "";
      return false;
    }
    if (Number(carType.value)) {
      alert("Numbers don't manufacture cars!!!");
      carType.value = "";
      return false;
    }
  }

  if (name.value == "") {
    alert("Please enter your name");
    return false;
  } else if (profession.value == "") {
    alert("Please enter your profession");
    return false;
  } else if (grade.value == "") {
    alert("grade can only be between 0 to 100");
    return false;
  } else if (carType.value == "") {
    alert("Please enter your car manufacturer");
    return false;
  } else if (carYear.value > 2022) {
    alert("Year of manufacture can only be between 1970 to 2022");
    carYear.value = "";
    throw "";
  } else if (carYear.value < 1970) {
    alert("Year of manufacture can only be between 1970 to 2022");
    carYear.value = "";
    throw "";
  } else if (carColor.value == "") {
    alert("Please enter your car's color");
    return false;
  }

  let studentInfo = {
    name: name.value,
    job: profession.value,
    grade: parseInt(grade.value),
    car: {
      cartype: carType.value,
      caryear: parseInt(carYear.value),
      carcolor: carColor.value,
    },
  };

  students.push(studentInfo);
  console.log(students);
  name.value = "";
  profession.value = "";
  grade.value = "";
  carType.value = "";
  carColor.value = "";
  carYear.value = "";
}
function limit(grade) {
  if (grade.value.length > 3) {
    grade.value = grade.value.substring(0, 3);
  }
}
function limitYear(carYear) {
  if (carYear.value.length > 4) {
    carYear.value = carYear.value.substring(0, 4);
  }
}
function display() {
  let studentsList = document.querySelector(".student-list");
  studentsList.innerHTML = "<div>";

  for (let student of students) {
    studentsList.innerHTML += "<h1>student name: " + student.name + " </h1>";
    studentsList.innerHTML +=
      "<span>student job: " + student.job + " </span> </br>";
    studentsList.innerHTML +=
      "<span>student grade: " + student.grade + " </span> </br>";
    studentsList.innerHTML +=
      "<span>student car type: " + student.car.cartype + " </span> </br>";
    studentsList.innerHTML +=
      "<span>student car year: " + student.car.caryear + " </span> </br>";
    studentsList.innerHTML +=
      "<span>student car color: " + student.car.carcolor + " </span> </br>";
  }

  studentsList.innerHTML += "</div>";
}
