require('dotenv').config();

import express from "express";
import dotenv from "dotenv";
import { createClient } from '@supabase/supabase-js';

dotenv.config();
const app = express();

const supabaseUrl = "https://cgwmwvvwqmebwuvcxskg.supabase.co";
const CLIENTKEY = process.env.CLIENTKEY;
const supabase = createClient(supabaseUrl, CLIENTKEY);

app.use(express.json());

// GET endpoint to retrieve data
app.get('/api/products', async (req, res) => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*');
      if (error) throw error;
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // POST endpoint to create data
  app.post('/api/products', async (req, res) => {
    try {
      const { body } = req;
      const { data, error } = await supabase
        .from('products')
        .insert(body);
      if (error) throw error;
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // DELETE endpoint to delete data
  app.delete('/api/products/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);
      if (error) throw error;
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  