import axios from 'axios';

function putSurvey(survey) {
  axios
    .put(`/surveys/${survey.id}`, survey) //설문수정
    .then(() => alert('저장되었습니다.'));
}

export default putSurvey;

//GET: 일반적으로 데이터를 가져올때
//POST: 데이터를 저장할때 (생성)
//PUT: POST처럼 데이터를 저장하지만, 기존에 있는 데이터를 수정하는방식
//DELETE: 데이터 삭제하는 메소드
