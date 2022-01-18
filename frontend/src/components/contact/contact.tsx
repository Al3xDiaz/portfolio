import React from "react"; 
import {Card,CardTitle,CardBody} from "../card/card";
import Input from '../forms/input'

const Contact=()=>{
    return (
        <div>
            <Card>
                <CardTitle>Sugerencias y comentarios</CardTitle>
                <CardBody>
                    <Input id='name' displayName="Nombre"/>
                    <Input id='email' displayName="Email"/>
                </CardBody>
            </Card>
        </div>
    )
}

export default Contact;