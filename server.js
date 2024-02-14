const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

const supabaseUrl = 'https://cgwmwvvwqmebwuvcxskg.supabase.co';
const supabaseKey = process.env.CLIENTKEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.json());

// Define your routes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
