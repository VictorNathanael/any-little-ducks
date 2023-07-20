import React, { useState, useEffect, useCallback } from 'react';
import './LyricsLittleDucks.css';
import extenso from 'extenso';
import listWords from '../../list-words.json';
import InfiniteScroll from 'react-infinite-scroll-component';

function LyricsLittleDucks(props) {
    const totalDucks = Number(props.totalDucks);
    const [loadedContent, setLoadedContent] = useState([]);
    const itemsPerLoad = 20;

    function upFirstLetter(number) {
        let fullNumber = number;
        if (fullNumber && fullNumber > 0) {
            fullNumber = extenso(fullNumber);
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

    const getVerseForNDucks = useCallback((index) => {
        return (
            <React.Fragment key={index}>
                <div className='paragraph'>
                    <p>
                        {upFirstLetter(index)} {parsePlural('patinho', index)}
                    </p>
                    <p>{parsePlural('Foi', index)} passear</p>
                    <p>Além das montanhas</p>
                    <p>Para brincar</p>
                </div>
                {index !== 1 && (
                    <div className='paragraph'>
                        <p>A mamãe gritou </p>
                        Quá, quá, quá, quá! <p />
                        Mas só {extenso(index - 1)}{' '}
                        <p>{parsePlural('patinho', index - 1)}</p>
                        {parsePlural('Voltou', index - 1)} de lá
                    </div>
                )}
            </React.Fragment>
        );
    }, []);

    const getFinal = () => {
        return (
            <React.Fragment>
                <div className='paragraph'>
                    <p>A mamãe gritou</p>
                    <p>Quá, quá, quá, quá</p>
                    <p>Mas nenhum patinho</p>
                    <p>Voltou de lá</p>
                </div>
                <div className='paragraph'>
                    <p>Puxa!</p>
                    <p>A mamãe patinha</p>
                    <p>Ficou tão triste naquele dia</p>
                    <p>
                        Aonde será que{' '}
                        {parsePlural('estava seu filhotinho', totalDucks)}?
                    </p>
                    <p>Mas essa história vai ter um final feliz</p>
                    <p>Sabe por quê?</p>
                </div>
                <div className='paragraph'>
                    <p>A mamãe patinha</p>
                    <p>Foi procurar</p>
                    <p>Além das montanhas</p>
                    <p>Na beira do mar</p>
                </div>
                <div className='paragraph'>
                    <p>A mamãe gritou</p>
                    <p>Quá, quá, quá, quá!</p>
                    <p>
                        E {parsePlural('o', totalDucks)}{' '}
                        {totalDucks > 1 ? extenso(totalDucks) : ''}{' '}
                        {parsePlural('patinho', totalDucks)}
                    </p>
                    <p>{parsePlural('Voltou', totalDucks)} de lá</p>
                </div>
            </React.Fragment>
        );
    };

    const getSong = useCallback(() => {
        const texts = [];
        for (let i = totalDucks; i > 0; i--) {
            texts.push(getVerseForNDucks(i));
        }

        return texts;
    }, [totalDucks, getVerseForNDucks]);

    useEffect(() => {
        if (totalDucks > 0) {
            const nextContent = getSong().slice(0, itemsPerLoad);
            setLoadedContent(nextContent);
        }
    }, [getSong, totalDucks]);

    const loadMoreContent = () => {
        const nextIndex = loadedContent.length;
        const end = nextIndex + itemsPerLoad;
        const newContent = getSong().slice(nextIndex, end);
        setLoadedContent((prevContent) => [...prevContent, ...newContent]);
    };

    return (
        <div className='LyricsLittleDucks'>
            <InfiniteScroll
                dataLength={loadedContent.length}
                next={loadMoreContent}
                hasMore={loadedContent.length < totalDucks}
            >
                {loadedContent}
                {loadedContent.length === totalDucks && getFinal()}
            </InfiniteScroll>
            {loadedContent.length < totalDucks && <h4>loading...</h4>}
        </div>
    );
}

export default LyricsLittleDucks;
