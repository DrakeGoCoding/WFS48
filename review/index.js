let people = [{
        name: 'A',
        color: 'red'
    },
    {
        name: 'B',
        color: 'green'
    },
    {
        name: 'C',
        color: 'blue'
    },
    {
        name: 'D',
        color: 'black'
    },
]

const dictionary = {
    red: 'đỏ',
    blue: 'xanh lam',
    green: 'xanh lục',
    black: 'đen'
}


people.forEach(person => person['number'] = Math.floor(Math.random() * 100 + 1));
people.sort((person1, person2) => person1.number - person2.number);
// console.log(people);

const filterBy50 = [people.filter(person => person.number < 50), people.filter(person => person.number >= 50)]
console.log(filterBy50);