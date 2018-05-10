
<div align="center">
  <img width="700" heigth="400" src="/assets/wipfred-logo.png" alt="wipfred">
</div>

---

> Manage your [wip.chat](https://wip.chat/) todos with [Alfred](https://www.alfredapp.com/)

## 🔧 Installation

`WIPfred` requires [Alfred](https://www.alfredapp.com/) + [Powerpack](https://www.alfredapp.com/powerpack/)

To install it simply run

```bash
npm install -g wipfred
```

<div align="center">
  <img width="700" heigth="400" src="/assets/wipfred-base.png" alt="wipfred">
</div>

## 👈 Configuration

In order to work properly you need to set your wip.chat private API key.

1. Visit [wip.chat/api](https://wip.chat/api)
2. Copy your private key
3. Toggle Alfred
4. Type in `wip` and press <kbd>Enter</kbd>
5. Select `API Key`
6. Type in your key and press <kbd>Enter</kbd>


## 📒 Commands

<div align="center">
  <img width="700" heigth="400" src="/assets/wipfred-inside.png" alt="wipfred">
</div>

You can either type in `wip` and press <kbd>Enter</kbd> to see a list of available commands and select from one of them. Or you can use the command directly. However if you enter for exampel `wip done` you will be inside the `done` workflow. You have to press <kbd>ESC</kbd> to get out of it.

Right now directly creating or modifing todos with only one command is not possible. For example:

```
wip todo need to add this feature soon #wipfred
```

### wip key
Sets your private wip.chat API key.

### wip find
Type in `wip find` and press <kbd>Enter</kbd>. Then you can type in your todo and wipfred will filter all your pending wip.chat todos. After you select one and press <kbd>Enter</kbd> again, it will be marked as done.

### wip todo
Type in `wip todo` and press <kbd>Enter</kbd>. Then you can type in your todo and if you want your product and confirm with <kbd>Enter</kbd>.

**Example:**
```
fix a critical bug #productname
```

### wip done
Type in `wip done` and press <kbd>Enter</kbd>. Then you can type in your todo and if you want your product and confirm with <kbd>Enter</kbd>. It will create a new todo and mark it as done.

**Example:**
```
fix a critical bug #productname
```

## ⌨ Keyboard Sortcuts
You can access the workflows directly over keyboard shortcuts.
Because it is nearly impossible to set sane default what work for everyone, the default Shortcuts are empty.

You have to set them by your own. Press  <kbd>⌘</kbd>  <kbd>,</kbd> to open Alfred Preferences and select the `WIPfred` workflow.

Then you can set the shortcuts for the `find`, `done` and `todo` command.
