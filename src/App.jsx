import { Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './pages/Layout';
import ChooseAplication from './pages/ChooseAplication';
import Landing from './pages/Landing';
import ForCreators from './pages/ForCreators';
import ForEducators from './pages/ForEducators';
import ForEnterprise from './pages/ForEnterprise';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () =>
{
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Landing />} />
				<Route path="/choose" element={<ChooseAplication />} />
				<Route path="/for-creators" element={<ForCreators />} />
				<Route path="/for-educators" element={<ForEducators />} />
				<Route path="/for-enterprise" element={<ForEnterprise />} />

				<Route path="/privacy" element={<PrivacyPolicy />} />
			</Route>
		</Routes>
	)
}
export default App;

