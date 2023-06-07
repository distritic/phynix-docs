---
sidebar_position: 2
---

# Methods

## Generic Methods

### get

This function is used to return a field from the account object. The collection of fields which exist for an account are delared in the [Attributes](attributes) guide.
```lua title="server/main.lua"
local value --[[any]] = account.get(key --[[string]]);
-- key: the field to return
```

### set

This function is used to set a field in the account object. The collection of fields which exist for an account are delared in the [Attributes](attributes) guide.
```lua title="server/main.lua"
account.set(key --[[string]], value --[[any]]);
-- key: the field to be updated
-- value: the new value assigned to the field
```

:::danger
We do not recommend using this method to update dynamic table fields such as `logs`, as in doing so you could corrupt or invalidate data.
:::

### canPay

This function will return whether the account can afford to pay the given amount. It will also return `false` if the given account is frozen.

```lua title="server/main.lua"
local canPay --[[bool]] = account.canPay(amount --[[int]]);
```

### canAccess

This function will return whether a character has access to a bank account.

```lua title="server/main.lua"
local canAccess --[[bool]] = account.canAccess(char --[[int/table]], useId --[[bool]]);
-- char: character ID (if useId) or character object
-- useId: whether the character ID is being used
```

### addCharacter

This function will add a new character to a bank account. It is not possible to add another character to a `personal` account.

```lua title="server/main.lua"
local success --[[bool]] = account.addCharacter(charId --[[int]], charName --[[string]], canWithdraw --[[bool]], canDeposit --[[bool]]);
```

### setCharacterPerm

This function will set character permissions over the account. The `permission` field may be `"widthdraw"` or `"deposit"`.

```lua title="server/main.lua"
local success --[[bool]] = account.addCharacter(charId --[[int]], permission --[[string]], value --[[bool]]);
```

### removeCharacter

This function will remove a character from a bank account. It is not possible to remove a character from a `personal` account.

```lua title="server/main.lua"
local success --[[bool]] = account.removeCharacter(charId --[[int]]);
```

### getDataForUI

This function will return account data used primarily for the banking UI.

```lua title="server/main.lua"
local data --[[table]] = account.getDataForUI();
```

### getSelf

This function will return the internal private account object. It is not recommended to **ever** use this.

```lua title="server/main.lua"
local self --[[table]] = account.getSelf();
```

## Transaction Methods

### Deposit

This function will deposit money to the bank account from the character's `money` balance.

```lua title="server/main.lua"
local status --[[int]], reason --[[string]] = account.Deposit(char --[[table]], amount --[[int]], notes --[[string]], cb --[[function]]);
```

### Withdraw

This function will withdraw money from the bank account to the character's `money` balance.

```lua title="server/main.lua"
local status --[[int]], reason --[[string]] = account.Withdraw(char --[[table]], amount --[[int]], notes --[[string]], cb --[[function]]);
```

### Salary

This function will create a new salary record for the account, and increase the balance by `amount` specified.

```lua title="server/main.lua"
local status --[[int]], reason --[[string]] = account.Salary(char --[[table]], amount --[[int]], notes --[[string]], cb --[[function]]);
```

### Bill

This function will create a new bill record for the account, and decrease the balance by `amount` specified.

```lua title="server/main.lua"
local status --[[int]], reason --[[string]] = account.Bill(char --[[table]], amount --[[int]], notes --[[string]], cb --[[function]]);
```

### LoanPayment

This function will create a new loan payment record for the account, and decrease the balance by `amount` specified.

```lua title="server/main.lua"
local status --[[int]], reason --[[string]] = account.LoanPayment(char --[[table]], amount --[[int]], notes --[[string]], cb --[[function]]);
```

### Transfer

This function will tranfer money from the account to a target account, decreasing and increasing each balance respectively.

```lua title="server/main.lua"
local status --[[int]], reason --[[string]] = account.Transfer(char --[[table]], amount --[[int]], notes --[[string]], accountId --[[int]], cb --[[function]]);
```

### Payment

This function will pay money from the account to a target account, decreasing and increasing each balance respectively.

```lua title="server/main.lua"
local status --[[int]], reason --[[string]] = account.Payment(char --[[table]], amount --[[int]], notes --[[string]], accountId --[[int]], notTaxed --[[bool]], cb --[[function]]);
```

### PaymentVoid

This function will pay money from the account to a void account, decreasing the balance by `amount` specified.

```lua title="server/main.lua"
local status --[[int]], reason --[[string]] = account.PaymentVoid(char --[[table]], amount --[[int]], notes --[[string]], cb --[[function]]);
```

### Transaction

This function will register a generic transaction between the account and a target account, decreasing and icnreasing each balance respectively.

:::warning
You should avoid using this method and instead use one of the transaction methods above. It is provided as a generic, and ideally shouldn't exist outside the private scope of the account.
:::

```lua title="server/main.lua"
local status --[[int]], reason --[[string]] = account.Transaction(char --[[table]], amount --[[int]], notes --[[string]], inflow --[[bool]], code --[[string]], accountId --[[int]], cb --[[function]]);
```