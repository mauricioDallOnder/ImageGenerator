import React, { ChangeEventHandler } from 'react'

interface FormFieldProps {
  labelName: string
  type: string
  name: string
  placeholder?: string
  value: string
  handleChange: ChangeEventHandler<HTMLInputElement>
  isSurpriseMe?: boolean
  handleSurpriseMe?: () => void
}

const FormField: React.FC<FormFieldProps> = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div className="flex flex-col items-start gap-2 mb-2  p-4 rounded-lg">
    <label htmlFor={name} className="block text-sm font-medium text-gray-900">
      {labelName}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#2b2f53] outline-none block w-full p-3 shadow-sm transition duration-300 ease-in-out"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
    <div className="flex items-center gap-2 mb-2">
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-purple-400 hover:bg-purple-500 text-white py-1 px-2 rounded-lg mt-3 transition duration-300 ease-in-out shadow-sm"
        >
          Surpreenda-me
        </button>
      )}
    </div>
  </div>
)
export default FormField
