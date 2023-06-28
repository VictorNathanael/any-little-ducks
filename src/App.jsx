import React, { useState } from 'react';
import './App.css';
import { LyricsLittleDucks } from './components/LyricsLittleDucks/LyricsLittleDucks';
import { debounce } from 'lodash';

const pageFeedbackTypes = {
    none: 'none',
    result: 'result',
    error: 'error',
};

function App() {
    const [quantityDucks, setQuantityDucks] = useState(0);
    const [pageFeedback, setPageFeedback] = useState(pageFeedbackTypes.none);

    const handleInputChange = (e) => {
        if (!e.target.value.includes('e')) {
            setQuantityDucks(e.target.value);
            setPageFeedback(pageFeedbackTypes.none);
        }
    };

    const debouncedHandleInputChange = debounce(handleInputChange, 300);

    const handleClick = () => {
        if (quantityDucks >= 1) {
            setPageFeedback(pageFeedbackTypes.result);
        } else {
            setPageFeedback(pageFeedbackTypes.error);
        }
    };

    const buildContent = () => {
        switch (pageFeedback) {
            case pageFeedbackTypes.error:
                return <h3 id='noDucks'>Nenhum patinho foi passear :(</h3>;
            case pageFeedbackTypes.result:
                return <LyricsLittleDucks totalDucks={quantityDucks} />;
            default:
                return null;
        }
    };

    return (
        <div className='App'>
            <h1>{'Any Little Ducks'}</h1>
            <div id='input-ducks'>
                <p>Quantos patinhos foram passear?</p>
                <input
                    id='quantity-ducks'
                    type='number'
                    placeholder='Insira um número'
                    onChange={debouncedHandleInputChange}
                />
                <button onClick={handleClick}>Confirmar</button>
            </div>
            {buildContent()}
        </div>
    );
}

export default App;
