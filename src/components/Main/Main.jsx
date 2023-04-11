import React, { useState, useRef } from 'react';
import "./index.scss";
import imgs from "../../assets/images/men.svg";
import imgss from "../../assets/images/pen.svg";
import imgsss from "../../assets/images/msuir.svg";
import { toast } from 'react-toastify';

const Main = () => {
    const [task, setTask] = useState([]);
    const [name, setUser] = useState('');
    const [namber, setPhone] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            name: name,
            namber: namber,
            kun: new Date().getDate(),
            oy: new Date().getMonth() + 1,
            yil: new Date().getFullYear(),
        };

        
        if (newTask.name.length === 0 || newTask.namber.length === 0) {
            toast.error('Please fill in the title and description fields', {
                position: "top-center",
                autoClose: 1000,
               
                theme: "dark",
            })
        } else {
            setTask([...task, newTask]);
            toast.success('Task added successfully')
        }
        setUser("");
        setPhone("");
    }


    const deletedTask = id => {
        let arrdel = task.filter(item => item.id !== id)
        console.log(arrdel);
        setTask(arrdel)
        toast.info ('Task removed successfully')
    }


    return (

        <main>
            <div className="container">
                <div className="shadow p-5 mt-5 w-75 mx-auto">
                    <form className='form' onSubmit={(e) => addTask(e)}>
                        <label htmlFor="task_username" className='w-50 d-block mx-auto mb-3'>
                            <p className=' text-secondary mb-0' >Enter your username</p>
                            <input type="text" id='task_username' className='form-control p-1 w-100' value={name} onChange={(e) => setUser(e.target.value)} />
                        </label>

                        <label htmlFor="task_phone" className='w-50 d-block mx-auto mb-4'>
                            <p className=' text-secondary'>Enter your phone</p>
                            <input type="number" id='task_userphone' className='form-control p-1 w-100' placeholder='+998' value={namber} onChange={(e) => setPhone(e.target.value)} />
                        </label>
                        <button type='submit' className='btn btn-primary text-uppercase d-block mx-auto'>Add your task</button>
                    </form>
                </div>
                <div className="shadow p-5 mt-5 w-75 mx-auto cards mb-5">

                    <table className='table'>
                        <thead>
                            <tr><th></th><th className='fw-bold text-uppercase'>NAME</th><th className='fw-bold text-uppercase'>phone</th> <th className='fw-bold text-uppercase'>added time</th></tr>
                        </thead>
                        <tbody className='bodys'>
                            {
                                task?.map((item, index) => {
                                    return (
                                        <tr className='tr_wrap'><td><img src={imgs} alt="" width={30} height={30} /></td><td>{item.name}</td><td>{item.namber}</td><td>{item.kun}.{item.oy}.{item.yil}</td>
                                            <div className='btn-wrap'>
                                                <button className='btn-edit d-block'><img src={imgss} /></button>
                                                <button className='btn-delete d-block' onClick={() => deletedTask(item.id)}><img src={imgsss} /></button>
                                            </div>

                                        </tr>

                                    )
                                })
                            }


                        </tbody>



                    </table>



                </div>
            </div>
        </main>
    );
};

export default Main;



