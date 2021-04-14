// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const names = []
    
    arr.forEach((pet) => {
        names.push(pet.name)
    })
    
    
    return names;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const types = []

    arr.forEach((pet) => {
        types.push(pet.type)
    })

    const reversedTypes = types.reverse()

    return reversedTypes;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const nombres = []
    
    arr.forEach((pet) => {
        nombres.push({'tipo': pet.type, 'nombre': pet.name})
    })
    return nombres;
}

