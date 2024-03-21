import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import { Button, ListGroup } from "react-bootstrap";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import "./styles.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div className="home">
      {cart.map((prod) => (
        <div
          key={prod.id}
          className="productContainer1"
          style={{
            padding: "10px",
            display: "flex",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            marginBottom: "10px", // Add margin between items
          }}
        >
          <img
            src={prod.image}
            className="card-img-top transition-all duration-500 ease-in-out"
            alt="..."
            style={{ width: "90px", height: "115px" }}
          />
          <div>
            <div>
              <p style={{ fontWeight: "700" }}>
                {prod.title}
                <span style={{ backgroundColor: "yellowgreen" }}>
                  ₹{prod.price}
                </span>
                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    })
                  }
                >
                  <MdDelete />
                </button>
              </p>
            </div>
            <div>
              <div>
                <AiOutlinePlus style={{ width: "55px" }} />
                <span style={{ backgroundColor: "beige" }}>1</span>
                <AiOutlineMinus style={{ width: "55px" }} />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="filters summary">
        <h4 className="title">Subtotal {cart.length} items</h4>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹{total}</span>
        <Link to="/Happy">
          <Button disabled={cart.length === 0}>Proceed To Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
