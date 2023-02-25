import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../Loading';

const AllUsers = () => {

    const { data: users = [] , isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });


    const  handleMakeAdmin = (id)=>{
        fetch(`http://localhost:5000/users/admin/${id}` , {
            method:'PUT'
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            refetch();
            toast('successfully admin made')
        })
    }

    const handelDelete = (id)=>{
        fetch(`http://localhost:5000/users/delete/${id}`)
        .then(res => res.json())
        .then(data =>{
            refetch();
            console.log(data)
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr key={i}>
                                    <th className='text-black'>{i+1}</th>
                                    <td className='text-black'>{user.name}</td>
                                    <td className='text-black'>{user.email}</td>
                                    <td>{ !user.role && <button onClick={()=> handleMakeAdmin(user._id)} className="btn btn-xs bg-gradient-to-r from-primary to-accent ">Make Admin </button>}</td>
                                    <td><button onClick={()=> handelDelete(user._id)} className="btn btn-xs  bg-gradient-to-r from-primary to-accent ">Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;