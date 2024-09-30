import Image from "next/image";
import { productData } from "./data/productsArray";
import Link from "next/link";

export default function Home() {
	return (
		<div className="grid place-content-center min-h-screen">
			<h1>test</h1>
			<Link href={"/switches"}>Switches page</Link>
		</div>
	);
}
