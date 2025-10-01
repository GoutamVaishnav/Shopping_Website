
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default async function Home({searchParams} :{searchParams: Promise<{category: string}>}) {
  const category = (await searchParams).category;
  const Category = category ? category : '';
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image
          src="/featured.png"
          alt="Hero Image"
          fill
          className="w-full h-auto object-cover"
        />  
      </div>
      <ProductList category={Category} />
    </div>
  );
}
