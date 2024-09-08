import Image from "./../Particles/Image";
import Jokiin from "./../assets/jokiinLogo.png";

export default function Navbar({ scroller, refLists }) {
  return (
    <div className="absolute top-0 z-50 flex flex-row justify-between w-full p-0 bg-transparent px-28">
      <div id="content-1" className="flex flex-row items-center gap-5">
        <div id="logoImage" className="bg-transparent">
          <Image src={Jokiin} alt="jokiin image" className={"w-32 m-0"} />
        </div>
        <ul className="flex flex-row gap-10 font-bold text-white">
          {refLists.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div
        id="content-2"
        className="flex flex-row items-center transition-all duration-150 cursor-pointer hover:scale-105"
      >
        <div className="z-50 flex flex-row gap-2 p-4 pl-1 bg-white shadow-lg badge">
          <span className="flex items-center justify-center text-white align-middle bg-green-500 rounded-full w-7 aspect-square">
            <i className="text-lg ri-whatsapp-line"></i>
          </span>
          WhatsApp
        </div>
      </div>
    </div>
  );
}
