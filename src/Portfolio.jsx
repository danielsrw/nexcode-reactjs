import React from 'react'
import Header from './partials/Header'
import Contact from './partials/Contact'
import Footer from './partials/Footer'
import PerfectScrollbar from "perfect-scrollbar"
import { Container, Row, Col, Card, CardHeader, CardFooter, Button } from 'reactstrap'

let ps = null;

export default function Portfolio() {
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
			                	<h5 className="text-on-back">Our Portfolio</h5>
			              	</Col>
			            </Row>
		          	</Container>
		        </div>
		        <section className="section section-lg section-safe section-coins">
		        	<Container>
			            <Row>
			              	<Col md="4">
				                <hr className="line-info" />
				                <h1>
				                  	Our{" "}
				                  	<span className="text-info">Work</span>
				                </h1>
			              	</Col>
			            </Row>
			            <Row>
			              	<Col md="4">
				                <Card className="card-plain">
				                  	<CardHeader>
				                    	<img alt="..." className="img-center img-fluid" src={require("assets/img/work/nac.png").default} />
				                  	</CardHeader>
				                  	<CardFooter className="text-center">
					                    <a href='https://nacrwanda.rw/'>
					                    	<Button className="btn-simple" color="primary">
						                      	www.nacrwanda.rw
						                    </Button>
					                    </a>
				                  	</CardFooter>
				                </Card>
			              	</Col>
			              	<Col md="4">
				                <Card className="card-plain">
				                  	<CardHeader>
				                    	<img alt="..." className="img-center img-fluid" src={require("assets/img/work/nac.png").default} />
				                  	</CardHeader>
				                  	<CardFooter className="text-center">
					                    <a href='https://kdaniels.me/'>
					                    	<Button className="btn-simple" color="danger">
						                      	www.kdaniels.me
						                    </Button>
					                    </a>
				                  	</CardFooter>
				                </Card>
			              	</Col>
			              	<Col md="4">
				                <Card className="card-plain">
				                  	<CardHeader>
				                    	<img alt="..." className="img-center img-fluid" src={require("assets/img/work/nac.png").default} />
				                  	</CardHeader>
				                  	<CardFooter className="text-center">
					                    <a href='https://kundubuzima.rw/'>
					                    	<Button className="btn-simple" color="warning">
						                      	www.kundubuzima.rw
						                    </Button>
					                    </a>
				                  	</CardFooter>
				                </Card>
			              	</Col>
			            </Row>
			        </Container>
		        </section>

		        <Contact />

				<Footer />
			</div>
		</>
	)
}