// There should be a script that:

// Defines a function
// Exports that function with module.exports
// There should be another script that:

// Uses require() to import the function from the other script
// Calls the imported function
const Saluta = require('./functions')
const Nomi = require('./names')

Saluta(Nomi.name1)
Saluta(Nomi.name2)
Saluta(Nomi.name3)
Saluta(Nomi.name4)
Saluta("Ermanno er matto")