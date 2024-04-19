// export default function Todo({task}){
//     return <li>Task: {task}</li>
// }
export default function Todo({task, isDone}){
    if(isDone === true){
    return <li>finished weldone: {task}</li>
    }
    else{
        return <li>woked on: {task}</li>
    }
}