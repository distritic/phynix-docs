---
sidebar_position: 1
---

# Accessing the Object

The character object can only be accessed server-side. Phynix has a large emphesis on security and integrity - as such we ensure that the client is never relied on to store sensitive data such as money or items. Don't forget to make sure that `px_chars` is running before relying on any of its exports, or you'll get some nasty errors.

So, buckle up. Make a new resource, and create a server-side Lua script. Here's an example - let's display the full name of your character on command, in case they forgot.

```lua title="server/main.lua"
TriggerEvent("core:addCommand", "showname", function(src, args, char, user)
  local char = exports.px_chars:GetCharacter(src);
  local fullName = char.getFullName();
  TriggerClientEvent("core:notify", src, "Your name is "..fullName);
end, {
  help = "Show my character name."
});
```

Notice anything weird with the logic? We're fetching the character object although it seems like it's passed into the command function? Well, that's because it is - we're just showing an example of how to access it. Now, open up your chat and type `/showname`. With everything running properly, you should get a message back! 

:::info 
For more information on how to use the various functions included with the character object, **[click here](methods)**.
:::
