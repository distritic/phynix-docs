# Exports

## Client-side

Return all attributes of a specific item.
```lua title="client/main.lua"
local item --[[table]] = exports.phynix:GetItem(item --[[string]]);
```

### RegisterItemHandler

Register a new usage handler when an item is used. An item can have multiple handlers from different resources, but only one handler per resource.

```lua title="client/main.lua"
exports.phynix:RegisterItemHandler("scratchcard", function(item, invIndex)
  local rand = math.random();
  if rand < 0.01 then
    TriggerEvent("core:notify", "You have won :D");
  else
    TriggerEvent("core:notify", "You did not win :(");
  end
end);
```

### UseItem

Force the player to use an item. This function will **not** check if the player has the item before it is used.

```lua title="client/main.lua"
exports.phynix:UseItem(name --[[string]], invIndex --[[int]]);
-- name: the name of the item to use
-- invIndex: the inventory index of item used
```

### GetItemAttribute

Return an attribute of a specific item.

```lua title="client/main.lua"
local value --[[any]] = exports.phynix:GetItemAttribute(name --[[string]], key --[[string]]);
-- name: the item name
-- key: the key of the attribute to return
```

This can be useful when specific item data is needed, for instance the weight of a Pistol:
```lua title="client/main.lua"
local weight = exports.phynix:GetItemAttribute("pistol", "weight");
TriggerEvent("core:notify", "A Pistol weighs "..weight.." units");
```

## Server-side

### GetItem

Return all attributes of a specific item.
```lua title="server/main.lua"
local item --[[table]] = exports.phynix:GetItem(item --[[string]]);
```

### GetItems

Return a dictionary of all items and their attributes, indexed by name.
```lua title="server/main.lua"
local items --[[table]] = exports.phynix:GetItems();
```

### GetItemById

Return all attributes of a specific item, except using the item ID rather than name.
```lua title="server/main.lua"
local item --[[table]] = exports.phynix:GetItemById(itemId --[[int]]);
```

:::caution
This is slower than directly accessing an item by index using `GetItem` and should be avoided.
:::

### GetItemDurabilityList

Return a dictionary of key-value pairs containing item name and durability value respectively.

```lua title="client/main.lua"
local durability --[[table]] = exports.phynix:GetItemDurabilityList();
local phoneDurability = durability["phone"];
```

### RegisterItemHandler

Register a new usage handler when an item is used. An item can have multiple handlers from different resources, but only one handler per resource.

```lua title="server/main.lua"
exports.phynix:RegisterItemHandler("scratchcard", function(src, item, invIndex)
  local rand = math.random();
  if rand < 0.01 then
    TriggerClientEvent("core:notify", src, "You have won :D");
  else
    TriggerClientEvent("core:notify", src, "You did not win :(");
  end
end);
```

### AddItem

Add an item to the dictionary of items. This function is called by the resource for each item in the database `items` table, but can also be called via export to add items directly from a resource.

```lua title="server/main.lua"
exports.phynix:AddItem(name --[[string]], itemData --[[table]]);
-- name: the item name to add, must be unique
-- itemData: the item attributes
```

### AddItems

Add multiple new items to the already existing dictionary of items.

```lua title="server/main.lua"
exports.phynix:AddItems(items --[[table]]);
-- items: a dictionary in the form [itemName] = itemData
```

### RemoveItem

This function will only remove items created via `AddItem` from a resource.

```lua title="server/main.lua"
exports.phynix:RemoveItem(name --[[string]]);
-- name: the item name to remove
```