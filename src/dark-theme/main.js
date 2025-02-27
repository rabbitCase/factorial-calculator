document.addEventListener('DOMContentLoaded', (event) => {
    function fact(i) {
        if (i <= 1) {
            return 1;
        }
        return i * fact(i - 1);
    }
    const textBoxValueSetter = (value) => document.getElementById("fact-text").value = value;
    const button = document.querySelector("#fact-button");
    button.addEventListener("click", () => {
        const x = document.getElementById("fact-text").value;
        if(!x){
            textBoxValueSetter("Please enter a number");
            return;
        }
        
        else if(x<0){
            textBoxValueSetter("Undefined!");
            return;
        }

        else{
            textBoxValueSetter(null);
        }
        
        const result= fact(x);
        textBoxValueSetter(`Factorial of ${x} is ${result}.`);
    });
});
