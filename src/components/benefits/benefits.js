import React from "react";

const Benefits = () => {
  return (
    <div class="container mx-auto py-16 px-4">
      <h1 class="text-4xl font-bold mb-12 text-center text-primary">
        Benefits of Quitting Any Addiction
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="benefit-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl">
          <div class="flex items-center mb-4">
            <div class="bg-primary text-white rounded-full p-2 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-800">Improved Health</h2>
          </div>
          <ul class="list-disc pl-6 text-gray-600">
            <li>Increased lung capacity and heart health.</li>
            <li>Improved sleep quality and reduced fatigue.</li>
            <li>
              Stronger immune system and decreased risk of chronic diseases.
            </li>
          </ul>
        </div>
        <div class="benefit-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl">
          <div class="flex items-center mb-4">
            <div class="bg-primary text-white rounded-full p-2 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-800">
              Enhanced Mental Clarity
            </h2>
          </div>
          <ul class="list-disc pl-6 text-gray-600">
            <li>Sharper thinking and clearer decision-making.</li>
            <li>Reduced anxiety and depression.</li>
            <li>Increased creativity and productivity.</li>
          </ul>
        </div>
        <div class="benefit-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl">
          <div class="flex items-center mb-4">
            <div class="bg-primary text-white rounded-full p-2 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-800">
              Stronger Relationships
            </h2>
          </div>
          <ul class="list-disc pl-6 text-gray-600">
            <li>Improved communication and trust with loved ones.</li>
            <li>Stronger familial bonds and healthier relationships.</li>
            <li>Increased capacity for empathy and emotional connection.</li>
          </ul>
        </div>
        <div class="benefit-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl">
          <div class="flex items-center mb-4">
            <div class="bg-primary text-white rounded-full p-2 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-800">Financial Freedom</h2>
          </div>
          <ul class="list-disc pl-6 text-gray-600">
            <li>Improved financial stability and control over resources.</li>
            <li>Ability to invest in experiences and goals.</li>
            <li>Reduced stress related to money issues.</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Benefits;
