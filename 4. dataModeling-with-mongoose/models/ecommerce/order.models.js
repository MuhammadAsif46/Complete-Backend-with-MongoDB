import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: {
      //  choose any one both are same working
      type: [orderItemSchema],
      //   type: [
      //     {
      //       productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      //       quantity: { type: Number },
      //     },
      //   ],
    },
    address: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["PayPal", "Credit Card", "Apple Pay"],
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "DELIVERED", "CANCALLED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
