import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    IconButton,
    CardActions,
    Button,
    Unstable_Grid2 as Grid
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
const TaskFinish = (props) => {

    const { task, handleFinish, handleDelete } = props

    
    return (
        <div>
            {task.map((work) => (
                (!work.state && work.available) && (
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
                        <CardActions sx={{justifyContent:'space-around'}}>
                            <Button size="small" onClick={() => handleFinish(work.id)}>Re abrir</Button>
                            <Button size="small" onClick={() => handleDelete(work.id)}>Eliminar</Button>
                        </CardActions>
                    </Card>
                )
            ))}
        </div>
    );
};


export default TaskFinish