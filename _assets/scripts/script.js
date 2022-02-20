const UPPER_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOL = "!@#$%&*()==_-/;:.,<>{}[]";

const passwordResult = document.getElementById("pwd-result");
const pwdLength = document.getElementById("pwdLength");
const upperCase = document.getElementById("upperCase");
const loweCase = document.getElementById("loweCase");
const symbols = document.getElementById("symbols");
const number = document.getElementById("number");
const generate = document.getElementById("generate");
const copy = document.getElementById("copy");

const getLowerCase = () => LOWER_LETTERS[Math.floor(Math.random() * LOWER_LETTERS.length)];
const getUpperCase = () => UPPER_LETTERS[Math.floor(Math.random() * UPPER_LETTERS.length)];
const getNumber = () => NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
const getSymbol = () => SYMBOL[Math.floor(Math.random() * SYMBOL.length)];

const generatePassword = () => {
    const len = pwdLength.value;
    let password = "";

    if (upperCase.checked) password += getUpperCase();
    if (loweCase.checked) password += getLowerCase();
    if (number.checked) password += getNumber();
    if (symbols.checked) password += getSymbol();

    for(let i = password.length; i < len; i++){
        const x = generateX();
        password += x;
    }
    passwordResult.innerText = password;
}

const generateX = () =>{
    const xs = [];
    if(upperCase.checked) xs.push(getUpperCase());
    if(loweCase.checked) xs.push(getLowerCase());
    if(number.checked) xs.push(getNumber());
    if(symbols.checked) xs.push(getSymbol());
    if(xs.length === 0 ) return "";

    return xs[Math.floor(Math.random() * xs.length)]
}

generate.addEventListener("click", generatePassword);

copy.addEventListener("click", function(){
    const text = document.createElement("textarea");
    const password = passwordResult.innerText;

    if(!password) return;

    text.value = password;
    document.body.appendChild(text);
    text.select();
    document.execCommand("copy");
    text.remove()
});