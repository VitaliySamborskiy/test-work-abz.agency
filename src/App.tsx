import "./scss/varible.scss";
import { Header, HeroSection, StaffProfiles, Registration } from "./components/components.tsx";

function App() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<StaffProfiles />
				<Registration />
			</main>
		</>
	);
}

export default App;
