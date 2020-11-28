# Setup

You will be using SonarLint in the exercise.

## Needed tools
1. Git
2. VS Code


### 1. Install Git

If you don't have git:
  1. How?!
  2. Get it from [here](https://git-scm.com/downloads)

### 2. Install VS Code 

If you don't have VS Code, please install it from [here](https://code.visualstudio.com/download).

### 3. Install SonarLint


If you don't have VS Code, please install it from [here](https://www.sonarlint.org/vscode) or search `SonarLint` in the extensions in VS Code and select the first result.

### 4. Configure SonarLint

1. In VS Code go to user settings

    Ctrl (or Cmd) + Shift + P -> type 'user settings'

2. in settings search for sonarLint

3. click on "edit on settings.json"

3. replace the rules section with:

```
"sonarlint.rules": {
        "javascript:S1440": {
            "level": "on"
        },
        "javascript:S3827": {
            "level": "on"
        },
        "javascript:S109": {
            "level": "off"
        },
        "javascript:S126": {
            "level": "on"
        },
        "javascript:S117": {
            "level": "on"
        },
        "javascript:S3758": {
            "level": "on"
        },
        "javascript:S3504": {
            "level": "on"
        },
        "javascript:S1145": {
            "level": "on"
        },
        "javascript:S1066": {
            "level": "on"
        },
        "javascript:S2583": {
            "level": "on"
        },
        "javascript:S134": {
            "level": "on"
        },
        "javascript:S1541": {
            "level": "on"
        },
        "javascript:S1186": {
            "level": "on"
        },
        "javascript:S4144": {
            "level": "on"
        },
        "javascript:S3353": {
            "level": "on"
        },
        "javascript:S1172": {
            "level": "on"
        },
        "javascript:S909": {
            "level": "on"
        },
        "javascript:S131": {
            "level": "on"
        },
        "javascript:S3801": {
            "level": "on"
        },
        "javascript:S1067": {
            "level": "on"
        },
        "javascript:S3626": {
            "level": "on"
        },
        "javascript:S1774": {
            "level": "on"
        },
        "javascript:S2392": {
            "level": "on"
        }
    }
```

## Getting the exercise

## Clone it:

```
git clone https://github.com/vieirajlt/Tic-Tac-Toe.git
```

## Install npm dependencies 

```
npm install --yes
```
