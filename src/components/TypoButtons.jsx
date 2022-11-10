import Typography  from "@mui/material/Typography";

const TypoButtons = () => {
  return (
    <div>
      <Typography variant="h4" component="h6" align="center" mt={4} color="error">
        MUI Typography
      </Typography> 

      <Typography variant="body" align="justify" mt={4} sx={{background: "lightgreen", color: "#eee", fontSize: "1.2rem"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi repellendus cupiditate cumque praesentium voluptatem recusandae. Impedit sunt odit et?
      </Typography> 
    </div>
  ) 
};

export default TypoButtons;
