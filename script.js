// GET endpoint to retrieve data
app.get('/api/data', async (req, res) => {
    try {
      const { data, error } = await supabase
        .from('data_table')
        .select('*');
      if (error) throw error;
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // POST endpoint to create data
  app.post('/api/data', async (req, res) => {
    try {
      const { body } = req;
      const { data, error } = await supabase
        .from('data_table')
        .insert(body);
      if (error) throw error;
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // DELETE endpoint to delete data
  app.delete('/api/data/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { error } = await supabase
        .from('data_table')
        .delete()
        .eq('id', id);
      if (error) throw error;
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  