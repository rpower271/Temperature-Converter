function convertToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

function describeTemperature(fahrenheit) {
  let celsius = convertToCelsius(fahrenheit);
  if (celsius < 0) {
    console.log(`${celsius} celsius is very cold`);
  } else if (celsius < 20) {
    console.log(`${celsius} celsius is cold`);
  } else if (celsius < 30) {
    console.log(`${celsius} celsius is warm`);
  } else if (celsius < 40) {
    console.log(`${celsius} celsius is hot`);
  }
  if (celsius >= 40) {
    console.log(`${celsius} celsius is very hot`);
  }
}
describeTemperature(79);

prompt("input temp in fahrenheit");
