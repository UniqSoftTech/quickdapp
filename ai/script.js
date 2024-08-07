const OpenAI = require('openai');
const fs = require('fs').promises;

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function processWithOpenAI(inputJson, prompt, maxTokens = 10000) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: `Your task is to:
1. Analyze all contract ABIs and source codes to identify public and external functions, state variables, events, and internal logic.
2. Determine relationships between contracts based on inheritance, function calls, and other interactions visible in the source code.
3. Identify how contracts interact with the listed tokens and any additional tokens found in the source code or ABIs.
4. Recognize common DeFi patterns such as lending, borrowing, staking, or swapping by analyzing the contract logic.
5. Fetch basic information (name, symbol, decimals) for all tokens, including those not initially listed but referenced in contracts.
6. Identify any security measures, access controls, or upgradeability patterns in the contracts.
7. Detect any oracle usage or external data dependencies.
8. Analyze the overall protocol architecture and key components based on the contract interactions and logic.
9. Create a JSON output that includes:
   - Detailed information about each contract, its functions, state variables, and key logic flows
   - Token details
   - Relationships between contracts and tokens
   - Protocol-specific features, patterns, or unique aspects identified
   - Security considerations or potential areas of concern
   - A high-level overview of the protocol's architecture and main components

The output should be structured to allow easy generation of a dynamic user interface, facilitate complex multi-contract operations, and provide insights into the protocol's functionality and security aspects.

Provide your analysis and the resulting JSON output, ensuring it's general enough to work for various DeFi protocols like Uniswap, AAVE, Maker, or Lido, while also capturing the unique aspects of this specific protocol.

Please process this JSON according to the prompt and return the result as valid JSON.` },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: maxTokens,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error processing with OpenAI:', error);
    throw error;
  }
}

async function main() {
  try {
    // Load input JSON from file
    const inputJsonRaw = await fs.readFile('contract_info.json', 'utf8');
    const inputJson = JSON.parse(inputJsonRaw);

    // Load initial prompt from file
    const initialPrompt = await fs.readFile('prompt.txt', 'utf8');

    const fullPrompt = `Here's the input JSON: ${JSON.stringify(inputJson)}

Here's the prompt: ${initialPrompt}

Please process this JSON according to the prompt and return the result as valid JSON.`;

    // Store the full prompt
    await fs.writeFile('full_prompt.txt', fullPrompt);

    // Process with OpenAI and get full response
    const fullResponse = await processWithOpenAI(inputJson, fullPrompt, 10000);

    console.log('Full Response:', fullResponse);

    // Attempt to parse the full response as JSON
    try {
      const parsedJson = JSON.parse(fullResponse);
      console.log('Successfully parsed response as JSON');
      
      // Write the parsed JSON to a file
      await fs.writeFile('output.json', JSON.stringify(parsedJson, null, 2));
      console.log('Parsed JSON written to output.json');
    } catch (parseError) {
      console.warn('Warning: Full response is not valid JSON. Writing raw response and manual inspection may be required.');
      await fs.writeFile('output.txt', fullResponse);
      console.log('Raw response written to output.txt');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

main();