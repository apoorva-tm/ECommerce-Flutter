const mongoose = require('mongoose');

const uri = "mongodb+srv://apoorva:habbiton@habbiton.stlqfxu.mongodb.net/habbiton";

async function run() {
  try {
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(uri);
    console.log("Successfully connected to MongoDB!");
  } catch (err) {
    console.error("Failed to connect to MongoDB. Error details:");
    console.error(err);
  } finally {
    await mongoose.disconnect();
  }
}

run();
