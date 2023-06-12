# Usage

## How to Use

To use a QBCore resource with your Phynix server, first ensure that you have downloaded all additional dependencies for your resource (besides [`qb-core`](https://github.com/qbcore-framework/qb-core)). For example, to use [`qb-busjob`](https://github.com/qbcore-framework/qb-busjob) with Phynix, you will also require [`qb-menu`](https://github.com/qbcore-framework/qb-menu).

The only changes you will need to make for Phynix to work are within the `fxmanifest.lua` file.

1. You will need to replace any reference to `@qb-core` with a reference to `@px_qb`. 
2. In this case, the resource `PolyZone` has also been renamed to `px_polyzone`. So you will need to update these as well.

:::info
You can tell which dependencies you may require as they will be listed in the `fxmanifest.lua`. Dependencies could also be called as an export or used within events - ensure you've checked what dependencies you will require and apply the same steps to them.
:::

```lua title="fxmanifest.lua"
fx_version 'cerulean'
game 'gta5'

description 'QB-BusJob'
version '1.2.0'

shared_scripts {
  -- Remove/comment reference to qb-core
  --'@qb-core/shared/locale.lua',

  -- Replace with reference to px_qb
  '@px_qb/shared/locale.lua',
  'locales/en.lua',
  'locales/*.lua',
  'config.lua'
}

client_scripts {
  -- Remove/comment reference to @PolyZone
  -- '@PolyZone/client.lua',
  -- '@PolyZone/BoxZone.lua',
  -- '@PolyZone/EntityZone.lua',
  -- '@PolyZone/CircleZone.lua',
  -- '@PolyZone/ComboZone.lua',

  -- Replace with reference to px_polyzone
  '@px_polyzone/client.lua',
  '@px_polyzone/BoxZone.lua',
  '@px_polyzone/EntityZone.lua',
  '@px_polyzone/CircleZone.lua',
  '@px_polyzone/ComboZone.lua',

  'client/main.lua'
}

server_script 'server/main.lua'

lua54 'yes'
```

## Additional Considerations

### qb-target

Some of the exports used by QBCore resources from `qb-target` have also been implemented within `px_qb`.

* AddBoxZone
* AddEntityZone
* RemoveZone
* AddTargetEntity
* RemoveTargetEntity
* AddTargetModel
* RemoveTargetModel
* AddGlobalVehicle
* AddGlobalObject
* AddGlobalPlayer
* RemoveGlobalType
* RemoveGlobalPlayer

### LegacyFuel

The `SetFuel` export from `LegacyFuel` has also been implemented within `px_qb`.

### qb-vehiclekeys

The `vehiclekeys:client:SetOwner` event from `qb-vehiclekeys` has also been implemented within `px_qb`.

### qb-inventory

The `inventory:client:ItemBox` event from `qb-inventory` has also been implemented within `px_qb`.

## Compatibility Limitations

The level of compatibility is currently limited to the following:

* Gangs and job grades do not exist within Phynix and will not work correctly. 

  Character jobs are reset to `civ` when a player disconnects, and players must clock-on again to be re-assigned a job. You may need to compensate for this when using QBCore scripts.

* The structure of the inventory object will be different to that used for QBCore, however all inventory related methods work correctly.

## Future Improvements

You can suggest additional implementations of QB-related functionality on our [Discord server](https://discord.gg/DK6Fh6vEBp/). We are constantly looking to improve cross-compatibility and want to ensure all commonly used exports and events have been considered.