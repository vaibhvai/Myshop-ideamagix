import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API request to authenticate user
      const response = await fetch(
        "https://recruitment-api.pyt1.stg.jmr.pl/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Login successful!");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <Container
      className="mt-5"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div>
        <h2>Welcome! Please login to continue.🙏</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Link to="/">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Link>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
// const Product = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [filter, setFilter] = useState(data);
//   let componentMounted = true;

//   useEffect(() => {
//     const getProducts = async () => {
//       setLoading(true);
//       const response = await fetch("https://fakestoreapi.com/products");
//       if (componentMounted) {
//         setData(await response.clone().json());
//         setFilter(await response.json());
//         setLoading(false);
//         console.log(filter);
//       }
//       return () => {
//         componentMounted = false;
//       };
//     };

//     getProducts();
//   }, []);
//   const Loading = () => {
//     return (
//       <>
//         <div className="col-mb-3">
//           <Skeleton height={350} />
//         </div>
//         <div className="col-mb-3">
//           <Skeleton height={350} />
//         </div>
//         <div className="col-mb-3">
//           <Skeleton height={350} />
//         </div>
//         <div className="col-mb-3">
//           <Skeleton height={350} />
//         </div>
//       </>
//     );
//   };

//   const filterProduct = (cat) => {
//     const updatedList = data.filter((x) => x.category === cat);
//     setFilter(updatedList);
//   };
//   const ShowProducts = () => {
//     return (
//       <>
//         <div className="buttons d-flex justify-content-center pb-5">
//           <button
//             className="btn btn-outline-dark me-2"
//             onClick={() => setFilter(data)}
//           >
//             All
//           </button>
//           <button
//             className="btn btn-outline-dark me-2"
//             onClick={() => filterProduct("men's clothing")}
//           >
//             men
//           </button>
//           <button
//             className="btn btn-outline-dark me-2"
//             onClick={() => filterProduct("women's clothing")}
//           >
//             women
//           </button>
//           <button
//             className="btn btn-outline-dark me-2"
//             onClick={() => filterProduct("jwellery")}
//           >
//             jwellery
//           </button>
//           <button
//             className="btn btn-outline-dark me-2"
//             onClick={() => filterProduct("electronics")}
//           >
//             Electronic
//           </button>
//         </div>
//         {filter.map((Product) => {
//           return (
//             <>
//               <div className="col md-3 mb-4">
//                 <div class="card h-100 text-center p-4" key={Product.id}>
//                   <img
//                     src={Product.image}
//                     class="card-img-top"
//                     alt={Product.title}
//                     height="250px"
//                   />
//                   <div class="card-body">
//                     <h5 class="card-title mb-0 fw-bold">
//                       {Product.title.substring(0, 12)}
//                     </h5>
//                     <p class="card-text"> Rs.{Product.price}</p>
//                     <a href="#" class="btn btn-outline-dark">
//                       Buy Now
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </>
//     );
//   };

//   return (
//     <div>
//       <div className="container my-3 py-5">
//         <div className="row">
//           <div className="col-12 mb-5">
//             <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
//             <hr />
//           </div>
//         </div>
//         <div className="row  justify-content-center">
//           {loading ? <Loading /> : <ShowProducts />}
//         </div>
//       </div>
//     </div>
//   );
// };
