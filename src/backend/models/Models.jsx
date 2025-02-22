// Define the schema for a contact form submission
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now },
  });
  
  // Create a Mongoose model from the schema
  const Contact = mongoose.model('Contact', contactSchema);
  