import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    IconButton,
    Unstable_Grid2 as Grid
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
const TaskFinish = (props) => {

    const { task } = props

    
    return (
        <div>
            {task.map((work) => (
                !work.state && (
                    <Card key={work.id} sx={{ width: 275, mt: 3, height: 235, backgroundColor: '#EBEBE4'}}>
                        <CardHeader
                            title={work.title}
                            action={
                                <IconButton aria-label="delete">
                                    <CheckIcon />
                                </IconButton>
                            }
                        />
                        <CardContent>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {work.description}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            ))}
        </div>
    );
};


export default TaskFinish