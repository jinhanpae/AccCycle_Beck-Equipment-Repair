# Accounting Cycle Practice – Beck Equipment Repair (P3.5)

This web-based app lets students practice the **full accounting cycle** for **Beck Equipment Repair (Problem P3.5)**. It includes a journal-entry grid, a chart of accounts, and tools to view **unadjusted, adjusted, and post‑closing trial balances**, as well as a **general ledger**.

---

## How students access it

The app is available online:

- **GitHub repository:** https://github.com/jinhanpae/AccCycle_Beck-Equipment-Repair  
- **Live app (GitHub Pages):** https://jinhanpae.github.io/AccCycle_Beck-Equipment-Repair/

You can:

- Share the Pages link directly with students, or  
- Embed it in an LMS page (e.g., Canvas) using an `<iframe>`.

---

## What students can do

Within this Beck Equipment Repair app, students can:

- Work through **three sets** of accounting cycle entries:
  - **Set T:** Regular November transactions.
  - **Set A:** Adjusting entries at month‑end.
  - **Set C:** Closing entries for November.
- Read each **transaction or adjustment description**.
- Enter journal entries using **3‑digit account codes**.
- Use the **Chart of Accounts** window for reference.
- Click **Submit journal entry** to check their work and see **feedback** (in Exercise mode).
- See a running **score** with partial credit when they correct earlier mistakes.
- Open **trial balances** (unadjusted, adjusted, post‑closing) based on all entries they have made.
- View a **general ledger** with running balances by account.

Some items require a journal entry; others may be configured to test understanding that **no journal entry is required**.

To prevent common errors:

- The app checks that **debits equal credits** and that **amounts are actually entered**.
- If debits and credits don’t match, or if accounts are selected with no amounts, students see a warning and the entry is treated as incorrect until fixed.

---

## Modes: Exercise vs Test

The app can run in two modes, controlled by the `exerciseConfig.mode` setting in `ACConfig.js`.

- **Exercise mode** (`mode: "exercise"` – default)  
  - Students see immediate **feedback** on each attempt (Correct / Not correct, explanations).  
  - The app tracks **partial credit**: if a student answers incorrectly first and later fixes it, they receive partial points.  
  - A **score summary** is shown at the bottom of the page as they work.  
  - When an answer is correct (including correctly choosing “No journal entry is required”), the **Next** button becomes highlighted to guide students forward.

- **Test mode** (`mode: "test"`)  
  - Students can still enter and change journal entries for each item.  
  - The app only checks **mechanical validity**: debits and credits must be equal and non‑zero; otherwise a warning is shown and Next is not highlighted.  
  - There is **no feedback** about whether the accounts and amounts are conceptually correct, and no running score is displayed.  
  - This mode is intended for quizzes or graded work where instructors review the saved entries later (e.g., via the trial balance or general ledger).

---

## How instructors can reuse it

The Beck app is built on the same generic engine as other accounting‑cycle practice projects. To adapt it to a different problem, you mainly change:

- The **exercise configuration** (`ACConfig.js`):
  - App title and subtitle.
  - Entity name and report titles.
  - Login text and password.
  - Mode: `"exercise"` vs `"test"`.
- The **chart of accounts** (`ACChartOfAccounts.js`):
  - Account codes, names, types, and beginning balances (from the post‑closing trial balance).
- The **question set** (`ACQuestions.js`):
  - Journal entry prompts for:
    - Set T (regular transactions),
    - Set A (adjusting entries),
    - Set C (closing entries),
  - Model answers (`correctLines`), and explanations.

The core app logic, scoring, and layout are shared and do not need to be modified for each new problem.

---

## Classroom notes

- The **login screen** is meant to:
  - Ask for a **name** (optional) and a shared **password** for the class.
  - Provide a simple starting screen for each session.
- The app runs entirely in the browser; students do **not** need to install anything.
- Pop‑up windows (trial balance, general ledger, chart of accounts) may need to be allowed in the browser if they are blocked.
- Button behavior:
  - **Submit journal entry** is the main action and is highlighted by default.
  - After a correct entry (in Exercise mode) or a mechanically valid entry in Test mode, the **Next** button becomes highlighted to guide students forward.
- Trial balance buttons:
  - **Unadjusted TB** reflects beginning balances plus Set T entries.
  - **Adjusted TB** includes Set T and Set A entries.
  - **Post‑closing TB** shows permanent accounts after Set C closing entries.

---

## Copyright / use

This app is intended for classroom use in accounting courses.

Please see the footer in the app and the repository’s license for details about redistribution and use.
