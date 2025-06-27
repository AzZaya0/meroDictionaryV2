import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import image from "../../assets/iphoneVdo.mp4";
import { getWordOfTheDay, searchWord } from "../../services/api";

import WordOfTheDayContent from "./WordOfTheDayContent";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";
import debounce from "../../services/customhooks/debouncer";

export default function Hero() {
  const [endAnimation, setEndAnimation] = useState(false);
  const [switchContent, setSwitchContent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [wordOfTheDay, setWordOfTheDay] = useState();
  const [searchData, setSearchData] = useState([]);
  const [query, setQuery] = useState("");
  const [cardTitle, setCardTitle] = useState("Word of the Day");

  const fetchWordOfTheDay = async () => {
    const data = await getWordOfTheDay();
    console.log(data.data.data);
    setWordOfTheDay(data.data.data);
  };

  const searchNow = async (word) => {
    console.log(`the word is ${word}`);
    setIsLoading(true);
    const searchData = await searchWord(word);
    console.log(searchData.data.data);
    setSearchData(() => searchData.data.data);
    setIsLoading(false);
  };

  // useEffect(() => {
  //   fetchWordOfTheDay();

  //   const timer = setTimeout(() => {
  //     // Your delayed code here
  //     setSwitchContent(true);
  //   }, 6000);
  //   const timer1 = setTimeout(() => {
  //     // Your delayed code here
  //     setEndAnimation(true);
  //   }, 4000);

  //   // Cleanup on unmount or before next effect run
  //   return () => clearTimeout(timer, timer1);
  // }, []);
  useEffect(() => {
    fetchWordOfTheDay();
    const timer1 = setTimeout(() => setEndAnimation(true), 4000);
    const timer2 = setTimeout(() => setSwitchContent(true), 6000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const debouncedFetch = useRef(
    debounce((word) => searchNow(word), 500)
  ).current;

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedFetch(value); // Debounced here
  };

  const showClickedData = (data) => {
    setQuery("");
    console.log(data);
    setCardTitle("Searched for :");
    const mappedData = {
      word: data.Words,
      english_meaning: data.Meaning,
      nepali_meaning: data.nepali_meaning,
    };
    setWordOfTheDay((prev) => ({
      ...prev,
      ...mappedData,
    }));
  };

  const speak = (word) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "ne-NP"; // You can change the language if needed
      speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-Speech is not supported in your browser.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center ">
      <div className="     w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 py-16 md:py-28 ">
        {/* Text Content */}
        <div className="  w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 ">
            Mero Dictionary.
          </h1>
          <h2 className="text-lg sm:text-xl font-normal text-gray-300 mb-6">
            Your Linguistic Companion in Every Context
          </h2>

          {/* Search section */}
          <div className="flex items-center border border-gray-600 rounded-md px-4 py-2 bg-[#1e1e1e] w-full max-w-md mx-auto md:mx-0 mb-6">
            <Search className="text-gray-400 bg-[#1e1e1e]  w-5 h-5" />
            <input
              onChange={handleChange}
              type="text"
              value={query}
              placeholder="Search a word..."
              className="ml-3 bg-transparent outline-none text-white w-full placeholder:text-gray-400"
            />
          </div>
          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <button
              onClick={() => {
                searchNow(query);
              }}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              Search
            </button>
          </div>
        </div>

        {/* Video Section */}
        {!switchContent ? (
          <div className="w-full  md:w-1/2 flex justify-center  max-xl:scale-[100%] scale-[150%]">
            <video
              className={`w-full  aspect-video rounded-xl shadow-lg ${
                !endAnimation ? ` ` : ` animate-videoEnd`
              }`}
              src={image}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            ></video>
          </div>
        ) : (
          <div
            className={`w-full md:w-[50%] mx-auto bg-[#5d9c67]  text-white p-6 rounded-3xl shadow-2xl ${
              endAnimation ? "animate-entry" : ""
            }`}
          >
            <AnimatePresence mode="wait">
              {query.trim().length === 0 ? (
                <motion.div
                  key="wordOfTheDay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#5d9c67]"
                >
                  <WordOfTheDayContent
                    word={wordOfTheDay.word}
                    title={cardTitle}
                    onSpeak={() => speak(wordOfTheDay.nepali_meaning)}
                    englishMeaning={wordOfTheDay.english_meaning}
                    nepaliMeaning={wordOfTheDay.nepali_meaning}
                    onEnglishSpeak={() => speak(wordOfTheDay.english_meaning)}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="searchResults"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-[390px] overflow-y-auto bg-[#5d9c67] p-4 rounded-lg"
                >
                  {isLoading ? (
                    <div className="text-white bg-[#6ea676] p-4 border my-2 rounded-lg">
                      Loading.......
                    </div>
                  ) : searchData.length == 0 ? (
                    <div className="text-white bg-[#6ea676] p-4 border my-2 rounded-lg">
                      No Words Found
                    </div>
                  ) : (
                    searchData.map((data) => (
                      <button
                        onClick={() => {
                          showClickedData(data);
                        }}
                        className="text-white w-full text-left bg-[#6ea676] p-4 border my-2 rounded-lg"
                        key={data.id}
                      >
                        {data.Words}
                      </button>
                    ))
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
