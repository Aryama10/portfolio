import myimg from '../assets/images/myphoto.jpeg'

function Home() {
    return(
        <>
        <section className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3>HELLO, I'M</h3>
            <h1>Aryama Tripathi</h1>
            <h2>Full Stack Web Developer</h2>

            <p>
              I design and develop modern, responsive and user-friendly web
              applications using the latest web technologies.
            </p>
          </div>

          <div className="col-lg-6">
            <img src={myimg} alt="nature" style={{ width: "300px", height: "300px", borderRadius:"50%"}}
/>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;
    

    