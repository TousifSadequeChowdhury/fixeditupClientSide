import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const ProviderDashboard = () => {
  const [cartItems, setCartItems] = useState([]); // State to hold all users' cart items
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext); // Access user

  useEffect(() => {
    if (!user) {
      setError("User not logged in.");
      return; // Exit early if user is not logged in
    }
  
    console.log("User email:", user.email); // Check the user email
  
    fetch("http://localhost:3000/api/cart")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched cart data:", data);
        const filteredItems = data.filter(item => item.userEmail === user.email);
  
        console.log("Filtered cart items:", filteredItems); // Log filtered items
        setCartItems(filteredItems);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
        setError("Failed to load cart data. Please try again later.");
      });
  }, [user]);
  

  return (
    <div className="container mx-auto p-4">
      {error && <p className="text-red-500">{error}</p>}

      <h2 className="text-xl font-bold mb-4">All Users' Cart Items</h2>
      <h1>{user ? user.email : "User not found"}</h1>

      {cartItems.length === 0 ? (
        <p>No cart items found.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item._id}
              className="border rounded p-4 mb-4 bg-gray-100"
            >
              <h3 className="font-bold">Service: {item.serviceName}</h3>
              <p>Description: {item.description}</p>
              <p>Price: {item.price}</p>
              <p>Area: {item.serviceArea}</p>
              <p>User Email: {item.userEmail}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProviderDashboard;
