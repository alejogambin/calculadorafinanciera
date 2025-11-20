import {Injectable} from '@angular/core';
import {Preferences} from '@capacitor/preferences';

export interface FotoCamara{
    nombreArchivo: string;
    rutaArchivo: String;
    fechaCaptura: Date;
    base64Data?: string; 
}

@Injectable({
    providedIn : 'root'
})
export class FotocamaraStorageService {
    private storagekey ='fotos_camara';

    private getStoragekey(usuario: string):string{
        return `${this.storagekey}_${usuario}`;
    }
    async guardarFoto(usuario: string, foto: object): Promise<void>{
        const key = this.getStoragekey(usuario);
        await Preferences.set({
            key: key,
            value: JSON.stringify(foto)
        });
    }

    async obtnerFotos(usuario: string): Promise<FotoCamara[]>{
        const key = this.getStoragekey(usuario);
        const {value}= await Preferences.get({key:key});
        return value ? JSON.parse(value):[];
    }
}