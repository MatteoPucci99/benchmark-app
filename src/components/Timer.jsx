import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { removeQuestionAction, setTrackQuestionsActions } from "../redux/actions"




const Timer = (props)=>{
    
  const tracker = useSelector(state=>state.questionTracker.content)
  const [seconds , setSeconds] = useState(60)
  const dispatch = useDispatch()
    useEffect(() => {
        setSeconds(60); 
        //Timer 
        const timerFunction = setInterval(() => {
          setSeconds((prevSeconds) => {
            if (prevSeconds === 0) {
              dispatch(removeQuestionAction())
              const trackQuestion = tracker +1
              dispatch(setTrackQuestionsActions(trackQuestion))       
              return 60;
            } else {
              return prevSeconds - 1;
            }
          });
        }, 100);
        return () => clearInterval(timerFunction);
      }, [props.tracker]);

   

    
    return (
    <Container>
      {seconds}
        
    </Container>
    )
}

export default Timer