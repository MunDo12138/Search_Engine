import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../contexts/ResultContextProvider'
import { Loading } from './'

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();
  let baseUrl = '';

  switch (`${location.pathname}`) {
    case '/news':
      baseUrl='https://bing-news-search1.p.rapidapi.com'
      break;
    case '/search':
      baseUrl ='https://bing-web-search1.p.rapidapi.com'
      break;
    case '/images/search':
      baseUrl ='https://bing-image-search1.p.rapidapi.com'
      break;
    case '/videos/search':
      baseUrl ='https://bing-video-search1.p.rapidapi.com'
      break;
    default:
      break;
  }

  useEffect(() => { 
    getResults(`${baseUrl}`, `${location.pathname}?q=${searchTerm}&count=50`)
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />

  switch (location.pathname) {
    case '/news':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.value?.map(({ url, name, image }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {url?.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {name}
                </p>
                <img src={image?.thumbnail?.contentUrl} alt={name} className="rounded-lg shadow-xl dark:shadow-gray-800 mx-auto max-w-xs" />
              </a>
            </div> 
          ))}
        </div>
      );

    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.value?.map(({ url, name }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {url?.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {name}
                </p>
              </a>
            </div> 
          ))}
        </div>
      );

    case '/images/search':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.value?.map(({ contentUrl, hostPageUrl, name}, index) => (
            <a className="sm:p-3 p-5" href={hostPageUrl} key={index} target="_blank" rel="noreferrer">
              <img className="rounded-md max-h-40 max-w-40" src={contentUrl} alt={name} loading="lazy" />
            </a>
          ))}
        </div>
      );

    case '/videos/search':
      return (
        <div className="flex flex-wrap ">
          {results?.value?.map((creator, index) => (
            <div key={index} className="p-2">
              <ReactPlayer url={creator?.contentUrl} controls width="355px" height="200px" />
            </div>
          ))}
        </div>
      );
  
    default:
      return 'ERROR!';
  }
}

export default Results