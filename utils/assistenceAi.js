import OpenAI from "openai";
import { configDotenv } from "dotenv";

configDotenv();

class AssistenceAi {
  constructor() {}

  static async main() {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `Você é um assistente de guia da carreira e irá analisar um 
                formulário preenchido pelo usuário. A resposta da analise deve seguir o padrão "Com base nas suas habilidades e seus interesses
                 essas áreas podem te interessar <opção1> e <opção2>. Suas habilidades também combinam com <opção1> e <opção2>.
                 Outras opções também são <opção1> e <opção2>" forneça duas opções de áreas a seguir 
                baseadas em seus interesses. Forneça duas opções de áreas a seguir baseadas sem suas habilidades. 
                Forneça duas opções de áreas a seguir baseado na soma dos interesses, habilidades e expectativas
            `,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0].message.content);
  }
}
export default AssistenceAi;
