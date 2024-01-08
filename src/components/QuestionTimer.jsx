import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useCountdown } from 'react-countdown-circle-timer'
import { useDispatch, useSelector } from 'react-redux'
import { removeQuestionAction, setTrackQuestionsActions } from '../redux/actions'


const QuestionTimer = (props)=>{

    const dispatch = useDispatch()
    const tracker = useSelector(state=>state.questionTracker.content)
    

    const {
        path,
        pathLength,
        stroke,
        strokeDashoffset,
        remainingTime,
        elapsedTime,
        size,
        strokeWidth,
      } = useCountdown({ isPlaying: true, duration: 7, colors: '#abc' })




    return (
    <div className='timer'>
        <CountdownCircleTimer
            key={props.timeState}
            isPlaying
            duration={30}
            strokeWidth={25}
            strokeLinecap='butt'
            colors={['#00FFFF', '#00FFFF']}
            colorsTime={[7, 5]}
            onComplete={() => {
                dispatch(removeQuestionAction())
                dispatch(setTrackQuestionsActions(tracker+1))
                return { shouldRepeat: true} 
              }}
        >
            {({ remainingTime }) => (
            <div className='d-flex flex-column align-items-center'>
                <div style={{ fontSize: '15px'}}>SECONDS</div>
                <div style={{ fontSize: '30px' }}>{remainingTime}</div>
                <div style={{ fontSize: '15px'}}>REMAINING</div>
            </div>
            )}

        </CountdownCircleTimer>
    </div>
    )
}

export default QuestionTimer