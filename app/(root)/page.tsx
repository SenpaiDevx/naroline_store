import ProductList from "@/components/shared/product/product-list";
// import sampleData from "@/db/sample-data";
import React from "react";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { Product } from "@/types";

export const metadata = {
  title: "Naroline Store",
  description: "Jeysey On the Go",
};
const delay = (ms: number | undefined) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const HomePage = async () : Promise<React.ReactNode >=>  {
  await delay(3000);
  const lastestProduct : Product[] = await getLatestProducts() as unknown as Product[];
  console.log(lastestProduct)
  return (
    <>
      <div className="space-y-8">
        <h2 className="h2-bold">Latest Naroline Products</h2>
          <ProductList title="Newest NAzi!! products" data={lastestProduct} limit={6}/>
      </div>
    </>
  );
};

export default HomePage;
