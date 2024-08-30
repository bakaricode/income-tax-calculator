const form = document.getElementById("form");
let userArray = [];

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());
  summary(dataObject)
  console.log(dataObject)
	//above is boiler plate code
	userArray.push(dataObject);
	// console.log(userArray);
	form.reset();
  // calculate function
  summary(dataObject)
}
// console.log(userArray);


function summary(user) {
  let maTax = .05;
  let nyTax = .109;
  let caTax = .123;
  let ncTax = .045;
   let userTax
   if (user.userState === "massachusetts") {
   userTax = maTax;
   } else if (user.userState === "newYork") {
     userTax = nyTax;
   } else if (userState === "california") {
     userTax = caTax;
   } else {
     userTax = ncTax;
   }
  
  let gross = document.getElementById("gross-output");
  gross.textContent = user.grossIncome;
  
  let state = document.getElementById("state");
  state.textContent = user.userState;

 let tax = document.getElementById("tax");
  tax.textContent = user.grossIncome * userTax;
  
   let net = document.getElementById("net");
  net.textContent = user.grossIncome - user.grossIncome * userTax;
  
  let monthlyPay =(user.grossIncome - user.grossIncome * userTax) /12;

  let monthly = document.getElementById("monthly");
  monthly.textContent = monthlyPay.toFixed(2);
  
 }