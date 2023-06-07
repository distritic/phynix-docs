---
sidebar_position: 1
---

# Accessing the Object

The account object can only be accessed server-side. Phynix has a large emphesis on security and integrity - as such we ensure that the client is never relied on to store sensitive data such as money or items. Don't forget to make sure that `px_banking` is running before relying on any of its exports, or you'll get some nasty errors.

Here's an example - let's display the balance of your character's account.

```lua title="server/main.lua"
TriggerEvent("core:addCommand", "mybalance", function(src, args, char, user)
  local account = char.getBankAccount();
  TriggerClientEvent("core:notify", src, "Your balance is "..account.get("balance"));
end, {
  help = "Show my character balance."
});
```

Yes, you can access the account object of a character using the [getBankAccount](/docs/characters/class/methods#getbankaccount) method. 

Let's do it differently. A command to show the balance of any bank account that is **already initialized**:

```lua title="server/main.lua"
TriggerEvent("core:addCommand", "balance", function(src, args, char, user)
  local accountName = args[1];
  local account = exports.px_banking:GetAccountByName(accountName);
  if account then
    TriggerClientEvent("core:notify", src, "The balance of "..accountName.." is "..account.get("balance"));
  else
    TriggerClientEvent("core:notify", src, "This account has not been initialized.");
  end
end, {
  help = "Show the balance of a bank account.",
  params = {
    { name = "account name", help = "name of bank account" }
  }
});
```

:::info 
For more information on how to use the various functions included with the account object, **[click here](methods)**.
:::
