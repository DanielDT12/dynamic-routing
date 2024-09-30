import Link from "next/link";
import { productData } from "../data/productsArray";
import Image from "next/image";

export default function SwitchesPage() {
	return (
		<div>
			{productData.map((product, index) => (
				<Link key={product.id + index} href={`/switches/${product.ref}`}>
					<Image
						src={product.image}
						alt={product.brand + product.name}
						width={100}
						height={100}
					/>
				</Link>
			))}
		</div>
	);
}
