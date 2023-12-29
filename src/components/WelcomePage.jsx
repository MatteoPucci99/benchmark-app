import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


const WelcomePage = ()=>{

const navigate = useNavigate()
const [isChecked, setIsChkecked] = useState(false)
const handleCheckInput = ()=> setIsChkecked(!isChecked)
const handleClickButton = ()=>{
    isChecked === true ? navigate('/questions') : alert('Conferma prima di procedere')
}
    return (
        <Container className="h-100 d-flex align-items-center">
            <Row className="align-items-center">
                <Col className="text-white">
                    <h1 style={{fontSize: "5em", width: "500px", lineHeight: '70px'}}>Welcome to <span className="fw-bold">your exam</span></h1>
                    <h2 className="mt-5 fw-bold" style={{color:'#D20094'}}>Istructions:</h2>
                    <p className="fs-4" style={{width:'700px', lineHeight:'30px'}}>We don't expect most engineers to know the naswers to all of these questions, do don't worry if you unsure of a few of them.</p>
                    <ul className="fs-5 mt-5"> 
                        <li>Each question is <span>timed</span> and can only be <span>answered once.</span></li>
                        <li>Changing browser tab or opening other windows will <span>invalidate the question.</span></li>
                        <li>This exam will take approx. <span>0-5 minutes.</span></li>
                    </ul>
                    <div className="d-flex justify-content-between mt-5">
                        <div className="d-flex align-items-center">
                            <input type="checkbox" checked={isChecked} onChange={handleCheckInput}/>
                            <span className="ms-2">I promise to answer myself without help form anywone</span>

                        </div>
                        <button id="proceedButton" onClick={handleClickButton} >PROCEED</button>
                    </div>
                </Col>
            </Row>
          
        </Container>
    )
}

export default WelcomePage