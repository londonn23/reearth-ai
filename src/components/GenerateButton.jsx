/* GenerateButton.jsx */
import "./GenerateButton.css";
import { GoogleGenAI } from "@google/genai";
import { useCallback } from "react";

export function GenerateButton({ prompt, setReply, setLoadState, loadState }) {
  const handleClick = useCallback(async () => {
    if (
      prompt ==
      "List out the ways on what can i do with these items below (all of these items are used items):\n"
    ) {
      setReply("Please select at least 1 item.");
    } else {
      setLoadState(true);
      setReply("Generating…");
      try {
        // Instantiate AI client inside callback
        const ai = new GoogleGenAI({
          apiKey: "key",
        });

        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: prompt,
        });
        
        setReply(response.text);
      } catch (err) {
        console.error(err);
        setReply("Failed to generate. 😢");
      } finally {
        setLoadState(false);
      }
    }
  }, [prompt, setReply, setLoadState]);

  return (
    <button
      className={loadState ? "generate-button disable" : "generate-button"}
      onClick={handleClick}
    >
      Generate⚙️
    </button>
  );
}
