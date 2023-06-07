---
sidebar_position: 2
---

# Methods

## get

This function is used to return a field from the business object. The collection of fields which exist for a business are delared in the [Attributes](attributes) guide.
```lua title="server/main.lua"
local value --[[any]] = business.get(key --[[string]]);
-- key: the field to return
```

## set

This function is used to set a field in the business object. The collection of fields which exist for a business are delared in the [Attributes](attributes) guide.
```lua title="server/main.lua"
business.set(key --[[string]], value --[[any]]);
-- key: the field to be updated
-- value: the new value assigned to the field
```

:::danger
We do not recommend using this method to update dynamic table fields such as `employees`, as in doing so you could corrupt or invalidate data.
:::

## hasPerm

This function will return whether a character has the specified permission.
```lua title="server/main.lua"
local hasPerm --[[bool]] = business.hasPerm(char --[[table]], perm --[[string]]);
```

## setPaycheck

This function will set the specified paycheck amount for a given permission level.
```lua title="server/main.lua"
business.setPaycheck(src --[[int]], permLevel --[[int]], amount --[[int]]);
-- src: player calling function
```

## setPermission

This function will set the specified permission level requirement for a given permission type.
```lua title="server/main.lua"
business.setPermission(src --[[int]], permLevel --[[int]], newValue --[[int]]);
-- src: player calling function
```

## addEmployee

This function will add a new employee to the business by server ID.
```lua title="server/main.lua"
business.addEmployee(src --[[int]], target --[[int]]);
-- src: player calling function
```

## promoteEmployee

This function will promote a given employee by character ID.
```lua title="server/main.lua"
business.promoteEmployee(src --[[int]], charId --[[int]]);
-- src: player calling function
```

## demoteEmployee

This function will demote a given employee by character ID.
```lua title="server/main.lua"
business.demoteEmployee(src --[[int]], charId --[[int]]);
-- src: player calling function
```

## fireEmployee

This function will fire a given employee by character ID.
```lua title="server/main.lua"
business.fireEmployee(src --[[int]], charId --[[int]]);
-- src: player calling function
```

## setEmployee

This function will set a given employee permission level by character ID.
```lua title="server/main.lua"
business.setEmployee(src --[[int]], charId --[[int]], permLevel --[[int]]);
-- src: player calling function
```

## getPaycheckForEmployee

This function will return whether a character has the specified permission.
```lua title="server/main.lua"
local paycheck --[[int]] = business.getPaycheckForEmployee(src --[[int]]);
-- src: player calling function
```

## getBankList

This function will return an array of [characters](/docs/banking/account/attributes/#characters-table) by ID which have access to the business bank account.
```lua title="server/main.lua"
local characters --[[table]] = business.getBankList();
```

## getBankPerms

This function will return a dictionary of [characterData](/docs/banking/account/attributes#characterdata-table) for the business bank account.
```lua title="server/main.lua"
local characterData --[[table]] = business.getBankPerms();
```

## setBankAccount

This function will store the current business bank account within the object.
```lua title="server/main.lua"
business.setBankAccount(account --[[table]]);
```

## getBankAccount

This function will return the current business bank account.
```lua title="server/main.lua"
local account --[[table]] = business.getBankAccount();
```