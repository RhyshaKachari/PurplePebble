const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

require("./db/conn");
const User = require("./models/userRegistration");

const path = require("path");
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

const template_path = path.join(__dirname, "../templates/views");
app.set("view engine", "hbs");
app.set("views", template_path);

const hbs = require("hbs");
const partial_path = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partial_path);

app.get("/", (req, res) => {
  res.render("index_before");
});

app.get("/index_before", (req, res) => {
  res.render("index_before");
});

app.get("/aboutus", (req, res) => {
  res.render("aboutus");
});

app.get("/shop_before", (req, res) => {
  res.render("shop_before");
});

app.get("/blog_before", (req, res) => {
  res.render("blog_before");
});

app.get("/contact_before", (req, res) => {
  res.render("contact_before");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/signin", (req, res) => {
  res.render("signin");
});

app.get("/returnpolicy", (req, res) => {
  res.render("returnpolicy");
});

app.get("/index_after", (req, res) => {
  res.render("index_after");
});

app.get("/shop_after", (req, res) => {
  res.render("shop_after");
});

app.get("/blog_after", (req, res) => {
  res.render("blog_after");
});

app.get("/contact_after", (req, res) => {
  res.render("contact_after");
});

app.get("/cart_after", (req, res) => {
  res.render("cart_after");
});

const { json } = require("express");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post("/signup", async (req, res) => {
  try {
    const userData = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      pincode: req.body.pincode,
    });
    const registered = await userData.save();
    res.status(201).render("index_after");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/signin", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const userEmail = await User.findOne({ email: email });
    if (userEmail.name === name && userEmail.password === password) {
      res.status(201).render("index_after");
    } else {
      res.send("Invalid login details");
    }
  } catch (error) {
    res.status(400).send("Invalid login details");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
