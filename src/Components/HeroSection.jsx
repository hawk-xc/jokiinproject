import { forwardRef } from "react";

const HeroSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="w-full">
      {props.children}
    </section>
  );
});

export default HeroSection;
