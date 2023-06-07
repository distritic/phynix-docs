---
sidebar_position: 3
---

# Attributes

The account object is supplied with a set of useful attributes.

## Static

### id: `int`

This is the unique identifier of the account.

### name: `string`

This is the unique name of the account.

### label: `string`

This is the label of the account.

### type: `string`

This is the account type. The available types are as follows:

* `personal` for character accounts
  
  Only the account owner (character it is assigned to) can access this account. No additional characters can be added.

* `business` for business accounts
  
  The access permissions and ownership of these accounts should be handled by a [business object](business/object/get-object).

* `joint` for joint accounts

* `state` for state entity accounts

### balance: `int`

This is the balance of the account.

### overdraftLimit: `int`

This is the minimum allowed balance (i.e. overdraft) of the account.

### frozen: `bool`

This boolean will indicate whether the account is frozen. Frozen accounts will not accept any transactions, deposits or withdrawals.

### noteRequired: `bool`

This boolean will indicate whether the account requires a note with each transaction.

### logLimit: `int`

This is the maximum number of log entries for an account, before previous entries are erased.

## Dynamic

### characters: `table`

The array of character identifiers allowed to access this account.
```lua
{
  14, 29, 847, 32, 938, ...
}
```

### logs: `table`

This is a table of recent transactions stored on the account. These will be incrementally erased after the `logLimit` is reached, starting with oldest first.
```lua
{
  {
    ["a"] = 1000, -- amount
    ["b"] = 4000, -- new balance
    ["c"] = "WIT", -- transaction type
    ["d"] = 1684315028, -- transaction date as epoch
    ["i"] = false, -- inflow
    ["n"] = "", -- notes
    ["id"] = 14, -- character ID
    ["char"] = "R. Gonzales" -- character name
  },
  ...
}
```

### characterData: `table`

The dictionary of characters and their associated permissions for the account.
```lua
{
  ["14"] = {
    ["name"] = "R. Gonzales",
    ["perms"] = {
      ["deposit"] = true,
      ["withdraw"] = true
    }
  },
  ...
}
```