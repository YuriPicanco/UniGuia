import readline from "readline";

export default class Form {
  _userRespostaForm = [{}];
  constructor(userName, userId) {
    this._userId = userId;
    this.userName = userName;
    this.questionario();
  }

  async questionario() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const perguntas = {
      "Formação Acadêmica": {
        "Nível de Escolaridade": "",
        "Área de Formação": "",
      },
      "Experiência Profissional": {
        Resumo: "",
      },
      "Habilidades e Competências": {
        "Principais Habilidades": "",
        "Habilidades de Interesse": "",
      },
      "Interesses e Preferências": {
        "Interesses Pessoais e Hobbies": "",
        "Ambiente de Trabalho Desejado": "",
      },
      "Objetivo Profissional": {
        "Carreira a Longo Prazo": "",
        "Desejo Específico de Curto Prazo": "",
      },
      "Expectativa UniGuia": { "O que espera": "", "Informação Adicional": "" },
    };

    for (const categoria in perguntas) {
      const respostas = {};

      rl.write(`${categoria}:\n`);

      for (const pergunta in perguntas[categoria]) {
        await new Promise((resolve) => {
          rl.question(`- ${pergunta}: `, (resposta) => {
            perguntas[categoria][pergunta] = `${resposta}`;

            resolve();
          });
        });
      }
    }
    this._userRespostaForm = perguntas;
  }
}

// userRespostaForm: [
//     {
//       formacaoAcademica: {
//         nivelDeEscolaridade: String,
//         areaDeFormacao: String,
//       },
//     },
//     {
//       experienciaProfissional: {
//         resumo: String,
//       },
//     },
//     {
//       habilidadesECopetencias: {
//         principaisHabilidades: String,
//         habilidadesDeInteresse: String,
//       },
//     },
//     {
//       interessesEPreferencias: {
//         interessesPessoasEHobbies: String,
//         ambienteDeTrabalhoDesejado: String,
//       },
//     },
//     {
//       ObjetivoProfissional: {
//         carreiraLongoPrazo: String,
//         desejoEspecificoDeCurtoPrazo: String,
//       },
//     },
//     {
//       expectativaUniGuia: {
//         oQueEspera: String,
//         informacaoAdicional: String,
//       },
//     },
//   ],
// });
