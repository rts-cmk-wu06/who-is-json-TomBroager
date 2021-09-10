let list = document.querySelector('#person-data');

/* fetch promises basic */
fetch('./team.json')
    .then((response) => response.json())
    .then((jsonData) => {                   //jsonData indeholder response.json
        jsonData.member.forEach((element) => {
            let listItem = document.createElement('li');
            listItem.textContent = `${element.firstname} ${element.lastname + ' |'} ${'age: ' + element.age + ' |'} ${'haircolor: ' + element.haircolor + ' |'} ${'shoesize: ' + element.shoesize}`;
            list.appendChild(listItem);
        });
    });


