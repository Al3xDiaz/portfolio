// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IUser } from '@/models/user'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IUser>
) {
  const {user} = req.query
  res.status(200).json({
    "username": "al3xdiaz",
    "email":"alexleonel96@hotmail.com",
    "first_name": "alex",
    "last_name": "diaz",
    "is_active": true,
    "date_created": "2021-12-24",
    "phone_number": "+1234567890",
    "profile": {
        "name": "Alex Diaz",
        "jobs":"(Backend, Frontend, Dba, Sre)",
        "age": 25,
        "biography": [
            "Nacìo el 22 de noviembre de 1996, en San Pedro Sula, Cortes, Honduras. Hijo de Jose Anael Diaz Guevara y Mirian Suyapa Sierra Villamil.\r",
            "Realizo sus estudios en la escuela Dionisio de Herrera, en el colegio Jose Trinidad Reyes reciviendo asi el Título de BTP en Informatica. En la fecha 03/2019, inicio los Cursos por parte del convenio de la Asosiacion Hondureña de Maquiladores (AHM) y la Fundacion Nacional para el Desarrollo de Honduras (FUNADEH) llamado Academia de Programadores. Participando asi en la segunda promocion.\r",
            "Para Ingresar en el proyecto anterior, realizo varias pruebas y filtros. Donde recibio una certificacion MTA y MOS.\r",
            "En la Actualidad estudia en la Universidad Autonoma De Honduras, Ubicada en el valle de sula (UNAH-VS). A su vez recibe cursos en una plataforma en linea llamada Platzi.\r",
            "Alex a sus 25 años de edad, tiene pasion por la Fisica (Astronomia, el mundo sub-atòmico, termodinamica, etc), Tecnologia, Matematica,Comedia, Ciencia Ficcion, fantasia, literatura, etc."
        ],
        "image": "https://res.cloudinary.com/dd7jrtxu5/image/upload/v1/media/images/users/profile/imagen_cjbso3_kyyu3y",
        "images_profile": [
            "https://res.cloudinary.com/dd7jrtxu5/image/upload/v1/media/images/users/profile/imgs_extra/imagen_cjbso3_itah5l",
            "https://res.cloudinary.com/dd7jrtxu5/image/upload/v1/media/images/users/profile/imgs_extra/imagen_cjbso3_itah5l",
            "https://res.cloudinary.com/dd7jrtxu5/image/upload/v1/media/images/users/profile/imgs_extra/imagen_cjbso3_itah5l",
        ],
        "time_line_profile": [
            {
                year: 2022,
                comment: "hola 2022 a nu ma si ens lfhjsdlfldsjfljslafdlsjflds dsjflkjdslfj lsdjfldsjlf dslfdsjflsdlfjds fjdlsjflslfl",
                title:'Saludos',
                icon: "AiFillHeart",
                profile: 1
            },
            {
                year: 2021,
                comment: "hola 2022 a nu ma si ens lfhjsdlfldsjfljslafdlsjflds dsjflkjdslfj lsdjfldsjlf dslfdsjflsdlfjds fjdlsjflslfl",
                title:'Saludos',
                icon: "AiFillHeart",
                profile: 1
            },
        ],
        // "time_line_profile":[]
    },
    "social_media":{
        "linkedin":"al3xdiaz",
        "github":"al3xdiaz",
        "gitlab":"",
        "instagram":"",
        "facebook":""
    },
    "education":[
        "Platzi",
        "UNAH-vs(Ingenieria en sistemas)"
    ],
    "experiencie":[
        {
            "title":"Backend Developer",
            "company":"SignsCloud",
            "date_from":"oct-2021",
            "date_to":"-",
            "description":"lorem ipsun"
        }
    ],
    "areas":[
        {
            "title":"Backend",
            "badges":[
                "C#",
                "Node js",
                "Python",
                "Java"
            ]
        },
        {
            "title":"Frontend",
            "badges":[
                "html, css y js",
                "React js",
                "Vue js"
            ]
        }
    ],
    "is_client": true,
    "user_created": null
})
}
