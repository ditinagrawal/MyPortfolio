import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import "./Contact.css";

const Contact = () => {

  const [input,setInput] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    setInput(prev => ({
        ...prev,
        [name]:value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setInput({
      name:"",
      email:"",
      subject:"",
      message:""
    })
  }

  return (
    <main className="main">
      <PageHeader title="Contact" desc="Hello Everyone! Have a great day. I am here to help you. If you want to know something or you have any suggestion then please mail me. Thank You for visiting Here.." />

      <section id="contact" className="contact">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-3">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>85 Gokul Dham Colony, Township, Mathura, India 281006</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>ditin.agrawal05@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p>+91 8958446414</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-lg-9">
              <form
                className="email-form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      value={input.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      value={input.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    value={input.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    value={input.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="text-center mt-3 mb-4">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
