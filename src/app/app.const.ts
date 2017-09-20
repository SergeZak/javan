export class Consts {
    EndPoint: string = 'http://139.59.164.38:7070/';
    // EndPoint: string = 'http://api.beta.javanvideo.com/';
    APIs: any = {
        'Movies': {
            'GetAll': this.EndPoint + 'movies'
        },
        'Series': {
            'GetAll': this.EndPoint + 'series'
        },
        'TvShows': {
            'GetAll': this.EndPoint + 'tvshows'
        },
         'LiveTV': {
            'GetAll': this.EndPoint + 'livetv'
        },
        'Images': {
            'GetImage': this.EndPoint + 'images/'
        }

    }
}
