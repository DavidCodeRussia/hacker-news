import React, { useEffect } from 'react';
import { useGetLonelyNewsQuery } from '../../../API/apiSlice';
import { unixTimeConverter } from '../../../utils/unixTimeConverter';

import s from './ChildComent.module.scss';

const ChildComent = ({
  id,
  className,
  isSuccess,
}: {
  id: number;
  className: string;
  isSuccess: boolean;
}) => {
  const { data, refetch } = useGetLonelyNewsQuery(id && id);
  //@ts-ignore
  const time = unixTimeConverter(data?.time);

  useEffect(() => {
    refetch();
  }, [isSuccess, refetch]);

  return (
    <>
      <div className={(s.childComponentWrapper, className)}>
        <div className={s.firstSection}>
          <div className={s.title}>{data?.by}</div>
          <div className={s.time}>{time}</div>
        </div>
        <div className={s.comment}>{data?.text}</div>
      </div>
    </>
  );
};

export default ChildComent;
