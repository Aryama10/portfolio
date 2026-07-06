import myimg from '../assets/images/myphoto.jpeg'

function Home() {
  return (
    <section className="container py-5" id="home">
      <div className="row align-items-center">

        <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
          <h3>HELLO, I'M</h3>

          <h1>Aryama Tripathi</h1>

          <h2>Full Stack Web Developer</h2>

          <p>
            I design and develop modern, responsive and user-friendly web
            applications using the latest web technologies.
          </p>
        </div>

        <div className="col-12 col-lg-6 text-center">
          <img
            src={myimg}
            alt="Aryama Tripathi"
            className="profile-img"
          />
        </div>

      </div>
    </section>
  )
}

export default Home;
