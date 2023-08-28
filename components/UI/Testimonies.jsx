import React from "react";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

const Testimonies = () => {
  return (
    <section>
      <div className="flex h-[400px">
        <Carousel
          maw={700}
          mx="auto"
          withIndicators
          height="400"
          nextControlIcon={<IconArrowRight size={20} />}
          previousControlIcon={<IconArrowLeft size={20} />}
          // loop
          dragFree
        >
          <Carousel.Slide>
            <div className="animate-in text-center slide-in-from-left duration-1000">
              <div className="p-2">
                {/* <Image src={image} alt="/" className="rounded-xl" /> */}
                <h2 className="font-bold text-xl">Deborah</h2>
              </div>

              <div className="space-y-4">
                <div className="text-xl">
                  <h1 className="font-extrabold text-blue-500">
                    Web Developer and Graphics Designer
                  </h1>
                </div>
                <p className="sm:text-base mx-auto font-bold max:w-[20rem]">
                  <i>
                    &#34;I joined the academy,hoping to learn a few basics about
                    computer and i really haven&apos;t been dissappointed. Now i
                    know a lot more than i thought to learn and my appreciation
                    goes to my amazing instructors who are friendly and down to
                    earth.&#34;
                  </i>
                </p>
              </div>
            </div>
          </Carousel.Slide>

          <Carousel.Slide>
            {/* Your content for the second slide */}
            <div className="animate-in text-center slide-in-from-top duration-1000">
              <div className="p-2">
                {/* <Image src={image1} alt="/" className="rounded-xl" /> */}
                <h2 className="font-bold text-xl">Isaac</h2>
              </div>

              <div className=" space-y-4">
                <div className="text-xl">
                  <h1 className="font-extrabold text-blue-500">
                    Snr Web Developer and Database Analyst
                  </h1>
                </div>
                <p className="sm:text-base mx-auto font-bold max:w-[20rem]">
                  <i>
                    &#34;Before joining the program, i was intended to learn
                    Database analysis but on my arriver, i attended the web
                    class once and thereafter, i suddenly developed a passion
                    for website designing and its been a experience
                    Learning.&#34;
                  </i>
                </p>
              </div>
            </div>
          </Carousel.Slide>

          <Carousel.Slide>
            {/* Your content for the third slide */}
            <div className="animate-in text-center slide-in-from-right duration-1000">
              <div className="p-2">
                {/* <Image src={image2} alt="/" className="rounded-xl" /> */}
                <h2 className="font-bold text-xl">Stella</h2>
              </div>

              <div className=" space-y-4">
                <div className="text-xl">
                  <h1 className="font-extrabold text-blue-500">
                    Web Developer and Content Creator
                  </h1>
                </div>
                <p className="sm:text-base mx-auto font-bold max:w-[20rem]">
                  <i>
                    &#34;Before joining the Program, i self-learned front-end
                    Web design for the first week and amazingly,i learnt more
                    than i ever self-learnt on my first day in class&#34;
                  </i>
                </p>
              </div>
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonies;
