"use strict";
////////////////////////////////////////////////////////////////
// VARIABLES
////////////////////////////////////////////////////////////////

// Set the DOM elements variables for divisions of steps 1 to 4
const DIV_STEP_1 = document.getElementById('step-1') ;
const DIV_STEP_2 = document.getElementById('step-2');
const DIV_STEP_3 =document.getElementById('step-3');
const DIV_STEP_4 =document.getElementById('step-4');

// Set the DOM element variable for building type dropdown of step 1
const SELECT_BUILDING_TYPE =  document.getElementById('step-1') ;

// Set the DOM element variable for the group of divisions of step 2 inputs
const DIV_NUMBER_OF_APARTMENT = document.getElementById('number_of_apartment');
const DIV_MAXIMUM_OCCUPANCY =document.getElementById('maxium_occupancy'); 
const DIV_NUMBER_OF_FLOORS = document.getElementById('number_of_floor');
const DIV_NUMBER_OF_ELEVATORS =document.getElementById('number_of_elevator');
const DIV_AMOUNT_ELEVATORS_NEEDED =document.getElementById('amount_elevator_needed');

// Set the DOM element variable for inputs of step 2
const INPUT_NUMBER_OF_APARTMENT=document.getElementById('inputNumberOfApartment') ;
const INPUT_NUMBER_OF_FLOORS=document.getElementById('inputNumberOFFloors') ;
const INPUT_MAXIMUM_OCCUPANCY=document.getElementById('inputMaxiumOccupancy') ;
const INPUT_NUMBER_OF_ELEVATORS =document.getElementById('inputNumberOfElevators') ;
const INPUT_AMOUNT_ELEVATORS_NEEDED =document.getElementById('inputAmountElevatorNeeded') ;

// Set the DOM element variable for group of radio buttons of step 3
const RADIO_BUTTONS_PRODUCT_LINE =document.getElementById('productLine');

// Set the DOM element variable for radio buttons of step 3
const RADIO_BUTTON_STANDARD =document.getElementById('productLineStandard');
const RADIO_BUTTON_PREMIUM =document.getElementById('productLinePremium'); ;
const RADIO_BUTTON_EXCELIUM =document.getElementById('productLineexcelium'); 

// Set the DOM element variable for read-only inputs of step 4
const INPUT_ELEVATOR_UNIT_PRICE =document.getElementById('inputElevatorUnitPrice'); ;
const INPUT_ELEVATOR_TOTAL_PRICE =document.getElementById('inputelevatorTotalPrice'); ;
const INPUT_INSTALLATION_FEES =document.getElementById('inputInstallationFee'); ;
const INPUT_TOTAL_COST =document.getElementById('inputTotalCost'); ;

// Set the object variable for elevator UNIT_PRICES
const UNIT_PRICES = { 
    standard,
    premium, 
    execelium,
};

// Set the object variable for elevator INSTALLATION_PERCENT_FEES
const INSTALLATION_PERCENT_FEES = { 
  standard: 10, 
    premium: 15,      
    excelium: 20  
};

////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////

// Function to hides steps 2 to 4 of the quote form
function hideSteps() {
 const stepsToHide = [ step-2 , step-3 , step-4];   
    
}

// Function to shows steps 2 to 4 of the quote form
function showSteps234() {
 const stepsToShow =[
'step-2', 'step-3' , 'step-4'
 ];  
}

// Function to resets all values and radio buttons
 // Input values
function resetValues() {
    const textInputs = document.querySelectorAll('');
  textInputs.forEach(input => {
    input.value = ''
    });
   
    
    
    // Radio buttons
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.checked = false;
})
}     
// Function to shows/hides fields depending on the building type
function showHideFieldOnBuildingType() {
     var buildingType = document.getElementById('buildingType').value;
            let residentialFields = document.getElementById('residentialFields');
            let commercialFields = document.getElementById('commercialFields');
            let industrialFields = document.getElementById('industrialFields');

    // Call the hide steps function


    // Call the reset values function

    
    if (SELECT_BUILDING_TYPE.value !== 'residential') {
        residentialFields.style.display='block'
    }esle (buildingType === 'commercial') {
        commercialFields.style.display = 'block';
            } esle (buildingType === 'industrial') 
                industrialFields.style.display = 'block';
            }

                   // Call the show steps function
         document.addEventListener('DOMContentLoaded', showHideFields);
 


        // Set variables depending on the building type
        const displayResidential = SELECT_BUILDING_TYPE.value === "resdiential";
        const displayCommercial = SELECT_BUILDING_TYPE.value === "commercial";
        const displayIndustrial = SELECT_BUILDING_TYPE.value === "industrial";

        // Display fields depending on the building type
        DIV_NUMBER_OF_APARTMENT.style.display = displayResidential ? 'display' : 'none';
        DIV_NUMBER_OF_FLOORS.style.display = displayCommercial || displayResidential ? 'display' : 'none';
        DIV_MAXIMUM_OCCUPANCY.style.display = displayCommercial ? 'display' : 'none';
        DIV_NUMBER_OF_ELEVATORS.style.display = displayIndustrial ? 'display' : 'none';
    

////////////////////////////////////////////////////////////////

 document.getElementById('buildingType').addEventListener('change', showHideFieldOnBuildingType);
// EVENT LISTENERS
////////////////////////////////////////////////////////////////

// Set up event listeners for changes in the building type selection (dropdown) and trigger the function showHideFieldOnBuildingType when a change occurs.
SELECT_BUILDING_TYPE.addEventListener('', showHideFieldOnBuildingType);

////////////////////////////////////////////////////////////////
// INITIALIZATIONS
////////////////////////////////////////////////////////////////

// Call the function to hide all steps

function showHideFieldOnBuildingType (){

};


// Call the function to reset all values
function resetValues () {

}


// Set the default value of the building type to "---Select---"
 <option value="default">---Select---</option>