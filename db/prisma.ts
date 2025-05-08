import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@/lib/generated/prisma";
import ws from 'ws';
import dotenv from 'dotenv';

// Sets up WebSocket connections, which enables Neon to use WebSocket communication.
dotenv.config();
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

// Creates a new connection pool using the provided connection string, allowing multiple concurrent connections.
// const pool = new Pool({ connectionString }) as unknown as PoolConfig; <- cause of error can't determise the host database


// Instantiates the Prisma adapter using the Neon connection pool to handle the connection between Prisma and Neon.
const adapter = new PrismaNeon({ connectionString });


// Extends the PrismaClient with a custom result transformer to convert the price and rating fields to strings.
export const prisma = new PrismaClient({ adapter }).$extends({
    result : {
        product : {
            price : {
                compute(product) {
                    return product.price.toString();
                }
            },
            rating : {
                compute(data) {
                    return data.rating.toString();
                },
            }
        }
    }
})
