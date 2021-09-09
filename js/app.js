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
        "haircolor": "Grøn",
        "shoesize": 45
    }]
}

let list = document.querySelector('#person-data');

teamMember.member.forEach(element => {
    let firstname = document.createElement('li');
    list.appendChild(firstname).textContent = element.firstname;


    console.log(element.firstname + ' ' + element.lastname)
});
