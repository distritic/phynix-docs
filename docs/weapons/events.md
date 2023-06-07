# Events

## Client-side

### weapons:equipped

This event is triggered when a weapon is equipped or unequipped.

```lua title="client/main.lua"
AddEventHandler("weapons:equipped", function(currentWeapon)
  if not currentWeapon then
    print("Unequipped weapon");
  else
    print("Equipped weapon");
  end
end);
```