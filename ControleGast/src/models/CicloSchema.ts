import { model, Schema } from "mongoose";
import {creditoSchema} from "./CreditoSchema";
import {debitoSchema} from "./DebitoSchema";

const cicloSchema = new Schema({
    data: 
    {
        type: Date,
        required: [true, "O campo DATA é obrigatório!"]
    },
    credito: [creditoSchema] ,
    debitos: [debitoSchema]
},
{
    timestamps: true,
}
);

export default model("ciclos", cicloSchema);

