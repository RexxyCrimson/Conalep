

const InputAutocomplit = ({ children }) => {
    return (
        <div className='mb-5 relative z-0'>
            {children}
        </div>
    )
}

const Input = ({ ...props }) => {
    return (
        <input {...props}
            type='text'
            className="form-control peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-65 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:focus:ring-neutral-600" placeholder=" " />
    )
}

const Label = ({ children, ...props }) => {
    return (
        <label
            {...props}
            className="form-label absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
            {children}
        </label>
    )
}

const Select = ({ id = '', children }) => {
    return (
        <datalist id={id} >
         {children}
        </datalist>
    )
}

InputAutocomplit.Input = Input;
InputAutocomplit.Label = Label;
InputAutocomplit.Select = Select;


export default InputAutocomplit