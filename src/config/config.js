const mongoose = require('mongoose');

const connectDb = () => {
    const password = process.env.DBPASSWORD || 'opendashboard123';
    const CONNECTION_URL = `mongodb+srv://opendashboard:${password}@cluster0.6qlsfya.mongodb.net/?retryWrites=true&w=majority`

    if (!password || password == undefined) {
        throw new Error("Database password not loaded");
    }
    mongoose.connect(
        CONNECTION_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        function (error) {
            if (error) {
                console.log(error);
            } else {
                console.log('Connected to MongoDB!');
            }
        }
    );
}

module.exports = {
    connectDb: connectDb
}