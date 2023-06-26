import React, { useState } from 'react';
import './App.css';
import { LyricsLittleDucks } from './components/LyricsLittleDucks/LyricsLittleDucks';

function App() {
    const [quantityDucks, setQuantityDucks] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleChange = (e) => {
        if (!e.target.value.includes('e')) {
            setQuantityDucks(e.target.value);
            setShowResult(false);
            setShowError(false);
        }
    };

    const handleClick = () => {
        if (quantityDucks >= 1) {
            setShowResult(true);
        } else {
            setShowError(true);
        }
    };

    return (
        <div className='App'>
            <h1>Any Little Ducks</h1>
            <div id='input-ducks'>
                <p>Quantos patinhos foram passear?</p>
                <input
                    id='quantity-ducks'
                    type='number'
                    placeholder='Insira um número'
                    onChange={handleChange}
                />
                <button onClick={handleClick}>Confirmar</button>
            </div>
            {showError && <h3 id='noDucks'>Nenhum patinho foi passear :(</h3>}
            <LyricsLittleDucks
                totalDucks={quantityDucks}
                showResult={showResult}
            />
        </div>
    );
}

export default App;
