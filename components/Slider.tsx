"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  { id: "image6", src: "/images/vine.webp", alt: "Vine" },
  { id: "image1", src: "/jakuziPhoto/jakuzi3.webp", alt: "Jakuzili Oda" },
  { id: "image2", src: "/ailePhoto/aileOdası1.webp", alt: "Aile Odası" },
  { id: "image7", src: "/images/breakfast.webp", alt: "Kahvaltı" },
  { id: "image8", src: "/images/mum.webp", alt: "Mum" },
  { id: "image3", src: "/standartPhoto/standart1.webp", alt: "Standart Oda" },
  { id: "image8", src: "/images/garden.webp", alt: "Bahçe" },
  { id: "image4", src: "/ekonomikPhoto/ekonomik1.webp", alt: "Ekonomik Oda" },
  { id: "image8", src: "/images/reseption.webp", alt: "Resepsiyon" },
  { id: "image5", src: "/superiorPhoto/superior1.webp", alt: "Superior Oda" },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-4 ">
      {images.length > 0 && (
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-[400px]">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                layout="fill"
                objectFit="cover"
              />
              <Button
                variant="outline"
                size="sm"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous image</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={goToNext}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === index ? "bg-primary w-4" : "bg-gray-300"
            }`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
