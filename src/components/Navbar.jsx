function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#212529",
        padding: "20px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2 style={{ color: "white" }}>MyPortfolio</h2>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "30px"
        }}
      >
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>About</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Projects</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Certificates</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Skills</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar