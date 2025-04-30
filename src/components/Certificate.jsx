import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { CERTIFICATE } from "@/constants";
import { Card, CardContent } from "./ui/card";

function Certificate() {
  return (
    <div className="my-19 w-full">
      <h2 className="text-center text-xl md:text-4xl bg-gradient-to-r from-[#E2CBFF] to-[#393BB2] bg-clip-text text-transparent relative z-10 mb-15">
        CERTIFICATES
      </h2>

      <Carousel className="flex items-center w-full">
        <CarouselContent>
          {CERTIFICATE[0].certificate.map((image, idx) => {
            return (
              <CarouselItem
                key={idx}
              >
                <Card className="flex items-center justify-center">
                  <CardContent className="rounded-2xl ">
                    <img
                      src={image}
                      alt="image not found"
                      className="rounded-2xl md:w-150 md:mx-auto"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <div className="md:hidden">.</div>
        <CarouselNext/>
      </Carousel>
    </div>
  );
}

export default Certificate;
