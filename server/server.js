const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const port = 3001;

const projectsRouter = require('./routes/projects');
const prioritiesRouter = require('./routes/priorities');
const authRoutes = require('./routes/authRoutes');
const inventoryRoutes = require('./routes/inventory');  

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.use('/api/projects', projectsRouter);
app.use('/api/priorities', prioritiesRouter);
app.use('/api/auth', authRoutes);
app.use('/api/inventory', inventoryRoutes);  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
