# Events

## Client-side

### items:getItems

This event will return a list of available items, and their respective attributes.
```lua title="client/main.lua"
TriggerEvent("items:getItems", function(items)
  for item, data in pairs(item) do
    print("Item name: "..item);
    print("Item label: "..data.label);
  end
end);
```

### items:sendItems

This is a low-level event used to set the current list of available items.

```lua title="client/main.lua"
TriggerEvent("items:sendItems", items --[[table]]);
```

:::caution
This event should not be used, the server is best left to handle item state.
:::