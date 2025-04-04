// import modules
import 'express-async-errors';
import express from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDB } from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import cloudinary from 'cloudinary';

// init dotenv & setup app
dotenv.config();
const app = express();

// path setup and client build in public
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, './client/dist')));

// import middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

// import routes
import authRouter from './routes/authRouter.js';
import partnerRouter from './routes/partnerRouter.js';
import userRouter from './routes/userRouter.js';
import companyRouter from './routes/companyRouter.js';

// middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(cookieParser());
app.use(express.json());
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/partners', authenticateUser, partnerRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/companies', authenticateUser, companyRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use(errorHandlerMiddleware);

// set spin-up function
const PORT = process.env.PORT || 8080;

// start server
const start = async () => {
  try {
    // await connect db
    await connectDB(process.env.MONGO_URI);
    // app listen
    app.listen(PORT, () =>
      console.log(`server is listening on port ${PORT} ...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
