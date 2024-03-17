import "dotenv/config";
import { createClient } from "@supabase/supabase-js";
import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

const PORT = process.env.PORT || 3000;

const supabaseKey = process.env.CLIENTKEY;

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.json({ extend: true }));
app.use(cors({ origin: "*" }));
app.use(express.static(__dirname + "/public"));

const supabaseUrl = "https://cgwmwvvwqmebwuvcxskg.supabase.co";
const CLIENTKEY = process.env.CLIENTKEY;
const supabase = createClient(supabaseUrl, CLIENTKEY);

app.get("/", (req, res) => {
  res.send("live");
});

app.get("/", (req, res) => {
  console.log("server fikk post");
  postData();
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
  console.log("you hit me");
  const { name, description, price } = req.body;
  console.log(name, description, price);

  try {
    const { data, error } = await supabase
      .from("products")
      .insert([
        {
          name: name,
          description: description,
          price: price,
        },
      ])
      .select();

    if (error) {
      return res.status(500).json({ msg: error.message });
    }
    res.status(201).json({ msg: "product inserted", data });
  } catch (error) {
    console.log(error);
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

// GET endpoint to retrieve data for 2. table

app.get("/api/prescription", async (req, res) => {
  try {
    const { data, error } = await supabase.from("prescription").select("*");
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST endpoint to create data for 2. table

app.post("/api/prescription", async (req, res) => {
  console.log("you hit me");
  const { name, description, price } = req.body;
  console.log(name, description, price);

  try {
    const { data, error } = await supabase
      .from("prescription")
      .insert([
        {
          name: name,
          description: description,
          price: price,
        },
      ])
      .select();

    if (error) {
      return res.status(500).json({ msg: "error when inserting" });
    }
    res.status(201).json({ msg: "product inserted", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// DELETE endpoint to delete data for 2. table

app.delete("/api/prescription/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase.from("prescription").delete().eq("id", id);
    if (error) throw error;
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
