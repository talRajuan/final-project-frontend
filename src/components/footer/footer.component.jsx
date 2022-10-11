import { Fragment } from 'react';
import "../footer/footer.css";

const FooterComponent = () => {
	return (
		<Fragment>
			<footer className="bg-gradiant-light text-center text-white " >
				<div className="container p-4 pb-0">
					<section className="mb-4">
						<a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
							<i className="bi bi-facebook"></i>
						</a>

						<a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
							<i className="bi bi-messenger"></i>
						</a>

						<a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
							<i className="bi bi-whatsapp"></i>
						</a>

						<a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
							<i className="bi bi-instagram"></i>
						</a>

						<a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
							<i className="bi bi-linkedin"></i>
						</a>

						<a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
							<i className="bi bi-github"></i>
						</a>
					</section>
				</div>

				<div className="text-center text-dark p-3">
					© 2020 Copyright:
					<a className="text-dark" href="https://mdbootstrap.com/">
						MDBootstrap.com
					</a>
				</div>
			</footer>
		</Fragment>
	);
};

export default FooterComponent;
