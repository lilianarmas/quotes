import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Quote from './components/Quote';
import Spinner from './components/Spinner';

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
` ;

const Button = styled.button`
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
    background-size: 300px;
    font-family:  Arial, Helvetica, sans-serif;
    color: #fff;
    margin-top: 1rem;
    padding: 1rem 1rem;
    font-size: 2rem;
    border: 2px solid black;
    transition: background-size .8s ease;
    :hover {
        cursor:pointer;
        background-size: 400px;
    }
`;

function App() {

    // State para guardar frase
    const [ quote, setQuote ] = useState({});

    // State para mostrar Spinner
    const [ loading, setLoading ] = useState(false);

    const getFromAPI = async () => {
        setLoading(true);
        const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
        const data = await api.json();

        setQuote(data[0]);
        setLoading(false);
    }

    // Cargar frase al inicio
    useEffect(() => {
        getFromAPI();
    }, []);

    return (
        <Container>
            { loading ?
                <Spinner />
            : 
                <Quote 
                    data={quote}
                />
            }

            <Button
                onClick={getFromAPI}
            >
                Obtener Frase
            </Button>
        </Container>
    );
}

export default App;
