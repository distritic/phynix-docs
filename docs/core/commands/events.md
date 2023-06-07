# Events

## Server-side

### core:addCommand

Register a new command which can be used by everyone.
```lua title="server/main.lua"
TriggerEvent("core:addCommand", name --[[string]], routine --[[function]], suggestion --[[table]], devUse --[[bool]]);
-- name: the command name
-- routine(src, args, user, char, plyPos): the callback function triggered when the command is called
-- suggestion: the chat suggestion for this command
-- devUse?: whether the "dev" group can use this command

-- src: the player ID triggering command
-- args: command argument array
-- user: the user object of the player
-- char: the character object of the player
-- plyPos: the position of the player
```

The `routine` callback function will parse the arguments as seen below:
```lua title="server/main.lua"
TriggerEvent("core:addCommand", "ping", function(src, args, user, char, plyPos),
  TriggerClientEvent("core:notify", src, "Pong!");
end, {
  help = "Pong!"
});
```

### core:addJobCommand

Register a new command which can be used by players with a specific job.

The `job` parameter may be a table array of jobs (e.g. `{ "police", "ems" }`) or a string value.

```lua title="server/main.lua"
TriggerEvent("core:addJobCommand", name --[[string]], job --[[string/table]], routine --[[function]], suggestion --[[table]], devUse --[[bool]]);
-- name: the command name
-- job: the job name or array of jobs allowed
-- routine(src, args, user, char, plyPos): the callback function triggered when the command is called
-- suggestion: the chat suggestion for this command
-- devUse?: whether the "dev" group can use this command

-- src: the player ID triggering command
-- args: command argument array
-- user: the user object of the player
-- char: the character object of the player
-- plyPos: the position of the player
```

### core:addGroupCommand

Register a new command which can be used by players with a specific group, or inherited groups.

For example, using default configuration - an `admin` will be able to use `mod` commands.

```lua title="server/main.lua"
TriggerEvent("core:addGroupCommand", name --[[string]], group --[[string]], routine --[[function]], suggestion --[[table]], devUse --[[bool]]);
-- name: the command name
-- group: the minimum group required to use the command
-- routine(src, args, user, char, plyPos): the callback function triggered when the command is called
-- suggestion: the chat suggestion for this command
-- devUse?: whether the "dev" group can use this command

-- src: the player ID triggering command
-- args: command argument array
-- user: the user object of the player
-- char: the character object of the player
-- plyPos: the position of the player
```

### core:addWhitelistCommand

Register a new command which can be used by players with a specific whitelist.

The `whitelist` parameter may be a table array of whitelists (e.g. `{ "police", "ems" }`) or a string value.

```lua title="server/main.lua"
TriggerEvent("core:addWhitelistCommand", name --[[string]], whitelist --[[string/table]], routine --[[function]], suggestion --[[table]], devUse --[[bool]]);
-- name: the command name
-- job: the job name or array of jobs allowed
-- routine(src, args, user, char, plyPos): the callback function triggered when the command is called
-- suggestion: the chat suggestion for this command
-- devUse?: whether the "dev" group can use this command

-- src: the player ID triggering command
-- args: command argument array
-- user: the user object of the player
-- char: the character object of the player
-- plyPos: the position of the player
```

### core:addRconCommand

Register a new command which can be used from the server console.

```lua title="server/main.lua"
TriggerEvent("core:addRconCommand", name --[[string]], routine --[[function]]);
-- name: the command name
-- routine(src, args): the callback function triggered when the command is called

-- src: the player ID triggering command (always 0)
-- args: command argument array
```