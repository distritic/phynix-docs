# Exports

## Server-side

### GetAccount

This function is used to fetch an **already initialized** account by account ID.
```lua title="server/main.lua"
local account --[[table]] = exports.px_banking:GetAccount(accountId --[[int]]);
-- accountId: the account ID to get the account of
```

### GetAccountByName

This function is used to fetch an **already initialized** account by account name.
```lua title="server/main.lua"
local account --[[table]] = exports.px_banking:GetAccountByName(accountName --[[string]]);
-- accountName: the account name to get the account of
```

### FetchAndInitialize

This function is used to fetch an account by account ID. The account will be initialized if it isn't already in memory.
```lua title="server/main.lua"
local account --[[table]] = exports.px_banking:FetchAndInitialize(accountId --[[int]]);
-- accountId: the account ID to get the account of
```

### CreateNewAccount

This function is used to create a new bank account. The account will be initialized if it isn't already in memory.
```lua title="server/main.lua"
exports.px_banking:CreateNewAccount(name --[[string]], label --[[string]], type --[[string]], balance --[[int]], overdraftLimit --[[int]], noteRequired --[[bool]], characters --[[table]], logLimit --[[int]], characterData --[[table]], cb --[[function]]);
-- cb(account): callback will return the account object if successful
```

### DestroyCharacterAccount

This function is used to remove an existing character account from memory. It will be saved to the database.
```lua title="server/main.lua"
exports.px_banking:DestroyCharacterAccount(charId --[[int]]);
```

### DestroyAccount

This function is used to remove an existing account from memory. It will be saved to the database.
```lua title="server/main.lua"
exports.px_banking:DestroyAccount(accountId --[[int]], cb --[[function]]);
```

### IsAnyAccountCharactersOnline

This function will return whether any characters which have access to the account are currently online.
```lua title="server/main.lua"
exports.px_banking:IsAnyAccountCharactersOnline(account --[[table]], cb --[[function]]);
-- cb(result): result is true if account characters are online
```