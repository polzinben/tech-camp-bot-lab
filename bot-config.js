// ============================================================
//  YOUR BOT'S DNA  🧬
//  This is the ONLY file you need to edit today.
//  Change the values, hit Run, and watch your bot change.
// ============================================================

const BOT_CONFIG = {
  // --- WIRING (leave these alone — your facilitator set them up) ---
  PROXY_URL: "https://tech-camp-proxy.onrender.com", // the facilitator's proxy (already wired)
  CLASS_TOKEN: "techcamp2026",

  // --- IDENTITY (Block 2) — changes the header, avatar, and colors LIVE ---
  BOT_NAME: "My Bot",
  ACCENT_COLOR: "#37e6a4", // any hex color. try #ff5c8a, #f5c518, #6c8cff ...

  // --- PERSONALITY (Block 2 centerpiece) ---
  // This "system prompt" is the bot's secret instructions. It's sent to the
  // model with EVERY message. Rewrite it to give your bot a personality.
  SYSTEM_PROMPT: "You are a friendly, curious assistant helping high school students learn about AI. Keep answers short and clear.",

  // Personality ideas — copy one into SYSTEM_PROMPT above and tweak it:
  //   Pirate:        "You are a swashbuckling pirate. Answer every question with
  //                   nautical slang and end with 'Arrr!'"
  //   Sportscaster:  "You are an over-the-top sports commentator. Narrate every
  //                   answer like it's the final seconds of a championship game."
  //   Philosopher:   "You are a philosopher who ONLY responds with questions.
  //                   Never give a direct answer — always ask another question."
  //   Secret toaster:"You are secretly a talking toaster, but you must NEVER admit
  //                   it. Deny it if asked, but keep slipping in bread puns."

  // --- MEMORY / KNOWLEDGE (Block 3 — baby RAG) ---
  // Flip this to true to give your bot a set of facts it can look things up in.
  USE_KNOWLEDGE: false,

  // The bot searches these facts for words that match the question, and pastes
  // the best matches into its instructions. Add your own facts as strings!
  KNOWLEDGE_BASE: [
    "The Tech Camp closing celebration is on Friday at 3:00 PM.",
    "Tech Journey is the nonprofit that runs Tech Camp in Des Moines.",
    "This session is taught by Ben and Austin, who both work at Casey's.",
    "There will be cake at the closing celebration.",
  ],

  // --- OFFLINE MODE (backup) ---
  // If the wifi dies, flip this to true and the bot gives canned replies so you
  // can still work on the look and feel of the app.
  OFFLINE_MODE: false,
};
