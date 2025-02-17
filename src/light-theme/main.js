document.addEventListener('DOMContentLoaded', (event) => {
    function fact(i) {
        if (i <= 1) {
            return 1;
        }
        return i * fact(i - 1);
    }
    const button = document.getElementById("fact-button");
    button.onclick = function() {
        const x = document.getElementById("fact-text").value;
        if(!x){
            document.getElementById("fact-text").value = `Please enter a number.`;
            return;
        }
        if(isNaN(x)){
            document.getElementById("fact-text").value = ``;
            return;
        }
        if(x<0){
            document.getElementById("fact-text").value = `Undefined!`;
            return;
        }
        const result= fact(x);
        document.getElementById("fact-text").value = `Factorial of ${x} is ${result}.`;
    };
});
