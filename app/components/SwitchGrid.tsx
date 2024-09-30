import Link from "next/link";
import { productData } from "../data/productsArray";
import Image from "next/image";

export default function SwitchGrid() {
	return (
		<ul className="grid grid-cols-3 grid-flow-dense">
			{productData.map((product, index) => (
				<li
					className="border border-solid border-red-700"
					key={product.id + index}
				>
					<Link href={`/switches/${product.ref}`}>
						<Image
							src={product.image}
							alt={`${product.brand} ${product.name}`}
							width={200}
							height={200}
						/>
					</Link>
				</li>
			))}
		</ul>
	);
}
