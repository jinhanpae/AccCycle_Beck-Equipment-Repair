// ACQuestions.js
// Beck Equipment Repair – November transactions (P3.5)
//
// Defaults for all questions unless overridden:
// - requiresEntry: true   (a journal entry is required)
// - isAdjusting: false    (regular journal entry)
// - isClosing: false      (not a closing entry)
//
// For adjusting entries, set isAdjusting: true.
// For closing entries, set isClosing: true.
// For “no entry required” conceptual questions, set requiresEntry: false.

const CURRENT_YEAR = new Date().getFullYear();

const journalQuestions = [
  // --- Set T: Regular transactions (1–10) ---
  {
    id: 1,
    set: "T",
    date: `${CURRENT_YEAR}-11-08`,
    title: "[T] Salaries payment (prior and current)",
    description:
      "Paid £1,700 for salaries due employees, of which £700 is for October salaries.",
    correctLines: [
      { accountId: 212, debit: 700, credit: 0 },   // Salaries and Wages Payable
      { accountId: 726, debit: 1000, credit: 0 },  // Salaries and Wages Expense
      { accountId: 101, debit: 0, credit: 1700 }   // Cash
    ],
    explanation:
      "The £700 owed from October reduces Salaries and Wages Payable (debit). " +
      "The remaining £1,000 is a current-period Salaries and Wages Expense (debit). " +
      "Total cash paid £1,700 is credited to Cash."
  },
  {
    id: 2,
    set: "T",
    date: `${CURRENT_YEAR}-11-10`,
    title: "[T] Cash collected on account",
    description: "Received £3,620 cash from customers on account.",
    correctLines: [
      { accountId: 101, debit: 3620, credit: 0 },  // Cash
      { accountId: 112, debit: 0, credit: 3620 }   // Accounts Receivable
    ],
    explanation:
      "Cash increases for the amount collected (debit). " +
      "Accounts Receivable decreases because customers paid their outstanding balances (credit)."
  },
  {
    id: 3,
    set: "T",
    date: `${CURRENT_YEAR}-11-12`,
    title: "[T] Cash services",
    description: "Received £3,100 cash for services performed in November.",
    correctLines: [
      { accountId: 101, debit: 3100, credit: 0 },  // Cash
      { accountId: 400, debit: 0, credit: 3100 }   // Service Revenue
    ],
    explanation:
      "Cash increases (debit). Because the services are performed now, " +
      "revenue is recognized: credit Service Revenue."
  },
  {
    id: 4,
    set: "T",
    date: `${CURRENT_YEAR}-11-15`,
    title: "[T] Equipment purchased on account",
    description: "Purchased equipment on account for £2,000.",
    correctLines: [
      { accountId: 153, debit: 2000, credit: 0 },  // Equipment
      { accountId: 201, debit: 0, credit: 2000 }   // Accounts Payable
    ],
    explanation:
      "Equipment (asset) increases, so debit Equipment. " +
      "A liability to the supplier arises, so credit Accounts Payable."
  },
  {
    id: 5,
    set: "T",
    date: `${CURRENT_YEAR}-11-17`,
    title: "[T] Supplies purchased on account",
    description: "Purchased supplies on account for £700.",
    correctLines: [
      { accountId: 126, debit: 700, credit: 0 },   // Supplies
      { accountId: 201, debit: 0, credit: 700 }    // Accounts Payable
    ],
    explanation:
      "Supplies (asset) increases (debit). " +
      "The obligation to the supplier increases Accounts Payable (credit)."
  },
  {
    id: 6,
    set: "T",
    date: `${CURRENT_YEAR}-11-20`,
    title: "[T] Payment to creditors on account",
    description: "Paid creditors on account £2,700.",
    correctLines: [
      { accountId: 201, debit: 2700, credit: 0 },  // Accounts Payable
      { accountId: 101, debit: 0, credit: 2700 }   // Cash
    ],
    explanation:
      "Paying creditors reduces the liability Accounts Payable (debit). " +
      "Cash paid out is credited to Cash."
  },
  {
    id: 7,
    set: "T",
    date: `${CURRENT_YEAR}-11-22`,
    title: "[T] Rent payment",
    description: "Paid November rent £400.",
    correctLines: [
      { accountId: 729, debit: 400, credit: 0 },   // Rent Expense
      { accountId: 101, debit: 0, credit: 400 }    // Cash
    ],
    explanation:
      "Rent Expense increases (debit), reducing equity. " +
      "Cash decreases for the rent payment (credit)."
  },
  {
    id: 8,
    set: "T",
    date: `${CURRENT_YEAR}-11-25`,
    title: "[T] Salaries payment",
    description: "Paid salaries £1,700.",
    correctLines: [
      { accountId: 726, debit: 1700, credit: 0 },  // Salaries and Wages Expense
      { accountId: 101, debit: 0, credit: 1700 }   // Cash
    ],
    explanation:
      "The payment represents current-period salaries cost: debit Salaries and Wages Expense. " +
      "Cash paid to employees is credited to Cash."
  },
  {
    id: 9,
    set: "T",
    date: `${CURRENT_YEAR}-11-27`,
    title: "[T] Services on account",
    description:
      "Performed services on account and billed customers for these services, £2,200.",
    correctLines: [
      { accountId: 112, debit: 2200, credit: 0 },  // Accounts Receivable
      { accountId: 400, debit: 0, credit: 2200 }   // Service Revenue
    ],
    explanation:
      "Accounts Receivable (asset) increases for the amount billed (debit). " +
      "Service Revenue increases equity (credit)."
  },
  {
    id: 10,
    set: "T",
    date: `${CURRENT_YEAR}-11-29`,
    title: "[T] Cash received for future service",
    description: "Received £600 from customers for future service.",
    correctLines: [
      { accountId: 101, debit: 600, credit: 0 },   // Cash
      { accountId: 209, debit: 0, credit: 600 }    // Unearned Service Revenue
    ],
    explanation:
      "Cash increases (debit). Because the services have not yet been " +
      "performed, a liability Unearned Service Revenue is credited, not Service Revenue."
  },

  // Optional template (commented) for “no entry required”:
  // {
  //   id: 19,
  //   set: "T",
  //   date: `${CURRENT_YEAR}-11-05`,
  //   title: "[T] Signing a service contract",
  //   description:
  //     "On November 5, Beck Equipment Repair signs a contract to provide services next year. " +
  //     "No cash changes hands and no services are performed now.",
  //   requiresEntry: false,
  //   correctLines: [],
  //   explanation:
  //     "This event does not change any asset, liability, or equity account. " +
  //     "Because no accounts are affected, no journal entry is required."
  // },

  // --- Set A: Adjusting entries (21–24) ---
  {
    id: 21,
    set: "A",
    date: `${CURRENT_YEAR}-11-30`,
    title: "[A] Supplies adjustment",
    description: "Supplies on hand at November 30 total £1,400.",
    isAdjusting: true,
    correctLines: [
      { accountId: 732, debit: 1100, credit: 0 },   // Supplies Expense
      { accountId: 126, debit: 0, credit: 1100 }   // Supplies
    ],
    explanation:
      "Total supplies available (£1,800 + £700 = £2,500) minus supplies on hand (£1,400) " +
      "equals £1,100 used. Debit Supplies Expense and credit Supplies for £1,100."
  },
  {
    id: 22,
    set: "A",
    date: `${CURRENT_YEAR}-11-30`,
    title: "[A] Accrued salaries",
    description: "Accrued salaries payable at November 30 total £350.",
    isAdjusting: true,
    correctLines: [
      { accountId: 726, debit: 350, credit: 0 },   // Salaries and Wages Expense
      { accountId: 212, debit: 0, credit: 350 }    // Salaries and Wages Payable
    ],
    explanation:
      "Recognize unpaid salaries as an expense and liability. " +
      "Debit Salaries and Wages Expense and credit Salaries and Wages Payable for £350."
  },
  {
    id: 23,
    set: "A",
    date: `${CURRENT_YEAR}-11-30`,
    title: "[A] Depreciation",
    description: "Depreciation for the month is £200.",
    isAdjusting: true,
    correctLines: [
      { accountId: 733, debit: 200, credit: 0 },   // Depreciation Expense
      { accountId: 154, debit: 0, credit: 200 }    // Accumulated Depreciation—Equipment
    ],
    explanation:
      "Record depreciation by debiting Depreciation Expense and crediting " +
      "Accumulated Depreciation—Equipment for £200."
  },
  {
    id: 24,
    set: "A",
    date: `${CURRENT_YEAR}-11-30`,
    title: "[A] Unearned service revenue earned",
    description:
      "Services of £1,220 have been performed from Unearned Service Revenue.",
    isAdjusting: true,
    correctLines: [
      { accountId: 209, debit: 1220, credit: 0 },  // Unearned Service Revenue
      { accountId: 400, debit: 0, credit: 1220 }   // Service Revenue
    ],
    explanation:
      "Because services are now performed, reduce the liability and recognize revenue. " +
      "Debit Unearned Service Revenue and credit Service Revenue for £1,220."
  },

  // --- Set C: Closing entries (31–33) ---
  // Based on the Beck data set (after posting all regular + adjusting entries),
  // November balances are:
  // - Service Revenue: 6,520 credit
  // - Salaries and Wages Expense: 3,050 debit
  // - Rent Expense: 400 debit
  // - Supplies Expense: 1,100 debit
  // - Depreciation Expense: 200 debit
  // - Cost of Sales, Utilities, Income Tax Expense: 0
  // - Net income: 1,770 credit

  {
    id: 31,
    set: "C",
    date: `${CURRENT_YEAR}-11-30`,
    title: "[C] Closing revenues to Income Summary",
    description:
      "Close the November balance of Service Revenue to Income Summary.",
    isClosing: true,
    correctLines: [
      { accountId: 400, debit: 6520, credit: 0 },   // Service Revenue
      { accountId: 999, debit: 0, credit: 6520 }    // Income Summary
    ],
    explanation:
      "Debit Service Revenue for its credit balance and credit Income Summary. " +
      "This closes the revenue account and transfers the balance to Income Summary."
  },
  {
    id: 32,
    set: "C",
    date: `${CURRENT_YEAR}-11-30`,
    title: "[C] Closing expenses to Income Summary",
    description:
      "Close all November expense account balances to Income Summary.",
    isClosing: true,
    correctLines: [
      // { accountId: 710, debit: 0, credit: 0 },   // Cost of Sales
      { accountId: 726, debit: 0, credit: 3050 },  // Salaries and Wages Expense
      { accountId: 729, debit: 0, credit: 400 },   // Rent Expense
      { accountId: 732, debit: 0, credit: 1100 },  // Supplies Expense
      { accountId: 733, debit: 0, credit: 200 },   // Depreciation Expense
      // { accountId: 734, debit: 0, credit: 0 },   // Utilities Expense
      // { accountId: 790, debit: 0, credit: 0 },   // Income Tax Expense
      { accountId: 999, debit: 4750, credit: 0 }   // Income Summary
    ],
    explanation:
      "Credit each expense account for its debit balance and debit Income Summary " +
      "for the total expenses (£4,750). This closes all expense accounts and transfers " +
      "total expenses to Income Summary."
  },
  {
    id: 33,
    set: "C",
    date: `${CURRENT_YEAR}-11-30`,
    title: "[C] Closing Income Summary to Retained Earnings",
    description:
      "Close the balance in Income Summary (net income) to Retained Earnings.",
    isClosing: true,
    correctLines: [
      { accountId: 999, debit: 1770, credit: 0 },   // Income Summary
      { accountId: 320, debit: 0, credit: 1770 }    // Retained Earnings
    ],
    explanation:
      "After closing revenues and expenses, Income Summary has a £1,770 credit balance (net income). " +
      "Debit Income Summary and credit Retained Earnings to transfer net income to equity."
  }
  // Optional dividends closing template (still commented):
  // {
  //   id: 34,
  //   set: "C",
  //   date: `${CURRENT_YEAR}-11-30`,
  //   title: "[C] Closing Dividends to Retained Earnings",
  //   description:
  //     "Close the Dividends account to Retained Earnings (assume no dividends were declared in November).",
  //   isClosing: true,
  //   correctLines: [
  //     { accountId: 320, debit: 0, credit: 0 },   // Retained Earnings
  //     { accountId: 350, debit: 0, credit: 0 }    // Dividends
  //   ],
  //   explanation:
  //     "If dividends had been declared, you would debit Retained Earnings and credit Dividends for the amount. " +
  //     "In this problem, there are no November dividends, so the closing entry is a zero-amount illustration."
  // }
];
