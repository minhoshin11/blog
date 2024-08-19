import { connectToDB } from "@/libs/db";
import { Product } from "@/libs/schemas/product";

export async function GET(request: Request) {
  connectToDB();
  const res = await Product.create({ name: "Product 1", price: 100 });
  return Response.json({ message: "GET" });
}
