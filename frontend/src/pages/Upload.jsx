import React from "react";
import adminActions from "../redux/actions/adminActions"
import { useState, useEffect } from "react";
import productsActions from '../redux/actions/productsActions'
import "../styles/upload.css"
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Rating from "@mui/material/Rating";
import { RiLeafFill } from "react-icons/ri";

export default function Uplaod() {
    const dispatch = useDispatch()
    const [files, setFiles] = useState([])
    const [value, setValue] = useState(0)
    console.log(value)
    useEffect(() => {
        dispatch(productsActions.getProducts());
    }, []);
    const products = useSelector((store) => store.productsReducer.products);

    const allCateg = products.map((item) => item.category);
    const cleanCats = [...new Set(allCateg)];

    async function handleSubmit(event) {
        event.preventDefault()

        const file = await files[0]
        const name = await event.target[0].value
        const description = await event.target[1].value
        const price = await event.target[2].value
        const stock = await event.target[3].value
        console.log(event.target[4].value)
        const category = await event.target[10].value
        console.log(file, name, description)
        if (!name || !file || !description || !price || !stock || !category || !value) {
            toast.error('You must complete all the fields!')
        } else {

            const formData = new FormData()
            formData.append("name", name)
            formData.append("description", description)
            formData.append("price", price)
            formData.append("stock", stock)
            formData.append("sustainable", value)
            formData.append("category", category)
            formData.append("file", file)
            console.log(formData)
            console.log(name)
            console.log(description)
            console.log(price)

            console.log(stock)
            console.log(category)
            console.log(file)

            dispatch(adminActions.uploadProduct(formData))
                .then(res => {
                    if (res.data.success) {
                        toast.success(res.data.message, {
                            duration: 3000,
                        })
                    }
                })

        }

    }

    return (
        <div className="asd">
            <form onSubmit={handleSubmit} method="post">
                <div>
                    <input name="name" placeholder="name" type="text" required />
                </div>
                <div>
                    <input name="description" placeholder="description" type="text" required />
                </div>
                <div>
                    <input name="price" placeholder="price" type="text" required />
                </div>
                <div>
                    <input name="stock" placeholder="stock" type="number" required />
                </div>
                <div>
                    <Rating name="sustainable" value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        icon={<RiLeafFill fontSize="inherit" color="green" />}
                        emptyIcon={<RiLeafFill fontSize="inherit" />}
                    />
                </div>
                <div>

                    <p>Category:</p>
                    <select required >
                        {cleanCats.map((item, i) => {
                            return <option key={i}>{item}</option>;
                        })}
                    </select>

                </div>
                <div>
                    <input required onChange={(event) => setFiles(event.target.files)} name="photo" placeholder="photo" type="file" />
                </div>
                <div>
                    <button type="submit">Upload</button>
                </div>
            </form>
        </div>
    );
}