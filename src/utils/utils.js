export const getProductPrice = (price, bestSeller) => {
  const isDiscounted = bestSeller; 
  const productPrice = isDiscounted ? Math.round(price * 0.5) : price; 
  return { productPrice, isDiscounted };
};
