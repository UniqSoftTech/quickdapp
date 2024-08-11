const OpenAI = require("openai");
const fs = require("fs").promises;

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function processWithOpenAI(inputJson, prompt, maxTokens = 10000) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an expert frontend React engineer and UI/UX designer. Analyze the provided ABI json and contract source code to create a structured JSON for our frontend generator. This generator will automatically create a React-based frontend for the given contract. Follow these guidelines:

Identify the main features and user interactions in the contracts.
Design a logical layout and component structure for the DApp.
Specify UI components, their properties, and exact placement within the layout.
Define workflow sequences for key user interactions.
Include token details if relevant.

Generate a JSON output with the following structure:
{
"protocolName": "",
"protocolDescription": "",
"mainFeatures": [],
"layout": {
"navbar": {},
"sidebar": {},
"main": {
"sections": []
},
"footer": {}
},
"components": {
  "readComponents": [
    {
      "type": "",
      "title": "", //Brief Title of the function
      "name": "",
      "props": {},
      "placement": {
      "section": "",
      "order": 0
      },
      "associatedFunction": {
        "name": "",
        "type": "",
        "inputValues": [{
          "name": "",
          "type": "", //address, wei number etc
        }]
      },
    }
  ],
  "writeComponents": [
    {
      "type": "",
      "title": "", //Brief Title of the function
      "name": "",
      "props": {
        "fields": [
          {
            "name": "",
            "type": "",
            "label": "",
          }
        ],
        "submitLabel": "",
        //More necessarry things
      },
      "placement": {
      "section": "",
      "order": 0
      },
      "associatedFunction": {
        "name": "",
        "type": "",
        "inputValues": [{
          "name": "",
          "type": "", //address, wei number etc
        }]
      },
    }
  ],  
},
"workflows": [
{
"name": "",
"steps": []
}
],
"tokenDetails": {}
}
Ensure each component is linked to a specific contract function and placed within the layout. Focus on creating an intuitive, functional UI without including the ABI or detailed function parameters. The JSON should provide clear instructions for the frontend generator to create and position React components.
DO NOT START WITH '\\\json' or '\\\`, just give the JSON.`,
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: maxTokens,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error processing with OpenAI:", error);
    throw error;
  }
}

async function main() {
  try {
    // Load input JSON from file
    const inputJsonRaw = await fs.readFile("contract_info.json", "utf8");
    const inputJson = JSON.parse(inputJsonRaw);

    // Load initial prompt from file
    const initialPrompt = await fs.readFile("prompt.txt", "utf8");

    const fullPrompt = `Here's the input JSON: ${JSON.stringify(inputJson)}

Here's the prompt: ${initialPrompt}

Please process this JSON according to the prompt and return the result as valid JSON.`;

    // Store the full prompt
    await fs.writeFile("full_prompt.txt", fullPrompt);

    // Process with OpenAI and get full response
    const fullResponse = await processWithOpenAI(inputJson, fullPrompt, 10000);

    console.log("Full Response:", fullResponse);

    // Attempt to parse the full response as JSON
    try {
      const parsedJson = JSON.parse(fullResponse);
      console.log("Successfully parsed response as JSON");

      // Write the parsed JSON to a file
      await fs.writeFile("output.json", JSON.stringify(parsedJson, null, 2));
      console.log("Parsed JSON written to output.json");
    } catch (parseError) {
      console.warn(
        "Warning: Full response is not valid JSON. Writing raw response and manual inspection may be required.",
      );
      await fs.writeFile("output.txt", fullResponse);
      console.log("Raw response written to output.txt");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
