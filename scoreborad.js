import * as mc from '@minecraft/server';
/**
* Create a scoreboard object associated with a player and objective.
* @param {string} objectname - The name of the objective.
* @param {mc.Player} player - The player to get the scoreboard from.
* @returns {scoreSystem} A scoreboard object.
*/
export function scoreboard(objectname, player) {
    try {
        mc.world.scoreboard.addObjective(objectname, objectname);
    }
    catch { }
    ;
    const object = mc.world.scoreboard.getObjective(objectname);
    player.runCommandAsync(`scoreboard players add @s ${objectname} 0`);
    /**
     * Get the value of the scoreboard.
     * @returns {number} The value of the scoreboard.
     */
    const get = () => object?.getScore(player.scoreboardIdentity);
    /**
     * Set the value of the scoreboard.
     * @param {number} value The value to set the scoreboard to.
     * @returns set The value of the scoreboard.
     */
    const set = (value) => object?.setScore(player.scoreboardIdentity, value);
    /**
     * Add a value to the scoreboard.
     * @param {number} value The value to add to the scoreboard.
     * @returns add The value of the scoreboard.
     */
    const add = (value) => set(get() + value);
    /**
    * remove a value to the scoreboard.
    * @param {number} value The value to add to the scoreboard.
    * @returns remove The value of the scoreboard.
    */
    const remove = (value) => set(get() - value);
    return { get, set, add, remove };
}
