import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import PropTypes from 'prop-types';

const Accountant = ({isPlaying, restartTime, onFinished, time}) => {

    return(
        <div className="accountant">
            <CountdownCircleTimer
                key={restartTime}
                isPlaying={isPlaying}
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

Accountant.propTypes = {
    isPlaying: PropTypes.bool,
    restartTime: PropTypes.number,
    onFinished: PropTypes.func,
    time: PropTypes.number
}

export default Accountant
