import Link from "next/link";
import { productData } from "../data/productsArray";
import Image from "next/image";

export default function SwitchGrid() {
	return (
		<ul className="max-w-[70rem] m-auto grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 px-4">
			{productData.map((product, index) => (
				<li className="relative m-auto w-fit" key={product.id + index}>
					<Link href={`/switches/${product.ref}`}>
						<Image
							src={product.image}
							alt={`${product.brand} ${product.name}`}
							width={200}
							height={200}
						/>
						<div className="absolute inset-0 place-content-center text-center text-2xl font-bold opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.75)]">
							<p className="p-2">{product.name}</p>
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
}
