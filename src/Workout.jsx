import React from 'react';
import PropTypes from 'prop-types';

function Workout({ title, description, time, onComplete }) {
  const timerRef = React.useRef(null);

  function handleStartWorkout() {
    if (timerRef.current) return; 

    timerRef.current = setTimeout(() => {
      handleStopWorkout();
    }, time);
  }

  function handleStopWorkout() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
      onComplete();
    }
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Duration: {time / 1000} seconds</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}

Workout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default Workout;
