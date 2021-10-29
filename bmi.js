const bmiCal = () => {
  const weightInput = document.getElementById('weight');
  const weight = weightInput.value;
  
  const heightInput = document.getElementById('height');
  const height = heightInput.value;
  // error handle
  if (weight === '' || weight<0 ) {
    alert('please enter a valid weight')
    return;
  }
  if (height === '' || height<0) {
    alert('please enter a valid height')
    return;
  }
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