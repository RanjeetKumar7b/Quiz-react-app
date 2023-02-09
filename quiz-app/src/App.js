import Result from "./Components/Result";
import Start from "./Components/Start";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./Context/QuizHolder";
import { useContext } from "react";
function App() {
  const { start, exit } = useContext(QuizContext);
  return (
    
    <>
    <div>
      <center>
      <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-red-600 underline">Quiz</h1>
      </center>
    </div>
      {
        exit === false
          ?
          <>
            {
              start === true
                ?
                <Quiz />
                :
                <Start />
            }
          </>
          : <Result />
      }

      {/* <Result /> */}
    </>
  );
}

export default App;