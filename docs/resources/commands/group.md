---
sidebar_position: 2
---
# Group Commands
### a
Send a message to all connected staff members.
This command belongs to `phynix`.

Usage: `/a [msg]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|msg|message|
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### admin
Open the administration menu.
This command belongs to `px_admin`.

Usage: `/admin`
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### alert
Send an on-screen alert to another player.
This command belongs to `px_admin`.

Usage: `/alert [src] [message]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
|2|message|message to player|
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### ban
Permanently ban a player.
This command belongs to `phynix`.

Usage: `/ban [src] [reason]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
|2|reason|reason for ban|
#### Group Required
Any groups matching `mod`, or those that inherit it.
### cleararea
Clear your surrounding area of objects, peds and vehicles.
This command belongs to `px_admin`.

Usage: `/cleararea`
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### crash
Crash a player's game.
This command belongs to `phynix`.

Usage: `/crash [src]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
#### Group Required
Any groups matching `admin`, or those that inherit it.
### debug
Toggle debug mode.
This command belongs to `koil-debug`.

Usage: `/debug`
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### die
Commit suicide.
This command belongs to `phynix`.

Usage: `/die`
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### dv
Delete the nearest vehicle.
This command belongs to `phynix`.

Usage: `/dv`
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### freeze
Freeze a player.
This command belongs to `phynix`.

Usage: `/freeze [src]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### giveitem
Give an item to a player.
This command belongs to `phynix`.

Usage: `/giveitem [src] [item] [quantity]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
|2|item|item name|
|3|quantity|amount of item|
#### Group Required
Any groups matching `admin`, or those that inherit it.
### heal
Heal a player's injuries.
This command belongs to `px_injury`.

Usage: `/heal [src]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### kick
Kick a player.
This command belongs to `phynix`.

Usage: `/kick [src] [reason]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
|2|reason|reason for kick|
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### noclip
Move freely around the map.
This command belongs to `phynix`.

Usage: `/noclip`
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### openinv
Open the specified inventory.
This command belongs to `px_inventory`.

Usage: `/openinv [name]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|name|inventory name to open|
#### Group Required
Any groups matching `mod`, or those that inherit it.
### pzadd
Adds point to zone.
This command belongs to `px_polyzone`.

Usage: `/pzadd`
#### Group Required
Any groups matching `sudo`, or those that inherit it.
### pzcancel
Cancel zone creation.
This command belongs to `px_polyzone`.

Usage: `/pzcancel`
#### Group Required
Any groups matching `sudo`, or those that inherit it.
### pzcomboinfo
Prints some useful info for all created ComboZones.
This command belongs to `px_polyzone`.

Usage: `/pzcomboinfo`
#### Group Required
Any groups matching `sudo`, or those that inherit it.
### pzcreate
Starts creation of a zone for PolyZone of one of the available types: circle, box, poly.
This command belongs to `px_polyzone`.

Usage: `/pzcreate [zoneType]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|zoneType|Zone Type (required)|
#### Group Required
Any groups matching `sudo`, or those that inherit it.
### pzfinish
Finishes and prints zone.
This command belongs to `px_polyzone`.

Usage: `/pzfinish`
#### Group Required
Any groups matching `sudo`, or those that inherit it.
### pzlast
Starts creation of the last zone you finished (only works on BoxZone and CircleZone).
This command belongs to `px_polyzone`.

Usage: `/pzlast`
#### Group Required
Any groups matching `sudo`, or those that inherit it.
### pzundo
Undoes the last point added.
This command belongs to `px_polyzone`.

Usage: `/pzundo`
#### Group Required
Any groups matching `sudo`, or those that inherit it.
### returnveh
Return a vehicle to the garage (by plate).
This command belongs to `px_garage`.

Usage: `/returnveh [plate]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|plate|plate number of vehicle to return|
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### say
Send a server-wide message
This command belongs to `phynix`.

Usage: `/say [message]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|message|message to send|
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### setjob
Set the job of a player.
This command belongs to `phynix`.

Usage: `/setjob [src] [job]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
|2|job|job name|
#### Group Required
Any groups matching `admin`, or those that inherit it.
### settime
Set the server time.
This command belongs to `px_time`.

Usage: `/settime [h] [m] [s]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|h|hour|
|2|m|minute|
|3|s|second|
#### Group Required
Any groups matching `admin`, or those that inherit it.
### setweather
Initiate a weather change.
This command belongs to `px_time`.

Usage: `/setweather [weather name]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|weather name|EXTRASUNNY, CLOUDS, SNOWLIGHT, RAIN, CLEARING, FOGGY, SMOG, OVERCAST, THUNDER, CLEAR|
#### Group Required
Any groups matching `admin`, or those that inherit it.
### slap
Slap a player.
This command belongs to `phynix`.

Usage: `/slap [src]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
#### Group Required
Any groups matching `admin`, or those that inherit it.
### stfu
Toggle staff notifications.
This command belongs to `phynix`.

Usage: `/stfu`
#### Group Required
Any groups matching `dev`, or those that inherit it.
### tempban
Temporarily ban a player.
This command belongs to `phynix`.

Usage: `/tempban [src] [duration] [reason]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
|2|duration|number of hours|
|3|reason|reason for ban|
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### tp
Teleport to a player, or waypoint.
This command belongs to `phynix`.

Usage: `/tp [src/wp]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src/wp|player id or wp|
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### tpc
Teleport to the specified coordinate.
This command belongs to `phynix`.

Usage: `/tpc [x] [y] [z]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|x|x coordinate|
|2|y|y coordinate|
|3|z|z coordinate|
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### tph
Teleport to a house.
This command belongs to `px_housing`.

Usage: `/tph [houseid]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|houseid|house id to enter|
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### tphere
Bring a player to you.
This command belongs to `phynix`.

Usage: `/tphere [src]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### unban
Unban a player using an identifier.
This command belongs to `phynix`.

Usage: `/unban [identifier]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|identifier|ban id or player identifier|
#### Group Required
Any groups matching `admin`, or those that inherit it.
### unmorgue
Unmorgue a character.
This command belongs to `px_fire`.

Usage: `/unmorgue [char]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|char|char id|
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### veh
Spawn a car.
This command belongs to `phynix`.

Usage: `/veh [model] [upgraded]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|model|vehicle model|
|2|upgraded|'1' for fully upgraded|
#### Group Required
Any groups matching `admin`, or those that inherit it.
### wfs
Send an on-screen WFS to another player.
This command belongs to `px_admin`.

Usage: `/wfs [src]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
### whisper
Send a message directly to another player.
This command belongs to `phynix`.

Usage: `/whisper [src] [msg]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
|2|msg|message|
#### Group Required
Any groups matching `jrmod`, or those that inherit it.
