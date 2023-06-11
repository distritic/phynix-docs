---
sidebar_position: 3
---
# Job Commands
### 911r
Respond to a 911 call.
This command belongs to `px_police`.

Usage: `/911r [src] [message]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
|2|message|your message|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
|ems|
|doctor|
### admit
Admit a player to the hospital.
This command belongs to `px_fire`.

Usage: `/admit [src] [reason]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
|2|reason|reason to admit|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|ems|
|doctor|
### bandage
Bandage the nearest player's injuries
This command belongs to `px_injury`.

Usage: `/bandage [src]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id (omit to bandage nearest)|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|ems|
|police|
|doctor|
|fib|
### barriers
Open the barrier management menu.
This command belongs to `px_police`.

Usage: `/barriers`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
|ems|
### bill
Bill a player.
This command belongs to `px_jail`.

Usage: `/bill [src] [fine]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
|2|fine|amount of money|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|judge|
|fib|
### boom
Activate your news boom.
This command belongs to `px_news`.

Usage: `/boom`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|news|
### breach
Breach into the nearest property.
This command belongs to `px_motels`.

Usage: `/breach [apt]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|apt|apartment number (omit if motel or house)|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
### breathalyze
Test a breath sample of nearest person.
This command belongs to `px_police`.

Usage: `/breathalyze`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
|ems|
|doctor|
### cam
Activate a security camera.
This command belongs to `px_cameras`.

Usage: `/cam [id]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|id|camera id to activate|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
### camera
Activate your news camera.
This command belongs to `px_news`.

Usage: `/camera`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|news|
### cancelcall
Cancel your current news call.
This command belongs to `px_news`.

Usage: `/cancelcall`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|news|
### car
Spawn an emergency vehicle.
This command belongs to `px_police`.

Usage: `/car [model]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|model|model of vehicle|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
|ems|
|doctor|
### case
Open case evidence for the specified case.
This command belongs to `px_police`.

Usage: `/case [case id]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|case id|case identifier to access|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
### clearevidence
Clear your current area of evidence.
This command belongs to `px_police`.

Usage: `/clearevidence`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
### cuff
Cuff the nearest player.
This command belongs to `px_police`.

Usage: `/cuff`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
### dnasample
Sample the DNA of nearest person.
This command belongs to `px_police`.

Usage: `/dnasample`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
### fingerprint
Fingerprint the nearest person.
This command belongs to `px_police`.

Usage: `/fingerprint`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
### frisk
Frisk the nearest person.
This command belongs to `px_police`.

Usage: `/frisk`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
### gsr
Test the nearest person's hands for gunshot residue.
This command belongs to `px_police`.

Usage: `/gsr`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
### hc
Hardcuff the player specified, player must be cuffed first.
This command belongs to `px_police`.

Usage: `/hc [src]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|src|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
### impound
Impound the nearest vehicle.
This command belongs to `px_veh`.

Usage: `/impound`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|ems|
|fib|
### injuries
Inspect the nearest player's injuries.
This command belongs to `px_injury`.

Usage: `/injuries [src]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id (omit to treat nearest)|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|ems|
|police|
|doctor|
|fib|
### jail
Jail a player.
This command belongs to `px_jail`.

Usage: `/jail [src] [months]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
|2|months|time in minutes|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|judge|
|fib|
### livery
Set livery of your emergency vehicle.
This command belongs to `px_police`.

Usage: `/livery [livery]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|livery|index number of livery|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
|ems|
|doctor|
### mdt
Open the mobile data terminal.
This command belongs to `px_mdt`.

Usage: `/mdt`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|judge|
|da|
|fib|
### medbag
Equip a droppable medbag.
This command belongs to `px_fire`.

Usage: `/medbag`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|ems|
|police|
|fib|
### mic
Activate your news microphone.
This command belongs to `px_news`.

Usage: `/mic`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|news|
### openlocker
Open a person's locker (must be at locker location).
This command belongs to `px_police`.

Usage: `/openlocker [number]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|number|locker number/character id (e.g. 1)|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
|ems|
|doctor|
### paylawyer
Pay the nearest lawyer for their service.
This command belongs to `px_state`.

Usage: `/paylawyer [src]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|judge|
|fib|
### paytow
Pay the nearest tow driver for their service.
This command belongs to `px_tow`.

Usage: `/paytow [src]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
|ems|
### raidgarage
Raid the garage of the specified character (must be at a garage)
This command belongs to `px_garage`.

Usage: `/raidgarage [char id]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|char id|character id of player to raid|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
|judge|
### release
Release a player from jail.
This command belongs to `px_jail`.

Usage: `/release [src]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|judge|
|fib|
### repo
Cash in a repossessed vehicle.
This command belongs to `px_dealership`.

Usage: `/repo`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|pdm|
### sc
Softcuff the player specified, player must be cuffed first.
This command belongs to `px_police`.

Usage: `/sc [src]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|src|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
### scuba
Equip scuba diving gear.
This command belongs to `px_scuba`.

Usage: `/scuba`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|ems|
|fib|
### search
Search the nearest person.
This command belongs to `px_police`.

Usage: `/search`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
### seizecash
Seize cash of the specified player.
This command belongs to `px_police`.

Usage: `/seizecash [src] [amount]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
|2|amount|amount to seize|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
### spike
Set down or pickup spikes at your location
This command belongs to `px_police`.

Usage: `/spike [number]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|number|number of spikes (1-3) (omit to pickup)|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
### stateannounce
Send a state announcement.
This command belongs to `px_state`.

Usage: `/stateannounce [msg]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|msg|message to send|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|judge|
### tow
Load or unload the car in front of you onto a flatbed.
This command belongs to `px_tow`.

Usage: `/tow`
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|tow|
|lostmechanic|
|importmechanic|
|citymechanic|
|importmechanic|
|tunermechanic|
### treat
Treat the nearest player's injuries.
This command belongs to `px_injury`.

Usage: `/treat [bone]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|bone|bone to treat|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|ems|
|doctor|
### unseizeveh
Unseize the vehicle under the specified VIN number.
This command belongs to `px_garage`.

Usage: `/unseizeveh [vin number]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|vin number|vin number of vehicle to unseize|
#### Jobs Required
One of the following jobs is required to use this command.

|Job|
|-|
|police|
|fib|
|judge|
