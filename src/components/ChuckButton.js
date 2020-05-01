import React from 'react';
import 'tachyons';
import './ChuckButton.css';

const ChuckButton = ({testFunc}) => {
    return(
        <div className='tc bw3 br4 grow ba bg-white style'>
        <p
        onClick={testFunc}> Well?
        </p>
        </div>
    )
}
    
export default ChuckButton;