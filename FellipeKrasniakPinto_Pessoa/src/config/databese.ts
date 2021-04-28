import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:Admin654@clustertopicos.w8f0w.mongodb.net/AulaTopicos?retryWrites=true&w=majority", 
{useNewUrlParser: true, useUnifiedTopology: true}
)
.then(()=>
{
   console.log("Aplicação conectada ao banco de dados!"); 
})
.catch((error) =>
{
    console.log(`erro ao conectar com o banco: ${error}`);
});

export { mongoose };