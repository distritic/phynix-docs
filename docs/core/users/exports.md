---
sidebar_position: 5
---

# Exports

## Server-side

### CanGroupTarget

This function will return `true` when the first group has higher or equal privileges to the second group specified, otherwise it will return `false`.

```lua title="server/main.lua"
exports.phynix:CanGroupTarget(baseGroup --[[string]], targetGroup --[[string]]);
-- baseGroup: the base group
-- targetGroup: the minumum group needed
```

Let's put this into perspective:
```lua title="server/main.lua"
local foo = exports.phynix:CanGroupTarget("mod", "admin");
-- foo = false

local bar = exports.phynix:CanGroupTarget("admin", "mod");
-- bar = true

local foobar = exports.phynix:CanGroupTarget("admin", "admin");
-- foobar = true
```

### GetUser

This function is used to fetch a user by player ID.
```lua title="server/main.lua"
local user --[[table]] = exports.phynix:GetUser(src --[[int]]);
-- src: the player ID to get the user of
```

### GetUsers

This function is used to fetch a table of all users initialised.
```lua title="server/main.lua"
local users --[[table]] = exports.phynix:GetUser();
```

### SaveAllUsers

This function is used to save any updates character fields of all characters to the database.
```lua title="server/main.lua"
exports.phynix:SaveAllUsers();
```

### GetNumStaffMembers

This function will return the number of staff members online.
```lua title="server/main.lua"
local numStaffMembers --[[int]] = exports.phynix:GetNumStaffMembers();
```