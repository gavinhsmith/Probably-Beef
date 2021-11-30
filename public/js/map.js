Map.prototype.randomKey = function () {
    let index = Math.floor(Math.random() * this.size);
    let cntr = 0;
    for (let key of this.keys()) {
        if (cntr++ === index) {
            return key;
        }
    };
};