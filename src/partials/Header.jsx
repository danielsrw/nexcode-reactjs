import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Navbar, Nav, NavbarBrand, NavItem, NavLink, Collapse, UncontrolledTooltip, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, Form, FormGroup, Input } from 'reactstrap'

export default function Header() {

	const [collapseOpen, setCollapseOpen] = React.useState(false)
	const [collapseOut, setCollapseOut] = React.useState('')
	const [color, setColor] = React.useState('navbar-transparent')
	const [formModal, setFormModal] = React.useState(false)

	React.useEffect(() => {
		window.addEventListener('scroll', changeColor)

		return function cleanup() {
			window.removeEventListener('scroll', changeColor)
		}
	}, [])

	const changeColor = () => {
		if (document.documentElement.scrollTop > 99 || document.body.scrollTop > 99) {
			setColor('bg-info')
		} else if (document.documentElement.scrollTop < 100 || document.body.scrollTop < 100) {
			setColor('navbar-transparent')
		}
	}

	const toggleCollapse = () => {
		document.documentElement.classList.toggle('nav-open')
		setCollapseOpen(!collapseOpen)
	}

	const onCollapseExiting = () => {
		setCollapseOut('collapsing-out')
	}

	const onCollapseExited = () => {
		setCollapseOut('')
	}

	return (
		<Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      		<Container>
              	<div className="navbar-translate">
		          	<NavbarBrand to="/" tag={ Link } id="navbar-brand">
		            	<span>NEXCODE</span>
		          	</NavbarBrand>
		          	<UncontrolledTooltip placement="bottom" target="navbar-brand">
		            	Press the dream, We do the rest
		          	</UncontrolledTooltip>
		          	<button aria-expanded={collapseOpen} className="navbar-toggler navbar-toggler" onClick={toggleCollapse} >
			            <span className="navbar-toggler-bar bar1" />
			            <span className="navbar-toggler-bar bar2" />
			            <span className="navbar-toggler-bar bar3" />
		          	</button>
		        </div>
              	<Collapse className={"justify-content-end " + collapseOut} navbar isOpen={collapseOpen} onExiting={onCollapseExiting} onExited={onCollapseExited} >
	                <div className="navbar-collapse-header">
			            <Row>
			              	<Col className="collapse-brand" xs="6">
				                <a href="/">
				                  	NEXCODE
				                </a>
			              	</Col>
			              	<Col className="collapse-close text-right" xs="6">
				                <button aria-expanded={collapseOpen} className="navbar-toggler" onClick={toggleCollapse} >
				                  	<i className="tim-icons icon-simple-remove" />
				                </button>
			              	</Col>
			            </Row>
			        </div>
	                <Nav className="ml-auto" navbar>
	                  	<NavItem>
		                    <NavLink href="/">
		                      	<span>Home</span>
		                    </NavLink>
	                  	</NavItem>
	                  	<NavItem>
		                    <NavLink href='/about'>
		                      	About
		                    </NavLink>
	                  	</NavItem>
	                  	<NavItem>
		                    <NavLink href="/team">
		                      	Team
		                    </NavLink>
	                  	</NavItem>
	                  	<NavItem>
		                  	<UncontrolledDropdown nav>
				              	<DropdownToggle caret color="default" data-toggle="dropdown" href="#pablo" nav >
					                <i className="fa fa-cogs d-lg-none d-xl-none" />
					                Services
				              	</DropdownToggle>
				              	<DropdownMenu className="dropdown-with-icons">
					                <DropdownItem href="/services/seo">
					                  	SEO
					                </DropdownItem>
					                <DropdownItem href="/services/ppc">
					                  	PPC
					                </DropdownItem>
					                <DropdownItem href="/services/web-design">
					                  	Web Design
					                </DropdownItem>
					                <DropdownItem href="/services/e-commerce">
					                  	E-Commerce
					                </DropdownItem>
					                <DropdownItem href="/services/it-support">
					                  	IT Support
					                </DropdownItem>
					                <DropdownItem href="/services/graphic-design">
					                  	Graphic Design
					                </DropdownItem>
					                <DropdownItem href="/services/web-dev">
					                  	Web Development
					                </DropdownItem>
					                <DropdownItem href="/services/mobile-dev">
					                  	Mobile Development
					                </DropdownItem>
				              	</DropdownMenu>
				            </UncontrolledDropdown>
			            </NavItem>
	                  	<NavItem>
		                    <NavLink href="/portfolio">
		                      	Portfolio
		                    </NavLink>
	                  	</NavItem>
	                  	<NavItem>
		                    <Button color="success" onClick={() => setFormModal(true)}>
				              	Contact
				            </Button>
	                  	</NavItem>

          				<Modal modalClassName="modal-black" isOpen={formModal} toggle={() => setFormModal(false)} >
				            <div className="modal-header justify-content-center">
				              	<button className="close" onClick={() => setFormModal(false)}>
				                	<i className="tim-icons icon-simple-remove text-white" />
				              	</button>
				              	<div className="text-muted text-center ml-auto mr-auto">
				                	<h3 className="mb-0">Contact Us</h3>
				              	</div>
				            </div>
				            <div className="modal-body">
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
				            </div>
			          	</Modal>
	                </Nav>
              	</Collapse>
            </Container>
		</Navbar>
	)
}