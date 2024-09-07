import Image from "./../Particles/Image";

const CardContent = ({ image, title, detail, status, tag }) => {
  return (
    <div class="card bg-base-100 w-72 shadow-xl z-0">
      <figure>
        <Image src={image} alt="microsoft image" className="w-full" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {title}
          <div class="badge badge-secondary">{status ? "NEW" : ""}</div>
        </h2>
        <p>{detail}</p>
        <div class="card-actions justify-end">
          {tag.map((item, index) => (
            <div key={`${item}-${index}`} class="badge badge-outline">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContent;
