import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto max-w-6xl py-10 px-6">
        <div className="md:grid grid-cols-2 gap-10 items-center">
          <img
            src="https://www.youtubefordevelopers.com/cover.jpg"
            className="rounded-lg shadow-lg mb-6 md:mb-0 mx-auto"
            alt="Youtube for developer cover"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Youtube for developers
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Ready to start creating youtube videos while padding your resume,
              building your brand, and leaving your brand, and learning a lot
              along the way?
            </p>
            <a
              href="#"
              className="bg-red-400 px-5 py-3 uppercase text-blue-100 rounded-md inline-block"
            >
              Buy the course
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto max-w-6xl py-10 px-6">/</div>
        <div className="md:grid grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Resume Missing Something?
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Words on a resume are just that, words. they don't prove that you
              are any of those things. However, Successfully explainingtechnical
              concepts in a videos proves several things to a hiring managers.
            </p>
          </div>
          <img
            src="https://w7.pngwing.com/pngs/605/888/png-transparent-resume-curriculum-vitae-template-moto-highway-racing-computer-icons-resume-blue-text-resume-thumbnail.png"
            className="rounded-lg shadow-lg mb-6 md:mb-0 mx-auto"
            alt="Resume for developer cover"
          />
        </div>
        <div className="bg-red-400">
            <div className="container mx-auto max-w-6xl py-10 px-6 lg:flex items-center space-x-10">
              <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold leading-snug mb-6">What you'll Learn</h1>
              <p className="leading-loose text-blue-100">creating high-quality youtube videos is not something that happens overnight, but we all have to learned while running a youtibe channel. Here are some of the things you'll learn in this course</p>
              </div>
              <ul className="lg:w-1/2">
              <li className="bg-red-900 p-3 rounded-md shadow-lg text-2xl text-blue-100 mb-4">How to overcome imposter syndrome</li>
              <li className="bg-red-900 p-3 rounded-md shadow-lg text-2xl text-blue-100 mb-4">How to overcome imposter syndrome</li>
              <li className="bg-red-900 p-3 rounded-md shadow-lg text-2xl text-blue-100 mb-4">How to overcome imposter syndrome</li>
              <li className="bg-red-900 p-3 rounded-md shadow-lg text-2xl text-blue-100 mb-4">How to overcome imposter syndrome</li>
            </ul>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
