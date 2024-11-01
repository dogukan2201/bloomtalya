"use client";
import { TbArrowsMaximize, TbUsers } from "react-icons/tb";
import { FaHandPointer } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const rooms = [
  {
    id: "jacuzziRoom",
    price: 3256,
    image: "/jakuziPhoto/jakuzi3.webp",
    maxGuests: 2,
  },
  {
    id: "familyRoom",
    price: 1985,
    image: "/ailePhoto/aileOdası1.webp",
    maxGuests: 4,
  },
  {
    id: "standardRoom",
    price: 1760,
    image: "/standartPhoto/standart1.webp",
    maxGuests: 3,
  },
  {
    id: "economicalRoom",
    price: 1375,
    image: "/ekonomikPhoto/ekonomik1.webp",
    maxGuests: 2,
  },
  {
    id: "superiorRoom",
    price: 2000,
    image: "/superiorPhoto/superior1.webp",
    maxGuests: 2,
  },
];

const RoomsPage = () => {
  const t = useTranslations("Rooms");

  return (
    <div className="min-h-[80vh]">
      <h1 className="text-4xl font-bold mt-8 mx-auto w-full text-center">
        》{t("title")}《
      </h1>
      <div className="container mx-auto py-8">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full"
          style={{ color: "#434343" }}
        >
          {rooms.map((room) => (
            <div
              key={room.id}
              className="flex flex-col mb-8 border p-4 rounded-lg shadow-md w-full max-w-[800px] mx-auto"
              style={{ color: "#434343" }}
            >
              <div className="relative w-full h-[420px] mb-4 overflow-hidden cursor-pointer">
                <Image
                  src={room.image}
                  alt={`Oda ${room.id}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex flex-col mb-4">
                <h3 className="text-2xl font-bold" style={{ color: "#434343" }}>
                  {t(room.id)}
                </h3>
                <p
                  className="text-2xl font-bold w-52"
                  style={{ color: "#434343" }}
                >
                  {t("pricePerNight", { price: room.price })}
                </p>
                <div
                  className="flex items-center gap-8 mb-4"
                  style={{ color: "#434343" }}
                >
                  <div className="flex items-center gap-2">
                    <TbUsers className="text-2xl" />
                    <span>{t("capacity", { maxGuests: room.maxGuests })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TbArrowsMaximize className="text-2xl" />
                    <span>{t("size")}</span>
                  </div>
                </div>
                <Link
                  href={`/${room.id}`}
                  className="text-[#434343] bg-[#F7C873] p-2 rounded w-full text-center flex items-center justify-center gap-2"
                >
                  {t("moreInfo")} <FaHandPointer />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
