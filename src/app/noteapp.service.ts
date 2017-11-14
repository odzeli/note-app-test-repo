import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteappService {

  constructor(private http: HttpClient) {}
  private noteUrl = 'api/users/';

  getUser(id: string): Promise<any> {
    return this.http.get(this.noteUrl + id)
    .toPromise()
    .then(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }

}
