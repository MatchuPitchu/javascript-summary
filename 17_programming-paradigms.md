# Programming Paradigms

## Procedural

- write sequential series of execution steps and tasks
- top to bottom code execution

## Object-oriented

- organize data and logic in objects (properties, methods)
- organize code in logical entities

## Functional

- organize code in (pure) functions with cleary defined tasks
- pass data around via parameters

```TypeScript
// [1] Procedural
const form = document.querySelector<HTMLFormElement>('form');

const handleSignup = (event) => {
  event.preventDefault();

  const username = document.getElementById('username');
  const password = document.getElementById('password');

  const enteredUsername = username.value.trim();
  const enteredPassword = password.value.trim();

  if(!enteredUsername) {
    alert('Username must not be empty');
    return
  }

  if(enteredPassword.length < 6) {
    alert('Password must contain at least 6 characters');
    return
  }

  const user = {
    username: enteredUsername,
    password: enteredPassword
  };

  console.log(user);
  console.log(`Hello, ${user.username}`)
};

form.addEventListener('submit', handleSignup)

// [2] Object-oriented
type Flag = 'REQUIRED' | 'MIN_LENGTH'

class Validator {
  static REQUIRED = 'REQUIRED';
  static MIN_LENGTH = 'MIN_LENGTH';

  static validate(value: string, flag: Flag, validatorValue: number): boolean {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  greet() {
    console.log(`Hello, ${this.username}`)
  }
}

class UserForm {
  constructor() {
    this.form = document.querySelector<HTMLFormElement>('form');
    this.username = document.getElementById('username');
    this.password = document.getElementById('password');
    this.form.addEventListener('submit', this.handleSignup.bind(this))
  }

  handleSignup(event) {
    event.preventDefault();
    const enteredUsername = this.username.value;
    const enteredPassword = this.password.value;

    if (!Validator.validate(enteredUsername, Validator.REQUIRED) || !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)) {
      alert('Invalid username or password ...');
      return;
    }

    const newUser = new User(enteredUsername, enteredPassword);
    console.log(newUser);
    newUser.greet();
  }
}

new UserForm();

// [3] Functional
// distinct logical blocks of in the best case re-usable, pure functions
type Flag = 'REQUIRED' | 'MIN_LENGTH'

const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

const validate = (value: string, flag: Flag, validatorValue: number): boolean  => {
  if (flag === this.REQUIRED) return value.trim().length > 0;
  if (flag === this.MIN_LENGTH) return value.trim().length > validatorValue;
};

const getInput = (id: string) => document.getElementById(id).value.trim();

const createUser = (username, password) => {
  if (!validate(username, REQUIRED) || !validate(password, MIN_LENGTH, 5)) {
    throw new Error('Invalid username or password ...');
  }

  return {
    username,
    password,
  }
}

const greetUser = (user) => console.log(`Hello, ${user.username}`);

const handleSignup = (event) => {
  event.preventDefault();

  const enteredUsername = getInput('username');
  const enteredPassword = getInput('password');

  try {
    const newUser = createUser(enteredUsername, enteredPassword);
    console.log(newUser);
    greetUser(newUser);
  } catch (error) {
    alert(error.message)
  }
};

const connectForm = (formId, formSubmitHandler) => {
  const form = document.getElementById(formId);
  form.addEventListener('submit', handleSignup);
}

connectForm('user-form', handleSignup);
```
