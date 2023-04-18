import type { NextApiRequest, NextApiResponse } from 'next';
import {Configuration,OpenAIApi } from 'openai'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt } = req.body

  const configuration= new Configuration({
    apiKey:"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"
  })
  const openai= new OpenAIApi(configuration)

 if (req.method !== 'POST') {
     return res.status(405).json({ error: 'Method not allowed' });
  }
  try{
    const aiResponse= await openai.createImage({
      prompt,
      n:1,
      size:'1024x1024',
      response_format:'url'
    })
    const imagem=aiResponse.data.data[0].url
    res.status(200).json({photo:imagem})
  } catch(error){
    console.log(error)
  }
  
}