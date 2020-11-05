import { notBlank, minLength } from '../common/validators'
import { MIN_PASSWORD_LENGTH } from '../appSettings'

export const usernameValidators = [notBlank]
export const passwordValidators = [minLength(MIN_PASSWORD_LENGTH)]
export const kingdomNameValidators = []
