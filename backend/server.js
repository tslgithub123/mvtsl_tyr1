const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

const citiesRoutes = require("./routes/citiesRoutes");
const ruralRoutes = require('./routes/ruralRoutes');
const urbanRoutes = require('./routes/urbanRoutes');
const amrutRoutes = require("./routes/amrutRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const oneuserRoutes = require("./routes/oneuserRoutes");
const citySubmissionRoutes = require("./routes/citySubmissionRoutes");
const citySubmissionsRoutes = require("./routes/citySubmissionsRoutes");
const citySubRoutes = require('./routes/citySubRoutes');
const ruralOneRoutes = require("./routes/ruralOneRoutes");
const urbanOneRoutes = require("./routes/urbanOneRoutes");
const amrutOneRoutes = require("./routes/amrutOneRoutes");
const ruralViewRoutes = require("./routes/ruralViewRoutes");
const urbanViewRoutes = require("./routes/urbanViewRoutes");
const amrutViewRoutes = require("./routes/amrutViewRoutes");
const citiesPopRoutes = require("./routes/citiesPopRoutes");
const cumulitiveRuralRoutes = require("./routes/cumulitiveRuralRoutes");
const cumulitiveAmrutRoutes = require("./routes/cumulitiveAmrutRoutes");
const cumulitiveUrbanRoutes = require("./routes/cumulitiveUrbanRoutes");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use("/api/v1/city", citiesRoutes);
app.use('/api/v1/rural', ruralRoutes);
app.use('/api/v1/urban', urbanRoutes);
app.use('/api/v1/amrut', amrutRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/oneuser", oneuserRoutes);
app.use("/api/v1/city/submit", citySubmissionRoutes);
app.use("/api/v1/city-submissions", citySubmissionsRoutes);
app.use('/api/v1/city-sub', citySubRoutes);
app.use("/api/v1/ruralone", ruralOneRoutes);
app.use("/api/v1/urbanone", urbanOneRoutes);
app.use("/api/v1/amrutone", amrutOneRoutes);
app.use("/api/v1/ruralview", ruralViewRoutes);
app.use("/api/v1/urbanview", urbanViewRoutes);
app.use("/api/v1/amrutview", amrutViewRoutes);
app.use('/api/v1/cities', citiesPopRoutes); 
app.use('/api/v1/cities', cumulitiveRuralRoutes);
app.use('/api/v1/cities', cumulitiveAmrutRoutes);
app.use('/api/v1/cities', cumulitiveUrbanRoutes);

const { getAdminHomePage, 
    editRuralSubmissionController, 
    editUrbanSubmissionController, 
    editAmrutSubmissionController, 
    deleteRuralSubmissionController, 
    deleteUrbanSubmissionController,
    deleteAmrutSubmissionController
 } = require('./controllers/adminControllers');

app.use("/api/v1/admin-homepage", getAdminHomePage); 
app.use("/api/v1/ruraledi/:ulbCode", editRuralSubmissionController);
app.use("/api/v1/ruraldel/:ulbCode", deleteRuralSubmissionController);
app.use("/api/v1/urbanedi/:ulbCode", editUrbanSubmissionController);
app.use("/api/v1/urbandel/:ulbCode", deleteUrbanSubmissionController);
app.use("/api/v1/amrutedi/:ulbCode", editAmrutSubmissionController);
app.use("/api/v1/amrutdel/:ulbCode", deleteAmrutSubmissionController);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(
        `Server Running in ${process.env.NODE_MODE} Mode on port ${port}`.bgCyan.white
    );
});
