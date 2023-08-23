import React from "react";
// import { useInView } from "react-intersection-observer";
// import ButtonWhite from "../Buttons/ButtonWhite"; // Import your Button component

// const AnimatedDiv = ({ children }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true, // Animation triggers once
//     threshold: 0.5, // Trigger animation when 50% of the element is visible
//   });

//   return (
//     <div
//       ref={ref}
//       className={
//         inView ? "animate-in fade-in zoom-in delay-120 duration-700" : ""
//       }
//     >
//       {children}
//     </div>
//   );
// };

const Courses = () => {
  return (
    <section>
      <div className="w-full py-14 sm:h-full sm:pl-20 px-10">
        <h1 className="font-bold text-xl text-center sm:text-start sm:text-3xl ">
          Topics of interest by categories
        </h1>
        <div className="max-w-[1240px] mx-auto  grid grid-cols md:grid-cols-4 pt-10">
          <div className="space-y-4 hover:rounded-2xl hover:bg-gradient-to-l from-[#9eb3f7] to-[#587efa] p-4">
            <h2 className="font-bold uppercase">It and software</h2>
            <ul className="space-y-3 capitalize">
              <li>cyber security</li>
              <li>networking</li>
              <li>ethical hacking</li>
            </ul>
          </div>
          <div className="space-y-4 hover:rounded-2xl hover:bg-gradient-to-r from-[#91abfd] to-[#123dcc] p-2 sm:py-4 sm:px-2">
            <h2 className="font-bold uppercase">Web Development</h2>
            <ul className="space-y-3 capitalize">
              <li>frontend development</li>
              <li>backend development</li>
              <li>Mobile app</li>
              <li>data science</li>
            </ul>
          </div>
          <div className="space-y-4 hover:rounded-2xl hover:bg-gradient-to-r from-[#91abfd] to-[#123dcc] p-4">
            <h2 className="font-bold uppercase">Design</h2>
            <ul className="space-y-3 capitalize">
              <li>UI/UX Design</li>
              <li>Graphic Design</li>
              <li>Branding</li>
            </ul>
          </div>
          <div className="space-y-4 hover:rounded-2xl hover:bg-gradient-to-r from-[#91abfd] to-[#123dcc] p-4">
            <h2 className="font-bold uppercase">Copy-Writing</h2>
            <ul className="space-y-3 capitalize">
              <li>content creation</li>
              <li>Blog editing</li>
              <li>Content strategy</li>
              <li>Content marketing / SCO</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
