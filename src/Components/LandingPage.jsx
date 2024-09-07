import productimage from "./../assets/productimage.png";
import Image from "./../Particles/Image";
import TagLists from "./../Particles/TagsLists";

export default function LandingPage() {
  return (
    <section className="relative h-screen w-screen flex flex-col bg-custom-gradient bg-[length:200%_200%] animate-gradient-move z-0">
      <div className="z-10 flex flex-col justify-center h-full pb-12 pl-32">
        <h1
          className="w-6/12 font-extrabold text-white shadow-md md:text-6xl max-sm:text-6xl shadow-inherit"
          data-aos="zoom-in"
        >
          Butuh bantuan menyelesaikan tugas? Kami siap membantu!🎓✨
        </h1>
        <p
          className="w-4/12 mt-4 font-light text-white md:text-lg max-sm:text-md max-sm:w-8/12"
          data-aos="zoom-in"
        >
          Butuh jasa mengerjakan project web apps, makalah, tugas networking,
          UML, database, dan lainnya? Serahkan pada kami!
        </p>
        <p className="w-5/12 mt-10">
          <ul className="flex flex-row flex-wrap w-full gap-3">
            {TagLists.map((item, index) => (
              <li key={`item-${index}`}>
                <div class="badge bg-white shadow-lg p-4 z-50">#{item}</div>
              </li>
            ))}
          </ul>
        </p>
      </div>
      <div className="absolute bottom-0 flex flex-col items-center justify-center align-middle">
        <Image
          src={productimage}
          alt="jokiin"
          className={"max-sm:w-9/12 object-cover drop-shadow-2xl z-0"}
        />
      </div>
    </section>
  );
}
