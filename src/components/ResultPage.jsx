import { Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import ResultChart from "./ResultChart"


const ResultPage = ()=>{

    const myResult = useSelector(state=>state.score.content)
    const totalQuestions = useSelector(state=>state.questionTracker.content)
    const correctAnswerRate = myResult / totalQuestions * 100
    const wrongAnswerRate = 100 - correctAnswerRate
    
    return (
        <Container className="h-100 d-flex justify-content-center align-items-center text-white">
            <Row className="row-cols-1">
                <Col className="text-center mb-2">
                    <h1 className="fw-bold" style={{fontSize:'3.5em'}}>Results</h1>
                    <h2>The summery of your answers:</h2>
                </Col>
                <Col className="mt-5">
                    <Row className="text-center">
                        <Col className="d-flex justify-content-end">
                            <div className="text-start d-flex flex-column justify-content-center">
                                <h1 style={{fontSize:'3em'}}>Correct</h1>
                                <h1 style={{fontSize:'3em'}} className="fw-bold">{correctAnswerRate % 1 === 0 ? correctAnswerRate : correctAnswerRate.toFixed(1)}%</h1>
                                <h3 className="fs-5" style={{color:'#D0D0D0'}}>{myResult}/{totalQuestions} questions</h3>
                            </div>
                        </Col>
                        <Col className="mx-3">
                            <ResultChart correctAnswer={correctAnswerRate} wrongAnswer={wrongAnswerRate} />
                        </Col>
                        <Col className="d-flex">
                            <div className="text-end d-flex flex-column justify-content-center">
                                <h1 style={{fontSize:'3em'}}>Wrong</h1>
                                <h1 style={{fontSize:'3em'}} className="fw-bold">{wrongAnswerRate % 1 === 0 ? wrongAnswerRate : wrongAnswerRate.toFixed(1)}%</h1>
                                <h3 className="fs-5" style={{color:'#D0D0D0'}}>{totalQuestions-myResult}/{totalQuestions} questions</h3>

                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col>
                
                </Col>
            </Row>
        </Container>
    )
}

export default ResultPage