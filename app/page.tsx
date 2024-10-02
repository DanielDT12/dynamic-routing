import Link from "next/link";

export default function Home() {
	return (
		<div className="grid place-content-center min-h-screen">
			<Link href={"/switches"}>Switches page</Link>
		</div>
	);
}
