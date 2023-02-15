const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "must provide title"],
      trim: true,
      maxlength: [20, "title can not be more than 20 characters"],
    },
    description: {
      type: String,
      required: [true, "must provide description"],
      trim: true,
      maxlength: [100, "description can not be more than 100 characters"],
    },
    priority: {
      type: String,
      trim: true,
      enum: ["high", "low", "medium"],
      lowercase: true,
      default: "high",
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

TodoSchema.set("toJSON", {
  versionKey: false,

  transform(doc, ret) {
    delete ret.__v;
  },
});

const newTodo = mongoose.model("newTodo", TodoSchema);

exports.newTodo = newTodo;
