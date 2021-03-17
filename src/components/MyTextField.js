import { Field } from 'formik'
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

function MyTextField(textFieldProps) {
  return <Field {...textFieldProps} component={FormikTextField} />
}

function FormikTextField({ field, form, onBlur, onChange, ...textFieldProps }) {
  function onChangeWrapper(e) {
    field.onChange(e)
    if (onChange) {
      onChange(e)
    }
  }

  function onBlurWrapper(e) {
    field.onBlur(e)
    if (onBlur) {
      onBlur(e)
    }
  }

  return (
    <TextField
      style={{ width: '100%' }}
      label={field.name}
      variant='outlined'
      id={field.name}
      name={field.name}
      value={field.value}
      onChange={onChangeWrapper}
      onBlur={onBlurWrapper}
      {...textFieldProps}
    />
  )
}

export default MyTextField

MyTextField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool
}
