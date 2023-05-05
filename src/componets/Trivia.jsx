import { useEffect, useState } from 'react'
import '../app.css'
import useSound from 'use-sound'
import play from '../assets/play.mp3';
import correct from '../assets/correct.mp3';
import wrong from '../assets/wrong.mp3';


export default function Trivia({data, setStop, questionNumber, setQuestionNumber}) {

  const [className, setClassName] = useState("answer")
  const [selectAnswer, setSelectAnswer] = useState(null)
  const [question, setQuestion] = useState(null)
  const [letsPlay] = useSound(play)
  const [conrrectAnswer] = useSound(correct)
  const [wrongAnswer] = useSound(wrong)


    useEffect(()=> {
      letsPlay()
    },[letsPlay])

    useEffect(()=>{
      setQuestion(data[questionNumber - 1])
    },[data, questionNumber])


    const delay = (duration, callback) => {
      setTimeout(()=>{
        callback()
      }, duration)
    }

    const handleClick=(a)=> {
      setSelectAnswer(a)
      setClassName("answer active")
      delay(3000, () => setClassName(a.correct ? 'answer correct' : 'answer wrong'))
      delay(5000, () => {
        if(a.correct){
          conrrectAnswer();
          delay(1000, ()=> {
            setQuestionNumber((prev) => prev + 1);
            setSelectAnswer(null)
          })
        } else{
          wrongAnswer();
          delay(1000, ()=> {
            setStop(true);
          })

        }
      }
      
      )
    }

  return (
    <div  className="trivia">
        <div className="question">{question?.question}</div>
        <div className="answers">
          {question?.answers.map((q)=>(
            <div className={selectAnswer === q ? className : 'answer'} onClick={()=>handleClick(q)}>{q.text}</div>
          ))}
            
        </div>
    </div>
  )
}

