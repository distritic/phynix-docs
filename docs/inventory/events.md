# Events

## Server-side

:::danger
All the events which parse the player `src` as an argument below **must** be triggered by the server, this is a safety feature. If you try to trigger such an event from the client-side, it may result in false bans from the anti-cheat system.
:::

### inventory:exitedInventory

Triggered when the player has exited their inventory, this event will save inventory state flag the inventory as available. This event may be triggered by either the client or server. The server will override the `src` parameter if triggered by a client.

```lua title="server/main.lua"
AddEventHandler("inventory:exitedInventory", function(src --[[int]], playerDropped --[[bool]])
-- src: the Id of player which has exited their inventory
-- playerDropped: a flag indicating whether the player disconnected
end);
```

### inventory:fetchOpenInventory

Triggered by the client when the player opens their inventory.

```lua title="server/main.lua"
AddEventHandler("inventory:fetchOpenInventory", function(nearestDropInv --[[string]])
--- nearestDropInv: the nearest inventory where the player can drop items
end);
```

### inventory:createInventory

This event will create a new empty inventory and store it in the database, it will be persistent between sessions.
```lua title="server/main.lua"
TriggerEvent("inventory:createInventory", invName --[[string]], maxRows --[[int]], maxWeight --[[int]], clearInventory --[[bool]]);
-- invName: the inventory name
-- maxRows: maximum number of rows
-- maxWeight: maximum weight
-- clearInventory?: if the inventory already exists, simply clear it
```

:::caution
You must ensure that all inventory names are unique, otherwise the database will throw a key error or the cache may overwrite with data from another inventory.
:::

### inventory:openSecondaryInventory

This event will open a persistent inventory, and cache it if not already opened before.
```lua title="server/main.lua"
TriggerEvent("inventory:openSecondaryInventory", invName --[[string]], src --[[int]], createIfNotExists --[[bool]], maxRows --[[int]], maxWeight --[[int]]);
-- invName: the inventory name
-- src: the player which is opening the inventory
-- createIfNotExists?: create the inventory if it does not exist, and open it
-- maxRows?: if creating, set the maximum number of rows
-- maxWeight?: if creating, set the maximum weight
```

### inventory:setInventory

This event will set the values of a persistent inventory, and create it if it does not exist.
```lua title="server/main.lua"
TriggerEvent("inventory:setInventory", invName --[[string]], maxRows --[[int]], maxWeight --[[int]], weight --[[int]], items --[[table]]);
-- invName: the inventory name
-- maxRows: maximum number of rows
-- maxWeight: maximum weight
-- weight: current weight level
-- items: dictionary of indexed items
```

### inventory:createSecondaryInventoryTemp

This event will create a new empty inventory and only cache it, it will **not** be persistent between sessions.
```lua title="server/main.lua"
TriggerEvent("inventory:createSecondaryInventoryTemp", invName --[[string]], maxRows --[[int]], maxWeight --[[int]], weight --[[int]], items --[[table]]);
-- invName: the inventory name
-- maxRows: maximum number of rows
-- maxWeight: maximum weight
-- weight: current weight level
-- items: dictionary of indexed items
```

:::caution
You must ensure that all inventory names are unique, otherwise the database will throw a key error or the cache may overwrite with data from another inventory.
:::

### inventory:openSecondaryInventoryTemp

This event will open a temporary inventory, and cache it for the current session only.
```lua title="server/main.lua"
TriggerEvent("inventory:openSecondaryInventoryTemp", invName --[[string]], src --[[int]], createIfNotExists --[[bool]], maxRows --[[int]], maxWeight --[[int]], weight --[[int]], items --[[table]]);
-- invName: the inventory name
-- src: the player which is opening the inventory
-- createIfNotExists?: create the inventory if it does not exist, and open it
-- maxRows?: if creating, set the maximum number of rows
-- maxWeight?: if creating, set the maximum weight
-- weight?: if creating, current weight level
-- items?: if creating, dictionary of indexed items
```

### inventory:setInventoryTemp

This event will set the values of a temporary inventory.
```lua title="server/main.lua"
TriggerEvent("inventory:setInventoryTemp", invName --[[string]], maxRows --[[int]], maxWeight --[[int]], weight --[[int]], items --[[table]]);
-- invName: the inventory name
-- maxRows: maximum number of rows
-- maxWeight: maximum weight
-- weight: current weight level
-- items: dictionary of indexed items
```

### inventory:openPlayerInventory

This event will open the inventory of another player.
```lua title="server/main.lua"
TriggerEvent("inventory:openPlayerInventory", src --[[int]], target --[[int]]);
-- src: the player which is opening the other players inventory
-- target: the target player
```

### inventory:openBuyInventory

This event will open a special inventory where the character can buy items.
```lua title="server/main.lua"
TriggerEvent("inventory:openBuyInventory", src --[[int]], buyData --[[table]]);
-- src: target player Id
-- buyData: dictionary of indexed items
```

The parameter `buyData` is a special inventory, and structured like so:
```lua
{
  ["name"] = "buy",
  ["weight"] = 0.0,
  ["max_weight"] = 0.0,
  ["rows"] = 10,
  ["log"] = "buy-log",
  ["tax"] = true,
  ["items"] = {
    ["0"] = {
      ["name"] = "pistol",
      ["label"] = "Pistol",
      ["weapon"] = true,
      ["quantity"] = 1,
      ["weight"] = 12,
      ["stackable"] = false,
      ["price"] = 1000
    }
  }
}
```
This inventory name **does not** need to be unique, as it is not cached or stored. 
* The item attribute `weapon` will create a serial number for the item when it is purchased, and assign it in item metadata.
* The inventory attribute `log` will create a log for the purchase to the corresponding log name (in this case `buy-log`).
* The inventory attribute `tax` will add the standard tax rate to each item as assigned in the `px_state` resource.

:::caution
When naming a log file, ensure it abides by all OS file name restrictions - otherwise your log may not be created.
:::

### inventory:openSellInventory

This event will open a special inventory where the character can sell items.
```lua title="server/main.lua"
TriggerEvent("inventory:openSellInventory", src --[[int]], sellData --[[table]]);
-- src: target player Id
-- sellData: dictionary of indexed items
```

The parameter `sellData` is a special inventory, and structured like so:
```lua
{
  ["name"] = "sell",
  ["weight"] = 0.0,
  ["max_weight"] = 0.0,
  ["rows"] = 10,
  ["log"] = "sell-log",
  ["items"] = {
    ["0"] = {
      ["name"] = "pistol",
      ["label"] = "Pistol",
      ["quantity"] = 1,
      ["weight"] = 12,
      ["stackable"] = false,
      ["price"] = 1000
    },
    ["1"] = {
      ["name"] = "animalpelt",
      ["label"] = "Animal Pelt",
      ["quantity"] = 1,
      ["weight"] = 5,
      ["stackable"] = false,
      ["price"] = "50 + VAR",
      ["priceMethod"] = function(itemData, quantity)
        return itemData.rarity * 50 * quantity
      end,
      ["desc"] = "Sale price is variable on the type of animal pelt provided."
    }
  }
}
```
This inventory name **does not** need to be unique, as it is not cached or stored. 
* The inventory attribute `log` will create a log for the purchase to the corresponding log name (in this case `sell-log`).
* An item may have a variable sell price determined by its metadata. This can be determined by the use of a `priceMethod` function, which takes in parameterized item metadata and returns a price.

:::caution
When naming a log file, ensure it abides by all OS file name restrictions - otherwise your log may not be created.
:::

### inventory:openCraftInventory

This event will open a special inventory where the character can craft items.
```lua title="server/main.lua"
TriggerEvent("inventory:openCraftInventory", src --[[int]], craftData --[[table]]);
-- src: target player Id
-- craftData: dictionary of indexed items
```

The parameter `craftData` is a special inventory, and structured like so:
```lua
{
  ["name"] = "craft",
  ["weight"] = 0.0,
  ["max_weight"] = 0.0,
  ["rows"] = 10,
  ["items"] = {
    ["0"] = {
      ["name"] = "pistol",
      ["label"] = "Pistol",
      ["quantity"] = 1,
      ["weight"] = 12,
      ["recipe"] = {
        ["aluminum"] = {
          label = "Aluminum", quantity = 3
        },
        ["steel"] = {
          label = "Steel", quantity = 1
        },
        ["plastic"] = {
          label = "Plastic", quantity = 2
        },
        ["rubber"] = {
          label = "Rubber", quantity = 1
        }
      }
    }
  }
}
```
This inventory name **does not** need to be unique, as it is not cached or stored. 