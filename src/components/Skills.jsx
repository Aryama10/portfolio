import "./Skills.css";

function Skills() {
  return (
    <section className="container py-5" id="skills">

      <div className="text-center mb-5">
        <h2 className="fw-bold">My Skills</h2>
        <p className="text-muted">
          Technologies and tools I use to build web applications.
        </p>
      </div>

      <div className="row">

        {/* Frontend */}
        <div className="col-md-6 mb-4">
          <div className="skill-card">
            <h3>Frontend</h3>

            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <span>HTML</span>
                <span>95%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-primary" style={{width:"95%"}}></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <span>CSS</span>
                <span>90%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-success" style={{width:"90%"}}></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <span>JavaScript</span>
                <span>85%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-warning" style={{width:"85%"}}></div>
              </div>
            </div>

            <div>
              <div className="d-flex justify-content-between">
                <span>React</span>
                <span>80%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-info" style={{width:"80%"}}></div>
              </div>
            </div>

          </div>
        </div>

        {/* Backend */}
        <div className="col-md-6 mb-4">
          <div className="skill-card">
            <h3>Backend</h3>

            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <span>Python</span>
                <span>88%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-dark" style={{width:"88%"}}></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <span>Flask</span>
                <span>82%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-danger" style={{width:"82%"}}></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <span>MySQL</span>
                <span>80%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-secondary" style={{width:"80%"}}></div>
              </div>
            </div>

            <div>
              <div className="d-flex justify-content-between">
                <span>Git & GitHub</span>
                <span>90%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-primary" style={{width:"90%"}}></div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;