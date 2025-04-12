import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

function ProjectCard({ cardItem, className }) {
  
  return (
    <Carousel className="w-full max-w-lg mx-auto">
      <CarouselContent>
        {cardItem.image.map((image, index) => (
          <CarouselItem key={index} className="p-2">
            <Card>
              <CardContent className="p-0">
                <img
                  src={image}
                  alt="image not found"
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