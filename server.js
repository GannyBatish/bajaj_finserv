const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.post("/bfhl", function (req, res) {
  const { data } = req.body;
  var odd_numbers = [];
  var even_numbers = [];
  var aplhabets = [];
  data.forEach((element) => {
    if (isNaN(element) === false) {
      if (JSON.parse(element) % 2 === 0) {
        even_numbers.push(element);
      } else {
        odd_numbers.push(element);
      }
    } else {
      aplhabets.push(element.toUpperCase());
    }
  });
  res.status(201).json({
    is_success: true,
    user_id: "ganny_batish_12102001",
    email: "ganny0223.be20@chitkara.edu.in",
    roll_number: "2010990223",
    odd_numbers: odd_numbers,
    even_numbers: even_numbers,
    alphabets: aplhabets
  });
});
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(process.env.port || 3000, () => {
  console.log("Listening at PORT");
});
