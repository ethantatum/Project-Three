const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Students collection and inserts the students below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/careconnectdb"
);

const studentSeed = [
    {
        name: "Alivia Kane",
        age: 12,
        image: "/assets/images/girl1.png",
        class: "Burgundy",
        // parents: [
        //     {
        //         parent1: ""
        //     }
        // ],
        behaviors: [
            {
                behavior1: "spitting"
            },
            {
                behavior2: "elopement"
            }
        ]
    },
    {
        name: "Ellis Liu",
        age: 7,
        image: "/assets/images/boy1.png",
        class: "Paisley",
        // parents: [
        //     {
        //         parent1: "Allyson Liu"
        //     },
        //     {
        //         parent2: "Henry Liu"
        //     }
        // ],
        behaviors: [
            {
                behavior1: "yelling"
            }
        ]
    },
    {
        name: "Elly Navarro",
        age: 6,
        image: "/assets/images/girl2.png",
        class: "Paisley",
        // parents: [
        //     {
        //         parent1: "Noelle Navarro"
        //     },
        //     {
        //         parent2: "Emilio Navarro"
        //     }
        // ],
        behaviors: [
            {
                behavior1: "biting"
            },
            {
                behavior2: "spitting"
            },
            {
                behavior3: "hitting"
            }
        ]
    },
    {
        name: "Matthew Humphreys",
        age: 5,
        image: "/assets/images/boy2.png",
        class: "Paisley",
        // parents: [
        //     {
        //         parent1: "Megan Humphreys"
        //     }
        // ],
        behaviors: [
            {
                behavior1: "rocking"
            }
        ]
    },
    {
        name: "Reema Spears",
        age: 10,
        image: "/assets/images/girl3.png",
        class: "Emerald",
        // parents: [
        //     {
        //         parent1: "Coretta Spears"
        //     },
        //     {
        //         parent2: "Marvin Spears"
        //     }
        // ],
        behaviors: [
            {
                behavior1: "throwing"
            }
        ]
    },
    {
        name: "Dean Reed",
        age: 9,
        image: "/assets/images/boy3.png",
        class: "Emerald",
        // parents: [
        //     {
        //         parent1: "Jonathan Reed"
        //     }
        // ],
        behaviors: [
            {
                behavior1: "rocking"
            },
            {
                behavior2: "flapping"
            }
        ]
    },
    {
        name: "Melody Nguyen",
        age: 13,
        image: "/assets/images/girl4.png",
        class: "Burgundy",
        // parents: [
        //     {
        //         parent1: "Trang Nguyen"
        //     },
        //     {
        //         parent2: "Duy Nguyen"
        //     }
        // ],
        behaviors: [
            {
                behavior1: "biting"
            }, 
            {
                behavior2: "hitting"
            },
            {
                behavior3: "scratching"
            },
            {
                behavior4: "throwing"
            }
        ]
    },
    {
        name: "Zakariah Joseph",
        age: 9,
        image: "/assets/images/boy4.png",
        class: "Emerald",
        // parents: [
        //     {
        //         parent1: "Vonda Joseph"
        //     },
        //     {
        //         parent2: "Floyd Joseph"
        //     }
        // ],
        behaviors: [
            {
                behavior1: "scratching"
            },
            {
                behavior2: "biting"
            }
        ]
    }
];

db.Student
    .remove({})
    .then(() => db.Student.collection.insertMany(studentSeed))
    .then(data => {
        console.log(`${data.result.n} records inserted!`);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });