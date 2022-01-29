import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store";
import { GetGameList } from "./actions";
import GridRuler from "./layout/GridRuler/GridRuler";
import Grid from "./layout/Grid/Grid";
import QuestionCard from "./components/QuestionCard";
import { fetchQuestions } from "./components/RedBlue";
import { QuestionState } from "./components/RedBlue";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
const TOTAL_QUESTIONS = 28;

function App() {
  const dispatch = useDispatch();
  const [gameName, setGameName] = useState("");
  const gameState = useSelector((state: RootStore) => state.GameList);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setGameName(event.target.value);
  const handleSubmit = () => dispatch(GetGameList(gameName));

  console.log("game state:", gameState);

  const Start = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(questions);

    const startGame = async () => {
      setLoading(true);
      setGameOver(false);

      const newQuestions = await fetchQuestions(TOTAL_QUESTIONS);

      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!gameOver) {
        const answer = e.currentTarget.value;
        const correct = questions[number].correct_answer == answer;
        if (correct) setScore((prev) => prev + 1);
        const answerObject = {
          question: questions[number].question,
          answer,
          correct,
          correctAnswer: questions[number].correct_answer,
        };
        setUserAnswers((prev) => [...prev, answerObject]);
      }
    };

    const nextQuestion = () => {
      const nextQuestion = number + 1;
      if (nextQuestion === TOTAL_QUESTIONS) {
        setGameOver(true);
      } else {
        setNumber(nextQuestion);
      }
    };

    return (
      <div
        className="App"
        style={{ margin: "16px", position: "relative", height: "100vh" }}
      >
        <input type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
        {gameState.data && (
          <div>
            <GridRuler spacing="sm"></GridRuler>
            <Grid
              container
              spacing="sm"
              alignItems="center"
              style={{ height: "100%" }}
            >
              <Grid item xs={1} sm={6} md={4} lg={3}>
                <div className="Start">
                  <h1> Double Trouble </h1>
                  {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                    <button className="startbutton" onClick={startGame}>
                      {" "}
                      START GAME
                    </button>
                  ) : null}
                  {!gameOver ? <p className="score"> Score: </p> : null}
                  {loading && <p> Loading... </p>}
                  {!loading && !gameOver && (
                    <QuestionCard
                      questionNumber={number + 1}
                      totalQuestions={TOTAL_QUESTIONS}
                      question={questions[number].question}
                      answers={questions[number].answers}
                      userAnswer={userAnswers ? userAnswers[number] : undefined}
                      callback={checkAnswer}
                    />
                  )}
                  {!gameOver &&
                  !loading &&
                  userAnswers.length === number + 1 &&
                  number !== TOTAL_QUESTIONS - 1 ? (
                    <button className="next" onClick={nextQuestion}>
                      {" "}
                      Next Question{" "}
                    </button>
                  ) : null}
                </div>
                <p>{gameState.data.intro_text} </p>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    );
  };
}
export default App;


