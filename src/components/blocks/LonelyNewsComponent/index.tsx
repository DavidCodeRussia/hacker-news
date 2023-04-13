import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetLonelyNewsQuery } from "../../../API/apiSlice";
import { TNews } from "./types";
import { unixTimeConverter } from "../../../utils/unixTimeConverter";
import ChildComent from "../ChildComent";
import s from "./LonelyNewsComponent.module.scss";

const LonelyNewsComponent = () => {
  const { id } = useParams();
  const { data } = useGetLonelyNewsQuery(id && +id);
  const [news, setNews] = useState<TNews>();
  const [open, setOpen] = useState(false);
  //@ts-ignore
  let formattedTime = unixTimeConverter(news?.time);

  useEffect(() => {
    //@ts-ignore
    setNews(data);
  }, [data]);

  let countResponses: string | null = null;
  switch (news?.kids?.length) {
    case 1:
      countResponses = "Ответ";
      break;
    case 2:
      countResponses = "Ответа";
      break;
    default:
      countResponses = "Ответов";
  }

  return (
    <>
      {news && (
        <div className={s.wrapperLonelyNews}>
          <div className={s.lonelyNews}>
            <div>
              <b>Ссылка на источник:</b>{" "}
              {news.url ? (
                <a href={`${news.url}`} target={"_blank"}>
                  {news.url}
                </a>
              ) : (
                <span>Не указано</span>
              )}
            </div>
            <div>
              <b>Заголовок: </b>
              {news.title ? news.title : <span>Не указано</span>}
            </div>
            <div>
              <b>time:</b>
              <span>{formattedTime}</span>
            </div>
            <div>
              <b>Автор:</b> {news.by}
            </div>
            <div>
              <b>Комментарий:</b> {news?.text ? news?.text : <span>Не указано</span>}
            </div>

            {Array.isArray(news?.kids) && (
              <>
                <div>
                  <b>Кол-во комментариев:</b> {news?.kids?.length}
                </div>

                <div className={s.comments} onClick={() => setOpen((prev) => !prev)}>
                  <div className={s.commentsSvgWrapper}>
                    <svg
                      className={open ? "" : s.rotated}
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className={s.commentsResponseWrapper}>
                    <b>{news?.kids?.length}</b>
                    <b>{countResponses}</b>
                  </div>
                </div>
                {open &&
                  news.kids.map((item) => <ChildComent className={s.commentsChilds} id={item} />)}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LonelyNewsComponent;
