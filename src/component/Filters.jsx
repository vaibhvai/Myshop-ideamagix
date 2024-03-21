import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const Filters = () => {
  //   return (
  //     <Container>
  //       <Row>
  //         <Col
  //           md={3}
  //           style={{
  //             backgroundColor: "gray",
  //             color: "white",
  //             padding: "20px",
  //             display: "flex",
  //             flexDirection: "column",
  //             justifyContent: "flex-start", // Align items from the start (left side)
  //             width: "110%",

  //             top: "0",
  //             left: "0",
  //             margin: "10px",
  //             height: "96vh",
  //           }}
  //         >
  //           <h5>Filter Products</h5>
  //           <Form>
  //             <Form.Group controlId="formCategory">
  //               <Form.Label>Category</Form.Label>
  //               <div>
  //                 <Form.Check
  //                   type="radio"
  //                   label="Men's Clothing"
  //                   name="category"
  //                   id="men"
  //                 />
  //                 <Form.Check
  //                   type="radio"
  //                   label="Women's Clothing"
  //                   name="category"
  //                   id="women"
  //                 />
  //                 <Form.Check
  //                   type="radio"
  //                   label="Electronics"
  //                   name="category"
  //                   id="electronics"
  //                 />
  //                 <Form.Check
  //                   type="radio"
  //                   label="Jewelry"
  //                   name="category"
  //                   id="jewelry"
  //                 />
  //               </div>
  //             </Form.Group>
  //             <Button variant="light">Clear Filters</Button>
  //           </Form>
  //         </Col>
  //       </Row>
  //     </Container>
  //   );
  // };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-mb-3">
          <Skeleton height={350} />
        </div>
        <div className="col-mb-3">
          <Skeleton height={350} />
        </div>
        <div className="col-mb-3">
          <Skeleton height={350} />
        </div>
        <div className="col-mb-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            men
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            women
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jwellery")}
          >
            jwellery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((Product) => {
          return (
            <>
              <div className="col md-3 mb-4">
                <div class="card h-100 text-center p-4" key={Product.id}>
                  <img
                    src={Product.image}
                    class="card-img-top"
                    alt={Product.title}
                    height="250px"
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0 fw-bold">
                      {Product.title.substring(0, 12)}
                    </h5>
                    <p class="card-text"> Rs.{Product.price}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-3 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row  justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Filters;
