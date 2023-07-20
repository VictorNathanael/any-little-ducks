import React, { useState } from 'react';
import './App.css';
import LyricsLittleDucks from './components/lyricsLittleDucks/LyricsLittleDucks';
import { debounce } from 'lodash';
import patinhoChorando from './assets/patinho-chorando.png';
import { NumericFormat } from 'react-number-format';
import ButtonToTop from './components/buttonToTop/ButtonToTop';
import SwitchTheme from './components/switchTheme/SwitchTheme';

const pageFeedbackTypes = {
    none: 'none',
    result: 'result',
    error: 'error',
};

function App() {
    const [quantityDucks, setQuantityDucks] = useState(0);
    const [pageFeedback, setPageFeedback] = useState(pageFeedbackTypes.none);
    const [inputError, setInputError] = useState(false);
    const [theme, setTheme] = useState('light');

    const handleInputChange = (e) => {
        setQuantityDucks(e.target.value);
        setPageFeedback(pageFeedbackTypes.none);
        setInputError(false);
    };

    const handleDebouncedInputChange = debounce(handleInputChange, 300);

    const handleClick = () => {
        if (quantityDucks >= 1 && quantityDucks <= 1000000) {
            setPageFeedback(pageFeedbackTypes.result);
            setTimeout(() => {
                window.scrollTo({
                    top: 190,
                    behavior: 'smooth',
                });
            }, 100);
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
                            width={'220px'}
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
        <div className='App' id={theme}>
            <header className='header-container'>
                <h1>Any Little Ducks</h1>
                <SwitchTheme theme={theme} setTheme={setTheme} />
            </header>
            <div className='main-container'>
                <span>Quantos patinhos foram passear?</span>
                <NumericFormat
                    className={inputError ? 'input-error' : ''}
                    type='number'
                    onChange={handleDebouncedInputChange}
                    allowedDecimalSeparators={false}
                    decimalScale={0}
                />
                {inputError && (
                    <span className={'text-error'}>
                        Digite um número de 1 a 1.000.000
                    </span>
                )}
                <button id='btn-confirm' onClick={handleClick}>
                    Confirmar
                </button>
                <ButtonToTop />
            </div>
            {buildContent()}
        </div>
    );
}

export default App;
