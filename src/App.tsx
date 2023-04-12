// @ts-nocheck
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useGetNewsQuery } from "./API/apiSlice";
import { selectNews } from "./redux/newsSlice/selectors";
import { useAppDispatch } from "./redux/store";
import setNews from "./redux/newsSlice";

const theme = createTheme();

export default function App() {
  const { data } = useGetNewsQuery();
  const dispatch = useAppDispatch();
  const news = useSelector(selectNews);

  React.useEffect(() => {
    console.log("data", data);
    //@ts-ignore
    data && dispatch(setNews(data));
  }, [data]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap></Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom>
              Hacker News
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {news.slice(0, 100).map((card, index) => {
              console.log("index", index);
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: "56.25%",
                      }}
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">View</Button>
                      <Button size="small">Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer MUI
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
