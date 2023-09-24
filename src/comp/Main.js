import axios from 'axios';
import React, { useState } from 'react'
import Result from './Result';
import { CustomSpinner } from './Spinner';
import { Link } from 'react-router-dom';

const Main = () => {
  const data = { text: "" };
  const [input, setInput] = useState(data);
  const handleData = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const analyzeText = () => {
    axios.post("https://gusty-wide-mat.glitch.me/api/v1/analyzeText", input)
      .then((response) => {
        setResults(response.data?.result);
        setIsLoading(false);
      })
      .catch(err => console.log(err))
  }

  const analyzeFile = () => {
    const formData = new FormData();
    formData.append('documents', file);
    axios
      .post("https://gusty-wide-mat.glitch.me/api/v1/upload", formData)
      .then((response) => {
        console.log(response.data);
        setResults(response.data?.result[0]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults(null);
    setIsLoading(true);
    if (file) {
      analyzeFile();
    }
    else {
      analyzeText();
    }
  }

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Text Analyzer Api</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">5 Most occuring words and 5 Most adjacent co-occuring words</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-xl text-gray-600"></label>
                  <textarea value={input.text} onChange={handleData} name="text" placeholder='Message' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-60 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <h1 className="flex flex-col text-center w-full text-xl">OR</h1>
              <div className="p-2 w-full">
                <label htmlFor="file" className="leading-7 text-lg text-gray-600">
                  Upload .txt File
                </label>
                <input
                  type="file"
                  accept=".txt"
                  id="file"
                  onChange={handleFileChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 py-1 px-3 text-base outline-none text-gray-700 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="p-2 w-full">
                <button onClick={handleSubmit} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Analyze</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isLoading && <CustomSpinner />}
      {results && <Result top5Words={results?.top5Words}
        top5CoOccurredPairs={results?.top5CoOccurredPairs}
        wordFrequency={results?.wordFrequency} />}
      {results && <Link
        to={"/analysis"}
        state={{ wordFrequency: results?.wordFrequency }}
        className="flex mx-auto w-64 text-white bg-indigo-500 border-0 py-2 px-8 my-12 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center"
      >
        Frequency Analysis
      </Link>}
    </div>
  )
}

export default Main