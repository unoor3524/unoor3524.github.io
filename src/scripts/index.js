import '../styles/index.scss';
import '../styles/partypop.scss';
import App from '../scripts/app';


if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

App();