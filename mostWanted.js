'use strict';

function search(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;
    let genderInput = document.forms['nameForm']['gender'].value;
    let dobInput = document.forms['nameForm']['dob'].value;
    let heightInput = document.forms['nameForm']['height'].value;
    let weightInput = document.forms['nameForm']['weight'].value;
    let eyeColorInput = document.forms['nameForm']['eyecolor'].value;
    let occupationInput = document.forms['nameForm']['occupation'].value;
    let parentsInput = document.forms['nameForm']['parents'].value;
    let spouseInput = document.forms['nameForm']['spouse'].value;


    let results = people;

    if(genderInput != ""){
        results = searchByGender(genderInput, results)
    }
    if(dobInput != ""){
        results = searchByGender(dobInput, results)
    }
    if(heightInput != ""){
        results = searchByGender(heightInput, results)
    }
    if(weightInput != ""){
        results = searchByGender(weightInput, results)
    }
    if(eyeColorInput != ""){
        results = searchByEyeColor(eyeColorInput, results)
    }
    if(occupationInput != ""){
        results = searchByGender(occupationInput, results)
    }
    if(parentsInput != ""){
        results = searchByGender(parentsInput, results)
    }
    if(spouseInput != ""){
        results = searchByGender(spouseInput, results)
    }



    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
   
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(results.length > 0){
        console.log(results);
        buildTable(results)
    }else{
        console.log('Sorry, looks like there is no one with that name.');
    }
}

function searchByName(firstName, lastName, peopleToSearch){
    let filteredPeople = peopleToSearch.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    return filteredPeople;
}

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
        <td>${el.gender}</td>
        <td>${el.dob}</td>
        <td>${el.height}</td>
        <td>${el.weight}</td>
        <td>${el.eyeColor}</td>
        <td>${el.occupation}</td>
        <td>${el.parents}</td>
        <td>${el.currentSpouse}</td>
		</tr>`
	})
}
buildTable(people);

//
