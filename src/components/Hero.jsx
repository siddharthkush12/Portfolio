import React, { useState } from "react";
import image from "../assets/image.png";
import { Typewriter } from "react-simple-typewriter";
import ButtonRotatingBackgroundGradient from "./ButtonRotatingBackgroundGradient";
import { Dialog } from "./ui/dialog";
import DialogAbout from "./DialogAbout";
import Button from "./Button";

function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="pb-4 lg:mb-20 lg:pt-10">
      <div className="flex flex-wrap lg:flex-row-reverse">

        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              src={image}
              className="border border-stone-900 rounded-full h-120 w-120"
              alt="profile"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Siddharth Kushwaha
            </h2>
            <span className="text-3xl bg-gradient-to-r from-stone-300 via-stone-600 to-stone-300 bg-clip-text tracking-tight text-transparent ">
              MERN Developer
            </span>
            <p className="text-stone mt-2 text-center lg:text-left text-sm md:text-xl max-w-md h-6 md:mb-30 mb-10 bg-gradient-to-r from-[#E2CBFF] to-[#393BB2] bg-clip-text text-transparent">
              <Typewriter
                words={[
                  "Turning ideas into full-stack web experiences.",
                  "Crafting clean UIs with React & Tailwind.",
                  "Solving real-world problems with code.",
                  "Passionate MERN Stack Developer.",
                ]}
                loop={0}
                cursor
                cursorStyle=""
                typeSpeed={90}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </p>
            <ButtonRotatingBackgroundGradient
              buttontext={"About Me"}
              setDialogOpen={setDialogOpen}
            />
            <Dialog
              open={dialogOpen}
              onOpenChange={setDialogOpen}
              className="bg-white p-10"
            >
              <DialogAbout />
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
