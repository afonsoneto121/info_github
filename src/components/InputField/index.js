import React from 'react'
import PropTypes from 'prop-types'

const InputField = (props) => {
    const { placeholder, onChange, onKeyPress } = props;
    return (
        <input placeholder={placeholder}
            onChange={onChange}
            onKeyPress={onKeyPress} />
    )
}

InputField.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func
}

export default InputField
