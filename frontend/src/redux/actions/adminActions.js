import axios from "axios";
const urlBack = "http://localhost:4000";

const adminActions = {
        uploadProduct: (newProduct) => {
            const token = localStorage.getItem("token")
            return async (dispatch, getState) => {
                const res = await axios.post(`${urlBack}/api/products/upload`, newProduct,
                {headers: {
                    Authorization: "Bearer "+token
                }
            })
            console.log(res)
            dispatch({
                type: "message",
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },

    deleteProduct: (id) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post(`${urlBack}/api/products/delete/${id}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },

    modifyComment: (product) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.put(`${urlBack}/api/products/modify`, { product }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },
}

export default adminActions;