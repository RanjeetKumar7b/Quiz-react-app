import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

export default function Result() {
    const { correct, setExit, setStart, quizzes } = useContext(QuizContext)
    const playAgain = () => {
        setExit(false);
        setStart(false);
    }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[40%] border shadow-lg rounded-md overflow-hidden text-center'>
                <h2 className='text-2xl p-3 my-2'>Thankyou for taking the test</h2>
                <h2 className='text-2xl p-3 my-2'>Score: {correct} / {quizzes.length}</h2>
                <button onClick={playAgain} className='border bg-green-500 p-3 text-2xl rounded'>Play agian</button>
            </div>
        </div>
    )
}