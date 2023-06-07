---
sidebar_position: 2
---

# Methods

## adjustChatSuggestions

This function will refresh all chat command suggestions. Only commands which the user can access will show suggestions.

```lua title="server/main.lua"
user.adjustChatSuggestions(job --[[string]], wl --[[table]]);
-- job?: the current character job
-- wl?: the current character whitelist dictionary
```

## set

This function is used to set a field in the user object. The collection of fields which exist for a user are declared in the [Attributes](attributes) guide.
```lua title="server/main.lua"
user.set(key --[[string]], value --[[any]]);
-- key: the field to be updated
-- value: the new value assigned to the field
```

## get

This function is used to return a field from the user object. The collection of fields which exist for a user are delared in the [Attributes](attributes) guide.
```lua title="server/main.lua"
local value --[[any]] = user.get(key --[[string]]);
-- key: the field to return
```

## displayMoney

This function will temporarily show your money display.
```lua title="server/main.lua"
user.displayMoney(money --[[int]]);
-- money: the money of the character
```

## setSessionVar

This function will store a temporary session variable of a user.
```lua title="server/main.lua"
user.setSessionVar(key --[[string]], value --[[any]]);
-- key: the field to be updated
-- value: the new value assigned to the field
```

## getSessionVar

This function will return a temporary session variable of a user.
```lua title="server/main.lua"
local value --[[any]] = user.get(key --[[string]]);
-- key: the field to return
```

## getIdentifier

This function will return the identifier of a user.
```lua title="server/main.lua"
local identifier --[[string]] = user.getIdentifier();
```

## getSteamId

This function will return the steam ID of a user.
```lua title="server/main.lua"
local steamId --[[string]] = user.getSteamId();
```

## getComId

This function will return the steam community ID of a user.
```lua title="server/main.lua"
local comId --[[int]] = user.getComId();
```

## getGroup

This function will return the group of a user.
```lua title="server/main.lua"
local group --[[string]] = user.getGroup();
```

## isStaff

This function will return whether a user belongs to a staff group.
```lua title="server/main.lua"
local isStaff --[[bool]] = user.isStaff(includeDev --[[bool]]);
-- includeDev?: whether developer groups should be included
```