import { useEffect, useMemo, useState } from 'react';
import './app.css'
import Trivia from './componets/Trivia';
import Timer from './componets/Timer';
import Start from './componets/Start';

function App() {
  const [userName, setUserName] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$ 0")


  const data =  [
    {
      id: 1,
      question: "What country has won the most Olympic gold medals?",
      answers: [
        {
          text: "United States",
          correct: true,
        },
        {
          text: "Russia",
          correct: false,
        },
        {
          text: "China",
          correct: false,
        },
        {
          text: "Germany",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who has won the most Grand Slam titles in tennis history?",
      answers: [
        {
          text: "Rafael Nadal",
          correct: false,
        },
        {
          text: "Roger Federer",
          correct: true,
        },
        {
          text: "Novak Djokovic",
          correct: false,
        },
        {
          text: "Pete Sampras",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What is the name of the annual cycling race that takes place in France?",
      answers: [
        {
          text: "Tour of Italy",
          correct: false,
        },
        {
          text: "Tour of Spain",
          correct: false,
        },
        {
          text: "Tour de France",
          correct: true,
        },
        {
          text: "Tour of California",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "What is the name of the annual golf tournament held at Augusta National Golf Club?",
      answers: [
        {
          text: "The Open Championship",
          correct: false,
        },
        {
          text: "The US Open",
          correct: false,
        },
        {
          text: "The Masters Tournament",
          correct: true,
        },
        {
          text: " The PGA Championship",
          correct: false,
        },
      ],
    },
    {
    id: 5,
    question: "Who holds the record for the fastest 100m sprint time in history?",
    answers: [
      {
        text: "Usain Bolt",
        correct: true,
      },
      {
        text: "Tyson Gay",
        correct: false,
      },
      {
        text: "Yohan Blake",
        correct: false,
      },
      {
        text: "Justin Gatlin",
        correct: false,
      },
    ],
    },
    {
    id: 6,
    question: "In what year did the first modern Olympic Games take place?",
    answers: [
      {
        text: "1896",
        correct: true,
      },
      {
        text: " 1900",
        correct: false,
      },
      {
        text: "1904",
        correct: false,
      },
      {
        text: "1908",
        correct: false,
      },
    ],
    },
    {
    id: 7,
    question: "In what year did the first modern Olympic Games take place?",
    answers: [
      {
        text: "1896",
        correct: true,
      },
      {
        text: " 1900",
        correct: false,
      },
      {
        text: "1904",
        correct: false,
      },
      {
        text: "1908",
        correct: false,
      },
    ],
    },
    {
      id: 8,
      question: "What is the name of the professional baseball league in Japan?",
      answers: [
        {
          text: "Nippon Professional Baseball (NPB)",
          correct: true,
        },
        {
          text: "Major League Baseball (MLB)",
          correct: false,
        },
        {
          text: " Korea Baseball Organization (KBO)",
          correct: false,
        },
        {
          text: "Chinese Professional Baseball League (CPBL)",
          correct: false,
        },
      ],
    },
    {
        id: 9,
        question: "Who is the current men's singles champion at Wimbledon as of 2021?",
        answers: [
          {
            text: "Rafael Nadal",
            correct: false,
          },
          {
            text: "Novak Djokovic",
            correct: true,
          },
          {
            text: "Roger Federer",
            correct: false,
          },
          {
            text: "Andy Murray",
            correct: false,
          },
        ],
    },
    {
      id: 10,
      question: "What is the distance of a marathon race?",
      answers: [
        {
          text: "10 kilometers",
          correct: false,
        },
        {
          text: " 21 kilometers",
          correct: false,
        },
        {
          text: "42 kilometers",
          correct: true,
        },
        {
          text: "50 kilometers",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who is the all-time leading scorer in NBA history?",
      answers: [
        {
          text: "Kobe Bryant",
          correct: false,
        },
        {
          text: "Michael Jordan",
          correct: false,
        },
        {
          text: "Kareem Abdul-Jabbar",
          correct: true,
        },
        {
          text: "LeBron James",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which of the following is not a position in American football?",
      answers: [
        {
          text: "Quarterback",
          correct: false,
        },
        {
          text: " Running back",
          correct: false,
        },
        {
          text: "Striker",
          correct: true,
        },
        {
          text: "Wide receiver",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "In what sport would you perform a slam dunk?",
      answers: [
        {
          text: "Football (soccer)",
          correct: false,
        },
        {
          text: "Basketball",
          correct: true,
        },
        {
          text: "Volleyball",
          correct: false,
        },
        {
          text: "Tennis",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who has won the most Olympic gold medals in women's gymnastics?",
      answers: [
        {
          text: "Simone Biles",
          correct: false,
        },
        {
          text: "Nadia Comaneci",
          correct: false,
        },
        {
          text: "Larisa Latynina",
          correct: true,
        },
        {
          text: "Mary Lou Retton",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "In what year did the FIFA Women's World Cup have its first edition?",
      answers: [
        {
          text: "1991",
          correct: true,
        },
        {
          text: "1995",
          correct: false,
        },
        {
          text: "1999",
          correct: false,
        },
        {
          text: "2003",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(()=>
    [
      {id: 1, amount: "$ 100"},
      {id: 2, amount: "$ 200"},
      {id: 3, amount: "$ 300"},
      {id: 4, amount: "$ 500"},
      {id: 5, amount: "$ 1000"},
      {id: 6, amount: "$ 2000"},
      {id: 7, amount: "$ 4000"},
      {id: 8, amount: "$ 8000"},
      {id: 9, amount: "$ 16000"},
      {id: 10, amount: "$ 32000"},
      {id: 11, amount: "$ 64000"},
      {id: 12, amount: "$ 125000"},
      {id: 13, amount: "$ 250000"},
      {id: 14, amount: "$ 500000"},
      {id: 15, amount: "$ 1000000"},
    ].reverse(),
  []) 


  useEffect(()=>{
    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1 ).amount)
  },[moneyPyramid, questionNumber])

  return (
    <div className="app">

      {userName ? (
        <>
      <div className="main">
        {stop ? ( <h1 className='endText'>You earned: {earned} </h1> ) : (
          <>
          <div className='top' >
            <div className='timer' > 
            <Timer 
            setStop={setStop} 
            questionNumber={questionNumber}
            /> 
            </div>
          </div>
          <div className='bottom'> 
            <Trivia 
            data={data} 
            setStop={setStop} 
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber} 
            /> 
          </div>
          </>
        ) }
      </div>
      <div className="pyramid">
        <ul className='moneyList'>
              {moneyPyramid.map(m => (
                <li className={questionNumber === m.id ? 'moneyListItem active' : 'moneyListItem'}>
                  <span className='moneyListItemNumber'>{m.id}</span>
                  <span className='moneyListItemAmount' >{m.amount}</span>
                </li>
              ))}
        </ul>
      </div>
      </>
      ) : (
      <Start setUserName={setUserName} /> 
      )}
    </div>
  );
}

export default App;
