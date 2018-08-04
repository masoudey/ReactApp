import { connect } from "react-redux";
import { loginSuccess, logout } from "../actions/userActions";

const tokenVerification = () => {
    const headers = JSON.parse(localStorage.getItem('headers'));
        const { dispatch } = this.props;
        if (headers && headers['x-auth-token']) {
            const token = headers['x-auth-token'];
            console.log("headers exist", token);
            jwt.verify(token, 'my-secret', function(err, decoded) {
                if (decoded) {
                    const user = JSON.parse(localStorage.getItem('user'));
                    dispatch(loginSuccess(user));
                    console.log(decoded);
                }else {
                    console.log("not decoded", err)
                    if (err.name === "TokenExpiredError") {
                        dispatch(logout());
                        console.log("TokenExpiredError");
                    }
                }
              });
        }
}
const mapStateToProps = (state) => {
    const {entities: {users}, reducers: {logedinUser} } = state;
    const user = users[logedinUser.data];
    return {
        user,
    }
}
const connectedAuth = connect(mapStateToProps)(tokenVerification);
export {connectedAuth as tokenVerification};