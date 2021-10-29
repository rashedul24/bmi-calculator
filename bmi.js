const bmiCal = () => {
  const weightInput = document.getElementById('weight');
  const weight = weightInput.value;
  
  const heightInput = document.getElementById('height');
  const heightInInch = heightInput.value;
  // error handle
  if (weight === '' && heightInInch === '') {
    alert('Input field can not be empty.');
    return;
  }
  else if (weight === '' || weight < 0) {
    alert('Please enter a valid Weight.');
    return;
  }
  else if (heightInInch === '' || heightInInch < 0) {
    alert('Please enter a valid Height.');
    return;
  }
  // clear input field
  weightInput.value = '';
  heightInput.value = '';
  // calculation
  const height = heightInInch * 0.0254;
  const calculation = weight / (height * height);
  const result = document.getElementById('result');
  const div = document.createElement('div');
  result.innerText = '';
  // output
  div.innerHTML = ` 
  <h2>Your BMI is ${calculation.toFixed(2)}</h2>
  `
  result.appendChild(div);
};