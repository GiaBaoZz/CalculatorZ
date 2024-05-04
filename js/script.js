let textInput = document.getElementById('text-input');
let textInputTmp = document.getElementById('text-input-tmp');
let hasClickOperation = false;
let hasClickEqual = false;

function clickNumber(element) {
    if (element.textContent != '.' && textInput.value == '0') {
        textInput.value = '';
    } 

    if (textInputTmp.textContent != '') {
        if (hasClickOperation) {
            textInput.value = '';
        } else if (hasClickEqual) {
            textInput.value = '';
            textInputTmp.textContent = '';
        }
    }

    if (textInput.value.charAt(textInput.value.length - 1) == '.' 
        && element.textContent == '.') {
        return;
    }

    textInput.value += element.textContent;


    hasClickEqual = false;
    hasClickOperation = false;
}

function clickDelete() {
    textInput.value = textInput.value.slice(0, -1);
    if (textInput.value == '') {
        textInput.value = '0';
    }
}

function clickReset() {
    textInput.value = '0';
    textInputTmp.textContent = '';
}

function clickResult() {
    
    if (textInput.value.charAt(textInput.value.length - 1) == '.') {
        textInput.value = textInput.value.slice(0, -1);
     } 
 

    if (textInputTmp.textContent.indexOf('=') != -1) { 

        if (textInputTmp.textContent.match(/[+\-x/]/)) {
            let posOperation = textInputTmp.textContent.indexOf(' ');   
            textInputTmp.textContent = textInput.value + textInputTmp.textContent.slice(posOperation, -2);
            //  console.log('yes');
        }
        
    } 
    else
        textInputTmp.textContent = textInputTmp.textContent + ' ' + textInput.value;

    textInput.value = eval(textInputTmp.textContent.replace('x', '*'));

    textInputTmp.textContent += ' =';

    hasClickEqual = true;
    
}

function clickOperation(element) {
    let operation = element.textContent;

    if (textInput.value.charAt(textInput.value.length - 1) == '.') {
       textInput.value = textInput.value.slice(0, -1);
    } 

    textInputTmp.textContent = textInput.value + ' ' + operation;
   

    hasClickOperation = true;
}
