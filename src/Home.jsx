import React from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'
import PageHeader from './partials/PageHeader'
import Services from './partials/Services'

import { Container, Card, CardHeader, CardTitle, CardBody, CardFooter, Button, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

export default function Home() {
	React.useEffect(() => {
	    document.body.classList.toggle("home");

	    return function cleanup() {
	      	document.body.classList.toggle("home");
	    };
	},[]);

	return (
		<>
			<Header />
			<div className='wrapper'>
				<PageHeader />
				<section className="section section-lg">
					<section className="section">
            			<img alt="..." className="path" src={require("assets/img/path4.png").default} />

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

				<Services />

				<img alt="..." className="path" src={require("assets/img/path5.png").default} />
				<section className="section section-lg section-safe section-coins">
					<Container>
				        <h3 className="title">SEO FRIENDLY ARCHITECTURE CREATION</h3>
				        <div id="typography">
				        	<Row>
				        		<Col md="12">
				        			<div className="typography-line">
						                <p>
							                <blockquote>
							                  	<p className="blockquote blockquote-info">
							                    	Search engine optimization, also known as SEO, is crucial if you want to sell anything online, be it a product, service, or idea. Major search engines such as Google, Bing, and others scan sites every day and rank them on special scales. These scales consider things such as how frequently your site is updated, how easy it is to read and navigate if it contains helpful information or just spam, and visitor statistics. Nexcode will design your website so that search engines rank it high, and show it in search results high up. This will help you attract more business!
							                  	</p>
							                </blockquote>
						                </p>
						            </div>
				        		</Col>
				        	</Row>
				        </div>
				    </Container>

		          	<Container>
			            <Row className="row-grid justify-content-between">
			            	<Col md="7">
				                <div className="px-md-5">
				                  	<hr className="line-success" />
				                  	<h3>DEVELOP CUSTOM WEBSITE FOR YOUR NEEDS</h3>
				                  	<p>
					                    All businesses are unique and therefore have unique needs, design ideas, and approaches. But too many cookie-cutter websites are built with no attention to customer needs. Nexcode's custom web development solutions provide you with a custom site that showcases your uniqueness to customers. Our web development services has been down this road many times before and we know all the ins and outs of what a custom site needs to be successful.
				                  	</p>
				                  	<ul className="list-unstyled mt-5">
					                    <li className="py-2">
					                      	<div className="d-flex align-items-center">
						                        <div className="icon icon-success mb-2">
						                          	<i className="tim-icons icon-vector" />
						                        </div>
						                        <div className="ml-3">
						                          	<h6>Carefully crafted components</h6>
						                        </div>
					                      	</div>
					                    </li>
					                    <li className="py-2">
					                      	<div className="d-flex align-items-center">
						                        <div className="icon icon-success mb-2">
						                          	<i className="tim-icons icon-tap-02" />
						                        </div>
						                        <div className="ml-3">
						                          	<h6>Amazing page examples</h6>
						                        </div>
					                      	</div>
					                    </li>
					                    <li className="py-2">
					                      	<div className="d-flex align-items-center">
						                        <div className="icon icon-success mb-2">
						                          	<i className="tim-icons icon-single-02" />
						                        </div>
						                        <div className="ml-3">
						                          	<h6>Super friendly support team</h6>
						                        </div>
					                      	</div>
					                    </li>
				                  	</ul>
				                </div>
				            </Col>
			              	<Col md="5">
			                	<img alt="..." className="img-fluid floating" src={require("assets/img/chester-wade.jpg").default} />
		        				<Card className="card-stats bg-danger">
				                  	<CardBody>
					                    <div className="justify-content-center">
					                      	<div className="numbers">
						                        <CardTitle tag="p">100%</CardTitle>
						                        <p className="card-category text-white">Safe</p>
					                      	</div>
					                    </div>
				                  	</CardBody>
				                </Card>
				                <Card className="card-stats bg-info">
				                  	<CardBody>
					                    <div className="justify-content-center">
					                      	<div className="numbers">
						                        <CardTitle tag="p">100%</CardTitle>
						                        <p className="card-category text-white">
						                          	User friendly
						                        </p>
					                      	</div>
					                    </div>
				                  	</CardBody>
				                </Card>
				                <Card className="card-stats bg-default">
				                  	<CardBody>
					                    <div className="justify-content-center">
					                      	<div className="numbers">
						                        <CardTitle tag="p">100%</CardTitle>
						                        <p className="card-category text-white">Responsive</p>
					                      	</div>
					                    </div>
				                  	</CardBody>
				                </Card>
		        			</Col>
		        		</Row>
		        	</Container>
		        </section>

				<Footer />
			</div>
		</>
	)
}