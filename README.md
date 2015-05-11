# NativeLang
NativeScript for Internationalization

##Install
Well.. Frist create the files
```
├── app <----------------- run npm install from here
│   ├── App_Resources
│   │   └── ...
│   ├── tns_modules
│   │   └── ...
│   ├── app.css
│   ├── app.js
│   ├── main-page.js
│   ├── main-page.xml
│   ├── main-view-model.js
│   ├── node_modules
│   │   └── nativelang <-- The install will place the module's code here
│   │       └── ...
│   └── package.json <---- The install will register “nativelang" as a dependency here
└── platforms
    ├── android
    │   └── res
    │       ├── values <---------- English
    │       |   └── strings.xml
    │       ├── values-es <------- Spanish
    │       |   └── strings.xml
    │       └── values-fr <------- Fransih
    │           └── strings.xml
    └── ios
```

In the files

```xml
<!-- platforms/android/res/values/strings.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<resources>
    <string name="app_name" formatted="false">Example 1</string>
    <string name="other" formatted="false">Other</string>
    ... More strings
</resources>
<!-- platforms/android/res/values-es/strings.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<resources>
    <string name="app_name" formatted="false">Ejemplo 1</string>
    <string name="other" formatted="false">Otro</string>
    ... Y mas cadenas
</resources>
```

## Use

In your `app/app.js`
```js
GLOBAL.L = require( "./node_modules/nativelang/lib" )();
```

In the `xml`
```xml
<Label  text={{ L('other')}} />
```

> Note1 : Change the lang in the emulator and is experimental
