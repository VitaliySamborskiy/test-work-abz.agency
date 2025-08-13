import "./scss/varible.scss";
import { Header, HeroSection, StaffProfiles } from "./components/components.tsx";

function App() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<StaffProfiles />
			</main>
		</>
	);
}

export default App;
