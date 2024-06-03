// import React, { useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { hideLoading, showLoading } from "../redux/features/alertSlice";
// import { setUser } from "../redux/features/userSlice";

// export default function ProtectedRoute({ children }) {
//     const dispatch = useDispatch()
//     const { user } = useSelector(state => state.user)


//     //eslint-disable-next-line
//     const getUser = async () => {
//         try {
//             dispatch(showLoading());
//             const res = await axios.post(
//                 '/api/v1/user/getUserData',
//                 { token: localStorage.getItem('token') },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem('token')}`,
//                     },
//                 }
//             )
//             dispatch(hideLoading())
//             if (res.data.success) {
//                 dispatch(setUser(res.data.data));
//             } else {
//                 <Navigate to="/login" />;
//                 localStorage.clear()
//             }
//         } catch (error) {
//             dispatch(hideLoading());
//             localStorage.clear();
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         if (!user) {
//             getUser();
//         }
//     }, [user, getUser]);

//     if (localStorage.getItem("token")) {
//         return children;
//     } else {
//         return <Navigate to="/login" />;
//     }
// }



// import React, { useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { hideLoading, showLoading } from "../redux/features/alertSlice";
// import { setUser } from "../redux/features/userSlice";

// export default function ProtectedRoute({ children }) {
//     const dispatch = useDispatch();
//     const { user } = useSelector(state => state.user);

//     const getUser = async () => {
//         try {
//             dispatch(showLoading());
//             const res = await axios.post(
//                 '/api/v1/user/getUserData',
//                 { token: localStorage.getItem('token') },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem('token')}`,
//                     },
//                 }
//             );
//             dispatch(hideLoading());
//             if (res.data.success) {
//                 dispatch(setUser(res.data.data));
//                 // Store user ID in session storage
//                 sessionStorage.setItem('userId', res.data.data._id);
//             } else {
//                 // Navigate to login page if user data retrieval fails
//                 <Navigate to="/login" />;
//                 localStorage.clear();
//             }
//         } catch (error) {
//             dispatch(hideLoading());
//             localStorage.clear();
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         if (!user) {
//             getUser();
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [user]); // Include only 'user' in the dependency array
    

//     // Redirect to login page if token is not available
//     if (localStorage.getItem("token")) {
//         return children;
//     } else {
//         return <Navigate to="/login" />;
//     }
// }


//  Navigate to login line is remove
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import { setUser } from "../redux/features/userSlice";

export default function ProtectedRoute({ children }) {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    const getUser = async () => {
        try {
            dispatch(showLoading());
            const res = await axios.post(
                '/api/v1/user/getUserData',
                { token: localStorage.getItem('token') },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            dispatch(hideLoading());
            if (res.data.success) {
                dispatch(setUser(res.data.data));
                // Store user ID in session storage
                sessionStorage.setItem('userId', res.data.data._id);
            } else {
                // Navigate to login page if user data retrieval fails
                //<Navigate to="/login" />;
                localStorage.clear();
            }
        } catch (error) {
            dispatch(hideLoading());
            localStorage.clear();
            console.error(error);
        }
    };

    useEffect(() => {
        if (!user) {
            getUser();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]); // Include only 'user' in the dependency array
    

    // Redirect to login page if token is not available
    if (localStorage.getItem("token")) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
}