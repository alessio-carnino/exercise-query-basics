import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();
const { MONGO_URI } = process.env;
