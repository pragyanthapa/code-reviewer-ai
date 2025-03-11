import app from "./src/app.js";


app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

