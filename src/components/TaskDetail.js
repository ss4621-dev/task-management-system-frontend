import React from "react";
import './TaskDetail.css';

const TaskDetail = ({ task }) => {
    return (
        <div>
            <h2>Task Detail</h2>
            <p>Title: {task.title}</p>
        </div>
    );
};


export default TaskDetail;
