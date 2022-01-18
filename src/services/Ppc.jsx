import React from 'react'
import Header from '../partials/Header'
import Contact from '../partials/Contact'
import Footer from '../partials/Footer'
import PerfectScrollbar from "perfect-scrollbar"
import { Container, Row, Col } from 'reactstrap'

let ps = null;

export default function Ppc() {
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
				                <h1 className="profile-title text-left">Pay Per Click</h1>
			                	<h5 className="text-on-back">PPC</h5>
			              	</Col>
			            </Row>
		          	</Container>
		        </div>

		        <section className='section'>
		        	<img alt="..." className="path" src={require("assets/img/path1.png").default} />
		        	<Container>
		        		<Row>
		        			<Col md='5'>
			                	<img alt="..." className="img-fluid floating" src={require("assets/img/pages/google-s.jpg").default} />
		        			</Col>
		        			<Col md='7'>
		        				<h1 className="profile-title text-left">What is <span className='text-danger'>PPC?</span></h1>
				                <h5 className="text-on-back">01</h5>
				                <p>
				                	Pay Per Click advertising, otherwise known as PPC, is the process of buying traffic from search engines for the keywords that you want to appear on. If you search on Google typically the first entries you see in the results are paid for adverts. Your website showing up in this space is extremely valuable for branding and can provide your website with a lot of traffic that otherwise would have been lost to the competition.
				                </p>
		        			</Col>
		        		</Row>
		        	</Container>
		        </section>

		        <section className='section'>
		        	<img alt="..." className="path" src={require("assets/img/path2.png").default} />
		        	<Container>
		        		<Row>
		        			<Col md='7'>
		        				<h1 className="profile-title text-left">Why is <span className='text-info'>PPC</span> important?</h1>
				                <h5 className="text-on-back">02</h5>
				                <p>
				                	People conduct internet searches in thousands of different ways using a multitude of different keywords. Because of this it is impossible to target all of your relevant keywords through SEO. Pay Per Click advertising allows you to fill in the gaps so to speak and allows your website to achieve full keyword coverage.
				                	<br />
				                	<br />
				                	Making your company or product discoverable in search engines is essential in modern business. For those businesses where Search Engine Optimisation (SEO) has proved difficult, PPC is the answer.
				                	<br />
				                	<br />
				                	PPC enables you to place your own advert at the top spot on Google for any keywords that describe your product, e.g. travel agent, summer holiday, sun tan lotion etc. Costs are limited as you will only pay Google for the traffic your website actually receives and all budgets can be set and controlled with the click of a button.
				                </p>
		        			</Col>
		        			<Col md='5'>
			                	<img alt="..." className="img-fluid floating" src={require("assets/img/pages/g-ads.jpg").default} />
		        			</Col>
		        		</Row>
		        	</Container>
		        </section>

		        <section className='section'>
		        	<img alt="..." className="path" src={require("assets/img/path3.png").default} />
		        	<Container>
		        		<Row>
		        			<Col md='5'>
			                	<img alt="..." className="img-fluid floating" src={require("assets/img/pages/ppc.jpg").default} />
		        			</Col>
		        			<Col md='7'>
		        				<h1 className="profile-title text-left">Key factors in <span className='text-danger'>PPC</span> success?</h1>
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
		        				<h1 className="profile-title text-left">Optimising for <span className='text-info'>ROI</span> important?</h1>
				                <h5 className="text-on-back">04</h5>
				                <p>
				                	Ultimately you are looking for a return on your marketing efforts and when you are optimising a PPC account you want to aim for a good return on your investment. Through conversion tracking we are able to see which keywords drive traffic and which of those keywords drive traffic that converts. Armed with this information we ensure that your budget is spent on only keywords that drive actual sales, thus improving your cost per sale and ROI simultaneously. Lots of keywords.
				                	<br />
				                	<br />
				                	It may sound simple, but the more keywords you appear on the better. Through comprehensive keyword research you can find the thousands of different ways people are finding your products or services. But don’t worry, we do all the hard work for you!
				                </p>
		        			</Col>
		        			<Col md='5'>
			                	<img alt="..." className="img-fluid floating" src={require("assets/img/pages/team.jpg").default} />
		        			</Col>
		        		</Row>
		        	</Container>
		        </section>

		        <section className='section'>
		        	<Container>
		        		<Row>
		        			<Col md='5'>
			                	<img alt="..." className="img-fluid floating" src={require("assets/img/pages/why.jpg").default} />
		        			</Col>
		        			<Col md='7'>
		        				<h1 className="profile-title text-left">Why us to manage your <span className='text-danger'>SEO?</span></h1>
				                <h5 className="text-on-back">05</h5>
				                <p>
				                	Not only do we love PPC, but our team are all recognised as AdWords certified professionals, meaning that we’ve passed multiple exams that assess their product expertise. We’re qualified to help you grow your business on the web using Google AdWords.
				                	<br />
				                	<br />
				                	We use all our knowledge and expertise to build you a completely bespoke PPC account, conducting all the necessary research on your behalf. We use our subsequent findings to ensure that your account is always fully populated to a high standard before launch. After launch we analyze and optimise the account in a very scientific manner to improve both traffic and return on investment. Our friendly team are always available to answer your questions no matter how big or small and our affordable management fees ensure that even the smallest businesses can use this service.
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