/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertButton = document.getElementById("convert-button");
const inputValue = document.getElementById("input-value");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

function convertAndFormat(value, factor) {
  const convertedValue = value * factor;
  const inverseValue = value / factor;
  return {
    convertedValue: parseFloat(convertedValue.toFixed(3)),
    inverseValue: parseFloat(inverseValue.toFixed(3)),
  };
}

function convertValue() {
  const value = inputValue.value;

  const lengthConversion = convertAndFormat(value, 3.281);
  length.textContent = `${value} meters = ${lengthConversion.convertedValue} feet | ${value} feet = ${lengthConversion.inverseValue} meters`;

  const volumeConversion = convertAndFormat(value, 0.264);
  volume.textContent = `${value} liters = ${volumeConversion.convertedValue} gallons | ${value} gallons = ${volumeConversion.inverseValue} liters`;

  const massConversion = convertAndFormat(value, 2.204);
  mass.textContent = `${value} kilos = ${massConversion.convertedValue} pounds | ${value} pounds = ${massConversion.inverseValue} kilos`;
}

convertButton.addEventListener("click", function () {
  convertValue();
});
