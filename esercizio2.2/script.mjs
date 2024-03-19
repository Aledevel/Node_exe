// Create a script that uses export default to export a function. 
// Create another script that uses import to import the function and then calls it.

import caller from "./func.mjs";
import persons from "./persons.mjs";


caller(persons.person_1)
caller(persons.person_2)