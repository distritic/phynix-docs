# Exports

## Server-side

### DoesInventoryExist

Checks whether the specified inventory is cached in memory.
```lua title="server/main.lua"
local doesExist --[[bool]] = exports.px_inventory:DoesInventoryExist(invName --[[string]]);
-- invName: inventory name
```

### IsInventoryAvailable

Checks whether the specified inventory is not currently in use (open).
```lua title="server/main.lua"
local isAvailable --[[bool]] = exports.px_inventory:IsInventoryAvailable(invName --[[string]]);
-- invName: inventory name
```
