import React from 'react'
import { Link } from "react-router-dom";
import Header from './partials/Header'
import Contact from './partials/Contact'
import Footer from './partials/Footer'
import PerfectScrollbar from "perfect-scrollbar"
import { Container, Row, Col } from "reactstrap"

let ps = null;

export default function Blog() {

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
			              	<Col lg="6" md="6">
			                	<h5 className="text-on-back">Blog</h5>
			              	</Col>
			            </Row>
		          	</Container>
		        </div>
		        <div className="section section-examples" data-background-color="black">
			      	<img alt="..." className="path" src={require("assets/img/path1.png").default} />
			      	<div className="space-50" />
			      	<Container className="text-center">
			      		<Row>
          					<Col sm="4" className='mb-5'>
          						<Link to="/blog">
					              	<img alt="..." className="img-raised" src={require("assets/img/landing-page.png").default} />
          							<h1 className='mt-3'>Blog Title</h1>
          							<p>
          								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          							</p>
					            </Link>
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