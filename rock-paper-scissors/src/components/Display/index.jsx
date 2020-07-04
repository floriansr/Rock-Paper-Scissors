import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from 'antd';

import { setChoice, setComputerChoice } from '../../redux';

const Display = () => {
  const dispatch = useDispatch();
  const { choice, computerChoice } = useSelector((state) => state.choice);

  const setCurrentChoice = (e) => {
    // console.log('setChoice -> choice', e.target.textContent);
    dispatch(setChoice(e.target.textContent));

    const allChoices = ['Paper', 'Rock', 'Scissors'];
    const computer = allChoices[Math.floor(Math.random() * allChoices.length)];
    // console.log('setCurrentChoice -> computer', computer);
    dispatch(setComputerChoice(computer));
  };

  return (
    <>
      <Button type="primary" onClick={(e) => setCurrentChoice(e)}>
        Rock
      </Button>
      <Button type="primary" onClick={(e) => setCurrentChoice(e)}>
        Paper
      </Button>
      <Button type="primary" onClick={(e) => setCurrentChoice(e)}>
        Scissors
      </Button>

      {choice ? (
        <div>
          <h3>My current choice : {choice}</h3>
          <h3>Computer choice : {computerChoice}</h3>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Display;
