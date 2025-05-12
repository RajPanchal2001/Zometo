import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [data, setData] = useState([]);
  const[word,setWord]=useState("");
  const navigate = useNavigate();

  const fetchCat = () => {
    fetch('https://dummyjson.com/recipes/')
      .then((res) => res.json())
      .then((b) => setData(b.recipes));
  };

  useEffect(() => fetchCat(), []);

  function handlesubmit(args){
    args.preventDefault();
    navigate(`/searchproduct/${word}`)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning"> {/* Orange background */}
        <Container>
          <a className="navbar-brand text-dark" href="#">InfoLabz Cookinggggg</a> {/* Changed to text-dark */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-dark" aria-current="page" to="/">Home</Link> {/* Changed to text-dark */}
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/Recipies">Recipies</Link> {/* Changed to text-dark */}
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {data.map((element) => (
                    <li key={element.id}>
                      <button className="dropdown-item" onClick={() => navigate(`/Recipiecs/${element.mealType}`)}>
                        {element.mealType}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handlesubmit}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(a)=>setWord(a.target.value)} />
              <button className="btn btn-outline-dark" type="submit">Search</button> {/* Changed to btn-outline-dark */}
            </form>
          </div>
        </Container>
      </nav>
    </>
  );
}