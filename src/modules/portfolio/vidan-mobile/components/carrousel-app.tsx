import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/public/AppStore/Login.png",
  "/public/AppStore/Menu.png",
  "/public/AppStore/Vacation.png",
  "/public/AppStore/Request.png",
  "/public/AppStore/Attendance.png",
  "/public/AppStore/TimeClock.png",
  "/public/AppStore/DayOffs.png",
];

export default function CarrouselApp() {
  return (
    <Carousel className="aspect-auto h-full w-full">
      <CarouselContent className="">
        {images.map((img, index) => (
          <CarouselItem
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            key={index}
          >
            <div className="p-1">
              <Card className="p-0">
                <CardContent className="flex aspect-auto items-center justify-center p-0">
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
