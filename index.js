
const clr = document.getElementById('clear');



const calculator = () => {
// clear button
    clr.addEventListener('click', function() {
    const rslt = document.querySelector('.result');
    rslt.innerHTML = "";
    console.log ('cleared');
});


}

calculator();