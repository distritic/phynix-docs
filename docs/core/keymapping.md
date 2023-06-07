# Keymapping

## Exports

### RegisterKey

```lua
exports.px_keymapping:RegisterKey("LMENU", "tackle", "Tackle Player", "keyboard") -- key, name, desc, mapper, bypassNUI
exports.px_keymapping:RegisterInput("tackle", false, function() -- name, onUp, callback
  if not IsPedCuffed(PlayerPedId()) then
    TryTackle()
  end
end)
  ```

### RegisterInput