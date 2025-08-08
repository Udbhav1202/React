import React from "react";

function Card({username, btnText="click me"}) {

  const title = "React + Vite Card";
  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2JFyVMUGB2hCmAhFXOdCydqzgsCHd2BAzEA&s";
  const description =
    "This is a simple card built using Tailwind CSS in App.jsx.";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Card Component */}
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        {image && (
          <img src={image} alt={title} className="w-full h-48 object-cover" />
        )}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <h2 className="text-black">{username}</h2>
          {description && (
            <p className="text-gray-600 text-sm mb-4">{description}</p>
          )}
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
