# Exports

## Client-side

### HideWeapon

This export will forcefully hide the current player's weapon.
```lua title="client/main.lua"
exports.px_weapons:HideWeapon();
```

### UpdateWeaponIndex

This export will update the client with the weapon inventory index position.
```lua title="client/main.lua"
exports.px_weapons:UpdateWeaponIndex(newIndex --[[int]]);
```

### GetSelectedWeapon

This export will return the currently selected weapon object.
```lua title="client/main.lua"
local weapon --[[table]] = exports.px_weapons:GetSelectedWeapon();
```

### GetCurrentWeaponCategory

This export will return the category of the player's current weapon. Returns `false` if not holding a weapon, or a category is not found.
```lua title="client/main.lua"
local category --[[string/bool]] = exports.px_weapons:GetCurrentWeaponCategory();
```

### SetRecoilMultiplier

This export will set the recoil multipler for all weapons. The base multipler is `1.0`.
```lua title="client/main.lua"
exports.px_weapons:SetRecoilMultiplier(value --[[float]]);
```

### IsHolstering

This export will return whether the player is currently in between holstering animations.
```lua title="client/main.lua"
local holstering --[[bool]] = exports.px_weapons:IsHolstering();
```

### RemoveAttachment

This export will remove the attachment from the current player's weapon by (item) name.
```lua title="client/main.lua"
exports.px_weapons:RemoveAttachment(type --[[string]]);
```

### UpdateRecoilFactor

This export will update the weapon recoil factor based on current player stance.
```lua title="client/main.lua"
exports.px_weapons:UpdateRecoilFactor(stance --[[int]]);
```

### IsWeaponSuppressed

This export will return whether the current player's weapon is suppressed.
```lua title="client/main.lua"
local suppressed --[[bool]] = exports.px_weapons:IsWeaponSuppressed();
```

### GetAmmoTypes

This export will return all weapon ammo types from config file.
```lua title="client/main.lua"
local ammoTypes --[[table]] = exports.px_weapons:GetAmmoTypes();
```

## Server-side

### RecentlyThrownWeapon

This export will return whether the thrown weapon specified has recently been used by the player.
```lua title="server/main.lua"
local recentlyUsed --[[bool]] = exports.px_weapons:RecentlyThrownWeapon(src --[[int]], item --[[string]]);
```

### GetPlayerWeapon

This export will return the currently selected weapon object of a player.
```lua title="server/main.lua"
local weapon --[[table]] = exports.px_weapons:GetPlayerWeapon(src --[[int]]);
```

### SetAmmo

This export will set the ammo of the currently selected weapon object of a player.
```lua title="server/main.lua"
exports.px_weapons:SetAmmo(src --[[int]], ammo --[[int]]);
```