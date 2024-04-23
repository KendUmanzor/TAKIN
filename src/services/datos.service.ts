import { Parser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
private compartirDatos!:any;
public setCompartirDatos(data:any,keyword:string): void{
  localStorage.setItem(keyword,JSON.stringify( data));
  console.log('dato enviado:'+data);
}
public getCompartirDatos(x:string): FormBuilder {
  const data=localStorage.getItem(x);
  console.log('dato recibido:'+data);
  return data ? JSON.parse(data):null ;
}
public deleteBorrarDatos(){
   localStorage.clear();
}
  constructor() { }
}
