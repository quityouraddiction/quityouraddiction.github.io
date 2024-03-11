import React from "react";

const Benefits = () => {
  return (
    <div className="">
      <h1 className="text-2xl text-center font-semibold mb-4">
        Benefits of Quitting Any Addiction
      </h1>
      <ol className="list-none flex flex-wrap justify-center">
        <li className="mb-2 flex flex-col justify-center items-center">
          <strong className="text-primary text-xl">Improved Health</strong>
          <ul className="list-none px-8">
            <li>Increased lung capacity and heart health.</li>
            <li>Improved sleep quality and reduced fatigue.</li>
            <li>
              Stronger immune system and decreased risk of chronic diseases.
            </li>
          </ul>
        </li>
        <li className="mb-2 flex flex-col justify-center items-center">
          <strong className="text-primary text-xl">Enhanced Mental Clarity</strong>
          <ul className="list-none px-8">
            <li>Sharper thinking and clearer decision-making.</li>
            <li>Reduced anxiety and depression.</li>
            <li>Increased creativity and productivity.</li>
          </ul>
        </li>
        <li className="mb-2 flex flex-col justify-center items-center">
          <strong className="text-primary">Stronger Relationships</strong>
          <ul className="list-none px-8">
            <li>Improved communication and trust with loved ones.</li>
            <li>Stronger familial bonds and healthier relationships.</li>
            <li>Increased capacity for empathy and emotional connection.</li>
          </ul>
        </li>
        <li className="mb-2 flex flex-col justify-center items-center">
          <strong className="text-primary">Financial Freedom</strong>
          <ul className="list-none px-8">
            <li>Improved financial stability and control over resources.</li>
            <li>Ability to invest in experiences and goals.</li>
            <li>Reduced stress related to money issues.</li>
          </ul>
        </li>
        <li className="mb-2 flex flex-col justify-center items-center">
          <strong className="text-primary">Personal Growth and Empowerment</strong>
          <ul className="list-none px-8">
            <li>Increased self-esteem and confidence.</li>
            <li>Sense of accomplishment and personal pride.</li>
            <li>
              Opportunity to pursue passions and explore new possibilities.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Benefits;
