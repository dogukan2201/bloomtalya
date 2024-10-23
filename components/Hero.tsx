import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="h-[60vh] lg:h-[80vh] bg-hero bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="h1 text-white text-center max-w-[800px] mt-[120px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Bloomtalya Pansiyona Hoşgeldiniz
          </h1>
          <Button size="lg" className="mt-8">
            Randevu Al
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;