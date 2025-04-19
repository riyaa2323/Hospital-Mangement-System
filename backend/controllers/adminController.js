//api add doctor
import doctorModel from "../models/doctorModel.js";
const addDoctor=async(req,res)=>{
    try {
        const {name,email,password,image,specialization,experience,about,fees,address,date}=req.body;
    //     const doctor=await doctorModel.create({
    //         name,email,password,image,specialization,experience,about,fees,address,date
    //     })
    //     res.status(200).json({message:"Doctor added successfully",doctor})\
    const imageFile=req.file
    console.log({name,email,password,specialization,experience,about,fees,address,date},image)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export {addDoctor}