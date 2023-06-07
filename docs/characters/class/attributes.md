---
sidebar_position: 3
---

# Attributes

The character object is supplied with a set of useful attributes.

## Static

### id: `int`

This is the unique identifier of the character.

### identifier: `string`

This is the Discord identifier of the character owner, e.g. `discord:368480949693841408`.

### dateOfBirth: `string`

The date of birth of the character in the format `YYYY-MM-DD`.

### gender: `string`

The gender of the character, stored as a single letter - either `m` or `f`.

### money: `int`

The money of the character.

### crypto: `int`

The crypto of the character.

### phone: `int`

The phone number of the character, a 10 digit number which cannot start with `0`.

### init: `bool`

A flag which determines whether this is the first time the character is initialised. This flag is set to `false` once first initialisation is complete.

### disabled: `bool`

A flag which determines whether the character is playable. This flag is set to `false` when the character is sent to the morgue.

### job: `string`

The job of the character, this is automatically reset to `civ` on connection.

### jailTime: `int`

The remaining jail sentence of the character in minutes.

### playTime: `int`

The total play-time of the character in minutes.

### mcash: `int`

The money stored in the motel room of the character.

### walkstyle: `string`

The walkstyle animation dictionary name of the character.

## Dynamic

### name: `table`

The name of the character.
```lua
{
  ["first"] = "Miles",
  ["middle"] = "",
  ["last"] = "Blaine"
}
```
:::info
When unused, the middle name is stored as an empty string `""`.
:::

### needs: `table`

The basic needs of the character, such as food and water. These are stored as a dictionary table in Lua, and as values between `0` and `100`.
* A higher `thirst` value reduces the need for water, and vice versa.
* A higher `hunger` value reduces the need for food, and vice versa.
* A higher `stress` value increases the stress level, and vice versa.
```lua
{
  ["thirst"] = 95.43,
  ["hunger"] = 47.11,
  ["stress"] = 1.67
}
```

### paychecks: `table`

The paychecks awaiting to be collected by the character. This table structure is more complex, but can be represented as follows:
```lua
{
  ["state"] = {
    ["Los Santos Police Dept."] = 1250,
    ["LSPD Auto Impound"] = 500
  },
  ["pdm"] = {
    ["Premium Deluxe Motorsport"] = 5000
  },
  ["vunicorn"] = {
    ["Vanilla Unicorn"] = 3500
  }
}
```
What does this mean? Let's take a look.
* The character has two awaiting paychecks which will be deducted from the balance of the `state` business. These will contain a note, labelled Los Santos Police Dept. and LSPD Auto Impound. 
* Notice how two paychecks are given from the same business, under different labels. This means that the character will receive a total of $1750 from this business.
* A similar principle applies for `pdm` and `vunicorn`, except these only contain one label. 

### created: `table`

The date and time that the character was created. The `date` field contains both the date and time stored as a string, while the `time` field contains an integer representing the [epoch](https://en.wikipedia.org/wiki/Epoch) timestamp.
```lua
{
  ["date"] = "05-11-2021 21:31:52",
  ["time"] = 1636662712
}
```

### injuries: `table`

The injuries sustained by the character. The first key-value pair is the bone ID that has sustained injuries. The second key-value pair is the injury [Jenkins hash](https://cookbook.fivem.net/2019/06/23/lua-support-for-compile-time-jenkins-hashes/). Lastly, the third key-value pair stores all information for the specific injury such as the type of wound, bleed time, label and meta data.
```lua
{
  [31086 --[[boneId]]] = {
    [-1716589765 --[[injuryHash]]] = {
      ["type"] = "penetrating",
      ["bleed"] = -1,
      ["string"] = "High-speed Projectile",
      ["treatableWithBandage"] = false,
      ["treatmentPrice"] = 500,
      ["stage"] = 2,
      ["bandagedTime"] = 0
    }
  }
}
```

### licenses: `table`

The licenses held by the character. All possible license fields are shown below, where dates are stored in [epoch](https://en.wikipedia.org/wiki/Epoch) milliseconds.
```lua
{
  ["driver"] = {
    ["status"] = "valid",
    ["issue_date"] = 1636662712000,
    ["issued_by"] = "State of San Andreas"
  },
  ["firearm"] = {
    ["status"] = "suspended",
    ["issue_date"] = 1636662712000,
    ["issued_by"] = "Hon. Judge Oliver Hall",
    ["suspension_date"] = 1636663523000,
    ["suspension_end"] = 1636763523000,
    ["suspension_reason"] = "Illegal Hunting",
    ["suspended_by"] = "Trooper Erwin McNulty"
  }
}
```
:::caution
  Dates here are stored in [epoch](https://en.wikipedia.org/wiki/Epoch) milliseconds rather than seconds.
:::

### whitelist: `table`

The whitelists held by the character. The key-value pairs represent the whitelist type and whitelist level respectively.
```lua
{
  ["police"] = 5,
  ["doctor"] = 0,
  ["judge"] = 15
}
```
:::info
A whitelist level of `0` indicates a whitelist was previously held but removed.
:::

### appearance: `table`

The facial and body appearance of the character. This stores features such as tattoos, barber customisation and hair. Outfits are stored separately in a different database table.
```lua
{
  ["hair"] = {
    ["type"] = 47,
    ["color"] = 3,
    ["highlight"] = 0
  },
  ["head"] = {
    ["mix1"] = 0.5,
    ["mix2"] = 0.5,
    ["skin1"] = 12,
    ["skin2"] = 0,
    ["parent1"] = 42,
    ["parent2"] = 19,
    ["eyecolor"] = 3,
  },
  ["overlays"] = {
    ["0"] = {
      ["color"] = 3,
      ["color2"] = 0,
      ["opacity"] = 1.0,
      ["overlay"] = 10,
      ["colortype"] = 1
    },
    ...
  }
}
```

### inventory: `table` 

The inventory of the character. `max_capacity` represents the number of rows that are available in the inventory, `max_weight` the maximum weight level and `weight` the current weight level. All items are stored under the `items` field.
```lua
{
  ["max_capacity"] = 5,
  ["max_weight"] = 100,
  ["weight"] = 32,
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
:::caution
Inventory slots (or indicies) use zero-based numbering, where the initial element of the array is assigned the index `0`, rather than the index `1`.
:::