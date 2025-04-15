import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const PasswordInput = ({ value, onChange, placeholder }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3'>
            <input
                value={value}
                onChange={onChange}
                type={isShowPassword ? 'text' : 'password'}
                placeholder={placeholder || 'password'}
                className='w-full text-sm bg-transparent py-3 mr-3 rounded outline-none'
            />
            <button
                type="button"
                onClick={toggleShowPassword}
                className='text-sm text-blue-500'>

            </button>

            {isShowPassword ? (
                <FaRegEye
                    Size={22}
                    className='text-primary crusor-pointer'
                    onClick={() => toggleShowPassword()} />
            ) : (
                <FaRegEyeSlash
                    Size={22}
                    className='text-slate-400 crusor-pointer'
                    onClick={() => toggleShowPassword()} />
            )}

        </div>
    );
};

export default PasswordInput;
