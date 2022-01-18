import React from 'react'
import Header from './partials/Header'
import Services from './partials/Services'
import PerfectScrollbar from 'perfect-scrollbar'
import Contact from './partials/Contact'
import Footer from './partials/Footer'
import { Container, Row, Col, Card, CardTitle, CardBody } from 'reactstrap'

let ps = null;

export default function About() {
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
				<div className='main'>
					<div className="section section-nucleo-icons">
				      	<img alt="..." className="path" src={require("assets/img/path3.png").default} />
				      	<Container>
				        	<Row className="justify-content-center">
				          		<Col lg="10" md="12">
				          			<h5 className="text-on-back">About Us</h5>
				          			<p className='text-center'>
				          				NEXCODE is a family run web design and IT services company. We pride ourselves on delivering a high quality, affordable service in a friendly, professional and personable manner.
				          				<br />
				          				<br />
				          				Run from a virtual office, everything about NEXCODE has been optimised to reduce our business costs so that we can pass the savings onto you. That’s why we offer FREE hosting with all of our website builds and unlimited email addresses to use with your domain. So if you’re paying monthly or yearly for hosting and are not happy with what you are getting for your money, we can help you.
				          				<br />
				          				<br />
				          				Our philosophy is simple; to deliver good customer service. We strongly believe in doing this with each and every one of our clients. Read some of our 5 star reviews here.Our diverse team come from a range of different backgrounds and can expertly tend to a large amount of IT services from website design & development, search engine optimisation (SEO), pay per click advertising (PPC) and graphic design to broken computers and IT software problems. Our graphic design team work with you to design logos, graphics and video advertisements for your business from the drafting stages right through to completion.
				          				<br />
				          				<br />
				          				We understand that every project and every client has unique requirements and budgets, and we treat them as such. We deliver a highly bespoke service at an incredibly reasonable cost, time and time again.
				          				<br />
				          				<br />
				          				Take a look at some of the work we’ve already done for our very happy clients here. Don’t believe us? Check out some of our 5 star reviews here.
				          				<br />
				          				<br />
				          				We look forward to working with you.
				          			</p>
				          		</Col>
				          	</Row>
				        </Container>
				    </div>

				    <Services />

				    <section className="section section-lg">
						<section className="section">
	            			<Container>
				              	<Row className="row-grid justify-content-between">
				                	<Col className="mt-lg-5" md="5">
				                  		<Row>
				                  			<Col className="px-2 py-2" lg="6" sm="12">
												<Card className="card-stats">
													<CardBody>
														<Row>
															<Col md="4" xs="5">
																<div className="icon-big text-center icon-warning">
																	<i className="tim-icons icon-bulb-63 text-warning" />
																</div>
															</Col>
															<Col md="8" xs="7">
																<div className="numbers">
																	<CardTitle tag="p">3+</CardTitle>
																	<p />
																	<p className="card-category">Years Experience</p>
																</div>
															</Col>
														</Row>
													</CardBody>
												</Card>
											</Col>
											<Col className="px-2 py-2" lg="6" sm="12">
						                      	<Card className="card-stats upper bg-default">
							                        <CardBody>
							                          	<Row>
								                            <Col md="4" xs="5">
								                              	<div className="icon-big text-center icon-warning">
								                                	<i className="tim-icons icon-single-02 text-white" />
								                              	</div>
								                            </Col>
								                            <Col md="8" xs="7">
								                              	<div className="numbers">
									                                <CardTitle tag="p">30+</CardTitle>
									                                <p />
									                                <p className="card-category">Clients</p>
								                              	</div>
								                            </Col>
							                          	</Row>
							                        </CardBody>
						                      	</Card>
						                    </Col>
				                  		</Row>
						                <Row>
						                    <Col className="px-2 py-2" lg="6" sm="12">
						                      	<Card className="card-stats">
							                        <CardBody>
							                          	<Row>
								                            <Col md="4" xs="5">
								                              	<div className="icon-big text-center icon-warning">
								                                	<i className="tim-icons icon-heart-2 text-info" />
								                              	</div>
								                            </Col>
								                            <Col md="8" xs="7">
								                              	<div className="numbers">
									                                <CardTitle tag="p">100%</CardTitle>
									                                <p />
									                                <p className="card-category">Client Recommend</p>
								                              	</div>
								                            </Col>
							                          	</Row>
							                        </CardBody>
						                      	</Card>
						                    </Col>
						                    <Col className="px-2 py-2" lg="6" sm="12">
						                      	<Card className="card-stats">
						                        	<CardBody>
							                          	<Row>
								                            <Col md="4" xs="5">
								                              	<div className="icon-big text-center icon-warning">
								                                	<i className="tim-icons icon-zoom-split text-success" />
								                              	</div>
								                            </Col>
								                            <Col md="8" xs="7">
								                              	<div className="numbers">
									                                <CardTitle tag="p">SEO</CardTitle>
									                                <p />
									                                <p className="card-category">Dedicated Project</p>
								                              	</div>
								                            </Col>
							                          	</Row>
						                        	</CardBody>
						                      	</Card>
						                    </Col>
					                  	</Row>
				                  	</Col>
				                  	<Col md="6">
					                  	<div className="pl-md-5">
						                    <h1>Custom Web Development <br /> Services</h1>
						                    <p>Nexcode will be able to work with you to help you achieve your dream website. No longer will you need to fret over operating a slow site, or one filled with broken links. Nexcode only produces top-tier work, and it will be at your direction.</p>
						                    <br />
						                    <p>Other companies claim that they make custom sites but do not actually give you what they want—they have their own ideas. AppKong genuinely cares about your input and will create what you are conjuring up in your imagination. Not only will your site be aesthetically pleasing, but it will be efficient and fast.</p>
						                    <br />
						                    <a className="font-weight-bold text-info mt-5" href="#pablo" onClick={ (e) => e.preventDefault() }>
						                      	More about us{" "}
						                      	<i className="tim-icons icon-minimal-right text-info" />
						                    </a>
					                  	</div>
					                </Col>
				                </Row>
				            </Container>
	            		</section>
					</section>
				</div>

				<Contact />

				<Footer />
			</div>
		</>
	)
}