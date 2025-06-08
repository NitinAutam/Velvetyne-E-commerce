import { products } from "../assets/assets";

export const getProducts = async () => {
  const isDeployed = import.meta.env.PROD;
  try {
    if (isDeployed) {
      const res = await fetch("/api/auth/products");
      return res.json();
    } else {
      return products;
    }
  } catch (error) {
    // Handle errors properly
    console.error(error);
    return [];
  }
};
