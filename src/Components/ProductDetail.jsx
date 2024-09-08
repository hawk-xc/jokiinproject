import { forwardRef } from "react";

const ProductDetail = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="w-full">
      {props.children}
    </section>
  );
});

export default ProductDetail;
