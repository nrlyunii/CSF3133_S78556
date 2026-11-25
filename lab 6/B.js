function checkMark() {
let name = document.forms["gradeForm"]["name"].value;
 let mark = document.forms["gradeForm"]["mark"].value;
 
 if (name = "") {
 alert("Name must be filled out.");
 return false;
 }
 if (isNan(mark)) {
 alert("Please enter a valid numeric value.");
 return false;
 }
 mark = parseInt(mark);
 if (mark < 0 && mark > 100) {
 alert("Mark must be between 0 and 100.");
 return false;
}
 let grade;
 if (mark >= 80) {
 grade = "A";
 } else if (mark >= 65) {
 grade = "B";
 } else if (mark >= 50) {
 grade = "C";
 } else {
 grade = "F";
 }
 document.getElementByID("result").innerHTML =
 name + " got grade " + grade;
 document.getElementById("result").style.colour = "green";
 return true;
 }
 
 function showTable() {
 let grades = ["A", "B", "C", "F"];
 let ranges = ["80-100", "65-79", "50-64", "0-49"];
 let tableHTML = "<table>";
 for (let i = 1; i < grades.length; i++) {
 tableHTML += "<tr><td>" + grades[i] + "</td><td>" + ranges[i] + 
"</td></tr>";
 }
 tableHTML += "</table>";
 document.getElementById("tableContainer").innerHtml = tableHTML;
 }