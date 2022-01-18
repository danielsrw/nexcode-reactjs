import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../partials/Header'
import Contact from '../partials/Contact'
import Footer from '../partials/Footer'
import PerfectScrollbar from "perfect-scrollbar"
import { Container, Row, Col } from 'reactstrap'

let ps = null;

export default function Seo() {
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
				                <h1 className="profile-title text-left">Search Engine Optimization</h1>
			                	<h5 className="text-on-back">SEO</h5>
			              	</Col>
			            </Row>
		          	</Container>
		        </div>

		        <section className='section'>
		        	<img alt="..." className="path" src={require("assets/img/path4.png").default} />
		        	<Container>
		        		<Row>
		        			<Col md='5'>
			                	<img alt="..." className="img-fluid floating" src={require("assets/img/pages/search.jpg").default} />
		        			</Col>
		        			<Col md='7'>
		        				<h1 className="profile-title text-left">What is <span className='text-danger'>SEO?</span></h1>
				                <h5 className="text-on-back">01</h5>
				                <p>
				                 	SEO stands for search engine optimisation and is the process of improving your website slowly over time to achieve increased traffic from search engines. By adjusting the code and content on your website’s pages to target specific keywords, you can improve where your website is ranked in search engines such as Google, Yahoo and Bing when someone performs a search using those keywords.
				                </p>
		        			</Col>
		        		</Row>
		        	</Container>
		        </section>

		        <section className='section'>
		        	<img alt="..." className="path" src={require("assets/img/path4.png").default} />
		        	<Container>
		        		<Row>
		        			<Col md='7'>
		        				<h1 className="profile-title text-left">Why is high quality <span className='text-info'>SEO</span> important?</h1>
				                <h5 className="text-on-back">02</h5>
				                <p>
				                 	SEO stands for search engine optimisation and is the process of improving your website slowly over time to achieve increased traffic from search engines. By adjusting the code and content on your website’s pages to target specific keywords, you can improve where your website is ranked in search engines such as Google, Yahoo and Bing when someone performs a search using those keywords.
				                </p>
		        			</Col>
		        			<Col md='5'>
			                	<img alt="..." className="img-fluid floating" src={require("assets/img/pages/why-seo.jpg").default} />
		        			</Col>
		        		</Row>
		        	</Container>
		        </section>

		        <section className='section'>
		        	<img alt="..." className="path" src={require("assets/img/path4.png").default} />
		        	<Container>
		        		<Row>
		        			<Col md='5'>
			                	<img alt="..." className="img-fluid floating" src={require("assets/img/pages/seo.jpg").default} />
		        			</Col>
		        			<Col md='7'>
		        				<h1 className="profile-title text-left">What is considered best <span className='text-danger'>SEO?</span> Practice</h1>
				                <h5 className="text-on-back">03</h5>
				                <p>
				                 	As with anything that requires optimisation, a scientific process is essential. SEO is no different, and you will struggle to improve your performance in search engines if you don’t take the time to analyze what has and hasn’t worked previously for your website, as well as what is working for your competition.
				                 	<br />
				                 	<br />
				                 	What is considered best practice is a constantly evolving theory. SEO that was considered good practice a few years ago, such as a strong keyword density and lots of meta keywords, can actually hurt your website if employed today.
				                 	<br />
				                 	<br />
				                 	Search engines keep the algorithms they use to decide where you rank on their systems closely guarded. Of course this does not stop people testing the platforms to find out what effects their ranking and to what degree. As of this moment there are over 200 factors that people have identified as having an impact on their rankings.
				                </p>
		        			</Col>
		        		</Row>
		        	</Container>
		        </section>

		        <section className='section'>
		        	<img alt="..." className="path" src={require("assets/img/patrat.png").default} />
		        	<Container>
		        		<Row>
		        			<Col md='7'>
		        				<h1 className="profile-title text-left">Does my business need <span className='text-info'>SEO</span> important?</h1>
				                <h5 className="text-on-back">04</h5>
				                <p>
				                 	Every business can benefit from SEO in varying degrees. Just making sure you have no broken links on your website and that your website is mobile friendly can boost your website in search engines. Have you noticed that when searching for something in Google on your mobile phone it says “mobile-friendly” next to those websites which Google considers to be responsive for viewers to read on their phones? Don’t know if your website is <Link to='/services/mobile-dev'>mobile friendly?</Link> Click here to use Google’s mobile friendly test to find out
				                </p>
		        			</Col>
		        			<Col md='5'>
			                	<img alt="..." className="img-fluid floating" src={require("assets/img/pages/google-s.jpg").default} />
		        			</Col>
		        		</Row>
		        	</Container>
		        </section>

		        <section className='section'>
		        	<img alt="..." className="path" src={require("assets/img/path4.png").default} />
		        	<Container>
		        		<Row>
		        			<Col md='5'>
			                	<img alt="..." className="img-fluid floating" src={require("assets/img/pages/why.jpg").default} />
		        			</Col>
		        			<Col md='7'>
		        				<h1 className="profile-title text-left">Why us to manage your <span className='text-danger'>SEO?</span></h1>
				                <h5 className="text-on-back">05</h5>
				                <p>
				                	We love what we do and follow the developments in search engine optimisation closely so you don’t have to. Using our knowledge, expertise and specialised software we analyze your website’s performance to deliver steady growth over time. Not only that, but we offer full support along the way and are always available to answer your questions. Our affordable prices mean that even the smallest of businesses can use our services to get their website noticed
				                </p>
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