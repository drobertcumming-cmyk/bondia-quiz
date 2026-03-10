export const questions = [
  {
    number: '01',
    text: "How often do you think about your bone health?",
    sub: "There's no right answer — this helps us understand where you're starting from.",
    options: [
      { text: "Never — it's not something I've considered", score: 0 },
      { text: "Occasionally — I know I probably should think about it more", score: 1 },
      { text: "Regularly — it's on my radar", score: 2 },
      { text: "Actively — I've had a DXA scan or been diagnosed with something", score: 3 },
    ],
  },
  {
    number: '02',
    text: "Where are you in your menopause journey?",
    sub: "Hormonal changes are one of the most significant drivers of bone loss — and earlier than most people realise.",
    options: [
      { text: "Pre-menopause — periods still regular", score: 0 },
      { text: "Perimenopause — irregular periods or symptoms beginning", score: 2 },
      { text: "Post-menopause — periods stopped, under 5 years ago", score: 3 },
      { text: "Post-menopause — 5 or more years ago", score: 4 },
      { text: "Not sure", score: 1 },
    ],
  },
  {
    number: '03',
    text: "Has a close female relative been diagnosed with osteoporosis or suffered a fracture from a minor fall?",
    sub: "Genetic factors play a meaningful role in bone density trajectory.",
    options: [
      { text: "Yes — mother, grandmother, or sister", score: 3 },
      { text: "No — not that I'm aware of", score: 0 },
      { text: "I'm not sure", score: 1 },
    ],
  },
  {
    number: '04',
    text: "Are you currently taking any bone health supplements?",
    sub: "This tells us whether you're already addressing bone health — and how.",
    options: [
      { text: "Yes — calcium and/or vitamin D", score: 1 },
      { text: "Yes — a probiotic or gut health supplement", score: 2 },
      { text: "Yes — both", score: 2 },
      { text: "No — nothing currently", score: 3 },
    ],
  },
  {
    number: '05',
    text: "How would you describe your digestive health?",
    sub: "This is the question most bone health assessments don't ask — but should. Your gut and your bones are more connected than you might think.",
    options: [
      { text: "Generally good — no noticeable issues", score: 0 },
      { text: "Occasional bloating, gas, or irregularity", score: 1 },
      { text: "Frequent digestive discomfort", score: 3 },
      { text: "I've taken antibiotics in the past 12 months", score: 2 },
      { text: "Multiple of the above", score: 4 },
    ],
  },
  {
    number: '06',
    text: "How would you describe your diet?",
    sub: "The diversity of plants you eat directly shapes the microbial community in your gut — which in turn affects your bones.",
    options: [
      { text: "Wide variety of vegetables and fermented foods regularly", score: 0 },
      { text: "Fairly balanced but not particularly varied", score: 1 },
      { text: "Mostly convenient or processed foods", score: 3 },
      { text: "I follow a specific diet (vegan, keto, etc.)", score: 2 },
    ],
  },
  {
    number: '07',
    text: "What type of exercise do you do most regularly?",
    sub: "Not all exercise builds bone equally. Swimming and cycling are excellent for cardiovascular health but don't load the skeleton the way walking or strength training does.",
    options: [
      { text: "Weight-bearing exercise — walking, running, hiking, or strength training", score: 0 },
      { text: "Low-impact exercise — swimming, cycling, or yoga", score: 2 },
      { text: "Minimal exercise currently", score: 3 },
      { text: "I vary it regularly — a mix of both", score: 1 },
    ],
  },
  {
    number: '08',
    text: "Have you ever had a bone density scan (DXA scan)?",
    sub: "DXA scans provide the most accurate picture of bone mineral density. Standard guidelines recommend screening from age 65 — but bone loss begins much earlier.",
    options: [
      { text: "Yes — within the last 2 years", score: 0 },
      { text: "Yes — more than 2 years ago", score: 1 },
      { text: "No — but I'd like to", score: 2 },
      { text: "No — and I haven't thought about it", score: 3 },
    ],
  },
]
