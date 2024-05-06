import express from "express";
import axios from "axios";
import routesApp from "./routes/index.js";
import dbMongoose from "./infra/database2.js";
import apiStatusV1 from "./pages/api/v1/status/index.js";
import migrations from "./pages/api/v1/migrations/index.js";
import Form from "./utils/form.js";
import AssistenceAi from "./utils/assistenceAi.js";

// class App {
//   constructor() {
//     this.app = express();
//     this.connectDB();
//   }

//   async connectDB() {
//     await mongoose
//       .connect(process.env.URI_MONGODB)
//       .then(() => {
//         console.log("Connected to MongoDB ...");
//       })
//       .catch((err) => {
//         console.log("Error:", err);
//       });
//   }
// }

// const app = new App();
// const useRoute = new UseRoute();

// app;

// export default App;
const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/api/v1/status", apiStatusV1);
app.use("/api/v1/migrations", migrations);

app.use(routesApp);

app.listen(PORT, () => {
  // console.log(`Server on http://localhost:${PORT}`);
});

async function CriaFormularioDeAnalise(
  name = "Yuri",
  email = "exemple@exemple.com",
  password = "123",
  phone = "123",
  salt = "salt"
) {
  const uri = "http://localhost:5000/user/";
  const body = {
    name: name,
    email: email,
    salt: salt,
    password: password,
    phone: phone,
  };

  try {
    const response = await axios.post(uri, body);
    const user = response.data;
    console.log("user:", response.data);
    if (response.ok)
      throw new Error("Erro na criação de formulário: ", response);
    const userForm = new Form(user.name, user._id);
  } catch (err) {
    console.error(err?.response?.data?.message);
  }
}
// AssistenceAi.main();
CriaFormularioDeAnalise();
