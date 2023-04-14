import * as React from "react";
import { useSelector } from "react-redux";
import { useGetNewsQuery } from "../../API/apiSlice";
import { selectNews } from "../../redux/newsSlice/selectors";
import { useAppDispatch } from "../../redux/hooks";
import { setNews } from "../../redux/newsSlice";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CardMainPage from "../../components/blocks/CardMainPage";

export default function HomePage() {
  const { data, refetch } = useGetNewsQuery("", {
    pollingInterval: 60000, // which equal to 60 sec
  });
  const dispatch = useAppDispatch();
  const [isShowNews, setShowNews] = React.useState(true);
  const news = useSelector(selectNews);

  React.useEffect(() => {
    data && dispatch(setNews(data));
  }, [data, dispatch]);

  React.useEffect(() => {
    refetch();
    setShowNews(true);
  }, [isShowNews, refetch]);

  const reloadNews = () => {
    setShowNews(false);
  };

  return (
    <>
      <div style={{ marginBottom: "15px" }}>
        <Button variant="contained" onClick={reloadNews}>
          update news
        </Button>
      </div>
      <Grid container spacing={4}>
        {isShowNews &&
          news.map((card) => {
            return <CardMainPage key={card.id} serialNumber={card.serialNumber} />;
          })}
      </Grid>
    </>
  );
}
