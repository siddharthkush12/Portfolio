import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

function ProjectCard({ cardItem, className }) {
  
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {cardItem.image.map((image, index) => (
          <CarouselItem key={index} className="p-2">
            <Card>
              <CardContent className="p-0 rounded-2xl">
                <img
                  src={image}
                  alt="image not found"
                  className="rounded-2xl"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
</Carousel>
  );
}

export default ProjectCard;