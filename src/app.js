const express = require("express");
const app = express();
const PORT = 4000;

app.use("/test", (req, res) => res.send("Hello from test"));
app.use("/", (req, res) => res.send("Hello"));
app.listen(PORT, () => console.log(`Dev Tinder listning to ${PORT}`));
