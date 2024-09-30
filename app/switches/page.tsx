import Header from "../components/Header";
import SwitchGrid from "../components/SwitchGrid";
import Footer from "../components/Footer";

export default function SwitchesPage() {
	return (
		<>
			<Header />
			<main>
				<h1 className="text-center text-4xl mb-8">Our Switches</h1>
				<SwitchGrid />
			</main>
			<Footer />
		</>
	);
}
