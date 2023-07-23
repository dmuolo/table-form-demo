import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockData } from '../../data/mockData';

interface Props {}

const TableView: FC<Props> = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    const foundData = mockData.find(data => data.id === id);

    foundData ? setFormData(foundData) : setFormData(null);
  }, [id]);

  return (
    <>
      <h1>{formData ? JSON.stringify(formData).toString() : 'Hello'}</h1>
    </>
  );
};

export default TableView;
