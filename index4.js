// profile lookup

let contacts = [
    {
        "frstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "frstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "frstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "frstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
    for (let i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}
 
let data = lookUpProfile("Sherlock", "lastName");

console.log(data);