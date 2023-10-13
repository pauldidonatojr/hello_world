// app.js
console.log("Hello, World!");
app.use("/", (req, res) => {
  console.log('request received');
  // Create a JSON response
  const jsonResponse = { message: 'Hello, this is a JSON response!' };
  
  // Send the JSON response to the client
  res.json(jsonResponse);
});
