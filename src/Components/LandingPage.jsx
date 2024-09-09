import productimage from "./../assets/productimage.png";
import Image from "./../Particles/Image";
import TagLists from "./../Particles/TagsLists";

export default function LandingPage() {
  return (
    <section className="relative h-screen w-screen flex flex-col bg-custom-gradient bg-[length:200%_200%] animate-gradient-move z-0">
      <div className="z-10 flex flex-col justify-center h-full md:pb-12 md:pl-32 max-sm:px-10">
        <h1
          className="font-extrabold text-white shadow-md md:w-6/12 max-sm:w-full md:text-6xl max-sm:text-3xl shadow-inherit"
          data-aos="zoom-in"
        >
          Butuh bantuan menyelesaikan tugas? Kami siap membantu!🎓✨
        </h1>
        <p
          className="mt-4 font-light text-white md:w-4/12 md:text-lg max-sm:text-sm max-sm:w-full"
          data-aos="zoom-in"
        >
          Butuh jasa mengerjakan project web apps, makalah, tugas networking,
          UML, database, dan lainnya? Serahkan pada kami!
        </p>
        <div className="md:mt-10 max-sm:mt-5 md:w-5/12 max-sm:w-full">
          <ul className="flex flex-row flex-wrap w-full gap-3">
            {TagLists.map((item, index) => (
              <li key={`item-${index}`}>
                <span
                  className="z-50 bg-white shadow-lg md:p-4 max-sm:p-1 badge max-sm:text-xs"
                  data-aos="zoom-in-up"
                >
                  #{item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 flex flex-col items-center justify-center align-middle max-sm:hidden">
        <Image
          src={productimage}
          alt="jokiin"
          className={"max-sm:w-9/12 object-cover drop-shadow-2xl z-0"}
        />
      </div>
    </section>
  );
}
