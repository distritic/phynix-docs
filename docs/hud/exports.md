# Exports

## Client-side

### NewForm

Create a new synchronous form. See [Forms](forms) for more information on how to setup a form.

```lua title="client/main.lua"
local result --[[table]] = exports.px_hud:NewForm({
  ["title"] = title --[[string]],
  ["elements"] = elements --[[table]],
  ["canExit"] = canExit --[[bool]],
  ["validate"] = validate --[[function]]
})

-- title: form title
-- elements: form elements
-- canExit: allow the player to exit the form (ESC or 'Cancel' button)
-- validate(fields): called when the user wants to submit the form. 
--                   Must return {success = true} to allow submission.
-- result: a table of key-value pairs in the form [field] = value
```

### NewFormAsync

Create a new asynchronous form. See [Forms](forms) for more information on how to setup a form.

```lua title="client/main.lua"
local result --[[table]] = exports.px_hud:NewFormAsync({
  ["title"] = title --[[string]],
  ["elements"] = elements --[[table]],
  ["canExit"] = canExit --[[bool]],
  ["validate"] = validate --[[function]],
  ["onFinish"] = onFinish --[[function]]
})

-- title: form title
-- elements: form elements
-- canExit: allow the player to exit the form (ESC or 'Cancel' button)
-- validate(fields): called when the user wants to submit the form. 
--                   Must return {success = true} to allow submission.
-- onFinish(success, fields): called when the form has submitted
```

### StartGame

Start a new HUD minigame. Currently, only `"circle"` is supported for the `name` parameter. See [Games](games) for more information on how to setup a game.

```lua title="client/main.lua"
local result --[[bool]] = exports.px_hud:StartGame(name --[[string]], params --[[table]], callback --[[function]], sync --[[bool]]);
-- name: minigame name, currently only "circle" is supported
-- params: minigame parameters, depends on game type
-- callback(success): if not sync, a callback with success value
-- sync: blocking, will return result from function rather than callback
```

### GetZone

Get the zone name based on player position.

```lua title="client/main.lua"
local zone --[[string]] = exports.px_hud:GetZone(coords --[[vector3]]);
-- coords: position to get zone from
-- zone: current zone based on coords parameter
```

### HasVehicleUI

Returns whether the player currently has a vehicle UI visible.

```lua title="client/main.lua"
local visible --[[bool]] = exports.px_hud:HasVehicleUI();
-- visible: true if vehicle UI is visible
```

### AddTargetEntity

Add an entity as a new interaction target. Allows the player to interact with the entity using the `LALT` targetting system. See [Target](target) for more information on how to setup a target.

```lua title="client/main.lua"
exports.px_hud:AddTargetEntity({
  ["name"] = name --[[string]],
  ["label"] = label --[[string]],
  ["icon"] = icon --[[string]],
  ["job"] = job --[[string]],
  ["minDistance"] = minDistance --[[float]],
  ["compute"] = compute --[[function]],
  ["handler"] = handler --[[function]]
});
-- name: name of target zone, must be unique
-- label: target zone label
-- icon: target zone icon, must be FontAwesome format
-- job?: job required to interact with target (nil for none)
-- minDistance: minimum distance from player to entity for interaction
-- compute(entityHit, entityModel): return true if player is allowed to interact
-- handler(plyPed, plyCoords, entityHit): handler for when interaction occurs
```

### AddTargetBoxZone

Add a box zone as a new interaction target. Allows the player to interact with the environment using the `LALT` targetting system. See [Target](target) for more information on how to setup a target.

```lua title="client/main.lua"
exports.px_hud:AddTargetBoxZone({
  ["name"] = name --[[string]],
  ["label"] = label --[[string]],
  ["icon"] = icon --[[string]],
  ["job"] = job --[[string]],
  ["minDistance"] = minDistance --[[float]],
  ["handler"] = handler --[[function]],
}, boxZone --[[table]]);
-- name: name of target zone, must be unique
-- label: target zone label
-- icon: target zone icon, must be FontAwesome format
-- job?: job required to interact with target (nil for none)
-- minDistance: minimum distance from player to entity for interaction
-- handler(plyPed, plyCoords, entityHit): handler for when interaction occurs
-- boxZone: the box zone parameters
```

### DeleteTargetByName

Remove an interact target by its previously defined name.

```lua title="client/main.lua"
exports.px_hud:DeleteTargetByName(targetName --[[string]]);
-- targetName: name of target zone, must be unique
```

### ToggleTarget

Forcefully toggle "targetting mode". This is the equivelant of holding down `LALT`.

```lua title="client/main.lua"
exports.px_hud:ToggleTarget(targetOn --[[bool]]);
-- targetOn: true to show targetting mode, false to hide
```

### DoesTargetExist

Returns whether a target zone already exists.

```lua title="client/main.lua"
local exists --[[bool]] = exports.px_hud:DoesTargetExist(targetName --[[string]]);
-- targetName: name of target zone, must be unique
```