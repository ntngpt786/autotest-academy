
import { GoogleGenAI } from "@google/genai";

export const getTestingAdvice = async (htmlSnippet: string, goal: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `
        You are an expert Automation QA Engineer. 
        Analyze the following HTML snippet and goal:
        HTML: ${htmlSnippet}
        Goal: ${goal}
        
        Provide:
        1. Recommended Locators (CSS, XPath, Data-TestID).
        2. A sample Playwright script snippet.
        3. Potential edge cases to test.
        
        Format the output clearly using Markdown.
      `
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI assistant is unavailable. Please check if the API_KEY environment variable is set.";
  }
};
