/* 
1.Variables
2. Functions
3. Loops
4. Conditional Statements
5. Event handlers
6. DOM
7. Pop Ups
*/

//What is a keyword? Fixed Word in that language that you cannot use for anything else apart from the job it was selected to do.

//DATA TYPES - int, float, string, bool, char 
//let , var, const - scope, reassignment

let my_name = "Farhath";

//FUNCTIONS - V.Imp - Building blocks of coding.

//Function definition
function clean_utensil( ) {
  //1. get used plate
  //2. apply soap.
  //3. Clean with water
  //4. Dry and keep back on the rack.
}

//Function CALL
clean_utensil();

// function greet_person(name){ // function definition
//   alert("Hi, welcome to my webpage "+name);
// }

//Example of a function call with an ARGUMENT
// greet_person("Riya");

//3 POP Ups.
//1. Alert
//2. Confirm
//3. Prompt

// let user_response = "";

// user_response = prompt("this is an alerrt POP UP.");

// console.log(user_response);

//Conditional Statement
// let age = 16;

// if (age>21){
//   alert("You are free to go in.");
// }
  
// else if(age>18){
//   alert("Entry granted only with a Guardian!");
// }
  
// else{
//   alert("Entry Denied!");
// }

for(let counter= 1; counter <= 10; counter++) {
  console.log("the current value of the counter varaible is "+counter);
  console.log("Farhath");
}



let control_of_education = document.getElementById("edu");

control_of_education.addEventListener('click', function(){
  control_of_education.innerHTML = "Education was clicked!";
});


/*Tasks - JavaScript
1. Making the Toggle Theme button work.
2. Making admin login button work.
3. Make the admin login section work. Check the creds and give/restrict access to User Messages.
4. Make Contact me section work - store the user response in your Database.
5. Display user messages in the User-Responses section.
*/


//Task 2 - Making admin login button work

let control_of_admin_section = document.getElementById("admin-login");

function ShowAdminLogin(){
  control_of_admin_section.style.display = "block";
}

//Task 3 - Making the admin section work.
//1. Get the control of the form - because we have to put a SUBMIT event on it.
//2. Get the data which is written on the username and password fields.
//3. set the submit button as type "submit" so that your listener will be able to catch. it.

let control_of_admin_form = document.getElementById("admin-form");
let control_of_user_responses_section = document.getElementById("user-messages");

control_of_admin_form.addEventListener("submit", function(){
  let username = document.getElementById("input_username").value;
  let password = document.getElementById("input_password").value;

  //This is not how it is done in a Production system.
  // Diff btw Dev Environemt and Production Env?

  let stored_username = "Farhath";
  let stored_password = "KatrinaKaif";

  // In a prod env, this would either sit in the DB or in .env file

  //LOGIC GATES???
  if (username == stored_username && password == stored_password) {
    alert("Access granted!");
    control_of_admin_section.style.display = "none"; //Hide
    control_of_user_responses_section.style.display = "block"; //Visible
  }
  else{
    alert("Access Denied!");
  }
});

//Task - Make Toggle theme button work
let control_of_toggleBtn = document.getElementById("toggle-theme");

control_of_toggleBtn.addEventListener("click", function(){
  document.body.classList.toggle("dark-theme");
});

//Task - Make the contact me section work.

let control_of_contact_form = document.getElementById("contact-form");

control_of_contact_form.addEventListener("submit", function(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("message").value;
  let date = new Date().toLocaleString();

  let response = {
    name, email, msg, date
  }

  let dummy_database = JSON.parse(localStorage.getItem('tempDB')) || [ ] ;

  dummy_database.push(response); //NOT SENDING TO DB, +1 to JS list.

  localStorage.setItem("tempDB", JSON.stringify(dummy_database)); //Pushing Updated list to DB

  alert("Message Submitted");
});