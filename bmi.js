const calculate = document.getElementById('calculate');


const bmiCal = () => {
  const weightInput = document.getElementById('weight');
  const weight = weightInput.value;
  
  const heightInput = document.getElementById('height');
  const height = heightInput.value;

  weightInput.value = '';
  heightInput.value = '';
  
  const calculation = weight / (height * height);
}