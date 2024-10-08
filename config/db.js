
const mongoose= require("mongoose")


mongoose.connect(process.env.MONGO_URI)
    .then(() =>
        console.log('database connected!')
    )
    .catch(() =>
        console.log('Database connection error!')
    );
 module.exports= mongoose