import { Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css';
import axios from '../api/api';
import NoteCard from './NoteCard';

function Notes() {
    const [notes, setNotes] = useState()
    const getNotes = async () => {
        const response = await axios.get('/notes') 
        return response.data
    }
    const handleDelete = async(id) => {
        await axios.delete(`/notes/${id}`);
        const response = notes.filter((note) => note.id !== id)
        setNotes(response)
    }

    useEffect(() => {
      const notesList = async() => {
          const todoList = await getNotes()
          console.log(todoList)
          if(todoList) {
              setNotes(todoList)
              
          }
      }
      notesList();
        
     }, [])
     const breakpointObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
     }
    return (
        <Container>
       {/*   <Grid container spacing={3} > 
                {
                    notes && notes.map(note => (
                        <Grid item key={note.id} xs={12} md={6} lg={4} >
                           <NoteCard note={note} handleDelete={handleDelete}></NoteCard>
                            </Grid>
                       
                    ))
                }

            </Grid> */}
            <Masonry breakpointCols={breakpointObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">

{
                    notes && notes.map(note => (
                        <div>
                           <NoteCard note={note} handleDelete={handleDelete}></NoteCard>
                           </div>
                       
                    ))
                }
</Masonry>
        </Container>
        
           
                
        
            
        
    )
}

export default Notes
