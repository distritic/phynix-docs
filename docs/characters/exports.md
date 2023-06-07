---
sidebar_position: 5
---

# Exports

## Client-side

### IsInSelectionScreen

This function will return `true` if the player is currently selecting a character.

```lua title="client/main.lua"
local bool --[[bool]] = exports.px_chars:IsInSelectionScreen()
```

### GetCharacterData

This function will return the [data attributes](class/attributes) of the current character.

```lua title="client/main.lua"
local data --[[table]] = exports.px_chars:GetCharacterData()
```

### GetCharacterField

This function will return the [data attribute](class/attributes) of the current character corresponding to the `field` provided.

```lua title="client/main.lua"
local data --[[any]] = exports.px_chars:GetCharacterField(key --[[string]])
-- key: the field name to retrieve (e.g. "playTime")
```

## Server-side

### GetCharacter

This function is used to fetch a character by player ID.
```lua title="server/main.lua"
local char --[[table]] = exports.px_chars:GetCharacter(src --[[int]]);
-- src: the player ID to get the character of
```

### GetCharacterById

This function is used to fetch a character by character ID.
```lua title="server/main.lua"
local char --[[table]] = exports.px_chars:GetCharacter(charId --[[int]]);
-- src: the character ID to get the character of
```

### GetCharacters

This function is used to fetch a table of all characters initialised.
```lua title="server/main.lua"
local chars --[[table]] = exports.px_chars:GetCharacters();
for src, char in pairs(chars) do
  print("Player Id: "..src);
  print("Character Name: "..char.getName());
end
```

:::caution
You should use the event [chars:getCharacters](events#charsgetcharacters) to return the table of characters rather than this export. This is because exports have greater limitations to return value size in memory. If you have too many players connected, you may experience errors with using the export.
:::

### SaveAllCharacters

This function is used to save any updates character fields of all characters to the database.
```lua title="server/main.lua"
exports.px_chars:SaveAllCharacters();
```

### SaveCurrentCharacter

This function is used to save any updated character fields by the player ID of the character to the database.

```lua title="server/main.lua"
exports.px_chars:SaveCurrentCharacter(src --[[int]])
-- src: player ID of character to save
```

### GetNumCharactersWithJob

This function is used to return the total number of characters with a specific job.

```lua title="server/main.lua"
local numCharactersWithJob --[[int]] = exports.px_chars:GetNumCharactersWithJob(job --[[string]]);
-- job: the specific job to count
```

### DoesCharacterHaveItem

This function is used to return whether a character has an item.

```lua title="server/main.lua"
local hasItem --[[bool]] = exports.px_chars:DoesCharacterHaveItem(src --[[int]], item --[[string/table]]);
-- src: the player ID of the character to check
-- item: the item to check for
```

### DoesCharacterHaveLicense

This function is used to return whether a character has a license. If the character does have the license, license data will be returned. This still evaluates to `true` in an `if ... then` statement.

```lua title="server/main.lua"
local hasLicense --[[table/bool]] = exports.px_chars:DoesCharacterHaveLicense(src --[[int]], licenseName --[[string]]);
-- src: the player ID of the character to check
-- licenseName: the license name to check for, e.g. "driver"
```


### GetCharacterField

This function is used to return a specific field of a character. This is useful when the character object is only required to fetch a single value, as it is quicker.

```lua title="server/main.lua"
local charField --[[any]] = exports.px_chars:GetCharacterField(src --[[int]], key --[[string]]);
-- src: the player ID to get the character field of
-- key: the field key used to return the field value
```

For example, this call will check the job of a character using the `GetCharacterField` export.
```lua title="server/main.lua"
-- Faster Method
RegisterServerEvent("tow:isJobTow")
AddEventHandler("tow:isJobTow", function()
  local job = exports.px_chars:GetCharacterField(source, "job");
  TriggerClientEvent("tow:currentJob", job == "tow");
end);

-- Slower Method
RegisterServerEvent("tow:isJobTow")
AddEventHandler("tow:isJobTow", function()
  local char = exports.px_chars:GetCharacter(source);
  local job = char.get("job");
  TriggerClientEvent("tow:currentJob", job == "tow");
end);
```

### SetCharacterField

This function is used to set a specific character field. This is useful when the character object is only required to set a single value, as it is quicker.

```lua title="server/main.lua"
exports.px_chars:SetCharacterField(src --[[int]], key --[[string]], value --[[any]]);
-- src: the player ID to set the character field of
-- key: the key of the field value
-- value: the new field value
```

For example, this call will set the job of a character using the `SetCharacterField` export.
```lua title="server/main.lua"
-- Faster Method
RegisterServerEvent("tow:setOnDuty")
AddEventHandler("tow:setOnDuty", function()
  exports.px_chars:SetCharacterField(source, "job", "tow");
  TriggerClientEvent("core:notify", source, "Your job is now tow");
end);

-- Slower Method
RegisterServerEvent("tow:setOnDuty")
AddEventHandler("tow:setOnDuty", function()
  local char = exports.px_chars:GetCharacter(source);
  char.set("job", "tow");
  TriggerClientEvent("core:notify", source, "Your job is now tow");
end);
```

### InitializeCharacter

This function is used by the character selection interface to initialise a character.
```lua title="server/main.lua"
exports.px_chars:InitializeCharacter(src --[[int]], charId --[[int]]);
-- src: the player ID to initialise the character on
-- charId: the character ID of character to initialise
```

### CreateNewCharacter

This function is used by the character selection interface to create a new character.

```lua title="server/main.lua"
local data = {
  ["name"] = {
    ["first"] = "Miles",
    ["middle"] = "",
    ["last"] = "Blaine"
  },
  ["dateOfBirth"] = "1987-05-12",
  ["gender"] = "m"
}
exports.px_chars:CreateNewCharacter(src --[[int]], data --[[table]])
-- src: player ID of character owner
-- data: base information about the character
```

### DestroyCharacter

This function is used to destroy a character object by player ID, simultaniously saving it.
```lua title="server/main.lua"
exports.px_chars:DestroyCharacter(src --[[int]], cb --[[function]]);
-- src: the player ID to destroy the character of
-- cb?: a callback function after completion
```

### ValidateCharacterOwnership

This function will return `true` if the player has ownership of a character, otherwise `false`.
```lua title="server/main.lua"
exports.px_chars:ValidateCharacterOwnership(src --[[int]], charId --[[int]]);
-- src: the player ID to compare with
-- charId: the character ID to compare with
```

### DeleteCharacterById

This function will delete the character by their character ID, with a callback function after completion.
```lua title="server/main.lua"
exports.px_chars:DeleteCharacterById(charId --[[int]], cb --[[function]]);
-- charId: the character ID of character to be deleted
-- cb: a callback function after completion
```