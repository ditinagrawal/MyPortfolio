import PageHeader from '../../components/PageHeader'
import "./About.css";

const About = () => {
  return (
    <main id="main">
      <PageHeader title="About" desc="I like to take a sip of everything building relationships,
        exploring new opportunities, competitive coding, learning new technologies and all other exciting crazy things around and off my fields." />

      <section id="about" className="about">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="/about.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-5 content">
              <h2>Professional Developer from Mathura</h2>
              <p className="fst-italic py-3">
              I try to find contentment and peace at any position rather than 
              complaining about minor issues.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>16 Jan 2005</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Profession:</strong> <span>Mern Developer</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>+91 8958446414</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong> <span>Mathura, India</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> <span>18</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong> <span>Bachelors</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <span>ditin.agrawal05@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                My name is Ditin Agrawal . I am an enthusiastic Computer Science
                Engineering student trying hard to be like water in the field of
                technology and automation. I like to take a sip of everything
                building relationships, exploring new opportunities, competitive
                coding, learning new technologies and all other exciting crazy
                things around and off my fields
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
