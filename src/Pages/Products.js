import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hoveredCard, setHoveredCard] = useState(null);
    const navigate = useNavigate();
    const {search}=useParams();
    const{cat}=useParams();

    useEffect(() => {
    
let url='https://dummyjson.com/recipes/'
 if(search){
    url=`https://dummyjson.com/recipes/search?q=${search}`
         }
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.recipes || []);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });
    }, [search]);

    return (
        <div className="container">
            <h3 className="text-center mt-5 text-warning">Frech Picks</h3>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <div className="spinner-border text-warning"></div>
                </div>
            ) : (
                <div className="row">
                    {products.length > 0 ? (
                        products.map((item) => (
                            <div key={item.id} className="col-md-4">
                                <div
                                    className="card mt-4"
                                    style={{
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                        transform: hoveredCard === item.id ? "scale(1.05)" : "scale(1)",
                                        boxShadow: hoveredCard === item.id ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
                                        borderRadius: "10px",
                                    }}
                                    onMouseEnter={() => setHoveredCard(item.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <img src={item.image} className="card-img-top" alt={item.name} style={{ height: '150px', objectFit: 'cover' }} /> {/* Reduced height */}
                                    <div className="card-body">
                                        <h5 className="card-title text-warning">{item.name}</h5>
                                        <button className="btn btn-warning w-100" onClick={() => navigate(`/Recipiesdetail/${item.id}`)}>
                                            View Recipes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products available.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Product;