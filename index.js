
var password_len = 12

function updatelen() {
    document.getElementById("password_length_number").value = password_len
    document.getElementById("password_length_range").value = password_len
    generatePassword()
}

function checkNum(object) {
    object.value = Number(object.value)
    if (Number(object.value) > Number(object.max)) {
        object.value = 50
    }
    else if (Number(object.value) < Number(object.min)) {
        object.value = 1
    }
    password_len = object.value
    updatelen()
}

var include_uppercase = true
var include_lowercase = true
var include_number = true
var include_symbol = true

function checkboxFunc(object) {
    switch (object.name) {
        case "include_uppercase":
            if (include_uppercase) {
                include_uppercase = false
                document.getElementById("custom_checkbox_uppercase").style.display = "none"
            }
            else {
                include_uppercase = true
                document.getElementById("custom_checkbox_uppercase").style.display = "initial"
            }
            break;
        case "include_lowercase":
            if (include_lowercase) {
                include_lowercase = false
                document.getElementById("custom_checkbox_lowercase").style.display = "none"
            }
            else {
                include_lowercase = true
                document.getElementById("custom_checkbox_lowercase").style.display = "initial"
            }
            break;
        case "include_number":
            if (include_number) {
                include_number = false
                document.getElementById("custom_checkbox_number").style.display = "none"
            }
            else {
                include_number = true
                document.getElementById("custom_checkbox_number").style.display = "initial"
            }
            break;
        case "include_symbol":
            if (include_symbol) {
                include_symbol = false
                document.getElementById("custom_checkbox_symbol").style.display = "none"
            }
            else {
                include_symbol = true
                document.getElementById("custom_checkbox_symbol").style.display = "initial"
            }
            break;
    }
    generatePassword()
}


function rangeInput(object) {
    password_len = Number(object.value)
    updatelen()
}

const symbol = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"

function passgen(length) {
    var charset = "";
    if (include_lowercase) charset += lowercase
    if (include_uppercase) charset += uppercase
    if (include_number)    charset += number
    if (include_symbol)    charset += symbol

    var retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

function generatePassword() {
    var new_password = passgen(password_len)
    document.getElementById("output_password_box").value = new_password
}

function copypass() {
    var copyText = document.getElementById("output_password_box");
    navigator.clipboard.writeText(copyText.value);
}
