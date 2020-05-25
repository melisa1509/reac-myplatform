import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import CustomInputForm from 'components/CustomInput/CustomInputForm.jsx';
import customInput from 'components/CustomInput/CustomInput.jsx';

const renderField = ({ input, label, type }) => (
  <div>
      <input {...input} type={type} placeholder={label} />
  </div>
)



const renderMembers = ({ fields }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Member
      </button>
    </li>
    {fields.map((member, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
        />
        <Field
          name={`${member}`}
          component={CustomInputForm}
          type="text"
          label="First Name"
        />
        
      </li>
    ))}
  </ul>
)

const discounts = ({ fields, start, end }) => (
  <div >
    {fields.map((code, index) => (
    
      <span >
        { index >= start && index <= end? 
        
        <Field
          name={code}
          type="text"
          component={CustomInputForm}
          autoFocus
        />:
        ""
        }   
      </span>
    ))}
    <button type="button" onClick={() => fields.push()}>
      Add {!fields.length ? "Discount Code(s)" : "Another Discount Code"}
    </button>
  </div>
);


const FieldArraysForm = props => {
  const { handleSubmit } = props
  return (
      <table>
        <FieldArray name="paperwork4[p4_array]" start={0} end={4} component={discounts} /> 
      </table>
           
  )
}

export default reduxForm({
  form: 'programmbs'
})(FieldArraysForm);

