---
sidebar_position: 1
---

# Introduction

So, you want to find out about items - huh?


## Data Structure

Cool, so how exactly does an "item" work? Well, an item in this sense is just an abstract data structure, more specifically a table of attributes which make up the item.

These attributes are returned from the database and cached by the server and each client. The structure of an item might look a little like this:
```lua
{
  ["name"] = "pistol",
  ["label"] = "Pistol",
  ["itemid"] = 453432689,
  ["weight"] = 10,
  ["stackable"] = false,
  ["durability"] = 2419200,
  ["description"] = "Standard handgun. A .45 caliber combat pistol with a magazine capacity of 12 rounds that can be extended to 16.",
  ["seize"] = true
}
```
Now, an item *in your inventory* may look slightly different. This is because storing some of the above metadata for each item would be a waste of memory and storage in your database. Instead, inventories store only critical item data such as the `quantity` or `name` field. So if you're looking for an item `description`, you should use an export like [GetItemAttribute](exports#getitemattribute) to fetch it rather then storing it with each item in every inventory ever.

Phew, that was quite a mouthful. Now let's find out how to add your own items.

## Creating an Item

### Database

In order to create an item, you will have to add a new row to the `items` database table. We recommend using [HeidiSQL](https://www.heidisql.com/) to manage database state. Once the item has been added to the database, there's a few small things left to do.

Once the item has been added, you will need to either restart your server or use the `refreshItems` console command to clear the item cache and fetch an updated dictionary from the database.

### Resource

Before adding an item through a resource, you **must** ensure that the item does not already exist and the `itemid` field is not duplicated in any way. You may experience unintended functionality if you don't do this. 

The `AddItem` method is a server-side method for which you can find more information [here](exports/#additem).

```lua title="server/main.lua"
exports.phynix:AddItem("pistol", {
  ["name"] = "pistol",
  ["label"] = "Pistol",
  ["itemid"] = 453432689,
  ["weight"] = 10,
  ["stackable"] = false,
  ["durability"] = 2419200,
  ["description"] = "Standard handgun. A .45 caliber combat pistol with a magazine capacity of 12 rounds that can be extended to 16.",
  ["seize"] = true
});
```

## Remarks

:::caution
If you are adding a new weapon item, the `itemid` field **must** be the [Jenkins hash](https://cookbook.fivem.net/2019/06/23/lua-support-for-compile-time-jenkins-hashes/) decimal equivelant of the weapon name. Otherwise, the item will not be recognised as a weapon and you may find unexpected results.

You will have to add all necessary configuration options to resources such as `px_weapons` and `px_injuries` for intended behaviour, otherwise the weapon may not be usable or not injure your character in the case of `px_injuries`.
:::

You must *(or rather should)* add a meaningful image for the item. You can do this by navigating to the `/px_inventory/ui/images` directory where you will find all item images and dropping in the image file. 

:::info
For the image to show, it must be named exactly the same as in the database and be in a `.png` format. We recommend a resolution of `150x150` for all items, as anything beyond this will make no noticable difference in the UI. Larger file sizes mean longer download times, and ultimately poop stuff.

Also, for the sake of your eyes, ensure the background is transparent.
:::
