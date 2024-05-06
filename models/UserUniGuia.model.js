import mongoose from "mongoose";

const UserUniGuiaSchema = new mongoose.Schema(
  {
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "Usuario",
      enum: ["Usuario", "Gerente"],
    },
    formUniGuia: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FormUniGuia",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("UserUniGuia", UserUniGuiaSchema);
