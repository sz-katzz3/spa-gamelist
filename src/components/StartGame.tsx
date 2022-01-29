import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import { fetchQuestions } from './RedBlue';
import { QuestionState } from './RedBlue';

type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const Start = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(questions)

    const startGame = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuestions(
            TOTAL_QUESTIONS,
        );

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    const nextQuestion = () => {

    }
    
    return (
        <div className='Start'>
        <h1> Double Trouble </h1>
        <button className="startbutton" onClick={startGame}> START GAME </button>
        <p className="score"> Score: </p>
        <p> Loading... </p>
        <QuestionCard
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
        />
        <button className="next" onClick={nextQuestion}> Next Question </button>
        </div>
    );
    }

export default Start;