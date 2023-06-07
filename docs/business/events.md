# Events

## Server-side

### business:init

This event is used to initialize (and create if doesn't exist) a new business.

```lua title="server/main.lua"
TriggerEvent("business:init", businessName --[[string]], businessLabel --[[string]], jobName --[[string]], numPerms --[[int]], customFields --[[table]], customPerms --[[table]], cb --[[function]]);
-- cb(business): callback returning the business object
```

An example of usage can be found below.

```lua title="server/main.lua"
local business;
TriggerEvent("business:init", "dden", "Digital Den", "dden", 10, {
  -- custom data fields
  ["soldItems"] = 0
}, {
  -- custom permissions
  ["solder"] = 5
}, function(Object)
  business = Object;
end);
```