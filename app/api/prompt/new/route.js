import { connectToDB } from "@utils/db";
import Prompt from "@models/prompt";

export const POST = async (req, res) =>{
    const {usedId, prompt, tag} = await req.json();

    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: usedId,
            prompt,
            tag
        })
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), {status: 201})
    } catch (error) {
        return new Response("prompt can not be created", {status: 500})
    }
}