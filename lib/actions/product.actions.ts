'use server';

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { Product } from "@/types";

export async function getLatestProducts () : Promise<Product[]> {

    const data = await prisma.product.findMany({
        take: 4,
        orderBy: { createdAt: 'desc' }
    })

    return convertToPlainObject(data) as unknown as Product[];
}

export async function getProductBySlug (slug : string) {
    return await prisma.product.findFirst({
        where : {
            slug : slug
        }
    })
}