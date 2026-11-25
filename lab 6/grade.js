// Error 1 (grade.js Line 5):
// if(name = "") should be if(name == "")

// Error 2 (grade.js Line 9):
// isNan() should be isNaN()

// Error 3 (grade.js Line 14):
// && should be ||

// Error 4 (grade.js Line 28):
// getElementByID() should be getElementById()

// Error 5 (grade.js Line 30):
// colour should be color

// Error 6 (grade.html Line 17):
// showtable() should be showTable()

// Error 7 (grade.js Line 38):
// for loop starts at 1, should start at 0

// Error 8 (grade.js Line 42):
// innerHtml should be innerHTML

function checkMark() {

    let name = document.forms["gradeForm"]["name"].value;
    let mark = document.forms["gradeForm"]["mark"].value;

    if (name == "") {
        alert("Name must be filled out.");
        return false;
    }

    if (mark == "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    mark = parseInt(mark);

    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    let grade;

    if (mark >= 80) {
        grade = "A";
    }
    else if (mark >= 65) {
        grade = "B";
    }
    else if (mark >= 50) {
        grade = "C";
    }
    else {
        grade = "F";
    }

    document.getElementById("result").innerHTML =
        name + " got grade " + grade;

    if (grade == "A" || grade == "B") {
        document.getElementById("result").style.color =
            "green";
    }
    else if (grade == "C") {
        document.getElementById("result").style.color =
            "orange";
    }
    else {
        document.getElementById("result").style.color =
            "red";
    }

    document.getElementById("dateTime").innerHTML =
        "Checked on: " + new Date();

    return false;
}

function randomMark() {

    let randomNumber =
        Math.floor(Math.random() * 101);

    document.getElementById("mark").value =
        randomNumber;
}

function showTable() {

    let grades = ["A", "B", "C", "F"];

    let ranges = [
        "80-100",
        "65-79",
        "50-64",
        "0-49"
    ];

    let tableHTML =
        "<table><tr><th>Grade</th><th>Range</th></tr>";

    for (let i = 0; i < grades.length; i++) {

        tableHTML +=
            "<tr><td>" + grades[i] +
            "</td><td>" + ranges[i] +
            "</td></tr>";
    }

    tableHTML += "</table>";

    document.getElementById("tableContainer").innerHTML =
        tableHTML;
}