const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// Replace with your MongoDB Atlas connection URL
const mongoURI = 'mongodb+srv://solarthirst:<6GvQbvWA3GqhGAGy>@cluster0.wxczr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Atlas connected"))
    .catch((err) => console.log("MongoDB Atlas connection error:", err));

// Define the Report Schema
const reportSchema = new mongoose.Schema({
    reportData: String,
    customerId: String,
    createdAt: { type: Date, default: Date.now }
});

const Report = mongoose.model('Report', reportSchema);

// Route to submit report
app.post('/submitReport', async (req, res) => {
    const { reportData, customerId } = req.body;
    
    try {
        const newReport = new Report({ reportData, customerId });
        await newReport.save();
        res.status(201).send({ message: "Report submitted successfully!", reportId: newReport._id });
    } catch (error) {
        res.status(500).send({ error: "Error saving the report" });
    }
});

// Route to fetch all reports (organization access)
app.get('/getReports', async (req, res) => {
    try {
        const reports = await Report.find();
        res.json(reports);
    } catch (error) {
        res.status(500).send({ error: "Error fetching reports" });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
