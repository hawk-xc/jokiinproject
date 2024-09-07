import microsoft from "./../assets/services/microsoft.jpeg";
import CardContent from "./../Particles/CardContent";

export default function App() {
  const tag = ["mewarnai", "menulis"];

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 align-middle light-background">
      <div className="flex flex-col w-full px-36">
        <h1 className="text-4xl font-extrabold">Kamu butuh jasa apa?</h1>
      </div>
      <div>
        <ul className="flex flex-row flex-wrap gap-10">
          <li>
            <CardContent
              image={microsoft}
              title="microsoft"
              detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, in."
              status={true}
              tag={tag}
            />
          </li>
          <li>
            <CardContent
              image={microsoft}
              title="microsoft"
              detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, in."
              status={true}
              tag={tag}
            />
          </li>
          <li>
            <CardContent
              image={microsoft}
              title="microsoft"
              detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, in."
              status={true}
              tag={tag}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
