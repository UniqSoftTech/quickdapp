
export const dummyAiOutput = {
    "protocolName": "ExampleProtocol",
    "protocolDescription": "A protocol utilizing upgradeable proxy contracts for enhanced functionality and flexibility in contract interactions.",
    "mainFeatures": [
        "Upgradeable Proxy Contract",
        "Batch Execution of Transactions",
        "Deposit and Withdrawal Mechanisms",
        "Event Listening for State Changes",
        "Owner Control Mechanism"
    ],
    "layout": {
        "navbar": {
            "logo": "ExampleProtocol",
            "links": [
                {
                    "title": "Home",
                    "url": "/"
                },
                {
                    "title": "Dashboard",
                    "url": "/dashboard"
                },
                {
                    "title": "Contracts",
                    "url": "/contracts"
                },
                {
                    "title": "About",
                    "url": "/about"
                }
            ]
        },
        "sidebar": {
            "sections": [
                {
                    "title": "Overview",
                    "url": "/overview"
                },
                {
                    "title": "Token Management",
                    "url": "/tokens"
                },
                {
                    "title": "Admin Panel",
                    "url": "/admin"
                }
            ]
        },
        "main": {
            "sections": [
                {
                    "title": "Current Account",
                    "content": "Display account details and actions."
                },
                {
                    "title": "Transaction History",
                    "content": "Show past transactions and their statuses."
                },
                {
                    "title": "Deposit and Withdraw",
                    "content": "Manage account funds."
                }
            ]
        },
        "footer": {
            "links": [
                {
                    "title": "Privacy Policy",
                    "url": "/privacy"
                },
                {
                    "title": "Terms of Service",
                    "url": "/terms"
                }
            ]
        }
    },
    "components": {
        "readComponents": [
            {
                "type": "Display",
                "title": "Get Deposit",
                "name": "getDepositDisplay",
                "props": {},
                "placement": {
                    "section": "Current Account",
                    "order": 1
                },
                "associatedFunction": {
                    "name": "getDeposit",
                    "type": "view",
                    "inputValues": []
                }
            },
            {
                "type": "Display",
                "title": "Get Nonce",
                "name": "getNonceDisplay",
                "props": {},
                "placement": {
                    "section": "Current Account",
                    "order": 2
                },
                "associatedFunction": {
                    "name": "getNonce",
                    "type": "view",
                    "inputValues": []
                }
            },
            {
                "type": "Display",
                "title": "Owner Address",
                "name": "ownerAddressDisplay",
                "props": {},
                "placement": {
                    "section": "Current Account",
                    "order": 3
                },
                "associatedFunction": {
                    "name": "owner",
                    "type": "view",
                    "inputValues": []
                }
            }
        ],
        "writeComponents": [
            {
                "type": "Form",
                "title": "Add Deposit",
                "name": "addDepositForm",
                "props": {
                    "fields": [
                        {
                            "name": "amount",
                            "type": "number",
                            "label": "Deposit Amount (ETH)"
                        }
                    ],
                    "submitLabel": "Deposit"
                },
                "placement": {
                    "section": "Deposit and Withdraw",
                    "order": 1
                },
                "associatedFunction": {
                    "name": "addDeposit",
                    "type": "payable",
                    "inputValues": [
                        {
                            "name": "amount",
                            "type": "wei"
                        }
                    ]
                }
            },
            {
                "type": "Form",
                "title": "Withdraw Deposit",
                "name": "withdrawDepositForm",
                "props": {
                    "fields": [
                        {
                            "name": "withdrawAddress",
                            "type": "address",
                            "label": "Withdraw Address"
                        },
                        {
                            "name": "amount",
                            "type": "number",
                            "label": "Withdraw Amount (ETH)"
                        }
                    ],
                    "submitLabel": "Withdraw"
                },
                "placement": {
                    "section": "Deposit and Withdraw",
                    "order": 2
                },
                "associatedFunction": {
                    "name": "withdrawDepositTo",
                    "type": "nonpayable",
                    "inputValues": [
                        {
                            "name": "withdrawAddress",
                            "type": "address"
                        },
                        {
                            "name": "amount",
                            "type": "wei"
                        }
                    ]
                }
            },
            {
                "type": "Form",
                "title": "Execute Transaction",
                "name": "executeTransactionForm",
                "props": {
                    "fields": [
                        {
                            "name": "destination",
                            "type": "address",
                            "label": "Destination Address"
                        },
                        {
                            "name": "value",
                            "type": "number",
                            "label": "Amount (ETH)"
                        },
                        {
                            "name": "functionData",
                            "type": "text",
                            "label": "Function Call Data (bytes)"
                        }
                    ],
                    "submitLabel": "Execute"
                },
                "placement": {
                    "section": "Transaction History",
                    "order": 1
                },
                "associatedFunction": {
                    "name": "execute",
                    "type": "nonpayable",
                    "inputValues": [
                        {
                            "name": "dest",
                            "type": "address"
                        },
                        {
                            "name": "value",
                            "type": "wei"
                        },
                        {
                            "name": "func",
                            "type": "bytes"
                        }
                    ]
                }
            }
        ]
    },
    "workflows": [
        {
            "name": "Deposit Workflow",
            "steps": [
                "User fills in the deposit form.",
                "User submits the deposit request.",
                "Contract processes the deposit and updates the account state."
            ]
        },
        {
            "name": "Withdrawal Workflow",
            "steps": [
                "User fills in the withdrawal form.",
                "User submits the withdrawal request.",
                "Contract processes the withdrawal and updates the account state."
            ]
        },
        {
            "name": "Transaction Execution Workflow",
            "steps": [
                "User fills in the execute transaction form.",
                "User submits the transaction request.",
                "Contract processes the transaction call to the destination address."
            ]
        }
    ],
    "tokenDetails": {
        "tokens": [
            {
                "name": "Ether",
                "symbol": "ETH",
                "decimals": 18
            }
        ]
    }
}

export const topTokens = [
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhjMDJhYWEzOWIyMjNmZThkMGEwZTVjNGYyN2VhZDkwODNjNzU2Y2My",
        "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        "chain": "ETHEREUM",
        "symbol": "WETH",
        "name": "Wrapped Ether",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4YzAyYWFhMzliMjIzZmU4ZDBhMGU1YzRmMjdlYWQ5MDgzYzc1NmNjMl9XRVRI",
            "name": "WETH",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3RydXN0d2FsbGV0L2Fzc2V0cy9tYXN0ZXIvYmxvY2tjaGFpbnMvZXRoZXJldW0vYXNzZXRzLzB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMi9sb2dvLnBuZw==",
                "url": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhhMGI4Njk5MWM2MjE4YjM2YzFkMTlkNGEyZTllYjBjZTM2MDZlYjQ4",
        "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "chain": "ETHEREUM",
        "symbol": "USDC",
        "name": "USD Coin",
        "decimals": 6,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4YTBiODY5OTFjNjIxOGIzNmMxZDE5ZDRhMmU5ZWIwY2UzNjA2ZWI0OF9VU0RD",
            "name": "USDC",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy82MzE5L2xhcmdlL3VzZGMucG5nPzE2OTY1MDY2OTQ=",
                "url": "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhkYWMxN2Y5NThkMmVlNTIzYTIyMDYyMDY5OTQ1OTdjMTNkODMxZWM3",
        "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        "chain": "ETHEREUM",
        "symbol": "USDT",
        "name": "Tether USD",
        "decimals": 6,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZGFjMTdmOTU4ZDJlZTUyM2EyMjA2MjA2OTk0NTk3YzEzZDgzMWVjN19UZXRoZXI=",
            "name": "Tether",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8zMjUvbGFyZ2UvVGV0aGVyLnBuZz8xNjk2NTAxNjYx",
                "url": "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgyMjYwZmFjNWU1NTQyYTc3M2FhNDRmYmNmZWRmN2MxOTNiYzJjNTk5",
        "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "chain": "ETHEREUM",
        "symbol": "WBTC",
        "name": "Wrapped BTC",
        "decimals": 8,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MjI2MGZhYzVlNTU0MmE3NzNhYTQ0ZmJjZmVkZjdjMTkzYmMyYzU5OV9XcmFwcGVkIEJpdGNvaW4=",
            "name": "Wrapped Bitcoin",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy83NTk4L2xhcmdlL3dyYXBwZWRfYml0Y29pbl93YnRjLnBuZz8xNjk2NTA3ODU3",
                "url": "https://coin-images.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg2YjE3NTQ3NGU4OTA5NGM0NGRhOThiOTU0ZWVkZWFjNDk1MjcxZDBm",
        "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "chain": "ETHEREUM",
        "symbol": "DAI",
        "name": "Dai Stablecoin",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NmIxNzU0NzRlODkwOTRjNDRkYTk4Yjk1NGVlZGVhYzQ5NTI3MWQwZl9EYWk=",
            "name": "Dai",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy85OTU2L2xhcmdlL0JhZGdlX0RhaS5wbmc/MTY5NjUwOTk5Ng==",
                "url": "https://coin-images.coingecko.com/coins/images/9956/large/Badge_Dai.png?1696509996",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/9956/large/Badge_Dai.png?1696509996",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhiZTk4OTUxNDZmN2FmNDMwNDljYTFjMWFlMzU4YjA1NDFlYTQ5NzA0",
        "address": "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704",
        "chain": "ETHEREUM",
        "symbol": "cbETH",
        "name": "Coinbase Wrapped Staked ETH",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4YmU5ODk1MTQ2ZjdhZjQzMDQ5Y2ExYzFhZTM1OGIwNTQxZWE0OTcwNF9Db2luYmFzZSBXcmFwcGVkIFN0YWtlZCBFVEg=",
            "name": "Coinbase Wrapped Staked ETH",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yNzAwOC9sYXJnZS9jYmV0aC5wbmc/MTcwOTE4Njk4OQ==",
                "url": "https://coin-images.coingecko.com/coins/images/27008/large/cbeth.png?1709186989",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/27008/large/cbeth.png?1709186989",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg5ZjhmNzJhYTkzMDRjOGI1OTNkNTU1ZjEyZWY2NTg5Y2MzYTU3OWEy",
        "address": "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
        "chain": "ETHEREUM",
        "symbol": "MKR",
        "name": "Maker",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4OWY4ZjcyYWE5MzA0YzhiNTkzZDU1NWYxMmVmNjU4OWNjM2E1NzlhMl9NYWtlcg==",
            "name": "Maker",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMzY0L2xhcmdlL01hcmtfTWFrZXIucG5nPzE2OTY1MDI0MjM=",
                "url": "https://coin-images.coingecko.com/coins/images/1364/large/Mark_Maker.png?1696502423",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/1364/large/Mark_Maker.png?1696502423",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg2OTgyNTA4MTQ1NDU0Y2UzMjVkZGJlNDdhMjVkNGVjM2QyMzExOTMz",
        "address": "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
        "chain": "ETHEREUM",
        "symbol": "PEPE",
        "name": "Pepe",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4Njk4MjUwODE0NTQ1NGNlMzI1ZGRiZTQ3YTI1ZDRlYzNkMjMxMTkzM19QZXBl",
            "name": "Pepe",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yOTg1MC9sYXJnZS9wZXBlLXRva2VuLmpwZWc/MTY5NjUyODc3Ng==",
                "url": "https://coin-images.coingecko.com/coins/images/29850/large/pepe-token.jpeg?1696528776",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/29850/large/pepe-token.jpeg?1696528776",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg1MTQ5MTA3NzFhZjljYTY1NmFmODQwZGZmODNlODI2NGVjZjk4NmNh",
        "address": "0x514910771AF9Ca656af840dff83E8264EcF986CA",
        "chain": "ETHEREUM",
        "symbol": "LINK",
        "name": "ChainLink Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NTE0OTEwNzcxYWY5Y2E2NTZhZjg0MGRmZjgzZTgyNjRlY2Y5ODZjYV9DaGFpbmxpbms=",
            "name": "Chainlink",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy84NzcvbGFyZ2UvY2hhaW5saW5rLW5ldy1sb2dvLnBuZz8xNjk2NTAyMDA5",
                "url": "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgxZjk4NDBhODVkNWFmNWJmMWQxNzYyZjkyNWJkYWRkYzQyMDFmOTg0",
        "address": "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        "chain": "ETHEREUM",
        "symbol": "UNI",
        "name": "Uniswap",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MWY5ODQwYTg1ZDVhZjViZjFkMTc2MmY5MjViZGFkZGM0MjAxZjk4NF9Vbmlzd2Fw",
            "name": "Uniswap",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMjUwNC9sYXJnZS91bmlzd2FwLWxvZ28ucG5nPzE3MjA2NzY2Njk=",
                "url": "https://coin-images.coingecko.com/coins/images/12504/large/uniswap-logo.png?1720676669",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/12504/large/uniswap-logo.png?1720676669",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhmYWJhNmY4ZTRhNWU4YWI4MmY2MmZlN2MzOTg1OWZhNTc3MjY5YmUz",
        "address": "0xfAbA6f8e4a5E8Ab82F62fe7C39859FA577269BE3",
        "chain": "ETHEREUM",
        "symbol": "ONDO",
        "name": "Ondo",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZmFiYTZmOGU0YTVlOGFiODJmNjJmZTdjMzk4NTlmYTU3NzI2OWJlM19PbmRv",
            "name": "Ondo",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yNjU4MC9sYXJnZS9PTkRPLnBuZz8xNjk2NTI1NjU2",
                "url": "https://coin-images.coingecko.com/coins/images/26580/large/ONDO.png?1696525656",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/26580/large/ONDO.png?1696525656",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhkMzFhNTljODVhZTlkOGVkZWZlYzQxMWQ0NDhmOTA4NDE1NzFiODlj",
        "address": "0xD31a59c85aE9D8edEFeC411D448f90841571b89c",
        "chain": "ETHEREUM",
        "symbol": "SOL",
        "name": "Wrapped SOL (Wormhole)",
        "decimals": 9,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZDMxYTU5Yzg1YWU5ZDhlZGVmZWM0MTFkNDQ4ZjkwODQxNTcxYjg5Y19TT0wgKFdvcm1ob2xlKQ==",
            "name": "SOL (Wormhole)",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yMjg3Ni9sYXJnZS9TT0xfd2hfc21hbGwucG5nPzE2OTY1MjIxNzU=",
                "url": "https://coin-images.coingecko.com/coins/images/22876/large/SOL_wh_small.png?1696522175",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/22876/large/SOL_wh_small.png?1696522175",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg3ZmM2NjUwMGM4NGE3NmFkN2U5YzkzNDM3YmZjNWFjMzNlMmRkYWU5",
        "address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
        "chain": "ETHEREUM",
        "symbol": "AAVE",
        "name": "Aave Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4N2ZjNjY1MDBjODRhNzZhZDdlOWM5MzQzN2JmYzVhYzMzZTJkZGFlOV9BYXZl",
            "name": "Aave",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMjY0NS9sYXJnZS9hYXZlLXRva2VuLXJvdW5kLnBuZz8xNzIwNDcyMzU0",
                "url": "https://coin-images.coingecko.com/coins/images/12645/large/aave-token-round.png?1720472354",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/12645/large/aave-token-round.png?1720472354",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhiMjNkODBmNWZlZmNkZGFhMjEyMjEyZjAyODAyMWI0MWRlZDQyOGNm",
        "address": "0xb23d80f5FefcDDaa212212F028021B41DEd428CF",
        "chain": "ETHEREUM",
        "symbol": "PRIME",
        "name": "Prime",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4YjIzZDgwZjVmZWZjZGRhYTIxMjIxMmYwMjgwMjFiNDFkZWQ0MjhjZl9FY2hlbG9uIFByaW1l",
            "name": "Echelon Prime",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yOTA1My9sYXJnZS9wcmltZS1sb2dvLXNtYWxsLWJvcmRlcl8lMjgyJTI5LnBuZz8xNjk2NTI4MDIw",
                "url": "https://coin-images.coingecko.com/coins/images/29053/large/prime-logo-small-border_%282%29.png?1696528020",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/29053/large/prime-logo-small-border_%282%29.png?1696528020",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg2ZGUwMzdlZjlhZDI3MjVlYjQwMTE4YmIxNzAyZWJiMjdlNGFlYjI0",
        "address": "0x6De037ef9aD2725EB40118Bb1702EBb27e4Aeb24",
        "chain": "ETHEREUM",
        "symbol": "RNDR",
        "name": "Render Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NmRlMDM3ZWY5YWQyNzI1ZWI0MDExOGJiMTcwMmViYjI3ZTRhZWIyNF9SZW5kZXI=",
            "name": "Render",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMTYzNi9sYXJnZS9ybmRyLnBuZz8xNjk2NTExNTI5",
                "url": "https://coin-images.coingecko.com/coins/images/11636/large/rndr.png?1696511529",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/11636/large/rndr.png?1696511529",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg1N2UxMTRiNjkxZGI3OTBjMzUyMDdiMmU2ODVkNGE0MzE4MWU2MDYx",
        "address": "0x57e114B691Db790C35207b2e685D4A43181e6061",
        "chain": "ETHEREUM",
        "symbol": "ENA",
        "name": "ENA",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NTdlMTE0YjY5MWRiNzkwYzM1MjA3YjJlNjg1ZDRhNDMxODFlNjA2MV9FdGhlbmE=",
            "name": "Ethena",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8zNjUzMC9sYXJnZS9ldGhlbmEucG5nPzE3MTE3MDE0MzY=",
                "url": "https://coin-images.coingecko.com/coins/images/36530/large/ethena.png?1711701436",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/36530/large/ethena.png?1711701436",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhhZWE0NmE2MDM2OGE3YmQwNjBlZWM3ZGY4Y2JhNDNiN2VmNDFhZDg1",
        "address": "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
        "chain": "ETHEREUM",
        "symbol": "FET",
        "name": "Fetch",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4YWVhNDZhNjAzNjhhN2JkMDYwZWVjN2RmOGNiYTQzYjdlZjQxYWQ4NV9BcnRpZmljaWFsIFN1cGVyaW50ZWxsaWdlbmNlIEFsbGlhbmNl",
            "name": "Artificial Superintelligence Alliance",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy81NjgxL2xhcmdlL0FTSS5wbmc/MTcxOTgyNzI4OQ==",
                "url": "https://coin-images.coingecko.com/coins/images/5681/large/ASI.png?1719827289",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/5681/large/ASI.png?1719827289",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhkNTMzYTk0OTc0MGJiMzMwNmQxMTljYzc3N2ZhOTAwYmEwMzRjZDUy",
        "address": "0xD533a949740bb3306d119CC777fa900bA034cd52",
        "chain": "ETHEREUM",
        "symbol": "CRV",
        "name": "Curve DAO Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZDUzM2E5NDk3NDBiYjMzMDZkMTE5Y2M3NzdmYTkwMGJhMDM0Y2Q1Ml9DdXJ2ZSBEQU8=",
            "name": "Curve DAO",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMjEyNC9sYXJnZS9DdXJ2ZS5wbmc/MTY5NjUxMTk2Nw==",
                "url": "https://coin-images.coingecko.com/coins/images/12124/large/Curve.png?1696511967",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/12124/large/Curve.png?1696511967",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg3NDIwYjRiOWEwMTEwY2RjNzFmYjcyMDkwODM0MGMwM2Y5YmMwM2Vj",
        "address": "0x7420B4b9a0110cdC71fB720908340C03F9Bc03EC",
        "chain": "ETHEREUM",
        "symbol": "JASMY",
        "name": "JasmyCoin",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NzQyMGI0YjlhMDExMGNkYzcxZmI3MjA5MDgzNDBjMDNmOWJjMDNlY19KYXNteUNvaW4=",
            "name": "JasmyCoin",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMzg3Ni9sYXJnZS9KQVNNWTIwMHgyMDAuanBnPzE2OTY1MTM2MjA=",
                "url": "https://coin-images.coingecko.com/coins/images/13876/large/JASMY200x200.jpg?1696513620",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/13876/large/JASMY200x200.jpg?1696513620",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg0NTgwNDg4MGRlMjI5MTNkYWZlMDlmNDk4MDg0OGVjZTZlY2JhZjc4",
        "address": "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
        "chain": "ETHEREUM",
        "symbol": "PAXG",
        "name": "Paxos Gold",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NDU4MDQ4ODBkZTIyOTEzZGFmZTA5ZjQ5ODA4NDhlY2U2ZWNiYWY3OF9QQVggR29sZA==",
            "name": "PAX Gold",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy85NTE5L2xhcmdlL3BheGdvbGQucG5nPzE2OTY1MDk2MDQ=",
                "url": "https://coin-images.coingecko.com/coins/images/9519/large/paxgold.png?1696509604",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/9519/large/paxgold.png?1696509604",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhjZjBjMTIyYzZiNzNmZjgwOWM2OTNkYjc2MWU3YmFlYmU2MmI2YTJl",
        "address": "0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E",
        "chain": "ETHEREUM",
        "symbol": "FLOKI",
        "name": "FLOKI",
        "decimals": 9,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4Y2YwYzEyMmM2YjczZmY4MDljNjkzZGI3NjFlN2JhZWJlNjJiNmEyZV9GTE9LSQ==",
            "name": "FLOKI",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNjc0Ni9sYXJnZS9QTkdfaW1hZ2UucG5nPzE2OTY1MTYzMTg=",
                "url": "https://coin-images.coingecko.com/coins/images/16746/large/PNG_image.png?1696516318",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/16746/large/PNG_image.png?1696516318",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg4NTNkOTU1YWNlZjgyMmRiMDU4ZWI4NTA1OTExZWQ3N2YxNzViOTll",
        "address": "0x853d955aCEf822Db058eb8505911ED77F175b99e",
        "chain": "ETHEREUM",
        "symbol": "FRAX",
        "name": "Frax",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ODUzZDk1NWFjZWY4MjJkYjA1OGViODUwNTkxMWVkNzdmMTc1Yjk5ZV9GcmF4",
            "name": "Frax",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMzQyMi9sYXJnZS9GUkFYX2ljb24ucG5nPzE2OTY1MTMxODI=",
                "url": "https://coin-images.coingecko.com/coins/images/13422/large/FRAX_icon.png?1696513182",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/13422/large/FRAX_icon.png?1696513182",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg2MTIzYjAwNDlmOTA0ZDczMGRiM2MzNmEzMTE2N2Q5ZDQxMjFmYTZi",
        "address": "0x6123B0049F904d730dB3C36a31167D9d4121fA6B",
        "chain": "ETHEREUM",
        "symbol": "RBN",
        "name": "Ribbon",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NjEyM2IwMDQ5ZjkwNGQ3MzBkYjNjMzZhMzExNjdkOWQ0MTIxZmE2Yl9SaWJib24gRmluYW5jZQ==",
            "name": "Ribbon Finance",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNTgyMy9sYXJnZS9yaWJib24ucG5nPzE3MDkxODY5NTY=",
                "url": "https://coin-images.coingecko.com/coins/images/15823/large/ribbon.png?1709186956",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/15823/large/ribbon.png?1709186956",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg5NWFkNjFiMGExNTBkNzkyMTlkY2Y2NGUxZTZjYzAxZjBiNjRjNGNl",
        "address": "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
        "chain": "ETHEREUM",
        "symbol": "SHIB",
        "name": "SHIBA INU",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4OTVhZDYxYjBhMTUwZDc5MjE5ZGNmNjRlMWU2Y2MwMWYwYjY0YzRjZV9TaGliYSBJbnU=",
            "name": "Shiba Inu",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMTkzOS9sYXJnZS9zaGliYS5wbmc/MTY5NjUxMTgwMA==",
                "url": "https://coin-images.coingecko.com/coins/images/11939/large/shiba.png?1696511800",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/11939/large/shiba.png?1696511800",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgzMzM0OWIyODIwNjViMDI4NGQ3NTZmMDU3N2ZiMzljMTU4ZjkzNWU2",
        "address": "0x33349B282065b0284d756F0577FB39c158F935e6",
        "chain": "ETHEREUM",
        "symbol": "MPL",
        "name": "Maple Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MzMzNDliMjgyMDY1YjAyODRkNzU2ZjA1NzdmYjM5YzE1OGY5MzVlNl9NYXBsZQ==",
            "name": "Maple",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNDA5Ny9sYXJnZS9NYXBsZV9Mb2dvX01hcmtfTWFwbGVfT3JhbmdlLnBuZz8xNjk2NTEzODE5",
                "url": "https://coin-images.coingecko.com/coins/images/14097/large/Maple_Logo_Mark_Maple_Orange.png?1696513819",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/14097/large/Maple_Logo_Mark_Maple_Orange.png?1696513819",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgxODA4NGZiYTY2NmEzM2QzNzU5MmZhMjYzM2ZkNDlhNzRkZDkzYTg4",
        "address": "0x18084fbA666a33d37592fA2633fD49a74DD93a88",
        "chain": "ETHEREUM",
        "symbol": "tBTC",
        "name": "tBTC v2",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MTgwODRmYmE2NjZhMzNkMzc1OTJmYTI2MzNmZDQ5YTc0ZGQ5M2E4OF90QlRD",
            "name": "tBTC",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMTIyNC9sYXJnZS8weDE4MDg0ZmJhNjY2YTMzZDM3NTkyZmEyNjMzZmQ0OWE3NGRkOTNhODgucG5nPzE2OTY1MTExNTU=",
                "url": "https://coin-images.coingecko.com/coins/images/11224/large/0x18084fba666a33d37592fa2633fd49a74dd93a88.png?1696511155",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/11224/large/0x18084fba666a33d37592fa2633fd49a74dd93a88.png?1696511155",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhhYTdhOWNhODdkMzY5NGI1NzU1ZjIxM2I1ZDA0MDk0YjhkMGYwYTZm",
        "address": "0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F",
        "chain": "ETHEREUM",
        "symbol": "TRAC",
        "name": "Trace Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4YWE3YTljYTg3ZDM2OTRiNTc1NWYyMTNiNWQwNDA5NGI4ZDBmMGE2Zl9PcmlnaW5UcmFpbA==",
            "name": "OriginTrail",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xODc3L2xhcmdlL1RSQUMuanBnPzE2OTY1MDI4NzM=",
                "url": "https://coin-images.coingecko.com/coins/images/1877/large/TRAC.jpg?1696502873",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/1877/large/TRAC.jpg?1696502873",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg2OTg1ODg0YzQzOTJkMzQ4NTg3YjE5Y2I5ZWFhZjE1N2YxMzI3MWNk",
        "address": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
        "chain": "ETHEREUM",
        "symbol": "ZRO",
        "name": "LayerZero",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4Njk4NTg4NGM0MzkyZDM0ODU4N2IxOWNiOWVhYWYxNTdmMTMyNzFjZF9MYXllclplcm8=",
            "name": "LayerZero",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yODIwNi9sYXJnZS9mdHhHOV9USl80MDB4NDAwLmpwZWc/MTY5NjUyNzIwOA==",
                "url": "https://coin-images.coingecko.com/coins/images/28206/large/ftxG9_TJ_400x400.jpeg?1696527208",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/28206/large/ftxG9_TJ_400x400.jpeg?1696527208",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg2MmQwYTg0NThlZDc3MTlmZGFmOTc4ZmU1OTI5YzZkMzQyYjBiZmNl",
        "address": "0x62D0A8458eD7719FDAF978fe5929C6D342B0bFcE",
        "chain": "ETHEREUM",
        "symbol": "BEAM",
        "name": "Beam",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NjJkMGE4NDU4ZWQ3NzE5ZmRhZjk3OGZlNTkyOWM2ZDM0MmIwYmZjZV9CZWFt",
            "name": "Beam",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8zMjQxNy9sYXJnZS9jaGFpbi1sb2dvLnBuZz8xNjk4MTE0Mzg0",
                "url": "https://coin-images.coingecko.com/coins/images/32417/large/chain-logo.png?1698114384",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/32417/large/chain-logo.png?1698114384",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhjMTgzNjAyMTdkOGY3YWI1ZTdjNTE2NTY2NzYxZWExMmNlN2Y5ZDcy",
        "address": "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
        "chain": "ETHEREUM",
        "symbol": "ENS",
        "name": "Ethereum Name Service",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4YzE4MzYwMjE3ZDhmN2FiNWU3YzUxNjU2Njc2MWVhMTJjZTdmOWQ3Ml9FdGhlcmV1bSBOYW1lIFNlcnZpY2U=",
            "name": "Ethereum Name Service",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xOTc4NS9sYXJnZS9hY2F0eFRtOF80MDB4NDAwLmpwZz8xNjk2NTE5MjA3",
                "url": "https://coin-images.coingecko.com/coins/images/19785/large/acatxTm8_400x400.jpg?1696519207",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/19785/large/acatxTm8_400x400.jpg?1696519207",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg1YWZlMzg1NTM1OGUxMTJiNTY0N2I5NTI3MDllNjE2NWUxYzFlZWVl",
        "address": "0x5aFE3855358E112B5647B952709E6165e1c1eEEe",
        "chain": "ETHEREUM",
        "symbol": "SAFE",
        "name": "Safe Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NWFmZTM4NTUzNThlMTEyYjU2NDdiOTUyNzA5ZTYxNjVlMWMxZWVlZV9TYWZl",
            "name": "Safe",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yNzAzMi9sYXJnZS9BcnRib2FyZF8xX2NvcHlfOGNpcmNsZS0xLnBuZz8xNjk2NTI2MDg0",
                "url": "https://coin-images.coingecko.com/coins/images/27032/large/Artboard_1_copy_8circle-1.png?1696526084",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/27032/large/Artboard_1_copy_8circle-1.png?1696526084",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg2MjZlODAzNmRlYjMzM2I0MDhiZTQ2OGY5NTFiZGI0MjQzM2NiZjE4",
        "address": "0x626E8036dEB333b408Be468F951bdB42433cBF18",
        "chain": "ETHEREUM",
        "symbol": "AIOZ",
        "name": "AIOZ Network",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NjI2ZTgwMzZkZWIzMzNiNDA4YmU0NjhmOTUxYmRiNDI0MzNjYmYxOF9BSU9aIE5ldHdvcms=",
            "name": "AIOZ Network",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNDYzMS9sYXJnZS9haW96LWxvZ28tMjAwLnBuZz8xNjk2NTE0MzA5",
                "url": "https://coin-images.coingecko.com/coins/images/14631/large/aioz-logo-200.png?1696514309",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/14631/large/aioz-logo-200.png?1696514309",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg3NjFkMzhlNWRkZjZjY2Y2Y2Y3YzU1NzU5ZDUyMTA3NTBiNWQ2MGYz",
        "address": "0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3",
        "chain": "ETHEREUM",
        "symbol": "ELON",
        "name": "Dogelon",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NzYxZDM4ZTVkZGY2Y2NmNmNmN2M1NTc1OWQ1MjEwNzUwYjVkNjBmM19Eb2dlbG9uIE1hcnM=",
            "name": "Dogelon Mars",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNDk2Mi9sYXJnZS82R3hjUFJvM180MDB4NDAwLmpwZz8xNjk2NTE0NjIy",
                "url": "https://coin-images.coingecko.com/coins/images/14962/large/6GxcPRo3_400x400.jpg?1696514622",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/14962/large/6GxcPRo3_400x400.jpg?1696514622",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg0Njc3MTlhZDA5MDI1ZmNjNmNmNmY4MzExNzU1ODA5ZDQ1YTVlNWYz",
        "address": "0x467719aD09025FcC6cF6F8311755809d45a5E5f3",
        "chain": "ETHEREUM",
        "symbol": "AXL",
        "name": "Axelar",
        "decimals": 6,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NDY3NzE5YWQwOTAyNWZjYzZjZjZmODMxMTc1NTgwOWQ0NWE1ZTVmM19BeGVsYXI=",
            "name": "Axelar",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yNzI3Ny9sYXJnZS9WLTY1X3hRMV80MDB4NDAwLmpwZWc/MTY5NjUyNjMyOQ==",
                "url": "https://coin-images.coingecko.com/coins/images/27277/large/V-65_xQ1_400x400.jpeg?1696526329",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/27277/large/V-65_xQ1_400x400.jpeg?1696526329",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg0ZTE1MzYxZmQ2YjRiYjYwOWZhNjNjODFhMmJlMTlkODczNzE3ODcw",
        "address": "0x4E15361FD6b4BB609Fa63C81A2be19d873717870",
        "chain": "ETHEREUM",
        "symbol": "FTM",
        "name": "Fantom Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NGUxNTM2MWZkNmI0YmI2MDlmYTYzYzgxYTJiZTE5ZDg3MzcxNzg3MF9XcmFwcGVkIEZhbnRvbQ==",
            "name": "Wrapped Fantom",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNjAzNi9sYXJnZS9GYW50b20ucG5nPzE2OTY1MTU2NDY=",
                "url": "https://coin-images.coingecko.com/coins/images/16036/large/Fantom.png?1696515646",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/16036/large/Fantom.png?1696515646",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg0ZTNmYmQ1NmNkNTZjM2U3MmMxNDAzZTEwM2I0NWRiOWRhNWI5ZDJi",
        "address": "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
        "chain": "ETHEREUM",
        "symbol": "CVX",
        "name": "Convex Finance",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NGUzZmJkNTZjZDU2YzNlNzJjMTQwM2UxMDNiNDVkYjlkYTViOWQyYl9Db252ZXggRmluYW5jZQ==",
            "name": "Convex Finance",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNTU4NS9sYXJnZS9jb252ZXgucG5nPzE2OTY1MTUyMjE=",
                "url": "https://coin-images.coingecko.com/coins/images/15585/large/convex.png?1696515221",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/15585/large/convex.png?1696515221",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg3ZGQ5YzVjYmEwNWUxNTFjODk1ZmRlMWNmMzU1YzlhMWQ1ZGE2NDI5",
        "address": "0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429",
        "chain": "ETHEREUM",
        "symbol": "GLM",
        "name": "Golem Network Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4N2RkOWM1Y2JhMDVlMTUxYzg5NWZkZTFjZjM1NWM5YTFkNWRhNjQyOV9Hb2xlbQ==",
            "name": "Golem",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy81NDIvbGFyZ2UvR29sZW1fU3VibWFya19Qb3NpdGl2ZV9SR0IucG5nPzE2OTY1MDE3NjE=",
                "url": "https://coin-images.coingecko.com/coins/images/542/large/Golem_Submark_Positive_RGB.png?1696501761",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/542/large/Golem_Submark_Positive_RGB.png?1696501761",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhlMjhiM2IzMmI2YzM0NWEzNGZmNjQ2NzQ2MDYxMjRkZDVhY2VjYTMw",
        "address": "0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30",
        "chain": "ETHEREUM",
        "symbol": "INJ",
        "name": "Injective Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZTI4YjNiMzJiNmMzNDVhMzRmZjY0Njc0NjA2MTI0ZGQ1YWNlY2EzMF9JbmplY3RpdmU=",
            "name": "Injective",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMjg4Mi9sYXJnZS9TZWNvbmRhcnlfU3ltYm9sLnBuZz8xNjk2NTEyNjcw",
                "url": "https://coin-images.coingecko.com/coins/images/12882/large/Secondary_Symbol.png?1696512670",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/12882/large/Secondary_Symbol.png?1696512670",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgzNDcyYTVhNzE5NjU0OTlhY2Q4MTk5N2E1NGJiYThkODUyYzZlNTNk",
        "address": "0x3472A5A71965499acd81997a54BBA8D852C6E53d",
        "chain": "ETHEREUM",
        "symbol": "BADGER",
        "name": "Badger",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MzQ3MmE1YTcxOTY1NDk5YWNkODE5OTdhNTRiYmE4ZDg1MmM2ZTUzZF9CYWRnZXI=",
            "name": "Badger",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMzI4Ny9sYXJnZS9iYWRnZXJfZGFvX2xvZ28uanBnPzE2OTY1MTMwNTk=",
                "url": "https://coin-images.coingecko.com/coins/images/13287/large/badger_dao_logo.jpg?1696513059",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/13287/large/badger_dao_logo.jpg?1696513059",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg5NjdkYTQwNDhjZDA3YWIzNzg1NWMwOTBhYWYzNjZlNGNlMWI5ZjQ4",
        "address": "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
        "chain": "ETHEREUM",
        "symbol": "OCEAN",
        "name": "Ocean Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4OTY3ZGE0MDQ4Y2QwN2FiMzc4NTVjMDkwYWFmMzY2ZTRjZTFiOWY0OF9PY2VhbiBQcm90b2NvbA==",
            "name": "Ocean Protocol",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8zNjg3L2xhcmdlL29jZWFuLXByb3RvY29sLWxvZ28uanBnPzE2OTY1MDQzNjM=",
                "url": "https://coin-images.coingecko.com/coins/images/3687/large/ocean-protocol-logo.jpg?1696504363",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/3687/large/ocean-protocol-logo.jpg?1696504363",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhlNTNlYzcyN2RiZGViOWUyZDU0NTZjM2JlNDBjZmYwMzFhYjQwYTU1",
        "address": "0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55",
        "chain": "ETHEREUM",
        "symbol": "SUPER",
        "name": "SuperFarm",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZTUzZWM3MjdkYmRlYjllMmQ1NDU2YzNiZTQwY2ZmMDMxYWI0MGE1NV9TdXBlclZlcnNl",
            "name": "SuperVerse",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNDA0MC9sYXJnZS9TVi1Mb2dvLTIwMHgyMDAucG5nPzE3MDY4ODAzMTI=",
                "url": "https://coin-images.coingecko.com/coins/images/14040/large/SV-Logo-200x200.png?1706880312",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/14040/large/SV-Logo-200x200.png?1706880312",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhjOTQ0ZTkwYzY0YjJjMDc2NjJhMjkyYmU2MjQ0YmRmMDVjZGE0NGE3",
        "address": "0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
        "chain": "ETHEREUM",
        "symbol": "GRT",
        "name": "Graph Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4Yzk0NGU5MGM2NGIyYzA3NjYyYTI5MmJlNjI0NGJkZjA1Y2RhNDRhN19UaGUgR3JhcGg=",
            "name": "The Graph",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMzM5Ny9sYXJnZS9HcmFwaF9Ub2tlbi5wbmc/MTY5NjUxMzE1OQ==",
                "url": "https://coin-images.coingecko.com/coins/images/13397/large/Graph_Token.png?1696513159",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/13397/large/Graph_Token.png?1696513159",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg3MGU4ZGU3M2NlNTM4ZGEyYmVlZDM1ZDE0MTg3ZjY5NTlhOGVjYTk2",
        "address": "0x70e8dE73cE538DA2bEEd35d14187F6959a8ecA96",
        "chain": "ETHEREUM",
        "symbol": "XSGD",
        "name": "XSGD",
        "decimals": 6,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NzBlOGRlNzNjZTUzOGRhMmJlZWQzNWQxNDE4N2Y2OTU5YThlY2E5Nl9YU0dE",
            "name": "XSGD",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMjgzMi9sYXJnZS9TdHJhaXRzWF9TaW5nYXBvcmVfRG9sbGFyXyUyOFhTR0QlMjlfVG9rZW5fTG9nby5wbmc/MTY5NjUxMjYyMw==",
                "url": "https://coin-images.coingecko.com/coins/images/12832/large/StraitsX_Singapore_Dollar_%28XSGD%29_Token_Logo.png?1696512623",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/12832/large/StraitsX_Singapore_Dollar_%28XSGD%29_Token_Logo.png?1696512623",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhmNTdlN2U3YzIzOTc4YzNjYWVjM2MzNTQ4ZTNkNjE1YzM0NmU3OWZm",
        "address": "0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF",
        "chain": "ETHEREUM",
        "symbol": "IMX",
        "name": "Immutable X",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZjU3ZTdlN2MyMzk3OGMzY2FlYzNjMzU0OGUzZDYxNWMzNDZlNzlmZl9JbW11dGFibGU=",
            "name": "Immutable",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNzIzMy9sYXJnZS9pbW11dGFibGVYLXN5bWJvbC1CTEstUkdCLnBuZz8xNjk2NTE2Nzg3",
                "url": "https://coin-images.coingecko.com/coins/images/17233/large/immutableX-symbol-BLK-RGB.png?1696516787",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/17233/large/immutableX-symbol-BLK-RGB.png?1696516787",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgwOTU0OTA2ZGEwYmYzMmQ1NDc5ZTI1ZjQ2MDU2ZDIyZjA4NDY0Y2Fi",
        "address": "0x0954906da0Bf32d5479e25f46056d22f08464cab",
        "chain": "ETHEREUM",
        "symbol": "INDEX",
        "name": "Index",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MDk1NDkwNmRhMGJmMzJkNTQ3OWUyNWY0NjA1NmQyMmYwODQ2NGNhYl9JbmRleCBDb29wZXJhdGl2ZQ==",
            "name": "Index Cooperative",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMjcyOS9sYXJnZS9pbmRleC5wbmc/MTY5NjUxMjUyOA==",
                "url": "https://coin-images.coingecko.com/coins/images/12729/large/index.png?1696512528",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/12729/large/index.png?1696512528",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhmZTBjMzAwNjViMzg0ZjA1NzYxZjE1ZDBjYzg5OWQ0ZjlmOWNjMGVi",
        "address": "0xFe0c30065B384F05761f15d0CC899D4F9F9Cc0eB",
        "chain": "ETHEREUM",
        "symbol": "ETHFI",
        "name": "ether.fi governance token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZmUwYzMwMDY1YjM4NGYwNTc2MWYxNWQwY2M4OTlkNGY5ZjljYzBlYl9FdGhlci5maQ==",
            "name": "Ether.fi",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8zNTk1OC9sYXJnZS9ldGhlcmZpLmpwZWc/MTcxMDI1NDU2Mg==",
                "url": "https://coin-images.coingecko.com/coins/images/35958/large/etherfi.jpeg?1710254562",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/35958/large/etherfi.jpeg?1710254562",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhkZGIzNDIyNDk3ZTYxZTEzNTQzYmVhMDY5ODljMDc4OTExNzU1NWM1",
        "address": "0xDDB3422497E61e13543BeA06989C0789117555c5",
        "chain": "ETHEREUM",
        "symbol": "COTI",
        "name": "COTI Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZGRiMzQyMjQ5N2U2MWUxMzU0M2JlYTA2OTg5YzA3ODkxMTc1NTVjNV9DT1RJ",
            "name": "COTI",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yOTYyL2xhcmdlL0NvdGkucG5nPzE2OTY1MDM3MDU=",
                "url": "https://coin-images.coingecko.com/coins/images/2962/large/Coti.png?1696503705",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/2962/large/Coti.png?1696503705",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhjMDExYTczZWU4NTc2ZmI0NmY1ZTFjNTc1MWNhM2I5ZmUwYWYyYTZm",
        "address": "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
        "chain": "ETHEREUM",
        "symbol": "SNX",
        "name": "Synthetix Network Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4YzAxMWE3M2VlODU3NmZiNDZmNWUxYzU3NTFjYTNiOWZlMGFmMmE2Zl9TeW50aGV0aXggTmV0d29yaw==",
            "name": "Synthetix Network",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8zNDA2L2xhcmdlL1NOWC5wbmc/MTY5NjUwNDEwMw==",
                "url": "https://coin-images.coingecko.com/coins/images/3406/large/SNX.png?1696504103",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/3406/large/SNX.png?1696504103",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg3ZDFhZmE3YjcxOGZiODkzZGIzMGEzYWJjMGNmYzYwOGFhY2ZlYmIw",
        "address": "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
        "chain": "ETHEREUM",
        "symbol": "MATIC",
        "name": "Matic Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4N2QxYWZhN2I3MThmYjg5M2RiMzBhM2FiYzBjZmM2MDhhYWNmZWJiMF9Qb2x5Z29u",
            "name": "Polygon",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy80NzEzL2xhcmdlL3BvbHlnb24ucG5nPzE2OTgyMzM3NDU=",
                "url": "https://coin-images.coingecko.com/coins/images/4713/large/polygon.png?1698233745",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/4713/large/polygon.png?1698233745",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg3NjEzYzQ4ZTBjZDUwZTQyZGQ5YmYwZjZjMjM1MDYzMTQ1ZjZmOGRj",
        "address": "0x7613C48E0cd50E42dD9Bf0f6c235063145f6f8DC",
        "chain": "ETHEREUM",
        "symbol": "PIRATE",
        "name": "Pirate Nation Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NzYxM2M0OGUwY2Q1MGU0MmRkOWJmMGY2YzIzNTA2MzE0NWY2ZjhkY19QaXJhdGUgTmF0aW9uIFRva2Vu",
            "name": "Pirate Nation Token",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8zODUyNC9sYXJnZS9fUGlyYXRlX1RyYW5zcGFyZW50XzIwMHgyMDAucG5nPzE3MTc5NDc4MTM=",
                "url": "https://coin-images.coingecko.com/coins/images/38524/large/_Pirate_Transparent_200x200.png?1717947813",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/38524/large/_Pirate_Transparent_200x200.png?1717947813",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhiNTA3MjFiY2Y4ZDY2NGMzMDQxMmNmYmM2Y2Y3YTE1MTQ1MjM0YWQx",
        "address": "0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1",
        "chain": "ETHEREUM",
        "symbol": "ARB",
        "name": "Arbitrum",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4YjUwNzIxYmNmOGQ2NjRjMzA0MTJjZmJjNmNmN2ExNTE0NTIzNGFkMV9BcmJpdHJ1bQ==",
            "name": "Arbitrum",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNjU0Ny9sYXJnZS9hcmIuanBnPzE3MjEzNTgyNDI=",
                "url": "https://coin-images.coingecko.com/coins/images/16547/large/arb.jpg?1721358242",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/16547/large/arb.jpg?1721358242",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgzMWM4ZWFjYmZmZGQ4NzVjNzRiOTRiMDc3ODk1YmQ3OGNmMWU2NGEz",
        "address": "0x31c8EAcBFFdD875c74b94b077895Bd78CF1E64A3",
        "chain": "ETHEREUM",
        "symbol": "RAD",
        "name": "Radicle",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MzFjOGVhY2JmZmRkODc1Yzc0Yjk0YjA3Nzg5NWJkNzhjZjFlNjRhM19SYWR3b3Jrcw==",
            "name": "Radworks",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNDAxMy9sYXJnZS9yYWRpY2xlLnBuZz8xNjk2NTEzNzQx",
                "url": "https://coin-images.coingecko.com/coins/images/14013/large/radicle.png?1696513741",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/14013/large/radicle.png?1696513741",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgwMzdhNTRhYWIwNjI2MjhjOWJiYWUxZmRiMTU4M2MxOTU1ODVmZTQx",
        "address": "0x037A54AaB062628C9Bbae1FDB1583c195585fe41",
        "chain": "ETHEREUM",
        "symbol": "LCX",
        "name": "LCX",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MDM3YTU0YWFiMDYyNjI4YzliYmFlMWZkYjE1ODNjMTk1NTg1ZmU0MV9MQ1g=",
            "name": "LCX",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy85OTg1L2xhcmdlL3pSUFN1XzBvXzQwMHg0MDAuanBnPzE2OTY1MTAwMjM=",
                "url": "https://coin-images.coingecko.com/coins/images/9985/large/zRPSu_0o_400x400.jpg?1696510023",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/9985/large/zRPSu_0o_400x400.jpg?1696510023",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhmNTU4MWRmZWZkOGZiMGU0YWVjNTI2YmU2NTljZmFiMWY4Yzc4MWRh",
        "address": "0xF5581dFeFD8Fb0e4aeC526bE659CFaB1f8c781dA",
        "chain": "ETHEREUM",
        "symbol": "HOPR",
        "name": "HOPR Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZjU1ODFkZmVmZDhmYjBlNGFlYzUyNmJlNjU5Y2ZhYjFmOGM3ODFkYV9IT1BS",
            "name": "HOPR",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNDA2MS9sYXJnZS9TaGFyZWRfSE9QUl9sb2dvXzUxMnB4LnBuZz8xNjk2NTEzNzg2",
                "url": "https://coin-images.coingecko.com/coins/images/14061/large/Shared_HOPR_logo_512px.png?1696513786",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/14061/large/Shared_HOPR_logo_512px.png?1696513786",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhjMjIxYjdlNjVmZmM4MGRlMjM0YmJiNjY2N2FiZGQ0NjU5M2QzNGYw",
        "address": "0xc221b7E65FfC80DE234bbB6667aBDd46593D34F0",
        "chain": "ETHEREUM",
        "symbol": "wCFG",
        "name": "Wrapped Centrifuge",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4YzIyMWI3ZTY1ZmZjODBkZTIzNGJiYjY2NjdhYmRkNDY1OTNkMzRmMF9XcmFwcGVkIENlbnRyaWZ1Z2U=",
            "name": "Wrapped Centrifuge",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNzEwNi9sYXJnZS9XQ0ZHLmpwZz8xNjk2NTE2NjY3",
                "url": "https://coin-images.coingecko.com/coins/images/17106/large/WCFG.jpg?1696516667",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/17106/large/WCFG.jpg?1696516667",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhkYWIzOTZjY2YzZDg0Y2YyZDA3YzQ0NTRlMTBjOGE2ZjViMDA4ZDJi",
        "address": "0xdab396cCF3d84Cf2D07C4454e10C8A6F5b008D2b",
        "chain": "ETHEREUM",
        "symbol": "GFI",
        "name": "Goldfinch",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZGFiMzk2Y2NmM2Q4NGNmMmQwN2M0NDU0ZTEwYzhhNmY1YjAwOGQyYl9Hb2xkZmluY2g=",
            "name": "Goldfinch",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xOTA4MS9sYXJnZS9HT0xERklOQ0gucG5nPzE2OTY1MTg1MzE=",
                "url": "https://coin-images.coingecko.com/coins/images/19081/large/GOLDFINCH.png?1696518531",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/19081/large/GOLDFINCH.png?1696518531",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg1YTk4ZmNiZWE1MTZjZjA2ODU3MjE1Nzc5ZmQ4MTJjYTNiZWYxYjMy",
        "address": "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
        "chain": "ETHEREUM",
        "symbol": "LDO",
        "name": "Lido DAO Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NWE5OGZjYmVhNTE2Y2YwNjg1NzIxNTc3OWZkODEyY2EzYmVmMWIzMl9MaWRvIERBTw==",
            "name": "Lido DAO",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMzU3My9sYXJnZS9MaWRvX0RBTy5wbmc/MTY5NjUxMzMyNg==",
                "url": "https://coin-images.coingecko.com/coins/images/13573/large/Lido_DAO.png?1696513326",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/13573/large/Lido_DAO.png?1696513326",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgxYmJlOTczYmVmM2E5NzdmYzUxY2JlZDcwM2U4ZmZkZWZlMDAxZmVk",
        "address": "0x1Bbe973BeF3a977Fc51CbED703E8ffDEfE001Fed",
        "chain": "ETHEREUM",
        "symbol": "PORTAL",
        "name": "Portal",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MWJiZTk3M2JlZjNhOTc3ZmM1MWNiZWQ3MDNlOGZmZGVmZTAwMWZlZF9Qb3J0YWw=",
            "name": "Portal",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8zNTQzNi9sYXJnZS9wb3J0YWwuanBlZz8xNzA4NTkwMjU0",
                "url": "https://coin-images.coingecko.com/coins/images/35436/large/portal.jpeg?1708590254",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/35436/large/portal.jpeg?1708590254",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhiYmMyYWUxM2IyM2Q3MTVjMzA3MjBmMDc5ZmNkOWI0YTc0MDkzNTA1",
        "address": "0xBBc2AE13b23d715c30720F079fcd9B4a74093505",
        "chain": "ETHEREUM",
        "symbol": "ERN",
        "name": "@EthernityChain $ERN Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4YmJjMmFlMTNiMjNkNzE1YzMwNzIwZjA3OWZjZDliNGE3NDA5MzUwNV9FdGhlcm5pdHkgQ2hhaW4=",
            "name": "Ethernity Chain",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNDIzOC9sYXJnZS9sb2dvX2JsYWNrLnBuZz8xNzE1MTk4MTY0",
                "url": "https://coin-images.coingecko.com/coins/images/14238/large/logo_black.png?1715198164",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/14238/large/logo_black.png?1715198164",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg0YTIyMGU2MDk2YjI1ZWFkYjg4MzU4Y2I0NDA2OGEzMjQ4MjU0Njc1",
        "address": "0x4a220E6096B25EADb88358cb44068A3248254675",
        "chain": "ETHEREUM",
        "symbol": "QNT",
        "name": "Quant",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NGEyMjBlNjA5NmIyNWVhZGI4ODM1OGNiNDQwNjhhMzI0ODI1NDY3NV9RdWFudA==",
            "name": "Quant",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8zMzcwL2xhcmdlLzVaT3U3YnJYXzQwMHg0MDAuanBnPzE2OTY1MDQwNzA=",
                "url": "https://coin-images.coingecko.com/coins/images/3370/large/5ZOu7brX_400x400.jpg?1696504070",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/3370/large/5ZOu7brX_400x400.jpg?1696504070",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhhZjUxOTFiMGRlMjc4YzcyODZkNmM3Y2M2YWI2YmI4YTczYmEyY2Q2",
        "address": "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
        "chain": "ETHEREUM",
        "symbol": "STG",
        "name": "StargateToken",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4YWY1MTkxYjBkZTI3OGM3Mjg2ZDZjN2NjNmFiNmJiOGE3M2JhMmNkNl9TdGFyZ2F0ZSBGaW5hbmNl",
            "name": "Stargate Finance",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yNDQxMy9sYXJnZS9TVEdfTE9HTy5wbmc/MTY5NjUyMzU5NQ==",
                "url": "https://coin-images.coingecko.com/coins/images/24413/large/STG_LOGO.png?1696523595",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/24413/large/STG_LOGO.png?1696523595",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg0NjkxOTM3YTc1MDg4NjBmODc2YzljMGEyYTYxN2U3ZDllOTQ1ZDRi",
        "address": "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
        "chain": "ETHEREUM",
        "symbol": "WOO",
        "name": "Wootrade Network",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NDY5MTkzN2E3NTA4ODYwZjg3NmM5YzBhMmE2MTdlN2Q5ZTk0NWQ0Yl9XT08=",
            "name": "WOO",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMjkyMS9sYXJnZS9XT09fTG9nb3NfMjAyM19Qcm9maWxlX1BpY19XT08ucG5nPzE2OTY1MTI3MDk=",
                "url": "https://coin-images.coingecko.com/coins/images/12921/large/WOO_Logos_2023_Profile_Pic_WOO.png?1696512709",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/12921/large/WOO_Logos_2023_Profile_Pic_WOO.png?1696512709",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg0ZDIyNDQ1MjgwMWFjZWQ4YjJmMGFlYmUxNTUzNzliYjVkNTk0Mzgx",
        "address": "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
        "chain": "ETHEREUM",
        "symbol": "APE",
        "name": "ApeCoin",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NGQyMjQ0NTI4MDFhY2VkOGIyZjBhZWJlMTU1Mzc5YmI1ZDU5NDM4MV9BcGVDb2lu",
            "name": "ApeCoin",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yNDM4My9sYXJnZS9hcGVjb2luLmpwZz8xNjk2NTIzNTY2",
                "url": "https://coin-images.coingecko.com/coins/images/24383/large/apecoin.jpg?1696523566",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/24383/large/apecoin.jpg?1696523566",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgwNTZmZDQwOWUxZDdhMTI0YmQ3MDE3NDU5ZGZlYTJmMzg3YjZkNWNk",
        "address": "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
        "chain": "ETHEREUM",
        "symbol": "GUSD",
        "name": "Gemini dollar",
        "decimals": 2,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MDU2ZmQ0MDllMWQ3YTEyNGJkNzAxNzQ1OWRmZWEyZjM4N2I2ZDVjZF9HZW1pbmkgRG9sbGFy",
            "name": "Gemini Dollar",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy81OTkyL2xhcmdlL2dlbWluaS1kb2xsYXItZ3VzZC5wbmc/MTY5NjUwNjQwOA==",
                "url": "https://coin-images.coingecko.com/coins/images/5992/large/gemini-dollar-gusd.png?1696506408",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/5992/large/gemini-dollar-gusd.png?1696506408",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgwYmIyMTdlNDBmOGE1Y2I3OWFkZjA0ZTFhYWI2MGU1YWJkMGRmYzFl",
        "address": "0x0bb217E40F8a5Cb79Adf04E1aAb60E5abd0dfC1e",
        "chain": "ETHEREUM",
        "symbol": "SWFTC",
        "name": "SwftCoin",
        "decimals": 8,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MGJiMjE3ZTQwZjhhNWNiNzlhZGYwNGUxYWFiNjBlNWFiZDBkZmMxZV9TV0ZUQ09JTg==",
            "name": "SWFTCOIN",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yMzQ2L2xhcmdlL1NXRlRDb2luLmpwZz8xNjk2NTAzMjIz",
                "url": "https://coin-images.coingecko.com/coins/images/2346/large/SWFTCoin.jpg?1696503223",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/2346/large/SWFTCoin.jpg?1696503223",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhiOThkNGM5NzQyNWQ5OTA4ZTY2ZTUzYTZmZGY2NzNhY2NhMGJlOTg2",
        "address": "0xB98d4C97425d9908E66E53A6fDf673ACcA0BE986",
        "chain": "ETHEREUM",
        "symbol": "ABT",
        "name": "ArcBlock",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4Yjk4ZDRjOTc0MjVkOTkwOGU2NmU1M2E2ZmRmNjczYWNjYTBiZTk4Nl9BcmNibG9jaw==",
            "name": "Arcblock",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yMzQxL2xhcmdlL2FyY2Jsb2NrLnBuZz8xNjk2NTAzMjIw",
                "url": "https://coin-images.coingecko.com/coins/images/2341/large/arcblock.png?1696503220",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/2341/large/arcblock.png?1696503220",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhjMDBlOTRjYjY2MmMzNTIwMjgyZTZmNTcxNzIxNDAwNGE3ZjI2ODg4",
        "address": "0xc00e94Cb662C3520282E6f5717214004A7f26888",
        "chain": "ETHEREUM",
        "symbol": "COMP",
        "name": "Compound",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4YzAwZTk0Y2I2NjJjMzUyMDI4MmU2ZjU3MTcyMTQwMDRhN2YyNjg4OF9Db21wb3VuZA==",
            "name": "Compound",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMDc3NS9sYXJnZS9DT01QLnBuZz8xNjk2NTEwNzM3",
                "url": "https://coin-images.coingecko.com/coins/images/10775/large/COMP.png?1696510737",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/10775/large/COMP.png?1696510737",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhkMWQyZWIxYjFlOTBiNjM4NTg4NzI4YjQxMzAxMzdkMjYyYzg3Y2Fl",
        "address": "0xd1d2Eb1B1e90B638588728b4130137D262C87cae",
        "chain": "ETHEREUM",
        "symbol": "GALA",
        "name": "Gala",
        "decimals": 8,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZDFkMmViMWIxZTkwYjYzODU4ODcyOGI0MTMwMTM3ZDI2MmM4N2NhZV9HQUxB",
            "name": "GALA",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMjQ5My9sYXJnZS9HQUxBX3Rva2VuX2ltYWdlXy1fMjAwUE5HLnBuZz8xNzA5NzI1ODY5",
                "url": "https://coin-images.coingecko.com/coins/images/12493/large/GALA_token_image_-_200PNG.png?1709725869",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/12493/large/GALA_token_image_-_200PNG.png?1709725869",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgyNzcwMmEyNjEyNmUwYjM3MDJhZjYzZWUwOWFjNGQxYTA4NGVmNjI4",
        "address": "0x27702a26126e0B3702af63Ee09aC4d1A084EF628",
        "chain": "ETHEREUM",
        "symbol": "ALEPH",
        "name": "aleph.im v2",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4Mjc3MDJhMjYxMjZlMGIzNzAyYWY2M2VlMDlhYzRkMWEwODRlZjYyOF9BbGVwaC5pbQ==",
            "name": "Aleph.im",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMTY3Ni9sYXJnZS9BbGVwaC1Mb2dvLUJXLnBuZz8xNjk2NTExNTY2",
                "url": "https://coin-images.coingecko.com/coins/images/11676/large/Aleph-Logo-BW.png?1696511566",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/11676/large/Aleph-Logo-BW.png?1696511566",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg2ODEwZTc3Njg4MGMwMjkzM2Q0N2RiMWI5ZmMwNTkwOGU1Mzg2Yjk2",
        "address": "0x6810e776880C02933D47DB1b9fc05908e5386b96",
        "chain": "ETHEREUM",
        "symbol": "GNO",
        "name": "Gnosis Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NjgxMGU3NzY4ODBjMDI5MzNkNDdkYjFiOWZjMDU5MDhlNTM4NmI5Nl9Hbm9zaXM=",
            "name": "Gnosis",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy82NjIvbGFyZ2UvbG9nb19zcXVhcmVfc2ltcGxlXzMwMHB4LnBuZz8xNjk2NTAxODU0",
                "url": "https://coin-images.coingecko.com/coins/images/662/large/logo_square_simple_300px.png?1696501854",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/662/large/logo_square_simple_300px.png?1696501854",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhiNjRlZjUxYzg4ODk3MmM5MDhjZmFjZjU5YjQ3YzFhZmJjMGFiOGFj",
        "address": "0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC",
        "chain": "ETHEREUM",
        "symbol": "STORJ",
        "name": "StorjToken",
        "decimals": 8,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4YjY0ZWY1MWM4ODg5NzJjOTA4Y2ZhY2Y1OWI0N2MxYWZiYzBhYjhhY19TdG9yag==",
            "name": "Storj",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy85NDkvbGFyZ2Uvc3RvcmoucG5nPzE2OTY1MDIwNjU=",
                "url": "https://coin-images.coingecko.com/coins/images/949/large/storj.png?1696502065",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/949/large/storj.png?1696502065",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgxYTdlNGU2Mzc3OGI0ZjEyYTE5OWMwNjJmM2VmZGQyODhhZmNiY2U4",
        "address": "0x1a7e4e63778B4f12a199C062f3eFdD288afCBce8",
        "chain": "ETHEREUM",
        "symbol": "agEUR",
        "name": "agEUR",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MWE3ZTRlNjM3NzhiNGYxMmExOTljMDYyZjNlZmRkMjg4YWZjYmNlOF9FVVJB",
            "name": "EURA",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xOTQ3OS9sYXJnZS9hZ0VVUi00LnBuZz8xNzEwNzI2MjE4",
                "url": "https://coin-images.coingecko.com/coins/images/19479/large/agEUR-4.png?1710726218",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/19479/large/agEUR-4.png?1710726218",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg5ZTMyYjEzY2U3ZjJlODBhMDE5MzJiNDI1NTM2NTJlMDUzZDZlZDhl",
        "address": "0x9E32b13ce7f2E80A01932B42553652E053D6ed8e",
        "chain": "ETHEREUM",
        "symbol": "Metis",
        "name": "Metis Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4OWUzMmIxM2NlN2YyZTgwYTAxOTMyYjQyNTUzNjUyZTA1M2Q2ZWQ4ZV9NZXRpcw==",
            "name": "Metis",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNTU5NS9sYXJnZS9NZXRpc19CbGFja19CZy5wbmc/MTcwMjk2ODE5Mg==",
                "url": "https://coin-images.coingecko.com/coins/images/15595/large/Metis_Black_Bg.png?1702968192",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/15595/large/Metis_Black_Bg.png?1702968192",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhmYjdiNDU2NDQwMmU1NTAwZGI1YmI2ZDYzYWU2NzEzMDI3NzdjNzVh",
        "address": "0xfB7B4564402E5500dB5bB6d63Ae671302777C75a",
        "chain": "ETHEREUM",
        "symbol": "DEXT",
        "name": "DEXTools",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZmI3YjQ1NjQ0MDJlNTUwMGRiNWJiNmQ2M2FlNjcxMzAyNzc3Yzc1YV9EZXhUb29scw==",
            "name": "DexTools",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMTYwMy9sYXJnZS9kZXh0LnBuZz8xNjk2NTExNDk4",
                "url": "https://coin-images.coingecko.com/coins/images/11603/large/dext.png?1696511498",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/11603/large/dext.png?1696511498",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg2OWFmODFlNzNhNzNiNDBhZGY0ZjNkNDIyM2NkOWIxZWNlNjIzMDc0",
        "address": "0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074",
        "chain": "ETHEREUM",
        "symbol": "MASK",
        "name": "Mask Network",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NjlhZjgxZTczYTczYjQwYWRmNGYzZDQyMjNjZDliMWVjZTYyMzA3NF9NYXNrIE5ldHdvcms=",
            "name": "Mask Network",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNDA1MS9sYXJnZS9NYXNrX05ldHdvcmsuanBnPzE2OTY1MTM3NzY=",
                "url": "https://coin-images.coingecko.com/coins/images/14051/large/Mask_Network.jpg?1696513776",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/14051/large/Mask_Network.jpg?1696513776",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhlNDFkMjQ4OTU3MWQzMjIxODkyNDZkYWZhNWViZGUxZjQ2OTlmNDk4",
        "address": "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
        "chain": "ETHEREUM",
        "symbol": "ZRX",
        "name": "0x Protocol Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZTQxZDI0ODk1NzFkMzIyMTg5MjQ2ZGFmYTVlYmRlMWY0Njk5ZjQ5OF8weCBQcm90b2NvbA==",
            "name": "0x Protocol",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy84NjMvbGFyZ2UvMHgucG5nPzE2OTY1MDE5OTY=",
                "url": "https://coin-images.coingecko.com/coins/images/863/large/0x.png?1696501996",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/863/large/0x.png?1696501996",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgwM2FiNDU4NjM0OTEwYWFkMjBlZjVmMWM4ZWU5NmYxZDZhYzU0OTE5",
        "address": "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
        "chain": "ETHEREUM",
        "symbol": "RAI",
        "name": "Rai Reflex Index",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MDNhYjQ1ODYzNDkxMGFhZDIwZWY1ZjFjOGVlOTZmMWQ2YWM1NDkxOV9SYWkgUmVmbGV4IEluZGV4",
            "name": "Rai Reflex Index",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNDAwNC9sYXJnZS9SQUktbG9nby1jb2luLnBuZz8xNjk2NTEzNzMz",
                "url": "https://coin-images.coingecko.com/coins/images/14004/large/RAI-logo-coin.png?1696513733",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/14004/large/RAI-logo-coin.png?1696513733",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg1NTI5NmY2OWY0MGVhNmQyMGU0Nzg1MzNjMTVhNmIwOGI2NTRlNzU4",
        "address": "0x55296f69f40Ea6d20E478533C15A6B08B654E758",
        "chain": "ETHEREUM",
        "symbol": "XYO",
        "name": "XY Oracle",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NTUyOTZmNjlmNDBlYTZkMjBlNDc4NTMzYzE1YTZiMDhiNjU0ZTc1OF9YWU8gTmV0d29yaw==",
            "name": "XYO Network",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy80NTE5L2xhcmdlL1hZT19OZXR3b3JrLWxvZ28ucG5nPzE2OTY1MDUxMDM=",
                "url": "https://coin-images.coingecko.com/coins/images/4519/large/XYO_Network-logo.png?1696505103",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/4519/large/XYO_Network-logo.png?1696505103",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg4ODkwOWQ0ODk2NzhkZDE3YWE2ZDk2MDlmODliMDQxOWJmNzhmZDlh",
        "address": "0x88909D489678dD17aA6D9609F89B0419Bf78FD9a",
        "chain": "ETHEREUM",
        "symbol": "L3",
        "name": "Layer3",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ODg5MDlkNDg5Njc4ZGQxN2FhNmQ5NjA5Zjg5YjA0MTliZjc4ZmQ5YV9MYXllcjM=",
            "name": "Layer3",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8zNzc2OC9sYXJnZS9TcXVhcmUucG5nPzE3MjIwNDUxMjg=",
                "url": "https://coin-images.coingecko.com/coins/images/37768/large/Square.png?1722045128",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/37768/large/Square.png?1722045128",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg2YzNlYTkwMzY0MDY4NTIwMDYyOTA3NzBiZWRmY2FiYTBlMjNhMGU4",
        "address": "0x6c3ea9036406852006290770BEdFcAbA0e23A0e8",
        "chain": "ETHEREUM",
        "symbol": "PYUSD",
        "name": "PayPal USD",
        "decimals": 6,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NmMzZWE5MDM2NDA2ODUyMDA2MjkwNzcwYmVkZmNhYmEwZTIzYTBlOF9QYXlQYWwgVVNE",
            "name": "PayPal USD",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8zMTIxMi9sYXJnZS9QWVVTRF9Mb2dvXyUyODIlMjkucG5nPzE2OTY1MzAwMzk=",
                "url": "https://coin-images.coingecko.com/coins/images/31212/large/PYUSD_Logo_%282%29.png?1696530039",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/31212/large/PYUSD_Logo_%282%29.png?1696530039",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhmMWY5NTUwMTZlY2JjZDczMjFjNzI2NmJjY2ZiOTZjNjhlYTVlNDli",
        "address": "0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b",
        "chain": "ETHEREUM",
        "symbol": "RLY",
        "name": "Rally",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZjFmOTU1MDE2ZWNiY2Q3MzIxYzcyNjZiY2NmYjk2YzY4ZWE1ZTQ5Yl9SYWxseQ==",
            "name": "Rally",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMjg0My9sYXJnZS9pbWFnZS5wbmc/MTY5NjUxMjYzMw==",
                "url": "https://coin-images.coingecko.com/coins/images/12843/large/image.png?1696512633",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/12843/large/image.png?1696512633",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgzMGQyMDIwOGQ5ODc3MTNmNDZkZmQzNGVmMTI4YmIxNmM0MDRkMTBm",
        "address": "0x30D20208d987713f46DFD34EF128Bb16C404D10f",
        "chain": "ETHEREUM",
        "symbol": "SD",
        "name": "Stader",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MzBkMjAyMDhkOTg3NzEzZjQ2ZGZkMzRlZjEyOGJiMTZjNDA0ZDEwZl9TdGFkZXI=",
            "name": "Stader",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yMDY1OC9sYXJnZS9TRF9Ub2tlbl9Mb2dvLnBuZz8xNjk2NTIwMDYw",
                "url": "https://coin-images.coingecko.com/coins/images/20658/large/SD_Token_Logo.png?1696520060",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/20658/large/SD_Token_Logo.png?1696520060",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgxNzc2ZTFmMjZmOThiMWE1ZGY5Y2QzNDc5NTNhMjZkZDNjYjQ2Njcx",
        "address": "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671",
        "chain": "ETHEREUM",
        "symbol": "NMR",
        "name": "Numeraire",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MTc3NmUxZjI2Zjk4YjFhNWRmOWNkMzQ3OTUzYTI2ZGQzY2I0NjY3MV9OdW1lcmFpcmU=",
            "name": "Numeraire",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy83NTIvbGFyZ2UvbnVtZXJhaXJlLnBuZz8xNjk2NTAxOTA2",
                "url": "https://coin-images.coingecko.com/coins/images/752/large/numeraire.png?1696501906",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/752/large/numeraire.png?1696501906",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg1NzMyMDQ2YTg4MzcwNDQwNGYyODRjZTQxZmZhZGQ1YjAwN2ZkNjY4",
        "address": "0x5732046A883704404F284Ce41FfADd5b007FD668",
        "chain": "ETHEREUM",
        "symbol": "BLZ",
        "name": "Bluzelle Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NTczMjA0NmE4ODM3MDQ0MDRmMjg0Y2U0MWZmYWRkNWIwMDdmZDY2OF9CbHV6ZWxsZQ==",
            "name": "Bluzelle",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yODQ4L2xhcmdlL0NvbG9ySWNvbl8zeC5wbmc/MTY5NjUwMzYwNw==",
                "url": "https://coin-images.coingecko.com/coins/images/2848/large/ColorIcon_3x.png?1696503607",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/2848/large/ColorIcon_3x.png?1696503607",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg2MDdmNGM1YmI2NzIyMzBlODY3MjA4NTUzMmY3ZTkwMTU0NGE3Mzc1",
        "address": "0x607F4C5BB672230e8672085532f7e901544a7375",
        "chain": "ETHEREUM",
        "symbol": "RLC",
        "name": "iEx.ec Network Token",
        "decimals": 9,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NjA3ZjRjNWJiNjcyMjMwZTg2NzIwODU1MzJmN2U5MDE1NDRhNzM3NV9pRXhlYyBSTEM=",
            "name": "iExec RLC",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy82NDYvbGFyZ2UvcEwxVnVYbS5wbmc/MTY5NjUwMTg0MA==",
                "url": "https://coin-images.coingecko.com/coins/images/646/large/pL1VuXm.png?1696501840",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/646/large/pL1VuXm.png?1696501840",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhjNzcwZWVmYWQyMDRiNTE4MGRmNmExNGVlMTk3ZDk5ZDgwOGVlNTJk",
        "address": "0xc770EEfAd204B5180dF6a14Ee197D99d808ee52d",
        "chain": "ETHEREUM",
        "symbol": "FOX",
        "name": "FOX",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4Yzc3MGVlZmFkMjA0YjUxODBkZjZhMTRlZTE5N2Q5OWQ4MDhlZTUyZF9TaGFwZVNoaWZ0IEZPWA==",
            "name": "ShapeShift FOX",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy85OTg4L2xhcmdlL0ZPWC5wbmc/MTY5NjUxMDAyNQ==",
                "url": "https://coin-images.coingecko.com/coins/images/9988/large/FOX.png?1696510025",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/9988/large/FOX.png?1696510025",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg2ZTJhNDNiZTBiMWQzM2I3MjZmMGNhM2I4ZGU2MGIzNDgyYjhiMDUw",
        "address": "0x6E2a43be0B1d33b726f0CA3b8de60b3482b8b050",
        "chain": "ETHEREUM",
        "symbol": "ARKM",
        "name": "Arkham",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NmUyYTQzYmUwYjFkMzNiNzI2ZjBjYTNiOGRlNjBiMzQ4MmI4YjA1MF9BcmtoYW0=",
            "name": "Arkham",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8zMDkyOS9sYXJnZS9BcmtoYW1fTG9nb19DRy5wbmc/MTY5NjUyOTc3MQ==",
                "url": "https://coin-images.coingecko.com/coins/images/30929/large/Arkham_Logo_CG.png?1696529771",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/30929/large/Arkham_Logo_CG.png?1696529771",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgwMzkxZDIwMjFmODlkYzMzOWY2MGZmZjg0NTQ2ZWEyM2UzMzc3NTBm",
        "address": "0x0391D2021f89DC339F60Fff84546EA23E337750f",
        "chain": "ETHEREUM",
        "symbol": "BOND",
        "name": "BarnBridge Governance Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MDM5MWQyMDIxZjg5ZGMzMzlmNjBmZmY4NDU0NmVhMjNlMzM3NzUwZl9CYXJuQnJpZGdl",
            "name": "BarnBridge",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMjgxMS9sYXJnZS9iYXJuYnJpZGdlLmpwZz8xNjk2NTEyNjA0",
                "url": "https://coin-images.coingecko.com/coins/images/12811/large/barnbridge.jpg?1696512604",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/12811/large/barnbridge.jpg?1696512604",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg4ZjgyMjFhZmJiMzM5OThkODU4NGEyYjA1NzQ5YmE3M2MzN2E5Mzhh",
        "address": "0x8f8221aFbB33998d8584A2B05749bA73c37a938a",
        "chain": "ETHEREUM",
        "symbol": "REQ",
        "name": "Request Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4OGY4MjIxYWZiYjMzOTk4ZDg1ODRhMmIwNTc0OWJhNzNjMzdhOTM4YV9SZXF1ZXN0",
            "name": "Request",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMDMxL2xhcmdlL1JlcXVlc3RfaWNvbl9ncmVlbi5wbmc/MTY5NjUwMjE0MA==",
                "url": "https://coin-images.coingecko.com/coins/images/1031/large/Request_icon_green.png?1696502140",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/1031/large/Request_icon_green.png?1696502140",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgzNjJiYzg0N2EzYTk2MzdkM2FmNjYyNGVlYzg1MzYxOGE0M2VkN2Qy",
        "address": "0x362bc847A3a9637d3af6624EeC853618a43ed7D2",
        "chain": "ETHEREUM",
        "symbol": "PRQ",
        "name": "Parsiq Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MzYyYmM4NDdhM2E5NjM3ZDNhZjY2MjRlZWM4NTM2MThhNDNlZDdkMl9QQVJTSVE=",
            "name": "PARSIQ",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMTk3My9sYXJnZS9Ec05nSzBPLnBuZz8xNjk2NTExODMx",
                "url": "https://coin-images.coingecko.com/coins/images/11973/large/DsNgK0O.png?1696511831",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/11973/large/DsNgK0O.png?1696511831",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhiYzM5NjY4OTg5M2QwNjVmNDFiYzJjNmVjYmVlNWUwMDg1MjMzNDQ3",
        "address": "0xbC396689893D065F41bc2C6EcbeE5e0085233447",
        "chain": "ETHEREUM",
        "symbol": "PERP",
        "name": "Perpetual",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4YmMzOTY2ODk4OTNkMDY1ZjQxYmMyYzZlY2JlZTVlMDA4NTIzMzQ0N19QZXJwZXR1YWwgUHJvdG9jb2w=",
            "name": "Perpetual Protocol",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xMjM4MS9sYXJnZS82MGQxOGUwNjg0NGE4NDRhZDc1OTAxYTlfbWFya19vbmx5XzAzLnBuZz8xNjk2NTEyMjA1",
                "url": "https://coin-images.coingecko.com/coins/images/12381/large/60d18e06844a844ad75901a9_mark_only_03.png?1696512205",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/12381/large/60d18e06844a844ad75901a9_mark_only_03.png?1696512205",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhhMGI3M2UxZmYwYjgwOTE0YWI2ZmUwNDQ0ZTY1ODQ4YzRjMzQ0NTBi",
        "address": "0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b",
        "chain": "ETHEREUM",
        "symbol": "CRO",
        "name": "CRO",
        "decimals": 8,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4YTBiNzNlMWZmMGI4MDkxNGFiNmZlMDQ0NGU2NTg0OGM0YzM0NDUwYl9Dcm9ub3M=",
            "name": "Cronos",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy83MzEwL2xhcmdlL2Nyb190b2tlbl9sb2dvLnBuZz8xNjk2NTA3NTk5",
                "url": "https://coin-images.coingecko.com/coins/images/7310/large/cro_token_logo.png?1696507599",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/7310/large/cro_token_logo.png?1696507599",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg4MjA3YzFmZmM1YjY4MDRmNjAyNDMyMmNjZjM0ZjI5YzM1NDFhZTI2",
        "address": "0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26",
        "chain": "ETHEREUM",
        "symbol": "OGN",
        "name": "OriginToken",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ODIwN2MxZmZjNWI2ODA0ZjYwMjQzMjJjY2YzNGYyOWMzNTQxYWUyNl9PcmlnaW4gVG9rZW4=",
            "name": "Origin Token",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8zMjk2L2xhcmdlL29wLmpwZz8xNjk2NTA0MDA2",
                "url": "https://coin-images.coingecko.com/coins/images/3296/large/op.jpg?1696504006",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/3296/large/op.jpg?1696504006",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhhZGUwMGMyODI0NGQ1Y2UxN2Q3MmU0MDMzMGIxYzMxOGNkMTJiN2Mz",
        "address": "0xADE00C28244d5CE17D72E40330B1c318cD12B7c3",
        "chain": "ETHEREUM",
        "symbol": "ADX",
        "name": "AdEx Network",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4YWRlMDBjMjgyNDRkNWNlMTdkNzJlNDAzMzBiMWMzMThjZDEyYjdjM19BZEV4",
            "name": "AdEx",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy84NDcvbGFyZ2UvYWRleC5qcGVnPzE2OTY1MDE5ODQ=",
                "url": "https://coin-images.coingecko.com/coins/images/847/large/adex.jpeg?1696501984",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/847/large/adex.jpeg?1696501984",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHgyZTlkNjM3ODgyNDkzNzFmMWRmYzkxOGE1MmY4ZDc5OWY0YTM4Yzk0",
        "address": "0x2e9d63788249371f1DFC918a52f8d799F4a38C94",
        "chain": "ETHEREUM",
        "symbol": "TOKE",
        "name": "Tokemak",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4MmU5ZDYzNzg4MjQ5MzcxZjFkZmM5MThhNTJmOGQ3OTlmNGEzOGM5NF9Ub2tlbWFr",
            "name": "Tokemak",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNzQ5NS9sYXJnZS90b2tlbWFrLWF2YXRhci0yMDBweC1ibGFjay5wbmc/MTY5NjUxNzAzNg==",
                "url": "https://coin-images.coingecko.com/coins/images/17495/large/tokemak-avatar-200px-black.png?1696517036",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/17495/large/tokemak-avatar-200px-black.png?1696517036",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHhlNmZkNzVmZjM4YWRjYTRiOTdmYmNkOTM4Yzg2Yjk4NzcyNDMxODY3",
        "address": "0xe6fd75ff38Adca4B97FBCD938c86b98772431867",
        "chain": "ETHEREUM",
        "symbol": "ELA",
        "name": "ELA on Ethereum",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4ZTZmZDc1ZmYzOGFkY2E0Yjk3ZmJjZDkzOGM4NmI5ODc3MjQzMTg2N19FbGFzdG9z",
            "name": "Elastos",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yNzgwL2xhcmdlL0VsYXN0b3MucG5nPzE2OTY1MDM1NDk=",
                "url": "https://coin-images.coingecko.com/coins/images/2780/large/Elastos.png?1696503549",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/2780/large/Elastos.png?1696503549",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg2ZGVhODFjODE3MWQwYmE1NzQ3NTRlZjZmOGI0MTJmMmVkODhjNTRk",
        "address": "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",
        "chain": "ETHEREUM",
        "symbol": "LQTY",
        "name": "LQTY",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NmRlYTgxYzgxNzFkMGJhNTc0NzU0ZWY2ZjhiNDEyZjJlZDg4YzU0ZF9MaXF1aXR5",
            "name": "Liquity",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8xNDY2NS9sYXJnZS8yMDAtbHF0eS1pY29uLnBuZz8xNjk2NTE0MzQw",
                "url": "https://coin-images.coingecko.com/coins/images/14665/large/200-lqty-icon.png?1696514340",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/14665/large/200-lqty-icon.png?1696514340",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg1OGI2YThhMzMwMjM2OWRhZWMzODMzMzQ2NzI0MDRlZTczM2FiMjM5",
        "address": "0x58b6A8A3302369DAEc383334672404Ee733aB239",
        "chain": "ETHEREUM",
        "symbol": "LPT",
        "name": "Livepeer Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NThiNmE4YTMzMDIzNjlkYWVjMzgzMzM0NjcyNDA0ZWU3MzNhYjIzOV9MaXZlcGVlcg==",
            "name": "Livepeer",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy83MTM3L2xhcmdlL2JhZGdlLWxvZ28tY2lyY3VpdC1ncmVlbi5wbmc/MTcxOTM1NzY4Ng==",
                "url": "https://coin-images.coingecko.com/coins/images/7137/large/badge-logo-circuit-green.png?1719357686",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/7137/large/badge-logo-circuit-green.png?1719357686",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg0MTU0NWY4Yjk0NzJkNzU4YmI2NjllZDhlYWVlZWNkN2E5YzRlYzI5",
        "address": "0x41545f8b9472D758bB669ed8EaEEEcD7a9C4Ec29",
        "chain": "ETHEREUM",
        "symbol": "FORT",
        "name": "Forta",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NDE1NDVmOGI5NDcyZDc1OGJiNjY5ZWQ4ZWFlZWVjZDdhOWM0ZWMyOV9Gb3J0YQ==",
            "name": "Forta",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yNTA2MC9sYXJnZS9Gb3J0YV9sZ29fJTI4MSUyOS5wbmc/MTY5NjUyNDIxMA==",
                "url": "https://coin-images.coingecko.com/coins/images/25060/large/Forta_lgo_%281%29.png?1696524210",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/25060/large/Forta_lgo_%281%29.png?1696524210",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    },
    {
        "id": "VG9rZW46RVRIRVJFVU1fMHg0MmJiZmEyZTc3NzU3YzY0NWVlYWFkMTY1NWUwOTExYTc1NTNlZmJj",
        "address": "0x42bBFa2e77757C645eeaAd1655E0911a7553Efbc",
        "chain": "ETHEREUM",
        "symbol": "BOBA",
        "name": "Boba Token",
        "decimals": 18,
        "standard": "ERC20",
        "project": {
            "id": "VG9rZW5Qcm9qZWN0OkVUSEVSRVVNXzB4NDJiYmZhMmU3Nzc1N2M2NDVlZWFhZDE2NTVlMDkxMWE3NTUzZWZiY19Cb2JhIE5ldHdvcms=",
            "name": "Boba Network",
            "logo": {
                "id": "SW1hZ2U6aHR0cHM6Ly9jb2luLWltYWdlcy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy8yMDI4NS9sYXJnZS9Cb2JhLTIwMHgyMDAtLS13aGl0ZS5wbmc/MTY5NjUxOTY5MA==",
                "url": "https://coin-images.coingecko.com/coins/images/20285/large/Boba-200x200---white.png?1696519690",
                "__typename": "Image"
            },
            "safetyLevel": "VERIFIED",
            "logoUrl": "https://coin-images.coingecko.com/coins/images/20285/large/Boba-200x200---white.png?1696519690",
            "isSpam": false,
            "__typename": "TokenProject"
        },
        "__typename": "Token"
    }
]