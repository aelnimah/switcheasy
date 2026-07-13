// SwitchEasy — editable demo data. Nothing in this file talks to a network.
// All values here are simulated / sample data for a live pitch demo.

export const banks = [
  { id: "rbc",        name: "RBC",        logo: "assets/logos/rbc.svg",        brand: "#005DAA" },
  { id: "scotiabank", name: "Scotiabank", logo: "assets/logos/scotiabank.svg", brand: "#EC111A" },
  { id: "bmo",        name: "BMO",        logo: "assets/logos/bmo.svg",        brand: "#0079C1" },
  { id: "cibc",       name: "CIBC",       logo: "assets/logos/cibc.svg",       brand: "#B00B1C" },
  { id: "other",      name: "Other",      logo: null,                          brand: "#616161" },
];

export const personas = {
  newcomer: {
    label: "Newcomer to Canada",
    tagline: "First Canadian account — few payments, high anxiety.",
    clientName: "Amara Osei",
    scanTotal: 89,
    transactions: [
      { name: "Fido Mobile", sub: "Phone · $55.00/mo", cat: "PAD", icon: "📱", method: "Updating billing account directly with the biller", needsApproval: false },
      { name: "Toronto Hydro", sub: "Electricity · $96.10/mo", cat: "Bill payee", icon: "💡", method: "Re-registering payee with TD account", needsApproval: false },
      { name: "Landlord", sub: "Rent autodeposit · $1,650/mo", cat: "e-Transfer", icon: "🏠", method: "Re-registering autodeposit email", needsApproval: false },
      { name: "IRCC / CRA", sub: "Benefit deposit · $412/mo", cat: "Direct deposit", icon: "🏛️", method: "Updating direct deposit details with CRA", needsApproval: false },
      { name: "New Employer Payroll", sub: "Direct deposit · $2,480/biweekly", cat: "Direct deposit", icon: "💼", method: "Needs a signed direct-deposit form for HR", needsApproval: true },
    ],
  },
  switcher: {
    label: "Switching from a competitor",
    tagline: "The core case — a dozen tangled payments at the old bank.",
    clientName: "Jordan Sample",
    scanTotal: 247,
    transactions: [
      { name: "NorthLine Internet", sub: "Internet & cable · $94.99/mo", cat: "PAD", icon: "📡", method: "Updating billing account directly with the biller", needsApproval: false, killerShot: true },
      { name: "Hydro One", sub: "Electricity · $138.42/mo", cat: "Bill payee", icon: "💡", method: "Re-registering payee with TD account", needsApproval: false },
      { name: "Netflix", sub: "Streaming · $16.99/mo", cat: "PAD", icon: "🎬", method: "Updating billing account directly with the biller", needsApproval: false },
      { name: "Spotify", sub: "Streaming · $11.99/mo", cat: "PAD", icon: "🎧", method: "Updating billing account directly with the biller", needsApproval: false },
      { name: "Fido Mobile", sub: "Phone · $65.00/mo", cat: "PAD", icon: "📱", method: "Updating billing account directly with the biller", needsApproval: false },
      { name: "GoodLife Fitness", sub: "Membership · $54.99/mo", cat: "PAD", icon: "🏋️", method: "Updating billing account directly with the biller", needsApproval: false },
      { name: "Allstate Insurance", sub: "Auto policy · $210.00/mo", cat: "PAD", icon: "🚗", method: "Filing new PAD authorization electronically", needsApproval: false },
      { name: "Sun Life", sub: "Life insurance · $85.50/mo", cat: "Bill payee", icon: "🛡️", method: "Re-registering payee with TD account", needsApproval: false },
      { name: "Telus", sub: "Home line · $45.00/mo", cat: "PAD", icon: "☎️", method: "Updating billing account directly with the biller", needsApproval: false },
      { name: "CRA · Child Benefit", sub: "Direct deposit · $560.00/mo", cat: "Direct deposit", icon: "🏛️", method: "Updating direct deposit details with CRA", needsApproval: false },
      { name: "Landlord", sub: "Rent autodeposit · $1,850/mo", cat: "e-Transfer", icon: "🏠", method: "Re-registering autodeposit email", needsApproval: false },
      { name: "Acme Corp Payroll", sub: "Direct deposit · $3,200/biweekly", cat: "Direct deposit", icon: "💼", method: "Needs a signed direct-deposit form for HR", needsApproval: true },
    ],
  },
  smallBiz: {
    label: "Small business",
    tagline: "Vendors, payroll, suppliers — high value, high complexity.",
    clientName: "Maple & Main Café Inc.",
    scanTotal: 512,
    transactions: [
      { name: "Sysco Foods", sub: "Supplier PAD · $2,340/mo", cat: "PAD", icon: "🚚", method: "Updating billing account directly with the supplier", needsApproval: false },
      { name: "Commercial Lease", sub: "Rent PAD · $4,100/mo", cat: "PAD", icon: "🏢", method: "Filing new PAD authorization electronically", needsApproval: false },
      { name: "Wagepoint Payroll", sub: "Staff payroll · 8 employees", cat: "Payroll debit", icon: "💼", method: "Updating funding account with payroll provider", needsApproval: true },
      { name: "Square", sub: "POS deposits · daily", cat: "Merchant deposit", icon: "💳", method: "Updating settlement account with processor", needsApproval: false },
      { name: "Enbridge", sub: "Gas · $310/mo", cat: "Bill payee", icon: "🔥", method: "Re-registering payee with TD account", needsApproval: false },
      { name: "Toronto Hydro", sub: "Electricity · $445/mo", cat: "Bill payee", icon: "💡", method: "Re-registering payee with TD account", needsApproval: false },
      { name: "WSIB", sub: "Premiums · $280/mo", cat: "PAD", icon: "🛡️", method: "Filing new PAD authorization electronically", needsApproval: false },
      { name: "NorthLine Business", sub: "Internet & phone · $135/mo", cat: "PAD", icon: "📡", method: "Updating billing account directly with the biller", needsApproval: false, killerShot: true },
    ],
  },
};

export const timings = {
  screenFade: 400,
  scanTickInterval: 40,
  txRowStagger: 90,
  termLineDelay: 300,
  termAfterOk: 320,
  connectDelay: 1200,
  killerCursorSpeed: 900,
  killerTypeDelay: 55,
}; // ms — all tunable without touching the engine

// The agent's "voice" per transaction, kept separate from the animation engine.
// Returns an ordered list of { text, type } lines. type: 'dim' | 'ok' | 'warn'
export function agentLogLines(tx) {
  const lines = [
    { text: `→ Detected ${tx.cat} · ${tx.name}`, type: "dim" },
  ];
  if (tx.killerShot) {
    lines.push({ text: `→ Opening ${tx.name} account portal — handing off to browser agent…`, type: "dim" });
    lines.push({ text: `✓ Billing account updated on ${tx.name} portal — screenshot archived`, type: "ok" });
  } else if (tx.needsApproval) {
    lines.push({ text: `! ${tx.method} — flagging for your signature`, type: "warn" });
  } else {
    lines.push({ text: `✓ ${tx.method} — confirmed`, type: "ok" });
  }
  return lines;
}
