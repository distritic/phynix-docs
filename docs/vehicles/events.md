# Events

## Client-side

### veh:entered

This event is triggered when a player enters any vehicle.
```lua title="client/main.lua"
AddEventHandler("veh:entered", function(veh --[[int]])
  ...
end);
```

### veh:setVehicleKey

This event is triggered when a player is given the keys to a vehicle.
```lua title="client/main.lua"
TriggerEvent("veh:setVehicleKey", plate --[[string]], hasKey --[[bool]]);
```

### veh:removeAllKeys

This event is triggered to remove all vehicle keys from a player.
```lua title="client/main.lua"
TriggerEvent("veh:removeAllKeys");
```

## Server-side

### veh:exitPersonalVehicle

This event is triggered when by the client a player exits any personal vehicle.
```lua title="server/main.lua"
RegisterServerEvent("veh:exitPersonalVehicle")
AddEventHandler("veh:exitPersonalVehicle", function(degradation --[[table]], coords --[[vector3]])
  ...
end);
```