import { Parser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
private compartirDatos!:any;
public setCompartirDatos(data:any,keyword:string){
  localStorage.setItem(keyword,JSON.stringify(data));
  console.log('dato enviado:'+data);
}
public getCompartirDatos(): FormBuilder {
  const data=localStorage.getItem('DATOS');
  console.log('dato recibido:'+data);
  return data ? JSON.parse(data):null ;
}
  constructor() { }
}