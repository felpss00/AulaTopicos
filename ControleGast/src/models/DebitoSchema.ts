import { Schema } from "mongoose";

const debitoSchema = new Schema({
    nome: 
    {
        type: String,
        required: [true, "O campo NOME é obrigatório!"]
    },
    valor: {
        type:  Number,
        required: [true, "O campo VALOR é obrigatório!"],
        min: [1, "Valor mínimo de R$1,00"]
    },
    Status:
    {
        type: String,
        enum: ["PAGO", "PENDENTE", "AGENDADO"],
        upercase: true
    },
},
{
    timestamps: true,
}
);

export { debitoSchema };