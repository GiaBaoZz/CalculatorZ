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

function clickButton(object) {
    object.classList.add('item-animation');
}

function releaseButton(object) {
    object.classList.remove('item-animation');
}

function clickToggle() {
    let toggleButton = document.getElementById('toggle-button');
    let currentMarginLeft = parseInt(getComputedStyle(toggleButton).marginLeft);
    
    if (currentMarginLeft == 5) {
        toggleButton.style.animationName = 'toggle-animation-1';
        changeTheme2();
    } else if (currentMarginLeft == 25) {
        toggleButton.style.animationName = 'toggle-animation-2';
        changeTheme3();
        
    } else {
        toggleButton.style.animationName = 'toggle-animation-3';
        changeTheme1();
    }
   
}
function changeTheme1() {
        document.body.className = 'body-theme1';

        document.getElementsByClassName('text-calc-theme3')[0].className = 'text-calc';
        document.getElementsByClassName('text-theme-theme3')[0].className = 'text-theme';
        document.getElementById('toggle-number').style.color = 'white';
        document.getElementById('toggle-switch').style.backgroundColor = 'var(--very-dark-desaturated-blue-2)';
        document.getElementById('toggle-button').style.backgroundColor = 'var(--red)';
        document.getElementsByClassName('screen-theme3')[0].className = 'screen';
        document.getElementById('text-input').className = '';
        document.getElementsByClassName('button-area-theme3')[0].className = 'button-area';
        document.getElementsByClassName('item-reset-theme3')[0].className = 'item-reset';
        document.getElementsByClassName('item-del-theme3')[0].className = 'item-del';
        document.getElementsByClassName('item-equal-theme3')[0].className = 'item-equal';

        let itemList = document.getElementsByClassName('item');

        for (let i=0; i<itemList.length; i++) {
            itemList[i].style.backgroundColor = 'var(--light-grayish-orange)';
            itemList[i].style.color = 'var(--very-dark-grayish-blue)';
            itemList[i].style.boxShadow  = '0px 5px var( --grayish-orange)';
        }
}

function changeTheme2() {
        document.body.className = 'body-theme2';
        document.getElementsByClassName('text-calc')[0].className = 'text-calc-theme2';
        document.getElementsByClassName('text-theme')[0].className = 'text-theme-theme2';
        document.getElementById('toggle-number').style.color = 'var(--very-dark-grayish-yellow)';
        document.getElementById('toggle-switch').style.backgroundColor = 'var(--grayish-red)';
        document.getElementById('toggle-button').style.backgroundColor = 'var(--orange)';
        document.getElementsByClassName('screen')[0].className = 'screen-theme2';
        document.getElementById('text-input').className = 'screen-input-theme2';
        document.getElementsByClassName('button-area')[0].className = 'button-area-theme2';
}

function changeTheme3() {
        document.body.className = 'body-theme3';

        document.getElementsByClassName('text-calc-theme2')[0].className = 'text-calc-theme3';
        document.getElementsByClassName('text-theme-theme2')[0].className = 'text-theme-theme3';
        document.getElementById('toggle-number').style.color = 'var(--light-yellow)';
        document.getElementById('toggle-switch').style.backgroundColor = 'var(--very-dark-violet-2)';
        document.getElementById('toggle-button').style.backgroundColor = 'var(--pure-cyan)';
        document.getElementsByClassName('screen-theme2')[0].className = 'screen-theme3';
        document.getElementById('text-input').className = 'screen-input-theme3';
        document.getElementsByClassName('button-area-theme2')[0].className = 'button-area-theme3';
        document.getElementsByClassName('item-reset')[0].className = 'item-reset-theme3';
        document.getElementsByClassName('item-del')[0].className = 'item-del-theme3';
        document.getElementsByClassName('item-equal')[0].className = 'item-equal-theme3';

        let itemList = document.getElementsByClassName('item');

        for (let i=0; i<itemList.length; i++) {
            itemList[i].style.backgroundColor = 'var(--very-dark-violet)';
            itemList[i].style.color = 'var(--light-yellow)';
            itemList[i].style.boxShadow  = '0 5px var(--dark-magenta)';
        }
}