import mongoose from "mongoose";

const FormUniGuiaSchema = new mongoose.Schema({
  userUniGuia: {
    type: mongoose.Types.ObjectId,
    ref: "UserUniGuia",
  },

  userRespostaForm: [
    {
      formacaoAcademica: {
        nivelDeEscolaridade: String,
        areaDeFormacao: String,
      },
    },
    {
      experienciaProfissional: {
        resumo: String,
      },
    },
    {
      habilidadesECopetencias: {
        principaisHabilidades: String,
        habilidadesDeInteresse: String,
      },
    },
    {
      interessesEPreferencias: {
        interessesPessoasEHobbies: String,
        ambienteDeTrabalhoDesejado: String,
      },
    },
    {
      ObjetivoProfissional: {
        carreiraLongoPrazo: String,
        desejoEspecificoDeCurtoPrazo: String,
      },
    },
    {
      expectativaUniGuia: {
        oQueEspera: String,
        informacaoAdicional: String,
      },
    },
  ],
});

export default mongoose.model("FormUniGuia", FormUniGuiaSchema);
