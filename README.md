# Coffee Vending Machine Pricer

This project implements a pricing engine for a coffee vending machine using **TypeScript**.

The goal of the exercise is to build a maintainable, testable pricing function that:

- Updates selections dynamically
- Returns the current total price
- Avoids classes (functional approach)
- Encourages immutability
- Keeps logic simple and clear

---

##  Pricing Rules

### Size

| Size   | Price |
|--------|-------|
| Small  | $1.00 |
| Medium | $1.50 |
| Large  | $2.00 |

### Creamer

| Creamer     | Price |
|------------|-------|
| None       | $0.00 |
| Dairy      | $0.25 |
| Non-Dairy  | $0.50 |

---

## Design Approach

- ✅ Functional factory pattern (`createPricer`)
- ✅ No classes (closure-based state)
- ✅ Immutable state updates
- ✅ Enums for type-safe option separation
- ✅ Strong TypeScript typing
- ✅ Test-driven verification with Vitest

Each call to `createPricer()` creates an isolated pricing instance.

The returned function:
- Updates only the selected category
- Recomputes the total price from state
- Returns the updated total

---

## Project Structure
├── src/
│ └── pricer.ts
├── test/
│ └── pricer.test.ts
├── types/
│ └── index.ts
├── tsconfig.json
├── vitest.config.ts
└── package.json


---

## Requirements

- Node.js ≥ 22
- npm ≥ 9

---

##  Installation

Install dependencies:

```bash
npm install

## test

npm test
