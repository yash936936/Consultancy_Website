function About() {
    return(
    <div className="row">
      <div className="col-md-6">
        <h2>About Us</h2>
        <p>
          Consultancy Inc. has been providing top-notch consulting services since 2010.
          Our team of experts is dedicated to helping businesses achieve their goals.
        </p>
      </div>
      <div className="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          alt="Team"
          className="img-fluid rounded"
        />
      </div>
    </div>
); }
export default About;