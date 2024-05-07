import {
    Button,
    Card,
    CardHeader,
    CardActions,
    CardContent,
    Typography,
    Unstable_Grid2 as Grid
} from '@mui/material';
const CardTask = (props) => {

    const { task, handleFinish } = props

    return (
        <div>
            {task.map((work) => (
                work.state && (
                    <Card key={work.id} sx={{ width: 275, mt: 3 }}>
                        <CardHeader
                            title={work.title}
                        />
                        <CardContent>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {work.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => handleFinish(work.id)}>Finalizar tarea</Button>
                        </CardActions>
                    </Card>
                )
            ))}
        </div>
    );
};


export default CardTask