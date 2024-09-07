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
    <div className="flex flex-col items-center justify-center h-screen gap-8 align-middle light-background px-36">
      <div className="flex flex-col w-full">
        <h1 className="text-4xl font-extrabold">Kamu butuh jasa apa?</h1>
      </div>
      <div className="z-20 w-full overflow-scroll h-[56%] pb-5">
        <ul className="flex flex-row flex-wrap gap-10">
          {tag.map((item, index) => (
            <li>
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
