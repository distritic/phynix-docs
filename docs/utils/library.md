# Library

## How to Import

In order to use these utilities, you must import the `Utils` object which stores all helper functions. The directory from which the file is imported is different for client and server.

To import the library server-side, you must include the following line in your resource `fxmanifest.lua` file:
```lua title="fxmanifest.lua"
server_script "@px_utils/server/lib/common.lua"
```

To import the library client-side, you must include the following line in your resource `fxmanifest.lua` file:
```lua title="fxmanifest.lua"
client_script "@px_utils/client/lib/common.lua"
```

## Client-side

### IsPedDead

This function will return whether the ped is dead. It should be used over the native `IsPedDeadOrDying` function, as it checks for specific death state from `px_death`. An example can be seen below.
```lua title="client/main.lua"
local plyPed = PlayerPedId();
if Utils:IsPedDead(plyPed) then
  TriggerEvent("core:notify", "You are dead :(");
end
```

### DrawText3D

Draw text in three-dimenstional space. This function must be called in a loop.
```lua title="client/main.lua"
Utils:DrawText3D(x --[[int]], y --[[int]], z --[[int]], distance --[[int]], label --[[string]]);
-- x: the x-coordinate to draw at
-- y: the y-coordinate to draw at
-- z: the z-coordinate to draw at
-- distance: a distance check from your player ped to the coordinate
-- label: the text to display
```

Example usage:
```lua title="client/main.lua"
Citizen.CreateThread(function()
  local plyPed = PlayerPedId();
  while true do
    Citizen.Wait(0);

    local plyPos = GetEntityCoords(plyPed);
    Utils:DrawText3D(plyPos.x, plyPos.y, plyPos.z, 3.0, "Hello World!");
  end
end)
```

### DrawMissionText

Draw native mission text.
```lua title="client/main.lua"
Utils:DrawMissionText(label --[[string]], duration --[[int]]);
-- label: the text to display
-- duration: time in seconds to display
```

### DrawTimer

Draw a native countdown, must be called in a loop.
```lua title="client/main.lua"
Utils:DrawTimer(startTime --[[int]], duration --[[int]], x --[[int]], y --[[int]], label --[[string]]);
-- startTime: game timer at start of draw
-- duration: duration of draw in millisecond
-- x: on-screen x-coordinate of timer
-- y: on-screen y-coordinate of timer
-- label: timer label
```

Example usage:
```lua title="client/main.lua"
Citizen.CreateThread(function()
  local startTime = GetGameTimer();
  local duration = 5000; -- milliseconds
  while GetGameTimer() - startTime < duration do
    Citizen.Wait(0);
    Utils:DrawTimer(startTime, duration, 1.42, 1.475, "EXAMPLE");
  end
end);
```

### DrawCountdown

Draw a native timer, must be called in a loop.
```lua title="client/main.lua"
Utils:DrawCountdown(startTime --[[int]], duration --[[int]], x --[[int]], y --[[int]]);
-- startTime: game timer at start of draw
-- duration: duration of draw in millisecond
-- x: on-screen x-coordinate of timer
-- y: on-screen y-coordinate of timer
```

Example usage:
```lua title="client/main.lua"
Citizen.CreateThread(function()
  local startTime = GetGameTimer();
  local duration = 5000; -- milliseconds
  while GetGameTimer() - startTime < duration do
    Citizen.Wait(0);
    Utils:DrawCountdown(startTime, duration, 1.42, 1.475);
  end
end);
```

### ShowHelp

Show a native help notification.
```lua title="client/main.lua"
Utils:ShowHelp(label --[[string]], sound --[[bool]]);
-- label: label of help message
-- sound?: whether a sound should be played
```

### CreateTimer

Create a native countdown timer (looped).
```lua title="client/main.lua"
Utils:CreateTimer(duration --[[int]]);
-- duration: time of countdown in milliseconds
```

### CreateBar

Create a native timer bar (looped).
```lua title="client/main.lua"
Utils:CreateBar(duration --[[int]], label --[[string]], fRun --[[function]]);
-- duration: duration of timer bar in milliseconds
-- label: timer bar label
-- fRun?: a function which will be ran in-loop during draw
```

### CreateBar2

Create a native timer bar (looped). This timer will show slightly *above* the previous one. Why is it a new function? I don't know.
```lua title="client/main.lua"
Utils:CreateBar2(duration --[[int]], label --[[string]], fRun --[[function]]);
-- duration: duration of timer bar in milliseconds
-- label: timer bar label
-- fRun?: a function which will be ran in-loop during draw
```

### GetVehicleInFront

Get the vehicle in front of the player ped.
```lua title="client/main.lua"
local vehicle --[[int]] = Utils:GetVehicleInFront();
```

### GetVehicleInDirection

Get the vehicle in the specified direction by casting a ray.
```lua title="client/main.lua"
local vehicle --[[int]] = Utils:GetVehicleInDirection(coordFrom --[[vector3]], coordTo --[[vector3]]);
-- coordFrom: starting position
-- coordTo: ending position
```

### KeyboardInput

Create a HUD-based input prompt.
```lua title="client/main.lua"
local output --[[string]] = Utils:KeyboardInput(textEntry --[[string]], inputText --[[string]], maxLength --[[int]]);
-- textEntry: heading title for input
-- inputText: default input text, use "" for none
-- maxLength: max length of input in character count
```

### KeyboardInputNative

Create a native input prompt.
```lua title="client/main.lua"
local output --[[string]] = Utils:KeyboardInput(textEntry --[[string]], inputText --[[string]], maxLength --[[int]]);
-- textEntry: heading title for input
-- inputText: default input text, use "" for none
-- maxLength: max length of input in character count
```

### LoadModel

Load a model synchronously. This function will break if the model has not loaded after five seconds.
```lua title="client/main.lua"
Utils:LoadModel(model --[[int]]);
-- model: model hash key to load
```

### DoesResourceExist

Returns true if a given resource exists, false otherwise.
```lua title="client/main.lua"
local exists --[[bool]] = Utils:DoesResourceExist(resName --[[string]]);
-- resName: resource name to check for
-- exists: true if exists, false if not
```

### RequestEntityControl

Request entity control synchronously. This function will break if control is not gained after five seconds.
```lua title="client/main.lua"
Utils:RequestEntityControl(entity --[[int]]);
-- entity: entity to control
```

### LoadAnimDict

Load an animation dictionary synchronously. This function will break if the dictionary has not loaded after five seconds.
```lua title="client/main.lua"
Utils:LoadAnimDict(animDict --[[string]]);
-- animDict: animation dictionary name
```

### LoadPtfx

Load a partice FX dictionary synchronously. This function will break if the dictionary has not loaded after five seconds.
```lua title="client/main.lua"
Utils:LoadPtfx(ptfxDict --[[string]]);
-- ptfxDict: particle FX dictionary name
```

### LoadScaleform

Load a scaleform movie synchronously. This function will break if the scaleform movie has not loaded after five seconds.
```lua title="client/main.lua"
Utils:LoadScaleform(dict --[[stirng]]);
-- dict: scaleform name
```

### CommaValue

Separate a number using commas.
```lua title="client/main.lua"
local value --[[string]] = Utils:CommaValue(number --[[int]]);
-- number: number to format
```

For example:
```lua title="client/main.lua"
local value = Utils:CommaValue(1384732);
-- value = "1,384,732"
```

### RemoveWhitespace

Remove any whitespace from the front and end of a string.
```lua title="client/main.lua"
local formatted --[[string]] = Utils:RemoveWhitespace(str --[[string]]);
-- str: string to format
```

### WaitForNetId

Wait for a network ID to exist, has a default timeout of 1000 milliseconds.
```lua title="client/main.lua"
Utils:WaitForNetId(netId --[[int]], timeout --[[int]]);
-- netId: network Id to wait for
-- timeout: timeout in milliseconds
```

### CopyTable

Create a deep copy of a table.
```lua title="client/main.lua"
local newTable --[[table]] = Utils:CopyTable(sourceTable --[[table]]);
-- sourceTable: table to be copied
```

### DictionaryLength

Returns the length of a dictionary.
```lua title="client/main.lua"
local length --[[int]] = Utils:DictionaryLength(dict --[[table]]);
-- dict: dictionary to compare to
-- length: length of the dictionary
```

### GetVehicleSeatPedIsIn

Get the vehicle seat index that the ped is in.
```lua title="client/main.lua"
local seatIndex --[[int]] = Utils:GetVehicleSeatPedIsIn(vehicle --[[int]], ped --[[int]]);
-- vehicle: the target vehicle
-- ped: the target ped
```

### Round

Round a number to the specified amount of decimal places.
```lua title="client/main.lua"
local rounded --[[float]] = Utils:Round(number --[[float]], numDecimalPlaces --[[int]]);
-- number: the number to be rounded
-- numDecimalPlaces: the number of decimal places to round to
```

### LinearSearch

Perform a linear search for a given value, and return the index within the array if found.
```lua title="client/main.lua"
local index --[[int]] = Utils:LinearSearch(value --[[any]], array --[[table]]);
-- value: value to search for
-- array: array to search in
-- index: index found, false if not found
```

### EnumerateObjects

Enumerate all existing objects.
```lua title="client/main.lua"
for object in Utils:EnumerateObjects() do
  ...
end
```

### EnumeratePeds

Enumerate all existing peds.
```lua title="client/main.lua"
for ped in Utils:EnumeratePeds() do
  ...
end
```

### EnumerateVehicles

Enumerate all existing vehicles.
```lua title="client/main.lua"
for vehicle in Utils:EnumerateVehicles() do
  ...
end
```

### EnumeratePickups

Enumerate all existing pickups.
```lua title="client/main.lua"
for pickup in Utils:EnumeratePickups() do
  ...
end
```

## Server-side

### CommaValue

Separate a number using commas.
```lua title="server/main.lua"
local value --[[string]] = Utils:CommaValue(number --[[int]]);
-- number: number to format
```

For example:
```lua title="server/main.lua"
local value = Utils:CommaValue(1384732);
-- value = "1,384,732"
```

### RemoveWhitespace

Remove any whitespace from the front and end of a string.
```lua title="server/main.lua"
local formatted --[[string]] = Utils:RemoveWhitespace(str --[[string]]);
-- str: string to format
```

### CopyTable

Create a deep copy of a table.
```lua title="server/main.lua"
local newTable --[[table]] = Utils:CopyTable(sourceTable --[[table]]);
-- sourceTable: table to be copied
```

### DictionaryLength

Returns the length of a dictionary.
```lua title="server/main.lua"
local length --[[int]] = Utils:DictionaryLength(dict --[[table]]);
-- dict: dictionary to compare to
-- length: length of the dictionary
```

### StartsWith

Returns true if a given string starts with the value.
```lua title="server/main.lua"
local startsWith --[[bool]] = Utils:StartsWith(str --[[string]], value --[[string]]);
-- str: string to check
-- value: value to check for
-- startsWith: true if string starts with value
```

### Stringsplit

Split a string based on a separator.
```lua title="server/main.lua"
local sepStr --[[table]] = Utils:Stringsplit(str --[[string]], sep --[[string]]);
-- str: string to separate
-- sep: string separator
-- sepStr: table of separated values
```

### GetVehiclePlate

Get the plate of a vehicle with all whitespace removed.
```lua title="server/main.lua"
local plate --[[string]] = Utils:GetVehiclePlate(entity --[[int]]);
-- entity: vehicle to get the plate of
-- plate: plate returned from vehicle
```

### Round

Round a number to the specified amount of decimal places.
```lua title="server/main.lua"
local rounded --[[float]] = Utils:Round(number --[[float]], numDecimalPlaces --[[int]]);
-- number: the number to be rounded
-- numDecimalPlaces: the number of decimal places to round to
```

### LinearSearch

Perform a linear search for a given value, and return the index within the array if found.
```lua title="server/main.lua"
local index --[[int]] = Utils:LinearSearch(value --[[any]], array --[[table]]);
-- value: value to search for
-- array: array to search in
-- index: index found, false if not found
```

### DoesResourceExist

Returns true if a given resource exists, false otherwise.
```lua title="server/main.lua"
local exists --[[bool]] = Utils:DoesResourceExist(resName --[[string]]);
-- resName: resource name to check for
-- exists: true if exists, false if not
```