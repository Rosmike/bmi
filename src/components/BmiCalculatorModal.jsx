import React, {Fragment, useEffect, useRef, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";

function BmiCalculatorModal({isVisible, handleModal, user}) {
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [sex, setSex] = useState('male');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const calculateButtonRef = useRef(null)

    useEffect(() => {
        if (user) {
            setAge(user.dob.age);
            setHeight(user.height);
            setWeight(user.weight);
            setSex(user.gender)
        } else {
            setBmi(null)
        }
    }, [user])

    const calculateBMI = () => {
        if (!age || !height || !weight) {
            alert('Please fill in all fields.');
            return;
        }

        const heightInMeters = height / 100;
        const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(bmiValue);
    };

    return (
        <Transition.Root show={isVisible} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={calculateButtonRef} onClose={() => handleModal()}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3"
                                                          className="text-base font-semibold leading-6 text-gray-900">
                                                Kalkulator BMI
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <div className="container mx-auto p-4">
                                                    <div className="grid grid-cols-1 gap-4">
                                                        <div>
                                                            <label
                                                                className="block text-gray-700 text-sm font-bold mb-2">Płeć:</label>
                                                            <div className="flex items-center ">
                                                                <label className="flex mr-5 items-center">
                                                                    <input
                                                                        className='mr-2'
                                                                        type="radio"
                                                                        value="male"
                                                                        checked={sex === 'male'}
                                                                        onChange={() => setSex('male')}
                                                                    />
                                                                    Mężczyzna
                                                                </label>
                                                                <label className="flex items-center">
                                                                    <input
                                                                        className='mr-2'
                                                                        type="radio"
                                                                        value="female"
                                                                        checked={sex === 'female'}
                                                                        onChange={() => setSex('female')}
                                                                    />
                                                                    Kobieta
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label
                                                                className="block text-gray-700 text-sm font-bold mb-2">Wiek:</label>
                                                            <input
                                                                type="number"
                                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                                                placeholder="Wiek"
                                                                value={age}
                                                                onChange={(e) => setAge(e.target.value)}
                                                            />
                                                        </div>
                                                        <div>
                                                            <label
                                                                className="block text-gray-700 text-sm font-bold mb-2">Wzrost
                                                                (cm):</label>
                                                            <input
                                                                type="number"
                                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                                                placeholder="Wzrost"
                                                                value={height}
                                                                onChange={(e) => setHeight(e.target.value)}
                                                            />
                                                        </div>
                                                        <div>
                                                            <label
                                                                className="block text-gray-700 text-sm font-bold mb-2">Waga
                                                                (kg):</label>
                                                            <input
                                                                type="number"
                                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                                                placeholder="Waga"
                                                                value={weight}
                                                                onChange={(e) => setWeight(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    {bmi && (
                                                        <div className="mt-4">
                                                            <p className="font-bold">Twoje BMI: {bmi}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 flex flex-col-reverse sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="mb-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 sm:ml-3 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => handleModal()}
                                    >
                                        Anuluj
                                    </button>

                                    <button
                                        type="button"
                                        className="mb-3 inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:w-auto"
                                        onClick={calculateBMI}
                                        ref={calculateButtonRef}
                                    >
                                        Oblicz BMI
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default BmiCalculatorModal