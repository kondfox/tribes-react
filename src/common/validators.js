export const notBlank = {
  validate: s => !!s && !/^\s*$/.test(s),
  error: 'cannot be empty.',
}

export const minLength = n => ({
  validate: s => !!s && s.length >= n,
  error: `must be at least ${n} characters.`,
})
