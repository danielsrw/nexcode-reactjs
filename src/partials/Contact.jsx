import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Input, Button, UncontrolledTooltip } from 'reactstrap'

export default function Contact() {
	return (
		<>
			<section className="section">
	          	<Container className="align-items-center">
		            <Row>
		              	<Col md="6">
			                <Card className="card-plain">
			                  	<CardHeader>
				                    <h1 className="profile-title text-left">Get in touch with us now!!!</h1>
				                    <h5 className="text-on-back">Call Us</h5>
			                	</CardHeader>
			                  	<CardBody>
				                    <Form>
				                      	<Row>
					                        <Col md="12">
					                          	<FormGroup>
						                            <label>Your Name</label>
						                            <Input placeholder="Enter your name" type="text" />
					                          	</FormGroup>
					                        </Col>
				                      	</Row>
				                      	<Row>
					                        <Col md="6">
					                          	<FormGroup>
						                            <label>Email address</label>
						                            <Input placeholder="Enter your email" type="email" />
					                          	</FormGroup>
					                        </Col>
					                        <Col md="6">
					                          	<FormGroup>
						                            <label>Phone</label>
						                            <Input placeholder="Enter your phone number" type="text" />
					                          	</FormGroup>
					                        </Col>
				                      	</Row>
				                      	<Row>
					                        <Col md="12">
					                          	<FormGroup>
						                            <label>Message</label>
						                            <Input placeholder="Hello there!" type="text" />
					                          	</FormGroup>
					                        </Col>
				                      	</Row>
				                      	<Button className="btn-round float-right" color="primary" data-placement="right" id="tooltip341148792" type="button" >
				                        	Send text
				                      	</Button>
				                      	<UncontrolledTooltip delay={0} placement="right" target="tooltip341148792" >
				                        	Can't wait for your message
				                      	</UncontrolledTooltip>
				                    </Form>
			                  	</CardBody>
			                </Card>
			            </Col>
			            <Col className="ml-auto" md="4">
			                <div className="info info-horizontal">
			                  	<div className="icon icon-primary">
			                    	<i className="tim-icons icon-square-pin" />
			                  	</div>
			                  	<div className="description">
				                    <h4 className="info-title">Find us at the office</h4>
				                    <p>
				                      	Kigali, Rwanda, Muhima KN 11 street Maison Vuasine Building
				                    </p>
			                  	</div>
			                </div>
			                <div className="info info-horizontal">
			                  	<div className="icon icon-primary">
			                    	<i className="tim-icons icon-mobile" />
			                  	</div>
			                  	<div className="description">
				                    <h4 className="info-title">Give us a ring</h4>
				                    <p>
				                      	NEXCODE <br />
				                      	+250 781 862 349 <br />
				                      	Always Open For You
				                    </p>
			                  	</div>
			                </div>
			            </Col>
		            </Row>
	          	</Container>
	        </section>
		</>
	)
}