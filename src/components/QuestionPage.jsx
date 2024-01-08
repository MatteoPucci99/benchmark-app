import { useEffect, useState} from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { setQuestionsAction, setScoreAction, setTrackQuestionsActions } from "../redux/actions"
import questions from "../dataQuestions"
import { useNavigate } from "react-router-dom"
import QuestionTimer from "./QuestionTimer"


const QuestionPage = ()=>{

    const [timerUpdate , setTimerUpdate] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate() 


    
    useEffect(()=>{
        dispatch(setQuestionsAction(questions))
    },[])


    const total = 10
    const myQuestions = useSelector(state=>state.questions.content)
    const myScore = useSelector(state=>state.score.content)
    const tracker = useSelector(state=>state.questionTracker.content)
    
    console.log(myQuestions)
    // Funzione per mescolare un array in modo casuale
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
  
  // Per ogni oggetto nell'array, creo una nuova proprietà 'answers' in cui l'ordine di ogni risposta sarà diverso per ciascun oggetto
     const questionsWithShuffledAnswers = myQuestions.map((question) => {
        const { correct_answer, incorrect_answers } = question;
    
        // Unisco in allAnswer tutte le risposte
        const allAnswers = [correct_answer, ...incorrect_answers];
            
        // Mescolo in maniera randomica le rispsote attraverso la funzione shuffleArray
        const shuffledAnswers = shuffleArray(allAnswers);
            
        // Creo la nuova proprietà 'answers', in cui ci saranno tutte le risposte mescolate per ogni oggetto
        const questionWithAnswers = {
        ...question,
        answers: shuffledAnswers,
        };
        
        return questionWithAnswers;
    });
  
 
  const handleBenchmarkEnd = ()=>{
    if(questionsWithShuffledAnswers.length === 0 && tracker===10){
        navigate('/results')
    }
  }

  const handleNextQuestion = (index) => {
    const trackQuestion = tracker +1
    dispatch(setTrackQuestionsActions(trackQuestion))
    const myAnswer = questionsWithShuffledAnswers[0].answers[index]
  
    if(myAnswer === questionsWithShuffledAnswers[0].correct_answer){
     
        const newScore = myScore + 1      
        dispatch(setScoreAction(newScore))       

    } 
    setTimerUpdate(timerUpdate +1)
    questionsWithShuffledAnswers.shift();
    dispatch(setQuestionsAction(questionsWithShuffledAnswers))
    
}

useEffect(()=>{
    handleBenchmarkEnd()
},[questionsWithShuffledAnswers])







    return (
        <Container className="h-100 d-flex flex-column justify-content-center align-items-center text-white">
            <Row style={{width:'75%'}} className="mb-5">
                
                {questionsWithShuffledAnswers.length > 0 ? (
                <>              
                    <Row>
                        <h1 className="text-center">{questionsWithShuffledAnswers[0].question}</h1>
                    </Row>
                    <Row className="row-cols-2 mt-4">
                        {questionsWithShuffledAnswers[0].answers.map((answer,index)=>{
                            return (
                            <Col className="text-center mt-4 answers p-4 me-4 rounded-5"  key={index} style={{cursor:'pointer'}} onClick={() => handleNextQuestion(index)}>
                                <span>
                                    {answer}
                                </span>
                            </Col>
                            )
                        })}
                    </Row>
                    <QuestionTimer  timeState={timerUpdate}/>
                </>

                ) : null}
                
                
            </Row>
            <Row className="mt-5">
                <Col className="text-center">
                        <h3>QUESTION {tracker}<span style={{color:'#D20094'}}> / {total}</span></h3>
                </Col>
            </Row>
        </Container>
    )
}

export default QuestionPage