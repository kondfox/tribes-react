import { notBlank, minLength, email } from '../common/validators'
import { MIN_PASSWORD_LENGTH } from '../appSettings'

export const usernameValidators = [notBlank('Username')]
export const passwordValidators = [minLength('Password', MIN_PASSWORD_LENGTH)]
export const emailValidators = [notBlank('Email'), email]
export const kingdomNameValidators = []
