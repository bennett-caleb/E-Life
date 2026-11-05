"use strict";

const SAVE_KEY = "e-life-save-v3";
const FIRST_NAMES = ["Avery", "Jordan", "Morgan", "Riley", "Casey", "Quinn", "Sage", "Taylor", "Jamie", "Rowan", "Emery", "Skyler", "Cameron", "Drew", "Finley", "Harper", "Kai", "Logan", "Micah", "Reese"];
const LAST_NAMES = ["Bennett", "Carter", "Diaz", "Ellis", "Foster", "Garcia", "Hayes", "Kim", "Morris", "Nguyen", "Owens", "Patel", "Rivera", "Shaw", "Taylor", "Wright"];
const BIRTHPLACES = ["Brooklyn, New York", "Oakland, California", "Savannah, Georgia", "Chicago, Illinois", "Portland, Oregon", "Tucson, Arizona", "Baltimore, Maryland", "Austin, Texas", "Minneapolis, Minnesota", "Providence, Rhode Island", "Newark, New Jersey", "Albuquerque, New Mexico"];
const SKIN_TONES = ["#f3c7a0", "#d99a70", "#bd805b", "#8e5b42", "#684331"];
const HAIR_COLORS = ["#352b28", "#714930", "#c58b42", "#9d4d39", "#242b38"];
const SHIRT_COLORS = ["#ed765f", "#557ea6", "#e8b83f", "#5d9b75", "#aa7bb2"];
const HAIR_STYLES = ["short", "curly", "wavy", "long", "braids"];
const EYE_COLORS = ["#263541", "#4a6d56", "#477fa0", "#76523c"];
const ACCESSORIES = ["none", "round-glasses", "freckles", "hair-clip"];
const GENDERS = [
  { label: "Female", pronouns: "she" },
  { label: "Male", pronouns: "he" }
];

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function generateIdentity() {
  const gender = pickRandom(GENDERS);
  return {
    name: `${pickRandom(FIRST_NAMES)} ${pickRandom(LAST_NAMES)}`,
    gender: gender.label,
    pronouns: gender.pronouns,
    city: pickRandom(BIRTHPLACES),
    skinTone: pickRandom(SKIN_TONES),
    hairColor: pickRandom(HAIR_COLORS),
    hairStyle: pickRandom(HAIR_STYLES),
    eyeColor: pickRandom(EYE_COLORS),
    accessory: pickRandom(ACCESSORIES),
    shirtColor: pickRandom(SHIRT_COLORS)
  };
}

function generateFamilyMembers(identity) {
  const surname = identity.name.split(" ").at(-1);
  const usedNames = new Set([identity.name.split(" ")[0]]);
  return ["Parent", "Parent", "Sibling"].map(relation => {
    const availableNames = FIRST_NAMES.filter(name => !usedNames.has(name));
    const firstName = pickRandom(availableNames);
    usedNames.add(firstName);
    return { name: `${firstName} ${surname}`, relation };
  });
}

const JOBS = [
  { id: "retail", title: "Retail associate", income: 26000, intelligence: 25, education: "High school diploma" },
  { id: "barista", title: "Barista", income: 28000, intelligence: 32, education: "High school diploma" },
  { id: "library-aide", title: "Library assistant", income: 32000, intelligence: 45, education: "High school diploma" },
  { id: "caregiver", title: "Care assistant", income: 36000, intelligence: 48, education: "High school diploma" },
  { id: "chef", title: "Line cook", income: 39000, intelligence: 44, education: "High school diploma" },
  { id: "electrician", title: "Apprentice electrician", income: 44000, intelligence: 52, education: "High school diploma", examId: "trade" },
  { id: "designer", title: "Junior designer", income: 46000, intelligence: 55, education: "College degree" },
  { id: "accountant", title: "Accountant", income: 62000, intelligence: 68, education: "College degree", examId: "accounting" },
  { id: "teacher", title: "Teacher", income: 58000, intelligence: 65, education: "College degree", examId: "teaching" },
  { id: "developer", title: "Software developer", income: 88000, intelligence: 72, education: "College degree" },
  { id: "nurse", title: "Registered nurse", income: 82000, intelligence: 68, education: "College degree", examId: "nursing" },
  { id: "engineer", title: "Civil engineer", income: 94000, intelligence: 76, education: "College degree" },
  { id: "veterinarian", title: "Veterinarian", income: 108000, intelligence: 82, education: "College degree", examId: "medical" },
  { id: "doctor", title: "Doctor", income: 185000, intelligence: 88, education: "College degree", examId: "medical" },
  { id: "surgeon", title: "Surgeon", income: 265000, intelligence: 94, education: "College degree", examId: "medical" }
];

const VEHICLES = [
  { id: "compact", name: "Used compact", emoji: "🚗", cost: 9000, economy: "Great mileage", reliability: "A little unpredictable", color: "#ee6953" },
  { id: "sedan", name: "Reliable sedan", emoji: "🚙", cost: 18000, economy: "Good mileage", reliability: "Very dependable", color: "#557ea6" },
  { id: "hybrid", name: "Hybrid hatchback", emoji: "🚘", cost: 28500, economy: "Excellent mileage", reliability: "Dependable", color: "#5d9b75" },
  { id: "electric", name: "Electric car", emoji: "🔋", cost: 42000, economy: "No gas stops", reliability: "Very dependable", color: "#aa7bb2" },
  { id: "suv", name: "Family SUV", emoji: "🚙", cost: 38500, economy: "Thirsty but spacious", reliability: "Dependable", color: "#e8b83f" },
  { id: "minivan", name: "Road-trip minivan", emoji: "🚐", cost: 32000, economy: "Room for everyone", reliability: "Dependable", color: "#557ea6" },
  { id: "classic", name: "Classic coupe", emoji: "🏎️", cost: 68000, economy: "Not built for mileage", reliability: "Needs extra care", color: "#ee6953" }
];

const HOMES = [
  { id: "studio", name: "City studio", emoji: "🏙️", cost: 95000 },
  { id: "cottage", name: "Small cottage", emoji: "🏡", cost: 165000 },
  { id: "townhouse", name: "Townhouse", emoji: "🏘️", cost: 265000 },
  { id: "family-home", name: "Family home", emoji: "🏠", cost: 390000 }
];

const EXAMS = [
  { id: "sat", title: "College entrance exam", minAge: 16, difficulty: 58, minSmarts: 35 },
  { id: "trade", title: "Trade skills certification", minAge: 18, difficulty: 54, education: "High school diploma", minSmarts: 45 },
  { id: "accounting", title: "Accounting certification", minAge: 21, difficulty: 68, education: "College degree", minSmarts: 65 },
  { id: "teaching", title: "Teaching certification", minAge: 21, difficulty: 66, education: "College degree", minSmarts: 62 },
  { id: "nursing", title: "Nursing licensure exam", minAge: 21, difficulty: 62, education: "College degree", minSmarts: 60 },
  { id: "medical", title: "Medical boards", minAge: 24, difficulty: 78, education: "College degree", minSmarts: 75 }
];

const SICKNESSES = [
  { name: "Common cold", minAge: 0, severity: 5 },
  { name: "Seasonal allergies", minAge: 0, severity: 3 },
  { name: "Stomach bug", minAge: 2, severity: 8 },
  { name: "Flu", minAge: 5, severity: 12 },
  { name: "Migraine", minAge: 12, severity: 9 },
  { name: "Sprained ankle", minAge: 8, severity: 7 },
  { name: "Pneumonia", minAge: 18, severity: 20 },
  { name: "Appendicitis", minAge: 8, severity: 20 },
  { name: "Heart condition", minAge: 35, severity: 18 },
  { name: "Dental cavity", minAge: 2, severity: 4 },
  { name: "Vision strain", minAge: 5, severity: 5 },
  { name: "Iron deficiency", minAge: 12, severity: 7 },
  { name: "High cholesterol", minAge: 18, severity: 8 },
  { name: "High blood pressure", minAge: 30, severity: 10 },
  { name: "Stress", minAge: 12, severity: 6 },
  { name: "Ear infection", minAge: 0, severity: 8 },
  { name: "Skin irritation", minAge: 0, severity: 4 }
];

const PETS = [
  { species: "Dog", emoji: "🐕" },
  { species: "Cat", emoji: "🐈" },
  { species: "Rabbit", emoji: "🐇" },
  { species: "Parakeet", emoji: "🦜" }
];
const PET_NAMES = ["Biscuit", "Mochi", "Pepper", "Noodle", "Sunny", "Pickles", "Clover", "Bean", "Pippin", "Waffles"];
const CLOTHING = [
  { id: "onesie", name: "Comfy onesie", icon: "🧸", cost: 0, color: "#ed765f", pattern: "star", description: "Soft cotton and a tiny stitched star.", minAge: 0 },
  { id: "raincoat", name: "Bright raincoat", icon: "🌧️", cost: 180, color: "#e8b83f", pattern: "pocket", description: "A sunny splash of color for rainy days.", minAge: 2 },
  { id: "overalls", name: "Playground overalls", icon: "🧵", cost: 260, color: "#557ea6", pattern: "pocket", description: "Sturdy denim with room for treasures.", minAge: 3 },
  { id: "school-tee", name: "School spirit tee", icon: "🏫", cost: 220, color: "#5d9b75", pattern: "stripe", description: "The school colors, worn with pride.", minAge: 5 },
  { id: "sneakers", name: "Fresh sneakers", icon: "👟", cost: 360, color: "#5d9b75", pattern: "stripe", description: "Lightweight shoes made for moving.", minAge: 8 },
  { id: "hoodie", name: "Favorite hoodie", icon: "🧥", cost: 420, color: "#557ea6", pattern: "pocket", description: "A warm favorite with an oversized pocket.", minAge: 8 },
  { id: "denim", name: "Denim jacket", icon: "🧥", cost: 680, color: "#557ea6", pattern: "patch", description: "A broken-in jacket with a bright patch.", minAge: 13 },
  { id: "festival", name: "Festival fit", icon: "🎨", cost: 850, color: "#aa7bb2", pattern: "sparkle", description: "A bold look for a night you'll remember.", minAge: 16 },
  { id: "graduation", name: "Graduation gown", icon: "🎓", cost: 740, color: "#242b38", pattern: "stripe", description: "A little ceremony for a lot of hard work.", minAge: 18 },
  { id: "formal", name: "Formal outfit", icon: "✨", cost: 1100, color: "#242b38", pattern: "sparkle", description: "A sharp look for a big occasion.", minAge: 18 },
  { id: "scrubs", name: "Comfy scrubs", icon: "🩺", cost: 500, color: "#5d9b75", pattern: "pocket", description: "Practical, comfortable, ready for a shift.", minAge: 18 },
  { id: "knit", name: "Weekend knit", icon: "🧶", cost: 620, color: "#aa7bb2", pattern: "stripe", description: "A cozy sweater with colorful bands.", minAge: 18 }
];

const HEALTH_EXAMS = [
  { id: "checkup", title: "Routine checkup", icon: "🩺", minAge: 0, cost: 0 },
  { id: "physical", title: "Physical exam", icon: "🩺", minAge: 5, cost: 0 },
  { id: "pelvic", title: "Pelvic exam", icon: "🩺", minAge: 18, cost: 50 },
  { id: "dental-check", title: "Dental exam", icon: "🦷", minAge: 2, cost: 0, finding: "Dental cavity" },
  { id: "vision-check", title: "Vision exam", icon: "👓", minAge: 5, cost: 0, finding: "Vision strain" },
  { id: "hearing-check", title: "Hearing exam", icon: "🎧", minAge: 3, cost: 0, finding: "Ear infection" },
  { id: "skin-check", title: "Skin exam", icon: "🔎", minAge: 5, cost: 0, finding: "Skin irritation" },
  { id: "sports-physical", title: "Sports physical", icon: "🏃", minAge: 8, cost: 0, findings: ["Sprained ankle", "Stress"] },
  { id: "wellness-check", title: "Mental wellness check", icon: "🧠", minAge: 12, cost: 0 },
  { id: "bloodwork", title: "Bloodwork", icon: "🧪", minAge: 18, cost: 80, findings: ["Iron deficiency", "High cholesterol", "High blood pressure"] }
];

const SURGERIES = [
  { id: "vision", title: "Vision correction", cost: 2400, success: "The procedure went smoothly. The world looks a little sharper.", benefit: state => { state.health += 5; state.happiness += 5; }, risk: 0.05, treats: "Vision strain" },
  { id: "knee", title: "Knee repair", cost: 4800, success: "Recovery took patience, but getting around feels easier.", benefit: state => { state.health += 12; state.happiness += 3; }, risk: 0.12 },
  { id: "dental", title: "Dental surgery", cost: 1800, success: "The dental work is done, and the pain has eased.", benefit: state => { state.health += 8; state.happiness += 3; }, risk: 0.04, treats: "Dental cavity" },
  { id: "tonsils", title: "Tonsil surgery", cost: 3400, success: "Recovery is complete, and your throat feels much better.", benefit: state => { state.health += 8; }, risk: 0.07 },
  { id: "appendix", title: "Appendix surgery", cost: 7200, success: "The operation went well. You're on the mend.", benefit: state => { state.health += 15; }, risk: 0.1, treats: "Appendicitis" },
  { id: "knee", title: "Knee repair", cost: 4800, success: "Recovery took patience, but getting around feels easier.", benefit: state => { state.health += 12; state.happiness += 3; }, risk: 0.12 },
  { id: "gallbladder", title: "Gallbladder surgery", cost: 8500, success: "The surgery went smoothly. You can focus on healing now.", benefit: state => { state.health += 12; }, risk: 0.11 },
  { id: "heart", title: "Heart procedure", cost: 18500, success: "The procedure went well, and follow-up care is underway.", benefit: state => { state.health += 20; }, risk: 0.16 },
  { id: "hip", title: "Hip replacement", cost: 24000, success: "Physical therapy took work, but you're moving more comfortably.", benefit: state => { state.health += 16; }, risk: 0.13 },
  { id: "elective", title: "Elective cosmetic procedure", cost: 6200, success: "Recovery went well, and you feel more confident.", benefit: state => { state.confidence += 12; state.happiness += 4; }, risk: 0.1 }
];

const STAT_NAMES = [
  ["health", "Health"],
  ["happiness", "Happiness"],
  ["smarts", "Smarts"],
  ["confidence", "Confidence"],
  ["purpose", "Purpose"],
  ["stability", "Stability"],
  ["kindness", "Kindness"]
];

const MILESTONES = [
  { id: "first-paycheck", label: "First job", test: state => state.career > 0 },
  { id: "someone-there", label: "Someone in your corner", test: state => Math.max(...Object.values(state.relationships)) >= 60 },
  { id: "ten-grand", label: "Your first $10,000", test: state => state.cash >= 10000 },
  { id: "twenty-years", label: "Twenty years in", test: state => state.age >= 20 },
  { id: "new-places", label: "A stamp in the passport", test: state => state.hasTraveled },
  { id: "kept-learning", label: "Still asking questions", test: state => state.smarts >= 75 }
];

const ACTIONS = [
  { id: "play", category: "everyday", icon: "✳", title: "Play and explore", detail: "Make up a game. See what happens.", minAge: 0, cost: 0 },
  { id: "family", category: "family", icon: "♡", title: "Spend time with family", detail: "A little more time together.", minAge: 0, cost: 0 },
  { id: "study", category: "school", icon: "✎", title: "Study hard", detail: "Do your homework and build smarts.", minAge: 5, maxAge: 17, cost: 0 },
  { id: "library", category: "activities", icon: "📚", title: "Visit the library", detail: "A quiet place full of new worlds.", minAge: 5, cost: 0 },
  { id: "college", category: "school", icon: "🎓", title: "Enroll in college", detail: "A degree takes four birthdays.", minAge: 18, cost: 6500 },
  { id: "exam", category: "school", icon: "📝", title: "Take an exam", detail: "Exams can open doors to college and careers.", minAge: 16, cost: 0 },
  { id: "school", category: "school", icon: "🏫", title: "Go to school", detail: "Show up, learn, and keep your grades up.", minAge: 5, maxAge: 17, cost: 0 },
  { id: "wellness", category: "everyday", icon: "+", title: "Look after yourself", detail: "The unglamorous, useful stuff.", minAge: 0, cost: state => state.age < 18 ? 0 : 220 },
  { id: "healthExam", category: "health", icon: "🩺", title: "Get a health exam", detail: "Check in on your health and get surprise results.", minAge: 0, cost: 0 },
  { id: "physicalExam", category: "health", icon: "🩺", title: "Get a physical exam", detail: "Choose a routine physical and see what turns up.", minAge: 5, cost: 0 },
  { id: "pelvicExam", category: "health", icon: "🩺", title: "Get a pelvic exam", detail: "Optional, private, and only with your consent.", minAge: 18, cost: 50 },
  { id: "wardrobe", category: "style", icon: "👕", title: "Shop for clothes", detail: "Find a look that feels like you.", minAge: 0, cost: 0 },
  { id: "friends", category: "family", icon: "✦", title: "Show up for your friends", detail: "Send the text. Make the plan.", minAge: 3, cost: 0 },
  { id: "career", category: "work", icon: "↗", title: "Pick a job", detail: "Find a job that fits your skills.", minAge: 18, cost: 0 },
  { id: "love", category: "family", icon: "♡", title: "Start dating", detail: "Meet someone new. See where it goes.", minAge: 18, cost: 300 },
  { id: "nightout", category: "everyday", icon: "✧", title: "Go out tonight", detail: "One more story for the group chat.", minAge: 18, cost: 350 },
  { id: "sidegig", category: "work", icon: "$", title: "Start a side project", detail: "A little ambition, a little luck.", minAge: 18, cost: 100 },
  { id: "travel", category: "activities", icon: "⌁", title: "Get out of town", detail: "A change of scene can be a lot.", minAge: 18, cost: 1600 },
  { id: "volunteer", category: "activities", icon: "🤝", title: "Volunteer locally", detail: "Give a little time to your community.", minAge: 8, cost: 0 },
  { id: "phone", category: "life", icon: "📱", title: "Get your first smartphone", detail: "Your own little window to the world.", minAge: 12, cost: 0 },
  { id: "social", category: "activities", icon: "💬", title: "Join social media", detail: "Make an account and find your people.", minAge: 13, cost: 0 },
  { id: "postOnline", category: "activities", icon: "📸", title: "Post something", detail: "Share a moment from your life.", minAge: 13, cost: 0 },
  { id: "license", category: "life", icon: "🪪", title: "Get a driver's license", detail: "Study, practice, and pass the test.", minAge: 16, cost: 0 },
  { id: "pet", category: "family", icon: "🐾", title: "Adopt a pet", detail: "Bring home a new best friend.", minAge: 5, cost: state => state.age < 18 ? 0 : 450 },
  { id: "adoptChild", category: "family", icon: "🧸", title: "Adopt a child", detail: "Grow your family through adoption.", minAge: 21, cost: 3500 },
  { id: "haveChild", category: "family", icon: "🍼", title: "Have a child", detail: "Choose to grow your family together.", minAge: 21, cost: 0 },
  { id: "doctor", category: "health", icon: "🩺", title: "Visit a doctor", detail: "Get help with an illness or injury.", minAge: 0, cost: state => state.age < 18 ? 0 : 650 },
  { id: "surgery", category: "health", icon: "✚", title: "Explore surgery options", detail: "Choose a procedure and weigh the risks.", minAge: 18, cost: 0 },
  { id: "car", category: "cars", icon: "🚗", title: "Shop for a car", detail: "Compare cars before you buy.", minAge: 18, cost: 0 },
  { id: "carCare", category: "cars", icon: "🔧", title: "Maintain your car", detail: "Keep your car clean, safe, and reliable.", minAge: 18, cost: 0 },
  { id: "roadTrip", category: "cars", icon: "🛣️", title: "Take a road trip", detail: "Pick a route and see where the road goes.", minAge: 18, cost: 250 },
  { id: "sellCar", category: "cars", icon: "↗", title: "Sell a car", detail: "Make room or get some money back.", minAge: 18, cost: 0 },
  { id: "house", category: "life", icon: "🏠", title: "Shop for a home", detail: "Compare homes before you buy.", minAge: 18, cost: 0 }
];

const ACTION_CATEGORIES = [
  ["everyday", "Daily"],
  ["school", "School"],
  ["family", "Family"],
  ["work", "Jobs"],
  ["activities", "Activities"],
  ["life", "Life"],
  ["cars", "Cars"],
  ["style", "Style"],
  ["health", "Health"],
  ["all", "All"]
];

const RANDOM_EVENTS = [
  {
    minAge: 18,
    title: "The offer you didn't see coming",
    body: "A former colleague reaches out with an opportunity. It's not exactly the plan, but the plan has been mostly vibes so far.",
    choices: [
      { label: "Take the leap", impact: "+ confidence · career chance", effect: state => { state.confidence += 10; state.purpose += 7; if (state.jobId && state.career < careerLimit(state.age) && Math.random() < 0.58) { state.career += 1; state.income += 5200; return "The leap paid off. A new role and a bigger paycheck."; } if (!state.jobId) return "You made a good impression. A promising lead is waiting in the job listings."; state.stability -= 6; return "It didn't quite land, but you backed yourself."; } },
      { label: "Stay where it's steady", impact: "+ stability · + happiness", effect: state => { state.stability += 8; state.happiness += 4; return "You chose the life you already know. For now, that feels right."; } }
    ]
  },
  {
    minAge: 18,
    title: "The group chat is alive again",
    body: "Someone from your old circle is getting married. The chat has gone from silent to 147 messages and counting.",
    choices: [
      { label: "Book the ticket and go", impact: "− $650 · + relationships", effect: state => { state.cash -= 650; state.relationships.friends += 16; state.happiness += 8; return "You made it. Some friendships pick up right where they left off."; } },
      { label: "Send a generous gift", impact: "− $300 · + relationships", effect: state => { state.cash -= 300; state.relationships.friends += 8; state.purpose += 3; return "A thoughtful note, a little money, and a very full heart."; } },
      { label: "Send a voice note", impact: "+ a little connection", effect: state => { state.relationships.friends += 4; state.happiness += 2; return "Not the same as being there. Still, they heard your voice."; } }
    ]
  },
  {
    minAge: 18,
    title: "A number with too many zeroes",
    body: "A surprise bill lands in your inbox. Nothing catastrophic, just expensive enough to ruin your afternoon.",
    choices: [
      { label: "Pay it and move on", impact: "− $1,200 · + stability", effect: state => { state.cash -= 1200; state.stability += 6; state.happiness -= 2; return "Paid. Annoying, but handled."; } },
      { label: "Call and negotiate", impact: "A little awkward · save money", effect: state => { if (Math.random() < 0.65) { state.cash -= 450; state.confidence += 4; return "A long phone call, a polite argument, and a much smaller bill."; } state.cash -= 900; state.confidence += 2; return "You tried. They wouldn't budge, but the call was less scary than expected."; } }
    ]
  },
  {
    minAge: 18,
    title: "The almost-relationship conversation",
    body: "It's been good. It's been confusing. Someone finally asks what the two of you are doing.",
    choices: [
      { label: "Say what you actually want", impact: "+ confidence · outcome unknown", effect: state => { state.confidence += 8; if (state.relationships.love > 38) { state.relationships.love += 13; state.happiness += 7; return "You were honest, and so were they. It feels like a beginning."; } state.relationships.love -= 8; state.purpose += 5; return "It hurt a little. The uncertainty hurt more."; } },
      { label: "Keep it easy for now", impact: "+ short-term calm", effect: state => { state.happiness += 3; state.relationships.love -= 2; return "The subject changes. So does nothing else."; } }
    ]
  },
  {
    minAge: 18,
    title: "A quiet warning from your body",
    body: "Nothing dramatic. Just a few weeks of feeling like your battery never gets past 12 percent.",
    choices: [
      { label: "Cancel things and rest", impact: "+ health · + happiness", effect: state => { state.health += 11; state.happiness += 4; state.stability -= 2; return "The world kept turning. You slept, and let it."; } },
      { label: "Keep pushing through", impact: "+ short-term stability · − health", effect: state => { state.health -= 7; state.confidence += 2; state.cash += 500; return "You got through it. You also made a note to do this differently next time."; } }
    ]
  },
  {
    minAge: 13,
    title: "Someone remembers your name",
    body: "A small thing you made, said, or did a while ago has found its way back to you. Someone noticed.",
    choices: [
      { label: "Follow where it leads", impact: "+ purpose · + confidence", effect: state => { state.purpose += 11; state.confidence += 5; if (state.jobId && state.career < careerLimit(state.age)) { state.career += 1; state.income += 1800; } else if (!state.jobId) { state.smarts += 5; } return "A door cracked open. You put your foot in it."; } },
      { label: "Say thank you and let it be", impact: "+ happiness · + relationships", effect: state => { state.happiness += 8; state.relationships.friends += 5; return "You let the compliment land. That was enough for today."; } }
    ]
  },
  {
    minAge: 18,
    title: "The family call",
    body: "A call from home starts with the usual small talk, then takes a turn neither of you planned for.",
    choices: [
      { label: "Stay on the phone", impact: "+ family · − a little time", effect: state => { state.relationships.family += 12; state.happiness += 4; state.purpose += 2; return "You listened. Sometimes that's the whole thing."; } },
      { label: "Set a boundary, kindly", impact: "+ confidence · + stability", effect: state => { state.confidence += 7; state.stability += 5; state.relationships.family -= 2; return "It wasn't easy. It was honest, and you can call again tomorrow."; } }
    ]
  },
  {
    minAge: 18,
    title: "A very tempting weekend",
    body: "Your friends have a plan. It involves a questionable rental, a long drive, and a phrase that starts with 'what could go wrong.'",
    choices: [
      { label: "Go. You're only young once", impact: "− $500 · high memories", effect: state => { state.cash -= 500; state.happiness += 12; state.health -= 3; state.relationships.friends += 7; return "It was a mess. It was also, objectively, a great weekend."; } },
      { label: "Suggest a better plan", impact: "Save money · keep the people", effect: state => { state.relationships.friends += 4; state.stability += 3; state.cash -= 120; return "Less dramatic, more snacks. Everyone had a good time."; } }
    ]
  },
  {
    minAge: 8,
    maxAge: 17,
    title: "The group project is wobbling",
    body: "Two people did all the work, one person vanished, and the deadline is tomorrow. The group chat is getting spicy.",
    choices: [
      { label: "Help pull it together", impact: "+ kindness · + confidence", effect: state => { state.kindness += 5; state.confidence += 4; state.relationships.friends += 3; return "You divided up the last tasks and got everyone across the line."; } },
      { label: "Tell the teacher what happened", impact: "+ honesty · + purpose", effect: state => { state.kindness += 2; state.purpose += 4; return "It was awkward, but the teacher understood the situation."; } },
      { label: "Do your part and log off", impact: "+ stability", effect: state => { state.stability += 4; return "You finished your part and let the group own the rest."; } }
    ]
  },
  {
    minAge: 13,
    title: "A post gets a surprising reply",
    body: "Someone you admire replies to something you shared. The notification has been sitting there for ten minutes while you draft and delete your answer.",
    choices: [
      { label: "Reply like yourself", impact: "+ confidence · + friendship", effect: state => { state.confidence += 5; state.relationships.friends += 4; return "You sent the honest version. They wrote back, and a real conversation started."; } },
      { label: "Send a quick thank-you", impact: "+ happiness", effect: state => { state.happiness += 5; return "Short, kind, and sent. You let yourself enjoy the moment."; } },
      { label: "Close the app and go outside", impact: "+ health · + purpose", effect: state => { state.health += 3; state.purpose += 3; return "The notification could wait. The afternoon was yours again."; } }
    ]
  },
  {
    minAge: 18,
    title: "The interview question you didn't prepare for",
    body: "The interviewer looks up from their notes: 'Tell me about a time you got something wrong.' The polished answer disappears from your head.",
    choices: [
      { label: "Tell a real story and what you learned", impact: "+ confidence · hiring chance", effect: state => { state.confidence += 6; if (state.smarts + state.confidence > 110 && Math.random() < 0.55) { state.income += 900; return "They appreciated the honest answer and offered a paid trial shift."; } return "The answer wasn't perfect, but it sounded like you. That counts for something."; } },
      { label: "Give the safest answer you can", impact: "+ calm · small chance", effect: state => { if (Math.random() < 0.35) { state.confidence += 3; return "It was conventional, but it landed well enough to get a second interview."; } state.confidence -= 1; return "They moved on to the next question. You made a note to prepare differently."; } }
    ]
  },
  {
    minAge: 18,
    title: "The late-night call",
    body: "A friend calls after midnight. They say they're fine, then go quiet in a way that says otherwise.",
    choices: [
      { label: "Stay on the phone and listen", impact: "+ kindness · + friendship", effect: state => { state.kindness += 7; state.relationships.friends += 8; return "You stayed. By the end, they didn't sound alone anymore."; } },
      { label: "Help them find support tomorrow", impact: "+ purpose · + stability", effect: state => { state.kindness += 4; state.purpose += 5; return "You made a plan together and promised to check in the next morning."; } },
      { label: "Set a gentle boundary", impact: "+ confidence · keep connection", effect: state => { state.confidence += 4; state.relationships.friends += 2; return "You cared about them and your own limits. Both things can be true."; } }
    ]
  }
];

const CHILDHOOD_EVENTS = [
  {
    minAge: 5,
    maxAge: 12,
    title: "A new friend at recess",
    body: "Someone saves you a spot at lunch. It's a small thing, which is how most big things start.",
    choices: [
      { label: "Share your snack", impact: "+ friendship · + happiness", effect: state => { state.relationships.friends += 10; state.happiness += 5; return "You split the last cookie. A friendship began."; } },
      { label: "Ask them to play", impact: "+ confidence · + friendship", effect: state => { state.confidence += 5; state.relationships.friends += 7; return "You asked. They said yes."; } }
    ]
  },
  {
    minAge: 6,
    maxAge: 17,
    title: "Something clicks in class",
    body: "A subject that used to feel impossible suddenly makes a little sense. The teacher notices you noticing.",
    choices: [
      { label: "Follow your curiosity", impact: "+ smarts · + purpose", effect: state => { state.smarts += 8; state.purpose += 5; return "You stayed curious. It opened another door."; } },
      { label: "Help someone else get it", impact: "+ friendship · + confidence", effect: state => { state.relationships.friends += 6; state.confidence += 6; return "Explaining it made you understand it even better."; } }
    ]
  },
  {
    minAge: 7,
    maxAge: 17,
    title: "The first big disappointment",
    body: "You worked hard for something and it didn't go your way. It feels enormous today.",
    choices: [
      { label: "Ask someone you trust for help", impact: "+ family · + happiness", effect: state => { state.relationships.family += 7; state.happiness += 5; return "You didn't have to carry it by yourself."; } },
      { label: "Try again tomorrow", impact: "+ confidence · + purpose", effect: state => { state.confidence += 7; state.purpose += 4; return "It still stung. You decided it wasn't the end of the story."; } }
    ]
  },
  {
    minAge: 9,
    maxAge: 17,
    title: "A door to a new hobby",
    body: "A club, a team, a stack of library books: something catches your attention and won't let go.",
    choices: [
      { label: "Give it a real try", impact: "+ smarts · + happiness", effect: state => { state.smarts += 5; state.happiness += 7; state.purpose += 5; return "You found something that made the hours disappear."; } },
      { label: "Bring a friend along", impact: "+ friendship · + happiness", effect: state => { state.relationships.friends += 8; state.happiness += 5; return "It was more fun with someone beside you."; } }
    ]
  }
];

const elements = {
  setup: document.getElementById("setupScreen"),
  game: document.getElementById("gameScreen"),
  form: document.getElementById("createForm"),
  restart: document.getElementById("restartBtn"),
  title: document.getElementById("lifeTitle"),
  subtitle: document.getElementById("lifeSubtitle"),
  avatar: document.getElementById("avatarEmoji"),
  gender: document.getElementById("genderTag"),
  birthplace: document.getElementById("birthplaceTag"),
  home: document.getElementById("homeValue"),
  age: document.getElementById("ageNumber"),
  ageStage: document.getElementById("ageStage"),
  year: document.getElementById("yearValue"),
  cash: document.getElementById("cashValue"),
  work: document.getElementById("workValue"),
  outfit: document.getElementById("outfitValue"),
  footerName: document.getElementById("footerName"),
  statGrid: document.getElementById("statGrid"),
  healthStatus: document.getElementById("healthStatus"),
  actionFilters: document.getElementById("actionFilters"),
  actionGrid: document.getElementById("actionGrid"),
  nextYear: document.getElementById("nextYearBtn"),
  storyList: document.getElementById("storyList"),
  relationshipList: document.getElementById("relationshipList"),
  familyRoster: document.getElementById("familyRoster"),
  petList: document.getElementById("petList"),
  wardrobeList: document.getElementById("wardrobeList"),
  possessionList: document.getElementById("possessionList"),
  carList: document.getElementById("carList"),
  milestoneList: document.getElementById("milestoneList"),
  dialog: document.getElementById("eventDialog"),
  dialogYear: document.getElementById("dialogYear"),
  eventTitle: document.getElementById("eventTitle"),
  eventCopy: document.getElementById("eventCopy"),
  eventChoices: document.getElementById("eventChoices"),
  toast: document.getElementById("toast")
};

function clamp(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function createState(identity) {
  return {
    ...identity,
    shirtColor: CLOTHING[0].color,
    outfitId: CLOTHING[0].id,
    ownedClothing: [CLOTHING[0].id],
    age: 0,
    year: new Date().getFullYear(),
    startYear: new Date().getFullYear(),
    cash: 0,
    income: 0,
    career: 0,
    jobId: null,
    education: "None",
    schoolAttendance: 0,
    collegeEnrolled: false,
    collegeYears: 0,
    health: 85,
    happiness: 60,
    smarts: 45,
    confidence: 40,
    purpose: 35,
    stability: 40,
    kindness: 50,
    communityActions: 0,
    relationships: { family: 20, friends: 0, love: 0 },
    family: generateFamilyMembers(identity),
    partner: null,
    children: [],
    lastChildYear: null,
    pets: [],
    phoneOwned: false,
    socialAccount: false,
    licenseOwned: false,
    licensePractice: 0,
    examScores: {},
    illness: null,
    illnessYears: 0,
    healthExams: [],
    lastHealthExamYear: null,
    onlinePosts: 0,
    surgeries: [],
    vehicles: [],
    homeId: null,
    hasTraveled: false,
    gameOver: false,
    milestones: [],
    log: [{ year: new Date().getFullYear(), text: `You were born in ${identity.city}. The first page is blank.` }]
  };
}

function loadState() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(SAVE_KEY));
    if (!saved || typeof saved.name !== "string" || !Number.isInteger(saved.age) || !Array.isArray(saved.log)) return null;
    const gender = saved.gender === "Female" || saved.gender === "Male" ? saved.gender : pickRandom(GENDERS).label;
    const pronouns = gender === "Female" ? "she" : "he";
    const base = createState({
      name: saved.name,
      gender,
      pronouns,
      city: saved.city || "Somewhere on Earth",
      skinTone: saved.skinTone || pickRandom(SKIN_TONES),
      hairColor: saved.hairColor || pickRandom(HAIR_COLORS),
      hairStyle: saved.hairStyle || pickRandom(HAIR_STYLES),
      eyeColor: saved.eyeColor || pickRandom(EYE_COLORS),
      accessory: saved.accessory || pickRandom(ACCESSORIES),
      shirtColor: saved.shirtColor || pickRandom(SHIRT_COLORS)
    });
    return {
      ...base,
      ...saved,
      gender,
      pronouns,
      relationships: { ...base.relationships, ...saved.relationships },
      family: Array.isArray(saved.family) ? saved.family : base.family,
      children: Array.isArray(saved.children) ? saved.children : [],
      pets: Array.isArray(saved.pets) ? saved.pets : [],
      ownedClothing: Array.isArray(saved.ownedClothing) ? saved.ownedClothing : [CLOTHING[0].id],
      healthExams: Array.isArray(saved.healthExams) ? saved.healthExams : [],
      vehicles: Array.isArray(saved.vehicles) ? saved.vehicles.map(vehicle => ({ ...vehicle, condition: vehicle.condition ?? 100, miles: vehicle.miles ?? 0 })) : [],
      surgeries: Array.isArray(saved.surgeries) ? saved.surgeries : [],
      examScores: saved.examScores || {},
      milestones: Array.isArray(saved.milestones) ? saved.milestones : [],
      log: saved.log.slice(-40)
    };
  } catch {
    return null;
  }
}

let state = loadState();
let pendingEvent = null;
let toastTimer;
let selectedActionCategory = "everyday";

function saveState() {
  try {
    if (state) window.localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  } catch {
    showToast("This browser couldn't save your progress.");
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function money(value) {
  const rounded = Math.round(value);
  return `${rounded < 0 ? "−" : ""}$${Math.abs(rounded).toLocaleString("en-US")}`;
}

function careerTitle() {
  if (state.age < 5) return "Growing up";
  if (state.age < 18) return "In school";
  if (!state.jobId) return "Looking for work";
  const job = JOBS.find(candidate => candidate.id === state.jobId);
  return job ? job.title : "Working";
}

function ageStage(age) {
  if (age === 0) return "Newborn";
  if (age < 2) return "Baby";
  if (age < 5) return "Toddler";
  if (age < 13) return "Child";
  if (age < 18) return "Teen";
  if (age < 25) return "Young adult";
  return "Adult";
}

function characterPortrait(character) {
  const isBaby = character.age < 2;
  const faceY = isBaby ? 67 : 60;
  const faceRadius = isBaby ? 30 : 34;
  const hairShapes = {
    short: "M29 56c-1-25 11-42 33-42 23 0 35 17 32 42-14-2-25-9-34-20-7 10-17 17-31 20z",
    curly: "M27 57c-5-25 9-43 24-43 8-12 28-11 34 0 18-2 26 17 19 43-12-4-19-10-26-20-12 12-31 19-51 20z",
    wavy: "M26 62c-4-27 8-47 27-47 13-12 31-6 34 5 16 4 19 23 12 43-13-4-19-11-24-20-13 14-30 21-49 19z",
    long: "M26 63c-4-28 10-48 36-48 25 0 39 18 34 48-3 22-11 34-16 40l-9-15H43l-9 15c-7-12-10-24-8-40z",
    braids: "M27 59c-3-27 10-45 35-45 24 0 37 18 34 45l-7 42-11-1-2-39c-9-4-14-10-19-17-7 11-17 17-30 21l-2 35-11 1z"
  };
  const hairShape = hairShapes[character.hairStyle] || hairShapes.short;
  const hair = `<path d="${hairShape}" fill="${character.hairColor}" stroke="#263541" stroke-width="5" stroke-linejoin="round"/>`;
  const outfit = CLOTHING.find(item => item.id === character.outfitId) || CLOTHING[0];
  const outfitDetails = {
    star: `<path d="m62 111 4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill="#fff8e9"/>`,
    stripe: `<path d="M24 111h76m-82 14h88" stroke="#fff8e9" stroke-width="5" opacity=".88"/>`,
    pocket: `<path d="M75 108h20v20H75z" fill="none" stroke="#fff8e9" stroke-width="3"/>`,
    patch: `<path d="M78 107h18v18H78z" rx="3" fill="#ffcf58" stroke="#263541" stroke-width="2"/><path d="m82 116 4 4 7-8" fill="none" stroke="#263541" stroke-width="2"/>`,
    sparkle: `<path d="m62 106 3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#ffcf58"/><circle cx="85" cy="121" r="3" fill="#fff8e9"/>`
  }[outfit.pattern] || "";
  const glasses = character.accessory === "round-glasses" ? `<g fill="none" stroke="#263541" stroke-width="3"><circle cx="49" cy="${faceY + 2}" r="10"/><circle cx="75" cy="${faceY + 2}" r="10"/><path d="M59 ${faceY + 2}h6"/></g>` : "";
  const freckles = character.accessory === "freckles" ? `<g fill="#8b5945"><circle cx="38" cy="${faceY + 13}" r="1.5"/><circle cx="43" cy="${faceY + 16}" r="1.5"/><circle cx="81" cy="${faceY + 16}" r="1.5"/><circle cx="86" cy="${faceY + 13}" r="1.5"/></g>` : "";
  const hairClip = character.accessory === "hair-clip" ? `<path d="M82 29h13" stroke="#ffcf58" stroke-width="5" stroke-linecap="round"/>` : "";
  const torso = isBaby
    ? `<path d="M18 139c2-25 17-39 44-39s42 14 44 39" fill="${character.shirtColor}" stroke="#263541" stroke-width="5"/>`
    : `<path d="M11 139c3-33 20-50 51-50s48 17 51 50" fill="${character.shirtColor}" stroke="#263541" stroke-width="5"/>`;
  return `<svg class="character-portrait" viewBox="0 0 124 144" role="img" aria-label="Illustrated portrait of ${escapeHtml(character.name)}"><ellipse cx="62" cy="139" rx="48" ry="5" fill="#263541" opacity=".12"/>${torso}${outfitDetails}<circle cx="62" cy="${faceY}" r="${faceRadius}" fill="${character.skinTone}" stroke="#263541" stroke-width="5"/>${hair}<ellipse cx="49" cy="${faceY + 2}" rx="3" ry="4" fill="${character.eyeColor || "#263541"}"/><ellipse cx="75" cy="${faceY + 2}" rx="3" ry="4" fill="${character.eyeColor || "#263541"}"/><path d="M53 ${faceY + 16}q9 8 18 0" fill="none" stroke="#263541" stroke-width="3.5" stroke-linecap="round"/><circle cx="38" cy="${faceY + 13}" r="4" fill="#ee6953" opacity=".55"/><circle cx="86" cy="${faceY + 13}" r="4" fill="#ee6953" opacity=".55"/>${glasses}${freckles}${hairClip}</svg>`;
}

function careerLimit(age) {
  return age < 18 ? 0 : Math.floor((age - 18) / 3) + 1;
}

function actionCost(action) {
  return typeof action.cost === "function" ? action.cost(state) : action.cost;
}

function actionLockReason(action) {
  if (state.age < action.minAge) return `Available at age ${action.minAge}`;
  if (action.maxAge !== undefined && state.age > action.maxAge) return "School days are behind you.";
  if (action.id === "career" && state.jobId && state.career >= careerLimit(state.age)) return `Promotion chances improve at age ${state.age + 3}.`;
  if (action.id === "sidegig" && state.health <= 15) return "You need to rest before another project.";
  if (action.id === "college" && (state.collegeEnrolled || state.education === "College degree")) return state.education === "College degree" ? "Degree complete." : `Enrolled · ${state.collegeYears} of 4 years`;
  if (action.id === "college" && state.education !== "High school diploma") return "Finish high school first.";
  if (action.id === "college" && (state.examScores.sat || 0) < 55) return "Pass the college entrance exam first.";
  if (action.id === "doctor" && !state.illness) return "You're feeling healthy right now.";
  if (["healthExam", "physicalExam", "pelvicExam"].includes(action.id) && state.lastHealthExamYear === state.year) return "You've had a health exam this year.";
  if (action.id === "car" && !state.licenseOwned) return "Get a driver's license first.";
  if (action.id === "carCare" && state.vehicles.length === 0) return "Buy a car before visiting the garage.";
  if (action.id === "carCare" && state.vehicles.every(vehicle => vehicle.condition >= 100)) return "Your cars are already in great shape.";
  if (action.id === "roadTrip" && state.vehicles.length === 0) return "Buy a car before planning a road trip.";
  if (action.id === "roadTrip" && !state.licenseOwned) return "Get a driver's license first.";
  if (action.id === "sellCar" && state.vehicles.length === 0) return "There's no car in the garage to sell.";
  if (action.id === "pet" && state.pets.length >= 3) return "Your home is already full of pets.";
  if ((action.id === "adoptChild" || action.id === "haveChild") && state.children.length >= 4) return "Your family is already full of adventure.";
  if (action.id === "adoptChild" && state.lastChildYear === state.year) return "Give your family a year to settle in.";
  if (action.id === "haveChild" && !state.partner) return "Start a relationship first.";
  if (action.id === "haveChild" && state.relationships.love < 60) return "Build a closer relationship first.";
  if (action.id === "haveChild" && state.lastChildYear === state.year) return "Give your family a year to settle in.";
  if (action.id === "car" && state.vehicles.length >= 3) return "You already have three vehicles.";
  if (action.id === "house" && state.homeId) return "You already own a home.";
  if (action.id === "surgery" && state.surgeries.length === SURGERIES.length) return "You've explored every procedure.";
  const atLimit = {
    play: state.happiness >= 100 && state.smarts >= 100,
    family: state.relationships.family >= 100 && state.happiness >= 100,
    study: state.smarts >= 100,
    school: state.smarts >= 100,
    library: state.smarts >= 100,
    wellness: state.health >= 100 && state.happiness >= 100,
    friends: state.relationships.friends >= 100 && state.happiness >= 100,
    love: state.relationships.love >= 100 && state.happiness >= 100,
    nightout: state.happiness >= 100 && state.relationships.friends >= 100,
    travel: state.happiness >= 100 && state.purpose >= 100
  }[action.id];
  if (atLimit) return "You've made the most of this for now.";
  if (state.cash < actionCost(action)) return "Not enough money yet.";
  return "";
}

function nextFamilyName() {
  const lastName = state.name.split(" ").at(-1);
  const existingFirstNames = new Set(state.family.map(member => member.name.split(" ")[0]));
  if (state.partner) existingFirstNames.add(state.partner.name.split(" ")[0]);
  const availableNames = FIRST_NAMES.filter(name => !existingFirstNames.has(name));
  return `${pickRandom(availableNames.length ? availableNames : FIRST_NAMES)} ${lastName}`;
}

function addLog(text) {
  state.log.push({ year: state.year, text });
  state.log = state.log.slice(-40);
}

function updateMilestones() {
  for (const milestone of MILESTONES) {
    if (!state.milestones.includes(milestone.id) && milestone.test(state)) {
      state.milestones.push(milestone.id);
      addLog(`Milestone: ${milestone.label.toLowerCase()}.`);
    }
  }
}

function renderStats() {
  elements.statGrid.innerHTML = STAT_NAMES.map(([key, label]) => {
    const value = clamp(state[key]);
    return `<div class="stat"><div class="stat-top"><strong>${label}</strong><span>${value}</span></div><div class="stat-track" role="meter" aria-label="${label}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${value}"><div class="stat-fill" style="width:${value}%"></div></div></div>`;
  }).join("");
}

function renderActions() {
  elements.actionFilters.innerHTML = ACTION_CATEGORIES.map(([id, label]) => `<button class="filter-button ${selectedActionCategory === id ? "is-selected" : ""}" type="button" data-filter="${id}" aria-pressed="${selectedActionCategory === id}">${label}</button>`).join("");
  const visibleActions = selectedActionCategory === "all" ? ACTIONS : ACTIONS.filter(action => action.category === selectedActionCategory);
  elements.actionGrid.innerHTML = visibleActions.map(action => {
    const cost = actionCost(action);
    const reason = actionLockReason(action);
    const disabled = state.gameOver || Boolean(reason) || pendingEvent;
    const costText = state.age < action.minAge ? `AGE ${action.minAge}` : cost === 0 ? "NO COST" : money(cost);
    const title = action.id === "career" && !state.jobId ? "Pick a job" : action.id === "career" ? "Ask for a promotion" : action.id === "college" && state.collegeEnrolled ? "College progress" : action.title;
    const detail = action.id === "career" && !state.jobId ? "Find a job that fits your skills." : action.id === "college" && state.collegeEnrolled ? `${state.collegeYears} of 4 years completed.` : action.detail;
    return `<button class="action-button" type="button" data-action="${action.id}" ${disabled ? "disabled" : ""}><span class="action-icon" aria-hidden="true">${action.icon}</span><span class="action-copy"><strong>${title}</strong><small>${reason || detail}</small></span><span class="action-cost">${costText}</span></button>`;
  }).join("");
  elements.nextYear.disabled = state.gameOver || Boolean(pendingEvent);
  elements.nextYear.setAttribute("aria-label", state.gameOver ? "This life has ended" : `Age up from ${state.age}`);
  if (state.gameOver) {
    elements.nextYear.textContent = "Your story is complete";
  } else {
    elements.nextYear.innerHTML = 'Age up <span aria-hidden="true">→</span>';
  }
}

function renderRelationships() {
  const names = [
    ["family", "Family", "The people who knew you first"],
    ["friends", "Friends", "Your chosen constellation"],
    ["love", state.partner ? state.partner.name : "Dating", "Room for a plot twist"]
  ];
  elements.relationshipList.innerHTML = names.map(([key, label, note]) => {
    const value = clamp(state.relationships[key]);
    return `<div class="relationship"><span class="relationship-name">${label}</span><span class="relationship-value">${value} / 100</span><span class="relationship-note" role="meter" aria-label="${label}: ${value} out of 100" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${value}"><span style="width:${value}%"></span></span><span class="visually-hidden">${note}</span></div>`;
  }).join("");
}

function renderFamily() {
  const members = [...state.family];
  if (state.partner) members.push({ name: state.partner.name, relation: "Partner" });
  elements.familyRoster.innerHTML = members.map(member => `<div class="family-member"><span class="family-emoji" aria-hidden="true">${member.relation === "Child" || member.relation === "Adopted child" ? "🧒" : "🙂"}</span><span class="family-name">${escapeHtml(member.name)}<small>${escapeHtml(member.relation)}</small></span></div>`).join("");
}

function renderPets() {
  elements.petList.innerHTML = state.pets.length
    ? state.pets.map(pet => `<div class="pet-member"><span class="pet-emoji" aria-hidden="true">${pet.emoji}</span><span><strong>${escapeHtml(pet.name)}</strong><small>${escapeHtml(pet.species)}</small></span></div>`).join("")
    : '<p class="empty-list">No pets yet.</p>';
}

function renderWardrobe() {
  elements.wardrobeList.innerHTML = state.ownedClothing.map(id => {
    const outfit = CLOTHING.find(item => item.id === id);
    if (!outfit) return "";
    const isWearing = state.outfitId === outfit.id;
    return `<div class="wardrobe-item ${isWearing ? "is-wearing" : ""}"><span aria-hidden="true">${outfit.icon}</span><span class="wardrobe-copy"><strong>${escapeHtml(outfit.name)}</strong><small>${escapeHtml(outfit.description)}</small></span><small class="wardrobe-status">${isWearing ? "Wearing" : "Owned"}</small></div>`;
  }).join("");
}

function renderPossessions() {
  const possessions = [];
  const outfit = CLOTHING.find(item => item.id === state.outfitId);
  if (outfit) possessions.push({ icon: outfit.icon, label: `Wearing ${outfit.name}` });
  if (state.education !== "None") possessions.push({ icon: "🎓", label: state.education });
  if (state.collegeEnrolled) possessions.push({ icon: "📖", label: `College · ${state.collegeYears} of 4 years` });
  if (state.jobId) possessions.push({ icon: "💼", label: JOBS.find(job => job.id === state.jobId)?.title || "Employed" });
  if (state.licenseOwned) possessions.push({ icon: "🪪", label: "Driver's license" });
  if (state.phoneOwned) possessions.push({ icon: "📱", label: "Smartphone" });
  if (state.socialAccount) possessions.push({ icon: "💬", label: `Social posts · ${state.onlinePosts}` });
  for (const vehicle of state.vehicles) possessions.push({ icon: vehicle.emoji, label: vehicle.name });
  if (state.homeId) possessions.push({ icon: HOMES.find(home => home.id === state.homeId)?.emoji || "🏠", label: HOMES.find(home => home.id === state.homeId)?.name || "Homeowner" });
  for (const surgery of state.surgeries) possessions.push({ icon: "✚", label: surgery });
  elements.possessionList.innerHTML = possessions.length
    ? possessions.map(item => `<div class="possession-item"><span aria-hidden="true">${item.icon}</span><strong>${escapeHtml(item.label)}</strong></div>`).join("")
    : '<p class="empty-list">The story is just beginning.</p>';
}

function renderGarage() {
  elements.carList.innerHTML = state.vehicles.length
    ? state.vehicles.map(vehicle => {
      const condition = clamp(vehicle.condition ?? 100);
      return `<article class="garage-car"><div class="garage-car-heading"><span class="garage-car-emoji" aria-hidden="true">${vehicle.emoji}</span><span class="garage-car-name"><strong>${escapeHtml(vehicle.name)}</strong><small>${escapeHtml(vehicle.economy)} · ${escapeHtml(vehicle.reliability)}</small></span><span class="garage-condition-value">${condition}%</span></div><div class="car-condition-track" role="meter" aria-label="${escapeHtml(vehicle.name)} condition" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${condition}"><span style="width:${condition}%"></span></div><div class="garage-car-mileage">${Number(vehicle.miles || 0).toLocaleString("en-US")} miles</div></article>`;
    }).join("")
    : '<p class="empty-list">No car yet. Get a license, then pick a ride.</p>';
}

function renderHealthStatus() {
  const condition = state.illness
    ? `<span class="health-condition"><span aria-hidden="true">🤒</span><span><strong>${escapeHtml(state.illness.name)}</strong><small>${state.illnessYears} year${state.illnessYears === 1 ? "" : "s"} · Visit a doctor to treat it</small></span></span>`
    : '<span class="health-condition is-well"><span aria-hidden="true">🩺</span><span><strong>No current illness</strong><small>Keep looking after yourself</small></span></span>';
  const education = state.collegeEnrolled
    ? `College · ${state.collegeYears} of 4 years`
    : state.education === "In school" ? `School · ${state.schoolAttendance} good days` : state.education;
  const lastExam = state.healthExams.at(-1);
  const examLabel = lastExam ? HEALTH_EXAMS.find(exam => exam.id === lastExam.id)?.title || "Health exam" : "No health exams yet";
  elements.healthStatus.innerHTML = `${condition}<span class="school-status"><span aria-hidden="true">📚</span><span>${escapeHtml(education)}${state.examScores.sat ? ` · SAT ${state.examScores.sat}` : ""}</span></span><span class="school-status"><span aria-hidden="true">🩺</span><span>${escapeHtml(examLabel)}</span></span>`;
}

function renderMilestones() {
  elements.milestoneList.innerHTML = MILESTONES.map(milestone => {
    const earned = state.milestones.includes(milestone.id);
    return `<li class="milestone ${earned ? "is-earned" : ""}"><span class="milestone-icon" aria-hidden="true">${earned ? "✓" : "·"}</span><span>${milestone.label}</span></li>`;
  }).join("");
}

function renderStory() {
  const entries = state.log.slice(-5).reverse();
  elements.storyList.innerHTML = entries.map(entry => `<li class="story-item"><span class="story-year">${entry.year}</span><p class="story-text">${escapeHtml(entry.text)}</p></li>`).join("");
}

function render() {
  if (!state) return;
  elements.setup.hidden = true;
  elements.game.hidden = false;
  elements.restart.hidden = false;
  elements.footerName.textContent = state.name.toUpperCase();
  elements.title.textContent = state.gameOver ? `${state.name}'s life is complete` : state.name;
  elements.subtitle.textContent = state.gameOver
    ? `${state.age} years old · Born in ${state.city}`
    : `${ageStage(state.age)} · ${state.pronouns === "she" ? "she / her" : "he / him"}`;
  elements.avatar.innerHTML = characterPortrait(state);
  elements.gender.textContent = state.gender;
  elements.birthplace.textContent = `Born in ${state.city}`;
  elements.home.textContent = state.homeId ? HOMES.find(home => home.id === state.homeId)?.name || "Homeowner" : state.city;
  elements.age.textContent = String(state.age);
  elements.ageStage.textContent = ageStage(state.age).toUpperCase();
  elements.year.textContent = String(state.year);
  elements.cash.textContent = money(state.cash);
  elements.work.textContent = careerTitle();
  elements.outfit.textContent = CLOTHING.find(item => item.id === state.outfitId)?.name || "Everyday look";
  renderStats();
  renderHealthStatus();
  renderActions();
  renderRelationships();
  renderFamily();
  renderPets();
  renderWardrobe();
  renderPossessions();
  renderGarage();
  renderMilestones();
  renderStory();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 3000);
}

function jobRequirementReasons(job) {
  const reasons = [];
  if (state.age < 18) reasons.push("age 18");
  if (state.smarts < job.intelligence) reasons.push(`smarts ${job.intelligence}`);
  if (job.education === "High school diploma" && !["High school diploma", "College degree"].includes(state.education)) reasons.push("high school diploma");
  if (job.education === "College degree" && state.education !== "College degree") reasons.push("college degree");
  if (job.examId && (state.examScores[job.examId] || 0) < 70) reasons.push(`${EXAMS.find(exam => exam.id === job.examId)?.title || "licensing exam"} score 70`);
  return reasons;
}

function jobHireChance(job) {
  return Math.max(10, Math.min(95, Math.round(48 + (state.smarts - job.intelligence) * 1.1 + state.confidence * 0.18)));
}

function openExamPicker() {
  openEvent({
    title: "Choose an exam",
    body: "Exams depend on preparation. Studying raises your smarts, and a higher score can unlock more choices.",
    choices: EXAMS.map(exam => {
      const reasons = [];
      if (state.age < exam.minAge) reasons.push(`age ${exam.minAge}`);
      if (exam.education && state.education !== exam.education) reasons.push(exam.education.toLowerCase());
      if (exam.minSmarts && state.smarts < exam.minSmarts) reasons.push(`smarts ${exam.minSmarts}`);
      return {
        label: exam.title,
        impact: reasons.length ? `Needs ${reasons.join(" + ")}` : `Best score: ${state.examScores[exam.id] || "none"}`,
        disabled: reasons.length > 0,
        effect: () => {
          const score = clamp(55 + (state.smarts - exam.difficulty) * 1.1 + Math.random() * 35);
          state.examScores[exam.id] = Math.max(state.examScores[exam.id] || 0, score);
          state.confidence += score >= 70 ? 5 : -2;
          return `You scored ${score} on ${exam.title.toLowerCase()}. ${score >= 70 ? "You passed." : "Study up and try again."}`;
        }
      };
    })
  });
}

function openLicenseTest() {
  openEvent({
    title: "Driver's license test",
    body: "Practice helps. Confidence and smarts both affect the road-test result.",
    choices: [
      { label: "Study the road rules", impact: "+ practice · + smarts", effect: state => { state.licensePractice += 1; state.smarts += 2; return "You reviewed the signs and rules. You feel more prepared."; } },
      { label: "Take the road test", impact: `${Math.min(95, 50 + state.confidence + state.licensePractice * 8)}% chance`, effect: state => { const chance = Math.min(0.95, 0.5 + state.confidence * 0.004 + state.licensePractice * 0.08); if (Math.random() < chance) { state.licenseOwned = true; return "You passed. Driver's license acquired!"; } state.confidence -= 2; return "You didn't pass this time. Practice a little and try again."; } }
    ]
  });
}

function openVehiclePicker() {
  openEvent({
    title: "Choose your car",
    body: `You have ${money(state.cash)}. Every option needs a driver's license.`,
    choices: VEHICLES.map(vehicle => ({
      label: `${vehicle.emoji} ${vehicle.name} · ${money(vehicle.cost)}`,
      impact: state.cash < vehicle.cost ? "Not enough money" : `${vehicle.economy} · ${vehicle.reliability}`,
      disabled: state.cash < vehicle.cost || state.vehicles.length >= 3,
      effect: () => {
        state.cash -= vehicle.cost;
        state.vehicles.push({ ...vehicle, condition: 100, miles: 0 });
        state.stability += 3;
        return `You bought a ${vehicle.name.toLowerCase()}. More places are within reach.`;
      }
    }))
  });
}

function openCarCarePicker() {
  openEvent({
    title: "Take care of your car",
    body: "Regular maintenance keeps your car reliable. Choose which car to service.",
    choices: state.vehicles.map((vehicle, index) => {
      const repairCost = Math.max(150, Math.round((100 - vehicle.condition) * 38));
      return {
        label: `${vehicle.emoji} ${vehicle.name} · ${vehicle.condition}% condition`,
        impact: vehicle.condition >= 100 ? "Already in great shape" : `Repair · ${money(repairCost)}`,
        disabled: vehicle.condition >= 100 || state.cash < repairCost,
        effect: () => {
          state.cash -= repairCost;
          state.vehicles[index].condition = 100;
          state.stability += 2;
          return `You serviced the ${vehicle.name.toLowerCase()}. It feels road-ready again.`;
        }
      };
    }).concat([{ label: "Quick wash and interior clean", impact: "$80 · + happiness", disabled: state.cash < 80, effect: state => { state.cash -= 80; state.happiness += 2; return "The car is clean, the windows are clear, and the whole week feels a little fresher."; } }])
  });
}

function openRoadTripPicker() {
  const routes = [
    { name: "Coastline loop", cost: 420, miles: 280, happiness: 12 },
    { name: "Mountain lookout", cost: 300, miles: 190, happiness: 10 },
    { name: "Small-town weekend", cost: 560, miles: 410, happiness: 15 }
  ];
  openEvent({
    title: "Plan a road trip",
    body: "Pick a route. Every trip adds miles, and a tired car can surprise you.",
    choices: routes.map(route => ({
      label: `${route.name} · ${route.miles} miles`,
      impact: `${money(route.cost)} · + ${route.happiness} happiness`,
      disabled: state.cash < route.cost,
      effect: () => {
        const vehicle = pickRandom(state.vehicles);
        state.cash -= route.cost;
        vehicle.miles += route.miles;
        vehicle.condition = Math.max(0, vehicle.condition - Math.ceil(route.miles / 80));
        state.happiness += route.happiness;
        state.hasTraveled = true;
        if (vehicle.condition < 45 && Math.random() < 0.45) {
          return {
            message: `The ${vehicle.name.toLowerCase()} sputtered out near ${route.name.toLowerCase()}. The view was nice; the timing wasn't.`,
            followUpEvent: {
              title: "A roadside problem",
              body: `${vehicle.name} needs attention before the trip can continue.`,
              choices: [
                { label: "Call roadside assistance", impact: "$450 · repair on the spot", disabled: state.cash < 450, effect: () => { state.cash -= 450; vehicle.condition = 70; return "A tow truck arrived, and you made it home safely."; } },
                { label: "Wait for a local mechanic", impact: "$250 · lose the afternoon", disabled: state.cash < 250, effect: () => { state.cash -= 250; vehicle.condition = 55; return "A local mechanic got you moving again. The rest of the trip became a story."; } }
              ]
            }
          };
          }
          return `You drove the ${route.name.toLowerCase()} in your ${vehicle.name.toLowerCase()}. ${route.miles} miles, a full camera roll, and a better mood.`;
        }
      }
    }))
  });
}

function openCarSalePicker() {
  openEvent({
    title: "Choose a car to sell",
    body: "The offer depends on the model and its current condition.",
    choices: state.vehicles.map((vehicle, index) => {
      const offer = Math.round(vehicle.cost * vehicle.condition / 100 * 0.62);
      return {
        label: `${vehicle.emoji} ${vehicle.name} · ${vehicle.condition}% condition`,
        impact: `Offer ${money(offer)}`,
        effect: () => {
          state.vehicles.splice(index, 1);
          state.cash += offer;
          return `You sold the ${vehicle.name.toLowerCase()} for ${money(offer)}.`;
        }
      };
    })
  });
}

function openHomePicker() {
  openEvent({
    title: "Choose a place to call home",
    body: `You have ${money(state.cash)}. Pick a home that fits your budget and the life you're building.`,
    choices: HOMES.map(home => ({
      label: `${home.emoji} ${home.name} · ${money(home.cost)}`,
      impact: state.cash < home.cost ? "Not enough money" : "Buy this home",
      disabled: state.cash < home.cost,
      effect: () => {
        state.cash -= home.cost;
        state.homeId = home.id;
        state.stability += 12;
        state.happiness += 5;
        return `You bought a ${home.name.toLowerCase()}. The keys feel heavier than they look.`;
      }
    }))
  });
}

function openWardrobePicker() {
  openEvent({
    title: "Pick your look",
    body: `You're wearing ${CLOTHING.find(item => item.id === state.outfitId)?.name || "your everyday clothes"}. Buy something new or change into an outfit you own.`,
    choices: CLOTHING.map(item => {
      const owned = state.ownedClothing.includes(item.id);
      const ageLocked = state.age < item.minAge;
      return {
        label: `${item.icon} ${item.name}${owned ? " · owned" : ` · ${money(item.cost)}`}`,
        impact: ageLocked ? `Available at age ${item.minAge}` : `${owned ? "Owned" : "Buy and wear"} · ${item.description}`,
        disabled: ageLocked || (!owned && state.cash < item.cost),
        effect: () => {
          if (!owned) {
            state.cash -= item.cost;
            state.ownedClothing.push(item.id);
          }
          state.outfitId = item.id;
          state.shirtColor = item.color;
          state.confidence += 2;
          return `You put on the ${item.name.toLowerCase()}. Looking good.`;
        }
      };
    })
  });
}

function createHealthExamResultEvent(exam) {
  state.cash -= exam.cost;
  state.lastHealthExamYear = state.year;
  state.healthExams.push({ id: exam.id, year: state.year });

  const hasFinding = Math.random() < 0.3;
  if (!hasFinding) {
    return {
      title: `${exam.title} results`,
      body: pickRandom(["Everything looks good. The clinician recommends your usual healthy routines.", "No major concerns showed up today. A reassuring result.", "Your results are in the expected range. Keep checking in when you need to."]),
      choices: [
        { label: "Keep it up", impact: "+ health", effect: state => { state.health += 4; return "You left feeling reassured and a little more informed."; } },
        { label: "Ask about prevention", impact: "+ smarts · + purpose", effect: state => { state.smarts += 2; state.purpose += 2; return "A few practical tips gave you something useful to work with."; } }
      ]
    };
  }

  const finding = exam.finding
    ? SICKNESSES.find(condition => condition.name === exam.finding) || { name: exam.finding, severity: 6 }
    : exam.findings
      ? SICKNESSES.find(condition => condition.name === pickRandom(exam.findings)) || { name: pickRandom(exam.findings), severity: 6 }
      : pickRandom(SICKNESSES.filter(condition => state.age >= condition.minAge));
  state.illness = finding;
  state.illnessYears = 0;
  state.health -= Math.ceil(finding.severity * 0.2);
  return {
    title: `${exam.title}: follow-up needed`,
    body: `The results flagged ${finding.name.toLowerCase()}. It's manageable, and you have options for what to do next.`,
    choices: [
      { label: "Follow the care plan", impact: "Treat the finding · + health", effect: state => { state.illness = null; state.illnessYears = 0; state.health += 12; state.purpose += 2; return `You followed up on ${finding.name.toLowerCase()} and started feeling better.`; } },
      { label: "Monitor it for now", impact: "Keep an eye on symptoms", effect: state => { state.confidence += 1; return `You made a note to watch your ${finding.name.toLowerCase()} symptoms.`; } }
    ]
  };
}

function openHealthExam(examId) {
  const exam = HEALTH_EXAMS.find(candidate => candidate.id === examId && candidate.id !== "pelvic" && state.age >= candidate.minAge);
  if (!exam || state.cash < exam.cost) {
    showToast("That health exam isn't available right now.");
    return;
  }
  openEvent(createHealthExamResultEvent(exam));
}

function openHealthExamPicker() {
  const availableExams = HEALTH_EXAMS.filter(exam => exam.id !== "pelvic" && state.age >= exam.minAge);
  openEvent({
    title: "Choose a health exam",
    body: "Pick a checkup. Results can be reassuring or uncover something worth following up.",
    choices: availableExams.map(exam => ({
      label: `${exam.icon} ${exam.title} · ${exam.cost === 0 ? "free" : money(exam.cost)}`,
      impact: state.cash < exam.cost ? "Not enough money" : exam.minAge > 0 ? `Available from age ${exam.minAge}` : "Check results",
      disabled: state.cash < exam.cost,
      effect: () => ({
        message: `You went in for a ${exam.title.toLowerCase()}.`,
        followUpEvent: createHealthExamResultEvent(exam)
      })
    }))
  });
}

function openPelvicExamConsent() {
  const exam = HEALTH_EXAMS.find(candidate => candidate.id === "pelvic");
  if (!exam || state.cash < exam.cost) {
    showToast("You don't have enough money for this exam right now.");
    return;
  }
  openEvent({
    title: "Before a pelvic exam",
    body: "This is an optional clinical exam. The clinician explains each step, answers questions, and only proceeds with your consent. You can decline or stop at any time.",
    choices: [
      {
        label: "Continue with the exam",
        impact: `${money(exam.cost)} · Your choice`,
        effect: state => {
          state.cash -= exam.cost;
          state.lastHealthExamYear = state.year;
          state.healthExams.push({ id: exam.id, year: state.year });
          if (Math.random() < 0.3) {
            const finding = pickRandom(SICKNESSES.filter(condition => state.age >= condition.minAge));
            state.illness = finding;
            state.illnessYears = 0;
            state.health -= Math.ceil(finding.severity * 0.2);
            return `The exam found ${finding.name.toLowerCase()}. Your clinician explained the follow-up options.`;
          }
          state.health += 3;
          return "The exam was completed with your consent, and no concerns were found.";
        }
      },
      { label: "Not today", impact: "No charge · No penalty", effect: () => "You decided not to have the exam. That's completely okay." }
    ]
  });
}

function openJobPicker() {
  openEvent({
    title: "Choose a job to apply for",
    body: `Your smarts are ${state.smarts}. Meeting the requirements gets you considered; intelligence and confidence affect the hiring chance.`,
    choices: JOBS.map(job => {
      const reasons = jobRequirementReasons(job);
      return {
        label: `${job.title} · ${money(job.income)} / year`,
        impact: reasons.length ? `Needs ${reasons.join(" + ")}` : `${jobHireChance(job)}% chance`,
        disabled: reasons.length > 0,
        effect: () => {
          if (Math.random() * 100 < jobHireChance(job)) {
            state.jobId = job.id;
            state.career = 1;
            state.income = job.income;
            state.confidence += 5;
            return `You got hired as a ${job.title}. Your salary is ${money(job.income)} a year.`;
          }
          state.confidence -= 2;
          return `The ${job.title} application didn't work out. You can try again or build your skills.`;
        }
      };
    })
  });
}

function openSurgeryPicker() {
  openEvent({
    title: "Explore surgery options",
    body: "Choose whether a procedure feels right for your character. Each has a cost and a small chance of complications.",
    choices: SURGERIES.map(surgery => {
      const alreadyDone = state.surgeries.includes(surgery.title);
      const treatsCondition = surgery.treats === state.illness?.name;
      return {
        label: `${surgery.title} · ${money(surgery.cost)}`,
        impact: alreadyDone ? "Already completed" : surgery.treats && !treatsCondition ? `Treats ${surgery.treats} only` : `${Math.round(surgery.risk * 100)}% complication risk`,
        disabled: alreadyDone || state.cash < surgery.cost || Boolean(surgery.treats && !treatsCondition),
        effect: () => {
          state.cash -= surgery.cost;
          state.surgeries.push(surgery.title);
          if (Math.random() < surgery.risk) {
            state.health -= 12;
            return `Recovery from ${surgery.title.toLowerCase()} was harder than expected. You received extra care.`;
          }
          surgery.benefit(state);
          if (treatsCondition) {
            state.illness = null;
            state.illnessYears = 0;
          }
          return surgery.success;
        }
      };
    })
  });
}

function addChild(adopted) {
  const name = nextFamilyName();
  const relation = adopted ? "Adopted child" : "Child";
  state.family.push({ name, relation });
  state.children.push(name);
  state.lastChildYear = state.year;
  return name;
}

function adoptPet() {
  const pet = pickRandom(PETS);
  const availableNames = PET_NAMES.filter(name => !state.pets.some(existingPet => existingPet.name === name));
  const name = pickRandom(availableNames.length ? availableNames : PET_NAMES);
  state.pets.push({ name, species: pet.species, emoji: pet.emoji });
  return `${name} the ${pet.species.toLowerCase()} is part of the family now.`;
}

function calculateLegacy() {
  const relationshipScore = Math.round(Object.values(state.relationships).reduce((total, value) => total + value, 0) / Object.keys(state.relationships).length);
  const careScore = clamp(state.kindness * 0.65 + state.children.length * 7 + state.pets.length * 4);
  const contributionScore = clamp(state.communityActions * 12 + state.milestones.length * 4);
  const score = Math.round(state.kindness * 0.45 + relationshipScore * 0.25 + careScore * 0.2 + contributionScore * 0.1);
  const title = score >= 85 ? "A generous, deeply loved life" : score >= 70 ? "You made life better for others" : score >= 50 ? "A thoughtful life, still unfolding" : score >= 30 ? "A complicated story" : "A life with room for kindness";
  return { score, title, relationshipScore, careScore, contributionScore };
}

function runAction(actionId) {
  if (state.gameOver || pendingEvent) return;
  const action = ACTIONS.find(candidate => candidate.id === actionId);
  if (!action || actionLockReason(action)) return;
  const cost = actionCost(action);
  let result = "";

  switch (actionId) {
    case "play":
      state.happiness += 4;
      state.smarts += 2;
      result = "You made a game out of the afternoon. It was a good one.";
      break;
    case "family":
      state.relationships.family += 4;
      state.happiness += 2;
      state.kindness += 2;
      result = "A familiar voice, a shared laugh, an ordinary day made better.";
      break;
    case "career": {
      if (!state.jobId) { openJobPicker(); return; }
      const chance = Math.min(0.85, 0.3 + state.smarts * 0.005 + state.career * 0.07);
      if (Math.random() < chance) {
        state.career += 1;
        const raise = 4200 + Math.round(state.smarts * 22);
        state.income += raise;
        state.confidence += 7;
        state.stability += 4;
        result = `You moved up at work. Your annual pay rose by ${money(raise)}.`;
      } else {
        state.smarts += 2;
        state.confidence -= 1;
        result = "No promotion yet. You asked, made your case, and know what to work on.";
      }
      break;
    }
    case "study":
      state.smarts += 8;
      state.purpose += 4;
      result = "You put in the study time. Something new stuck.";
      break;
    case "school":
      state.smarts += 6;
      state.confidence += 2;
      state.schoolAttendance += 1;
      result = "You showed up, did the work, and left a little sharper.";
      break;
    case "library":
      state.smarts += 5;
      state.purpose += 2;
      result = "One book led to another. You left with your head full of new ideas.";
      break;
    case "college":
      state.cash -= cost;
      state.collegeEnrolled = true;
      state.collegeYears = 0;
      result = "You enrolled in college. Four birthdays until graduation.";
      break;
    case "exam":
      openExamPicker();
      return;
    case "wellness":
      state.cash -= cost;
      state.health += 9;
      state.happiness += 5;
      result = "A small reset. Your body noticed.";
      break;
    case "love":
      state.cash -= cost;
      if (!state.partner) {
        if (Math.random() < 0.72) {
          state.partner = { name: nextFamilyName() };
          state.relationships.love += 24;
          state.confidence += 5;
          state.happiness += 6;
          result = `You met ${state.partner.name}. It could be the start of something.`;
        } else {
          state.confidence += 2;
          result = "The date was nice, but neither of you felt a spark. You'll meet someone else.";
        }
      } else {
        state.relationships.love += 10;
        state.happiness += 7;
        state.purpose += 3;
        result = `You planned a date with ${state.partner.name}. The connection got a little stronger.`;
      }
      break;
    case "volunteer":
      state.kindness += 8;
      state.purpose += 5;
      state.happiness += 3;
      state.communityActions += 1;
      result = "You gave your time to the community. Someone's day got easier.";
      break;
    case "phone":
      state.phoneOwned = true;
      result = "You got your first smartphone. A whole new world fits in your pocket.";
      break;
    case "social":
      state.socialAccount = true;
      result = "You joined social media and found a few familiar faces.";
      break;
    case "postOnline":
      state.onlinePosts += 1;
      state.happiness += 2;
      state.relationships.friends += 2;
      result = "You shared a little moment. A few friends sent back love.";
      break;
    case "license":
      openLicenseTest();
      return;
    case "adoptChild": {
      state.cash -= cost;
      const childName = addChild(true);
      state.relationships.family += 12;
      state.happiness += 8;
      state.kindness += 5;
      result = `You welcomed ${childName} into your family through adoption.`;
      break;
    }
    case "haveChild": {
      const childName = addChild(false);
      state.relationships.family += 10;
      state.happiness += 10;
      state.purpose += 5;
      state.kindness += 3;
      result = `You and ${state.partner.name} welcomed ${childName} into your family.`;
      break;
    }
    case "pet":
      state.cash -= cost;
      result = adoptPet();
      state.happiness += 8;
      break;
    case "car":
      openVehiclePicker();
      return;
    case "house":
      openHomePicker();
      return;
    case "wardrobe":
      openWardrobePicker();
      return;
    case "healthExam":
      openHealthExamPicker();
      return;
    case "physicalExam":
      openHealthExam("physical");
      return;
    case "pelvicExam":
      openPelvicExamConsent();
      return;
    case "doctor":
      state.cash -= cost;
      result = `A doctor treated your ${state.illness.name.toLowerCase()}. You're on the mend.`;
      state.illness = null;
      state.illnessYears = 0;
      state.health += 18;
      state.happiness += 2;
      break;
    case "surgery":
      openSurgeryPicker();
      return;
    case "friends":
      state.relationships.friends += 10;
      state.happiness += 5;
      state.kindness += 3;
      result = "You showed up for a friend. The day got better for both of you.";
      break;
    case "nightout":
      state.cash -= cost;
      state.happiness += 12;
      state.health -= 3;
      state.relationships.friends += 5;
      result = "A loud night, a few good stories, and a very slow morning.";
      break;
    case "sidegig": {
      state.cash -= cost;
      const payout = 250 + Math.floor(Math.random() * 651);
      state.cash += payout;
      state.confidence += 4;
      state.health -= 4;
      result = `Your side project brought in ${money(payout)}. You may need a nap.`;
      break;
    }
    case "travel":
      state.cash -= cost;
      state.hasTraveled = true;
      state.happiness += 15;
      state.health += 3;
      state.purpose += 5;
      result = "You left town for a minute. You came back seeing it differently.";
      break;
  }

  for (const key of ["health", "happiness", "smarts", "confidence", "purpose", "stability", "kindness"]) state[key] = clamp(state[key]);
  for (const key of Object.keys(state.relationships)) state.relationships[key] = clamp(state.relationships[key]);
  addLog(result);
  updateMilestones();
  saveState();
  render();
  showToast(result);
}

function openEvent(event) {
  pendingEvent = event;
  elements.dialogYear.textContent = `YEAR ${state.year} · AGE ${state.age}`;
  elements.eventTitle.textContent = event.title;
  elements.eventCopy.textContent = event.body;
  elements.eventChoices.innerHTML = event.choices.map((choice, index) => `<button class="event-choice" type="button" data-choice="${index}" ${choice.disabled ? "disabled" : ""}><span>${escapeHtml(choice.label)}</span><span>${escapeHtml(choice.impact)}</span></button>`).join("");
  elements.dialog.showModal();
  renderActions();
  const firstChoice = elements.eventChoices.querySelector("button:not(:disabled)");
  if (firstChoice) firstChoice.focus();
}

function chooseEvent(index) {
  if (!pendingEvent) return;
  const choice = pendingEvent.choices[index];
  if (!choice || choice.disabled) return;
  const outcome = choice.effect(state);
  const result = typeof outcome === "string" ? outcome : outcome.message;
  const followUpEvent = typeof outcome === "object" ? outcome.followUpEvent : null;
  for (const key of ["health", "happiness", "smarts", "confidence", "purpose", "stability", "kindness"]) state[key] = clamp(state[key]);
  for (const key of Object.keys(state.relationships)) state.relationships[key] = clamp(state.relationships[key]);
  addLog(result);
  pendingEvent = null;
  elements.dialog.close();
  updateMilestones();
  saveState();
  render();
  if (followUpEvent) {
    openEvent(followUpEvent);
    return;
  }
  showToast(result);
}

function advanceYear() {
  if (state.gameOver || pendingEvent) return;
  state.year += 1;
  state.age += 1;
  if (state.age >= 5 && state.age < 18) state.education = "In school";
  if (state.age === 18) state.education = "High school diploma";
  if (state.age === 18) state.cash += 1800;
  if (state.collegeEnrolled && state.age >= 18 && state.education !== "College degree") {
    state.collegeYears += 1;
    if (state.collegeYears >= 4) {
      state.education = "College degree";
      state.collegeEnrolled = false;
      addLog("You graduated from college. Four years of work paid off.");
    }
  }
  const salary = state.age >= 18 ? Math.round(state.income) : 0;
  const expenses = state.age < 18 || state.income === 0 ? 0 : 14500 + Math.max(0, state.age - 18) * 90;
  const net = salary - expenses;
  state.cash += net;
  state.health -= Math.floor(Math.random() * 3);
  state.happiness -= Math.floor(Math.random() * 3);
  if (state.illness) {
    state.illnessYears += 1;
    state.health -= Math.ceil(state.illness.severity * 0.15);
  } else if (Math.random() < 0.12) {
    const possibleIllnesses = SICKNESSES.filter(illness => state.age >= illness.minAge);
    state.illness = pickRandom(possibleIllnesses);
    state.illnessYears = 0;
    state.health -= state.illness.severity;
    addLog(`You came down with ${state.illness.name.toLowerCase()}. A doctor can help.`);
  }
  state.stability += net >= 0 ? 2 : -4;
  state.relationships.family -= 1;
  state.relationships.friends -= 1;
  for (const key of ["health", "happiness", "smarts", "confidence", "purpose", "stability", "kindness"]) state[key] = clamp(state[key]);
  for (const key of Object.keys(state.relationships)) state.relationships[key] = clamp(state.relationships[key]);
  const yearNote = state.age < 5
    ? `You turned ${state.age}. The world got a little bigger.`
    : `You turned ${state.age}. ${net >= 0 ? `Work paid ${money(salary)}; the year cost ${money(expenses)}.` : `The year cost ${money(expenses)}, more than work brought in.`}`;
  addLog(yearNote);
  updateMilestones();

  const hasEnded = state.age >= 96 || (state.age >= 80 && Math.random() < 0.035) || (state.age >= 68 && state.health <= 18 && Math.random() < 0.2);
  if (hasEnded) {
    state.gameOver = true;
    state.legacy = calculateLegacy();
    addLog(`At ${state.age}, your story reached its last page. Legacy: ${state.legacy.score}/100, ${state.legacy.title.toLowerCase()}.`);
    openEvent({
      title: "A life, remembered",
      body: `You lived ${state.age} years.\n\nLegacy rating: ${state.legacy.score}/100\n${state.legacy.title}\n\nKindness ${state.kindness} · Relationships ${state.legacy.relationshipScore} · Care ${state.legacy.careScore} · Community ${state.legacy.contributionScore}`,
      choices: [{ label: "Remember this life", impact: "A story made of your choices", effect: () => "Your story is complete. The good you gave remains part of it." }]
    });
  } else {
    const eligibleEvents = [...CHILDHOOD_EVENTS, ...RANDOM_EVENTS].filter(event => state.age >= event.minAge && (event.maxAge === undefined || state.age <= event.maxAge));
    if (eligibleEvents.length) openEvent(eligibleEvents[Math.floor(Math.random() * eligibleEvents.length)]);
  }
  saveState();
  render();
}

elements.form.addEventListener("submit", event => {
  event.preventDefault();
  state = createState(generateIdentity());
  saveState();
  render();
});

elements.actionGrid.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (button) runAction(button.dataset.action);
});

elements.actionFilters.addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (!button || !ACTION_CATEGORIES.some(([id]) => id === button.dataset.filter)) return;
  selectedActionCategory = button.dataset.filter;
  renderActions();
});

elements.nextYear.addEventListener("click", advanceYear);
elements.eventChoices.addEventListener("click", event => {
  const button = event.target.closest("button[data-choice]");
  if (button) chooseEvent(Number(button.dataset.choice));
});

elements.dialog.addEventListener("cancel", event => event.preventDefault());
document.getElementById("closeDialogBtn").addEventListener("click", () => {
  if (!pendingEvent) return;
  addLog(`You let the moment pass: ${pendingEvent.title.toLowerCase()}.`);
  pendingEvent = null;
  elements.dialog.close();
  updateMilestones();
  saveState();
  render();
});
elements.restart.addEventListener("click", () => {
  if (!window.confirm("Start a new life? This will erase the current story.")) return;
  window.localStorage.removeItem(SAVE_KEY);
  state = null;
  pendingEvent = null;
  if (elements.dialog.open) elements.dialog.close();
  elements.game.hidden = true;
  elements.setup.hidden = false;
  elements.restart.hidden = true;
  elements.form.reset();
  document.getElementById("bornBtn").focus();
});

if (state) render();
