var employeeInput; // = $("#empName").text().trim();
var roleInput; //= $("#Role").text().trim();
var dateInput; //= $("#startDate").text().trim();
var rateInput; // = $("#monthRate").text().trim();
function employeeAdd() {
    $("#employee-text").append(
        "<tr>" +
        "<td>" + employeeInput + "</td>"
        + "<td>" + roleInput + "</td>"
        + "<td>" + dateInput + "</td>"
        + "<td>" + rateInput + "</td>"
        + "<td>" + rateInput + "</td>"
        + "<td>" + rateInput + "</td>"
        + "</tr>"
    );
}

var firebaseConfig = {
    apiKey: "AIzaSyD9LaUKBuapwyjbO6uiJcH0dnmgxCwmQKo",
    authDomain: "test-project1-532da.firebaseapp.com",
    databaseURL: "https://test-project1-532da.firebaseio.com",
    projectId: "test-project1-532da",
    storageBucket: "test-project1-532da.appspot.com",
    messagingSenderId: "925834655253",
    appId: "1:925834655253:web:be5635a9234794a2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

database = firebase.database()

database.ref().on("child_added", function (snapshot) {

    if (snapshot.val().employee == undefined) {
        employeeInput = "Name";
    } else {
        employeeInput = snapshot.val().employee
    }





    console.log(rateInput)

    if (snapshot.val().employee == undefined) {
        roleInput = "Role";
    } else {
        roleInput = snapshot.val().role
    }

        if (snapshot.val().employee == undefined){
            dateInput = "Employee";
        }else{


        dateInput = snapshot.val().startdate
        }

        if (snapshot.val().employee == undefined){
            rateInput = "Rate";
        }else{
        rateInput = snapshot.val().monthly
        }
        employeeAdd()

    });

$("body").on("click", "#submit", function () {

    employeeInput = $("#empName").val().trim();
    roleInput = $("#Role").val().trim();
    dateInput = $("#startDate").val().trim();
    rateInput = $("#monthRate").val().trim();

    console.log(employeeInput)
    database.ref().push({
        employee: employeeInput,
        role: roleInput,
        startdate: dateInput,
        monthly: rateInput
    })


});