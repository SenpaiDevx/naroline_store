import React from "react";
import ProductCard from "./product-card";
// import { Prisma } from "@/lib/generated/prisma";
import { Product } from "@/types";

export interface ProductType  {
  title?: string;
  data: ProductInfo[];
  limit : number;
}

export interface ProductInfo {
 name : string;
 slug : string;
 category : string;
 description : string;
 images : string[];
 price : number;
 brand : string[];
 rating : number;
 numReviews : number;
 stock : number;
 isFeatured : boolean;
 banner : string | null;
}


// <ProductCard key={product.slug} product={product} />
const ProductList = ({ title, data, limit }: {data : Product[], title : string, limit : number}): React.ReactNode  => {
    const filter = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {filter.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            filter.map((product : Product) => {
              return (
                <ProductCard key={product.slug} product={product} />
              );
            })
          }
        </div>
      ) : (
        <div>
            <p>No Product Existed!!</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
