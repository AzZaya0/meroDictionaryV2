import { useAnimate } from "motion/react";
import React, { useEffect } from "react";

export default function ContactPage() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence = async () => {
      await new Promise((res) => setTimeout(res, 1000));
      await animate(scope.current, {
        x: 100,
        opacity: 1,
        transition: { duration: 1 },
      });
      await animate(
        scope.current,
        {
          y: [0, -15, 0],
        },
         { duration: 3, ease: "easeInOut",repeat:Infinity }
      );
    };
    sequence();
  }, []);

  return (
    <div className="min-h-screen bg-[#000] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl  backdrop-blur-md border border-white/20 rounded-2xl p-10 text-white shadow-xl">
        <h1
          ref={scope}
          className="text-4xl font-bold mb-8 text-center text-green-400"
        >
          Let's Talk
        </h1>

        <div className="grid  grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 bg-transparent border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Your Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-transparent border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 bg-transparent border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-green-500 hover:bg-green-600 transition text-white font-semibold"
            >
              Send Message
            </button>
          </form>

          {/* Info Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-green-400">
                Contact Info
              </h2>
              <p className="text-sm mt-2 text-gray-300">
                We're here to help! Reach out to us anytime and we'll happily
                answer your questions.
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">📧 merovision@gmail.com</p>
              <p className="text-sm text-gray-400">📞 +977-9825915122</p>
              <p className="text-sm text-gray-400">📍 Kathmandu, Nepal</p>
            </div>

            <div className="pt-4 border-t border-white/20 text-sm text-gray-500">
              We usually respond within 24 hours.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
