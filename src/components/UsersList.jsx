import { useContext, useEffect, useState } from "react";

import { fetchUsers } from "../api/endpoints";
import { ModalContext } from "../features/bmiCalculator/modalContext";
import {createRandomUserData} from "../helpers/helpers";

function UsersList() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { handleModal } = useContext(ModalContext)

    function handleClick (user) {
        handleModal(user)
    }

    useEffect(() => {
        fetchUsers().then(
            res => {
                const usersWithGeneratedData = res.results.map(user => {
                    return {
                        ...user,
                        height: createRandomUserData().height,
                        weight: createRandomUserData().weight
                    }
                })
                setUserData(usersWithGeneratedData)
                setLoading(false)
            }
        ).catch((err) => console.error(err))
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <ul className="divide-y divide-gray-100 mx-5">
                {userData.map((user) => {
                    return (
                        <li key={user.email} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                     src={user.picture.thumbnail}
                                     alt=""/>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{user.name.title} {user.name.first} {user.name.last}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">Age: {user.dob.age}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">Height: {user.height} cm</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">Weight: {user.weight} kg</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <button onClick={() => handleClick(user)}>Calculate BMI</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default UsersList;
