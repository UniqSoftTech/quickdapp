export const dummyAbi = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{ "name": "", "type": "string" }],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{ "name": "", "type": "string" }],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{ "name": "", "type": "uint8" }],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{ "name": "_owner", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "name": "balance", "type": "uint256" }],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }],
    "name": "transfer",
    "outputs": [{ "name": "", "type": "bool" }],
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "from", "type": "address" },
      { "indexed": true, "name": "to", "type": "address" },
      { "indexed": false, "name": "value", "type": "uint256" }
    ],
    "name": "Transfer",
    "type": "event"
  }
]

export const dummyAiOutput = {
  "selectedTemplates": [
    {
      "id": "connectWallet",
      "type": "connection",
      "props": {}
    },
    {
      "id": "tokenTransfer",
      "type": "erc20",
      "props": {
        "suggestedAmounts": ["10", "100", "1000"]
      }
    },
    {
      "id": "balanceDisplay",
      "type": "erc20",
      "props": {
        "symbol": "TKN"
      }
    },
    {
      "id": "eventList",
      "type": "common",
      "props": {
        "eventName": "Transfer"
      }
    }
  ],
  "layout": "singleColumn",
  "workflowSequences": [
    {
      "name": "Approve and Transfer",
      "steps": ["tokenApproval", "tokenTransfer"]
    }
  ]
}