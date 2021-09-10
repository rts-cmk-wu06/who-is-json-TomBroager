let teamMember = {
    "member": [{
        "firstname": "Tom",
        "lastname": "Broager",
        "age": 52,
        "haircolor": "blond",
        "shoesize": 43
    },
    {
        "firstname": "Jørgen",
        "lastname": "Hansen",
        "age": 55,
        "haircolor": "dark",
        "shoesize": 45
    },
    {
        "firstname": "Hans",
        "lastname": "Jensen",
        "age": 70,
        "haircolor": "rød",
        "shoesize": 29
    },
    {
        "firstname": "Ole",
        "lastname": "Gokke",
        "age": 51,
        "haircolor": "grøn",
        "shoesize": 45
    }]
}

let list = document.querySelector('#person-data');

teamMember.member.forEach(element => {
    let personData = document.createElement('li');
    list.appendChild(personData).innerHTML =
    element.firstname + ' ' + element.lastname + ':' + '<br />'
    + 'age: ' + element.age + ', ' + 'haircolor: ' + element.haircolor + ', ' + 'shoesize: ' + element.shoesize;
});
