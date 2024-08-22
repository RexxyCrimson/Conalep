
const FormFloating = ({ children } ) =>{
    return (
        <div className="mb-5 relative z-0">
            {children}
        </div>
    )
}


const Input = ({...props}) => {
    return (
        <input {...props} 
        className=" block px-2.5 pb-2.5 pt-4 w-full text-sm 
        text-white bg-transparent
        rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    )
}

const Label = ({children , ...props}) => {
    return (
        <label 
        {...props}
        className="absolute text-sm 
        text-gray-500 dark:text-black
        duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] 
        bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 
        peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
        peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 
        peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 
        rtl:peer-focus:left-auto start-1">
        {children}
        </label>
    )
}


FormFloating.Input = Input;
FormFloating.Label = Label;

export default FormFloating