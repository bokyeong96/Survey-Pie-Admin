import { Button, Table } from 'antd';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useSWR from 'swr';

import MainLayout from '../layouts/MainLayOut';
import fetcher from '../lib/fetcher';
import deleteSurvey from '../services/deleteSurvey';

const PAGE_SIZE = 20;

function ListPage() {
  const { data, error, mutate } = useSWR(
    '/surveys?_sort=id&_order=desc',
    fetcher,
  ); //mutate는 '/surveys?_sort=id&_order=desc' 에대해서 다시 검증하라 라는 명령을 보내는
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const columns = useMemo(
    () => [
      {
        title: '번호',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '제목',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '생성일',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (createdAt) => {
          const time = new Date(createdAt);

          return `${time.getFullYear()}-${
            time.getMonth() + 1
          }-${time.getDate()}`;
        },
      },
      {
        title: '액션',
        dataIndex: 'id',
        key: 'action',
        render: (id) => {
          return (
            <Button
              danger //빨갛게 보여지는 삭제버튼
              onClick={(e) => {
                deleteSurvey(id).then(() => mutate());

                e.stopPropagation();
                e.preventDefault();
              }}
            >
              삭제
            </Button>
          );
        },
      },
    ],
    [mutate],
  );

  if (error) {
    return 'error';
  }

  if (!data) {
    return 'loading...';
  }

  return (
    <MainLayout selectedKeys={['list']}>
      <CreateButtonWrapper>
        <Button onClick={() => navigate('/builder')}>
          새로운 설문조사 생성
        </Button>
      </CreateButtonWrapper>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              navigate(`/builder/${record.id}`);
            },
          };
        }}
        pagination={{
          total: data.length,
          current: page,
          pageSize: PAGE_SIZE,
        }}
        onChange={(pagination) => {
          setPage(pagination.current);
        }}
        columns={columns}
        dataSource={data.map((item) => ({ ...item, key: item.id }))}
      />
    </MainLayout>
  );
}

const CreateButtonWrapper = styled.div`
  text-align: right;
  margin-bottom: 25px;
`;

export default ListPage;
