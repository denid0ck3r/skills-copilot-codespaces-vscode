function skillMember() {
    this.name = "Member";
    this.level = 1;
    this.hp = 100;
    this.mp = 100;
    this.attack = 10;
    this.defense = 10;
    this.magic = 10;
    this.speed = 10;
    this.exp = 0;
    this.nextExp = 10;
    this.skill = [];
    this.equip = [];
    this.item = [];
    this.gold = 0;
    this.battle = false;
    this.dead = false;
    this.turn = false;
    this.target = null;
    this.battleLog = [];
    this.battleLogMax = 10;
    this.battleLogIndex = 0;
    this.addBattleLog = function(log) {
        if (this.battleLog.length >= this.battleLogMax) {
            this.battleLog.shift();
        }
        this.battleLog.push(log);
    };
    this.setBattleLogIndex = function(index) {
        this.battleLogIndex = index;
    };
    this.getBattleLog = function() {
        return this.battleLog[this.battleLogIndex];
    };
}