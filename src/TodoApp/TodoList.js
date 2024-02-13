import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { RiCheckboxFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
const TodoList = () => {
    const [todoList,setodoList] = useState([]);
    const handleSubmit = (event) => {
        const  toDoVal = event.target.toDo.value
        if(!todoList.includes(toDoVal)){
            let finalOutput = [...todoList,toDoVal];
            setodoList(finalOutput);
            toast.success("ToDo added Successfully",{
                theme: "colored"
            })
        }else{
            toast.error("ToDo already Exists",{
                theme: "colored"
            })
        }
        event.preventDefault();
    }
    let list = todoList.map((item,index)=>{
        return(
            <TodoListItem item={item} key={index} todoList={todoList} setodoList={setodoList} index={index} />
        )
    })
  return (
    <div className='max-w-[100vw] h-[100vh] '>
        <ToastContainer />
        <h1 className='font-bold text-[green]  md:text-4xl text-2xl text-center mb-[2vw] mt-[16vw] md:mt-[5vw]'>ToDo App</h1>
        <form onSubmit={handleSubmit} className='w-[75vw] flex mx-auto justify-center gap-[3%]'>
            <input type='text' name='toDo' className='border-[0.16vw] md:px-4 px-2 text-lg md:text-2xl  focus:outline-[green] rounded-md font-basis bg-green-400 border-[green] basis-[79%] '></input>
            <button className='basis-[19%] md:p-4 px-2 font-semibold bg-green-400 border-[0.15vw] text-lg md:text-2xl border-[green] rounded-lg text-white cursor-pointer'>Submit</button>
        </form>
        <div className='md:w-[75vw] w-[82vw] mx-auto md:font-bold font-medium text-white md:text-2xl text-lg mt-8 md:mt-11'>
            {list}
        </div>
    </div>
  )
}


const TodoListItem = ({item,todoList,setodoList,index}) => {
    const deleteTodo = () => {
        const filteredData = todoList.filter((val,ind)=>ind!==index)
        setodoList(filteredData);
    }
  return (
    <div>
        <div className='md:py-[0.8%] md:px-[1.8%] rounded-sm bg-[green] px-[2.2%] py-[2.7%] items-center justify-between flex mb-4'>
            {/* {inp ? <input type="text" className='text-[green] md:font-medium font-normal rounded-md w-[67%] focus:outline-none outline-[green] px-4' /> : <p>{item}</p>} */}
            {/* <input type="text" className='text-[green] md:font-medium font-normal rounded-md w-[67%] focus:outline-none outline-[green] px-4' /> */}
            <p>{item}</p>
            <div className='flex md:gap-4 gap-2'>
                <MdEdit/>
                <RiCheckboxFill />
                <IoIosCloseCircle onClick={deleteTodo}/>
            </div>
        </div>
    </div>
  )
}


export default TodoList
