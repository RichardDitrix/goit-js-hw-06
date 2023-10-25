
const formSite = document.querySelector('.login-form');
console.log(formSite);

// const formBtn = document.querySelector ("button");
// console.log(formBtn);
formSite.addEventListener("submit", handleSubmit);

function  handleSubmit (event)  {
 event.preventDefault();
 const {
	elements : {email, password}
 } = event.currentTarget;
 if (email.value === "" || password.value === "") {
	 return alert("Form should`nt be empty");
 }
 const sheet =     {
	email: email.value,
	password: password.value
};
console.log (sheet);
//  console.log(`Email: ${email.value}, Password: ${password.value}`);
 event.currentTarget.reset();
}