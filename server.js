import "dotenv/config";
import { createClient } from "@supabase/supabase-js";
import express from "express";
const PORT = process.env.PORT || 3000;

const supabaseKey = process.env.CLIENTKEY;

const app = express();
app.use(express.static("public"));
app.use(express.json());
const supabaseUrl = "https://cgwmwvvwqmebwuvcxskg.supabase.co";
const CLIENTKEY = process.env.CLIENTKEY;
const supabase = createClient(supabaseUrl, CLIENTKEY);

app.get("/", (req, res) => {
  res.send("live");
});

// GET endpoint to retrieve data
app.get("/api/products", async (req, res) => {
  try {
    const { data, error } = await supabase.from("products").select("*");
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST endpoint to create data
app.post("/api/products", async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const { data, error } = await supabase.from("products").insert({
      name: "name",
      description: "description",
      price: 10,
    });
    console.log(error);

    res.status(201).json({ messagemessage: "hei" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE endpoint to delete data
app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) throw error;
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
