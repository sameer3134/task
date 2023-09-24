import React, { useState } from 'react'
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
    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container  py-20 mx-auto">
                    <div className="flex flex-col text-center w-full mb-6">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Text Analyzer Api</h1>
                        <h2 className="text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Words Frequency</h2>
                    </div>
                    <section class="text-gray-600 body-font">
                       
      
    
                        <div class="container mx-auto">
                            <div class="flex flex-col text-center w-full">
                            </div>
                            
                            <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                            <div class="container px-5 py-4 flex flex-wrap mx-auto">
      <div class="flex md:flex-nowrap mx-auto  flex-wrap justify-center items-end md:justify-start">
        <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <input type="text" id="footer-field" placeholder="search" onChange={(e) => searchItems(e.target.value)}  name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
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
                                        {searchInput.length > 1 ? (
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