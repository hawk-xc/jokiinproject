import Image from "./../Particles/Image";

const CardContent = ({ image, title, detail, status, tag }) => {
  return (
    <div className="relative z-0 overflow-hidden shadow-xl card bg-base-100 md:w-72 group">
      <figure>
        <Image src={image} alt="microsoft image" className="w-full" />
      </figure>
      <div className="transition-all duration-150 card-body group-hover:-translate-y-10">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{status ? "NEW" : ""}</div>
        </h2>
        <p>{detail}</p>
        <div className="justify-end card-actions">
          {tag.map((item, index) => (
            <div key={`${item}-${index}`} className="badge badge-outline">
              {item}
            </div>
          ))}
        </div>
        <a className="absolute bottom-0 text-sm cursor-pointer translate-y-7">
          Kunjungi lengkapnya <i className="ri-arrow-right-s-line"></i>
        </a>
      </div>
    </div>
  );
};

export default CardContent;
