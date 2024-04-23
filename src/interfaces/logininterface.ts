export interface loginInterface {
    success: string;
    data:    Data;
    Error:string;
}

export interface Data {
    id:          number;
    nombre:      string;
    apellido:    string;
    persona_ptr: number;
    email:       string;
    password:    string;
}
