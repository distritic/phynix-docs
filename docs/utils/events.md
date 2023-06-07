# Events

## Client-side

### core:alert

Trigger a full-screen alert on the player.
```lua title="client/main.lua"
TriggerEvent("core:alert", alertTitle --[[string]], alertBody --[[string]], alertFooter --[[string]]);
-- alertTitle: the title of the alert (very large)
-- alertBody: the content of the alert
-- alertFooter: the footer of the alert (bottom left, small grey text)
```

### nui

Set NUI focus.
```lua title="client/main.lua"
TriggerEvent("nui", hasFocus --[[bool]]);
-- hasFocus: whether NUI has focus
```

:::caution
You should use this event over the native `SetNuiFocus` as it will also update NUI state for the [GetNuiFocus](exports#getnuifocus) export.
:::

### nui:focus

You can also update NUI state manually for the export using event `nui:focus`:
```lua title="client/main.lua"
TriggerEvent("nui:focus", hasFocus --[[bool]], hasCursor --[[bool]]);
-- hasFocus: whether NUI has focus
-- hasCursor: whether NUI is using cursor
```

### utils:me

This event is triggered by the server for all clients when a player uses `/me`.
```lua title="client/main.lua"
TriggerEvent("utils:me", msg --[[string]], source --[[int]]);
-- msg: /me action
-- source: player sending action
```