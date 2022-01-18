import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap'

export default function Footer() {
	return (
		<footer className="footer">
	      	<Container>
	        	<Row>
	        		<Col md="3">
			            <h1 className="title">
			            	NEXCODE
			            </h1>
			        </Col>
			        <Col md="3">
			            <Nav>
			              	<NavItem>
				                <NavLink to='/' tag={ Link }>
				                  	Home
				                </NavLink>
			              	</NavItem>
			              	<NavItem>
				                <NavLink to='/about' tag={ Link }>
				                  	About
				                </NavLink>
			              	</NavItem>
			              	<NavItem>
				                <NavLink to='/team' tag={ Link }>
				                  	Team
				                </NavLink>
			              	</NavItem>
			              	<NavItem>
				                <NavLink to='/blog' tag={ Link }>
				                  	Blog
				                </NavLink>
			              	</NavItem>
			              	<NavItem>
				                <NavLink to='/portfolio' tag={ Link }>
				                  	Portfolio
				                </NavLink>
			              	</NavItem>
			              	<NavItem>
				                <NavLink to='/contact' tag={ Link }>
				                  	Contact
				                </NavLink>
			              	</NavItem>
			            </Nav>
			        </Col>
			        <Col md="3">
			            <Nav>
			              	<NavItem>
				                <NavLink to='/services/seo' tag={ Link }>
				                  	SEO
				                </NavLink>
			              	</NavItem>
			              	<NavItem>
				                <NavLink to='/services/ppc' tag={ Link }>
				                  	PPC
				                </NavLink>
			              	</NavItem>
			              	<NavItem>
				                <NavLink to='/services/web-design' tag={ Link }>
				                  	Web Design
				                </NavLink>
			              	</NavItem>
			              	<NavItem>
				                <NavLink to='/services/e-commerce' tag={ Link }>
				                  	E-Commerce
				                </NavLink>
			              	</NavItem>
			              	<NavItem>
				                <NavLink to='/services/it-support' tag={ Link }>
				                  	IT Support
				                </NavLink>
			              	</NavItem>
			              	<NavItem>
				                <NavLink to='/services/graphic-design' tag={ Link }>
				                  	Graphic Design
				                </NavLink>
			              	</NavItem>
			              	<NavItem>
				                <NavLink to='/services/web-dev' tag={ Link }>
				                  	Web Development
				                </NavLink>
			              	</NavItem>
			              	<NavItem>
				                <NavLink to='/services/mobile-dev' tag={ Link }>
				                  	Mobile Development
				                </NavLink>
			              	</NavItem>
			            </Nav>
			        </Col>
			        <Col md="3">
			            <h3 className="title">Follow us:</h3>
			            <div className="btn-wrapper profile">
			              	<div className="button-container">
			                    <Button className="btn-icon btn-simple btn-round btn-neutral" color="default" href="#pablo" onClick={(e) => e.preventDefault()} >
			                      	<i className="fab fa-twitter" />
			                    </Button>
			                    <Button className="btn-icon btn-simple btn-round btn-neutral" color="default" href="#pablo" onClick={(e) => e.preventDefault()} >
			                      	<i className="fab fa-instagram" />
			                    </Button>
			                    <Button className="btn-icon btn-simple btn-round btn-neutral" color="default" href="#pablo" onClick={(e) => e.preventDefault()} >
			                      	<i className="fab fa-whatsapp" />
			                    </Button>
			                </div>
			            </div>
			        </Col>
	        	</Row>
	        </Container>
	    </footer>
	)
}