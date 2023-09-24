import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const WordFrequency = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = wordFrequency.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(wordFrequency)
        }
    }
    const location = useLocation();
    const wordFrequency = location.state?.wordFrequency;
    useEffect(() => {
        if (searchInput !== '') {
            const filteredData = wordFrequency.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(wordFrequency)
        }
      }, [searchInput,wordFrequency])
      
    return (
        <div>
            <section className="text-gray-600 body-font relative">
            <div className="container   mx-auto">
            <div class="flex justify-center  p-7 bg-gray-700">
                                            <div class="flex flex-col justify-center items-center text-center">
                                                <div class="text-white text-3xl md:text-5xl font-medium  my-2">Text Analyzer</div>
                                                <div class="text-white md:text-xl  my-2 ">Word Frequency</div>
                                               
                                            </div>
                                        </div> 
                    <section class="text-gray-600 body-font">
                       
      
    
                        <div class="container mx-auto">
                            <div class="flex flex-col text-center w-full">
                            </div>
                            
                            <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                            <div class="container px-5 py-4 flex flex-wrap mx-auto">
      <div class="flex md:flex-nowrap mx-auto  flex-wrap justify-center items-end md:justify-start">
        <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <input type="text" id="footer-field" placeholder="search" onChange={(e) => searchItems(e.target.value)}  name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-gray-200 focus:border-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button onClick={(e) => searchItems(e.target.value)} class="inline-flex text-white  bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">Search</button>
      </div>
      </div>
                                <table class="table-auto w-full text-left whitespace-no-wrap">
                                    <thead>
                                        <tr>
                                            <th class="px-4 py-3 title-font tracking-wider text-center font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Word</th>
                                            <th class="px-4 py-3 title-font tracking-wider font-medium text-center text-gray-900 text-sm bg-gray-100">Frequency</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {searchInput.length > 0 ? (
                    filteredResults.map((word) => 
                        (
                            <tr>
                            <td class="px-4 py-3 text-center">{`${word[0]} `}</td>
                            <td class="px-4 py-3 text-center">{` ${word[1]}`}</td>
                        </tr>
                        )
                    )
                ) : (
                    wordFrequency.map((word) =>  (
                        <tr>
                        <td class="px-4 py-3 text-center">{`${word[0]} `}</td>
                        <td class="px-4 py-3 text-center">{` ${word[1]}`}</td>
                    </tr>
                        )
                    )
                )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default WordFrequency