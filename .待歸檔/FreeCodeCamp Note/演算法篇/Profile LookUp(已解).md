# Profile LookUp

//* 先判斷是否有該人 
//* 有則作Map 否則 No such contact
//* 在作屬性判斷， 有則輸出，否則 No such property

```js
    let contacts = [
        {
            firstName: 'Akira',
            lastName: 'Laine',
            number: '0543236543',
            likes: ['Pizza', 'Coding', 'Brownie Points'],
        },
        {
            firstName: 'Harry',
            lastName: 'Potter',
            number: '0994372684',
            likes: ['Hogwarts', 'Magic', 'Hagrid'],
        },
        {
            firstName: 'Sherlock',
            lastName: 'Holmes',
            number: '0487345643',
            likes: ['Intriguing Cases', 'Violin'],
        },
        {
            firstName: 'Kristian',
            lastName: 'Vos',
            number: 'unknown',
            likes: ['Javascript', 'Gaming', 'Foxes'],
        },
    ]
```
```js
    function lookUpProfile(firstName, prop) {
    let checkEmptyArr = function (array) {
        return typeof array !== 'undefined' && array != null && array.length != null && array.length > 0
    }

    let checkContacts = contacts.filter(elem => elem.firstName === firstName)
    if (checkEmptyArr(checkContacts)) {

        let checkProps = checkContacts.map(elem => elem[prop])
        if (checkProps[0] !== undefined) {
            return checkProps[0]
        }
        return 'No such property'
    }
    return 'No such contact'
    }
    console.log(lookUpProfile('Akira', 'address'))
```