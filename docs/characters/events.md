---
sidebar_position: 4
---

# Events

## Client-side

### core:setCharacter

This event is triggered when the player character is initialised.

```lua title="client/main.lua"
AddEventHandler("core:setCharacter", function(charData)
  print("Set character with data: "..json.encode(charData));
end);
```

```lua title="client/main.lua"
AddEventHandler("chars:loadedCharacterData", function(charData)
  print("Loaded characters with data: "..json.encode(charData));
end);
```

```lua title="client/main.lua"
AddEventHandler("chars:loadAppearance", function(character, jailTime, outfitName)
  print("Loaded character appearance with data: "..json.encode(character), jailTime, outfitName);
end);
```

## Server-side

### chars:getMenuData

This event is triggered when a player uses the `/swap` command to switch characters, and at initial connection. The `src` parameter is passed when triggered server-side.

```lua title="server/main.lua"
RegisterServerEvent("chars:getMenuData");
AddEventHandler("chars:getMenuData", function(src)
  print("Player Id "..src.." has entered the character selection menu.")
end);
```

### chars:getCharacters

This event takes a callback function as the only argument, which will return the full list of characters. The example below prints the player ID and character name for each character currently instantiated.

```lua title="server/main.lua"
TriggerEvent("chars:getCharacters", function(characters)
  for src, char in pairs(characters) do
    print("Player Id: "..src);
    print("Character Name: "..char.getName());
  end
end)
```

:::caution
You should use this event to return the table of characters rather than the export [GetCharacters](exports#getcharacters). This is because exports have greater limitations to return value size in memory. If you have too many players connected, you may experience errors with using the export.
:::

### chars:loadAppearance

This event is used to load an outfit saved for a specific character in the `clothing` table.
```lua title="server/main.lua"
TriggerEvent("chars:loadAppearance", function(outfitName)
  print("Player Id "..source.." has loaded outfit "..outfitName);
end);
```

### core:characterLoaded

This event is triggered when a character has been initialised (before picking a spawn location).

```lua title="server/main.lua"
AddEventHandler("core:characterLoaded", function(src, char)
  print("Player Id "..src.." has initialised character with Id "..char.get("id"));
end);
```

### chars:hasSpawned

This event is triggered by the client when the character has spawned.

```lua title="server/main.lua"
RegisterServerEvent("chars:hasSpawned");
AddEventHandler("chars:hasSpawned", function()
  print("Player Id "..source.." has spawned.");
end);
```