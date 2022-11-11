import AppbarComp from "../components/AppbarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import { createTheme,  ThemeProvider } from "@mui/material";

const Home = () => {
  const theme = createTheme({
    palette:{
      primary:{
        main:"#456"
      }
    }
  })
  return (
    
    <ThemeProvider theme={theme}>
       <AppbarComp/>
      <TypoButtons />
      <TextFieldComp/>
      <CardGrid/>
        
    </ThemeProvider>
    
  );
};

export default Home;
