// API endpoint to receive and process contact data
app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
  
      // Basic validation: Check if all fields are provided
      if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
      }
  
      // Create a new document with the provided data
      const newContact = new Contact({ name, email, message });
      await newContact.save(); // Save the document to MongoDB Atlas
  
      // Send success response
      res.status(201).json({ success: true, message: 'Contact saved successfully!' });
    } catch (error) {
      console.error('Error saving contact:', error);
      res.status(500).json({ success: false, message: 'Server error while saving contact.' });
    }
  });
