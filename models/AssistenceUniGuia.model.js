import mongoose from "mongoose";

const AssistenceUniGuiaSchema = new mongoose.Schema({
  userUniGuia: {
    type: mongoose.Types.ObjectId,
    ref: "UserUniGuia",
  },
  chave: {
    type: String,
  },
});

export default mongoose.model("AssistenceUniGuia", AssistenceUniGuiaSchema);
