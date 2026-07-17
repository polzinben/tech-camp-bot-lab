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

  // --- CREATIVITY DIAL (Block 1 concept, now yours to control) ---
  // 0 = careful & predictable, 0.8 = a little spicy (default), 1.2 = wild & chaotic.
  // Try the same question at 0.2 and at 1.2 and watch how the answers change!
  TEMPERATURE: 0.8,

  // --- PERSONALITY (Block 2 centerpiece) ---
  // This "system prompt" is the bot's secret instructions. It's sent to the
  // model with EVERY message. Rewrite it to give your bot a personality.
  SYSTEM_PROMPT: "You are a friendly, curious assistant helping high school students learn about AI. Keep answers short and clear.",

  // NOT SURE WHAT TO MAKE? Just copy one of these into SYSTEM_PROMPT above,
  // then change a word or two to make it yours. There's no wrong answer.
  //   Pirate:        "You are a swashbuckling pirate. Answer every question with
  //                   nautical slang and end with 'Arrr!'"
  //   Grumpy wizard: "You are a grumpy old wizard who thinks everything modern is
  //                   nonsense. Complain, then help anyway. Mutter a fake spell."
  //   Sportscaster:  "You are an over-the-top sports commentator. Narrate every
  //                   answer like it's the final seconds of a championship game."
  //   Surfer dude:   "You are the most chill surfer ever. Everything is 'totally
  //                   gnarly.' Call everyone 'dude' and keep it super relaxed."
  //   Cat robot:     "You are a robot that is obsessed with cats and works one cat
  //                   fact into every single reply, whether it fits or not."
  //   Detective:     "You are a dramatic film-noir detective. Treat every question
  //                   like a mystery you're cracking. Speak in short, moody lines."
  //   Hype coach:    "You are an over-the-top motivational coach. Answer everything
  //                   with WAY too much energy, ALL CAPS bursts, and pep."
  //   Wise dragon:   "You are an ancient, wise dragon. Speak grandly, mention your
  //                   giant hoard of treasure, and call the user 'little one'."
  //   Philosopher:   "You are a philosopher who ONLY responds with questions.
  //                   Never give a direct answer — always ask another question."
  //   Secret toaster:"You are secretly a talking toaster, but you must NEVER admit
  //                   it. Deny it if asked, but keep slipping in bread puns."

  // --- MEMORY / KNOWLEDGE (Block 3 — baby RAG) ---
  // Flip this to true to give your bot a set of facts it can look things up in.
  USE_KNOWLEDGE: false,

  // The bot searches these facts for words that match the question, and pastes
  // the best matches into its instructions. Add your own facts as strings!
  // IDEAS if you're stuck: your name + favorite game, your pet, your team name,
  // a made-up backstory for your bot, your favorite food, your dream superpower.
  //   e.g. "My name is Sam and my favorite game is Minecraft."
  //        "My bot's name is Zorp and it is secretly from the planet Blorb."
  //        "Our team is the Byte Squad and our mascot is a raccoon named Rusty."
  KNOWLEDGE_BASE: [
    "The Tech Camp closing celebration is on Friday at 3:00 PM.",
    "Tech Journey is the nonprofit that runs Tech Camp in Des Moines.",
    "This session is taught by Ben and Austin, who both work at Casey's.",
  ],

  // --- OFFLINE MODE (backup) ---
  // If the wifi dies, flip this to true and the bot gives canned replies so you
  // can still work on the look and feel of the app.
  OFFLINE_MODE: false,
};
