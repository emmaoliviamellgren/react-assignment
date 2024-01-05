import { useState } from "react";

const Header = () => {

    const [changeName, setChangeName] = useState('')

    return (
        <>
            <div className='bg-indigo-800 flex justify-between items-center px-12 py-6 text-xl text-white'>
                <h1>Emmas Media Database</h1>
                <button type='button' className='inline-block rounded-md  bg-gradient-to-r from-indigo-400 to-blue-500 shadow-md transition-all transform hover:translate-y-0.5 px-6 py-3 text-center font-medium text-white text-sm' onClick={() => {
                    setChangeName('Emma')
                }}>
                    Click Me
                </button>
            </div>
        </>
    );
};
export default Header;
