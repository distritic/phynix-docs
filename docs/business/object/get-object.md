---
sidebar_position: 1
---

# Accessing the Object

The business object can only be accessed server-side. Phynix has a large emphesis on security and integrity - as such we ensure that the client is never relied on to store sensitive data such as money or items. Don't forget to make sure that `px_business` is running before relying on any of its exports, or you'll get some nasty errors.

Here's an example - let's display the job of a business by name.

```lua title="server/main.lua"
TriggerEvent("core:addCommand", "businessjob", function(src, args, char, user)
  local businessName = args[1];
  local business = exports.px_business:GetBusiness(businessName);
  TriggerClientEvent("core:notify", src, "Business job is "..business.get("job"));
end, {
  help = "Show a business job by name."
});
```

:::info 
For more information on how to use the various functions included with the account object, **[click here](methods)**.
:::
