import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

import { productData } from "@/app/data/productsArray";

import Image from "next/image";
import { notFound } from "next/navigation";

interface dynamicPath {
	params: {
		ref: string;
	};
}

export default function DynamicPageTest({ params }: dynamicPath) {
	const product = productData.find((item) => item.ref === params.ref);

	if (!product) {
		// Error handling i tilfelle at product ikke finnes.
		notFound();
	}

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-grow grid place-content-center">
				<div className="flex gap-8 border rounded-xl p-4 bg-gray-400 text-black font-bold">
					<Image
						className="rounded-xl"
						src={product.image}
						alt={`${product.brand} ${product.name}`}
						width={400}
						height={400}
					/>
					<div className="flex flex-col justify-between">
						<p>Brand: {product.brand}</p>
						<p>Name: {product.name}</p>
						<p>Type: {product.type}</p>
						<p>Price: ${product.price}</p>
						<p>Price is per 10 switches</p>
						<p>Stock: {product.stock}</p>
						<p className="max-w-48">{product.description}</p>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
