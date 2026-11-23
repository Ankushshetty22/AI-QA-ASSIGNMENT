const SAMPLES = {
  ipl: {
    title: 'IPL & Royal Challengers Bengaluru (RCB) [Default]',
    text: `# IPL & Royal Challengers Bengaluru (RCB) - Tournament Knowledge Base
@closed
@relation plays for | also: play for
@relation located in | also: locate in
@relation is part of | transitive | also: part of

RCB is a franchise.
The full name of RCB is Royal Challengers Bengaluru.
The home ground of RCB is M Chinnaswamy Stadium.
The home city of RCB is Bengaluru.
The captain of RCB is Faf du Plessis.
The franchise icon of RCB is Virat Kohli.
The head coach of RCB is Andy Flower.
The team director of RCB is Mo Bobat.
The official motto of RCB is Play Bold.
The owner of RCB is United Spirits Limited.

M Chinnaswamy Stadium is located in Bengaluru.
Bengaluru is part of India.

Virat Kohli is a batsman.
Virat Kohli plays for RCB.
Faf du Plessis is an overseas player.
Faf du Plessis plays for RCB.
Glenn Maxwell is an all-rounder.
Glenn Maxwell is an overseas player.
Glenn Maxwell plays for RCB.
Mohammed Siraj is a bowler.
Mohammed Siraj plays for RCB.
Dinesh Karthik is a finisher.
Dinesh Karthik plays for RCB.
Rajat Patidar is a batsman.
Rajat Patidar plays for RCB.
Will Jacks is an overseas player.
Will Jacks plays for RCB.
Yash Dayal is a bowler.
Yash Dayal plays for RCB.

Batsman is a player.
Bowler is a player.
All-rounder is a player.
Finisher is a player.

Player can play cricket.
Batsman can score runs.
Bowler can take wickets.
Bowler cannot bowl more than 4 overs.

If ?x plays for RCB then ?x is an RCB player.
If ?x is an overseas player then ?x is an international star.`,
    eval: [
      { q: "Who is the franchise icon of RCB?", a: ["virat kohli"] },
      { q: "What is the home ground of RCB?", a: ["m chinnaswamy stadium"] },
      { q: "What is the official home ground of Royal Challengers Bengaluru (RCB) and in which city is it located?", a: ["m chinnaswamy stadium"] },
      { q: "Who is the captain of RCB?", a: ["faf du plessis"] },
      { q: "What is the home city of RCB?", a: ["bengaluru"] },
      { q: "What is the official motto of RCB?", a: ["play bold"] },
      { q: "Who is the head coach of RCB?", a: ["andy flower"] },
      { q: "Is Virat Kohli a batsman?", a: ["yes"] },
      { q: "Is Virat Kohli an RCB player?", a: ["yes"] },
      { q: "Is Faf du Plessis an overseas player?", a: ["yes"] },
      { q: "Is Glenn Maxwell an international star?", a: ["yes"] },
      { q: "Can Mohammed Siraj take wickets?", a: ["yes"] },
      { q: "Can Virat Kohli score runs?", a: ["yes"] },
      { q: "Can Mohammed Siraj bowl more than 4 overs?", a: ["no"] },
      { q: "List all batsmans", a: ["virat kohli", "rajat patidar"] },
      { q: "List all bowlers", a: ["mohammed siraj", "yash dayal"] },
      { q: "How is M Chinnaswamy Stadium connected to India?", a: ["m chinnaswamy stadium", "bengaluru", "india"] },
      { q: "Who is the president of France?", a: ["unknown"] }
    ]
  },


  solar: {
    title: 'Solar System (numeric facts, transitive relations, closed world)',
    text: `# Solar System - closed-world knowledge base
@closed
@relation orbits | also: orbit
@relation is part of | transitive | also: part of
@scale diameter | larger, largest | smaller, smallest
Mercury is a planet.
Venus is a planet.
Earth is a planet.
Mars is a planet.
Jupiter is a planet.
Saturn is a planet.
Uranus is a planet.
Neptune is a planet.
The Sun is a star.
Mercury has a diameter of 4879 km.
Venus has a diameter of 12104 km.
Earth has a diameter of 12742 km.
Mars has a diameter of 6779 km.
Jupiter has a diameter of 139820 km.
Saturn has a diameter of 116460 km.
Uranus has a diameter of 50724 km.
Neptune has a diameter of 49244 km.
Mercury orbits the Sun.
Venus orbits the Sun.
Earth orbits the Sun.
Mars orbits the Sun.
Jupiter orbits the Sun.
Saturn orbits the Sun.
Uranus orbits the Sun.
Neptune orbits the Sun.
Luna orbits Earth.
Phobos orbits Mars.
Deimos orbits Mars.
Phobos is part of Mars.
Mars is part of the Solar System.
If ?x orbits ?y and ?y is a planet then ?x is a moon.`,
    eval: [
      { q: 'What is the diameter of Mars?', a: ['6779 km'] },
      { q: 'Which planet has the largest diameter?', a: ['jupiter'] },
      { q: 'Which planet has the smallest diameter?', a: ['mercury'] },
      { q: 'What is the largest planet?', a: ['jupiter'] },
      { q: 'What orbits the Sun?', a: ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'] },
      { q: 'Which planets orbit the Sun?', a: ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'] },
      { q: 'What orbits Mars?', a: ['phobos', 'deimos'] },
      { q: 'Is Phobos part of the Solar System?', a: ['yes'] },
      { q: 'How many planets are there?', a: ['8'] },
      { q: 'Is Pluto a planet?', a: ['no'] },
      { q: 'Is Jupiter larger than Earth?', a: ['yes'] },
      { q: 'Is Mars larger than Earth?', a: ['no'] },
      { q: 'List all moons', a: ['luna', 'phobos', 'deimos'] },
      { q: 'Is the Sun a star?', a: ['yes'] },
      { q: 'Who is the mayor of Mars?', a: ['unknown'] }
    ]
  },

  academic: {
    title: 'Ramaiah University AID201A Academic Regulations (RUAS)',
    text: `# RUAS AID201A Academic Regulations
@closed
@relation offered by | also: offer by
@relation prerequisite for | also: prerequisite

AID201A is a course.
The course title of AID201A is Artificial Intelligence.
The course leader of AID201A is M Tanushri.
The department of AID201A is Computer Science and Engineering.
The faculty of AID201A is Faculty of Engineering and Technology.
The total marks of Assignment 1 is 15.
The submission date of Assignment 1 is 20th Nov 2026.
The report format of Assignment 1 is IEEE format.

Assignment 1 belongs to AID201A.
Assignment 1 requires symbolic AI.
Assignment 1 prohibits NLP.
Assignment 1 prohibits RAG.

CS102 is a prerequisite for AID201A.
MAT201 is a prerequisite for AID201A.

If ?x has 75 percent attendance then ?x is eligible for exam.
If ?x uses symbolic AI then ?x is compliant.`,
    eval: [
      { q: "What is the course leader of AID201A?", a: ["m tanushri"] },
      { q: "What is the course title of AID201A?", a: ["artificial intelligence"] },
      { q: "What is the total marks of Assignment 1?", a: ["15"] },
      { q: "What is the submission date of Assignment 1?", a: ["20th nov 2026"] },
      { q: "What is the report format of Assignment 1?", a: ["ieee format"] },
      { q: "Is AID201A a course?", a: ["yes"] },
      { q: "Does Assignment 1 prohibit NLP?", a: ["yes"] },
      { q: "Does Assignment 1 prohibit RAG?", a: ["yes"] },
      { q: "Who is the prime minister of Mars?", a: ["unknown"] }
    ]
  }
};

if (typeof module !== 'undefined') module.exports = SAMPLES;
