import TaskForm from "../taskForm/TaskForm";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Unstable_Grid2 as Grid
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NewTask = (props) => {

    const { onTaskAdded } = props

    const saveTaskDataHandler = (enteredTaskData) => {
        const taskData = {
            id: Math.random().toString(),
            state: true,
            available: true,
            ...enteredTaskData,
        };
        onTaskAdded(taskData)
    }

    return (
        <div>
              <Accordion sx={{ mt: 3 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Agregar tarea
                </AccordionSummary>
                <AccordionDetails>
                    <TaskForm onTaskDataSaved={saveTaskDataHandler} />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default NewTask;

