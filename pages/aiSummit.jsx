import React from "react";
import image from "../assets/images/laptBook.jpeg";
import Image from "next/image";

const aiSummit = () => {
  return (
    <div className="py-20">
      <div className=" space-y-3">
        <div className="flex justify-center sm:text-3xl font-bold">
          <h2 className="">UNESCO Digital Learning Week 2023</h2>
        </div>

        <div className="mx-auto flex w-full items-center justify-center h-full">
          <div className="relative min:h-full bg-gray-700/90 bg-cover bg-center">
            <Image
              className="w-full h-full object-cover mix-blend-overlay"
              src={image}
              width="1240px"
              height={0}
              quality={100}
              alt="laptop book"
            />

            <div className="absolute top-0 ">
              <div className="">
                <h1>STEAM & AI SUMMIT</h1>
                <h1>Steering Technology For Educator</h1>
              </div>
              <div>
                <i>Date:</i>
                <strong>Mon. 11th September - Wed. 13th September 2023</strong>
                <br />
                <i>Time:</i> <strong>10:00 AM</strong>
                <br />
                <i>Venue:</i>
                <strong>
                  Coding STEM & Robotics Centre, Kwara State Library Complex,
                  Post Office, Ilorin.
                </strong>
                <div>
                  The Kwara Tech Academy is the official training partner to
                  Kwara State E-Library & Ed-Tech Hub. A Public-Private Project
                  between Tech2grassroots Afica and Kwara Library Board.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aiSummit;

// <div>
// <p>
//   A global survey organized by UNESCO on 25th May 2023, of over 450
//   schools and Universities found that fewer than 10% have developed
//   institutional policies and/or formal guidance concerning the use of
//   generative Artificial Intelligence (AI) applications, this vacuum of
//   guidance shows that Educatin Systems are working to catch up with
//   the new technology.
// </p>
// <p>
//   In addressing this, the Kwara Tech Academy in partnership with
//   several agencies will be hosting over 1000 stakeholders to
//   commemorate the UNESCO Digital Learning Week 2023 at a STEAM/AI
//   SUMMIT For Educators.
// </p>
// </div>

// <div>
// <p>
//   We welcome you to the most impactful and biggest STEAM/AI SUMMIT in
//   Kwara State to develop innovative strategies on how to collaborate
//   for effectiveness, Improvement in sustainable teaching and learning
//   through Artificial Intelligence (AI).
// </p>
// <div>
//   <strong>
//     <i>
//       For further details: <br />
//     </i>
//     kwaratechacademy@gmail.com 07011198112
//   </strong>
// </div>

// <div>
//   <h2>Featuring:</h2>
//   {/* <img src="imgs/Basic Programming.png" id="features" /> Basic */}
//   Programming
//   {/* <img src="imgs/multi.png" id="features" /> Multimedia */}
//   Presentations
//   {/* <img src="imgs/learning.png" id="features" /> Learning */}
//   Management Assessment
//   {/* <img src="imgs/ai.png" id="features" /> AI Integrated */}
//   Classroom
//   {/* <img src="imgs/content.png" id="features" /> Content Creation */}
//   for E-books & E-Course
//   {/* <img src="imgs/practical.png" id="features" /> Practical STEM */}
//   & Robotics Activities
//   <button type="button">Register Now</button>
// </div>

// <br />
// <div>
//   <ul>
//     <li>
//       <div>
//         <strong>
//           Mrs. Idris Khadijat Kwara State Teaching Service (TESCOM),
//           Ilorin, Kwara State. Training Session: Digital Awareness &
//           Database Management
//         </strong>
//       </div>
//     </li>
//     <li>
//       <div>
//         <strong>
//           Engr. Isaac Olapade SMAPIS Technologies, Malaysia. Training
//           Session: Automating School Processes with Learning
//           Management System (LMS)
//         </strong>
//       </div>
//     </li>
//     <li>
//       <div>
//         <strong>
//           Mrs. Taiwo Akinwumi Grace Educational Consult. Training
//           Session: Practical STEM & AI Integrated Classroom
//         </strong>
//       </div>
//     </li>
//   </ul>
// </div>
// </div>
