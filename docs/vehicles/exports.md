# Exports

## Client-side

### TryTrunk

This export is used to open the trunk of a vehicle from behind. The player must be behind the vehicle.
```lua title="client/main.lua"
exports.px_veh:TryTrunk(wait --[[bool]], notify --[[bool]]);
-- wait: if true, will wait for player to walk to trunk
-- notify: if true, will notify player of errors/requirements
```

### IsVehiclePlayerOwned

This export will return true if the vehicle has been marked as owned by a player.
```lua title="client/main.lua"
local isOwned --[[bool]] = exports.px_veh:IsVehiclePlayerOwned(entity --[[int]]);
-- entity: vehicle to check
```

### SetVehiclePlayerOwned

This export will set a vehicle as owned by a player. Can be returned using `IsVehiclePlayerOwned`.
```lua title="client/main.lua"
exports.px_veh:SetVehiclePlayerOwned(entity --[[int]], bool --[[bool]]);
-- entity: vehicle to check
-- bool: is player owned
```

### DegradeOwnedVehicle

This export will degrade the player's current vehicle.
```lua title="client/main.lua"
exports.px_veh:DegradeOwnedVehicle(upperLimit --[[int]], spin --[[int]]);
-- upperLimit: math.random(0, upperLimit) for each part
-- spin: number of iterations of potential degradation (50% chance for each iteration)
```

### ControlVehicleDoor

This export will control vehicle doors.
```lua title="client/main.lua"
exports.px_veh:ControlVehicleDoor(type --[[string]], index --[[int]], veh --[[int]]);
-- type: "open_door" or "close_door"
-- index: door index (0 for driver, 1 for front passenger, etc.)
-- veh: vehicle to control
```

### HasKeys

This export will return whether the player has keys to the given vehicle by plate.
```lua title="client/main.lua"
local hasKeys --[[bool]] = exports.px_veh:HasKeys(plate --[[string]]);
-- plate: vehicle plate to check for
```

### SetFuelLevel

This export will set vehicle fuel level.
```lua title="client/main.lua"
exports.px_veh:SetFuelLevel(veh --[[int]], level --[[int]]);
-- veh: vehicle to control
-- level: new fuel level
```

## Server-side

### GetVehicleDegradationByPlate

This export will return current vehicle degradation by plate. `false` will be returned if the degradation has not been cached.
```lua title="server/main.lua"
local degradation --[[table]] = exports.px_veh:GetVehicleDegradationByPlate(plate --[[string]]);
```

### SetVehicleDegradationByPlate

This export will set current vehicle degradation by plate.
```lua title="server/main.lua"
exports.px_veh:SetVehicleDegradationByPlate(plate --[[string]], degradation --[[table]]);
```