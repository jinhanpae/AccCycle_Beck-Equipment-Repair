const chartOfAccounts = [
  // Assets
  { id: 101, code: "101", name: "Cash", type: "Asset", beginningBalance: 2400 },
  { id: 112, code: "112", name: "Accounts Receivable", type: "Asset", beginningBalance: 4250 },
  { id: 126, code: "126", name: "Supplies", type: "Asset", beginningBalance: 1800 },
  { id: 153, code: "153", name: "Equipment", type: "Asset", beginningBalance: 12000 },

  // Contra‑asset
  { id: 154, code: "154", name: "Accumulated Depreciation—Equipment", type: "Asset", beginningBalance: -2000 },

  // Liabilities
  { id: 201, code: "201", name: "Accounts Payable", type: "Liability", beginningBalance: -2600 },
  { id: 209, code: "209", name: "Unearned Service Revenue", type: "Liability", beginningBalance: -1200 },
  { id: 212, code: "212", name: "Salaries and Wages Payable", type: "Liability", beginningBalance: -700 },

  // Equity (permanent)
  { id: 311, code: "311", name: "Share Capital—Ordinary", type: "Equity", beginningBalance: -11000 },
  { id: 320, code: "320", name: "Retained Earnings", type: "Equity", beginningBalance: -2950 },

  // Dividend and others
  { id: 350, code: "350", name: "Dividends", type: "Dividend", beginningBalance: 0 },
  // Future: AOCI bucket
  // { id: 330, code: "360", name: "Accumulated Other Comprehensive Income", type: "Equity", beginningBalance: 0 },

  // Revenue
  { id: 400, code: "400", name: "Service Revenue", type: "Revenue", beginningBalance: 0 },

  // Expenses
  { id: 710, code: "710", name: "Cost of Sales", type: "Expense", beginningBalance: 0 },
  { id: 726, code: "726", name: "Salaries and Wages Expense", type: "Expense", beginningBalance: 0 },
  { id: 729, code: "729", name: "Rent Expense", type: "Expense", beginningBalance: 0 },
  { id: 732, code: "732", name: "Supplies Expense", type: "Expense", beginningBalance: 0 },
  { id: 733, code: "733", name: "Depreciation Expense", type: "Expense", beginningBalance: 0 },
  { id: 734, code: "734", name: "Utilities Expense", type: "Expense", beginningBalance: 0 },
  { id: 790, code: "790", name: "Income Tax Expense", type: "Expense", beginningBalance: 0 },

  // Later, if you teach OCI line items:
  // { id: 800, code: "800", name: "OCI – FVOCI Gain", type: "OCI_Gain", beginningBalance: 0 },
  // { id: 850, code: "850", name: "OCI – FVOCI Loss", type: "OCI_Loss", beginningBalance: 0 },

  // Income summary account to close temporary accounts
  { id: 999, code: "999", name: "Income Summary", type: "Other", beginningBalance: 0 }

];
