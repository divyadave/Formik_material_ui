import { Card, CardContent, CardHeader, IconButton, Typography, makeStyles, Avatar } from '@material-ui/core'
import { green, lightBlue, orange, pink} from '@material-ui/core/colors'
import { DeleteOutlined } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles({
   circle: {
       background: (note) => {
           if(note.category === 'reminders') {
               return lightBlue[300]
           }
           if(note.category === 'todos') {
               return orange[400]
           }
           if(note.category === 'money') {
               return green[400]
           }
           if(note.category === 'shopping') {
            return pink[400]
        }

       }
   }
})


function NoteCard({note, handleDelete}) {
    const classes = useStyles(note)
    return (
       
        <div>
           <Card className={classes.test} style={{ textAlign: 'left' }} elevation={1}>
               <CardHeader avatar={
                   <Avatar className={ classes.circle }>{ note.category[0].toUpperCase() }</Avatar>
               } action={
                   <IconButton onClick={() => handleDelete(note.id)}>
                       <DeleteOutlined></DeleteOutlined>
                   </IconButton>
               }
               title={note.title}
               subheader={note.category}
               >

               </CardHeader>
               <CardContent>
                   <Typography variant='body2' color="textSecondary">
                       {note.details}
                   </Typography>
               </CardContent>
           </Card>
        </div>
    )
}

export default NoteCard
