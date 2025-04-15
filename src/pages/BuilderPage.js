import { Col, Input, Row } from 'antd';

import OptionSection from '../components/OptionSection';
import PreviewSection from '../components/PreviewSection';
import MainLayout from '../layouts/MainLayOut';

function BuilderPage() {
  return (
    <MainLayout selectedKeys={['builder']}>
      <Row>
        <Col flex="auto">
          <Input placeholder="설문 제목을 입력해주세요." />
          <PreviewSection />
        </Col>
        <Col flex="350px">
          <OptionSection />
        </Col>
      </Row>
    </MainLayout>
  );
}

export default BuilderPage;
