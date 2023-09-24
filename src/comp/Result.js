import React from 'react'

const Result = ({ top5Words, top5CoOccurredPairs, wordFrequency }) => {
    return (
        <div >
       
        <div className="container mx-auto">
            <div className="text-center">
                <h2 className="text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">5 Most Occuring words</h2>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {top5Words?.map(word => (
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidth="3" className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="title-font font-medium">{word}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container mx-auto">
                <div className="text-center">
                    <h2 className="text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">5 Most Co-occuring words</h2>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {top5CoOccurredPairs?.map(pair => (
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidth="3" className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">{pair}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Result