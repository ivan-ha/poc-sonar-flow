# ivan-ha/poc-sonar-flow

POC project to test sonar support on flow.

Repo was bootstrapped using create-react-app.

## Installation

### 1 Install dependencies

```sh
yarn
```

### 2 Prepare sonar config file

```sh
cp sonar-project.example.properties sonar-project.properties
```

Put the login token in `sonar.login`

### 3 Run sonar-scanner

```sh
# only if not installed
brew install sonar-scanner

sonar-scanner
```

Visit https://sonarcloud.io/dashboard?id=ivan-ha_poc-sonar-flow
