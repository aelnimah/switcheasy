// SwitchEasy — editable demo data. Nothing in this file talks to a network.
// All values here are simulated / sample data for a live pitch demo.
//
// ─── Dropping in real logos ────────────────────────────────────────────────
// Every image below is optional. Put a PNG at the listed path and it is used
// automatically; if the file is missing the app falls back to the emoji (for
// billers/personas) or a lettered tile (for banks) — never a broken image.
//
//   assets/logos/switcheasy.png   → app mark in the chrome bar & landing
//   assets/logos/rbc.png (etc.)   → bank tiles (falls back to the .svg, then a letter)
//   assets/personas/*.png         → the landing cards
//   assets/billers/*.png          → every biller row, checklist chip and summary
// ───────────────────────────────────────────────────────────────────────────

export const appLogo = { src: "assets/logos/switcheasy.png", fallback: "assets/logos/td.svg" };

export const banks = [
  { id: "rbc",        name: "RBC",        logo: "assets/logos/rbc.png",        logoFallback: "assets/logos/rbc.svg",        brand: "#005DAA" },
  { id: "scotiabank", name: "Scotiabank", logo: "assets/logos/scotiabank.png", logoFallback: "assets/logos/scotiabank.svg", brand: "#EC111A" },
  { id: "bmo",        name: "BMO",        logo: "assets/logos/bmo.png",        logoFallback: "assets/logos/bmo.svg",        brand: "#0079C1" },
  { id: "cibc",       name: "CIBC",       logo: "assets/logos/cibc.png",       logoFallback: "assets/logos/cibc.svg",       brand: "#B00B1C" },
  { id: "other",      name: "Other",      logo: null,                          logoFallback: null,                          brand: "#616161" },
];

// Credential groups the agent can ask for. Transactions reference these via
// their `access` field. Order here = order the user is asked in.
// `demo` is the value auto-filled into the username field during the demo so the
// four sign-ins breeze by hands-free; the password is always masked dots.
export const credentialGroups = {
  google: { name: "Google",         tag: "Sign in with Google",  brand: "#1A73E8", light: true,  field: "Email",             logo: "assets/billers/google.png",    demo: "ahmed@gmail.com",       blurb: "One sign-in covers every account linked to your Google identity." },
  rogers: { name: "Rogers",         tag: "Rogers ID",            brand: "#DA291C", light: false, field: "Email or username",  logo: "assets/billers/rogers.png",    demo: "ahmed.hassan",          blurb: "Rogers and Fido share a single Rogers ID — one sign-in covers both." },
  telus:  { name: "TELUS",          tag: "TELUS My Account",     brand: "#4B286D", light: false, field: "Email",             logo: "assets/billers/telus.png",     demo: "ahmed.hassan@telus.net", blurb: "Needed to update billing on your TELUS services." },
  cra:    { name: "CRA My Account", tag: "Government of Canada", brand: "#26374A", light: false, field: "CRA user ID",       logo: "assets/billers/cra.png",       demo: "AHASSAN742",            blurb: "Needed to update your banking details with the CRA." },
  square: { name: "Square",         tag: "Square Dashboard",     brand: "#3E4348", light: false, field: "Email",             logo: "assets/billers/square.png",    demo: "ahmed@maplemain.ca",    blurb: "Needed to change where your card sales settle." },
  uber:   { name: "Uber Eats",      tag: "Merchant portal",      brand: "#06C167", light: false, field: "Email",             logo: "assets/billers/uber-eats.png", demo: "ahmed@maplemain.ca",    blurb: "Needed to change where your delivery payouts are deposited." },
};

// How each access type is explained on the analysis screen.
export const accessInfo = {
  google:    { badge: "Google",     note: "linked to your Google account" },
  rogers:    { badge: "Rogers ID",  note: "uses your Rogers ID" },
  telus:     { badge: "TELUS",      note: "TELUS My Account sign-in required" },
  cra:       { badge: "CRA",        note: "CRA My Account sign-in required" },
  square:    { badge: "Square",     note: "Square Dashboard sign-in required" },
  uber:      { badge: "Uber Eats",  note: "merchant portal sign-in required" },
  none:      { badge: "No login",   note: "no login needed — handled from the TD side" },
  signature: { badge: "Signature",  note: "needs one signed form — prepared for you" },
};

export const personas = {
  personal: {
    label: "Personal",
    tagline: "Your bills, subscriptions and deposits — moved for you.",
    img: "assets/personas/personal.png",
    icon: "🔁",
    scanTotal: 247,
    transactions: [
      { name: "Rogers Internet", sub: "Internet & cable · $94.99/mo", cat: "PAD", icon: "📡", logo: "assets/billers/rogers.png", access: "rogers", method: "Updating billing account directly with the biller", needsApproval: false, killerShot: true },
      { name: "Hydro One", sub: "Electricity · $138.42/mo", cat: "Bill payee", icon: "💡", logo: "assets/billers/hydro-one.png", access: "none", method: "Re-registering payee with TD account", needsApproval: false },
      { name: "Netflix", sub: "Streaming · $16.99/mo", cat: "PAD", icon: "🎬", logo: "assets/billers/netflix.png", access: "google", method: "Updating billing account directly with the biller", needsApproval: false },
      { name: "Spotify", sub: "Streaming · $11.99/mo", cat: "PAD", icon: "🎧", logo: "assets/billers/spotify.png", access: "google", method: "Updating billing account directly with the biller", needsApproval: false },
      { name: "Fido Mobile", sub: "Phone · $65.00/mo", cat: "PAD", icon: "📱", logo: "assets/billers/fido.png", access: "rogers", accessNote: "Fido is a Rogers brand — same Rogers ID", method: "Updating billing account directly with the biller", needsApproval: false },
      { name: "GoodLife Fitness", sub: "Membership · $54.99/mo", cat: "PAD", icon: "🏋️", logo: "assets/billers/goodlife.png", access: "google", method: "Updating billing account directly with the biller", needsApproval: false },
      { name: "TD Insurance", sub: "Auto policy · $210.00/mo", cat: "PAD", icon: "🚗", logo: "assets/billers/td-insurance.png", access: "none", accessNote: "already at TD — instant internal update", method: "Moving premiums to your new TD account", needsApproval: false },
      { name: "Manulife", sub: "Life insurance · $85.50/mo", cat: "Bill payee", icon: "🛡️", logo: "assets/billers/manulife.png", access: "none", method: "Re-registering payee with TD account", needsApproval: false },
      { name: "TELUS", sub: "Home line · $45.00/mo", cat: "PAD", icon: "☎️", logo: "assets/billers/telus.png", access: "telus", method: "Updating billing account directly with the biller", needsApproval: false },
      { name: "CRA · Child Benefit", sub: "Direct deposit · $560.00/mo", cat: "Direct deposit", icon: "🏛️", logo: "assets/billers/cra.png", access: "cra", method: "Updating direct deposit details with CRA", needsApproval: false },
      { name: "Landlord", sub: "Rent autodeposit · $1,850/mo", cat: "e-Transfer", icon: "🏠", logo: "assets/billers/landlord.png", access: "none", method: "Re-registering autodeposit email", needsApproval: false },
      { name: "TD Canada Trust", sub: "Payroll deposit · $3,200/biweekly", cat: "Direct deposit", icon: "💼", logo: "assets/billers/td-payroll.png", access: "signature", method: "Needs a signed direct-deposit form for HR", needsApproval: true,
        formName: "Direct Deposit Authorization", formParty: "Employer", approvalNote: "Employers require a signed form to change payroll deposits. The agent has pre-filled it — it just needs your signature." },
    ],
  },
  smallBiz: {
    label: "Small business",
    tagline: "Suppliers, payroll, payouts — your whole operation, moved.",
    img: "assets/personas/smallbiz.png",
    icon: "☕",
    scanTotal: 512,
    transactions: [
      { name: "Rogers Business", sub: "Internet & phone · $135/mo", cat: "PAD", icon: "📡", logo: "assets/billers/rogers.png", access: "rogers", method: "Updating billing account directly with the biller", needsApproval: false, killerShot: true },
      { name: "Square", sub: "POS deposits · ~$1,900/day", cat: "Merchant deposit", icon: "💳", logo: "assets/billers/square.png", access: "square", method: "Updating settlement account with processor", needsApproval: false },
      { name: "Uber Eats", sub: "Delivery payouts · weekly", cat: "Merchant deposit", icon: "🛵", logo: "assets/billers/uber-eats.png", access: "uber", method: "Updating payout account with merchant portal", needsApproval: false },
      { name: "Sysco Foods", sub: "Supplier PAD · $2,340/mo", cat: "PAD", icon: "🚚", logo: "assets/billers/sysco.png", access: "none", method: "Filing new PAD authorization electronically", needsApproval: false },
      { name: "Commercial Lease", sub: "Rent PAD · $4,100/mo", cat: "PAD", icon: "🏢", logo: "assets/billers/lease.png", access: "none", method: "Filing new PAD authorization electronically", needsApproval: false },
      { name: "Wagepoint Payroll", sub: "Staff payroll · 8 employees", cat: "Payroll debit", icon: "💼", logo: "assets/billers/wagepoint.png", access: "signature", method: "Needs a signed funding-change form", needsApproval: true,
        formName: "Payroll Funding Authorization", formParty: "Payroll provider", approvalNote: "Payroll providers require a signed authorization to change the account payroll is funded from. The agent has pre-filled it — it just needs your signature." },
      { name: "CRA · Payroll remittance", sub: "Source deductions · monthly", cat: "PAD", icon: "🏛️", logo: "assets/billers/cra.png", access: "cra", method: "Updating pre-authorized debit with CRA", needsApproval: false },
      { name: "Enbridge", sub: "Gas · $310/mo", cat: "Bill payee", icon: "🔥", logo: "assets/billers/enbridge.png", access: "none", method: "Re-registering payee with TD account", needsApproval: false },
      { name: "Toronto Hydro", sub: "Electricity · $445/mo", cat: "Bill payee", icon: "💡", logo: "assets/billers/toronto-hydro.png", access: "none", method: "Re-registering payee with TD account", needsApproval: false },
      { name: "WSIB", sub: "Premiums · $280/mo", cat: "PAD", icon: "🛡️", logo: "assets/billers/wsib.png", access: "none", method: "Filing new PAD authorization electronically", needsApproval: false },
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
  analysisLineDelay: 260,
  credGrantDelay: 950,
  killerCursorSpeed: 900,
  killerTypeDelay: 55,
}; // ms — all tunable without touching the engine

// The agent's "voice" per transaction, kept separate from the animation engine.
// Returns an ordered list of { text, type } lines. type: 'dim' | 'ok' | 'warn'
// The engine plays every line except the last with a short delay between them;
// for killerShot items the browser-automation animation runs before the final line.
export function agentLogLines(tx) {
  const lines = [
    { text: `→ ${tx.cat} · ${tx.name}`, type: "dim" },
  ];
  if (tx.killerShot) {
    lines.push({ text: `→ Signing in to ${tx.name} with your authorized Rogers ID…`, type: "dim" });
    lines.push({ text: `→ Opening payment settings — handing off to browser agent…`, type: "dim" });
    lines.push({ text: `✓ Billing account updated on the ${tx.name} portal — screenshot archived`, type: "ok" });
  } else if (tx.needsApproval) {
    lines.push({ text: `! ${tx.method} — flagging for your signature`, type: "warn" });
  } else if (tx.access === "google") {
    lines.push({ text: `→ Authenticating via your authorized Google session…`, type: "dim" });
    lines.push({ text: `✓ ${tx.method} — confirmed`, type: "ok" });
  } else if (tx.access && tx.access !== "none") {
    const groupName = credentialGroups[tx.access] ? credentialGroups[tx.access].name : tx.access;
    lines.push({ text: `→ Signing in with your ${groupName} credentials…`, type: "dim" });
    lines.push({ text: `✓ ${tx.method} — confirmed`, type: "ok" });
  } else {
    lines.push({ text: `✓ ${tx.method} — confirmed`, type: "ok" });
  }
  return lines;
}
