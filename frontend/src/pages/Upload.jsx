import React from "react";
import adminActions from "../redux/actions/adminActions"
import { useState } from "react";
import "../styles/upload.css"
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function Uplaod(){
    const dispatch = useDispatch()
    const [files, setFiles]=useState()

    async function handleSubmit(event){
        event.preventDefault()

        const file = await files[0]
        // console.log(file)
        const name = await event.target[0].value
        const description = await event.target[1].value
        const price = await event.target[2].value
        const category = await event.target[3].value

        const formData = new FormData()
            formData.append("name", name)
            formData.append("description", description)
            formData.append("price", price)
            formData.append("category", category)
            formData.append("file", file)
        console.log(formData)

        // const formData = {
        //     file: file,
        //     name: name,
        //     description: description,
        //     price: price,
        //     category: category
        // }
        // console.log(formData)

        dispatch(adminActions.uploadProduct(formData))
        .then(res => {
            if (res.data.success) {
                toast.success(res.data.message, {
                duration: 3000,
                })
            }
        })
        
            // props.uploadProduct(formData)
            //hay que despachar FORMDATA para desestructurar, creo
    }

    return (
        <div className="asd">
            <form onSubmit={handleSubmit} method="post">
                <div>
                    <input name="name" placeholder="name" type="text"/>
                </div>
                <div>
                    <input name="description" placeholder="description" type="text"/>
                </div>
                <div>
                    <input name="price" placeholder="price" type="text"/>
                </div>
                <div>
                    <input name="category" placeholder="category" type="text"/>
                </div>
                <div>
                    <input onChange={(event)=>setFiles(event.target.files)} name="photo" placeholder="photo" type="file"/>
                </div>
                <div>
                    <button type="submit">Upload</button>
                </div>
            </form>
        </div>
    );
}