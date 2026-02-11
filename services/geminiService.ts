
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export interface AuditResult {
  summary: string;
  automationOpportunities: string[];
  estimatedTimeSavings: string;
  complexity: 'Low' | 'Medium' | 'High';
}

export const generateAudit = async (businessChallenge: string): Promise<AuditResult> => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze the following business challenge and provide a structured AI automation audit: "${businessChallenge}"`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING },
          automationOpportunities: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          estimatedTimeSavings: { type: Type.STRING },
          complexity: { type: Type.STRING, enum: ['Low', 'Medium', 'High'] }
        },
        required: ["summary", "automationOpportunities", "estimatedTimeSavings", "complexity"]
      }
    }
  });

  const text = response.text || '{}';
  return JSON.parse(text) as AuditResult;
};

export const chatWithAi = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "You are an AI Strategy Consultant for AiTrios. You are expert in automation, LLMs, and enterprise efficiency. Keep responses professional, innovative, and concise."
    }
  });

  // Note: chat.sendMessage doesn't take history directly in this version's API, 
  // we use chat.sendMessage for the latest message.
  const response = await chat.sendMessage({ message });
  return response.text;
};
