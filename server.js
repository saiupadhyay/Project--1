const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const sequelize = require('./database');
const maidRoutes = require('./routes/maidRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/api/maids', maidRoutes);
app.use('/api/users', userRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
