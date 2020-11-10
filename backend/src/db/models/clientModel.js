import mongoose from "mongoose";


const clientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    }
  },
  {
    timestamps: true,
  }
);

const ClientModel = mongoose.model("Client", clientSchema);
  
export default ClientModel;