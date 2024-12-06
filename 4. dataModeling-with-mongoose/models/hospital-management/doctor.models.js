import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    experienceInYear: {
      type: Number,
      default: 0,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification:{
        type: String,
        required: true,
    },
    worksInHospitals:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
        },
        
    ]
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
