import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { setQuestionsAction, setScoreAction } from "../redux/actions"
import questions from "../dataQuestions"
import { useNavigate } from "react-router-dom"


const QuestionPage = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(setQuestionsAction(questions))
    },[])

    const myQuestions = useSelector(state=>state.questions.content)
    const myScore = useSelector(state=>state.score.content)
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
            
        // Crea la nuova proprietà 'answers', in cui ci saranno tutte le risposte mescolate per ogni oggetto
        const questionWithAnswers = {
        ...question,
        answers: shuffledAnswers,
        };
        
        return questionWithAnswers;
    });
  
  console.log(questionsWithShuffledAnswers);
  const handleBenchmarkEnd = ()=>{
    if(questionsWithShuffledAnswers.length === 0){
        navigate('/result')
    }
  }

  const handleNextQuestion = (index) => {
    
    const myAnswer = questionsWithShuffledAnswers[0].answers[index]
    console.log(myAnswer)
    if(myAnswer === questionsWithShuffledAnswers[0].correct_answer){
        console.log('Risposta giusta: ', myAnswer)
        const newScore = myScore + 1
        dispatch(setScoreAction(newScore))

    } else { 
        console.log('Risposta sbagliata: ', myAnswer)
    }
    questionsWithShuffledAnswers.shift();
    dispatch(setQuestionsAction(questionsWithShuffledAnswers))
    handleBenchmarkEnd()
}

    return (
        <Container className="h-100 d-flex justify-content-center align-items-center text-white">
            <Row style={{width:'75%'}}>
                
                {questionsWithShuffledAnswers.length > 0 ? (
                <>              
                    <Row>
                        <h1 className="text-center">{questionsWithShuffledAnswers[0].question}</h1>
                    </Row>
                    <Row className="row-cols-2 mt-4">
                        {questionsWithShuffledAnswers[0].answers.map((answer,index)=>{
                            return (
                            <Col className="text-center mt-4" key={index} style={{cursor:'pointer'}} onClick={() => handleNextQuestion(index)}>
                                <span>
                                    {answer}
                                </span>
                            </Col>
                            )
                        })}
                    </Row>
                </>

                ) : null}
                
                
            </Row>
        </Container>
    )
}

export default QuestionPage