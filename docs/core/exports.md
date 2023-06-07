# Exports

## Client-side

### TriggerServerEventCallback

This export will trigger a server event which acts as a callback to the client. It must be caught using [RegisterServerEventCallback](RegisterServerEventCallback) respectively.

```lua title="client/main.lua"
exports.phynix:TriggerServerEventCallback(eventName --[[string]], ... --[[any]], handler --[[function]]);
-- eventName: name of event to trigger
-- ...: an arbitrary number of arguments for the server
-- handler(...): a handler with an arbitrary number of arguments returned by the server
```

This can be used as follows:

```lua
-- client
local playerId = 1;
exports.phynix:TriggerServerEventCallback("chars:getNameByPlayerId", playerId, function(targetName)
  TriggerEvent("core:notify", "Name of player with ID "..playerId.." is "..targetName);
end);

-- server
exports.phynix:RegisterServerEventCallback("chars:getNameByPlayerId", function(src, playerId, cb)
  local targetChar = exports.px_chars:GetCharacter(playerId);
  local targetName = targetChar.getFullName();
  cb(targetName);
end);
```

### GetClosestPlayer

This export will return the closest player ID to the current client.

```lua title="client/main.lua"
local playerId --[[int]] = exports.phynix:GetClosestPlayer(range --[[int]])
-- range: the number of units to check near the client
-- playerId: the player ID of the closest player (false if none found)
```

## Server-side

### GetGroups

This export will return a dictionary of groups and their attributes.

```lua title="server/main.lua"
local groups --[[table]] = exports.phynix:GetGroups();
```

### CanGroupTarget

This export will return `true` if the `base` can target (is equal, or greater than) the `targetGroup`.

```lua title="server/main.lua"
local canTarget --[[bool]] = exports.phynix:CanGroupTarget(base --[[string]], targetGroup --[[string]]);
```

For example:
```lua title="server/main.lua"
local foo = exports.phynix:CanGroupTarget("admin", "mod");
-- foo = true

local bar = exports.phynix:CanGroupTarget("mod", "admin");
-- bar = false
```

### GetIdentifier

This export returns the specified identifier of the user.

Possible identifiers `type` includes: `"discord"`, `"ip"`, `"license"`, `"license2"`, `"steam"`, `"fivem"`, `"xbl"` and `"live"`.

```lua title="server/main.lua"
local identifier --[[string]] = exports.phynix:GetIdentifier(src --[[int]], type --[[string]]);
```

### GetRandomNumberPlate

This export generates a random number plate in the format `NNSSSNNN` where `N` is any natural number between `0-9` and `S` is any letter between `A-Z`.

```lua title="server/main.lua"
local plate --[[string]] = exports.phynix:GetRandomNumberPlate();
```

### RegisterServerEventCallback

This export will register a server event which acts as a callback to the client. It must be triggered using [TriggerServerEventCallback](TriggerServerEventCallback) respectively.

```lua title="server/main.lua"
exports.phynix:RegisterServerEventCallback(eventName --[[string]], handler --[[function]]);
-- eventName: name of event (triggered by client)
-- handler(src, ..., cb): a handler with an arbitrary number of arguments sent by the client
-- cb(...): a callback with an arbitrary number of arguments returned by the server
```

This can be used as follows:

```lua
-- client
local playerId = 1;
exports.phynix:TriggerServerEventCallback("chars:getNameByPlayerId", playerId, function(targetName)
  TriggerEvent("core:notify", "Name of player with ID "..playerId.." is "..targetName);
end);

-- server
exports.phynix:RegisterServerEventCallback("chars:getNameByPlayerId", function(src, playerId, cb)
  local targetChar = exports.px_chars:GetCharacter(playerId);
  local targetName = targetChar.getFullName();
  cb(targetName);
end);
```