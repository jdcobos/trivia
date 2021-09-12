import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Accountant = ({restartTime, onFinished, time}) => {

    return(
        <div className="accountant">
            <CountdownCircleTimer
                key={restartTime}
                isPlaying
                duration={time}
                colors={[
                ['#004777', 0.33],
                ['#F7B801', 0.33],
                ['#A30000', 0.33],
                ]}
                size={100}
            >
            {({ remainingTime }) => remainingTime === 0 ? onFinished(): remainingTime }
            </CountdownCircleTimer>
        </div>
    )
}


export default Accountant
