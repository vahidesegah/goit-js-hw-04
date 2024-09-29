const profile = {
    username: "Jacob",
    playTime: 300,
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    },
    changeUsername(newUsername) {
        this.username = newUsername;
    },
    updatePlayTime(time) {
        this.playTime += time;
    },
};

console.log(profile.getInfo()); // 300

profile.changeUsername("Marco");
console.log(profile.getInfo()); // 300

profile.updatePlayTime(20);
console.log(profile.getInfo()); // 320