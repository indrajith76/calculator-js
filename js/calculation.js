let display = document.getElementById('display');

function insertBtn(btnValue){
    let existValue = display.value;
    display.value = existValue + btnValue;
}

document.getElementById('equal').addEventListener('click', function(){
    let newDisplay = display.value;
    if(newDisplay.includes('+')){
        let evaluateDisplay = eval(newDisplay);
        display.value = evaluateDisplay;
    }
    else if(newDisplay.includes('-')){
        let evaluateDisplay = eval(newDisplay);
        display.value = evaluateDisplay;
    }
    else if(newDisplay.includes('*')){
        let evaluateDisplay = eval(newDisplay);
        display.value = evaluateDisplay;
    }
    else if(newDisplay.includes('/')){
        let evaluateDisplay = eval(newDisplay);
        display.value = evaluateDisplay;
    }
    else if(newDisplay.includes('%')){
        let displayValue = newDisplay.split('%');
        let calculateParsentage = (displayValue[0] * displayValue[1])/100 ;
        display.value = calculateParsentage;
    }
    else{
        alert('ENTER A NUMBER AND ENTER A SIGN BUTTON AFTER THE FIRST VALUE!!');
    }
})

document.getElementById('clear').addEventListener('click',function(){
    let currentDisplay = display.value;
    display.value = currentDisplay.slice(0,-1);
})

function clearAll(){
    display.value = '';
}