import Room from "../backend/models/room";
import mongoose from "mongoose";
import { rooms } from "./data";

const seedRoom = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/bookit");

    await Room.deleteMany();
    console.log("Room are deleted");

    await Room.insertMany(rooms);
    console.log("Rooms are added");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
seedRoom();
