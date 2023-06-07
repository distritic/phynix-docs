# Exports

## Server-side

### GetBusiness

This export will return the business associated with the business name.
```lua title="server/main.lua"
local business --[[table]] = exports.px_business:GetBusiness(businessName --[[string]]);
```

### GetBusinessByJob

This export will return the business associated with the business job name.
```lua title="server/main.lua"
local business --[[table]] = exports.px_business:GetBusinessByJob(businessJob --[[string]]);
```