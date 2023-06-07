# Exports

## Client-side

### GetNuiFocus

Return a table with current NUI focus parameters.
```lua title="client/main.lua"
local focus --[[table]] = exports.px_utils:GetNuiFocus();
if focus[1] then print("NUI has focus"); end
if focus[2] then print("NUI has cursor focus"); end
```

### GetJob

Return the cached job of the players character.
```lua title="client/main.lua"
local job --[[table]] = exports.px_utils:GetJob();
```

### GetWhitelist

Return the cached whitelist table of the players character.
```lua title="client/main.lua"
local whitelist --[[table]] = exports.px_utils:GetWhitelist();
```

### SetWeaponDamageMultiplier

Set a weapon damage modifier. Pass `multiplier` as `1.0` to reset.
```lua title="client/main.lua"
exports.px_utils:SetWeaponDamageMultiplier(weaponHash --[[int]], multiplier --[[float]]);
-- weaponHash: hash of weapon to set multiplier on
-- multiplier: multiplier value (base 1.0)
```

### SetDensityMultiplier

Set a population density multiplier. There are three different density multipliers available:
* `vehicle` for parked and engine-spawned vehicles
* `ped` for engine-spawned pedestrians
* `scenario` for scenario peds such as animals
```lua title="client/main.lua"
exports.px_utils:SetDensityMultiplier(type --[[string]], multiplier --[[float]]);
-- type: the density multiplier type (one of the above)
-- multiplier: multiplier value (base 1.0)
```