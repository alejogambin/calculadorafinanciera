import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

export interface GuardadUbicacion {
    latitude: number;
    longitude: number;
    accuracy: number;
    timestamp: number;
}

@Injectable({
    providedIn: 'root'
})
export class GuardadubicacionStorageService {
    private storagekey = 'ubicacion_gps';

    private getStoragekey(usuario: string): string {
        return `${this.storagekey}_${usuario}`;
    }
    async guardarUb(usuario: string, ubicacion: object): Promise<void> {
        const key = this.getStoragekey(usuario);
        await Preferences.set({
            key: key,
            value: JSON.stringify(ubicacion)
        });
    }

    async obtnerUb(usuario: string): Promise<GuardadUbicacion[]> {
        const key = this.getStoragekey(usuario);
        const { value } = await Preferences.get({ key: key });
        return value ? JSON.parse(value) : [];
    }
}