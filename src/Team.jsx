import React from 'react'
import Header from './partials/Header'
import Contact from './partials/Contact'
import Footer from './partials/Footer'
import PerfectScrollbar from "perfect-scrollbar"
import { Container, Row, Col } from 'reactstrap'

let ps = null;

export default function Team() {
	React.useEffect(() => {
		if (navigator.platform.indexOf("Win") > -1) {
			document.documentElement.className += " perfect-scrollbar-on";
			document.documentElement.classList.remove("perfect-scrollbar-off");
			let tables = document.querySelectorAll(".table-responsive");
			for (let i = 0; i < tables.length; i++) {
				ps = new PerfectScrollbar(tables[i]);
			}
		}

		document.body.classList.toggle("profile-page");

		return function cleanup() {
		if (navigator.platform.indexOf("Win") > -1) {
			ps.destroy();
				document.documentElement.className += " perfect-scrollbar-off";
				document.documentElement.classList.remove("perfect-scrollbar-on");
			}
			document.body.classList.toggle("profile-page");
		};
	},[]);

	return (
		<>
			<Header />
			<div className='wrapper'>
				<div className="page-header">
		          	<img alt="..." className="dots" src={require("assets/img/dots.png").default} />
		          	<img alt="..." className="path" src={require("assets/img/path4.png").default} />
		          	<Container className="align-items-center">
			            <Row>
			              	<Col lg="12" md="12">
			                	<h5 className="text-on-back">Coming Soon!!!</h5>
			              	</Col>
			            </Row>
		          	</Container>
		        </div>

		        <Contact />

				<Footer />
			</div>
		</>
	)
}