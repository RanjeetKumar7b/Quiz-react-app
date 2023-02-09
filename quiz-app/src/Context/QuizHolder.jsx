import React, { useState } from 'react'
import { createContext } from 'react'

const QuizContext = createContext();

const quizzes = [
    {
        "question": "What country has the highest life expectancy",
        "a": "hongkong",
        "b": "india",
        "c": "australia",
        "d": "pakistan",
        "correct": "a"
    },
    {
        "question": "Where would you be if you were standing on the Spanish Steps",
        "a": "itly",
        "b": "rome",
        "c": "russia",
        "d": "america",
        "correct": "b"
    },
    {
        "question": "Who are the actors in The Internship?",
        "a": "Ben Stiller, Jonah Hill",
        "b": "Courteney Cox, Matt LeBlanc",
        "c": "Kaley Cuoco, Jim Parsons",
        "d": "Vince Vaughn, Owen Wilson",
        "correct": "d"
    },
    {
        "question": "What is the capital of Spain?",
        "a": "Berlin",
        "b": "Buenos Aires",
        "c": "Madrid",
        "d": "San Juan",
        "correct": "c"
    },
    {
        "question": "What is the most common surname in the United States",
        "a": "smith",
        "b": "Bravo",
        "c": "cook",
        "d": "khan",
        "correct": "a"
    },
    {
        "question": "What is 70 degrees Fahrenheit in Celsius?",
        "a": "18.8889",
        "b": "20",
        "c": "21.1111",
        "d": "158",
        "correct": "c"
    },
    {
        "question": "what will be modulo of 3%10",
        "a": "6",
        "b": "7",
        "c": "3",
        "d": "13",
        "correct": "c"
    },
    {
        "question": "How far is the moon from Earth?",
        "a": "7,918 miles (12,742 km)",
        "b": "86,881 miles (139,822 km)",
        "c": "238,400 miles (384,400 km)",
        "d": "35,980,000 miles (57,910,000 km)",
        "correct": "c"
    },
    {
        "question": "What is 65 times 52?",
        "a": "117",
        "b": "3120",
        "c": "3380",
        "d": "3520",
        "correct": "c"
    },
    {
        "question": "How tall is Mount Everest?",
        "a": "6,683 ft (2,037 m)",
        "b": "7,918 ft (2,413 m)",
        "c": "19,341 ft (5,895 m)",
        "d": "29,029 ft (8,847 m)",
        "correct": "d"
    },
    {
        "question": "When did The Avengers come out?",
        "a": "May 2, 2008",
        "b": "May 4, 2012",
        "c": "May 3, 2013",
        "d": "April 4, 2014",
        "correct": "b"
    },
    {
        "question": "What is 48,879 in hexidecimal?",
        "a": "0x18C1",
        "b": "0xBEEF",
        "c": "0xDEAD",
        "d": "0x12D591",
        "correct": "b"
    }
]

export default function QuizHolder(props) {

    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [correct,setCorrect] = useState(0);
    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, quizzes,correct,setCorrect
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };