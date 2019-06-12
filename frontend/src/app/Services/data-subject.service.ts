import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class DataSubjectService {

  private hostServer = environment.hostServer
  private host = this.hostServer + '/rest/user'

  constructor (private http: HttpClient) { }

  erase (params) {
    return this.http.post(this.host + '/erasure-request', params).pipe(catchError(error => { throw error })
    )
  }

  dataExport (params) {
    return this.http.post(this.hostServer + '/rest/data-export/', params).pipe(catchError((err) => { throw err }))
  }
}
