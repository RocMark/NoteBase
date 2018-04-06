const contactForm = document.querySelector('#contactForm')
const contactFormInputs = contactForm.querySelectorAll('input')

contactForm.addEventListener('keyup', inputNameDelegation)

function inputNameDelegation(e) {

    let inputName = e.target.name
    let inputVal = e.target.value

    let pattern = {
        username: /^[a-z\d]{5,12}$/,
    }

    console.log(e.target.type)

    if (e.target.tagName.toLowerCase() === 'input') {
        console.log(validate(inputVal, pattern[inputName]))
        if (validate(inputVal, pattern[inputName])) {
            e.target.classList.remove('invalid')
            e.target.classList.add('valid')
        } else {
            e.target.classList.remove('valid')
            e.target.classList.add('invalid')
        }
    }

    if (inputName === 'profile') {
        if (e.target.value.length < 8) {
            let needNum = 8 - e.target.value.length
            e.target.nextElementSibling.textContent = `${needNum} More Letter Needed`
        } else {
            e.target.nextElementSibling.textContent = 'Valid!!'
        }
    } 
}

function validate(str, regex) {
    return regex.test(str)
}


setInputLength()

//* global set maxLength

function setInputLength() {
    let userNames = document.querySelectorAll('input[name="username"]')
    let passWords = document.querySelectorAll('input[name="password"]')
    let telephone = document.querySelectorAll('input[name="telephone"]')

    let lengthList = {
        username: 12,
        password: 20,
        telephone: 10,
    }


    

    setMaxLength(userNames, lengthList.username)
    setMaxLength(passWords, lengthList.password)
    setMaxLength(telephone, lengthList.telephone)

    function setMaxLength(nodeList, length) {
        nodeList.forEach((elem) => {
            let elemMaxLength = elem.maxLength
            elemMaxLength = length
        })
    }
}
