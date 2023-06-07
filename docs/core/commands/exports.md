# Exports

## Server-side

### GetCommands

This export will return the table of currently existing commands.

```lua title="server/main.lua"
local commands --[[table]] = exports.phynix:GetCommands();
```

An example of the structure can be found below:
```lua
{
  ["ban"] = {
    ["resource"] = "phynix",
    ["job"] = nil,
    ["whitelist"] = nil,
    ["group"] = "admin",
    ["dev"] = false,
    ["rconOnly"] = false,
    ["routine"] = function(src, args, user, char, plyPos)
      ...
    end,
    ["suggestion"] = {
      help = "Ban the player.",
      params = {
        { name = "src", help = "player ID to ban" },
        { name = "reason", help = "reason for ban" }
      }
    }
  },
  ...
}

```