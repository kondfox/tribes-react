import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { VALIDATE_ON } from '../validators'
import Button from './Button'
import './ValidForm.scss'

const ValidForm = ({
  submitLabel,
  onSubmit,
  validateOn,
  formError,
  children,
}) => {
  const validationInit = children.reduce(
    (v, c) => ({ ...v, [c.props.name]: false }),
    {}
  )

  const [inputValues, setInputValues] = useState({})
  const [validations, setValidations] = useState(validationInit)
  const [isAllValid, setAllValid] = useState(false)
  const [shouldShowErrors, setShouldShowErrors] = useState({ state: false })

  useEffect(() => {
    setAllValid(Object.values(validations).every(v => v))
  }, [validations])

  const setInput = inputName => value =>
    setInputValues({ ...inputValues, [inputName]: value })

  const markValid = inputName => isValid =>
    setValidations({ ...validations, [inputName]: isValid })

  const handleSubmit = e => {
    e.preventDefault()
    console.log('isAllValid:', isAllValid)
    if (isAllValid) {
      onSubmit(inputValues)
    } else {
      setShouldShowErrors({ state: true })
    }
  }

  return (
    <form>
      <div className="fields">
        {children.map(c =>
          React.cloneElement(c, {
            setInput: setInput(c.props.name),
            markValid: markValid(c.props.name),
            key: c.props.name,
            validateOn,
            shouldShowErrors,
          })
        )}
      </div>
      <div className="form-control">
        <span className={`form-error${formError ? '' : ' hidden'}`}>
          {formError}
        </span>
        <Button
          label={submitLabel}
          isActive={validateOn === VALIDATE_ON.SUBMIT || isAllValid}
          onClick={handleSubmit}
        />
      </div>
    </form>
  )
}

const mapStateToProps = state => ({ formError: state.error.message })

export default connect(mapStateToProps, null)(ValidForm)
