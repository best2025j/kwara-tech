import React from "react";
import Tech4Copper from "./Tech4Copper";
import Tech2School from "./Tech2School";
import Tech4Women from "./Tech4Women";
import SummerTech from "./SummerTech";

const ProgramsLayout = () => {
  return (
    <section>
      {/* tech for coppers */}
      <Tech4Copper />
      {/* tech 2 school */}
      <Tech2School />
      {/* Tech 4 women */}
      <Tech4Women />
      {/* summer tech */}
      <SummerTech />
    </section>
  );
};

export default ProgramsLayout;
