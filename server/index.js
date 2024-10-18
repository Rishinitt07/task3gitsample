const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/analyze-code", async (req, res) => {
  const { code, language } = req.body;

  const prompt = `
    You are a security expert. Analyze the following ${language} code for vulnerabilities and suggest fixes:
    
    Code:
    ${code}
    
    Vulnerabilities:
  `;

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a security expert." },
        { role: "user", content: prompt },
      ],
      max_tokens: 500,
      temperature: 0.5,
    });

    const vulnerabilities = response.data.choices[0].message.content.trim();
    res.json({ vulnerabilities });
  } catch (error) {
    console.error(
      "Error interacting with OpenAI API",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Error analyzing code" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
