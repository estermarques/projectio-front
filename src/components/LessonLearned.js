import './LessonLearned.css';

function LessonLearned(props) {
  return (
    <table className="lesson-learned">
      <tr>
        <th className="lesson-learned-titles">Desafio:</th>
        <td className="lesson-learned-fields">{props.challenge}</td>
      </tr>
      <tr>
        <th className="lesson-learned-titles">Solução:</th>
        <td className="lesson-learned-fields">{props.solution}</td>
      </tr>
      <tr>
        <th className="lesson-learned-titles">Links para estudo:</th>
        <td className="lesson-learned-fields">{props.studyLinks}</td>
      </tr>
    </table>
  );
}

export default LessonLearned;