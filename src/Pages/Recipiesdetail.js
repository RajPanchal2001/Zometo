import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Recipiesdetail = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const fetchdata = () => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    };

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                {/* Product Images */}
                <div className="col-md-6 text-center">
                    <img
                        src={data.image}
                        className="shadow-lg rounded w-100 mb-3"
                        height={400}
                        alt={data?.name}
                        style={{ transition: "transform 0.3s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                </div>

                {/* Product Details */}
                <div className="col-md-6">
                    <h2 className="fw-bold text-warning">{data.name}</h2>
                    <h5 className="fw-bold text-warning">Ingredients</h5>
                    <ul className="text-muted">
                        {data.ingredients && data.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h5 className="fw-bold text-warning">Instructions</h5>
                    <p className="text-muted">{data.instructions}</p>

                    {/* Brand & Category Badges */}
                    <p>
                        <span className="badge bg-warning me-2">{data.mealType}</span>
                        <span className="badge bg-secondary">{data.rating}</span>
                    </p>
                </div>
            </div>
            <br />
            <button type="button" className="btn btn-warning w-100 mb-2" onClick={() => navigate(-1)}>Back</button>
            <button type="button" className="btn btn-warning w-100">Add to cart</button>
        </div>
    );
};

export default Recipiesdetail;