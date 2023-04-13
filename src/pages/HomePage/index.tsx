// @ts-nocheck
import * as React from "react";
import { useSelector } from "react-redux";
import { useGetNewsQuery } from "../../API/apiSlice";
import { selectNews } from "../../redux/newsSlice/selectors";
import { useAppDispatch } from "../../redux/store";
import { setNews } from "../../redux/newsSlice";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CardMainPage from "../../components/blocks/CardMainPage";

export default function HomePage() {
  const { data, refetch } = useGetNewsQuery();
  const dispatch = useAppDispatch();
  const news = useSelector(selectNews);

  React.useEffect(() => {
    data && dispatch(setNews(data));
  }, [data, dispatch]);

  const reloadNews = () => {
    refetch();
  };

  return (
    <>
      <div style={{ marginBottom: "15px" }}>
        <Button variant="contained" onClick={reloadNews}>
          update news
        </Button>
      </div>
      <Grid container spacing={4}>
        {news.map((card) => {
          return <CardMainPage id={card.serialNumber} />;
        })}
      </Grid>
    </>
  );
}
