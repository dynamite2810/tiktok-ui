import './GlobalStyles.scss';
import Proptypes from 'prop-types';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: Proptypes.node.isRequired,
};

export default GlobalStyles;
