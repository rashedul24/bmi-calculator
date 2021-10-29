const calculate = document.getElementById('calculate');


const bmiCal = () => {
  const weightInput = document.getElementById('weight');
  const weight = weightInput.value;
  
  const heightInput = document.getElementById('height');
  const height = heightInput.value;
  // clear input field
  weightInput.value = '';
  heightInput.value = '';
  // calculation
  const calculation = weight / (height * height);
  const result = document.getElementById('result');
  const div = document.createElement('div');
  result.innerText = '';
  // output
  div.innerHTML = ` 
  <h2>Your BMI is ${calculation}</h2>
  `
  result.appendChild(div);
}