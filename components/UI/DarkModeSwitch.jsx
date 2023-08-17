import { useEffect, useState } from "react";
import Image from "next/image";
import darkmode from "../../Assets/svgs/Darkmode.svg";
import lightmode from "../../Assets/svgs/Lightmode.svg";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {mounted &&
        (resolvedTheme === "dark" ? (
          <Image
            src={lightmode}
            alt="dark-mode"
            width={56}
            height={32}
            className="cursor-pointer"
            onClick={() => setTheme("light")}
          />
        ) : (
          <Image
            src={darkmode}
            alt="dark-mode"
            width={56}
            height={32}
            className="cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
};

export default DarkModeSwitch;
