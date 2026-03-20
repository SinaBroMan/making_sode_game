// test-game.js — 터미널에서 바로 테스트
const readline = require('readline');
const { GameManager } = require('./game/gameManager');

const game = new GameManager();
const userId = 'testUser1';
const userName = '테스터';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('⚔️ 검만들기 게임 테스트');
console.log('명령어: /강화, /프로필, /확률, /도움말, /출석체크');
console.log('종료: /quit\n');

const prompt = () => {
    rl.question('> ', async (input) => {
        if (input === '/quit') {
            rl.close();
            return;
        }
        const result = await game.handleCommand(userId, userName, input.trim());
        console.log('\n' + (result.message || JSON.stringify(result.card?.body, null, 2)) + '\n');
        prompt();
    });
};

prompt();
