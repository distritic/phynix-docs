---
sidebar_position: 4
---
# Whitelist Commands
### badge
Show your official police officer identification.
This command belongs to `px_police`.

Usage: `/badge`
#### Whitelist Required
Character must have the one of the minimum whitelist levels specified or higher.

|Type|Min. Level|
|-|-|
|police|1|
|fib|1|
### banking
Open the banking management interface.
This command belongs to `px_banking`.

Usage: `/banking`
#### Whitelist Required
Character must have the one of the minimum whitelist levels specified or higher.

|Type|Min. Level|
|-|-|
|bank|1|
### billhouse
Bill a player for a house purchase.
This command belongs to `px_housing`.

Usage: `/billhouse [src] [houseid] [amount] [interest]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
|2|houseid|house id|
|3|amount|amount of money|
|4|interest|percentage interest (e.g. 15)|
#### Whitelist Required
Character must have the one of the minimum whitelist levels specified or higher.

|Type|Min. Level|
|-|-|
|bank|1|
### fakead
Send a fake advertisement.
This command belongs to `px_fib`.

Usage: `/fakead [first name] [last name] [number] [message]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|first name|first name on ad|
|2|last name|last name on ad|
|3|number|number on ad|
|4|message|message on ad|
#### Whitelist Required
Character must have the one of the minimum whitelist levels specified or higher.

|Type|Min. Level|
|-|-|
|police|30|
|fib|5|
### fakecall
Call from a spoofed number.
This command belongs to `px_fib`.

Usage: `/fakecall [from] [to]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|from|number to display on call|
|2|to|number to call|
#### Whitelist Required
Character must have the one of the minimum whitelist levels specified or higher.

|Type|Min. Level|
|-|-|
|police|30|
|fib|5|
### fakeid
Create a fake ID.
This command belongs to `px_fib`.

Usage: `/fakeid [first name] [last name] [date of birth] [sex (m or f)] [charid]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|first name|first name to show on ID|
|2|last name|last name to show on ID|
|3|date of birth|date of birth on ID (yyyy-mm-dd)|
|4|sex (m or f)|sex on ID (must be m or f)|
|5|charid|character id on ID|
#### Whitelist Required
Character must have the one of the minimum whitelist levels specified or higher.

|Type|Min. Level|
|-|-|
|police|30|
|fib|5|
### faketweet
Send a fake tweet.
This command belongs to `px_fib`.

Usage: `/faketweet [handle] [msg]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|handle|tweet handle|
|2|msg|message to send|
#### Whitelist Required
Character must have the one of the minimum whitelist levels specified or higher.

|Type|Min. Level|
|-|-|
|police|30|
|fib|5|
### financehouse
Finance a property over 20 weeks.
This command belongs to `px_housing`.

Usage: `/financehouse [src] [houseid] [deposit] [amount] [interest]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|src|player id|
|2|houseid|house id|
|3|deposit|deposit amount|
|4|amount|amount of money|
|5|interest|percentage interest (e.g. 15)|
#### Whitelist Required
Character must have the one of the minimum whitelist levels specified or higher.

|Type|Min. Level|
|-|-|
|bank|1|
### housedebt
View a list of people who are in debt for house payments.
This command belongs to `px_housing`.

Usage: `/housedebt`
#### Whitelist Required
Character must have the one of the minimum whitelist levels specified or higher.

|Type|Min. Level|
|-|-|
|bank|1|
### md
Position a motion detector.
This command belongs to `px_fib`.

Usage: `/md`
#### Whitelist Required
Character must have the one of the minimum whitelist levels specified or higher.

|Type|Min. Level|
|-|-|
|police|30|
|fib|5|
### properties
Toggle a view of available properties (realtor only).
This command belongs to `px_housing`.

Usage: `/properties`
#### Whitelist Required
Character must have the one of the minimum whitelist levels specified or higher.

|Type|Min. Level|
|-|-|
|realtor|1|
### realtor
Open the realtor menu for the nearest house location.
This command belongs to `px_housing`.

Usage: `/realtor [id]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|id|id of the house|
#### Whitelist Required
Character must have the one of the minimum whitelist levels specified or higher.

|Type|Min. Level|
|-|-|
|realtor|1|
### scanradio
Scan for radio frequencies when in surveillance van.
This command belongs to `px_fib`.

Usage: `/scanradio`
#### Whitelist Required
Character must have the one of the minimum whitelist levels specified or higher.

|Type|Min. Level|
|-|-|
|police|30|
|fib|5|
### triangulate
Triangulate a phone number.
This command belongs to `px_fib`.

Usage: `/triangulate [number]`
#### Parameters
|Position|Parameter|Help|
|-|-|-|
|1|number|number to triangulate|
#### Whitelist Required
Character must have the one of the minimum whitelist levels specified or higher.

|Type|Min. Level|
|-|-|
|police|30|
|fib|5|
### uc
Open undercover lights menu.
This command belongs to `px_fib`.

Usage: `/uc`
#### Whitelist Required
Character must have the one of the minimum whitelist levels specified or higher.

|Type|Min. Level|
|-|-|
|police|30|
|fib|5|
