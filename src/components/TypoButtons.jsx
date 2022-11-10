import Typography  from "@mui/material/Typography";
import Container  from "@mui/material/Container";
import  Button  from "@mui/material/Button";
import Box  from "@mui/system/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <>
    <Container maxWidth= "md">
      <Typography variant="h4" component="h6" align="center" mt={4} color="error">
        MUI Typography
      </Typography> 

      <Typography variant="body" align="justify" mt={4} sx={{background: "lightgreen", color: "#eee", fontSize: "1.rem"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi repellendus cupiditate cumque praesentium voluptatem recusandae. Impedit sunt odit et?
      </Typography> 

      <Typography variant= "button" sx={{display:"inline-block", marginTop:"2rem"}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum expedita aliquam consequuntur deserunt culpa maxime reprehenderit dolores! Ipsa labore molestiae, quos, quo nobis animi accusamus quibusdam placeat nemo, rem laboriosam.
      </Typography>
    </Container>

    <Container>
      <Box sx={{display:"flex", flexDirection:"column", gap:"0.5rem", alignItems: "center", textalign: "center"}}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined" startIcon={<DeleteIcon/>}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
            Send
        </Button>
      </Box>
      
    </Container>
    </>
    
  ) 
};

export default TypoButtons;
