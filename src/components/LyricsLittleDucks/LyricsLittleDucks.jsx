import React from 'react';
import './LyricsLittleDucks.css';
import extenso from 'extenso';

export function LyricsLittleDucks(props) {
    let fullNumber;
    if (props.totalDucks && props.totalDucks > 0) {
        fullNumber = extenso(props.totalDucks);
        fullNumber = fullNumber[0].toUpperCase() + fullNumber.substring(1);
    }

    return (
        <div className='LyricsLittleDucks'>
            <div id='lyrics' hidden>
                <p id='first-part'>
                    {fullNumber} patinhos <br />
                    Foram passear <br />
                    Além das montanhas <br />
                    Para brincar <br />
                </p>
                <br />
                <p id='main-part'>
                    A mamãe gritou <br />
                    Quá, quá, quá, quá! <br />
                    Mas só quatro patinhos <br />
                    Voltaram de lá <br />
                </p>
                <br />
                <p id='final-part'>
                    A mamãe gritou <br />
                    Quá, quá, quá, quá <br />
                    Mas nenhum patinho <br />
                    Voltou de lá <br />
                    Puxa! <br />
                    <br />
                    A mamãe patinha <br />
                    Ficou tão triste naquele dia <br />
                    Aonde será que estavam seus filhotinhos? <br />
                    Mas essa história vai ter um final feliz <br />
                    Sabe por quê? <br />
                    <br />
                    A mamãe patinha <br />
                    Foi procurar <br />
                    Além das montanhas <br />
                    Na beira do mar <br />
                    <br />
                    A mamãe gritou <br />
                    Quá, quá, quá, quá! <br />
                    E os cinco patinhos <br />
                    Voltaram de lá <br />
                </p>
            </div>
        </div>
    );
}
