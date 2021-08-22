const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        name: { type: String },
        genre: { type: String },
        authorId: {
            type: Schema.Types.ObjectId,
            ref: "Author",
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

module.exports = mongoose.model("Book", bookSchema);
