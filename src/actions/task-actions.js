import { useContext, useEffect } from "react";
import { Context } from "../stores/context/context";

export default function useTaskActions () {
    const {
        setShowForm,
        tasks,
        setTasks,
        setToast,
    } = useContext(Context);

    const handleFormSubmission = (title) => {
        /* Show popup message */
        setToast(prev => ({
            ...prev,
            visible: true,
            title: title,
            type: "primary"
        }));


        /* close form */
        setShowForm(prev => ({...prev, show: false, data: null}));
    }

    /* Finds the type ("completed" or "todo") based on the data's id */
    const findType = (data) => {
        const type = Object.keys(tasks).find((object) => {
            return tasks[object].data.some((item) => {
                return item.id === data.id;
            });
        });

        return type;
    }

    const handleCreate = (data) => {
        setTasks(prev => ({
            ...prev,
            todo: ({
            ...prev.todo, data: [...prev.todo.data, data]
            })
        }));
    }

    const handleUpdate = (data) => {
        const type = findType(data);

        /* Updates the current task with the same ID */
        const updatedTask = tasks[type].data.map(task => task.id === data.id ? data : task)

        setTasks(prev => ({
            ...prev,
            [type]: ({
                ...prev[type],
                data: updatedTask
            })
        }));

    }

    const handleSubmit = (data, type = "create") => {
        /* inserts new task in todo key nested object */
        if(type === "create")
            handleCreate(data);

        /* updates task */
        if(type === "update")
            handleUpdate(data);

        handleFormSubmission(`Successfully ${type}d ${type === "create" ? "a new" : "the"} task`)
    }

    const handleDelete = (data) => {
        const type = findType(data);

        /* Filters tasks with the same ID to remove it from the array */
        const removedTask = tasks[type].data.filter(item => item.id !== data.id);
        
        /* Removes the task from the current object type */
        setTasks(prev => ({
            ...prev,
            [type]: ({
                ...prev[type],
                data: removedTask
            })
        }));

        handleFormSubmission("Task removed")
    }

    /* Gets tasks from storage and save it on the context tasks data */
    const getTasksFromStorage = async() => {
        const tasksFromStorage = await asyncstorage.get('tasks');

        if(tasksFromStorage?.value){
            const taskData = JSON.parse(tasksFromStorage.value);
            setTasks(taskData);
        }
    }

    /* Saves on storage whenever there's an update on tasks */
    const saveTasksOnStorage = async() => {
        await asyncstorage.set('tasks', JSON.stringify(tasks));
    }

    useEffect(() => {
        getTasksFromStorage();
    }, []);

    useEffect(() => {
        saveTasksOnStorage();
    }, [tasks]);

    return {
        handleSubmit,
        handleDelete,
    }
}