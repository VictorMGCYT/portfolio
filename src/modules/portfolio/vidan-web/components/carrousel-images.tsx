import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/public/Dashboard.png",
  "/public/Employees.png",
  "/public/TimeClock.png",
  "/public/Vacations.png",
  "/public/Attendances.png",
];

export default function CarrouselImages() {
  return (
    <Carousel className="aspect-video h-full w-full">
      <CarouselContent className="">
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="p-0">
                <CardContent className="flex aspect-video items-center justify-center p-0">
                  <img
                    src={img}
                    alt={`Image ${index + 1}`}
                    className="h-full w-full rounded-xl object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
