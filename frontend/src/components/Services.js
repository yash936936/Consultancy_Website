function Services(){
    return (
        <div>
      <h2>Our Services</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card service-card">
            <div className="card-body">
              <h5 className="card-title">Business Strategy</h5>
              <p className="card-text">Optimize your business with tailored strategies.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card service-card">
            <div className="card-body">
              <h5 className="card-title">IT Consulting</h5>
              <p className="card-text">Leverage technology for efficiency.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card service-card">
            <div className="card-body">
              <h5 className="card-title">Financial Planning</h5>
              <p className="card-text">Plan your finances with confidence.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;