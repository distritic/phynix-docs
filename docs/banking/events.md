# Events

## Server-side

### banking:initCharacterAccount

Initialize (and create if doesn't exist) a character's bank account object.

```lua
TriggerEvent("banking:initCharacterAccount", charId --[[int]], function(account --[[table]])
  print("Initialised account: "..account.get("name"));
end);
-- charId: character ID of account owner
-- account: returned account object through callback
```

### banking:initBusinessAccount

Initialize (and create if doesn't exist) a business' bank account object. 
* The `characters` and `characterData` field follow the format of [characters](account/attributes/#characters-table) and [characterData](account/attributes.md/#characterdata-table).

```lua
TriggerEvent("banking:initBusinessAccount", accountName --[[string]], accountLabel --[[string]], characters --[[table]], characterData --[[table]], function(account --[[table]])
  print("Initialised account: "..account.get("name"));
end);
-- accountName: name of account to initialise
-- accountLabel: label of account if creating
-- characters: default characters if creating
-- characterData: default characterData if creating
-- account: returned account object through callback
```