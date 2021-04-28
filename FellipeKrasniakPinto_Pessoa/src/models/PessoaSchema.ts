import { model, Schema } from "mongoose";

const PessoaSchema = new Schema ({

    nome:
    {
        type: String,
        required: [true, "O campo nome é obrigatório!"]
    },
    cpf:
    {
        type: String,
        required: [true, "O campo CPF é obrigatório!"]
    },
    idade:
    {
        type: Number,
        required: [true, "O campo idade é obrigatório!"]
    }
},
{
    timestamps: true,

});

export default model("pessoas", PessoaSchema);