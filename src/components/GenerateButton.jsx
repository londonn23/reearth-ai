/* GenerateButton.jsx */
import "./GenerateButton.css";
import { GoogleGenAI } from "@google/genai";
import { useCallback } from "react";


export function GenerateButton({ prompt, setReply }) {
  const handleClick = useCallback(async () => {
    setReply("Generating…");
    try {
      // Instantiate AI client inside callback
      const ai = new GoogleGenAI({
        apiKey: "secret",
      });

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });      

      setReply(response.text);
    } catch (err) {
      console.error(err);
      setReply("Failed to generate. 😢");
    }
  }, [prompt, setReply]);

  return (
    <button className="generate-button" onClick={handleClick}>
      Generate⚙️
    </button>
  );
}
