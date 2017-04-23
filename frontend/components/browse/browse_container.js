import { connect } from 'react-redux';
import { logout } from '../../actions/browse_actions';
import Browse from './browse';

const mapStateToProps = (state, ownProps) => ({
  path: ownProps.route.path
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
