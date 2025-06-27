import React from 'react'
import { Volume2 } from "lucide-react";
function WordOfTheDayContent({title,  word,onEnglishSpeak,nepaliMeaning, englishMeaning}) {
  return (
   <>
    {/* Header */}
            <h2 className="text-2xl font-semibold mb-1 bg-inherit">
          {title}    
            </h2>

            {/* Word */}
            <h1 className="text-4xl font-extrabold mb-6 bg-inherit tracking-wide">
              {word??'N/A'}
            </h1>

            {/* Meanings */}
            <div className="space-y-6 bg-inherit">
              {/* Nepali Section */}
              <div className="bg-white/10 rounded-xl  p-4 backdrop-blur-sm">
                <div className="flex items-center bg-[#6ea676] justify-between mb-2">
                  <span className="text-white bg-[#6ea676] text-sm font-semibold uppercase tracking-wide">
                    Nepali Meaning
                  </span>
                
                </div>
                <p className="text-lg font-medium bg-[#6ea676] tracking-normal  leading-relaxed">
                  {nepaliMeaning}
                </p>
              </div>

              {/* English Section */}
              <div className="bg-white/10 rounded-xl  p-4 backdrop-blur-sm ">
                <div className="flex items-center bg-[#6ea676] justify-between mb-2">
                  <span className="text-white text-sm bg-inherit font-semibold uppercase tracking-wide">
                    English Meaning
                  </span>
                  <button
                    onClick={() => onEnglishSpeak()}
                    className="bg-white text-[#5d9c67] p-2  rounded-full hover:bg-gray-100 transition"
                  >
                    <Volume2 className="bg-inherit" size={18} />
                  </button>
                </div>
                <p className="text-lg font-medium bg-[#6ea676] tracking-normal leading-relaxed">
                  {englishMeaning }
                </p>
              </div>
            </div></>
  )
}

export default WordOfTheDayContent