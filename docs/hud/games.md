# Games

## Circle

This is currently the only supported mini-game. An example of how to start this minigame may be found below.

* `arcOffset` sets the position of the acceptance zone in a clock-wise fashion from the north position of the circle. It is a value between `0.0 - 1.0`.
* `arcLength` sets the length of the acceptance zone. A larger zone means it will be easier to win. It is a value between `0.0 - 1.0`.
* `duration` is the duration the game will appear for in milliseconds. It will be easier to win if the duration is longer.


```lua title="client/main.lua"
exports.px_hud:StartGame("circle", {
  arcOffset = math.random(3, 7) / 10,
  arcLength = math.random(10, 15) / 100,
  duration = math.random(500, 1000)
}, function(success)
  if success then
    print("You won!");
  else
    print("You lost.");
  end
end, false);
```