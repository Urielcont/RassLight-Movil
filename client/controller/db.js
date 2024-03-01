const mongoose = requiere("mongoose")


requiere("dotenv").config();

const conectDB = async ()=> {
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
        });
        connsole.log("conectado a la  base de datos");
    }
    catch(error){
        console.error(error);
    }
}

module.exports= conectDB