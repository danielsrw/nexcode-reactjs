import React from 'react'
import Header from '../partials/Header'
import Contact from '../partials/Contact'
import Footer from '../partials/Footer'
import PerfectScrollbar from "perfect-scrollbar"
import { Container, Row, Col } from 'reactstrap'

let ps = null;

export default function WebDesign() {
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
				                <h1 className="profile-title text-left">Design</h1>
			                	<h5 className="text-on-back">Web</h5>
			              	</Col>
			            </Row>
		          	</Container>
		        </div>

		        <section className='section'>
		        	<img alt="..." className="path" src={require("assets/img/path1.png").default} />
		        	<Container>
		        		<Row>
		        			<Col md='5'>
			                	<img alt="..." className="img-fluid floating" src={require("assets/img/pages/bg_1.jpg").default} />
		        			</Col>
		        			<Col md='7'>
		        				<h1 className="profile-title text-left">Get an amazing <span className='text-danger'>website</span> with a responsive <span className='text-warning'>design</span></h1>
				                <h5 className="text-on-back">01</h5>
				                <p>
				                	People spend approximately 470 hours on digital media daily. This behavior is the best reason why business owners should invest in responsive website designs. Because people are always on the move, they do not rely on their PCs alone to access the media but also use their smartphones, iPads, and tablets for the same.
				                	<br />
				                	<br />
				                	Web responsiveness is determined by how well a user can access it using different devices without experiencing challenges. If they can’t transition through pages or have broken displays, there is a problem. Speed is also essential as most people will leave a website that loads slowly within 0-15 seconds.
				                	<br />
				                	<br />
				                	Do not lose that sales revenue because you are too rigid to change how you do things. Get professional responsive web design services and enjoy having increased traffic to your site. We do not only design an appealing website for you but also make sure it is SEO-friendly.
				                	<br />
				                	<br />
				                	Impress your potential customers with a professional web design. You boost their confidence in trusting what you are selling them and make their purchasing decisions fast. Our designs are user-friendly, and your customers will not need technical knowledge to navigate them.
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
		        				<h1 className="profile-title text-left">Why <span className='text-info'>us</span>?</h1>
				                <h5 className="text-on-back">02</h5>
				                <p>
				                	It is fair for you to ask questions before buying a service. Here are some of the reasons you should choose us:
				                	<br />
				                	<br />
				                	<ul>
				                		<li>
				                			<b>Experienced staff: </b> Our responsive website development company consists of professionals with tons of experience. We have worked with over 100 clients, which gives us great exposure to what works best for startups and large businesses.
				                		</li>
				                		<li>
				                			<b>Custom websites: </b> We do not use a template to design a website for you. Instead, we look at your business needs and create a custom website that will make your business stand out.
				                		</li>
				                		<li>
				                			<b>We are friendly: </b> We value all our clients regardless of their business status. Once you decide to use our services, we will treat you with utmost courtesy, dignity, and respect.
				                		</li>
				                	</ul>
				                </p>
		        			</Col>
		        			<Col md='5'>
			                	<img alt="..." className="img-fluid floating" src={require("assets/img/pages/why.jpg").default} />
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