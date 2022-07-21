import React from "react";
import productsActions from "../redux/actions/productsActions";

export default function UploadProduct(){
    const [files, setFiles]=useState()

    async function handleSubmit(event){
        event.preventDefault()

        const file = await files[0]
        console.log(files)
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

            // props.uploadProduct(formData)
            //hay que despachar FORMDATA para desestructurar, creo
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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