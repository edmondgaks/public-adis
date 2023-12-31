const ContactPost = () => {
    return (
        <div class="post-section">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="container">
                <div class="row boxing">
                  <div class="col-md-12 col-lg-6 adjustwidth">
                    <div class="box">
                      <h2>Contact Now</h2>
                      <form
                        method="POST"
                        action="#"
                        id="contactForm"
                        novalidate="novalidate"
                      >
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-6">
                              <label class="control-label"
                                >Your Name
                                <span class="required">*</span></label>
                              <input
                                type="text"
                                value=""
                                placeholder="Enter Name"
                                class="form-control"
                                maxlength="100"
                              />
                            </div>
                            <div class="col-md-6">
                              <label class="control-label"
                                >Your Email Address
                                <span class="required">*</span></label
                              >
                              <input
                                type="email"
                                value=""
                                placeholder="Enter Email Address"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="control-label">Subject</label>
                          <input
                            type="text"
                            value=""
                            placeholder="Enter The Subject"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group">
                          <label class="control-label"
                            >Message <span class="required">*</span></label
                          >
                          <textarea
                            placeholder="Enter Message"
                            name="message"
                            class="form-control"
                            rows="3"
                          ></textarea>
                        </div>
                        <div class="text-right">
                          <button type="submit" class="custom-button">
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-6 adjustwidth">
                    <div class="boxparent">
                      <div class="box">
                        <h2>Get In Touch</h2>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eget leo at velit imperdiet varius. In eu
                        ipsum vitae velit congue iaculis vitae at risus. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <hr />
                      <h4 class="heading-primary">
                        PublicAdis<strong>Classified</strong>
                      </h4>
                      <ul class="list">
                        <li>
                          <i class="fa fa-fw fa-map-marker"></i>
                          <strong>Address:</strong> 123 Street Infront of
                          Macdonald, Kingsman, United States
                        </li>
                        <li>
                          <i class="fa fa-fw fa-phone"></i>
                          <strong>Phone:</strong> (123) 456-789
                        </li>
                        <li>
                          <i class="fa fa-fw fa-envelope"></i>
                          <strong>Email:</strong>
                          <a href="mailto:mail@example.com">mail@example.com</a>
                        </li>
                      </ul>
                      <hr />
                      <h4 class="heading-primary">
                        Working <strong>Hours</strong>
                      </h4>
                      <ul class="list">
                        <li>
                          <i class="fa fa-fw fa-clock-o"></i> Monday - Friday -
                          9am to 3pm
                        </li>
                        <li>
                          <i class="fa fa-fw fa-clock-o"></i> Saturday - 9am to
                          12pm
                        </li>
                        <li>
                          <i class="fa fa-fw fa-clock-o"></i> Sunday - Closed
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ContactPost