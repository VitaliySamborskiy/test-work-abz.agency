import { useState } from "react";
import "./scss/varible.scss";
import { Header, HeroSection, StaffProfiles, Registration } from "./components/components.tsx";

function App() {
	const [reloadTrigger, setReloadTrigger] = useState<number>(0);

	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<StaffProfiles reloadTrigger={reloadTrigger} />
				<Registration setReloadTrigger={setReloadTrigger} />
			</main>
		</>
	);
}

export default App;
