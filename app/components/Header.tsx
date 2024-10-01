import Link from "next/link";

export default function Header() {
	return (
		<header className="flex justify-between p-8 mb-8 bg-slate-900 items-center">
			<p className="text-2xl">Dynamic Routing</p>
			<Link className="text-2xl font-bold" href={`/switches`}>
				&larr; Go back
			</Link>
		</header>
	);
}
