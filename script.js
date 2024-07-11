document.getElementById('calculate').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height)) {
        alert('Please enter valid values.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    document.getElementById('bmi-value').textContent = bmi;

    let status = '';
    if (bmi < 18.5) {
        status = 'Underweight';
    } else if (bmi < 24.9) {
        status = 'Normal weight';
    } else if (bmi < 29.9) {
        status = 'Overweight';
    } else {
        status = 'Obesity';
    }
    document.getElementById('bmi-status').textContent = `This is considered ${status}.`;
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('weight').value = 0;
    document.getElementById('height').value = 0;
    document.getElementById('bmi-value').textContent = 0;
    document.getElementById('bmi-status').textContent = '';
});
