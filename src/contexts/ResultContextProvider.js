import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    let params = {};

    // /search, /imagesearch
    const getResults = async (baseUrl, type) => {
        setIsLoading(true);

        switch (baseUrl) {
            case 'https://bing-news-search1.p.rapidapi.com':
                params = {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/octet-stream',
                        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com' 
                    }
                }
                break;
            case 'https://bing-web-search1.p.rapidapi.com':
                params = {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/octet-stream',
                        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                        'X-RapidAPI-Host': 'bing-web-search1.p.rapidapi.com' 
                    }
                }
                break;
            case 'https://bing-image-search1.p.rapidapi.com':
                params = {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/octet-stream',
                        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                        'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com' 
                    }
                }
                break;
            case 'https://bing-video-search1.p.rapidapi.com':
                params = {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/octet-stream',
                        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                        'X-RapidAPI-Host': 'bing-video-search1.p.rapidapi.com' 
                    }
                }
                break;
            default:
                break;
        }



        const response = await fetch(`${baseUrl}${type}`, params);

        const data = await response.json();
        
        console.log(data);

        setResults(data);
        setIsLoading(false);

    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);