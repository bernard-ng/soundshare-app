import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { File } from '../models/file.model'

@Injectable({
    providedIn: 'root'
})
export class BackendService {

    private readonly endpoint = 'http://localhost:3000'

    constructor(private http: HttpClient) {
    }

    getFolders(): Observable<File[]> {
        return this.http.get<File[]>(`${this.endpoint}/music`)
    }

    getFiles(folder: string): Observable<File[]> {
        return this.http.get<File[]>(`${this.endpoint}/music/${folder}`)
    }

    getFile(folder: string, hash: string): Observable<File> {
        return this.http.get<File>(`${this.endpoint}/music/${folder}/${hash}`)
    }
}
