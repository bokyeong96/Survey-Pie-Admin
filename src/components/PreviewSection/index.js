import { useDispatch, useSelector } from 'react-redux';

import AddButton from '../AddButton';
import Body from '../Body';
import Card from '../Card';

function PreviewSection({
  addQuestion,
  moveUpQustion,
  moveDownQuestion,
  deleteQuestion,
}) {
  const questions = useSelector((state) => state.survey.data?.questions || []);

  /* 
              addQuestion={(type) => {
              dispatch(addQuestion(type));
            }}
            moveUpQuestion={(index) => {
              if (index === 0) {
                return;
              }
              dispatch(moveUpQuestion(index));
            }}
            moveDownQuestion={(index) => {
              if (index === survey.questions.length - 1) {
                return;
              }
              dispatch(moveDownQuestion(index));
            }}
            deleteQuestion={(index) => {
              dispatch(deleteQuestion(index));
            }}
  
  */
  return (
    <div>
      {questions.map((question, index) => (
        <Card
          key={index}
          title={question.title}
          desc={question.desc}
          onUpButtonClick={() => moveUpQustion(index)}
          onDownButtonClick={() => moveDownQuestion(index)}
          onDeleteButtonClick={() => deleteQuestion(index)}
        >
          <Body type={question.type} options={question.options} />
        </Card>
      ))}
      <AddButton addQuestion={addQuestion} />
    </div>
  );
}

export default PreviewSection;
