const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Students collection and inserts the students below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/careconnectdb"
);

const studentSeed = [
    {
        firstname: "Alivia"
        lastname: "Kane",
        image: "/assets/images/girl1.png",
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
        firstname: "Ellis",
        lastname: "Liu",
        image: "/assets/images/boy1.png",
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
        firstname: "Elly",
        lastname: "Navarro",
        image: "/assets/images/girl2.png",
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
        firstname: "Matthew" 
        lastname: "Humphreys",
        image: "/assets/images/boy2.png",
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
        firstname: "Reema"
        lastname: "Spears",
        image: "/assets/images/girl3.png",
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
        firstname: "Dean"
        lastname: "Reed",
        image: "/assets/images/boy3.png",
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
        firstname: "Melody"
        lastname: "Nguyen",
        image: "/assets/images/girl4.png",
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
        firstname: "Zakariah",
        lastname: "Joseph",
        image: "/assets/images/boy4.png",
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