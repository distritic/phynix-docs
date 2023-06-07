---
sidebar_position: 2
---

# Methods

The character object comes with an array of functions used by resources to update the object.

## set

This function is used to set a field in the character object. The collection of fields which exist for a character are delared in the [Attributes](attributes) guide.
```lua title="server/main.lua"
char.set(key --[[string]], value --[[any]]);
-- key: the field to be updated
-- value: the new value assigned to the field
```

There are a few specific cases where updating a field will trigger additional logic.
* Updating the `money` field will trigger a client event, `core:setMoneyDisplay` with the first parameter `true` and second parameter the new value.
* Updating the `job` field will trigger a client event, `core:updateJob` and server event, `chars:updateJob`. The server has an additional parameter `source`, followed by the new value and old value.
* Updating the `whitelist` field will trigger a client event, `core:updateWhitelist` with the only parameter being the new value.

An example can be seen below.
```lua title="server/main.lua"
RegisterServerEvent("police:clockOn")
AddEventHandler("police:clockOn", function()
  local char = exports.px_chars:GetCharacter(source);
  local wl = char.get("whitelist");

  if wl.police and wl.police > 0 then
    char.set("job", "police");
    TriggerClientEvent("core:notify", source, "You are now on-duty as police.");
  end
end);
```

:::danger
We do not recommend using this method to update dynamic table fields such as `inventory`, as in doing so you could corrupt or invalidate data.
:::

## get

This function is used to return a field from the character object. The collection of fields which exist for a character are delared in the [Attributes](attributes) guide.
```lua title="server/main.lua"
local value --[[any]] = char.get(key --[[string]]);
-- key: the field to return
```

An example can be seen below.
```lua title="server/main.lua"
RegisterServerEvent("police:checkJob")
AddEventHandler("police:checkJob", function(clientEvent)
  local char = exports.px_chars:GetCharacter(source);
  TriggerClientEvent(clientEvent, char.get("job") == "police");
end)
```

## givePaycheck

This function is used to give a paycheck to the character from a business. The paycheck will appear in the character's personal account transaction records when collected.
```lua title="server/main.lua"
char.givePaycheck(amount --[[int]], businessName --[[string]], note --[[string]], noNotify --[[bool]]);
-- amount: the amount of money to give
-- businessName: the name of the business paying
-- note: transaction note
-- noNotify?: whether a notification should **not** be received for the payment
```

An example can be seen below.

```lua title="server/main.lua"
-- An exploitable event, but shown for demonstration purposes
RegisterServerEvent("tow:impoundVehicle")
AddEventHandler("tow:impoundVehicle", function()
  local char = exports.px_chars:GetCharacter(source);
  char.givePaycheck(500, "state", "LSPD Auto Impound", false);
end)
```

## giveMoney

This function is used to give the character money.
```lua title="server/main.lua"
char.giveMoney(amount --[[int]]);
-- amount: the amount of money to give
```

## removeMoney

This function is used to remove money from the character.
```lua title="server/main.lua"
char.removeMoney(amount --[[int]]);
-- amount: amount of money to remove
```

## getBankAccount

This function is used to return the [bank account object](/docs/banking/account/get-object) assigned to the character's personal account.
```lua title="server/main.lua"
local bankAccount --[[object]] = char.getBankAccount();
```

## giveCrypto

This function is used to give crypto to the character.
```lua title="server/main.lua"
char.giveCrypto(amount --[[int]]);
-- amount: amount of crypto to give
```

## removeCrypto

This function is used to give remove crypto from the character.
```lua title="server/main.lua"
char.removeCrypto(amount --[[int]]);
-- amount: amount of crypto to remove
```

## getName

This function is used to return the concatenated first and last name of the character.
```lua title="server/main.lua"
local name --[[string]] = char.getName();
```

## getFullName

This function is used to return the concatenated full name of the character.
```lua title="server/main.lua"
local fullName --[[string]] = char.getFullName();
```

## getWeapons

This function is used to return an array of weapon items in the characters inventory.
```lua title="server/main.lua"
local weapons --[[table]] = char.getWeapons();
```

## removeWeapons

This function is used to remove an weapon items from the character.
```lua title="server/main.lua"
char.removeWeapons();
```

## getLicenses

This function is used to return an array of character licenses.
```lua title="server/main.lua"
local licenses --[[table]] = char.getLicenses();
```

## hasLicense

This function will return whether the character has the specific license.
```lua title="server/main.lua"
local hasLicense --[[bool]] = char.hasLicense(type --[[string]]);
-- type: the license type to check for
```

## hasItem

This function will return whether the character has an item.
```lua title="server/main.lua"
local hasItem --[[bool]] = char.hasItem(item --[[string/table]], quantity --[[int]]);
-- item: the item to check for
-- quantity?: the quantity to check for
```

## canHoldItem

This function will return whether the character can hold an item.
```lua title="server/main.lua"
local canHoldItem --[[bool]] = char.canHoldItem(item --[[string]], quantity --[[int]]);
-- item: the item to check for
-- quantity?: the quantity to check for
```

## getItem

This function will return the item the character has by its name.
```lua title="server/main.lua"
local item --[[table]] = char.getItem(name --[[string]]);
-- name: the item name to find
```

## getItemByIndex

This function will return the item in the specified inventory index.
```lua title="server/main.lua"
local item --[[table]] = char.getItemByIndex(index --[[int]]);
-- index: the index location in the inventory (starting at 0)
```

## getItemWithField

This function will return the item the character has by its field.
```lua title="server/main.lua"
local item --[[table]] = char.getItemWithField(key --[[string]], value --[[any]]);
-- key: the field name
-- value: the field value
```

## giveItem

This function will give the item to the character at the next available index. It will return the item inventory index if successful, or a boolean flag otherwise.
```lua title="server/main.lua"
local retval --[[bool/string]] = char.giveItem(name --[[string]], quantity --[[int]]);
-- name: the item name to give
-- quantity?: the amount to give
```

## putItemInSlot

This function will place the item in the given inventory index.
```lua title="server/main.lua"
char.putItemInSlot(item --[[table]], slot --[[int]], quantity --[[int]], cb --[[function]]);
-- item: the item to place into the index
-- slot: the index to place the item into
-- quantity?: the number of items to place into the index
-- cb: a callback function cb(success: bool)
```

## removeItem

This function will remove the item from the characters inventory.
```lua title="server/main.lua"
char.removeItem(item --[[table/string]], quantity --[[int]], index --[[int]]);
-- item: the item to remove
-- quantity?: the amount to remove (-1 for all)
-- index?: the inventory index to remove at
```

## removeItemWithField

This function will remove the item from the characters inventory with a specified field value.
```lua title="server/main.lua"
char.removeItemWithField(key --[[string]], value --[[any]]);
-- key: the field to search for
-- value: the field value of item to remove
```

## removeAllItems

This function will remove all the items from the characters inventory.
```lua title="server/main.lua"
char.removeAllItems();
```

## removeItemByIndex

This function will remove the item from the characters inventory by index only.
```lua title="server/main.lua"
char.removeItemByIndex(index --[[int]], quantity --[[int]]);
-- index: the index to remove from
-- quantity?: the quantity to remove (-1 for all)
```

## modifyItem

This function will modify an item field.
```lua title="server/main.lua"
char.modifyItem(item --[[string/table]], key --[[string]], value --[[any]], index --[[int]]);
-- item: the item to modify
-- key: the field name to modify
-- value: the new field value
-- index?: override item param and modify the specified index directly
```

## modifyItemDurability

This function will modify the durability of an item.
```lua title="server/main.lua"
char.modifyItemDurability(index --[[int]], change --[[int]]);
-- index: the item inventory index to modify
-- change: the change in item durability in seconds, e.g. -60000 to remove 60000 seconds
```

## moveItemSlots

This function will move an item from the specified inventory index to a new one.
```lua title="server/main.lua"
char.moveItemSlots(fromIndex --[[int]], toIndex --[[int]], quantity --[[int]]);
-- fromIndex: the item index to move from
-- toIndex: the item index to move to
-- quantity?: the amount to move
```

## recountWeight

This function will recount character inventory weight.
```lua title="server/main.lua"
char.recountWeight();
```

## setMaxInventoryWeight

This function will temporarily override the default maximum inventory weight for the character.
```lua title="server/main.lua"
char.setMaxInventoryWeight(maxWeight --[[int]]);
-- maxWeight: the new maximum weight
```