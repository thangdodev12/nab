import './styles.css';
import loadingImg from './loading.gif';

const Loading = () => (
  <div className="loading">
    <img src={loadingImg} alt="loading" />
  </div>
);

export default Loading;