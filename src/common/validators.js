export const VALIDATE_ON = {
  CHANGE: 'change',
  SUBMIT: 'submit',
}

export const notBlank = field => ({
  validate: s => !!s && !/^\s*$/.test(s),
  error: `${field} cannot be empty.`,
})

export const minLength = (field, n) => ({
  validate: s => !!s && s.length >= n,
  error: `${field} must be at least ${n} characters.`,
})

export const email = {
  validate: s =>
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      s
    ),
  error: `Invalid email address.`,
}
