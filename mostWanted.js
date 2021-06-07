'use strict';

<<<<<<< HEAD
function search(){
=======
function searchByName() {
>>>>>>> 7c58ba254a0424023764f7fc7efffdc9f66bf01c
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;
    let eyeColorInput = document.forms['nameForm']['eyecolor'].value;
    let genderInput = document.forms['nameForm']['gender'].value;


    let results = people;
    if(eyeColorInput != ""){
        results = searchByEyeColor(eyeColorInput, results)
    }
    if(genderInput != ""){
        results = searchByGender(genderInput, results)
    }


 
   
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
<<<<<<< HEAD
   
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(results.length > 0){
        console.log(results);
        buildTable(results)
    }else{
=======
    let filteredPeople = people.filter(function (person) {
        if (person.firstName === firstNameInput && person.lastName === lastNameInput) {
            return true;
        }
        return false;
    });

    // Rather than console logging, you need to append the filteredPeople to a table.
    if (filteredPeople.length > 0) {
        console.log(filteredPeople);
    } else {
>>>>>>> 7c58ba254a0424023764f7fc7efffdc9f66bf01c
        console.log('Sorry, looks like there is no one with that name.');
    }
}

<<<<<<< HEAD
function searchByName(firstName, lastName, peopleToSearch){
    let filteredPeople = peopleToSearch.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    return filteredPeople;
}
=======
function showPeople() {
>>>>>>> 7c58ba254a0424023764f7fc7efffdc9f66bf01c

function searchByEyeColor(eyeColor, peopleToSearch){
    let filteredPeople = peopleToSearch.filter(function(el){
        if(el.eyeColor == eyeColor){
            return true;
        }
        else{
            return false;
        }
    })
    console.log(filteredPeople)
    return filteredPeople;
}

function searchByGender(gender, peopleToSearch){
    let filteredPeople = peopleToSearch.filter(function(el){
        if(el.gender == gender){
            return true;
        }
        else{
            return false;
        }
    })
    console.log(filteredPeople)
    return filteredPeople;
}

function doStuff(){
	searchByEyeColor('blue', people)
}
function buildTable(peopleToDisplay){
    document.getElementById("persons").innerHTML = ""
	peopleToDisplay.map(function(el){
		document.getElementById("persons").innerHTML += `<tr>
		<td>${el.firstName}</td>
		<td>${el.lastName}</td>
        <td>${el.dob}</td>
		<td><button onclick="deletePerson()">Delete</button></td>
		</tr>`
	})
}
buildTable(people);

//
