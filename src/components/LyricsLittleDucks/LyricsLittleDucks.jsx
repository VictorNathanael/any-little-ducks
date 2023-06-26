import React from 'react';
import './LyricsLittleDucks.css';
import extenso from 'extenso';
import listWords from '../../list-words.json';

export function LyricsLittleDucks(props) {
    const totalDucks = Number(props.totalDucks);

    function upFirstLetter(number) {
        let fullNumber = number;
        if (number && number > 0) {
            fullNumber = extenso(number);
            return (fullNumber =
                fullNumber[0].toUpperCase() + fullNumber.substring(1));
        }
    }

    function parsePlural(word, amount) {
        if (listWords[word]) {
            const index = amount === 1 ? 0 : 1;
            return listWords[word][index];
        }

        return word;
    }

    const firstPart = () => {
        if (totalDucks && totalDucks > 0) {
            let text = '';
            for (let i = 0; i < totalDucks; i++) {
                const currentDucks = totalDucks - i;
                text += `
                    ${upFirstLetter(currentDucks)} ${parsePlural(
                    'patinho',
                    currentDucks
                )} <br/>
                ${parsePlural('Foi', currentDucks)} passear <br/>
                    Além das montanhas <br/>
                    Para brincar <br/>
                    <br/>
                   
                    `;
                if (currentDucks !== 1) {
                    text += ` 
                    A mamãe gritou <br/>
                    Quá, quá, quá, quá! <br/>
                    Mas só ${extenso(currentDucks - 1)} ${parsePlural(
                        'patinho',
                        currentDucks - 1
                    )} <br/>
                    ${parsePlural('Voltou', currentDucks - 1)} de lá <br/>
                    <br />
                    `;
                }
            }

            return text;
        }
    };

    return (
        <div className='LyricsLittleDucks'>
            <div id='lyrics'>
                {totalDucks > 0 && props.showResult && (
                    <p id='first-part'>
                        <div
                            dangerouslySetInnerHTML={{ __html: firstPart() }}
                        ></div>
                    </p>
                )}
                {props.showResult && (
                    <p id='final-part'>
                        A mamãe gritou <br />
                        Quá, quá, quá, quá <br />
                        Mas nenhum patinho <br />
                        Voltou de lá <br />
                        Puxa! <br />
                        <br />
                        A mamãe patinha <br />
                        Ficou tão triste naquele dia <br />
                        Aonde será que{' '}
                        {parsePlural('estava seu filhotinho', totalDucks)}
                        ? <br />
                        Mas essa história vai ter um final feliz <br />
                        Sabe por quê? <br />
                        <br />
                        A mamãe patinha <br />
                        Foi procurar <br />
                        Além das montanhas <br />
                        Na beira do mar <br />
                        <br />
                        A mamãe gritou <br />
                        Quá, quá, quá, quá! <br />E{' '}
                        {parsePlural('o', totalDucks)}{' '}
                        {totalDucks > 1 ? extenso(totalDucks) : ''}{' '}
                        {parsePlural('patinho', totalDucks)} <br />
                        {parsePlural('Voltou', totalDucks)} de lá <br />
                    </p>
                )}
            </div>
        </div>
    );
}
