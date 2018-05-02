import {  HttpClient  } from '@angular/common/http';
import {  Injectable  } from '@angular/core';
import  'rxjs/add/operator/map';


@Injectable()
export class UsersService {

    constructor(private http: HttpClient) {}

    getUsers () {
      return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
        .map(response => response.results)
          .map(users => {
            return users.map(u => {
              return {
                 name: u.name.title + ' ' + u.name.first + '  ' + u.name.last,
                image: u.picture.large,
                 geo: 'City ' + u.location.city + ' ' + 'State ' + u.location.state + ' ' + 'Street ' + u.location.street
            };
          });
        });
    }
  }


