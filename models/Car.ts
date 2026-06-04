import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
    horsepower: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      enum: {
        values: [
          "Sedan",
          "SUV",
          "Coupe",
          "Convertible",
          "Hatchback",
          "Wagon",
          "Pickup Truck",
          "Van",
          "Minivan",
          "Crossover",
          "Roadster",
        ],
        message:
          "Category must be one of Sedan, SUV, Coupe, Convertible, or Hatchback",
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Cars = mongoose.models.Cars || mongoose.model("Cars", carSchema);
