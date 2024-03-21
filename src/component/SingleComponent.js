import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";
import { Link } from "react-router-dom";

const SingleComponent = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(cart, "llllllll");
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={prod.image}
          className="card-img-top transition-all duration-500 ease-in-out"
          alt="..."
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div classNameName="card-body">
          <div>
            <h5 className="card-title" style={{ fontWeight: "bolder" }}>
              {prod.category}
            </h5>
            <span>
              {" "}
              <h6 style={{ color: "crimson" }}>Price :- ₹{prod.price}</h6>
            </span>
          </div>
          <p>{prod.description.slice(0, 80)}...</p>
          <div style={{ display: "flex", gap: "53px" }}>
            {cart.some((p) => p.id === prod.id) ? (
              <Button
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: "prod",
                  });
                }}
                style={{ backgroundColor: "coral" }}
              >
                Remove From Cart
              </Button>
            ) : (
              <Link to="/cart">
                <Button
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: prod,
                    });
                  }}
                  disabled={!prod.inStock}
                  style={{ backgroundColor: "gray" }}
                >
                  {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleComponent;
