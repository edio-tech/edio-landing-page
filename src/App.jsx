import { Route, Routes } from 'react-router-dom';

// General Pages
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

// Checks
import RequireAuth from './checks/RequireAuth';
import RequireCreator from './checks/RequireCreator';
import RequireAdmin from './checks/RequireAdmin';

// Creators Pages
import EditChannelContent from './creators/pages/EditChannelContent';

// Admin Pages
import SelectCreator from './admin/pages/SelectCreator';

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

				<Route element={<RequireCreator />}>
					<Route path="/edit-channel-content/:creator_id" element={<EditChannelContent />} />
				</Route>

				<Route element={<RequireAdmin />}>
					<Route path="/select-creator" element={<SelectCreator />} />
				</Route>

			</Route>
		</Routes>
	)
}
export default App;

