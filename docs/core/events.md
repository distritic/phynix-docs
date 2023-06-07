---
sidebar_position: 4
---

# Events

## Client-side

### core:setMoney

This is a low-level event used to **visually** set the money display.
```lua title="client/main.lua"
TriggerEvent("core:setMoney", amount --[[int]]);
-- amount: money amount
```

### core:addedMoney

This is a low-level event used to **visually** add money to the money display.
```lua title="client/main.lua"
TriggerEvent("core:addedMoney", amount --[[int]]);
-- amount: money added
```

### core:removedMoney

This is a low-level event used to **visually** remove money from the money display.
```lua title="client/main.lua"
TriggerEvent("core:removedMoney", amount --[[int]]);
-- amount: money removed
```

### core:displayMoney

This is a low-level event used to temporarily show the money display.
```lua title="client/main.lua"
TriggerEvent("core:displayMoney", show --[[bool]], amount --[[int]]);
-- show: whether the display should be shown
-- amount?: money amount
```

### core:getClosestPlayer

This event will find the closest player.
```lua title="client/main.lua"
TriggerEvent("core:getClosestPlayer", range --[[int]], cb --[[function]]);
-- range: the distance to check around
-- cb: callback function with found player data
```

For example:
```lua title="client/main.lua"
TriggerEvent("core:getClosestPlayer", 5.0, function(player)
  print(player.id);
  print(player.name);
  print(player.dist);
end)
```

### core:spawnVehicle

This event will spawn a vehicle based on the `model` specified, and place the player inside it. Assigning a truthy value to `upgraded` will add engine, transmission, turbo and brake upgrades to the vehicle.

```lua title="client/main.lua"
TriggerEvent("core:spawnVehicle", model --[[string]], upgraded --[[bool]]);
-- model: the vehicle model name
-- upgraded?: if true, will spawn fully upgraded
```

### core:freezePlayer

This event will freeze the current player based on `state`.

```lua title="client/main.lua"
TriggerEvent("core:freezePlayer", freeze --[[state]]);
-- state: if true, player will be frozen - otherwise, unfreeze
```

### core:teleportUser

This event will teleport the user to the specified co-ordinates.

```lua title="client/main.lua"
TriggerEvent("core:teleportUser", coords --[[vector3]]);
-- coords: the position to teleport to
```

### core:notifySound

This event will play a notification sound for the user, and flash their screen.

```lua title="client/main.lua"
TriggerEvent("core:notifySound");
```

### core:teleportUserByWaypoint

This event will teleport the user to their set waypoint.

```lua title="client/main.lua"
TriggerEvent("core:teleportUserByWaypoint");
```

### core:slap

This event will slap the user into the air.

```lua title="client/main.lua"
TriggerEvent("core:slap");
```

### core:die

This event will kill the user.

```lua title="client/main.lua"
TriggerEvent("core:die");
```

### core:crash

This event will crash the user.

```lua title="client/main.lua"
TriggerEvent("core:crash");
```

## Server-side

### core:connected

This event is triggered from the client when the network session has started for a client.
```lua title="server/main.lua"
RegisterServerEvent("core:connected");
AddEventHandler("core:connected", function()
  print(source, "has connected");
  -- source
end);
```

### core:playerLoaded

This event is triggered when the user object is initialised for a player.

```lua title="server/main.lua"
AddEventHandler("core:playerLoaded", function(src, user)
  print("Player Id "..src.." has loaded as user Id "..user.get("id"));
end);
```

### core:kick

This event can be triggered by the client on itself, or by the server on a player. It will kick the player from the server.

```lua title="server/main.lua"
TriggerEvent("core:kick", target --[[int]], reason --[[string]]);
-- target: player ID to kick
-- reason: reason for kick
```

### core:anticheatBan

This event can be triggered by the client on itself, or by the server on a player. It will ban the player from the server.

```lua title="server/main.lua"
TriggerEvent("core:anticheatBan", src --[[int]], res --[[string]], resId --[[string]]);
-- src: player ID to ban
-- res: resource triggering command
-- resId: unique ban identifier for resource
```

### core:anticheatKick

This event can be triggered by the client on itself, or by the server on a player. It will kick the player from the server.

```lua title="server/main.lua"
TriggerEvent("core:anticheatKick", src --[[int]], res --[[string]], resId --[[string]]);
-- src: player ID to kick
-- res: resource triggering command
-- resId: unique kick identifier for resource
```

