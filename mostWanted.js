'use strict';

function search() {

    let idNumberInput = document.forms['nameForm']['id'].value;
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

    if (idNumberInput != "") {
        results = searchByIdNumber(idNumberInput, results)
    }
    if (firstNameInput != "") {
        results = searchByFirstName(firstNameInput, results)
    }
    if (lastNameInput != "") {
        results = searchByLastName(lastNameInput, results)
    }
    if (genderInput != "") {
        results = searchByGender(genderInput, results)
    }
    if (dobInput != "") {
        results = searchByDob(dobInput, results)
    }
    if (heightInput != "") {
        results = searchByHeight(heightInput, results)
    }
    if (weightInput != "") {
        results = searchByWeight(weightInput, results)
    }
    if (eyeColorInput != "") {
        results = searchByEyeColor(eyeColorInput, results)
    }
    if (occupationInput != "") {
        results = searchByOccupation(occupationInput, results)
    }
    if (parentsInput != "") {
        results = searchByParents(parentsInput, results)
    }
    if (spouseInput != "") {
        results = searchBySpouse(spouseInput, results)
    }

    if (results.length > 0) {
        console.log(results);
        buildTable(results)
    } 
    else {
        alert('INVALID INPUT!');
    }
}

function searchByIdNumber(id, peopleToSearch) {
    let filteredPeople = peopleToSearch.filter(function (el) {
        if (el.id == id) {
            return true;
        }
        else {
            return false;
        }
    })
    console.log(filteredPeople)
    return filteredPeople;
}

function searchByFirstName(firstName, peopleToSearch) {
    let filteredPeople = peopleToSearch.filter(function (el) {
        if (el.firstName == firstName) {
            return true;
        }
        else {
            return false;
        }
    })
    console.log(filteredPeople)
    return filteredPeople;
}

function searchByLastName(lastName, peopleToSearch) {
    let filteredPeople = peopleToSearch.filter(function (el) {
        if (el.lastName == lastName) {
            return true;
        }
        else {
            return false;
        }
    })
    console.log(filteredPeople)
    return filteredPeople;
}

function searchByEyeColor(eyeColor, peopleToSearch) {
    let filteredPeople = peopleToSearch.filter(function (el) {
        if (el.eyeColor == eyeColor) {
            return true;
        }
        else {
            return false;
        }
    })
    console.log(filteredPeople)
    return filteredPeople;
}

function searchByGender(gender, peopleToSearch) {
    let filteredPeople = peopleToSearch.filter(function (el) {
        if (el.gender == gender) {
            return true;
        }
        else {
            return false;
        }
    })
    console.log(filteredPeople)
    return filteredPeople;
}
function searchByDob(dob, peopleToSearch) {
    let filteredPeople = peopleToSearch.filter(function (el) {
        if (el.dob == dob) {
            return true;
        }
        else {
            return false;
        }
    })
    console.log(filteredPeople)
    return filteredPeople;
}
function searchByHeight(height, peopleToSearch) {
    let filteredPeople = peopleToSearch.filter(function (el) {
        if (el.height == height) {
            return true;
        }
        else {
            return false;
        }
    })
    console.log(filteredPeople)
    return filteredPeople;
}
function searchByWeight(weight, peopleToSearch) {
    let filteredPeople = peopleToSearch.filter(function (el) {
        if (el.weight == weight) {
            return true;
        }
        else {
            return false;
        }
    })
    console.log(filteredPeople)
    return filteredPeople;
}
function searchByOccupation(occupation, peopleToSearch) {
    let filteredPeople = peopleToSearch.filter(function (el) {
        if (el.occupation == occupation) {
            return true;
        }
        else {
            return false;
        }
    })
    console.log(filteredPeople)
    return filteredPeople;
}
function searchByParents(parents, peopleToSearch) {    
    let filteredPeople = peopleToSearch.filter(function (el) {
        if (el.parents[0] == parents) {
            return true;
        }
        if (el.parents[1] == parents) {
            return true;
        }
        else {
            return false;
        }
    })
    console.log(filteredPeople)
    return filteredPeople;
}
function searchBySpouse(spouse, peopleToSearch) {
    let filteredPeople = peopleToSearch.filter(function (el) {
        if (el.spouse == spouse) {
            return true;
        }
        else {
            return false;
        }
    })
    console.log(filteredPeople)
    return filteredPeople;
}


function getPersonId(idEntered){
    let filteredPeople = people.filter(person => {
        if(person.id == idEntered){
            return true;
        }
        else{
            return false
        }
    });

    if(filteredPeople.length == 1){
        return filteredPeople[0]
        
    }else{
        alert('No Person with that id')
    }
}


function buildTable(peopleToDisplay) {

    document.getElementById("persons").innerHTML = ""
    peopleToDisplay.map(function (el) {
        
        let yourSpouseName = "";
        if(el.currentSpouse != null){
            let theSpouse = getPersonId(el.currentSpouse)
            yourSpouseName = theSpouse.firstName + ' ' + theSpouse.lastName;
        }
        
        document.getElementById("persons").innerHTML += `<tr>
        <td>${el.id}</td>
		<td>${el.firstName}</td>
		<td>${el.lastName}</td>
        <td>${el.gender}</td>
        <td>${el.dob}</td>
        <td>${el.height}</td>
        <td>${el.weight}</td>
        <td>${el.eyeColor}</td>
        <td>${el.occupation}</td>
        <td>${el.parents}</td>
        <td>${yourSpouseName}</td>
		</tr>`
    })
}
buildTable(people);
