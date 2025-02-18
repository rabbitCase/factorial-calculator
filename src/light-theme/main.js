document.addEventListener('DOMContentLoaded', (event) => {
    function fact(i) {
        if (i <= 1) {
            return 1;
        }
        return i * fact(i - 1);
    }
    const valueSetter = (value) => document.getElementById("fact-text").value = value;
    const button = document.querySelector("#fact-button");
    button.addEventListener("click", () => {
        const x = document.getElementById("fact-text").value;
        if(!x){
            valueSetter("Please enter a number");
            return;
        }
        
        else if(x<0){
            valueSetter("Undefined!");
            return;
        }

        else{
            valueSetter(null);
        }
        
        const result= fact(x);
        valueSetter(`Factorial of ${x} is ${result}.`);
    });
});
