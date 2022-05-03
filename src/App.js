import "./styles/_base.scss";
import { HomePage } from "./pages/home";
import { Header } from "./shared/header";

function App() {
	return (
		<div className="main">
			<Header />
			<HomePage />;
		</div>
	);
}

export default App;
