import { openAIAPI , Configuration } from "openai"
import cors from 'cors';

app.use(cors());
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Make sure it's `apiKey`, not `apikey`
});
export async function generateImg( req , res , next ){

    const openai = new OpenAi

    const { query } = req.body;

    try {
        
        


    } catch (error) {
        next(error);
    }

}