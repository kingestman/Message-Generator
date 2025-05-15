const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const aries = [
    'A leadership opportunity may arise—take initiative confidently.',
    'A new fitness or health goal will energize you.',
    'Be cautious with impulsive decisions in relationships.',
    'Financial improvement comes from bold but strategic action.',
    'A friend from the past may re-enter your life with a new perspective.',
];

const taurus = [
    'Stability in career will increase, especially through persistence.',
    'You may feel called to redecorate or invest in your home space.',
    'An emotional breakthrough helps you drop a long-held grudge.',
    'Someone will compliment your loyalty in a powerful way.',
    'Watch your spending—luxury is tempting but moderation is key.',
];

const gemini = [
    'A learning opportunity (course, book, mentorship) could change your direction.',
    'Social circles expand—new friends or collaborators enter.',
    'Be honest: miscommunication could create avoidable conflict.',
    'Short travel or spontaneous plans will bring unexpected joy.',
    'Your creative ideas will finally be recognized.',
];

const cancer = [
    'Deep healing in family or close relationships is possible.',
    'You may discover a hidden talent that becomes a passion.',
    'Emotional vulnerability leads to stronger bonds.',
    'Financial planning becomes more important—budget wisely.',
    'Let go of outdated responsibilities that drain you.',
];

const leo = [
    "A spotlight moment is coming—make sure you're ready to shine.",
    'Someone will admire your confidence more than you expect.',
    'New romance or rekindled passion may spark.',
    'Pride might block needed feedback—stay humble.',
    'Your leadership will be requested in a team or group.',
];

const virgo = [
    'A detailed project will bring great reward—don’t rush it.',
    'You may attract someone through your intellect and clarity.',
    'Health or routine changes could bring big energy boosts.',
    'Avoid overthinking—perfection isn’t always possible.',
    'Someone will thank you for your quiet support.',
];

const libra = [
    'Harmony in relationships improves with one honest conversation.',
    'You’ll feel drawn to balance your work and personal life.',
    'An aesthetic upgrade (clothing, room, branding) will boost confidence.',
    'Decision fatigue might hit—prioritize what really matters.',
    'Romantic energy is strong—flirt, but be authentic.',
];

const scorpio = [
    'Secrets or truths will surface—stay calm and grounded.',
    'A new passion project may consume your attention.',
    "You'll feel more magnetic—use this energy wisely.",
    'Power dynamics in a relationship may shift.',
    'Transformation is close—embrace change rather than resist.',
];

const sagittarius = [
    'A travel opportunity or cultural experience expands your worldview.',
    'Honesty will set you free, even if it’s uncomfortable at first.',
    "You'll feel inspired to teach, lead, or guide someone.",
    'Overcommitting could cause burnout—choose wisely.',
    'A big risk might pay off unexpectedly.',
];

const capricorn = [
    'Hard work finally pays off—don’t let up just yet.',
    'Someone older or experienced may offer valuable advice.',
    'Your patience will be tested—stay disciplined.',
    'A financial opportunity may come through networking.',
    'Relationships improve through mutual respect and planning.',
];

const aquarius = [
    'Innovation brings recognition—don’t hold back your ideas.',
    'A cause or movement may inspire you to take action.',
    'Expect unexpected emotional growth.',
    'Friendship circles may shift—trust the changes.',
    'Digital success (social media, online business) is within reach.',
];

const pisces = [
    'Your intuition will guide you more than logic—trust it.',
    'Creative inspiration flows—channel it into art, writing, or music.',
    'Emotional clarity leads to healthier boundaries.',
    'Someone may confide in you—your empathy is needed.',
    'Dreams (literal or symbolic) offer deep insight.',
];

const zodiacMap = {
    aries,
    taurus,
    gemini,
    cancer,
    leo,
    virgo,
    libra,
    scorpio,
    sagittarius,
    capricorn,
    aquarius,
    pisces,
};

function getAPrediction(zodiac) {
    const sign = zodiac.toString().toLowerCase();
    const predictions = zodiacMap[sign];

    if (!predictions) {
        console.log('You proveded an incorrect zodiac!');
        return;
    }

    const randomPrediction =
        predictions[Math.floor(Math.random() * predictions.length)];
    console.log(randomPrediction);
}

rl.question('Enter your zodiac sign: ', function (userInput) {
    getAPrediction(userInput);
    rl.close();
});
