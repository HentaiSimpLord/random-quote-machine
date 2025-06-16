import '../styles/App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setQuote } from '../redux/action';
import React, { useEffect } from 'react';
import quotes from '../data/quotes.json';


const QuoteBox = ({ backgroundColor }) => {
    const { text, author } = useSelector((state) => state);
    const dispatch = useDispatch();
    
    const handleNewQuote = async () => {
        const random = quotes[Math.floor(Math.random() * quotes.length)];

        dispatch(
            setQuote({
                text: random.text,
                author: random.author
            })
        );
    };

    useEffect(() => {
        handleNewQuote();
    }, [])

    const tweetQuote = `https://x.com/intent/tweet?text=${
        encodeURIComponent(`"${text}" – ${author}`)
    }`

    return (
        <div className='QuoteApp' style={{ backgroundColor: backgroundColor }}>
            <div id='quote-box'>
                <span id='text' style={{ color: backgroundColor }}><img src={ `${process.env.PUBLIC_URL}/images/quotes-removebg-preview.png` } alt='LOGO' style={{ width: 40, color: backgroundColor}}></img>{ text }</span>
                <span id='author' style={{ color: backgroundColor }}>{ author }</span>
                <div className='container'>
                    <a id='tweet-quote' target='_top' href={ tweetQuote }>
                        <img src={ `${process.env.PUBLIC_URL}/images/twitter-logo-removebg-preview.png` } alt='Twitter-LOGO' style={{ width: 30 }}></img>
                    </a>
                    <button id='new-quote' style={{ backgroundColor: backgroundColor }} onClick={handleNewQuote}>New Quote</button>
                </div>
            </div>
        </div>
    );
}

export default QuoteBox;