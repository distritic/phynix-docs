# Forms

## Example Usage

Below is an example of how to create a form and display it to the user.

```lua title="client/main.lua"
exports.px_hud:NewFormAsync({
  title = "New Ballot",
  elements = {
    {
      elementType = "INPUT",
      title = "Title",
      icon = "fas fa-heading",
      name = "title",
      type = "text",
      maxLength = "32",
      required = true
    },
    {
      elementType = "LONGTEXT",
      title = "JSON Data",
      icon = "fas fa-brackets-curly",
      name = "json",
      type = "text",
      required = true
    },
    {
      elementType = "CHECKBOX",
      label = "Allow Multiple Votes",
      name = "voteMultipleTimes",
      defaultValue = false
    },
    {
      elementType = "INPUT",
      title = "Webhook URL",
      icon = "fas fa-poll",
      name = "webhook",
      type = "text",
      maxLength = "255",
    },
  },
  canExit = true,
  validate = function(fields)
    local json = json.decode(fields.json);
    return {
      success = json ~= nil,
      message = "Invalid JSON provided, ensure no errors exist."
    };
  end,
  onFinish = function(success, fields)
    if not success then return; end
    TriggerServerEvent("ballot:startVote", fields.title, fields.webhook, fields.voteMultipleTimes, json.decode(fields.json));
  end
});
```

## Elements

The layout of a form `elements`, with all possible elements can be found below. Most elements follow conventional HTML attribute names and values.

### Text Element
```lua
-- Text element
{
  ["elementType"] = "PARAGRAPH",
  ["content"] = "This is an example paragraph. It is red.",
  ["style"] = {
    ["fontColor"] = "red"
  }
},
```

### Text Input Element
```lua
-- Text-box input element (number)
{
  ["elementType"] = "INPUT",
  ["title"] = "Input Number",
  ["icon"] = "fas fa-percent",
  ["name"] = "number",
  ["type"] = "number",
  ["min"] = "1",
  ["max"] = "100",
  ["desc"] = "This is a number input",
  ["defaultValue"] = "50",
  ["required"] = true
}

-- Text-box input element
{
  ["elementType"] = "INPUT",
  ["title"] = "Input Text",
  ["icon"] = "fas fa-text",
  ["name"] = "text",
  ["type"] = "text",
  ["maxLength"] = "50",
  ["defaultValue"] = "default",
  ["desc"] = "This is a text input",
  ["required"] = true
}
```

### Checkbox Element
```lua
-- Checkbox input element
{
  ["elementType"] = "CHECKBOX",
  ["label"] = "Check Me",
  ["name"] = "checkbox",
  ["defaultValue"] = true,
  ["desc"] = "This is a checkbox"
}
```

### Dropdown Element
```lua
-- Drop-down selection input element
{
  ["elementType"] = "SELECT",
  ["title"] = "Select an Option",
  ["name"] = "select",
  ["options"] = {
    {
      ["value"] = "option1",
      ["label"] = "Option 1"
    },
    {
      ["value"] = "option2",
      ["label"] = "Option 2"
    },
    {
      ["value"] = "option3",
      ["label"] = "Option 3"
    }
  },
  ["defaultValue"] = {
    ["value"] = "option1",
    ["label"] = "Option 1"
  },
  ["desc"] = "This is a select box"
}
```

### Long Text Input Element
```lua
-- Long-text input element
{
  ["elementType"] = "LONGTEXT",
  ["title"] = "Long Text",
  ["icon"] = "fas fa-brackets-curly",
  ["name"] = "longtext",
  ["type"] = "text",
  ["maxLength"] = "500",
  ["desc"] = "This is a long text",
  ["defaultValue"] = "Default long text",
  ["required"] = true
}
```

### Radio Button Element
```lua
-- Radio button input element
{
  ["elementType"] = "RADIO",
  ["title"] = "Select an Option",
  ["name"] = "option",
  ["desc"] = "This is a radio select",
  ["options"] = {
    {
      ["value"] = "radio1",
      ["label"] = "Radio 1"
    },
    {
      ["value"] = "radio2",
      ["label"] = "Radio 2"
    },
    {
      ["value"] = "radio3",
      ["label"] = "Radio 3"
    }
  }
}
```

### Inline Elements
You can place two elements inline, meaning they will show up next to each other horizontally.
```lua
-- Inline input elements
{
  {
    ["elementType"] = "INPUT",
    ["title"] = "Input Number Inline",
    ["icon"] = "fas fa-percent",
    ["name"] = "number2",
    ["type"] = "number",
    ["min"] = "1",
    ["max"] = "100",
    ["desc"] = "This is a number input",
    ["defaultValue"] = "50",
    ["required"] = true
  },
  {
    ["elementType"] = "INPUT",
    ["title"] = "Input Text Inline",
    ["icon"] = "fas fa-text",
    ["name"] = "text2",
    ["type"] = "text",
    ["maxLength"] = "50",
    ["defaultValue"] = "default",
    ["desc"] = "This is a text input",
    ["required"] = true
  }
}
```