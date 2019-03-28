// SurveyField contains logic to render and single label and text input {...input} == onBlue={input.onBlur} onChange={input.onChange}
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }} />
            <div className="red-text" style={{ marginBottom: '20px' }}>
            {touched && error}
            </div>
        </div>
    );
}