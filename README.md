# Scoreboard API for Minecraft

This is a simple JavaScript library that allows you to create and manipulate scoreboards for Minecraft using the [@minecraft/server](https://www.npmjs.com/package/@minecraft/server) package.

## Installation

Before using this library, make sure you have installed the `@minecraft/server` package:

```bash
npm install @minecraft/server
```

## Usage
Import the library into your project:

```js
import * as mc from '@minecraft/server';
import { scoreboard } from './scoreboard';

// Create a scoreboard object
const player = mc.world.getAllPlayers()[0]
const objectiveName = 'YourObjectiveName';
const score = scoreboard(objectiveName, player);

// Set the value of the scoreboard
score.set(42);

// Add a value to the scoreboard
score.add(10);

// Remove a value from the scoreboard
score.remove(5);

// Get the current value of the scoreboard
const currentValue = score.get();
console.warn(`Current value: ${currentValue}`);
```

## API Documentation
`scoreboard(objectname: string, player: mc.Player): scoreSystem`
Creates a scoreboard object associated with a player and objective.
- `objectname` (string): The name of the objective.
- `player` (mc.Player): The player to get the scoreboard from.

Returns a `scoreSystem` object with the following methods:

`get(): number`
Get the value of the scoreboard.
- Returns: `number`: The value of the scoreboard.

`set(value: number): void`
Set the value of the scoreboard.
- `value` (number): The value to set the scoreboard to.

`add(value: number): void`
Add a value to the scoreboard.
- `value` (number): The value to add to the scoreboard.

`remove(value: number): void`
Remove a value from the scoreboard.
- `value` (number): The value to remove from the scoreboard.

## Example
Here's an example of how to use the scoreboard API:
```js
import * as mc from '@minecraft/server';
import { scoreboard } from './scoreboard';

const player = mc.world.getAllPlayers()[0]
const objectiveName = 'kills';
const score = scoreboard(objectiveName, player);

score.set(10); // Set the initial score to 10
score.add(5);  // Add 5 to the score
score.remove(2); // Remove 2 from the score

const currentScore = score.get();
console.warn(`Current ${objectiveName} score: ${currentScore}`);
```

## License
This code is provided under the MIT License. You are free to use and modify it as needed for your projects. See the [LICENSE](LICENSE) file for more information.