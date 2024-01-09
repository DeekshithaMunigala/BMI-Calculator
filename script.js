let bmi, measure, error;
const result = document.querySelector("#result");

btn.addEventListener('click', (evt) => {
    evt.preventDefault();

    const weight = parseInt(document.querySelector("#weight").value);
    const height = parseInt(document.querySelector("#height").value) / 100;

    error = "Please enter some value";

    if(weight === 0 || height === 0) {
        result.textContent = error;
        return;
    } 

    bmi = weight / [height * height];
    bmi = bmi.toFixed(1);
    
    if(bmi <= 18.4) {
        measure = `Your BMI is ${bmi} which means You are Underweight`; 
    } else if(bmi >= 18.5 && bmi <= 24.9) {
        measure = `Your BMI is ${bmi} which means You are Normal weight`;
    } else if(bmi >= 25 && bmi <= 29.9) {
        measure = `Your BMI is ${bmi} which means You are Overweight`;
    } else if(bmi >= 30) {
        measure = `Your BMI is ${bmi} which means You are Obese`;
    }

    result.textContent = measure;

    if(weight < 0) {
        result.textContent = "Negative values are not allowed";
    }

});