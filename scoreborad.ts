import * as mc from '@minecraft/server';
/**
 * A scoreboard object.
 */
export type scoreSystem = {
    get: () => number,
    set: (value: number) => void,
    add: (value: number) => void,
    remove: (value: number) => void
}
/**
* Create a scoreboard object associated with a player and objective.
* @param {string} objectname - The name of the objective.
* @param {mc.Player} player - The player to get the scoreboard from.
* @returns {scoreSystem} A scoreboard object.
*/
export function scoreboard(objectname: string, player: mc.Player): scoreSystem {
    try { mc.world.scoreboard.addObjective(objectname, objectname) } catch { };
    const object = mc.world.scoreboard.getObjective(objectname);
    player.runCommandAsync(`scoreboard players add @s ${objectname} 0`);
    /**
     * Get the value of the scoreboard.
     * @returns {number} The value of the scoreboard.
     */
    const get = (): number => object?.getScore(player.scoreboardIdentity);
    /**
     * Set the value of the scoreboard.
     * @param {number} value The value to set the scoreboard to.
     * @returns set The value of the scoreboard.
     */
    const set = (value: number) => object?.setScore(player.scoreboardIdentity, value);
    /**
     * Add a value to the scoreboard.
     * @param {number} value The value to add to the scoreboard.
     * @returns add The value of the scoreboard.
     */
    const add = (value: number) => set(get() + value);
    /**
    * remove a value to the scoreboard.
    * @param {number} value The value to add to the scoreboard.
    * @returns remove The value of the scoreboard.
    */
    const remove = (value: number) => set(get() - value);
    return { get, set, add, remove };
}