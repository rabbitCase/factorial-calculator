function fact(i) {
    if (i <= 1) {
        return 1;
    }
    return i * fact(i - 1);
}
let prompt= "Please enter a number";
const textBoxValueSetter = (value) => document.getElementById("fact-text").value = value;
const button = document.querySelector("#fact-button");
button.addEventListener("click", () => {
    const x = document.getElementById("fact-text").value;
    const num=Number(x);
    if(!x){
        textBoxValueSetter(prompt);
        return;
    }

    else if(isNaN(num)){
        textBoxValueSetter(null);
        return;
    }
    
    else if(num < 0 || num % 1 !== 0){
        textBoxValueSetter("Undefined!");
        return;
    }

    const result= fact(num);
    textBoxValueSetter(`Factorial of ${x} is ${result}.`);
});

