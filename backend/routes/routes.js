const express = require('express');
const router = express.Router();
const { json } = require('express');
let data=[
  {
    "ID": "123456123asd1457890",
    "nombre": "Juan",
    "apellido": "Pérez",
    "correo": "juanperez@user.com",
    "genero": "Masculino",
    "oficio1": "Carpintero",
    "oficio2": "Albañil",
    "contraseña": "contrase123asd145ña123",
    "edad": 30,
    "ubicacion": "Tegucigalpa, Francisco Morazán"
},
{
    "ID": "23456123asd14578901",
    "nombre": "María",
    "apellido": "López",
    "correo": "marialopez@user.com",
    "genero": "Femenino",
    "oficio1": "Maquiladora",
    "oficio2": "Pintor",
    "contraseña": "contrase123asd145ña456",
    "edad": 25,
    "ubicacion": "San Pedro Sula, Cortés"
},
{
    "ID": "345123asd1456789012",
    "nombre": "Pedro",
    "apellido": "García",
    "correo": "pedrogarcia@user.com",
    "genero": "Masculino",
    "oficio1": "Albañil",
    "oficio2": "Carpintero",
    "contraseña": "contras123asd145eña789",
    "edad": 35,
    "ubicacion": "La Ceiba, Atlántida"
},
{
    "ID": "45678123asd14590123",
    "nombre": "Ana",
    "apellido": "Martínez",
    "correo": "anamartinez@user.com",
    "genero": "Femenino",
    "oficio1": "Maquiladora",
    "oficio2": "Costurera",
    "contraseña": "contras123asd145eñaabc",
    "edad": 28,
    "ubicacion": "Choloma, Cortés"
},
{
    "ID": "5678123asd145901234",
    "nombre": "Luis",
    "apellido": "Hernández",
    "correo": "luishernandez@user.com",
    "genero": "Masculino",
    "oficio1": "Albañil",
    "oficio2": "Electricista",
    "contraseña": "contraseñ123asd145a567",
    "edad": 32,
    "ubicacion": "Comayagua, Comayagua"
},
{
    "ID": "678901123asd1452345",
    "nombre": "Rosa",
    "apellido": "Gómez",
    "correo": "rosagomez@user.com",
    "genero": "Femenino",
    "oficio1": "Carpintero",
    "oficio2": "Albañil",
    "contraseña": "contraseña123asd145890",
    "edad": 27,
    "ubicacion": "Danlí, El Paraíso"
},
{
    "ID": "789012123asd1453456",
    "nombre": "Javier",
    "apellido": "Ramírez",
    "correo": "javierramirez@user.com",
    "genero": "Masculino",
    "oficio1": "Albañil",
    "oficio2": "Pintor",
    "contraseña": "contraseña12123asd14534",
    "edad": 30,
    "ubicacion": "Santa Rosa de Copán, Copán"
},
{
    "ID": "890123123asd1454567",
    "nombre": "Carmen",
    "apellido": "Torres",
    "correo": "carmentorres@user.com",
    "genero": "Femenino",
    "oficio1": "Maquiladora",
    "oficio2": "Costurera",
    "contraseña": "contraseña567123asd1458",
    "edad": 26,
    "ubicacion": "La Lima, Cortés"
},
{
    "ID": "90123123asd14545678",
    "nombre": "David",
    "apellido": "Hernández",
    "correo": "davidhernandez@user.com",
    "genero": "Masculino",
    "oficio1": "Albañil",
    "oficio2": "Carpintero",
    "contraseña": "contrase123asd145ña9012",
    "edad": 35,
    "ubicacion": "Tela, Atlántida"
},
{
    "ID": "01234123asd14556789",
    "nombre": "Elena",
    "apellido": "García",
    "correo": "elenagarcia@user.com",
    "genero": "Femenino",
    "oficio1": "Carpintero",
    "oficio2": "Albañil",
    "contraseña": "contras123asd145eña3456",
    "edad": 29,
    "ubicacion": "Juticalpa, Olancho"
},
{
    "ID": "23456123asd14578901",
    "nombre": "Ricardo",
    "apellido": "Mendoza",
    "correo": "ricardomendoza@user.com",
    "genero": "Masculino",
    "oficio1": "Maquiladora",
    "oficio2": "Costurera",
    "contraseña": "contraseña123asd1456789",
    "edad": 27,
    "ubicacion": "El Progreso, Yoro"
},
{
    "ID": "3456789123asd145012",
    "nombre": "Daniel",
    "apellido": "Sánchez",
    "correo": "danielsanchez@user.com",
    "genero": "Masculino",
    "oficio1": "Albañil",
    "oficio2": "Electricista",
    "contraseña": "contraseña2123asd145345",
    "edad": 33,
    "ubicacion": "La Entrada, Copán"
},
{
    "ID": "4567821412490123",
    "nombre": "Sofía",
    "apellido": "Martínez",
    "correo": "sofiamartinez@user.com",
    "genero": "Femenino",
    "oficio1": "Maquiladora",
    "oficio2": "Pintor",
    "contraseña": "contraseña6214124789",
    "edad": 26,
    "ubicacion": "Villanueva, Cortés"
},
{
    "ID": "56789012214124234",
    "nombre": "Carlos",
    "apellido": "García",
    "correo": "carlosgarcia@user.com",
    "genero": "Masculino",
    "oficio1": "Carpintero",
    "oficio2": "Albañil",
    "contraseña": "contraseña1232141244",
    "edad": 31,
    "ubicacion": "Siguatepeque, Comayagua"
},
{
    "ID": "67890123422141245",
    "nombre": "Laura",
    "apellido": "Hernández",
    "correo": "laurahernandez@user.com",
    "genero": "Femenino",
    "oficio1": "Albañil",
    "oficio2": "Carpintero",
    "contraseña": "contraseña2141245678",
    "edad": 28,
    "ubicacion": "Santa Bárbara, Santa Bárbara"
},
{
    "ID": "789012345621412411",
    "nombre": "Alejandro",
    "apellido": "Gómez",
    "correo": "alejandrogomez@user.com",
    "genero": "Masculino",
    "oficio1": "Maquiladora",
    "oficio2": "Costurera",
    "contraseña": "contraseña9214124012",
    "edad": 29,
    "ubicacion": "Gracias, Lempira"
},
{
    "ID": "8901234567121412423",
    "nombre": "Lucía",
    "apellido": "Ramírez",
    "correo": "luciaramirez@user.com",
    "genero": "Femenino",
    "oficio1": "Albañil",
    "oficio2": "Pintor",
    "contraseña": "contraseña3456214124",
    "edad": 34,
    "ubicacion": "Ocotepeque, Ocotepeque"
},
{
    "ID": "9012345678213",
    "nombre": "Fernando",
    "apellido": "Torres",
    "correo": "fernandotorres@user.com",
    "genero": "Masculino",
    "oficio1": "Carpintero",
    "oficio2": "Albañil",
    "contraseña": "contraseña7890",
    "edad": 33,
    "ubicacion": "Puerto Cortés, Cortés"
},
{
    "ID": "0123456789123",
    "nombre": "Diana",
    "apellido": "Hernández",
    "correo": "dianahernandez@user.com",
    "genero": "Femenino",
    "oficio1": "Maquiladora",
    "oficio2": "Costurera",
    "contraseña": "contraseña1234",
    "edad": 31,
    "ubicacion": "El Paraíso, El Paraíso"
}
]
let contratos=[{
        'Titulo': 'Titulo',
        'Ubicacion':'Ubicacion',
        'Oficio':'Oficio',
        'Hora':'Hora',
        'Descripcion':'Descripcion'
},
] 

router.post('/buscar', (req, res) => {
    const dato = req.body.dato;
    const resultados = data.filter((element) =>(element.correo==dato)||(element.nombre == dato) ||(element.oficio1 == dato)||(element.oficio2 == dato) );
    console.log(resultados);
    res.status(200).send(resultados);
});

router.post('/mod',json(),(req, res)=> {
    let ID =req.body.nuevosDatos.id;
    console.log(ID)
    let nombre=req.body.nuevosDatos.nombre;
    let apellido=req.body.nuevosDatos.apellido;
    let oficio1=req.body.nuevosDatos.oficio1;
    let oficio2=req.body.nuevosDatos.oficio2;
    update(ID,nombre,apellido,oficio1,oficio2)
});

function update(id,nombre,apellido,oficio1,oficio2,){
    data.map(x=>{
    if (x.ID==id) {
    x.nombre=nombre;
    x.apellido=apellido;
    x.oficio1=oficio1;
    x.oficio2=oficio2;
}  
})
console.log(data)
};

router.post('/ceter',json(),(req, res)=> {
    console.log(req);
    let Titulo=req.body.nuevosDatos.datos.Titulo;
    let Ubicacion=req.body.nuevosDatos.datos.Ubicacion;
    let Oficio=req.body.nuevosDatos.datos.Oficio;
    let Hora=req.body.nuevosDatos.datos.Hora;
    let Descripcion=req.body.nuevosDatos.datos.Descripcion
    append(Titulo,Ubicacion,Oficio,Hora,Descripcion)
    console.log (contratos)
});
router.post('/buscar/contratos', (req, res) => {
    const dato = req.body.oficio;
    const resultados = contratos.filter((element) =>(element.Oficio==dato))
    res.status(200).send(resultados);
});

function append(Titulo,Ubicacion,Oficio,Hora,Descripcion){
    /*hoja = {
        'Titulo': Titulo,
        'Ubicacion':Ubicacion,
        'Oficio':Oficio,
        'Hora':Hora,
        'Descripcion':Descripcion
    };
    contratos.push(hoja);*/
    contratos.map(x=>{
        x.Titulo=Titulo;
        x.Ubicacion=Ubicacion;
        x.Oficio=Oficio;
        x.Hora=Hora;
        x.Descripcion=Descripcion})
    };

router.post('/registrarte', (req, res) => {
    let ID=req.body.nuevosDatos.datos.id;
    let nombre=req.body.nuevosDatos.datos.nombre;
    let apellido=req.body.nuevosDatos.datos.apellido;
    let correo=req.body.nuevosDatos.datos.correo;
    let genero=req.body.nuevosDatos.datos.genero;
    let oficio1=req.body.nuevosDatos.datos.oficio1;
    let oficio2=req.body.nuevosDatos.datos.oficio2;
    let contraseña=req.body.nuevosDatos.datos.contraseña;
    let edad=req.body.nuevosDatos.datos.edad;
    let ubicacion=req.body.nuevosDatos.datos.ubicacion;
    crear(ID,nombre,apellido,correo,genero,oficio1,oficio2,contraseña,edad,ubicacion);
});


function crear(ID,nombre,apellido,correo,genero,oficio1,oficio2,contraseña,edad,ubicacion){
    hoja = {
    "ID": ID,
    "nombre": nombre,
    "apellido": apellido,
    "correo":correo ,
    "genero": genero,
    "oficio1":oficio1 ,
    "oficio2": oficio2,
    "contraseña":contraseña ,
    "edad": edad,
    "ubicacion": ubicacion
    };

    data.push(hoja);


}
module.exports = router;