import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import image from "../../assets/iphoneVdo.mp4";
import { getWordOfTheDay } from "../../services/api";
import { Volume2 } from "lucide-react";
export default function Hero() {
  const [endAnimation, setEndAnimation] = useState(false);
  const [switchContent, setSwitchContent] = useState(false);
  const [wordOfTheDay, setWordOfTheDay] = useState();

  const fetchWordOfTheDay = async () => {
    const data = await getWordOfTheDay();
    console.log(data.data.data);
    setWordOfTheDay(data.data.data);
    
  };

  useEffect(() => {
    fetchWordOfTheDay();

    const timer = setTimeout(() => {
      // Your delayed code here
      setSwitchContent(true);
    }, 6000);
    const timer1 = setTimeout(() => {
      // Your delayed code here
      setEndAnimation(true);
    }, 4000);

    // Cleanup on unmount or before next effect run
    return () => clearTimeout(timer, timer1);
  }, []);

  const [text, setText] = useState("");

  const speak = (word) => {
    if ("speechSynthesis" in window) {
      setText(word)
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ne-NP';  // You can change the language if needed
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
              type="text"
              placeholder="Search a word..."
              className="ml-3 bg-transparent outline-none text-white w-full placeholder:text-gray-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#features"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              Search
            </a>
            {/* <button
              onClick={() => {
                speak();
              }}
              className="px-6 py-3 border border-gray-400 text-gray-300 rounded-lg hover:bg-gray-800 transition"
            >
              Show List
            </button> */}
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
              playsInline
            ></video>
          </div>
        ) : (
          <div
            className={`w-full md:w-[50%] mx-auto bg-[#5d9c67]  text-white p-6 rounded-3xl shadow-2xl ${
              endAnimation ? "animate-entry" : ""
            }`}
          >
            {/* Header */}
            <h2 className="text-2xl font-semibold mb-1 bg-inherit">
              Word of the Day
            </h2>

            {/* Word */}
            <h1 className="text-4xl font-extrabold mb-6 bg-inherit tracking-wide">
              {wordOfTheDay.word}
            </h1>

            {/* Meanings */}
            <div className="space-y-6 bg-inherit">
              {/* Nepali Section */}
              <div className="bg-white/10 rounded-xl  p-4 backdrop-blur-sm">
                <div className="flex items-center bg-[#6ea676] justify-between mb-2">
                  <span className="text-white bg-[#6ea676] text-sm font-semibold uppercase tracking-wide">
                    Nepali Meaning
                  </span>
                  <button
                    onClick={() => speak(wordOfTheDay.nepali_meaning)}
                    className="bg-white text-[#5d9c67] p-2 rounded-full hover:bg-gray-100 transition"
                  >
                    <Volume2 className="bg-inherit" size={18} />
                  </button>
                </div>
                <p className="text-lg font-medium bg-[#6ea676] tracking-normal  leading-relaxed">
                  {wordOfTheDay.nepali_meaning}
                </p>
              </div>

              {/* English Section */}
              <div className="bg-white/10 rounded-xl  p-4 backdrop-blur-sm ">
                <div className="flex items-center bg-[#6ea676] justify-between mb-2">
                  <span className="text-white text-sm bg-inherit font-semibold uppercase tracking-wide">
                    English Meaning
                  </span>
                  <button
                    onClick={() => speak(wordOfTheDay.english_meaning)}
                    className="bg-white text-[#5d9c67] p-2  rounded-full hover:bg-gray-100 transition"
                  >
                    <Volume2 className="bg-inherit" size={18} />
                  </button>
                </div>
                <p className="text-lg font-medium bg-[#6ea676] tracking-normal leading-relaxed">
                  {wordOfTheDay.english_meaning}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
