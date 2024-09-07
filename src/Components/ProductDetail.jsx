const ProductDetail = ({ ref, children }) => {
  return (
    <div className="w-full" ref={ref}>
      {children}
    </div>
  );
};

export default ProductDetail;
