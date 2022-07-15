let students = [];

function addStudent(){
debugger
let name = document.getElementById("name");
let profession = document.getElementById("profession");
let grade = document.getElementById("grade");
let carType = document.getElementById("cartype");
let carYear = document.getElementById("caryear");
let carColor = document.getElementById("carcolor");

  let studentInfo = {
    name: name.value,
    job: profession.value,
    grade:  grade.value,
    car: {
      cartype: carType.value,
      caryear: parseInt(carYear.value),
      carcolor: carColor.value,
    },
  };
  
  students.push(studentInfo);
  console.log(students);
}

function display() {
  let studentsList = document.querySelector(".student-list");
  studentsList.innerHTML = "<div>";
  
	for(let student of students) {
  	studentsList.innerHTML += '<h1>student name: '+ student.name +' </h1>';
    studentsList.innerHTML += '<span>student job: '+ student.job +' </span> </br>';
    studentsList.innerHTML += '<span>student grade: '+ student.grade +' </span> </br>';
    studentsList.innerHTML += '<span>student car type: '+ student.car.cartype +' </span> </br>';
    studentsList.innerHTML += '<span>student car year: '+ student.car.caryear +' </span> </br>';
    studentsList.innerHTML += '<span>student car color: '+ student.car.carcolor +' </span> </br>';
  }
  
    studentsList.innerHTML += "</div>";
}