export const getProductPrice = (price, bestSeller) => ({
  productPrice : bestSeller ? Math.round(price * 0.5) : price,
  isDiscounted: bestSeller
})



