type TpostProducts = {
  name: string,
  amount: number
};

type TproductsDTO = {
  name: string,
  amount: number,
  id: number,
  orderId: number | null
};

export { TpostProducts, TproductsDTO };
