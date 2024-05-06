import { connect } from "mongoose";

export default connect(process.env.URI_MONGODB)
  .then(() => {
    // console.log("Connected to MongoDB ...");
  })
  .catch((err) => {
    // console.log("Error:", err);
  });
