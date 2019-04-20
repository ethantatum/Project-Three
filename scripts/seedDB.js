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
                behavior: "Spitting",
                type: "negative"
            },
            {
                behavior: "Elopement",
                type: "negative"
            },
            {
                behavior: "Property Destruction",
                type: "negative"
            },
            {
                behavior: "Responding to Demand",
                type: "positive"
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
                behavior: "Hitting",
                type: "negative"
            },
            {        
                behavior: "Scratching",
                type: "negative"
            },
            {
                behavior: "Biting",
                type: "negative"
            },
            {
                behavior: "Yelling",
                type: "negative"
            },
            {
                behavior: "Self Injury",
                type: "negative"
            },
            {
                behavior: "Making a Request",
                type: "positive"
            },
            {
                behavior: "Responding to Demand",
                type: "positive"
            },
            {
                behavior: "Answering a Question",
                type: "positive"
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
                behavior: "Yelling",
                type: "negative"
            },
            {
                behavior: "Responding to Demand",
                type: "positive"
            },
            {
                behavior: "Talking to Peer",
                type: "positive"
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
                behavior: "Hitting",
                type: "negative"
            },
            {
                behavior: "Kicking",
                type: "negative"
            },
            {
                behavior: "Elopement",
                type: "negative"
            },
            {
                behavior: "Yelling",
                type: "negative"
            },
            {
                behavior: "Making a Request",
                type: "positive"
            },
            {
                behavior: "Responding to Demand",
                type: "positive"
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
                behavior: "Making a Request",
                type: "positive"
            },
            {
                behavior: "Responding to Demand",
                type: "positive"
            },
            {
                behavior: "Answering a Question",
                type: "positive"
            },
            {
                behavior: "Talking to Peer",
                type: "positive"
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
                behavior: "Scratching",
                type: "negative"
            },
            {
                behavior: "Biting",
                type: "negative"
            },
            {
                behavior: "Self Injury",
                type: "negative"
            },
            {
                behavior: "Responding to Demand",
                type: "positive"
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
                behavior: "Spitting",
                type: "negative"
            }, 
            {
                behavior: "Elopement",
                type: "negative"
            },
            {
                behavior: "Yelling",
                type: "negative"
            },
            {
                behavior: "Responding to Demand",
                type: "positive"
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
                behavior: "Elopement",
                type: "negative"
            },
            {
                behavior: "Responding to Demand",
                type: "positive"
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