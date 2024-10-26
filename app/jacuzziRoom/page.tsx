"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const rooms = [
  {
    id: "jacuzziRoom",
    images: [
      "/jakuziPhoto/jakuzi1.jpg",
      "/jakuziPhoto/jakuzi2.jpg",
      "/jakuziPhoto/jakuzi3.jpg",
    ],
    info: "Jakuzili Suite Oda",
    maxGuests: 2,
  },
  // Add more rooms if needed
];

export default function RoomDetailPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? rooms[0].images.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === rooms[0].images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 my-8">
      <header className="flex items-center justify-between p-4 border-b">
        <h2 className="text-2xl font-bold">{rooms[0].info}</h2>
      </header>

      <div className="flex flex-col md:flex-row gap-8 p-4">
        <div className="w-full md:w-2/3">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-[400px]">
                <Image
                  src={rooms[0].images[currentIndex]}
                  alt={rooms[0].info}
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
          <div className="flex justify-center mt-4 space-x-2">
            {rooms[0].images.map((_, roomIndex) => (
              <button
                key={roomIndex}
                onClick={() => goToSlide(roomIndex)}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentIndex === roomIndex ? "bg-primary w-4" : "bg-gray-300"
                }`}
              >
                <span className="sr-only">Go to slide {roomIndex + 1}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="flex">
              <TabsTrigger value="about">Oda Özellikleri</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="p-4 text-black">
              <p>
                Modern şekilde dizayn edilen odamızda 1 adet çift kişilik ve 1
                adet tek kişilik yatak mevcuttur. En fazla 3 yetişkin ve 1 çocuk
                konaklaması için uygundur. Odalarımız genel anlamda temiz ve
                kullanışlıdır. Odalarımız hakkında daha fazla bilgi almak için
                WhatsApp numaramızdan bizlere ulaşabilir veya bizleri direkt
                arayabilirsiniz.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="flex justify-between items-center p-4 border-t">
        <div>
          <h2 className="font-bold text-black text-3xl">2000₺ / Gecelik</h2>
        </div>
        <Button className="bg-primary text-primary-foreground">
          Rezervasyon Yap
        </Button>
      </div>
    </div>
  );
}