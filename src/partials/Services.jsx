import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default function Service() {
	return (
		<section className="section section-lg">
	        <img alt="..." className="path" src={require("assets/img/path4.png").default} />
	        <Container>
	            <Row className="justify-content-center">
	              	<Col lg="12">
	              		<h1 className="text-center">Our Services</h1>
	              		<Row className="row-grid justify-content-center">
          					<Col lg="3">
          						<div className="info">
			                      	<div className="icon icon-primary">
			                        	<i className="tim-icons icon-laptop" />
			                        	<i className="tim-icons icon-mobile" />
			                      	</div>
			                      	<h4 className="info-title">Web & Mobile Development</h4>
			                      	<hr className="line-primary" />
			                      	<p>
				                        Did you know that more people on the planet own a mobile device than a toothbrush?
			                      	</p>
			                    </div>
          					</Col>
          					<Col lg="3">
          						<div className="info">
			                      	<div className="icon icon-warning">
			                        	<i className="tim-icons icon-chart-bar-32" />
			                      	</div>
			                      	<h4 className="info-title">Digital Marketing</h4>
			                      	<hr className="line-primary" />
			                      	<p>
				                        Divide details about your work into parts. Write a few
				                        lines about each one. A paragraph describing a feature
				                        will.
			                      	</p>
			                    </div>
          					</Col>
          					<Col lg="3">
          						<div className="info">
			                      	<div className="icon icon-primary">
			                        	<i className="tim-icons icon-components" />
			                      	</div>
			                      	<h4 className="info-title">Graphic Design</h4>
			                      	<hr className="line-primary" />
			                      	<p>
				                        An image can say a thousand words, don’t let them be destructive.
			                      	</p>
			                    </div>
          					</Col>
          					<Col lg="3">
          						<div className="info">
			                      	<div className="icon icon-warning">
			                        	<i className="tim-icons icon-money-coins" />
			                      	</div>
			                      	<h4 className="info-title">IT Support</h4>
			                      	<hr className="line-primary" />
			                      	<p>
				                        IT is meant to make your life easier. If it doesn’t, then it’s time to fix it.
			                      	</p>
			                    </div>
          					</Col>
          				</Row>
	              	</Col>
	            </Row>
	        </Container>
		</section>
	)
}