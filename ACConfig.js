// ACConfig.js
// Global configuration for this Accounting Cycle exercise
// (Beck Equipment Repair – P3.5, November 2025).

const exerciseConfig = {
  // App labels
  appTitle: "Accounting Cycle – Beck Equipment Repair",
  subtitle:
    "November transactions plus adjusting and closing entries (P3.5).",

  // Entity / report labels
  entityName: "Beck Equipment Repair",
  chartWindowTitle: "Chart of Accounts – Beck Equipment Repair",
  tbWindowTitle: "Trial Balance",
  tbEntityName: "Beck Equipment Repair – Trial Balance",

  // Mode: \"exercise\" (feedback & grading) or \"test\" (no feedback / grading)
  // mode: "exercise",
  mode: "test",

  // How to label the starting balances in the ledger:
  // "beginning"  → “Beginning balance”
  // "unadjusted" → “Unadjusted balance”
  // startingBalanceLabelMode: "unadjusted", // when needed
  // startingBalanceLabelMode: "beginning", // default, undefined

  // Login / initial screen
  useLoginScreen: true,
  loginTitle: "Accounting Cycle Practice",
  loginSubtitle: "Beck Equipment Repair",
  loginPrompt:
    "Enter your name (optional) and password to begin.",
  // Empty string = no password required
  loginPassword: "KUBS",
  loginButtonLabel: "Start",

  // Footer
  footerText:
    "For Korea University classroom use only. Do not redistribute.",
  copyright:
    `© ${new Date().getFullYear()} Jinhan Pae. All rights reserved.`
};
