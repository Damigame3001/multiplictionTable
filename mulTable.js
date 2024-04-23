let display = document.getElementById('display')
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')

function displayTable() {
    display.innerHTML = ''; // Clear the previous content
    let start = Number(input1.value);
    let end = Number(input2.value);
    
    for (let index = start; index <= end; index++) {
        for (let i = 0; i <= 12; i++) { // Changed to <= to include the multiplication by 12
            display.innerHTML += `<p>${index} &times; ${i} = ${index * i}</p>`;
            } //p tag used to seperate horizontal line text
        }
    }