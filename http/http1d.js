function printUserExperience(level) {
    if (level < 1 || level > 100) {
        throw new Error("Experience level must be between 1 and 100!");
    }
    console.log(`The user has ${level} years of experience!`);
}

try {
    printUserExperience(4);
    printUserExperience(10);
    printUserExperience(200);
} catch (error) {
    console.log(error.message);
}

async function fetchLeaderBoard() {
    const response = await fetch("https://jello.servers");
    return response.json();
}

try {
    const leaderboard = await fetchLeaderBoard();
    console.log(leaderboard);
} catch (error) {
    console.log(error.message);
}