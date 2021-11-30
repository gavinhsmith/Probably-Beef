/**
 * Shuffles an array (destructive)
 */
Array.prototype.shuffle = function () {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
}

/**
 * Gets a random index id.
 * @returns {number} index id
 */
Array.prototype.randomIndex = function () {
    let rand = Math.floor(Math.random()*this.length);
    if (rand >= this.length) rand = this.length-1;
    return rand;
}

/**
 * Get something from the array and then removes it.
 * @param {number} index Index of the item.
 * @returns {this[]} item
 */
Array.prototype.remove = function (index) {
    let item = this[index];
    this.splice(index,1);
    return item;
}