import { Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import ChooseAplication from './pages/ChooseAplication';
import Landing from './pages/Landing';
import ForCreators from './pages/ForCreators';
import ForEducators from './pages/ForEducators';
import ForEnterprise from './pages/ForEnterprise';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Support from './pages/Support';

import Login from './pages/Login';

import RequireAuth from './checks/RequireAuth';
import EditChannelContent from './creators/pages/EditChannelContent';

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
				<Route path="/terms" element={<TermsOfService />} />
				<Route path="/support" element={<Support />} />

				<Route path="/login" element={<Login />} />
				{/* <Route path="/register" element={<Register />} /> */}

				<Route element={<RequireAuth />}>
					<Route path="/edit-channel-content" element={<EditChannelContent />} />
				</Route>
			</Route>
		</Routes>
	)
}
export default App;

