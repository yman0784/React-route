import { useParams, useLocation, useHistory } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const history = useHistory();

  const onClickBackToTop = () => history.push("/");
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>URL パラメーターは{id}です</p>
      <p>Query パラメーター{query.get("name")}です</p>
      <button onClick={onClickBackToTop}>TOPに戻る</button>
    </div>
  );
};
