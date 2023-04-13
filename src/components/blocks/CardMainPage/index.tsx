import React from "react";
import { Link } from "react-router-dom";
import { useGetLonelyNewsQuery } from "../../../API/apiSlice";
import { unixTimeConverter } from "../../../utils/unixTimeConverter";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardMainPage = ({ id }: { id: string }) => {
  const { data } = useGetLonelyNewsQuery(id && id);
  //@ts-ignore
  const date = unixTimeConverter(data?.time);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link to={`/news/${data?.id}`}>
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
            {data?.title && (
              <Typography gutterBottom variant="h5" component="h2">
                {data?.title}
              </Typography>
            )}
            {data?.score && (
              <Typography>
                <b>Rating:</b> {data?.score}
              </Typography>
            )}
            {data?.by && (
              <Typography>
                <b>Author:</b> {data?.by}
              </Typography>
            )}
            {data?.time && (
              <Typography>
                <b>Time of publication:</b> {date}
              </Typography>
            )}
            {Array.isArray(data?.kids) && (
              <Typography>
                <b>Count of comments:</b> {data?.kids?.length}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default CardMainPage;
