import { Fragment, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import './App.scss';
import Navbar from './components/navbar/navbar.component';
import CreateBizCardPage from './pages/createTeacherCard/CreateTeacherCard.page';
import DashboardPage from './pages/dashboard/dashboard.page';
import LoginPage from './pages/login/Login.page';
import RegisterPage from './pages/register/Register.page';
import NotFoundPage from './pages/nofoundpage/notfound.page';
import LogoutPage from './pages/logout/logout.page';
import QueryParamsPage from './pages/QueryParams/queryParams.page';
import AuthGuardRoute from './components/AuthGuardRoute';
import useAfterLogin from './hooks/useAfterLogin';
import AmazonItemsContainerComponent from './components/aboutPageImagesContainer/AboutPageImagesContainerComponent';
import ContactUsPage from './pages/contactUs/contactus.page';
import ClassesStorePage from './pages/classesStorePage/classesStore.page';


import RegisterBusinessPage from './pages/registerBusiness/registerBusiness.page';
import FooterComponent from './components/footer/footer.component';


import HomePage from './pages/homePage/home.page';
import AboutPage from './pages/aboutPage/about.page';
import ShoppingCartPage from './pages/shoppingCart/shoppingCart.page';


function App() {
	const afterLogin = useAfterLogin();

	useEffect(() => {
		axios
			.post('/auth/loginbytoken')
			.then((res) => {
				console.log('res', res);
				const token = localStorage.getItem('token');
				afterLogin(token);
			})
			.catch((err) => {});
	}, []); 
 
	return (
		<Fragment>

			<Navbar />
			<ToastContainer />
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/about" exact>
					<AboutPage />
				</Route>
				<Route path="/login">
					<LoginPage />
				</Route>
				<Route path="/registerbusiness">
					<RegisterBusinessPage />
				</Route>
				<Route path="/register">
					<RegisterPage />
				</Route>
				<Route path="/classesstore">
					<ClassesStorePage />
				</Route>
				<AuthGuardRoute path="/dashboard" component={DashboardPage} />
				<AuthGuardRoute path="/shoppingcart" component={ShoppingCartPage} />
				<AuthGuardRoute path="/createbizcard" component={CreateBizCardPage} />
				<Route path="/logout">
					<LogoutPage />
				</Route>
				<Route path="/qparams">
					<QueryParamsPage />
				</Route>
				<Route path="/aic">
					<AmazonItemsContainerComponent />
				</Route>
				<Route path="/contactus">
					<ContactUsPage />
				</Route>
				<Route path="*">
					<NotFoundPage />
				</Route>
			</Switch>
			<FooterComponent />
		</Fragment>
		
	);
}

export default App;
