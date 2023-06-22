import React, { useState } from 'react';
import './App.css';
import { LyricsLittleDucks } from './components/LyricsLittleDucks/LyricsLittleDucks';

function App() {
    const [numberOfDucks, setNumberOfDucks] = useState(0);

    const handleChange = (e) => {
        const numberOfDucks = e.target.value;
        setNumberOfDucks(numberOfDucks);
        showOrHidden('lyrics', 'hidden');
    };

    const handleClick = () => {
        if (numberOfDucks >= 1 && numberOfDucks) {
            showOrHidden('noDucks', 'hidden');
            showOrHidden('lyrics', 'show');
        } else {
            showOrHidden('noDucks', 'show');
        }
    };

    function showOrHidden(id, showOrHidden) {
        if (showOrHidden === 'show') showOrHidden = false;
        if (showOrHidden === 'hidden') showOrHidden = true;
        return (document.getElementById(id).hidden = showOrHidden);
    }

    return (
        <div className='App'>
            <h1>Any Little Ducks</h1>
            <div id='input-ducks'>
                <p>Quantos patinhos foram passear?</p>
                <input
                    id='quantity-ducks'
                    type='number'
                    name='number-of-ducks'
                    placeholder='Insira um número'
                    onChange={handleChange}
                />
                <button onClick={handleClick}>Confirmar</button>
            </div>
            <h3 id='noDucks' hidden>
                Nenhum patinho foi passear :(
            </h3>
            <LyricsLittleDucks totalDucks={numberOfDucks} />
        </div>
    );
}

export default App;
