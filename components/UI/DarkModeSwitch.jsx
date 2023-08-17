import { useEffect, useState } from "react";
import Image from "next/image";
import lightmode from "../../Assets/svg/Lightmode.svg";
import darkmode from "../../Assets/svg/Darkmode.svg";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "dark" ? (
        <Image
          src={lightmode}
          alt="dark-mode"
          width={38}
          height={38}
          className="cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <Image
          src={darkmode}
          alt="dark-mode"
          width={38}
          height={38}
          className="cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default DarkModeSwitch;
