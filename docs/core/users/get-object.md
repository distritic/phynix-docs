---
sidebar_position: 1
---

# Accessing the Object

The user can be accessed server-side by the use of an export. Let's make a simple script which will check if a user belongs to a staff group.

```lua title="main/server.lua"
TriggerEvent("core:addCommand", "isstaff", function(src, args, char, user)
  local target = tonumber(args[1]);
  local targetUser = exports.phynix:GetUser(target);

  if targetUser.isStaff() then
    TriggerClientEvent("core:notify", src, "This player is a staff member");
  else
    TriggerClientEvent("core:notify", src, "This player does not belong to a staff group");
  end
end, {
  help = "Check if the player specified is a staff member.",
  params = {
    { name = "player id", help = "player id of target" }
  }
});
```