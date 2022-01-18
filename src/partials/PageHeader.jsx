import React from 'react'
import { Row, Col, Button } from "reactstrap";

export default function PageHeader() {
	return (
		<div className='page-header'>
			<img alt="..." className="dots" src={require("assets/img/dots.png").default} />
	        <img alt="..." className="path" src={require("assets/img/path4.png").default} />
			<div className='content-center'>
				<Row className="row-grid justify-content-between align-items-center text-left">
					<Col lg='7' md='6'>
						<h1 className='text-white'>
							We're NE<span style={{ color: 'red' }}>X</span>CODE
						</h1>
						<p className='text-white mb-3'>
							NEXCODE is a family run web design and IT services company. We pride ourselves on delivering a high quality, affordable service in a friendly, professional and personable manner.
						</p>
						<a href='/about'>
							<div className="btn-wrapper mb-3">
			                  	<p className="category text-success d-inline">
			                    	Discover more
			                  	</p>
			                  	<Button className="btn-link" color="success" href="/about" size="sm" >
			                    	<i className="tim-icons icon-minimal-right" />
			                  	</Button>
			                </div>
			            </a>
		                <div className="btn-wrapper">
		                  	<div className="button-container">
			                    <Button className="btn-icon btn-simple btn-round btn-neutral" color="default" href="#pablo" >
			                      	<i className="fab fa-twitter" />
			                    </Button>
			                    <Button className="btn-icon btn-simple btn-round btn-neutral" color="default" href="#pablo" >
			                      	<i className="fab fa-instagram" />
			                    </Button>
			                    <Button className="btn-icon btn-simple btn-round btn-neutral" color="default" href="#pablo" >
			                      	<i className="fab fa-whatsapp" />
			                    </Button>
			                </div>
			            </div>
					</Col>
					<Col lg="5" md="5">
						<img alt="..." className="img-fluid" src={require("assets/img/computer.png").default} />
					</Col>
				</Row>
			</div>
		</div>
	)
}