// Write your solution in this file!
// global variable
var customerName= "bob"

// function to access global variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
 // best customer
function setBestCustomer(){
    bestCustomer='not bob';
}

//overwrite best customer
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

//least favorite customer
const leastFavoriteCustomer = "Wendy"
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Mandy"
}