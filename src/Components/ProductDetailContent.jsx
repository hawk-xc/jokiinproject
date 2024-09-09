import microsoft from "./../assets/services/microsoft.jpeg";
import CardContent from "./../Particles/CardContent";

export default function App() {
  const tag = [
    "mewarnai",
    "menulis",
    "seneng",
    "seneng",
    "laptopan",
    "trading",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen align-middle md:gap-8 light-background md:px-36 max-sm:px-10">
      <div className="flex flex-col w-full">
        <h1 className="font-extrabold md:text-4xl max-sm:text-2xl">
          Kamu butuh jasa apa?
        </h1>
      </div>
      <div className="z-20 w-full overflow-scroll h-[56%] pb-5">
        <ul className="flex flex-col gap-5 md:hidden">
          {tag.map((item, index) => (
            <li key={index}>
              <div className="p-2 border border-slate-100">
                <h2>Cloud Computing</h2>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  id a dolor quo veritatis.
                </span>
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex flex-row flex-wrap gap-10 max-sm:hidden">
          {tag.map((item, index) => (
            <li key={index}>
              <CardContent
                image={microsoft}
                title="microsoft"
                detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, in."
                status={true}
                tag={tag}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
