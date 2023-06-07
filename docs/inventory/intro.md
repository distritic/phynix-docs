---
sidebar_position: 1
---

# Introduction

Inventories contain a dictionary of [items](/docs/items/intro) and metadata, such as total weight or maximum capacity. These are an abstract data structure. Each inventory is **uniquely** identified by its name, which should be follow some conventions:
1. The inventory name should be all-lowercase
2. The inventory name should use dashes (`-`) to represent spaces

## Data Structure

All inventories loaded in the session are cached by the server. All movement logic happens server-side, meaning there is no reliance on the client to make changes to the inventory structure. A typical inventory object follows this structure:
```lua
{
  ["rows"] = 5,
  ["max_weight"] = 100,
  ["weight"] = 32,
  ["name"] = "house-4893",
  ["items"] = {
    ["0"] = {
      ["name"] = "pistol",
      ["label"] = "Pistol",
      ["itemid"] = 453432689,
      ["weight"] = 12,
      ["stackable"] = false,
      ["quantity"] = 1,
      ["created"] = 1636664281,
      ["serial"] = "K1038384"
    },
    ["2"] = {
      ["name"] = "pistolammo",
      ["label"] = "Pistol Ammo",
      ["itemid"] = 64,
      ["weight"] = 5,
      ["stackable"] = true,
      ["quantity"] = 4,
      ["created"] = 1636664362
    }
  }
}
```

## Creating an Inventory

The inventory you might want to create depends on your use case. For instance, if the inventory is only needed for a current session, a temporary inventory should be created - that way unused inventories don't take up space in the database. Fortunately, the framework differentiates inventory types so this is quite simple to achieve.

### Temporary

A temporary inventory can be created using the [inventory:createSecondaryInventoryTemp](events#inventorycreatesecondaryinventorytemp) event. 

### Persistent

A persistent inventory can be created using the [inventory:createInventory](events#inventorycreateinventory) event.