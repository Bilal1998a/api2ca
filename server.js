const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

const supabaseUrl = 'https://cgwmwvvwqmebwuvcxskg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnd213dnZ3cW1lYnd1dmN4c2tnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0Nzk0NzIsImV4cCI6MjAyMzA1NTQ3Mn0.iQPXgWE3XMTtPi-VUNq0FaFZSipZtvTCy_qtvGRHZb4';
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.json());

// Define your routes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
