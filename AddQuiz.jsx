import { Button, Card, IconButton, Select, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';



function AddQuiz() {
  

  return (
    <>
    
    
     <Card className=" bg-slate-200 w-[600px] h-[700px] flex flex-col m-5 gap-3">
      <div className="flex justify-between font-bold m-5">Add a Quiz<IconButton><CloseIcon sx={{color:"inherit", "&:hover":{color:"black"}}}/></IconButton></div>
      <div className="mx-5">Your Question</div>
      <div className="flex justify-center items-center"><TextField className="w-[40vw]" size="small" label="Write your question here..."/></div>
      <div className="flex justify-end mx-5 text-gray-400">0/500</div>
      <div className="mx-5">Options</div>
      <div className="flex justify-center items-center"><TextField className="w-[40vw]" size="small" label="Option 1"/></div>
      <div className="flex justify-center items-center"><TextField className="w-[40vw]" size="small" label="Option 2"/></div>
      <div className="mx-6"><Button color="secondary" variant="outlined" startIcon={<AddIcon/>}>Add more</Button></div>
      <div className="text-gray-400 mx-5">Atleast two options are required to creat this QNA</div>
      <div className="mx-5">Answer</div>
      <div className="flex justify-center items-center"><Select size="small" className="w-[40vw]"/></div>
      <div className="mx-5">Expiry</div>
      <div className="flex justify-center items-center"><Select size="small" className="w-[40vw]"/></div>
      <div className="text-gray-400 mx-5">This will expiry on 12 july at 11:30am</div>
      <div className="flex justify-end mx-5 gap-4"><Button className="w-[120px]" color="error" variant="outlined">Cancel</Button><Button className="w-[120px]" color="secondary" variant="contained">Add</Button></div>




     </Card> 
    
    
    

    </>
  )
}
export default AddQuiz
