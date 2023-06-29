import React, { useState } from 'react';
import './App.css';
import LyricsLittleDucks from './components/lyricsLittleDucks/LyricsLittleDucks';
import { debounce } from 'lodash';
import patinhoChorando from './assets/patinho-chorando.png';
import { NumericFormat } from 'react-number-format';

const pageFeedbackTypes = {
    none: 'none',
    result: 'result',
    error: 'error',
};

function App() {
    const [quantityDucks, setQuantityDucks] = useState(0);
    const [pageFeedback, setPageFeedback] = useState(pageFeedbackTypes.none);
    const [inputError, setInputError] = useState(false);

    const handleInputChange = (e) => {
        setQuantityDucks(e.target.value);
        setPageFeedback(pageFeedbackTypes.none);
        setInputError(false);
    };

    const handleDebouncedInputChange = debounce(handleInputChange, 300);

    const handleClick = () => {
        if (quantityDucks >= 1 && quantityDucks <= 100000) {
            setPageFeedback(pageFeedbackTypes.result);
        } else {
            setPageFeedback(pageFeedbackTypes.error);
            setInputError(true);
        }
    };

    function buildContent() {
        switch (pageFeedback) {
            case pageFeedbackTypes.error:
                return (
                    <div>
                        <img
                            src={patinhoChorando}
                            alt='imagem de um patinho amarelo chorando'
                            width={'180px'}
                        />
                    </div>
                );
            case pageFeedbackTypes.result:
                return <LyricsLittleDucks totalDucks={quantityDucks} />;
            default:
                return null;
        }
    }

    return (
        <div className='App'>
            <h1>{'Any Little Ducks'}</h1>
            <div className='container-input'>
                <p>Quantos patinhos foram passear?</p>
                <NumericFormat
                    className={inputError ? 'input-error' : ''}
                    type='number'
                    onChange={handleDebouncedInputChange}
                    allowedDecimalSeparators={false}
                    decimalScale={0}
                />
                {inputError && (
                    <p className={'text-error'}>
                        Digite um número de 1 a 100.000
                    </p>
                )}
                <button onClick={handleClick}>Confirmar</button>
            </div>
            {buildContent()}
        </div>
    );
}

export default App;
