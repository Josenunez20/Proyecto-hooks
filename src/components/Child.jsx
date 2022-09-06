import React from 'react';

const Child = props =>{
    const {counter, updateCounter} = props;

    return(

        <div className='child'>
            <h2>child - {counter}</h2>
            <button onClick={updateCounter}> Click</button>
        </div>

    );
}

export default Child;