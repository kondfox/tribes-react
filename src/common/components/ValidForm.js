import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import './ValidForm.scss'

const ValidForm = ({ submitLabel, onSubmit, formError, children }) => {
  const validationInit = children.reduce(
    (v, c) => ({ ...v, [c.type.name]: false }),
    {}
  )

  const [inputValues, setInputValues] = useState({})
  const [validations, setValidations] = useState(validationInit)
  const [isAllValid, setAllValid] = useState(false)

  useEffect(() => {
    setAllValid(Object.values(validations).every(v => v))
  }, [validations])

  const setInput = inputName => value =>
    setInputValues({ ...inputValues, [inputName]: value })

  const markValid = inputName => isValid =>
    setValidations({ ...validations, [inputName]: isValid })

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(inputValues)
  }

  const fieldName = inputName =>
    inputName
      .toLowerCase()
      .replace(/input/i, '')
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())

  return (
    <form>
      <div className="fields">
        {children.map(c =>
          React.cloneElement(c, {
            setInput: setInput(fieldName(c.type.name)),
            markValid: markValid(c.type.name),
            key: c.type.name,
          })
        )}
      </div>
      <div className="form-control">
        <span className={`form-error${formError ? '' : ' hidden'}`}>
          {formError}
        </span>
        <Button
          label={submitLabel}
          isActive={isAllValid}
          onClick={handleSubmit}
        />
      </div>
    </form>
  )
}

const mapStateToProps = state => ({ formError: state.error.message })

export default connect(mapStateToProps, null)(ValidForm)
