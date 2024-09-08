import mongoose from 'mongoose';

const connectDB = async (url) => {
    mongoose.set('strictQuery', true);

    try {
        await mongoose.connect(url, {
        });
        console.log("DB Connection Successful");
    } catch (error) {
        console.error("DB Connection Error:", error);
    }
};

export default connectDB;
