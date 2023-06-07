# Target

Some additional information for the parameters of a target zone:
* The `name` parameter must be unique to the zone.
* The `icon` parameter of the zone is simply an icon name string from [Font Awesome v5](https://fontawesome.com/v5/search). 
* The `handler` parameter is a function which will be called when the interaction is selected.


## Entity Zone

* The `compute` parameter of an entity zone will determine whether the interaction will appear for the player. It is meant to return a boolean value indicating if conditions to interact have been met.

For example, the zone below will allow the player to inspect the vehicle if it is player owned, and the driver seat is empty:

```lua title="client/main.lua"
exports.px_hud:AddTargetEntity({
  name = "inspectVehicleMechanic",
  label = "Inspect Vehicle",
  icon = "fas fa-car-mechanic",
  minDistance = 3.0,
  compute = function(entityHit, entityModel)
    return DecorExistOn(entityHit, "PlayerVehicle") and GetPedInVehicleSeat(entityHit, -1) == 0;
  end,
  handler = function(plyPed, plyCoords, entityHit)
    TriggerEvent("mechanic:inspectVeh", entityHit);
  end
});
```

## Box Zone

The box zone parameters correspond to those from [mkafrin/PolyZone](https://github.com/mkafrin/PolyZone). You can create new box zone parameters by using the `/pzcreate` command and then checking your root server folder for a file named `polyzone_created_zones.txt`.

An example of a box zone is as follows:

```lua title="client/main.lua"
exports.px_hud:AddTargetBoxZone({
  name = "burgerMenu",
  label = "Burger Shot",
  icon = "far fa-clipboard",
  minDistance = 1.5,
  handler = function()
    TriggerServerEvent("burger:businessMenu");
  end
}, {
  center = vector3(-1191.89, -901.12, 14.0),
  length = 1,
  width = 1.0,
  options = {
    heading=35,
    minZ=13.85,
    maxZ=14.45
  }
});
```