const person = {
    name: "Fernanda",
    lastName: "Palacios",
    age: 25,
    hobbies: ['Ver anime', 'Ver series', 'Tocar guitarra'],
    address: {
        street: 'Alguna calle',
        number: 23,
    },
    addressJob: {
        street: 'otra calle'
    }

}

// const {address: { number } } = person

const { number } = person.address
console.log(number)



// acceder a las propiedades de un objeto
// const name = person.name
// const lastName = person.lastName
// const age = person.age

// console.log(name)
// console.log(lastName)
// console.log(age)

// destruturing

// const {name, lastName, age, address: { street }, addressJob: { street: streetJob } } = person

// console.log(name)
// console.log(lastName)
// console.log(age)
// console.log(street)
// console.log(streetJob)


