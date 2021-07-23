import React from 'react'
import PropTypes from 'prop-types'

const InputField = (props) => {
    const { placeholder, onChange } = props;
    return (
        <input placeholder={placeholder}
            onChange={onChange} />
    )
}

InputField.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}

export default InputField
