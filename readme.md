# Datastore (Supabase)

In our code, `supabase` refers to an instance of Supabase client that allows you to interact with the database. We are using Supabase to perform CRUD (Create, Read, Update, Delete) operations on tables named "products" and "prescriptions".

# Endpoints

## GET /api/products

This endpoint retrieves all products from the "products" table. It queries the database using `supabase.from("products").select("*")`, then sends back the retrieved data as a JSON response.

## POST /api/products

This endpoint creates a new product. It expects the product details (name, description, price) to be sent in the request body. Upon receiving the data, it inserts a new record into the "products" table using `supabase.from("products").insert()`, then sends a success response if the insertion is successful.

## DELETE /api/products/:id

This endpoint deletes a product by its ID. It expects the product ID to be passed as a URL parameter `:id`. It then performs a deletion operation on the "products" table where the ID matches the provided ID.

## Error Handling

Each endpoint includes error handling to catch and handle any exceptions that may occur during database operations or processing of requests. If an error occurs, it responds with an appropriate HTTP status code (usually 500 for server errors) along with an error message. The endpoints for the other table are routed the same way with the same detail requirements.

## Explination

We decided to use node.js and express for our project. The reason we decided to use node.js is because we can use javascript not just on our web browser, but also on our computers. With node.js we used "express". Express is like a toolbox for building web apps with Node.js. It helps you organize your code and makes it easier to create web pages, handle data, and talk to databases. So keeping this in mind using node.js and express togheter let us build a web application efficiently using JavaScript for both our front and back end. 
